# game/packages/session/src/story-card-stacks.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {documentAccess,planCardDeal,resolveStackCard,storyId as id,storyList as list,storyObject as obj,storyNumber as num,storyEnum as one,type CardDeck,type CardStackReference,type StoryWorkspace,type WorldCard,type WorldLibrary} from '@aelzerant/contracts';
import type {StoryContext} from './story-workspace';
```
</details>

## touchSourceStacks

导出接口 · 源码第 5 行。

```ts
export function touchSourceStacks(library: WorldLibrary, cards: WorldCard[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `library` | 否 | `WorldLibrary` | — |
| `cards` | 否 | `WorldCard[]` | — |

## detachSourceCards

导出接口 · 源码第 6 行。

```ts
export function detachSourceCards(library: WorldLibrary, deck: CardDeck, cards: WorldCard[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `library` | 否 | `WorldLibrary` | — |
| `deck` | 否 | `CardDeck` | — |
| `cards` | 否 | `WorldCard[]` | — |

## applyCardStackCommand

导出接口 · 源码第 9 行。

```ts
export function applyCardStackCommand(story: StoryWorkspace, cmd: Record<string,unknown>, c: StoryContext, gm: boolean, roll: (sides:number)=>number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `cmd` | 否 | `Record<string,unknown>` | — |
| `c` | 否 | `StoryContext` | — |
| `gm` | 否 | `boolean` | — |
| `roll` | 否 | `(sides:number)=>number` | — |
