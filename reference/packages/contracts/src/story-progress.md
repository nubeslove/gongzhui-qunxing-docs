# game/packages/contracts/src/story-progress.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as obj,storyList as list,storyText as text,storyId as id,storyNumber as num,storyEnum as one,type StoryEntry,type StoryWorkspace} from './story';
```
</details>

## QuestAutomatic

导出接口 · 源码第 3 行。

```ts
export type QuestAutomatic = {
    kind: 'flag';
    key: string;
    value: string;
} | {
    kind: 'trigger';
    id: string;
} | {
    kind: 'event';
    id: string;
    optionId?: string;
    success: 'any' | 'success' | 'failure';
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.kind` | 否 | `'flag'` | 见结构定义及所属功能文档 |
| `分支1.key` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.value` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'trigger'` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.kind` | 否 | `'event'` | 见结构定义及所属功能文档 |
| `分支3.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.optionId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支3.success` | 否 | `'any'&#124;'success'&#124;'failure'` | 见结构定义及所属功能文档 |

## QuestObjective

导出接口 · 源码第 4 行。

```ts
export interface QuestObjective {
    id: string;
    text: string;
    current: number;
    target: number;
    optional: boolean;
    automatic?: QuestAutomatic;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `current` | 否 | `number` | 见结构定义及所属功能文档 |
| `target` | 否 | `number` | 见结构定义及所属功能文档 |
| `optional` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `automatic` | 是 | `QuestAutomatic` | 见结构定义及所属功能文档 |

## QuestReward

导出接口 · 源码第 5 行。

```ts
export interface QuestReward {
    id: string;
    text: string;
    hidden: boolean;
    revealed: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `hidden` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `revealed` | 否 | `boolean` | 见结构定义及所属功能文档 |

## QuestDetails

导出接口 · 源码第 6 行。

```ts
export interface QuestDetails {
    locked?: boolean;
    chain: string;
    order: number;
    predecessors: string[];
    revealWhenUnlocked: boolean;
    autoComplete: boolean;
    objectives: QuestObjective[];
    rewards: QuestReward[];
    completedAt?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `locked` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `chain` | 否 | `string` | 见结构定义及所属功能文档 |
| `order` | 否 | `number` | 见结构定义及所属功能文档 |
| `predecessors` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `revealWhenUnlocked` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `autoComplete` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `objectives` | 否 | `QuestObjective[]` | 见结构定义及所属功能文档 |
| `rewards` | 否 | `QuestReward[]` | 见结构定义及所属功能文档 |
| `completedAt` | 是 | `number` | 见结构定义及所属功能文档 |

## NotebookNode

导出接口 · 源码第 7 行。

```ts
export interface NotebookNode {
    id: string;
    title: string;
    body: string;
    done: boolean;
    mark: 'none' | 'important' | 'question' | 'next';
    triggerIds: string[];
    eventIds: string[];
    followTriggers: boolean;
    executedAt?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `title` | 否 | `string` | 见结构定义及所属功能文档 |
| `body` | 否 | `string` | 见结构定义及所属功能文档 |
| `done` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `mark` | 否 | `'none'&#124;'important'&#124;'question'&#124;'next'` | 见结构定义及所属功能文档 |
| `triggerIds` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `eventIds` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `followTriggers` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `executedAt` | 是 | `number` | 见结构定义及所属功能文档 |

## NotebookChapter

导出接口 · 源码第 8 行。

```ts
export interface NotebookChapter {
    id: string;
    title: string;
    body: string;
    nodes: NotebookNode[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `title` | 否 | `string` | 见结构定义及所属功能文档 |
| `body` | 否 | `string` | 见结构定义及所属功能文档 |
| `nodes` | 否 | `NotebookNode[]` | 见结构定义及所属功能文档 |

## GmNotebook

导出接口 · 源码第 9 行。

```ts
export interface GmNotebook {
    chapters: NotebookChapter[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `chapters` | 否 | `NotebookChapter[]` | 见结构定义及所属功能文档 |

## StoryProgressCommand

导出接口 · 源码第 10 行。

```ts
export type StoryProgressCommand = {
    type: 'quest.objective';
    id: string;
    objectiveId: string;
    current: number;
    expected: number;
} | {
    type: 'quest.status';
    id: string;
    status: StoryEntry['status'];
    expected: number;
} | {
    type: 'quest.reward';
    id: string;
    rewardId: string;
    revealed: boolean;
    expected: number;
} | {
    type: 'notebook.reset';
    id: string;
    chapterId: string;
    nodeId: string;
    expected: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'quest.objective'` | 见结构定义及所属功能文档 |
| `分支1.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.objectiveId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.current` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支1.expected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'quest.status'` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.status` | 否 | `StoryEntry['status']` | 见结构定义及所属功能文档 |
| `分支2.expected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'quest.reward'` | 见结构定义及所属功能文档 |
| `分支3.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.rewardId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.revealed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支3.expected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支4.type` | 否 | `'notebook.reset'` | 见结构定义及所属功能文档 |
| `分支4.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.chapterId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.nodeId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.expected` | 否 | `number` | 见结构定义及所属功能文档 |

## JournalSignal

导出接口 · 源码第 15 行。

```ts
export type JournalSignal = {
    kind: 'trigger';
    id: string;
} | {
    kind: 'event';
    id: string;
    optionId: string;
    success: boolean;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.kind` | 否 | `'trigger'` | 见结构定义及所属功能文档 |
| `分支1.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'event'` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.optionId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.success` | 否 | `boolean` | 见结构定义及所属功能文档 |

## blankQuest

导出接口 · 源码第 19 行。

```ts
export const blankQuest: (): QuestDetails;
```

## blankNotebook

导出接口 · 源码第 20 行。

```ts
export const blankNotebook: (): GmNotebook;
```

## parseQuest

导出接口 · 源码第 21 行。

```ts
export function parseQuest(raw: unknown): QuestDetails;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseNotebook

导出接口 · 源码第 26 行。

```ts
export function parseNotebook(raw: unknown): GmNotebook;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## questUnlocked

导出接口 · 源码第 29 行。

```ts
export const questUnlocked: (story: Pick<StoryWorkspace, "entries">, entry: StoryEntry): boolean;
```

## questProgress

导出接口 · 源码第 30 行。

```ts
export const questProgress: (entry: StoryEntry): { done: number; total: number; };
```

## validateQuestChain

导出接口 · 源码第 32 行。

Validate chains on edit, not on projection: hidden predecessor references may have been removed.

```ts
export function validateQuestChain(story: Pick<StoryWorkspace,'entries'>, entry: StoryEntry): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `Pick<StoryWorkspace,'entries'>` | — |
| `entry` | 否 | `StoryEntry` | — |

## publicQuest

导出接口 · 源码第 37 行。

Players receive progress and disclosed rewards, never automation conditions or private links.

```ts
export function publicQuest(q: QuestDetails): QuestDetails;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `q` | 否 | `QuestDetails` | — |
