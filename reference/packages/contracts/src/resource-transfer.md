# game/packages/contracts/src/resource-transfer.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {projectResources,resourceAccess,resourceReadable} from './resource-access';
import {emptyStory,parseResource,parseStory,storyObject,storyId,storyText,type StoryWorkspace,type StoryResource} from './story';
import {isGameSystemId,type GameSystemId} from './systems';
import {documentReferences,resolveDocumentReference,remapDocumentReferences,type WorldDocumentRow} from './document-reference';
import {journalActionSpans,remapJournalTables} from './journal-actions';
import {parseJournalHref,journalHref} from './journal-reference';
```
</details>

## RESOURCE_FILE_MAX_BYTES

导出接口 · 源码第 7 行。

```ts
export const RESOURCE_FILE_MAX_BYTES = 1900000;
```

## ResourceFile

导出接口 · 源码第 8 行。

```ts
export interface ResourceFile {
    format: 'aaf-resources';
    version: 1;
    systemId: GameSystemId;
    rootId: string;
    resources: StoryResource[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `format` | 否 | `'aaf-resources'` | 见结构定义及所属功能文档 |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `systemId` | 否 | `GameSystemId` | 见结构定义及所属功能文档 |
| `rootId` | 否 | `string` | 见结构定义及所属功能文档 |
| `resources` | 否 | `StoryResource[]` | 见结构定义及所属功能文档 |

## ResourceTransferCommand

导出接口 · 源码第 9 行。

```ts
export type ResourceTransferCommand = {
    type: 'resource.copy';
    sourceId: string;
    expected: ResourceFile;
    id: string;
    name: string;
    folderId?: string | null;
} | {
    type: 'resource.import';
    file: ResourceFile;
    id: string;
    name: string;
    targetId?: string;
    expectedResource?: StoryResource;
    folderId?: string | null;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'resource.copy'` | 见结构定义及所属功能文档 |
| `分支1.sourceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.expected` | 否 | `ResourceFile` | 见结构定义及所属功能文档 |
| `分支1.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.folderId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'resource.import'` | 见结构定义及所属功能文档 |
| `分支2.file` | 否 | `ResourceFile` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.targetId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支2.expectedResource` | 是 | `StoryResource` | 见结构定义及所属功能文档 |
| `分支2.folderId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |

## parseResourceFile

导出接口 · 源码第 16 行。

```ts
export function parseResourceFile(raw: unknown): ResourceFile;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## exportResourceFile

导出接口 · 源码第 23 行。

Called on projected UI state too; no lookup through a private backing world.

```ts
export function exportResourceFile(story: StoryWorkspace, rootId: string, gm: boolean, playerId?: string): ResourceFile;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `rootId` | 否 | `string` | — |
| `gm` | 否 | `boolean` | — |
| `playerId` | 是 | `string` | — |

## resourceTransferWarnings

导出接口 · 源码第 26 行。

```ts
export function resourceTransferWarnings(file: ResourceFile): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `file` | 否 | `ResourceFile` | — |

## transferResourceFile

导出接口 · 源码第 27 行。

```ts
export function transferResourceFile(file: ResourceFile, id: string, name: string, options?: {target?:StoryResource;sameWorld?:boolean;newId?:()=>string;onMap?:(ids:ReadonlyMap<string,string>)=>void}): StoryResource[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `file` | 否 | `ResourceFile` | — |
| `id` | 否 | `string` | — |
| `name` | 否 | `string` | — |
| `options` | 是 | `{target?:StoryResource;sameWorld?:boolean;newId?:()=>string;onMap?:(ids:ReadonlyMap<string,string>)=>void}` | {} |
