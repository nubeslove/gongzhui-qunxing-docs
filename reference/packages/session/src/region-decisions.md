# game/packages/session/src/region-decisions.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {applyEnvironmentDecision} from './environment-decisions';
import {createTimedDecision,pauseTimedDecision,timedDecisionAnswer,timedDecisionExpired,storyId,storyGm,type StoryWorkspace,type RegionNotice} from '@aelzerant/contracts';
import type {StoryContext} from './story-workspace';
```
</details>

## requestRegionChoice

导出接口 · 源码第 4 行。

```ts
export function requestRegionChoice(story: StoryWorkspace, sceneId: string, effect: RegionNotice, ownerId: string, now: number): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `sceneId` | 否 | `string` | — |
| `effect` | 否 | `RegionNotice` | — |
| `ownerId` | 否 | `string` | — |
| `now` | 否 | `number` | — |

## applyRegionDecision

导出接口 · 源码第 11 行。

```ts
export function applyRegionDecision(story: StoryWorkspace, command: Record<string,unknown>, context: StoryContext): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `command` | 否 | `Record<string,unknown>` | — |
| `context` | 否 | `StoryContext` | — |

## takeRegionChoices

导出接口 · 源码第 24 行。

```ts
export function takeRegionChoices(story: StoryWorkspace|undefined): {sceneId:string;effect:RegionNotice}[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace&#124;undefined` | — |
