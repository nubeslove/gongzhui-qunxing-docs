# game/packages/contracts/src/scene-journal.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseJournalReference,readableJournalReference,type JournalReference} from './journal-reference';
import {storyObject,storyId,type StoryWorkspace} from './story';
```
</details>

## SceneJournalCommand

导出接口 · 源码第 4 行。

```ts
export type SceneJournalCommand = {
    type: 'scene.journal';
    sceneId: string;
    before: JournalReference | null;
    value: JournalReference | null;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 否 | `'scene.journal'` | 见结构定义及所属功能文档 |
| `sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `before` | 否 | `JournalReference&#124;null` | 见结构定义及所属功能文档 |
| `value` | 否 | `JournalReference&#124;null` | 见结构定义及所属功能文档 |

## parseSceneJournals

导出接口 · 源码第 5 行。

```ts
export function parseSceneJournals(raw: unknown): Record<string,JournalReference>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## changeSceneJournal

导出接口 · 源码第 9 行。

```ts
export function changeSceneJournal(story: StoryWorkspace, id: string, before: unknown, value: unknown): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `id` | 否 | `string` | — |
| `before` | 否 | `unknown` | — |
| `value` | 否 | `unknown` | — |

## pruneSceneJournals

导出接口 · 源码第 16 行。

Removing a document/page removes its binding; it never falls back to another page.

```ts
export function pruneSceneJournals(story: StoryWorkspace): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |

## projectSceneJournals

导出接口 · 源码第 19 行。

```ts
export function projectSceneJournals(story: StoryWorkspace, playerId: string|undefined, sceneIds?: ReadonlySet<string>): Record<string,JournalReference>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `playerId` | 否 | `string&#124;undefined` | — |
| `sceneIds` | 是 | `ReadonlySet<string>` | new Set() |
