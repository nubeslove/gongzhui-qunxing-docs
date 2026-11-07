# game/packages/session/src/story-minigame.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {effectiveStoryResources,gameObject,gameText,gameList,gameNumber,gameChoice,parseMinigamePreset,parseMinigameInput,parseMinigameResult,minigameElapsed,minigameLive,validateActivePlugins,type MinigamePreset,type MinigameSession,type MinigameInput,type MinigameEffect,type StoryWorkspace} from '@aelzerant/contracts';
import type {StoryContext} from './story-workspace';
import {minigameModule} from './minigame-modules';
import {applyLibraryCommand} from './story-library';
```
</details>

## MinigameCommand

导出接口 · 源码第 6 行。

```ts
export type MinigameCommand = {
    type: 'minigame.save';
    preset: MinigamePreset;
    expectedRevision: number;
} | {
    type: 'minigame.delete';
    id: string;
    expectedRevision: number;
} | {
    type: 'minigame.macro';
    presetId: string;
    expectedRevision: number;
} | {
    type: 'minigame.start';
    presetId: string;
    participants?: {
        id: string;
        actorId?: string;
    }[];
} | {
    type: 'minigame.ready' | 'minigame.heartbeat' | 'minigame.tick';
    sessionId: string;
} | {
    type: 'minigame.input';
    sessionId: string;
    events: MinigameInput[];
} | {
    type: 'minigame.unavailable';
    sessionId: string;
    reason: string;
} | {
    type: 'minigame.control';
    sessionId: string;
    action: 'pause' | 'resume' | 'cancel' | 'skip' | 'success' | 'failure';
    playerId?: string;
} | {
    type: 'minigame.effect';
    sessionId: string;
    effectId: string;
    apply: boolean;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'minigame.save'` | 见结构定义及所属功能文档 |
| `分支1.preset` | 否 | `MinigamePreset` | 见结构定义及所属功能文档 |
| `分支1.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'minigame.delete'` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'minigame.macro'` | 见结构定义及所属功能文档 |
| `分支3.presetId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支4.type` | 否 | `'minigame.start'` | 见结构定义及所属功能文档 |
| `分支4.presetId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.participants` | 是 | `{id:string;actorId?:string}[]` | 见结构定义及所属功能文档 |
| `分支4.participants.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.participants.[].actorId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支5.type` | 否 | `'minigame.ready'&#124;'minigame.heartbeat'&#124;'minigame.tick'` | 见结构定义及所属功能文档 |
| `分支5.sessionId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.type` | 否 | `'minigame.input'` | 见结构定义及所属功能文档 |
| `分支6.sessionId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.events` | 否 | `MinigameInput[]` | 见结构定义及所属功能文档 |
| `分支7.type` | 否 | `'minigame.unavailable'` | 见结构定义及所属功能文档 |
| `分支7.sessionId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.reason` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.type` | 否 | `'minigame.control'` | 见结构定义及所属功能文档 |
| `分支8.sessionId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.action` | 否 | `'pause'&#124;'resume'&#124;'cancel'&#124;'skip'&#124;'success'&#124;'failure'` | 见结构定义及所属功能文档 |
| `分支8.playerId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支9.type` | 否 | `'minigame.effect'` | 见结构定义及所属功能文档 |
| `分支9.sessionId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.effectId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.apply` | 否 | `boolean` | 见结构定义及所属功能文档 |

## minigameNeedsTick

导出接口 · 源码第 18 行。

Authorities tick only on a deadline or loss of heartbeat, including without an online GM.

```ts
export function minigameNeedsTick(session: MinigameSession|undefined, now: number): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `session` | 否 | `MinigameSession&#124;undefined` | — |
| `now` | 否 | `number` | — |

## cancelDisabledMinigame

导出接口 · 源码第 29 行。

```ts
export function cancelDisabledMinigame(story: StoryWorkspace): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |

## applyMinigameCommand

导出接口 · 源码第 83 行。

```ts
export function applyMinigameCommand(story: StoryWorkspace, raw: unknown, c: StoryContext, gm: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `raw` | 否 | `unknown` | — |
| `c` | 否 | `StoryContext` | — |
| `gm` | 否 | `boolean` | — |
