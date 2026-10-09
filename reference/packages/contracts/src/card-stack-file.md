# game/packages/contracts/src/card-stack-file.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseLibraryDocument,type CardDeck,type WorldLibrary} from './world-library';
import {resolveStackCard,validateCardStacks} from './card-stacks';
import {isGameSystemId,type GameSystemId} from './systems';
import {storyObject as obj,storyList as list} from './story';
```
</details>

## CardStackFile

导出接口 · 源码第 3 行。

```ts
export interface CardStackFile {
    format: 'aaf-card-stack';
    version: 1;
    systemId: GameSystemId;
    partial: boolean;
    stack: CardDeck;
    sources: CardDeck[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `format` | 否 | `'aaf-card-stack'` | 见结构定义及所属功能文档 |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `systemId` | 否 | `GameSystemId` | 见结构定义及所属功能文档 |
| `partial` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `stack` | 否 | `CardDeck` | 见结构定义及所属功能文档 |
| `sources` | 否 | `CardDeck[]` | 见结构定义及所属功能文档 |

## CardStackImportCommand

导出接口 · 源码第 4 行。

```ts
export interface CardStackImportCommand {
    type: 'cards.stack.import';
    file: CardStackFile;
    targetId?: string;
    expectedRevision?: number;
    id?: string;
    folderId?: string | null;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 否 | `'cards.stack.import'` | 见结构定义及所属功能文档 |
| `file` | 否 | `CardStackFile` | 见结构定义及所属功能文档 |
| `targetId` | 是 | `string` | 见结构定义及所属功能文档 |
| `expectedRevision` | 是 | `number` | 见结构定义及所属功能文档 |
| `id` | 是 | `string` | 见结构定义及所属功能文档 |
| `folderId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |

## parseCardStackFile

导出接口 · 源码第 5 行。

```ts
export function parseCardStackFile(raw: unknown): CardStackFile;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## exportCardStackFile

导出接口 · 源码第 9 行。

```ts
export function exportCardStackFile(library: WorldLibrary, stackId: string, systemId: GameSystemId): CardStackFile;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `library` | 否 | `WorldLibrary` | — |
| `stackId` | 否 | `string` | — |
| `systemId` | 否 | `GameSystemId` | — |

## copyCardStackFile

导出接口 · 源码第 15 行。

A portable snapshot owns exactly these cards. Copies never attach to a live source deck.

```ts
export function copyCardStackFile(raw: CardStackFile, id: string, target?: CardDeck, newId?: ()=>string): {stack:CardDeck;sources:CardDeck[]};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `CardStackFile` | — |
| `id` | 否 | `string` | — |
| `target` | 是 | `CardDeck` | — |
| `newId` | 是 | `()=>string` | ()=>crypto.randomUUID() |
