# game/packages/contracts/src/document-directory.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## DocumentDirectoryKind

导出接口 · 源码第 4 行。

```ts
export type DocumentDirectoryKind = keyof typeof DOCUMENT_DIRECTORY_TYPES;
```

## DocumentFolder

导出接口 · 源码第 6 行。

Shared folder organization. Rule documents remain owned by their domain modules.

```ts
export interface DocumentFolder {
    id: string;
    name: string;
    parent: string | null;
    color: string;
    sorting: 'manual' | 'alphabetical';
    sort: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `parent` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `color` | 否 | `string` | 见结构定义及所属功能文档 |
| `sorting` | 否 | `'manual'&#124;'alphabetical'` | 见结构定义及所属功能文档 |
| `sort` | 否 | `number` | 见结构定义及所属功能文档 |

## DocumentDirectory

导出接口 · 源码第 7 行。

```ts
export interface DocumentDirectory {
    revision: number;
    folders: DocumentFolder[];
    entries: Record<string, {
        folder: string | null;
        sort: number;
    }>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `folders` | 否 | `DocumentFolder[]` | 见结构定义及所属功能文档 |
| `entries` | 否 | `Record<string,{folder:string&#124;null;sort:number}>` | 见结构定义及所属功能文档 |

## emptyDocumentDirectory

导出接口 · 源码第 8 行。

```ts
export const emptyDocumentDirectory: (): DocumentDirectory;
```

## parseDocumentDirectory

导出接口 · 源码第 13 行。

```ts
export function parseDocumentDirectory(raw: unknown, documentIds?: ReadonlySet<string>, maxEntries?: number): DocumentDirectory;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `documentIds` | 是 | `ReadonlySet<string>` | — |
| `maxEntries` | 是 | `number` | 1000 |

## removeDocumentFolder

导出接口 · 源码第 22 行。

```ts
export function removeDocumentFolder(directory: DocumentDirectory, folderId: string, maxEntries?: number): DocumentDirectory;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `directory` | 否 | `DocumentDirectory` | — |
| `folderId` | 否 | `string` | — |
| `maxEntries` | 是 | `number` | 1000 |

## documentFolderDescendants

导出接口 · 源码第 28 行。

```ts
export function documentFolderDescendants(directory: DocumentDirectory, folderId: string): Set<string>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `directory` | 否 | `DocumentDirectory` | — |
| `folderId` | 否 | `string` | — |

## documentDirectoryOrder

导出接口 · 源码第 31 行。

```ts
export function documentDirectoryOrder<T extends {id:string;name:string}>(rows: readonly T[], directory: DocumentDirectory, parent: string|null, rootSorting?: DocumentFolder['sorting']): T[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `rows` | 否 | `readonly T[]` | — |
| `directory` | 否 | `DocumentDirectory` | — |
| `parent` | 否 | `string&#124;null` | — |
| `rootSorting` | 是 | `DocumentFolder['sorting']` | 'manual' |

## placeInDocumentDirectory

导出接口 · 源码第 36 行。

```ts
export function placeInDocumentDirectory(directory: DocumentDirectory|undefined, document: string, folder: string|null, maxEntries?: number): DocumentDirectory;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `directory` | 否 | `DocumentDirectory&#124;undefined` | — |
| `document` | 否 | `string` | — |
| `folder` | 否 | `string&#124;null` | — |
| `maxEntries` | 是 | `number` | 1000 |

## removeFromDocumentDirectory

导出接口 · 源码第 39 行。

```ts
export function removeFromDocumentDirectory(directory: DocumentDirectory|undefined, document: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `directory` | 否 | `DocumentDirectory&#124;undefined` | — |
| `document` | 否 | `string` | — |
