# game/packages/contracts/src/journal-reference.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isJournalHtml,decodeJournalEntities} from './journal-format';
import {storyId,storyObject,storyText,type StoryEntry} from './story';
import {journalEntryAccess,journalPageAccess,journalReadable} from './journal-access';
```
</details>

## JournalReference

导出接口 · 源码第 4 行。

```ts
export interface JournalReference {
    entryId: string;
    pageId?: string;
    anchor?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `entryId` | 否 | `string` | 见结构定义及所属功能文档 |
| `pageId` | 是 | `string` | 见结构定义及所属功能文档 |
| `anchor` | 是 | `string` | 见结构定义及所属功能文档 |

## JOURNAL_DRAG_TYPE

导出接口 · 源码第 5 行。

```ts
export const JOURNAL_DRAG_TYPE = 'application/x-world-journal';
```

## parseJournalReference

导出接口 · 源码第 6 行。

```ts
export function parseJournalReference(raw: unknown): JournalReference;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## journalHref

导出接口 · 源码第 11 行。

```ts
export function journalHref(ref: JournalReference): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `ref` | 否 | `JournalReference` | — |

## parseJournalHref

导出接口 · 源码第 12 行。

```ts
export function parseJournalHref(value: string): JournalReference|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `string` | — |

## journalReferenceText

导出接口 · 源码第 16 行。

```ts
export function journalReferenceText(ref: JournalReference, label: string): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `ref` | 否 | `JournalReference` | — |
| `label` | 否 | `string` | — |

## readableJournalReference

导出接口 · 源码第 18 行。

Check the authoritative record as well as projected copies. A reference never grants access.

```ts
export function readableJournalReference(entries: readonly StoryEntry[], ref: JournalReference, playerId?: string, gm?: boolean): StoryEntry|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `entries` | 否 | `readonly StoryEntry[]` | — |
| `ref` | 否 | `JournalReference` | — |
| `playerId` | 是 | `string` | — |
| `gm` | 是 | `boolean` | false |

## JournalHeading

导出接口 · 源码第 25 行。

New links use heading text and duplicate ordinal. Old line anchors remain reader aliases.

```ts
export interface JournalHeading {
    anchor: string;
    legacyAnchor: string;
    label: string;
    level: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `anchor` | 否 | `string` | 见结构定义及所属功能文档 |
| `legacyAnchor` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `level` | 否 | `number` | 见结构定义及所属功能文档 |

## journalHeadings

导出接口 · 源码第 27 行。

```ts
export function journalHeadings(text: string): JournalHeading[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |
