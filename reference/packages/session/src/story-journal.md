# game/packages/session/src/story-journal.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseStory,emptyStory,validateQuestChain,canonicalJson,journalEditable,journalEntryAccess,journalPageAccess,projectJournalEntry,type StoryEntry,type StoryWorkspace,type JournalPage} from '@aelzerant/contracts';
import type {StoryContext} from './story-workspace';
```
</details>

## saveJournalEntry

导出接口 · 源码第 6 行。

Validate against the authority copy; a projected owner flag never grants authority.

```ts
export function saveJournalEntry(story: StoryWorkspace, raw: unknown, c: StoryContext, gm: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `raw` | 否 | `unknown` | — |
| `c` | 否 | `StoryContext` | — |
| `gm` | 否 | `boolean` | — |
