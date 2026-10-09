# game/packages/contracts/src/story-journal.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {publicQuest} from './story-progress';
import {journalPlainText} from './journal-format';
import {parseJournalSecrets,visibleJournalSecrets,type JournalSecret} from './journal-secrets';
import {storyObject,storyId,storyText,storyEnum,storyList,storyNumber,type StoryEntry} from './story';
import {safeMedia} from './world-library';
import {parseJournalAccess,journalEntryAccess,journalPageAccess,journalReadable,type JournalPageAccess} from './journal-access';
```
</details>

## JournalPage

导出接口 · 源码第 8 行。

```ts
export interface JournalPage {
    secrets?: JournalSecret[];
    access?: JournalPageAccess;
    id: string;
    name: string;
    type: keyof typeof JOURNAL_PAGE_TYPES;
    level: 1 | 2 | 3;
    showTitle: boolean;
    visibility: 'public' | 'gm';
    text: string;
    src: string;
    caption: string;
    gmNotes?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `secrets` | 是 | `JournalSecret[]` | 见结构定义及所属功能文档 |
| `access` | 是 | `JournalPageAccess` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `type` | 否 | `keyof typeof JOURNAL_PAGE_TYPES` | 见结构定义及所属功能文档 |
| `level` | 否 | `1&#124;2&#124;3` | 见结构定义及所属功能文档 |
| `showTitle` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `visibility` | 否 | `'public'&#124;'gm'` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `src` | 否 | `string` | 见结构定义及所属功能文档 |
| `caption` | 否 | `string` | 见结构定义及所属功能文档 |
| `gmNotes` | 是 | `string` | 见结构定义及所属功能文档 |

## parseJournalPages

导出接口 · 源码第 9 行。

```ts
export function parseJournalPages(raw: unknown): JournalPage[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## blankJournalPage

导出接口 · 源码第 14 行。

```ts
export function blankJournalPage(type: JournalPage['type'], id: string): JournalPage;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 否 | `JournalPage['type']` | — |
| `id` | 否 | `string` | — |

## publicJournalPage

导出接口 · 源码第 16 行。

Strip authority-only content before serialization, never merely hide it with CSS.

```ts
export function publicJournalPage(page: JournalPage): JournalPage;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `page` | 否 | `JournalPage` | — |

## projectJournalEntry

导出接口 · 源码第 17 行。

```ts
export function projectJournalEntry(entry: StoryEntry, playerId?: string): StoryEntry|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `entry` | 否 | `StoryEntry` | — |
| `playerId` | 是 | `string` | — |

## journalSummary

导出接口 · 源码第 26 行。

```ts
export function journalSummary(entry: StoryEntry): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `entry` | 否 | `StoryEntry` | — |

## journalAssetPaths

导出接口 · 源码第 29 行。

References in readable pages grant their media, never references in stripped GM notes or secrets.

```ts
export function journalAssetPaths(entries: readonly StoryEntry[], playerId?: string): Set<string>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `entries` | 否 | `readonly StoryEntry[]` | — |
| `playerId` | 是 | `string` | — |

## journalHandoutPages

导出接口 · 源码第 38 行。

Whole handouts omit individually restricted pages; selecting a page explicitly is a disclosure.

```ts
export function journalHandoutPages(entry: StoryEntry, recipients: string[]|null): JournalPage[]|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `entry` | 否 | `StoryEntry` | — |
| `recipients` | 否 | `string[]&#124;null` | — |
