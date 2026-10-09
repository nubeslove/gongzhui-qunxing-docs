# game/packages/session/src/elevation-movement.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {expandElevationPath,elevationStep,type ScenePoint,type SceneFeatures,type EnvironmentDecision,type MovementChoice,type MovementMode,type StoryWorkspace,type ManualTable} from '@aelzerant/contracts';
import {emptyEnvironmentEffect,movementEnvironmentSignature} from './environment-decisions';
```
</details>

## tableClimbTurn

导出接口 · 源码第 4 行。

```ts
export function tableClimbTurn(table: ManualTable): string|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |

## climbEnvironmentDecision

导出接口 · 源码第 10 行。

```ts
export function climbEnvironmentDecision(features: SceneFeatures|undefined, feet: ScenePoint[], size: number, mode: MovementChoice, active: readonly MovementMode[], data: {sceneId:string;tokenId:string;actorId:string;name:string;turn?:string}): EnvironmentDecision|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `feet` | 否 | `ScenePoint[]` | — |
| `size` | 否 | `number` | — |
| `mode` | 否 | `MovementChoice` | — |
| `active` | 否 | `readonly MovementMode[]` | — |
| `data` | 否 | `{sceneId:string;tokenId:string;actorId:string;name:string;turn?:string}` | — |

## assertClimbAttempt

导出接口 · 源码第 19 行。

```ts
export function assertClimbAttempt(story: StoryWorkspace|undefined, d: EnvironmentDecision): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace&#124;undefined` | — |
| `d` | 否 | `EnvironmentDecision` | — |

## recordClimbAttempt

导出接口 · 源码第 22 行。

```ts
export function recordClimbAttempt(story: StoryWorkspace, d: EnvironmentDecision): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `d` | 否 | `EnvironmentDecision` | — |
