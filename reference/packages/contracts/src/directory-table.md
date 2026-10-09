# game/packages/contracts/src/directory-table.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {canonicalJson} from './index';
import {directoryDeletePlan,storyDirectory,type DirectoryDeletePlan,type DirectoryDocumentName} from './directory-delete';
import {storyId,storyText,type StoryWorkspace} from './story';
import type {DocumentDirectoryKind} from './document-directory';
import {newLibraryDocument,parseLibraryDocument,type RollTable} from './world-library';
```
</details>

## DirectoryTableCommand

导出接口 · 源码第 6 行。

```ts
export type DirectoryTableCommand = {
    kind: 'directory.table';
    documentKind: DocumentDirectoryKind;
    folderId: string;
    recursive: boolean;
    before: DirectoryDeletePlan;
    id: string;
    name: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'directory.table'` | 见结构定义及所属功能文档 |
| `documentKind` | 否 | `DocumentDirectoryKind` | 见结构定义及所属功能文档 |
| `folderId` | 否 | `string` | 见结构定义及所属功能文档 |
| `recursive` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `before` | 否 | `DirectoryDeletePlan` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |

## directoryTablePlan

导出接口 · 源码第 7 行。

```ts
export function directoryTablePlan(story: StoryWorkspace, actors: readonly DirectoryDocumentName[], scenes: readonly DirectoryDocumentName[], kind: DocumentDirectoryKind, folder: string, recursive: boolean): DirectoryDeletePlan;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `actors` | 否 | `readonly DirectoryDocumentName[]` | — |
| `scenes` | 否 | `readonly DirectoryDocumentName[]` | — |
| `kind` | 否 | `DocumentDirectoryKind` | — |
| `folder` | 否 | `string` | — |
| `recursive` | 否 | `boolean` | — |

## tableFromDirectory

导出接口 · 源码第 11 行。

```ts
export function tableFromDirectory(story: StoryWorkspace, actors: readonly DirectoryDocumentName[], scenes: readonly DirectoryDocumentName[], command: DirectoryTableCommand): RollTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `actors` | 否 | `readonly DirectoryDocumentName[]` | — |
| `scenes` | 否 | `readonly DirectoryDocumentName[]` | — |
| `command` | 否 | `DirectoryTableCommand` | — |
