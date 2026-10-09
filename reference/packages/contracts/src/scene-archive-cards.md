# game/packages/contracts/src/scene-archive-cards.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {resolveStackCard,validateCardStacks} from './card-stacks';
import type {CardDeck,LibraryDocument} from './world-library';
```
</details>

## sceneArchiveLibrary

导出接口 · 源码第 5 行。

Explicit decks retain their definitions; implicit sources contain only cards used by selected stacks.

```ts
export function sceneArchiveLibrary(documents: readonly LibraryDocument[], selected: ReadonlySet<string>): LibraryDocument[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `documents` | 否 | `readonly LibraryDocument[]` | — |
| `selected` | 否 | `ReadonlySet<string>` | — |

## remapSceneArchiveCards

导出接口 · 源码第 22 行。

All identifiers are allocated before references move. Caller remaps document IDs afterwards.

```ts
export function remapSceneArchiveCards(documents: LibraryDocument[], documentIds: ReadonlyMap<string,string>, newId: ()=>string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `documents` | 否 | `LibraryDocument[]` | — |
| `documentIds` | 否 | `ReadonlyMap<string,string>` | — |
| `newId` | 否 | `()=>string` | — |
