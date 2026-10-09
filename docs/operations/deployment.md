# 服务端部署

适用于当前 Express + ws + 文件存储服务。平台服务器负责账号、大厅社区、信令和素材；GM 客户端仍负责世界与战斗结算。本文模板按源码核对，尚未在真实 Linux 主机部署验收。

## 最小拓扑

```text
客户端 —— HTTPS / WSS :443 —— Nginx —— 127.0.0.1:3000 单个 Node 进程
                                      └—— 独立持久 DATA_DIR
玩家  ===== WebRTC（优先直连）===== GM 客户端
                  └—— TURN 中继为后续统一接线的兜底
```

建议先采用单台靠近玩家的服务器、单个 Node 22 进程和 SSD 持久卷。容量上限由世界数量、素材并发和状态文件大小实测决定；当前没有可引用的生产并发基准。增加 CPU 后直接起多个实例共享 state.json 会造成写入竞争。

## 环境配置

模板见 [server.env.example](../../deploy/server.env.example)。只复制到私有服务器，填写真实值。环境变量名全部来自当前源码。

| 变量 | 默认／要求 | 说明 |
| --- | --- | --- |
| NODE_ENV | 开发时不设；生产设 production | 生产强制启用腾讯验证码 |
| HOST | 开发127.0.0.1；生产0.0.0.0 | 同机反代建议显式127.0.0.1；容器内部用0.0.0.0 |
| PORT | 3000 | HTTP 与 WebSocket 同端口 |
| DATA_DIR | server 包旁 data | 生产用绝对路径，目录由服务账户持有 |
| CORS_ORIGINS | 本地1420与Tauri来源 | 逗号分隔，不插入多余空格；加上实际网页来源 |
| TRUSTED_PROXIES | 未设置 | 仅列真实反代来源；模板为 loopback |
| COMMUNITY_ADMIN_IDS | 空 | 公告／社区管理员玩家ID，逗号分隔；世界GM不自动拥有这个权限 |
| CAPTCHA_MODE | 生产tencent，其他none | production禁止none |
| CAPTCHA_APP_ID | tencent必需 | 可在认证配置接口返回的客户端验证码应用ID |
| CAPTCHA_APP_SECRET | tencent必需 | 服务端机密 |
| TENCENT_SECRET_ID | tencent必需 | 腾讯API身份，服务端保存 |
| TENCENT_SECRET_KEY | tencent必需 | 腾讯API密钥，服务端保存 |

账号 JSON 限额16KiB、普通JSON2MiB、快照64MiB；文件接口有更小的十进制上限。前置代理需允许最大的合法请求，应用继续做细分校验。不要把 64MiB 代理上限当作所有接口都可上传64MiB。

## 准备与启动

需要获得对应版本的授权游戏源码／服务端产物；克隆本**文档库**不包含这些代码。以下命令在游戏快照的 `game/` 目录执行，不在文档库根目录执行。

```sh
# 在目标 Linux 环境准备已有版本的 Node 22 和 pnpm，再安装锁定依赖。
# --prefer-offline 优先本地缓存；依赖仓库能直连时不要经过 VPN。
pnpm install --frozen-lockfile --prefer-offline --filter @aelzerant/server...
pnpm --filter @aelzerant/server check

# 本机人工核对。正式托管改用下方 systemd，二者不要同时启动。
cd apps/server
node --env-file=/etc/gongzhui/server.env --import tsx src/index.ts
```

部署产物可预装运行依赖，避免每次部署联网。完整工作区构建记录应保留锁文件；裁剪的服务端快照必须用匹配的依赖闭包，不能随意修改 lockfile 来跳过安装错误。

将 [systemd 示例](../../deploy/gongzhui.service) 调整为实际程序路径及专用账户。应用数据、配置文件和程序目录应分开授权；先创建目录和账户再启动服务。模板不自动创建系统账户，不会上传真实配置。

反代示例见 [Nginx](../../deploy/nginx.conf.example)。配置真实域名和证书后执行服务器上的 `nginx -t`，通过才 reload。WebSocket 必须转发 Upgrade/Connection 头，proxy 超时应覆盖30秒心跳。[Nginx 官方 WebSocket 文档](https://nginx.org/en/docs/http/websocket.html)

源仓库已有 Dockerfile，可作为备选，但文档库不包含它的源码依赖；按发行规范在目标平台构建后再验证。不要把此处模板视为已完成容器镜像发布。

## 首次上线验证

1. 健康检查返回当前能力标记，证书与网页来源正确；Node端口只供反代访问。
2. 在生产验证码配置下完成注册、登录、改昵称、退出／重新登录，核实匿名请求无法读取业务数据。
3. 用独立测试世界加入两名玩家，验证成员撤销、GM转交、信令重连和权限投影。
4. 上传一份无私密信息的小素材，下载后比对SHA-256；再验证超过限额、错误哈希和未加入账号被拒绝。
5. 停机备份，重启并验证账号、社区、世界目录、发布清单、共享媒体仍在。备份恢复至少演练一次。

本任务只发布文档和示例，没有代替这些真实环境验收。源码里的 smoke:signal / smoke:persist 应使用临时 DATA_DIR，不得对真实生产数据执行测试。

## 备份与事故处理

备份整个 DATA_DIR，包括 `state.json`、其备份文件、`community.json`、`publications/`、`media/`。state原子写只能保护单个文件，不能保证几个目录的热拷贝是同一时刻；当前最可靠的方式是停写后统一快照。

采用每日增量、每周完整副本与至少一份异机副本可作为初始运维政策，保留周期由运营者确定。保护其中的账号哈希、会话信息和GM快照，不公开上传。监控可用空间、备份年龄、恢复耗时；不要只监控进程是否存在。

主文件与备用文件都损坏时，服务拒绝启动。应保留故障副本、恢复确认完整的快照，不用空文件覆盖来强行开服。磁盘不足和发布冲突同样应先处理原因，再重试。
