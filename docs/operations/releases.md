# 版本、构建产物与升级

本文说明发行文件与版本边界。正式发行已在后续明确授权下恢复；版本与上线状态以本库首页及验证记录为准。文档更新不修改用户已经安装的程序，也不会自动生成新安装包。

## 版本分层

| 层 | 版本与产物 | 变更原则 |
| --- | --- | --- |
| 客户端 | SemVer，例如 0.1.0；Windows NSIS 安装包 | UI、内置规则执行、原生能力或协议变化要重新构建 |
| 平台服务端 | 以实际服务运行版本与发行清单为准；内部 package.json 版本不等于线上版本 | 明确支持的客户端版本与 API 能力；不能因数字相同就默认兼容 |
| 内容包 | packId + 自己的版本／修订 | 数据与附件更新，不携带任意执行代码；按系统与变体校验 |
| 世界 | schemaVersion + revision + 发布序号 | 属于用户数据，更新程序不覆盖它 |
| 文档 | 日期或 docs 版本 + 源码指纹 | 区分已实现接口、发行规范与待开发功能 |

当前产品名称与界面品牌为“千星奇域”，主程序仍沿用 `共坠群星` 文件名；Tauri identifier 仍是 `com.aelzerant.game`。不要为了重命名随意改 identifier，它关系到应用数据位置。当前桌面配置只启用了 NSIS 目标，不能据此宣称提供 macOS、Linux 或便携版；签名自动更新已有正式发行流程，实际可用附件以发布清单为准。

## 一次发行的目录

以下是发行资料的目录约定，`<...>` 需要替换，文件只有真正构建并校验后才存在。

```text
releases/<release-id>/
  release-manifest.json
  checksums.sha256
  CHANGELOG.md
  desktop/windows-x64/
    gongzhui-qunxing-<version>-windows-x64-setup.exe
  server/node22/
    gongzhui-qunxing-server-<version>.tar.gz
  content/<system-or-variant>/<pack-id>/<content-version>/
    manifest.json
    <经格式校验的资源文件>
  docs/
    documentation-<snapshot>.zip
  verification/
    compatibility.json
    checks.json
```

产物文件名使用稳定 ASCII，安装后的程序仍可用中文品牌。manifest 的结构见 [发行清单 Schema](../../release/release-manifest.schema.json)，[草稿示例](../../release/release-manifest.example.json) 不包含虚构的下载地址和哈希。`status=published` 必须有真实 SHA-256、字节数、平台及兼容信息，校验工具会拒绝空产物的 published 清单。

GitHub 文档仓库只托管文档、Schema、索引与原创示例。安装包、全量素材和运行数据不进入 Git 历史。GitHub Release 可以附带版本产物和发布说明；它与日常源码提交是不同层次。[GitHub Releases 官方说明](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases)

## 客户端构建要求

恢复发行时，在受控源码快照和锁定依赖上完成相关检查。桌面 build 当前会先同步规则书与 Wiki，再执行 TypeScript 和 Vite；这可能触碰生成文件，必须保护作者源稿和三方合并基线。Tauri 构建和 bundle 分别负责生成原生程序及分发格式，签名由发行账户单独配置，密钥不进入仓库。[Tauri 分发文档](https://v2.tauri.app/distribute/)

构建记录至少保留：应用版本、源码提交或工作区快照散列、锁文件散列、Node / pnpm / Rust / Tauri 工具版本、系统身份版本、实际检查结果、构建平台、产物大小和 SHA-256。不要以“预览能运行”代替安装、首次启动、旧世界恢复与联机兼容验收。

客户端的 `VITE_SERVER_URL` 是**构建时**配置；改变服务器环境变量不会修改已安装客户端。Windows 客户端已接入签名自动更新；本次发行校验安装包签名、更新清单及篡改拒绝。差分更新不在此能力范围内，资源包按散列复用。

## 服务端产物

当前 Windows 发行流程把服务端及主机管理入口打包为 Node 22 ESM 文件，并携带运行时、网页和资源清单；实际产物为 `server.mjs`、`windows-host.mjs`、`runtime/node.exe` 及配套部署文件。发行清单记录源码提交、文件大小与散列，服务端更新包与客户端版本必须配对。

原有资源和世界模板独立分发；相同散列直接复用，不随程序更新重复上传。发行产物不包含线上账号、世界数据或机密配置。文档仓库本身不包含服务端实现，不能直接启动游戏服务。

## 安装目录与数据目录

```text
/srv/gongzhui/
  releases/<server-version>/game/...   # 不可变程序
  current -> releases/<server-version>
/var/lib/gongzhui/                    # DATA_DIR，可持久写入
/etc/gongzhui/server.env              # 权限受限的真实配置
```

桌面存档、IndexedDB、作者 Wiki、原生 app_data/worlds、素材和自动备份都属于用户数据。清理旧安装包不等于清理这些目录。安装包版本保留“当前 + 三个可回退版本”；完整验证副本最多三个，按本项目既有政策执行。规则原稿、用户内容和备份不套用这个数量限制。

## 更新与回退流程

1. 在独立目录准备新产物；校验 manifest、哈希与客户端／服务器配对。
2. 提前安排停团窗口，让 GM 保存并导出完整私密世界。停止唯一服务写入进程后备份整个 DATA_DIR。
3. 启动新版本，检查 `/api/health` 的 `accounts-v1 / publications-v1 / multi-system-worlds-v1`，再检查登录、加入、信令、素材哈希与一份测试世界。
4. 通过后开放。失败时停止新进程，恢复旧程序及升级前完整数据副本；不能把已经被新格式写过的数据随意交给旧版本。
5. 记录回退点，确认无需再回退后才按保留策略整理旧构建。

当前没有跨进程数据库锁或热迁移服务，不能同时启动新旧服务共享 DATA_DIR，不能使用多 worker reload 实现“无感升级”。没有经过跨版本恢复测试的组合，应标为不支持。
