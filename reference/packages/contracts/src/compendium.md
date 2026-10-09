# game/packages/contracts/src/compendium.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {resetCardTemplate} from './card-stacks';
import {parseCompendiumMedia,type CompendiumMedia} from './compendium-media';
import {storyObject,storyId,storyText,storyNumber,storyList,storyEnum} from './story';
import {isGameSystemId,type GameSystemId} from './systems';
import {parseLibraryDocument,type LibraryDocument,type DocumentAccess} from './world-library';
import {COMPENDIUM_KINDS,parseCompendiumDocument,assertCompendiumDocumentSystem,captureFileCompendiumDocument,isLibraryCompendiumDocument,type CompendiumKind,type CompendiumDocument} from './compendium-documents';
import {parseResourceAccess} from './resource-access';
import {emptyDocumentDirectory,parseDocumentDirectory,type DocumentDirectory} from './document-directory';
```
</details>

## CompendiumPack

导出接口 · 源码第 11 行。

The world holds this catalog only. Indexes and document bodies live in a separate object store.

```ts
export interface CompendiumPack {
    id: string;
    name: string;
    kind: CompendiumKind;
    systemId: GameSystemId;
    source: 'world';
    revision: number;
    locked: boolean;
    access: DocumentAccess;
    indexHash: string;
    count: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `CompendiumKind` | 见结构定义及所属功能文档 |
| `systemId` | 否 | `GameSystemId` | 见结构定义及所属功能文档 |
| `source` | 否 | `'world'` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `locked` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `access` | 否 | `DocumentAccess` | 见结构定义及所属功能文档 |
| `indexHash` | 否 | `string` | 见结构定义及所属功能文档 |
| `count` | 否 | `number` | 见结构定义及所属功能文档 |

## CompendiumIndexEntry

导出接口 · 源码第 15 行。

```ts
export interface CompendiumIndexEntry {
    id: string;
    name: string;
    hash: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `hash` | 否 | `string` | 见结构定义及所属功能文档 |

## CompendiumIndex

导出接口 · 源码第 16 行。

```ts
export interface CompendiumIndex {
    version: 1;
    kind: CompendiumKind;
    entries: CompendiumIndexEntry[];
    directory: DocumentDirectory;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `kind` | 否 | `CompendiumKind` | 见结构定义及所属功能文档 |
| `entries` | 否 | `CompendiumIndexEntry[]` | 见结构定义及所属功能文档 |
| `directory` | 否 | `DocumentDirectory` | 见结构定义及所属功能文档 |

## CompendiumBody

导出接口 · 源码第 17 行。

```ts
export interface CompendiumBody {
    format: 'aaf-compendium-entry';
    version: 1;
    systemId: GameSystemId;
    originWorldId: string;
    originDocumentId?: string;
    document: CompendiumDocument;
    projected?: true;
    media?: CompendiumMedia[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `format` | 否 | `'aaf-compendium-entry'` | 见结构定义及所属功能文档 |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `systemId` | 否 | `GameSystemId` | 见结构定义及所属功能文档 |
| `originWorldId` | 否 | `string` | 见结构定义及所属功能文档 |
| `originDocumentId` | 是 | `string` | 见结构定义及所属功能文档 |
| `document` | 否 | `CompendiumDocument` | 见结构定义及所属功能文档 |
| `projected` | 是 | `true` | 见结构定义及所属功能文档 |
| `media` | 是 | `CompendiumMedia[]` | 见结构定义及所属功能文档 |

## compendiumHash

导出接口 · 源码第 19 行。

```ts
export const compendiumHash: (raw: unknown): string;
```

## parseCompendiumPack

导出接口 · 源码第 22 行。

```ts
export function parseCompendiumPack(raw: unknown): CompendiumPack;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseCompendiumCatalog

导出接口 · 源码第 28 行。

```ts
export function parseCompendiumCatalog(raw: unknown): CompendiumPack[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## compendiumAccess

导出接口 · 源码第 29 行。

```ts
export function compendiumAccess(pack: CompendiumPack, userId: string|undefined, gm?: boolean): import("@source/packages/contracts/src/world-library").AccessLevel;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `pack` | 否 | `CompendiumPack` | — |
| `userId` | 否 | `string&#124;undefined` | — |
| `gm` | 是 | `boolean` | false |

## projectCompendiumCatalog

导出接口 · 源码第 30 行。

```ts
export function projectCompendiumCatalog(packs: readonly CompendiumPack[], userId: string|undefined, gm?: boolean): CompendiumPack[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `packs` | 否 | `readonly CompendiumPack[]` | — |
| `userId` | 否 | `string&#124;undefined` | — |
| `gm` | 是 | `boolean` | false |

## parseCompendiumIndex

导出接口 · 源码第 31 行。

```ts
export function parseCompendiumIndex(raw: unknown): CompendiumIndex;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## emptyCompendiumIndex

导出接口 · 源码第 36 行。

```ts
export function emptyCompendiumIndex(kind: CompendiumKind): CompendiumIndex;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `kind` | 否 | `CompendiumKind` | — |

## parseCompendiumBody

导出接口 · 源码第 37 行。

```ts
export function parseCompendiumBody(raw: unknown): CompendiumBody;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## captureCompendiumBody

导出接口 · 源码第 43 行。

Templates clear runtime state; portable card stacks retain their closed, independent placement graph.

```ts
export function captureCompendiumBody(document: CompendiumDocument, systemId: GameSystemId, originWorldId: string, originDocumentId?: string): CompendiumBody;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `document` | 否 | `CompendiumDocument` | — |
| `systemId` | 否 | `GameSystemId` | — |
| `originWorldId` | 否 | `string` | — |
| `originDocumentId` | 是 | `string` | — |

## CompendiumCatalogCommand

导出接口 · 源码第 52 行。

```ts
export interface CompendiumCatalogCommand {
    expectedWorldRevision?: number;
    placement?: import('./compendium-directory').CompendiumPlacement;
    type: 'compendium.catalog';
    id: string;
    before: CompendiumPack | null;
    value: CompendiumPack | null;
    requesterId: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `expectedWorldRevision` | 是 | `number` | 见结构定义及所属功能文档 |
| `placement` | 是 | `import('./compendium-directory').CompendiumPlacement` | 见结构定义及所属功能文档 |
| `type` | 否 | `'compendium.catalog'` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `before` | 否 | `CompendiumPack&#124;null` | 见结构定义及所属功能文档 |
| `value` | 否 | `CompendiumPack&#124;null` | 见结构定义及所属功能文档 |
| `requesterId` | 否 | `string` | 见结构定义及所属功能文档 |

## assertCompendiumSystem

导出接口 · 源码第 54 行。

```ts
export function assertCompendiumSystem(story: {compendiums?:CompendiumPack[]}|undefined, systemId: GameSystemId): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `{compendiums?:CompendiumPack[]}&#124;undefined` | — |
| `systemId` | 否 | `GameSystemId` | — |
