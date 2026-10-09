# game/packages/session/src/story-delivery.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {visibleJournalSecrets,journalHandoutPages,publicJournalPage,storyId,storyList,storyText,storyEnum, type StoryWorkspace} from '@aelzerant/contracts';
import type {StoryContext} from './story-workspace';
```
</details>

## applyStoryDelivery

导出接口 · 源码第 5 行。

Receipts use the authenticated command sender and authority clock, never client claims.

```ts
export function applyStoryDelivery(story: StoryWorkspace, command: Record<string,unknown>, c: StoryContext, gm: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `command` | 否 | `Record<string,unknown>` | — |
| `c` | 否 | `StoryContext` | — |
| `gm` | 否 | `boolean` | — |
