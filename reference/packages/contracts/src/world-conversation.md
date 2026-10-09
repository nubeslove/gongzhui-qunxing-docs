# game/packages/contracts/src/world-conversation.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseTableDocument,type TableDocumentReference} from './table-document';
import {storyObject as obj,storyText as text,storyId as id,storyList as list,storyNumber as num,storyEnum as one,type StoryMessage} from './story';
import {inlineRolls,type InlineRoll} from './inline-roll';
import type {WorldRoll} from './world-dice';
import type {RollPrivacy} from './roll-visibility';
```
</details>

## RollMode

导出接口 · 源码第 7 行。

```ts
export type RollMode = keyof typeof ROLL_MODES;
```

## MessageDetails

导出接口 · 源码第 8 行。

```ts
export interface MessageDetails {
    conversationId?: string;
    rollPrivacy?: RollPrivacy;
    documentResults?: (TableDocumentReference | null)[];
    speaker?: {
        sceneId: string;
        tokenId: string;
    };
    inline?: InlineRoll[];
    regionScene?: string;
    mode?: RollMode;
    recipients?: string[];
    actorId?: string;
    roll?: WorldRoll;
    description?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `conversationId` | 是 | `string` | 见结构定义及所属功能文档 |
| `rollPrivacy` | 是 | `RollPrivacy` | 见结构定义及所属功能文档 |
| `documentResults` | 是 | `(TableDocumentReference&#124;null)[]` | 见结构定义及所属功能文档 |
| `speaker` | 是 | `{sceneId:string;tokenId:string}` | 见结构定义及所属功能文档 |
| `speaker.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `speaker.tokenId` | 否 | `string` | 见结构定义及所属功能文档 |
| `inline` | 是 | `InlineRoll[]` | 见结构定义及所属功能文档 |
| `regionScene` | 是 | `string` | 见结构定义及所属功能文档 |
| `mode` | 是 | `RollMode` | 见结构定义及所属功能文档 |
| `recipients` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `actorId` | 是 | `string` | 见结构定义及所属功能文档 |
| `roll` | 是 | `WorldRoll` | 见结构定义及所属功能文档 |
| `description` | 是 | `string` | 见结构定义及所属功能文档 |

## ConversationCommand

导出接口 · 源码第 9 行。

```ts
export type ConversationCommand = {
    type: 'dice';
    conversationId?: string;
    expression: string;
    mode?: RollMode;
    actorId?: string;
    description?: string;
} | {
    type: 'dice.external';
    conversationId?: string;
    expression: string;
    total: number;
    description: string;
    mode?: RollMode;
} | {
    type: 'message.roll';
    id: string;
    index: number;
    actorId?: string;
} | {
    type: 'message.visibility';
    id: string;
    visible: boolean;
    expectedRevision: number;
} | {
    type: 'message.delete';
    id: string;
} | {
    type: 'message.clear';
} | {
    type: 'channel.save';
    channel: import('./conversation-channels').ConversationChannel;
    expected: import('./conversation-channels').ConversationChannel | null;
} | {
    type: 'chat';
    conversationId?: string;
    channel: 'talk' | 'roleplay' | 'emote';
    text: string;
    recipients?: string[];
    actorId?: string;
    sceneId?: string;
    tokenId?: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'dice'` | 见结构定义及所属功能文档 |
| `分支1.conversationId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支1.expression` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.mode` | 是 | `RollMode` | 见结构定义及所属功能文档 |
| `分支1.actorId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支1.description` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'dice.external'` | 见结构定义及所属功能文档 |
| `分支2.conversationId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支2.expression` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.total` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.description` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.mode` | 是 | `RollMode` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'message.roll'` | 见结构定义及所属功能文档 |
| `分支3.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.index` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.actorId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支4.type` | 否 | `'message.visibility'` | 见结构定义及所属功能文档 |
| `分支4.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.visible` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支4.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支5.type` | 否 | `'message.delete'` | 见结构定义及所属功能文档 |
| `分支5.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.type` | 否 | `'message.clear'` | 见结构定义及所属功能文档 |
| `分支7.type` | 否 | `'channel.save'` | 见结构定义及所属功能文档 |
| `分支7.channel` | 否 | `import('./conversation-channels').ConversationChannel` | 见结构定义及所属功能文档 |
| `分支7.expected` | 否 | `import('./conversation-channels').ConversationChannel&#124;null` | 见结构定义及所属功能文档 |
| `分支8.type` | 否 | `'chat'` | 见结构定义及所属功能文档 |
| `分支8.conversationId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支8.channel` | 否 | `'talk'&#124;'roleplay'&#124;'emote'` | 见结构定义及所属功能文档 |
| `分支8.text` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.recipients` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支8.actorId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支8.sceneId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支8.tokenId` | 是 | `string` | 见结构定义及所属功能文档 |

## parseMessageDetails

导出接口 · 源码第 16 行。

```ts
export function parseMessageDetails(v: Record<string,unknown>): MessageDetails;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `Record<string,unknown>` | — |

## canReadMessage

导出接口 · 源码第 36 行。

```ts
export function canReadMessage(m: StoryMessage, playerId: string, gm: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `StoryMessage` | — |
| `playerId` | 否 | `string` | — |
| `gm` | 否 | `boolean` | — |

## numericRollData

导出接口 · 源码第 44 行。

Flatten only finite numeric own-properties. Never accepts a client's variable values.

```ts
export function numericRollData(value: unknown, prefix?: string, depth?: number): Record<string,number>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
| `prefix` | 是 | `string` | '' |
| `depth` | 是 | `number` | 0 |
