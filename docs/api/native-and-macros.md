# 桌面原生接口与脚本宏

## Tauri 原生命令

以下是安装版内部的 `invoke` 接口，浏览器预览不能直接使用。应用句柄由 Tauri 注入，JavaScript 参数采用 camelCase。返回的 Rust `Result` 错误会使 Promise 拒绝。

| 命令 | JavaScript 参数 | 成功返回 | 限制与用途 |
| --- | --- | --- | --- |
| `backup_wiki_books` | `playerId:string, payload:string` | 备份路径 string | payload 是 JSON 字符串；schemaVersion=1、books 数组；UTF-8 最多 60,000,000 字节；playerId 非空、最多 200 字节 |
| `world_asset_root` | `worldId:string` | 世界附件绝对目录 string | worldId 非空、最多 160 字节，只允许 ASCII 字母数字、`-`、`_` |
| `world_asset_write` | `worldId, path:string, offset:number, bytes:number[], done:boolean` | void | 每次最多 1,048,576 字节；总长度与 offset 不超过 64,000,000；offset 必须匹配已写长度 |
| `world_asset_read` | `worldId, path:string, offset:number` | number[] | 每次最多读取 1,048,576 字节；到文件尾返回空数组 |

文件位于应用数据目录的 `worlds/<worldId>/`。可用 path 是 `catalog.json` 或 `assets/<分类>/<文件名>`；分类只有 `images / audio / video / models / documents`。文件名最多 80 字节，ASCII 字母数字与点，不能以点开头。目录及文件拒绝符号链接，不是任意文件系统读写 API。

写入先落在 `.upload` 临时文件，offset=0 开始新写入，done=true 才刷新并替换目标。失败后不能假设新版本已可读。bytes 是二进制字节数组，不是 base64 文本。

Wiki 备份在 `wiki-backups/<玩家ID的十六进制编码>/<时间戳>.aaf-wiki.json`。相同内容会复用最新备份；作者备份不会按安装包保留策略自动删除。以上接口没有远程 HTTP 对应物。

## 脚本宏可调用能力

`runScriptMacro(body, context, dispatch, options)` 执行当前获准的宏。context 含 `playerId`，可选 `actorId / sceneId / tokenId`；options 可提供 `args / callMacro / budget / signal`。源码入口 `apps/desktop/src/story/scriptMacro.ts`。

| 宏 API | 参数 | 结果／行为 |
| --- | --- | --- |
| `api.send(command)` | 下表所列 StoryCommand | 等待命令回执 |
| `api.chat(text)` | string | 发送 talk 频道消息 |
| `api.roll(expression, mode='public')` | 掷骰表达式；mode 为 public / gm / blind / self | 按 context.actorId 发出掷骰请求 |
| `api.runMacro(id, args={})` | 宏 ID、MacroArgs | 仅在宿主启用 callMacro 时调用其他宏；共享执行预算 |
| `api.args` | 只读对象 | 本次调用参数 |
| `api.context` | 只读对象 | 当前调用上下文 |

可转交的命令类型只有 `chat`、`dice`、`table.draw`、`cards.draw`、`cards.move`、`cards.flip`、`playlist.control`。各字段见 [StoryCommand](../../reference/packages/contracts/src/story.md)、[LibraryCommand](../../reference/packages/contracts/src/world-library.md)。`macro.invoke` 是宿主处理的特殊调用，不是随意新增的 StoryCommand。

宏运行在受限 iframe / worker 中，连接策略为 connect-src none；不开放账号令牌、文件系统或任意网络抓取。GM 或被 `library.scriptUsers` 授权的玩家才可执行，每次转交命令仍复核权限和当前宏版本。

| 预算 | 当前值 |
| --- | --- |
| 总执行时限 | 10 秒 |
| 总命令数 | 30，嵌套宏共享 |
| 单条命令 JSON | 最多 64,000 字符 |
| 结果 JSON | 最多 32,000 字符 |
| MacroArgs | 最多 32 项；键为合法 ASCII 标识符、最多 64 字符；值为 string / number / boolean / null，字符串最多 2,000 字符 |

**宏超时不会撤销之前已经提交的命令。** 因此扣资源、抽牌等操作不能依赖“整段脚本原子回滚”。使用当前世界已有的命令权限，不要通过宏绕过 GM 审核。区域自动宏另有更窄的聊天／掷骰入口，不等于可以自动执行任意脚本。

```js
await api.chat('向导摊开了路线图。');
await api.roll('1d20', 'public');
```

这是无私密资料、无外部访问的最小演示。它不宣称存在通用插件安装器或任意脚本效果注册功能。
