# game/packages/contracts/src/conversation-channels.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject,storyText,storyId,storyList,type StoryMessage,type StoryWorkspace} from './story';
import {canReadMessage} from './world-conversation';
```
</details>

## ConversationChannel

导出接口 · 源码第 3 行。

```ts
export interface ConversationChannel {
    id: string;
    name: string;
    members: string[] | null;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `members` | 否 | `string[]&#124;null` | 见结构定义及所属功能文档 |

## parseConversationChannel

导出接口 · 源码第 5 行。

```ts
export function parseConversationChannel(raw: unknown): ConversationChannel;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## messageConversation

导出接口 · 源码第 9 行。

```ts
export function messageConversation(m: Pick<StoryMessage,'channel'|'conversationId'|'speaker'>): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `Pick<StoryMessage,'channel'&#124;'conversationId'&#124;'speaker'>` | — |

## canReadConversation

导出接口 · 源码第 12 行。

```ts
export function canReadConversation(story: StoryWorkspace, conversationId: string, playerId: string, gm: boolean, scenes?: ReadonlySet<string>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `conversationId` | 否 | `string` | — |
| `playerId` | 否 | `string` | — |
| `gm` | 否 | `boolean` | — |
| `scenes` | 是 | `ReadonlySet<string>` | — |

## canReadConversationMessage

导出接口 · 源码第 17 行。

```ts
export function canReadConversationMessage(story: StoryWorkspace, m: StoryMessage, playerId: string, gm: boolean, scenes?: ReadonlySet<string>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `m` | 否 | `StoryMessage` | — |
| `playerId` | 否 | `string` | — |
| `gm` | 否 | `boolean` | — |
| `scenes` | 是 | `ReadonlySet<string>` | — |
