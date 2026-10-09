# game/packages/contracts/src/compendium-folder-export.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {canonicalJson} from './index';
import {COMPENDIUM_LIMITS,type CompendiumIndex} from './compendium';
import {documentFolderDescendants,parseDocumentDirectory,type DocumentDirectory} from './document-directory';
import {storyId,storyObject,storyText,storyList} from './story';
```
</details>

## CompendiumFolderOptions

导出接口 · 源码第 5 行。

```ts
export interface CompendiumFolderOptions {
    recursive: boolean;
    mergeByName: boolean;
    keepIds: boolean;
    keepFolders: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `recursive` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `mergeByName` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `keepIds` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `keepFolders` | 否 | `boolean` | 见结构定义及所属功能文档 |

## CompendiumFolderRow

导出接口 · 源码第 6 行。

```ts
export interface CompendiumFolderRow {
    sourceId: string;
    name: string;
    entryId: string;
    overwrite: boolean;
    previousName?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `sourceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `entryId` | 否 | `string` | 见结构定义及所属功能文档 |
| `overwrite` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `previousName` | 是 | `string` | 见结构定义及所属功能文档 |

## CompendiumFolderPreview

导出接口 · 源码第 7 行。

```ts
export interface CompendiumFolderPreview {
    leaseId?: string;
    expiresAt: number;
    rows: CompendiumFolderRow[];
    conflicts: string[];
    folderCount: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `leaseId` | 是 | `string` | 见结构定义及所属功能文档 |
| `expiresAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `rows` | 否 | `CompendiumFolderRow[]` | 见结构定义及所属功能文档 |
| `conflicts` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `folderCount` | 否 | `number` | 见结构定义及所属功能文档 |

## parseCompendiumFolderPreview

导出接口 · 源码第 8 行。

```ts
export function parseCompendiumFolderPreview(raw: unknown): CompendiumFolderPreview;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## CompendiumFolderPlan

导出接口 · 源码第 15 行。

```ts
export interface CompendiumFolderPlan {
    rows: CompendiumFolderRow[];
    directory: DocumentDirectory;
    conflicts: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `rows` | 否 | `CompendiumFolderRow[]` | 见结构定义及所属功能文档 |
| `directory` | 否 | `DocumentDirectory` | 见结构定义及所属功能文档 |
| `conflicts` | 否 | `string[]` | 见结构定义及所属功能文档 |

## parseCompendiumFolderOptions

导出接口 · 源码第 16 行。

```ts
export function parseCompendiumFolderOptions(raw: unknown): CompendiumFolderOptions;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## compendiumFolderPlan

导出接口 · 源码第 21 行。

Pure preflight: no object writes, source mutations, or implicit first-match overrides.

```ts
export function compendiumFolderPlan(source: {id:string;name:string}[], directory: DocumentDirectory, folderId: string, target: CompendiumIndex, options: CompendiumFolderOptions, newId?: ()=>string): CompendiumFolderPlan;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `source` | 否 | `{id:string;name:string}[]` | — |
| `directory` | 否 | `DocumentDirectory` | — |
| `folderId` | 否 | `string` | — |
| `target` | 否 | `CompendiumIndex` | — |
| `options` | 否 | `CompendiumFolderOptions` | — |
| `newId` | 是 | `()=>string` | ()=>crypto.randomUUID() |
