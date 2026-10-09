# game/packages/contracts/src/story-stage.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as obj,storyList as list,storyText as text,storyId as id,storyNumber as num,storyEnum as one} from './story';
import type {AdventureState,AdventureRun} from './adventure-events';
```
</details>

## StageCharacter

导出接口 · 源码第 4 行。

```ts
export interface StageCharacter {
    id: string;
    actorId: string;
    name: string;
    portrait: string;
    slot: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `portrait` | 否 | `string` | 见结构定义及所属功能文档 |
| `slot` | 否 | `number` | 见结构定义及所属功能文档 |

## StageCue

导出接口 · 源码第 5 行。

```ts
export interface StageCue {
    id: string;
    speakerId: string;
    text: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `speakerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |

## StageScript

导出接口 · 源码第 6 行。

```ts
export interface StageScript {
    requires?: {
        key: string;
        value: string;
    };
    id: string;
    revision: number;
    name: string;
    sceneId: string;
    background: string;
    cast: StageCharacter[];
    cues: StageCue[];
    eventIds: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `requires` | 是 | `{key:string;value:string}` | 见结构定义及所属功能文档 |
| `requires.key` | 否 | `string` | 见结构定义及所属功能文档 |
| `requires.value` | 否 | `string` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `background` | 否 | `string` | 见结构定义及所属功能文档 |
| `cast` | 否 | `StageCharacter[]` | 见结构定义及所属功能文档 |
| `cues` | 否 | `StageCue[]` | 见结构定义及所属功能文档 |
| `eventIds` | 否 | `string[]` | 见结构定义及所属功能文档 |

## StageSpeech

导出接口 · 源码第 7 行。

```ts
export interface StageSpeech {
    id: string;
    castId: string;
    name: string;
    text: string;
    authorId: string;
    at: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `castId` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `authorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |

## StoryStage

导出接口 · 源码第 9 行。

Only the current backdrop, entered cast and spoken line cross the player connection.

```ts
export interface StoryStage {
    ambience?: 'default' | 'reverie';
    scripts: StageScript[];
    active?: {
        id: string;
        scriptId: string;
        name: string;
        sceneId: string;
        background: string;
        cast: StageCharacter[];
        speech?: StageSpeech;
        startedAt: number;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `ambience` | 是 | `'default'&#124;'reverie'` | 见结构定义及所属功能文档 |
| `scripts` | 否 | `StageScript[]` | 见结构定义及所属功能文档 |
| `active` | 是 | `{id:string;scriptId:string;name:string;sceneId:string;background:string;cast:StageCharacter[];speech?:StageSpeech;startedAt:number}` | 见结构定义及所属功能文档 |
| `active.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `active.scriptId` | 否 | `string` | 见结构定义及所属功能文档 |
| `active.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `active.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `active.background` | 否 | `string` | 见结构定义及所属功能文档 |
| `active.cast` | 否 | `StageCharacter[]` | 见结构定义及所属功能文档 |
| `active.speech` | 是 | `StageSpeech` | 见结构定义及所属功能文档 |
| `active.startedAt` | 否 | `number` | 见结构定义及所属功能文档 |

## StageCommand

导出接口 · 源码第 10 行。

```ts
export type StageCommand = {
    op: 'stage.ambience';
    value: 'default' | 'reverie';
} | {
    op: 'stage.save';
    value: StageScript;
    expected: number | null;
} | {
    op: 'stage.delete';
    id: string;
    expected: number;
} | {
    op: 'stage.open';
    id: string;
} | {
    op: 'stage.close';
    runId: string;
} | {
    op: 'stage.enter';
    runId: string;
    characterId?: string;
    actorId?: string;
    slot: number;
} | {
    op: 'stage.leave';
    runId: string;
    castId: string;
} | {
    op: 'stage.say';
    runId: string;
    castId: string;
    text: string;
} | {
    op: 'stage.cue';
    runId: string;
    cueId: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.op` | 否 | `'stage.ambience'` | 见结构定义及所属功能文档 |
| `分支1.value` | 否 | `'default'&#124;'reverie'` | 见结构定义及所属功能文档 |
| `分支2.op` | 否 | `'stage.save'` | 见结构定义及所属功能文档 |
| `分支2.value` | 否 | `StageScript` | 见结构定义及所属功能文档 |
| `分支2.expected` | 否 | `number&#124;null` | 见结构定义及所属功能文档 |
| `分支3.op` | 否 | `'stage.delete'` | 见结构定义及所属功能文档 |
| `分支3.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.expected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支4.op` | 否 | `'stage.open'` | 见结构定义及所属功能文档 |
| `分支4.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.op` | 否 | `'stage.close'` | 见结构定义及所属功能文档 |
| `分支5.runId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.op` | 否 | `'stage.enter'` | 见结构定义及所属功能文档 |
| `分支6.runId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.characterId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支6.actorId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支6.slot` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支7.op` | 否 | `'stage.leave'` | 见结构定义及所属功能文档 |
| `分支7.runId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.castId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.op` | 否 | `'stage.say'` | 见结构定义及所属功能文档 |
| `分支8.runId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.castId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.text` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.op` | 否 | `'stage.cue'` | 见结构定义及所属功能文档 |
| `分支9.runId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.cueId` | 否 | `string` | 见结构定义及所属功能文档 |

## stageMedia

导出接口 · 源码第 19 行。

```ts
export function stageMedia(raw: unknown): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseStageCharacter

导出接口 · 源码第 22 行。

```ts
export function parseStageCharacter(raw: unknown): StageCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseStageScript

导出接口 · 源码第 23 行。

```ts
export function parseStageScript(raw: unknown): StageScript;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseStoryStage

导出接口 · 源码第 29 行。

```ts
export function parseStoryStage(raw: unknown): StoryStage;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## AdventureBallot

导出接口 · 源码第 35 行。

```ts
export interface AdventureBallot {
    round: number;
    eligible: string[];
    votes: {
        playerId: string;
        optionId: string;
        at: number;
    }[];
    status: 'open' | 'ready';
    outcome?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `round` | 否 | `number` | 见结构定义及所属功能文档 |
| `eligible` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `votes` | 否 | `{playerId:string;optionId:string;at:number}[]` | 见结构定义及所属功能文档 |
| `votes.[].playerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `votes.[].optionId` | 否 | `string` | 见结构定义及所属功能文档 |
| `votes.[].at` | 否 | `number` | 见结构定义及所属功能文档 |
| `status` | 否 | `'open'&#124;'ready'` | 见结构定义及所属功能文档 |
| `outcome` | 是 | `string` | 见结构定义及所属功能文档 |

## parseAdventureBallot

导出接口 · 源码第 36 行。

```ts
export function parseAdventureBallot(raw: unknown): AdventureBallot;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## ballotTally

导出接口 · 源码第 42 行。

```ts
export function ballotTally(run: AdventureRun): { counts: { id: string; label: string; count: number; }[]; leaders: string[]; total: number; pending: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `run` | 否 | `AdventureRun` | — |

## adventureSpeechBlocked

导出接口 · 源码第 47 行。

```ts
export function adventureSpeechBlocked(state: AdventureState|undefined, playerId: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `AdventureState&#124;undefined` | — |
| `playerId` | 否 | `string` | — |
