# 版本、构建产物与升级

本文确定发行时的文件规范；当前仍遵守 **2026-10-05 起暂停原生构建与旧包同步**。文档更新不修改用户已经安装的程序，也不会自动生成新安装包。

## 版本分层

| 层 | 版本与产物 | 变更原则 |
| --- | --- | --- |
| 客户端 | SemVer，例如 0.1.0；Windows NSIS 安装包 | UI、内置规则执行、原生能力或协议变化要重新构建 |
| 平台服务端 | 独立 SemVer，当前也是 0.1.0 | 明确支持的客户端版本与 API 能力；不能因数字相同就默认兼容 |
| 内容包 | packId + 自己的版本／修订 | 数据与附件更新，不携带任意执行代码；按系统与变体校验 |
| 世界 | schemaVersion + revision + 发布序号 | 属于用户数据，更新程序不覆盖它 |
| 文档 | 日期或 docs 版本 + 源码指纹 | 区分已实现接口、发行规范与待开发功能 |

当前产品名称为 `共坠群星_V0.1_TRPG在线跑团客户端`，界面品牌为“共坠群星”；Tauri identifier 仍是 `com.aelzerant.game`。不要为了重命名随意改 identifier，它关系到应用数据位置。当前桌面配置只启用了 NSIS 目标，不能宣称已提供 macOS、Linux、便携版或自动更新包。

## 一次发行的目录

以下是恢复发行后采用的目录规范，`<...>` 需要替换，文件只有真正构建并校验后才存在。

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

客户端的 `VITE_SERVER_URL` 是**构建时**配置；改变服务器环境变量不会修改已安装客户端。现有包未接入完整的签名 OTA、差分更新或远程 UI 插件系统。

## 服务端产物

当前 server 没有独立的 JavaScript 编译输出脚本。它使用 Node 22 + tsx 执行 TypeScript，且 contracts 的入口也是 `src/index.ts`。因此当前可部署产物要带：

- 同一快照的 `apps/server/src/`、server package.json。
- `packages/contracts/src/`、contracts package.json 及其所需 JSON 资源；不要只复制 index.ts。
- workspace 定义、锁文件和可重现的运行依赖（express、ws、tsx 及依赖闭包）。Linux 依赖在 Linux 或目标容器中准备，不能照搬 Windows node_modules。
- 发行 manifest、环境变量模板和运维说明；运行数据与真实密钥放在产物外。

若将来改成编译后的 JS／单文件产物，需要新增独立打包流水线，并验证动态导入、工作区引用和资源路径；这不是当前已经存在的 server build 功能。文档仓库本身不包含服务器源码，也不能直接启动游戏服务。

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
