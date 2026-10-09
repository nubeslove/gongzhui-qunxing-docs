# game/packages/contracts/src/library-directory.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {LIBRARY_DIRECTORY_TYPES,emptyDocumentDirectory,parseDocumentDirectory,placeInDocumentDirectory,type DocumentDirectory} from './document-directory';
import {projectJournalDirectory} from './journal-directory';
import type {LibraryKind,LibraryDocument,WorldLibrary} from './world-library';
```
</details>

## LibraryDirectories

导出接口 · 源码第 4 行。

```ts
export type LibraryDirectories = Partial<Record<LibraryKind, DocumentDirectory>>;
```

## LibraryDirectoryCommand

导出接口 · 源码第 5 行。

```ts
export type LibraryDirectoryCommand = {
    type: 'library.directory';
    kind: LibraryKind;
    directory: DocumentDirectory;
    expectedRevision: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 否 | `'library.directory'` | 见结构定义及所属功能文档 |
| `kind` | 否 | `LibraryKind` | 见结构定义及所属功能文档 |
| `directory` | 否 | `DocumentDirectory` | 见结构定义及所属功能文档 |
| `expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |

## isLibraryKind

导出接口 · 源码第 6 行。

```ts
export function isLibraryKind(value: unknown): value is LibraryKind;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## parseLibraryDirectories

导出接口 · 源码第 7 行。

```ts
export function parseLibraryDirectories(raw: unknown, documents: readonly LibraryDocument[]): LibraryDirectories;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `documents` | 否 | `readonly LibraryDocument[]` | — |

## projectLibraryDirectories

导出接口 · 源码第 12 行。

```ts
export function projectLibraryDirectories(directories: LibraryDirectories|undefined, visible: ReadonlySet<string>): LibraryDirectories|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `directories` | 否 | `LibraryDirectories&#124;undefined` | — |
| `visible` | 否 | `ReadonlySet<string>` | — |

## libraryFolderPath

导出接口 · 源码第 15 行。

```ts
export function libraryFolderPath(directory: DocumentDirectory|undefined, folder: string|null): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `directory` | 否 | `DocumentDirectory&#124;undefined` | — |
| `folder` | 否 | `string&#124;null` | — |

## placeLibraryDocument

导出接口 · 源码第 19 行。

Explicit movement adopts a document into the canonical directory. Legacy text is untouched until then.

```ts
export function placeLibraryDocument(library: WorldLibrary, doc: LibraryDocument, folder: string|null): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `library` | 否 | `WorldLibrary` | — |
| `doc` | 否 | `LibraryDocument` | — |
| `folder` | 否 | `string&#124;null` | — |
