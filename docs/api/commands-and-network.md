# 世界命令与联机协议

这些是客户端与 GM 权威端之间的内部协议，不是 HTTP 路由。外部 AI 备团优先生成文件，再由 GM 导入；不要向信令地址发送世界编辑 JSON。

## 两条世界模型

| 世界 | 本地命令入口 | 联机命令载荷 | 回执／状态 |
| --- | --- | --- | --- |
| AAF | `WorldAuthority.dispatchAsync(senderId, command)` | `intent.action.payload.command: WorldCommand` | `event.receipt` 的 `CommandReceipt`，`event.world` 的 `WorldView` |
| DND、心海、LANCER、泰拉、新乌托邦 | `applyTableAction(table, playerId, action, nickname, members)`；离线草稿使用 `applyDraft` | `{protocol:'manual-table-v1', requestId, expectedRevision, action:TableAction}` | `event.receipt.payload` 含同协议、requestId，以及 state 或 error；状态为按接收者裁剪的 ManualTable |

AAF 的 `WorldCommand` 必须有唯一 `requestId`、当前世界 `expectedRevision` 和 `action`。`action.kind` 为注册命令；其余字段由实际处理器校验。不要因为它的 TypeScript 字段类型为 `unknown` 就填任意参数。见 [AAF 动作参数](aaf-actions.md)、[世界合同](../../reference/packages/session/src/world-types.md)、[所有注册名称](../../reference/world-command-kinds.json)。

ManualTable 的完整动作联合见 [TableAction](../../reference/apps/desktop/src/tabletop/model.md)。`kind:'story'` 包含 `StoryCommand`，`kind:'adventure'` 包含冒险命令；战斗走各规则分支。每一个联合分支的参数都列在字段参考中，不能交换 AAF 和 ManualTable 的动作格式。

```json
{
  "requestId": "author-example-001",
  "expectedRevision": 0,
  "action": {
    "kind": "actor.create",
    "id": "demo-guide",
    "profile": {"name":"向导","faction":"npc","hp":8,"maxHp":8,"ac":10,"speed":30,"attrs":{"str":10,"dex":10}},
    "owners": [],
    "visibility": "gm"
  }
}
```

以上是空白 AAF 世界的本地创建命令示意；真正调用时使用最新修订号与当前 GM 身份。字段合法仍可能因权限、已占用 ID、战斗锁或容量上限被拒绝。

## 请求、并发与重放

- AAF 权威端检查发送者、预期世界修订、请求指纹与历史回执；同一个 requestId 不应用来表示不同操作。角色整备动作通常还需 `expected`，对应角色 `aaf.revision`，不是世界修订。
- ManualConnection 串行提交玩家动作。requestId 按发送者去重，保留最近 2,000 个成功请求。普通编辑修订不匹配会拒绝，聊天、掷骰和 `story/member.join` 有专门例外；这不放宽命令自身权限。
- 保存成功后才广播结果。收到超时不能断定服务没有执行；先查状态与回执。不要重新生成请求 ID，连续扣资源或重复发奖励。
- 回执报冲突时保留草稿，读取最新状态后重新审阅差异。不要自动把旧命令的 expectedRevision 改成新值后重放。
- 玩家看不到的 GM 笔记、未演出台本、隐藏角色及合集正文不能夹在广播中。`publicTable`、`WorldView` 与 `previewForPlayer` 是投影入口。

## 信令

连接 `wss://你的服务/ws?token=会话令牌&worldId=世界ID`。查询串含账号凭据，反向代理日志只记录路径、不记录 query；不要把整个连接 URL 贴到工单。worldId 必须是该账号当前所属世界。

信令负责成员列表、WebRTC 的 offer / answer / ice 和 reconnect。服务器校正发送者身份及世界，不接受客户端冒充 `from`。它不解释战斗命令，也不提供断线后的独立 GM。

| 当前限制 | 值 |
| --- | --- |
| 单条 WebSocket 信令 | 256 KiB |
| 全局连接数 | 256 |
| 每个玩家连接数 | 5 |
| 每 IP 升级请求 | 每分钟 60 |
| 每连接信令消息 | 每 10 秒 120 |
| 发送缓冲阈值 | 1 MiB，超限断开 |
| ping 周期／账号复核周期 | 30 秒 |
| 撤销权限／过载关闭码 | 4001 / 4008 |

限制来自 `apps/server/src/signaling.ts`，属于当前单实例的保护阈值，不是承诺支持 256 人同时跑团的容量指标。未进行该规模压测。

## 数据通道

`NetMessage` 字段：`kind` 为消息种类、`from` 为玩家 ID、可选 `seq` 为序列号、`payload` 为该消息的载荷。种类完整联合在 [公共合同](../../reference/packages/contracts/src/index.md) 中；`payload` 并非所有消息共用一个结构。

`event.world`、`event.state`、`event.battle`、`event.session`、`event.log`、`event.receipt`、`event.sync` 是不同层次的事件；`intent.action` 是意图；`meta.heartbeat / meta.invite / meta.world-deleted` 是会话通知。不要把网络包里的 seq 当作世界 revision。

网络层提供有序 JSON 分帧：`chunk-v1` 每块 8,000 个 JavaScript 字符，单消息合计最多 16,000,000 个字符、最多 2,000 块，单个解码帧上限 65,536 个字符；一条链路同时组装一条消息，60 秒过期。这些是**字符数**，不是中文内容的 UTF-8 字节数。大型媒体应走哈希素材服务，不要塞入战斗广播。

## ICE 与网络配置

共享 HostSession / ClientSession 支持 `iceServers?: RTCIceServer[]`，缺省使用 Google STUN。ManualConnection 已读取构建时 `VITE_ICE_SERVERS` JSON。AAF 当前 BattleConnection 没有同等的环境变量接线，不能只设置这个变量就声称所有系统已启用自定义 TURN。

服务端没有临时 TURN 凭据签发接口，客户端没有自动探测最近节点的功能。部署端可以规划 TURN，但统一客户端接线、短期凭据和故障回退仍需开发。见 [网络与存储](../operations/network-and-storage.md)。

GM 关闭客户端后，本地权威会话不能继续结算。服务器保存的目录、已发布资源和账号仍可用，但不等于完整托管式 VTT。
