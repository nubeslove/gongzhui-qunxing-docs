# game/packages/contracts/src/chat-input.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {ROLL_COMMANDS,describedRoll} from './inline-roll';
import type {ConversationCommand} from './world-conversation';
```
</details>

## Compose

导出接口 · 源码第 3 行。

```ts
export type Compose = {
    destination: 'talk' | 'roleplay' | 'emote';
    recipients: string[];
    actorId?: string;
    sceneId?: string;
    tokenId?: string;
    players: {
        playerId: string;
        nickname: string;
    }[];
    gmIds: string[];
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `destination` | 否 | `'talk'&#124;'roleplay'&#124;'emote'` | 见结构定义及所属功能文档 |
| `recipients` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `actorId` | 是 | `string` | 见结构定义及所属功能文档 |
| `sceneId` | 是 | `string` | 见结构定义及所属功能文档 |
| `tokenId` | 是 | `string` | 见结构定义及所属功能文档 |
| `players` | 否 | `{playerId:string;nickname:string}[]` | 见结构定义及所属功能文档 |
| `players.[].playerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `players.[].nickname` | 否 | `string` | 见结构定义及所属功能文档 |
| `gmIds` | 否 | `string[]` | 见结构定义及所属功能文档 |

## parseChatInput

导出接口 · 源码第 4 行。

```ts
export function parseChatInput(body: string, p: Compose): ConversationCommand;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `body` | 否 | `string` | — |
| `p` | 否 | `Compose` | — |
