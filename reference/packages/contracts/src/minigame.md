# game/packages/contracts/src/minigame.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## GameJson

导出接口 · 源码第 2 行。

The data contract shared by game implementations, clients and the authority.

```ts
export type GameJson = null | boolean | number | string | GameJson[] | {
    [key: string]: GameJson;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支6.[key:string]` | 否 | `GameJson` | 动态键 |

## GameObject

导出接口 · 源码第 4 行。

Values are validated as JSON at the transport boundary; unknown keeps extension payloads opaque.

```ts
export interface GameObject {
    [key: string]: unknown;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `[key:string]` | 否 | `unknown` | 动态键 |

## MinigameResult

导出接口 · 源码第 5 行。

```ts
export interface MinigameResult {
    success: boolean;
    score: number;
    grades: Record<string, number>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `success` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `score` | 否 | `number` | 见结构定义及所属功能文档 |
| `grades` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |

## MinigameInput

导出接口 · 源码第 6 行。

```ts
export interface MinigameInput {
    seq: number;
    at: number;
    kind: string;
    code?: string;
    x?: number;
    y?: number;
    data?: GameObject;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `seq` | 否 | `number` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |
| `kind` | 否 | `string` | 见结构定义及所属功能文档 |
| `code` | 是 | `string` | 见结构定义及所属功能文档 |
| `x` | 是 | `number` | 见结构定义及所属功能文档 |
| `y` | 是 | `number` | 见结构定义及所属功能文档 |
| `data` | 是 | `GameObject` | 见结构定义及所属功能文档 |

## MinigameConsequence

导出接口 · 源码第 7 行。

```ts
export interface MinigameConsequence {
    id: string;
    label: string;
    when: 'success' | 'failure' | 'always';
    scope: 'individual' | 'team';
    mode: 'auto' | 'confirm';
    action: {
        kind: 'counter';
        actorId: string;
        key: string;
        delta: number;
    } | {
        kind: 'resource';
        actorId: string;
        resourceId: string;
        remove: boolean;
    } | {
        kind: 'status';
        actorId: string;
        status: string;
        remove: boolean;
    } | {
        kind: 'macro';
        macroId: string;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `when` | 否 | `'success'&#124;'failure'&#124;'always'` | 见结构定义及所属功能文档 |
| `scope` | 否 | `'individual'&#124;'team'` | 见结构定义及所属功能文档 |
| `mode` | 否 | `'auto'&#124;'confirm'` | 见结构定义及所属功能文档 |
| `action` | 否 | `{kind:'counter';actorId:string;key:string;delta:number}&#124;{kind:'resource';actorId:string;resourceId:string;remove:boolean}&#124;{kind:'status';actorId:string;status:string;remove:boolean}&#124;{kind:'macro';macroId:string}` | 见结构定义及所属功能文档 |
| `action.分支1.kind` | 否 | `'counter'` | 见结构定义及所属功能文档 |
| `action.分支1.actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `action.分支1.key` | 否 | `string` | 见结构定义及所属功能文档 |
| `action.分支1.delta` | 否 | `number` | 见结构定义及所属功能文档 |
| `action.分支2.kind` | 否 | `'resource'` | 见结构定义及所属功能文档 |
| `action.分支2.actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `action.分支2.resourceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `action.分支2.remove` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `action.分支3.kind` | 否 | `'status'` | 见结构定义及所属功能文档 |
| `action.分支3.actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `action.分支3.status` | 否 | `string` | 见结构定义及所属功能文档 |
| `action.分支3.remove` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `action.分支4.kind` | 否 | `'macro'` | 见结构定义及所属功能文档 |
| `action.分支4.macroId` | 否 | `string` | 见结构定义及所属功能文档 |

## MinigamePreset

导出接口 · 源码第 11 行。

```ts
export interface MinigamePreset {
    id: string;
    name: string;
    pluginId: string;
    revision: number;
    definition: GameObject;
    actors?: Record<string, string>;
    interruption: 'continue' | 'pause' | 'gm';
    team: {
        mode: 'all' | 'count' | 'score';
        threshold: number;
    };
    consequences: MinigameConsequence[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `pluginId` | 否 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `definition` | 否 | `GameObject` | 见结构定义及所属功能文档 |
| `actors` | 是 | `Record<string,string>` | 见结构定义及所属功能文档 |
| `interruption` | 否 | `'continue'&#124;'pause'&#124;'gm'` | 见结构定义及所属功能文档 |
| `team` | 否 | `{mode:'all'&#124;'count'&#124;'score';threshold:number}` | 见结构定义及所属功能文档 |
| `team.mode` | 否 | `'all'&#124;'count'&#124;'score'` | 见结构定义及所属功能文档 |
| `team.threshold` | 否 | `number` | 见结构定义及所属功能文档 |
| `consequences` | 否 | `MinigameConsequence[]` | 见结构定义及所属功能文档 |

## MinigameParticipant

导出接口 · 源码第 17 行。

```ts
export interface MinigameParticipant {
    id: string;
    actorId?: string;
    ready: boolean;
    lastSeen: number;
    seq: number;
    lastInputAt: number;
    unavailable?: string;
    state: GameObject;
    result?: MinigameResult;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `actorId` | 是 | `string` | 见结构定义及所属功能文档 |
| `ready` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `lastSeen` | 否 | `number` | 见结构定义及所属功能文档 |
| `seq` | 否 | `number` | 见结构定义及所属功能文档 |
| `lastInputAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `unavailable` | 是 | `string` | 见结构定义及所属功能文档 |
| `state` | 否 | `GameObject` | 见结构定义及所属功能文档 |
| `result` | 是 | `MinigameResult` | 见结构定义及所属功能文档 |

## MinigameEffect

导出接口 · 源码第 21 行。

```ts
export interface MinigameEffect {
    id: string;
    ruleId: string;
    playerId?: string;
    state: 'pending' | 'applied' | 'dismissed';
    action: MinigameConsequence['action'];
    label: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `ruleId` | 否 | `string` | 见结构定义及所属功能文档 |
| `playerId` | 是 | `string` | 见结构定义及所属功能文档 |
| `state` | 否 | `'pending'&#124;'applied'&#124;'dismissed'` | 见结构定义及所属功能文档 |
| `action` | 否 | `MinigameConsequence['action']` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |

## MinigameSession

导出接口 · 源码第 22 行。

```ts
export interface MinigameSession {
    id: string;
    preset: MinigamePreset;
    participants: MinigameParticipant[];
    phase: 'preparing' | 'running' | 'paused' | 'finished' | 'cancelled';
    elapsed: number;
    anchor: number;
    createdAt: number;
    revision: number;
    reason?: string;
    teamResult?: MinigameResult;
    effects: MinigameEffect[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `preset` | 否 | `MinigamePreset` | 见结构定义及所属功能文档 |
| `participants` | 否 | `MinigameParticipant[]` | 见结构定义及所属功能文档 |
| `phase` | 否 | `'preparing'&#124;'running'&#124;'paused'&#124;'finished'&#124;'cancelled'` | 见结构定义及所属功能文档 |
| `elapsed` | 否 | `number` | 见结构定义及所属功能文档 |
| `anchor` | 否 | `number` | 见结构定义及所属功能文档 |
| `createdAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `reason` | 是 | `string` | 见结构定义及所属功能文档 |
| `teamResult` | 是 | `MinigameResult` | 见结构定义及所属功能文档 |
| `effects` | 否 | `MinigameEffect[]` | 见结构定义及所属功能文档 |

## MinigameWorkspace

导出接口 · 源码第 28 行。

```ts
export interface MinigameWorkspace {
    presets: MinigamePreset[];
    session?: MinigameSession;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `presets` | 否 | `MinigamePreset[]` | 见结构定义及所属功能文档 |
| `session` | 是 | `MinigameSession` | 见结构定义及所属功能文档 |

## gameObject

导出接口 · 源码第 30 行。

```ts
export const gameObject: (v: unknown): GameObject;
```

## gameText

导出接口 · 源码第 36 行。

```ts
export const gameText: (v: unknown, max?: number): string;
```

## gameNumber

导出接口 · 源码第 37 行。

```ts
export const gameNumber: (v: unknown, min: number, max: number): number;
```

## gameChoice

导出接口 · 源码第 38 行。

```ts
export const gameChoice: <T extends string>(v: unknown, values: readonly T[]): T;
```

## gameList

导出接口 · 源码第 39 行。

```ts
export const gameList: (v: unknown, max: number): unknown[];
```

## parseMinigamePreset

导出接口 · 源码第 45 行。

```ts
export function parseMinigamePreset(raw: unknown): MinigamePreset;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseMinigameInput

导出接口 · 源码第 52 行。

```ts
export function parseMinigameInput(raw: unknown): MinigameInput;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseMinigameResult

导出接口 · 源码第 56 行。

```ts
export function parseMinigameResult(raw: unknown): MinigameResult;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseMinigameWorkspace

导出接口 · 源码第 60 行。

```ts
export function parseMinigameWorkspace(raw: unknown): MinigameWorkspace;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## minigameElapsed

导出接口 · 源码第 71 行。

```ts
export function minigameElapsed(session: MinigameSession, now: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `session` | 否 | `MinigameSession` | — |
| `now` | 否 | `number` | — |

## minigameLive

导出接口 · 源码第 72 行。

```ts
export function minigameLive(session: MinigameSession|undefined): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `session` | 否 | `MinigameSession&#124;undefined` | — |

## projectMinigames

导出接口 · 源码第 73 行。

```ts
export function projectMinigames(workspace: MinigameWorkspace, playerId: string|undefined): MinigameWorkspace;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `workspace` | 否 | `MinigameWorkspace` | — |
| `playerId` | 否 | `string&#124;undefined` | — |

## MinigameModule

导出接口 · 源码第 79 行。

Pure authority module API. Modules are installed by the server operator, never evaluated from preset JSON.

```ts
export interface MinigameModule {
    id: string;
    validate: (definition: GameObject) => GameObject;
    duration: (definition: GameObject) => number;
    create: (definition: GameObject) => GameObject;
    input: (definition: GameObject, state: GameObject, event: MinigameInput) => GameObject;
    advance: (definition: GameObject, state: GameObject, elapsed: number) => GameObject;
    result: (definition: GameObject, state: GameObject) => MinigameResult;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `validate` | 否 | `(definition:GameObject)=>GameObject` | 见结构定义及所属功能文档 |
| `duration` | 否 | `(definition:GameObject)=>number` | 见结构定义及所属功能文档 |
| `create` | 否 | `(definition:GameObject)=>GameObject` | 见结构定义及所属功能文档 |
| `input` | 否 | `(definition:GameObject,state:GameObject,event:MinigameInput)=>GameObject` | 见结构定义及所属功能文档 |
| `advance` | 否 | `(definition:GameObject,state:GameObject,elapsed:number)=>GameObject` | 见结构定义及所属功能文档 |
| `result` | 否 | `(definition:GameObject,state:GameObject)=>MinigameResult` | 见结构定义及所属功能文档 |

## minigameConcurrentCommand

导出接口 · 源码第 88 行。

Session commands carry their own session ID and per-player sequence/phase checks.

```ts
export function minigameConcurrentCommand(raw: unknown): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
