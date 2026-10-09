# game/packages/contracts/src/scene-environment.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as obj,storyNumber as num,storyText as text,storyEnum as one,storyList as list} from './story';
import {regionContains,regionPathStates,type SceneRegion} from './scene-region';
import type {SceneFeatures,ScenePoint} from './scene-features';
```
</details>

## MovementMode

导出接口 · 源码第 6 行。

```ts
export type MovementMode = keyof typeof MOVEMENT_MODES;
```

## MovementChoice

导出接口 · 源码第 7 行。

```ts
export type MovementChoice = MovementMode | 'adaptive';
```

## movementChoice

导出接口 · 源码第 8 行。

```ts
export const movementChoice: (raw: unknown): MovementChoice;
```

## adaptiveMovementMode

导出接口 · 源码第 10 行。

Active modes are current state, never a scan of learned spells or racial traits. Jump is deliberate.

```ts
export function adaptiveMovementMode(features: SceneFeatures|undefined, path: ScenePoint[], active: readonly MovementMode[]): MovementMode;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `path` | 否 | `ScenePoint[]` | — |
| `active` | 否 | `readonly MovementMode[]` | — |

## movementForStep

导出接口 · 源码第 15 行。

```ts
export const movementForStep: (features: SceneFeatures | undefined, a: ScenePoint, b: ScenePoint, choice: MovementChoice, active: readonly MovementMode[]): "walk" | "fly" | "swim" | "climb" | "burrow" | "jump";
```

## movementMode

导出接口 · 源码第 16 行。

```ts
export const movementMode: (raw: unknown): MovementMode;
```

## EnvironmentEffect

导出接口 · 源码第 17 行。

```ts
export interface EnvironmentEffect {
    damage: string;
    damageType: string;
    condition: string;
    review: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `damage` | 否 | `string` | 见结构定义及所属功能文档 |
| `damageType` | 否 | `string` | 见结构定义及所属功能文档 |
| `condition` | 否 | `string` | 见结构定义及所属功能文档 |
| `review` | 否 | `boolean` | 见结构定义及所属功能文档 |

## RegionEnvironment

导出接口 · 源码第 18 行。

```ts
export interface RegionEnvironment {
    surface?: {
        elevation: number;
        climbable: boolean;
        dc?: number;
    };
    movement?: MovementMode[];
    cover?: 'none' | 'soft' | 'hard';
    jump?: {
        dc: number;
        ability: string;
        failure: 'return' | 'fall' | 'gm';
        effect: EnvironmentEffect;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `surface` | 是 | `{elevation:number;climbable:boolean;dc?:number}` | 见结构定义及所属功能文档 |
| `surface.elevation` | 否 | `number` | 见结构定义及所属功能文档 |
| `surface.climbable` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `surface.dc` | 是 | `number` | 见结构定义及所属功能文档 |
| `movement` | 是 | `MovementMode[]` | 见结构定义及所属功能文档 |
| `cover` | 是 | `'none'&#124;'soft'&#124;'hard'` | 见结构定义及所属功能文档 |
| `jump` | 是 | `{dc:number;ability:string;failure:'return'&#124;'fall'&#124;'gm';effect:EnvironmentEffect}` | 见结构定义及所属功能文档 |
| `jump.dc` | 否 | `number` | 见结构定义及所属功能文档 |
| `jump.ability` | 否 | `string` | 见结构定义及所属功能文档 |
| `jump.failure` | 否 | `'return'&#124;'fall'&#124;'gm'` | 见结构定义及所属功能文档 |
| `jump.effect` | 否 | `EnvironmentEffect` | 见结构定义及所属功能文档 |

## parseEnvironmentEffect

导出接口 · 源码第 19 行。

```ts
export function parseEnvironmentEffect(raw: unknown): EnvironmentEffect;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseRegionEnvironment

导出接口 · 源码第 20 行。

```ts
export function parseRegionEnvironment(raw: unknown): RegionEnvironment;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## environmentRegionsOnPath

导出接口 · 源码第 21 行。

```ts
export function environmentRegionsOnPath(features: SceneFeatures|undefined, path: ScenePoint[]): SceneRegion[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `path` | 否 | `ScenePoint[]` | — |

## assertEnvironmentMovement

导出接口 · 源码第 22 行。

```ts
export function assertEnvironmentMovement(features: SceneFeatures|undefined, path: ScenePoint[], mode: MovementMode): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `path` | 否 | `ScenePoint[]` | — |
| `mode` | 否 | `MovementMode` | — |

## environmentMovementAllowed

导出接口 · 源码第 23 行。

```ts
export function environmentMovementAllowed(features: SceneFeatures|undefined, a: ScenePoint, b: ScenePoint, mode: MovementMode): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `a` | 否 | `ScenePoint` | — |
| `b` | 否 | `ScenePoint` | — |
| `mode` | 否 | `MovementMode` | — |

## environmentCoverCrosses

导出接口 · 源码第 25 行。

Target-corner traces use moving-blocking walls plus explicitly configured cover regions.

```ts
export function environmentCoverCrosses(region: SceneRegion, a: ScenePoint, b: ScenePoint): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `region` | 否 | `SceneRegion` | — |
| `a` | 否 | `ScenePoint` | — |
| `b` | 否 | `ScenePoint` | — |

## environmentAt

导出接口 · 源码第 26 行。

```ts
export function environmentAt(features: SceneFeatures|undefined, point: ScenePoint): SceneRegion[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `point` | 否 | `ScenePoint` | — |
