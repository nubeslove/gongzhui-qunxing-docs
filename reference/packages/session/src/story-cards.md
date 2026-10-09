# game/packages/session/src/story-cards.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {canManageCard,documentAccess,planCardDeal,storyId as id,storyNumber as num,storyEnum as one,storyList as list,type CardDeck,type StoryWorkspace} from '@aelzerant/contracts';
import {detachSourceCards,touchSourceStacks} from './story-card-stacks';
import type {StoryContext} from './story-workspace';
```
</details>

## applyCardCommand

导出接口 · 源码第 4 行。

```ts
export function applyCardCommand(doc: CardDeck, cmd: Record<string,unknown>, story: StoryWorkspace, c: StoryContext, gm: boolean, note: (text:string)=>void, roll: (sides:number)=>number, member: (id:unknown)=>string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `doc` | 否 | `CardDeck` | — |
| `cmd` | 否 | `Record<string,unknown>` | — |
| `story` | 否 | `StoryWorkspace` | — |
| `c` | 否 | `StoryContext` | — |
| `gm` | 否 | `boolean` | — |
| `note` | 否 | `(text:string)=>void` | — |
| `roll` | 否 | `(sides:number)=>number` | — |
| `member` | 否 | `(id:unknown)=>string` | — |
