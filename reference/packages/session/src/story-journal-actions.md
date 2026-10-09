# game/packages/session/src/story-journal-actions.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {journalActionSpans,parseJournalReference,journalEntryAccess,journalPageAccess,journalReadable,storyNumber,storyText,storyId,type StoryWorkspace} from '@aelzerant/contracts';
import type {StoryContext} from './story-workspace';
import {applyConversation} from './story-conversation';
import {applyLibraryCommand} from './story-library';
```
</details>

## applyJournalAction

导出接口 · 源码第 4 行。

Derive executable data from the saved and readable source, never the submitted expression.

```ts
export function applyJournalAction(story: StoryWorkspace, command: Record<string,unknown>, c: StoryContext, gm: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `command` | 否 | `Record<string,unknown>` | — |
| `c` | 否 | `StoryContext` | — |
| `gm` | 否 | `boolean` | — |
