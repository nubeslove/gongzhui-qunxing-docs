# game/packages/contracts/src/journal-access.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyEnum,storyId,storyObject,type StoryEntry} from './story';
import type {JournalPage} from './story-journal';
import type {AccessLevel,DocumentAccess} from './world-library';
```
</details>

## JournalPageAccess

导出接口 · 源码第 6 行。

```ts
export interface JournalPageAccess {
    default: AccessLevel | 'inherit';
    users: Record<string, AccessLevel | 'inherit'>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `default` | 否 | `AccessLevel&#124;'inherit'` | 见结构定义及所属功能文档 |
| `users` | 否 | `Record<string,AccessLevel&#124;'inherit'>` | 见结构定义及所属功能文档 |

## parseJournalAccess

导出接口 · 源码第 7 行。

```ts
export function parseJournalAccess(raw: unknown, page: false): DocumentAccess;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `page` | 否 | `false` | — |

## parseJournalAccess

导出接口 · 源码第 8 行。

```ts
export function parseJournalAccess(raw: unknown, page: true): JournalPageAccess;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `page` | 否 | `true` | — |

## parseJournalAccess

导出接口 · 源码第 9 行。

```ts
export function parseJournalAccess(raw: unknown, page: boolean): JournalPageAccess;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `page` | 否 | `boolean` | — |

## journalEntryAccess

导出接口 · 源码第 14 行。

```ts
export function journalEntryAccess(entry: StoryEntry, playerId?: string, gm?: boolean): AccessLevel;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `entry` | 否 | `StoryEntry` | — |
| `playerId` | 是 | `string` | — |
| `gm` | 是 | `boolean` | false |

## journalPageAccess

导出接口 · 源码第 19 行。

```ts
export function journalPageAccess(entry: StoryEntry, page: JournalPage, playerId?: string, gm?: boolean): AccessLevel;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `entry` | 否 | `StoryEntry` | — |
| `page` | 否 | `JournalPage` | — |
| `playerId` | 是 | `string` | — |
| `gm` | 是 | `boolean` | false |

## journalReadable

导出接口 · 源码第 24 行。

```ts
export const journalReadable: (level: AccessLevel): level is "observer" | "owner";
```

## journalInDirectory

导出接口 · 源码第 25 行。

```ts
export function journalInDirectory(entry: StoryEntry, playerId?: string, gm?: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `entry` | 否 | `StoryEntry` | — |
| `playerId` | 是 | `string` | — |
| `gm` | 是 | `boolean` | false |

## journalEditable

导出接口 · 源码第 28 行。

```ts
export function journalEditable(entry: StoryEntry, playerId: string, gm?: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `entry` | 否 | `StoryEntry` | — |
| `playerId` | 否 | `string` | — |
| `gm` | 是 | `boolean` | false |

## journalDeletable

导出接口 · 源码第 31 行。

```ts
export function journalDeletable(entry: StoryEntry, playerId: string, gm?: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `entry` | 否 | `StoryEntry` | — |
| `playerId` | 否 | `string` | — |
| `gm` | 是 | `boolean` | false |
