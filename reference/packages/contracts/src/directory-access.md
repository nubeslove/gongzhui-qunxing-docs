# game/packages/contracts/src/directory-access.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isLibraryKind} from './library-directory';
import {LIBRARY_DIRECTORY_NAMES} from './document-directory';
import {canonicalJson} from './index';
import {emptyDocumentDirectory,documentFolderDescendants,type DocumentDirectory} from './document-directory';
import {parseResourceAccess} from './resource-access';
import {storyObject,storyId,storyEnum,type StoryWorkspace} from './story';
import type {DocumentAccess,AccessLevel} from './world-library';
import type {JournalPageAccess} from './journal-access';
```
</details>

## DirectoryAccessKind

导出接口 · 源码第 10 行。

```ts
export type DirectoryAccessKind = keyof typeof DIRECTORY_ACCESS_KINDS;
```

## DirectoryAccessActor

导出接口 · 源码第 11 行。

```ts
export interface DirectoryAccessActor {
    id: string;
    name: string;
    value: DocumentAccess;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `value` | 否 | `DocumentAccess` | 见结构定义及所属功能文档 |

## DirectoryAccessRow

导出接口 · 源码第 12 行。

```ts
export interface DirectoryAccessRow extends DirectoryAccessActor {
    pages?: {
        id: string;
        visibility: 'gm' | 'public';
        access: JournalPageAccess | null;
    }[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `pages` | 是 | `{id:string;visibility:'gm'&#124;'public';access:JournalPageAccess&#124;null}[]` | 见结构定义及所属功能文档 |
| `pages.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `pages.[].visibility` | 否 | `'gm'&#124;'public'` | 见结构定义及所属功能文档 |
| `pages.[].access` | 否 | `JournalPageAccess&#124;null` | 见结构定义及所属功能文档 |

## DirectoryAccessPlan

导出接口 · 源码第 13 行。

```ts
export interface DirectoryAccessPlan {
    directory: DocumentDirectory;
    documents: DirectoryAccessRow[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `directory` | 否 | `DocumentDirectory` | 见结构定义及所属功能文档 |
| `documents` | 否 | `DirectoryAccessRow[]` | 见结构定义及所属功能文档 |

## DirectoryAccessPatch

导出接口 · 源码第 14 行。

```ts
export interface DirectoryAccessPatch {
    default?: AccessLevel;
    users: Record<string, AccessLevel | null>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `default` | 是 | `AccessLevel` | 见结构定义及所属功能文档 |
| `users` | 否 | `Record<string,AccessLevel&#124;null>` | 见结构定义及所属功能文档 |

## DirectoryAccessCommand

导出接口 · 源码第 15 行。

```ts
export type DirectoryAccessCommand = {
    kind: 'directory.access';
    documentKind: DirectoryAccessKind;
    folderId: string;
    recursive: boolean;
    before: DirectoryAccessPlan;
    patch: DirectoryAccessPatch;
    resetPages: boolean;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'directory.access'` | 见结构定义及所属功能文档 |
| `documentKind` | 否 | `DirectoryAccessKind` | 见结构定义及所属功能文档 |
| `folderId` | 否 | `string` | 见结构定义及所属功能文档 |
| `recursive` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `before` | 否 | `DirectoryAccessPlan` | 见结构定义及所属功能文档 |
| `patch` | 否 | `DirectoryAccessPatch` | 见结构定义及所属功能文档 |
| `resetPages` | 否 | `boolean` | 见结构定义及所属功能文档 |

## directoryAccessPlan

导出接口 · 源码第 16 行。

```ts
export function directoryAccessPlan(story: StoryWorkspace, actors: readonly DirectoryAccessActor[], kind: DirectoryAccessKind, folderId: string, recursive: boolean): DirectoryAccessPlan;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `actors` | 否 | `readonly DirectoryAccessActor[]` | — |
| `kind` | 否 | `DirectoryAccessKind` | — |
| `folderId` | 否 | `string` | — |
| `recursive` | 否 | `boolean` | — |

## parseDirectoryAccessPatch

导出接口 · 源码第 23 行。

```ts
export function parseDirectoryAccessPatch(raw: unknown): DirectoryAccessPatch;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## patchDirectoryAccess

导出接口 · 源码第 27 行。

```ts
export function patchDirectoryAccess(current: DocumentAccess, patch: DirectoryAccessPatch): DocumentAccess;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `current` | 否 | `DocumentAccess` | — |
| `patch` | 否 | `DirectoryAccessPatch` | — |

## checkedDirectoryAccessPlan

导出接口 · 源码第 28 行。

```ts
export function checkedDirectoryAccessPlan(story: StoryWorkspace, actors: readonly DirectoryAccessActor[], command: DirectoryAccessCommand): {plan:DirectoryAccessPlan;patch:DirectoryAccessPatch};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `actors` | 否 | `readonly DirectoryAccessActor[]` | — |
| `command` | 否 | `DirectoryAccessCommand` | — |
