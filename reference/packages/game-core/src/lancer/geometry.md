# game/packages/game-core/src/lancer/geometry.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {lancerObject,lancerObjectActive,lancerObjectToken,lancerEffectiveBlock} from '@aelzerant/contracts';
import { regionContains,regionShapes,isSmoke,lightActive,obscurityCrosses,environmentCoverCrosses,regionMovementMultiplier,sceneRayBlocked } from '@aelzerant/contracts';
import type { LancerCombatUnit, ManualBlock, ManualMap, ManualToken } from '@aelzerant/contracts';
```
</details>

## Point

内部依赖类型 · 源码第 5 行。

```ts
type Point = {
    x: number;
    y: number;
    z: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 否 | `number` | 见结构定义及所属功能文档 |

## lancerFootprintPoints

导出接口 · 源码第 18 行。

Oriented samples keep scenery targeting on the displayed model's actual footprint.

```ts
export function lancerFootprintPoints(t: ManualToken, cells?: boolean): Point[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualToken` | — |
| `cells` | 是 | `boolean` | false |

## lancerLineOfSight

导出接口 · 源码第 23 行。

```ts
export function lancerLineOfSight(map: ManualMap, a: ManualToken, b: ManualToken): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `a` | 否 | `ManualToken` | — |
| `b` | 否 | `ManualToken` | — |

## lancerUnitLineOfSight

导出接口 · 源码第 27 行。

```ts
export function lancerUnitLineOfSight(map: ManualMap, u: LancerCombatUnit, target: ManualToken): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `target` | 否 | `ManualToken` | — |

## lancerTerrainCover

导出接口 · 源码第 31 行。

Cover is traced at half height, while line of sight uses the top of the model.

```ts
export function lancerTerrainCover(map: ManualMap, a: ManualToken, t: ManualToken): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `a` | 否 | `ManualToken` | — |
| `t` | 否 | `ManualToken` | — |

## lancerDistance

导出接口 · 源码第 61 行。

Square-grid distance from occupied edges, with height measured in spaces.

```ts
export function lancerDistance(a: ManualToken, b: ManualToken): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualToken` | — |
| `b` | 否 | `ManualToken` | — |

## footprintGap

导出接口 · 源码第 65 行。

Separating axes of both rectangles, expanded in the square grid metric.

```ts
export function footprintGap(a: ManualToken, b: ManualToken): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualToken` | — |
| `b` | 否 | `ManualToken` | — |

## lancerBlockDistance

导出接口 · 源码第 71 行。

```ts
export const lancerBlockDistance: (token: ManualToken, block: ManualBlock): number;
```

## lancerBlockOverlaps

导出接口 · 源码第 72 行。

```ts
export function lancerBlockOverlaps(block: ManualBlock, token: ManualToken): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `block` | 否 | `ManualBlock` | — |
| `token` | 否 | `ManualToken` | — |

## lancerPosition

导出接口 · 源码第 76 行。

```ts
export function lancerPosition(map: ManualMap, token: ManualToken, x: number, y: number, z: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `token` | 否 | `ManualToken` | — |
| `x` | 否 | `number` | — |
| `y` | 否 | `number` | — |
| `z` | 否 | `number` | — |

## lancerTerrainContains

导出接口 · 源码第 84 行。

Difficult areas are passable volumes, independent of the visual model.

```ts
export function lancerTerrainContains(b: ManualBlock, t: ManualToken): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `ManualBlock` | — |
| `t` | 否 | `ManualToken` | — |

## lancerDifficultAt

导出接口 · 源码第 87 行。

```ts
export function lancerDifficultAt(map: ManualMap, t: ManualToken): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `t` | 否 | `ManualToken` | — |

## lancerDifficultSteps

导出接口 · 源码第 88 行。

```ts
export function lancerDifficultSteps(map: ManualMap, t: ManualToken, x: number, y: number, z: number): boolean[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `t` | 否 | `ManualToken` | — |
| `x` | 否 | `number` | — |
| `y` | 否 | `number` | — |
| `z` | 否 | `number` | — |

## lancerMovementWeights

导出接口 · 源码第 93 行。

Per-step weights also drive queue charging when a reaction interrupts a route.

```ts
export function lancerMovementWeights(map: ManualMap, t: ManualToken, x: number, y: number, z: number, hover?: boolean, climbFree?: boolean): number[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `t` | 否 | `ManualToken` | — |
| `x` | 否 | `number` | — |
| `y` | 否 | `number` | — |
| `z` | 否 | `number` | — |
| `hover` | 是 | `boolean` | false |
| `climbFree` | 是 | `boolean` | false |

## lancerMovementCost

导出接口 · 源码第 100 行。

Straight waypoint movement. Additional waypoints can be submitted around obstacles. Climbing costs double.

```ts
export function lancerMovementCost(map: ManualMap, token: ManualToken, x: number, y: number, z: number, hover?: boolean, climbFree?: boolean): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `token` | 否 | `ManualToken` | — |
| `x` | 否 | `number` | — |
| `y` | 否 | `number` | — |
| `z` | 否 | `number` | — |
| `hover` | 是 | `boolean` | false |
| `climbFree` | 是 | `boolean` | false |

## lancerFloor

导出接口 · 源码第 115 行。

Height of the supporting floor under the footprint's centre. Decorative models do not become floors.

```ts
export function lancerFloor(map: ManualMap, t: ManualToken, ceiling?: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `t` | 否 | `ManualToken` | — |
| `ceiling` | 是 | `number` | t.z |
