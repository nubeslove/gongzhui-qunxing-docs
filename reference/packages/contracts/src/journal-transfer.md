# game/packages/contracts/src/journal-transfer.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {documentReferences,remapDocumentReferences} from './document-reference';
import {emptyStory,parseStory,storyObject,storyText,type StoryEntry} from './story';
import {projectJournalEntry} from './story-journal';
import {journalInDirectory} from './journal-access';
import {parseJournalHref,journalHref} from './journal-reference';
import {mapArchiveStrings,archiveJournalLinks} from './scene-archive-content';
import {journalActionSpans} from './journal-actions';
```
</details>

## JOURNAL_FILE_MAX_BYTES

导出接口 · 源码第 9 行。

```ts
export const JOURNAL_FILE_MAX_BYTES = 1900000;
```

## JournalFile

导出接口 · 源码第 10 行。

```ts
export interface JournalFile {
    format: 'aaf-journal';
    version: 1;
    entry: StoryEntry;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `format` | 否 | `'aaf-journal'` | 见结构定义及所属功能文档 |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `entry` | 否 | `StoryEntry` | 见结构定义及所属功能文档 |

## JournalTransferCommand

导出接口 · 源码第 11 行。

```ts
export type JournalTransferCommand = {
    type: 'journal.copy';
    sourceId: string;
    expectedRevision: number;
    id: string;
    title: string;
    folderId?: string | null;
} | {
    type: 'journal.import';
    file: JournalFile;
    id: string;
    title: string;
    targetId?: string;
    expectedRevision?: number;
    folderId?: string | null;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'journal.copy'` | 见结构定义及所属功能文档 |
| `分支1.sourceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支1.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.title` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.folderId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'journal.import'` | 见结构定义及所属功能文档 |
| `分支2.file` | 否 | `JournalFile` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.title` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.targetId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支2.expectedRevision` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支2.folderId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |

## parseJournalFile

导出接口 · 源码第 15 行。

```ts
export function parseJournalFile(raw: unknown): JournalFile;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## exportJournalFile

导出接口 · 源码第 24 行。

Export the same authorized content as the reader, never an unfiltered backing record.

```ts
export function exportJournalFile(entry: StoryEntry, playerId: string, gm?: boolean): JournalFile;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `entry` | 否 | `StoryEntry` | — |
| `playerId` | 否 | `string` | — |
| `gm` | 是 | `boolean` | false |

## journalTransferWarnings

导出接口 · 源码第 29 行。

```ts
export function journalTransferWarnings(entry: StoryEntry): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `entry` | 否 | `StoryEntry` | — |

## transferJournalEntry

导出接口 · 源码第 37 行。

Re-key only this journal's registered references. Imported access never grants world permissions.

```ts
export function transferJournalEntry(source: StoryEntry, id: string, title: string, authorId: string, options?: {target?:StoryEntry;copy?:boolean;newId?:()=>string;pages?:ReadonlyMap<string,string>;rewrite?:(text:string)=>string}): StoryEntry;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `source` | 否 | `StoryEntry` | — |
| `id` | 否 | `string` | — |
| `title` | 否 | `string` | — |
| `authorId` | 否 | `string` | — |
| `options` | 是 | `{target?:StoryEntry;copy?:boolean;newId?:()=>string;pages?:ReadonlyMap<string,string>;rewrite?:(text:string)=>string}` | {} |
