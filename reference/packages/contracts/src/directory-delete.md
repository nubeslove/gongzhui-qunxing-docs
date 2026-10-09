# game/packages/contracts/src/directory-delete.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isLibraryKind} from './library-directory';
import {canonicalJson} from './index';
import {DOCUMENT_DIRECTORY_TYPES,emptyDocumentDirectory,documentFolderDescendants,type DocumentDirectory,type DocumentDirectoryKind} from './document-directory';
import {storyId,type StoryWorkspace} from './story';
```
</details>

## DirectoryDocumentName

导出接口 · 源码第 5 行。

```ts
export interface DirectoryDocumentName {
    id: string;
    name: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |

## DirectoryDeletePlan

导出接口 · 源码第 6 行。

```ts
export interface DirectoryDeletePlan {
    directoryRevision: number;
    folders: DirectoryDocumentName[];
    documents: DirectoryDocumentName[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `directoryRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `folders` | 否 | `DirectoryDocumentName[]` | 见结构定义及所属功能文档 |
| `documents` | 否 | `DirectoryDocumentName[]` | 见结构定义及所属功能文档 |

## DirectoryDeleteCommand

导出接口 · 源码第 7 行。

```ts
export type DirectoryDeleteCommand = {
    kind: 'directory.delete';
    documentKind: DocumentDirectoryKind;
    folderId: string;
    expectedWorldRevision: number;
    before: DirectoryDeletePlan;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'directory.delete'` | 见结构定义及所属功能文档 |
| `documentKind` | 否 | `DocumentDirectoryKind` | 见结构定义及所属功能文档 |
| `folderId` | 否 | `string` | 见结构定义及所属功能文档 |
| `expectedWorldRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `before` | 否 | `DirectoryDeletePlan` | 见结构定义及所属功能文档 |

## storyDirectory

导出接口 · 源码第 8 行。

```ts
export function storyDirectory(story: StoryWorkspace, kind: DocumentDirectoryKind): DocumentDirectory;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `kind` | 否 | `DocumentDirectoryKind` | — |

## directoryDeletePlan

导出接口 · 源码第 12 行。

```ts
export function directoryDeletePlan(story: StoryWorkspace, actors: readonly DirectoryDocumentName[], scenes: readonly DirectoryDocumentName[], kind: DocumentDirectoryKind, folderId: string): DirectoryDeletePlan;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `actors` | 否 | `readonly DirectoryDocumentName[]` | — |
| `scenes` | 否 | `readonly DirectoryDocumentName[]` | — |
| `kind` | 否 | `DocumentDirectoryKind` | — |
| `folderId` | 否 | `string` | — |

## checkedDirectoryDeletePlan

导出接口 · 源码第 18 行。

```ts
export function checkedDirectoryDeletePlan(story: StoryWorkspace, actors: readonly DirectoryDocumentName[], scenes: readonly DirectoryDocumentName[], revision: number, command: DirectoryDeleteCommand): DirectoryDeletePlan;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `actors` | 否 | `readonly DirectoryDocumentName[]` | — |
| `scenes` | 否 | `readonly DirectoryDocumentName[]` | — |
| `revision` | 否 | `number` | — |
| `command` | 否 | `DirectoryDeleteCommand` | — |

## finishDirectoryDelete

导出接口 · 源码第 25 行。

Called only after all document deletions have passed their domain guards.

```ts
export function finishDirectoryDelete(story: StoryWorkspace, kind: DocumentDirectoryKind, plan: DirectoryDeletePlan): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `kind` | 否 | `DocumentDirectoryKind` | — |
| `plan` | 否 | `DirectoryDeletePlan` | — |
