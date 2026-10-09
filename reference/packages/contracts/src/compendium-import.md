# game/packages/contracts/src/compendium-import.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {COMPENDIUM_LIMITS,parseCompendiumBody,parseCompendiumIndex,parseCompendiumPack,type CompendiumBody,type CompendiumIndex,type CompendiumPack} from './compendium';
import {DOCUMENT_DIRECTORY_TYPES,placeInDocumentDirectory,documentFolderDescendants,parseDocumentDirectory,type DocumentDirectory} from './document-directory';
import {storyId,storyList,storyObject,storyText} from './story';
import type {StoryWorkspace} from './story';
import type {GameSystemId} from './systems';
```
</details>

## CompendiumImportOptions

导出接口 · 源码第 6 行。

```ts
export interface CompendiumImportOptions {
    folderId: string | null;
    recursive: boolean;
    keepIds: boolean;
    keepFolders: boolean;
    parentId: string | null;
    folderName: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `folderId` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `recursive` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `keepIds` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `keepFolders` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `parentId` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `folderName` | 否 | `string` | 见结构定义及所属功能文档 |

## CompendiumImportRow

导出接口 · 源码第 7 行。

```ts
export interface CompendiumImportRow {
    entryId: string;
    targetId: string;
    name: string;
    overwrite: boolean;
    previousName?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `entryId` | 否 | `string` | 见结构定义及所属功能文档 |
| `targetId` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `overwrite` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `previousName` | 是 | `string` | 见结构定义及所属功能文档 |

## CompendiumImportPlan

导出接口 · 源码第 8 行。

```ts
export interface CompendiumImportPlan {
    keepIds: boolean;
    rows: CompendiumImportRow[];
    directory: DocumentDirectory;
    worldId: string;
    worldRevision: number;
    packId: string;
    packRevision: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `keepIds` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `rows` | 否 | `CompendiumImportRow[]` | 见结构定义及所属功能文档 |
| `directory` | 否 | `DocumentDirectory` | 见结构定义及所属功能文档 |
| `worldId` | 否 | `string` | 见结构定义及所属功能文档 |
| `worldRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `packId` | 否 | `string` | 见结构定义及所属功能文档 |
| `packRevision` | 否 | `number` | 见结构定义及所属功能文档 |

## CompendiumImportPreview

导出接口 · 源码第 9 行。

```ts
export interface CompendiumImportPreview {
    leaseId?: string;
    expiresAt: number;
    rows: CompendiumImportRow[];
    conflicts: string[];
    folderCount: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `leaseId` | 是 | `string` | 见结构定义及所属功能文档 |
| `expiresAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `rows` | 否 | `CompendiumImportRow[]` | 见结构定义及所属功能文档 |
| `conflicts` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `folderCount` | 否 | `number` | 见结构定义及所属功能文档 |

## CompendiumImportBatch

导出接口 · 源码第 10 行。

```ts
export interface CompendiumImportBatch {
    pack: CompendiumPack;
    index: CompendiumIndex;
    bodies: CompendiumBody[];
    plan: CompendiumImportPlan;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `pack` | 否 | `CompendiumPack` | 见结构定义及所属功能文档 |
| `index` | 否 | `CompendiumIndex` | 见结构定义及所属功能文档 |
| `bodies` | 否 | `CompendiumBody[]` | 见结构定义及所属功能文档 |
| `plan` | 否 | `CompendiumImportPlan` | 见结构定义及所属功能文档 |

## parseCompendiumImportOptions

导出接口 · 源码第 11 行。

```ts
export function parseCompendiumImportOptions(raw: unknown): CompendiumImportOptions;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseCompendiumImportPreview

导出接口 · 源码第 16 行。

```ts
export function parseCompendiumImportPreview(raw: unknown): CompendiumImportPreview;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## compendiumImportPlan

导出接口 · 源码第 23 行。

Folder IDs are fresh; retaining document IDs never silently merges folders by name.

```ts
export function compendiumImportPlan(pack: CompendiumPack, index: CompendiumIndex, target: {id:string;name:string}[], directory: DocumentDirectory, worldId: string, worldRevision: number, options: CompendiumImportOptions, newId?: ()=>string): {plan:CompendiumImportPlan;conflicts:string[]};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `pack` | 否 | `CompendiumPack` | — |
| `index` | 否 | `CompendiumIndex` | — |
| `target` | 否 | `{id:string;name:string}[]` | — |
| `directory` | 否 | `DocumentDirectory` | — |
| `worldId` | 否 | `string` | — |
| `worldRevision` | 否 | `number` | — |
| `options` | 否 | `CompendiumImportOptions` | — |
| `newId` | 是 | `()=>string` | ()=>crypto.randomUUID() |

## compendiumEntryImportPlan

导出接口 · 源码第 38 行。

One independent copy lands in an existing folder without creating a wrapper folder.

```ts
export function compendiumEntryImportPlan(pack: CompendiumPack, index: CompendiumIndex, worldId: string, worldRevision: number, directory: DocumentDirectory, entryId: string, folderId: string|null): CompendiumImportPlan;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `pack` | 否 | `CompendiumPack` | — |
| `index` | 否 | `CompendiumIndex` | — |
| `worldId` | 否 | `string` | — |
| `worldRevision` | 否 | `number` | — |
| `directory` | 否 | `DocumentDirectory` | — |
| `entryId` | 否 | `string` | — |
| `folderId` | 否 | `string&#124;null` | — |

## parseCompendiumImportBatch

导出接口 · 源码第 44 行。

Trusted local payload still passes format and size validation before entering an authority queue.

```ts
export function parseCompendiumImportBatch(raw: unknown): CompendiumImportBatch;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## compendiumImportTargets

导出接口 · 源码第 53 行。

```ts
export function compendiumImportTargets(story: StoryWorkspace, actors: {id:string;name:string}[], kind: CompendiumPack['kind']): {id:string;name:string}[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `actors` | 否 | `{id:string;name:string}[]` | — |
| `kind` | 否 | `CompendiumPack['kind']` | — |

## assertCompendiumImportCurrent

导出接口 · 源码第 56 行。

```ts
export function assertCompendiumImportCurrent(batch: CompendiumImportBatch, worldId: string, revision: number, systemId: GameSystemId, story: StoryWorkspace, actors: {id:string;name:string}[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `batch` | 否 | `CompendiumImportBatch` | — |
| `worldId` | 否 | `string` | — |
| `revision` | 否 | `number` | — |
| `systemId` | 否 | `GameSystemId` | — |
| `story` | 否 | `StoryWorkspace` | — |
| `actors` | 否 | `{id:string;name:string}[]` | — |
