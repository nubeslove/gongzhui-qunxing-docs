# game/packages/game-core/src/lancer/geometry.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isHexGrid} from '@aelzerant/contracts';
import {hexVertices,hexDistance,hexFootprint,hexInBounds,hexTokenLine,hexTokenNeighbours,snapHexToken} from '@aelzerant/contracts';
import {lancerObject,lancerObjectActive,lancerObjectToken,lancerEffectiveBlock} from '@aelzerant/contracts';
import { regionContains,regionShapes,regionFootprintCoverage,isSmoke,lightActive,obscurityCrosses,environmentCoverCrosses,regionMovementMultiplier,sceneRayBlocked } from '@aelzerant/contracts';
import type { SceneRegion, LancerCombatUnit, ManualBlock, ManualMap, ManualToken } from '@aelzerant/contracts';
```
</details>

## Point

内部依赖类型 · 源码第 7 行。

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

## lancerRegionContains

导出接口 · 源码第 27 行。

```ts
export function lancerRegionContains(map: ManualMap, r: SceneRegion, t: ManualToken): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `r` | 否 | `SceneRegion` | — |
| `t` | 否 | `ManualToken` | — |

## lancerFootprintPoints

导出接口 · 源码第 42 行。

Oriented samples keep scenery targeting on the displayed model's actual footprint.

```ts
export function lancerFootprintPoints(t: ManualToken, cells?: boolean, map?: ManualMap): Point[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualToken` | — |
| `cells` | 是 | `boolean` | false |
| `map` | 是 | `ManualMap` | — |

## lancerLineOfSight

导出接口 · 源码第 48 行。

```ts
export function lancerLineOfSight(map: ManualMap, a: ManualToken, b: ManualToken): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `a` | 否 | `ManualToken` | — |
| `b` | 否 | `ManualToken` | — |

## lancerUnitLineOfSight

导出接口 · 源码第 52 行。

```ts
export function lancerUnitLineOfSight(map: ManualMap, u: LancerCombatUnit, target: ManualToken): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `target` | 否 | `ManualToken` | — |

## lancerTerrainCover

导出接口 · 源码第 56 行。

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

导出接口 · 源码第 88 行。

Distance between occupied cells; height remains measured in spaces.

```ts
export function lancerDistance(a: ManualToken, b: ManualToken, map?: ManualMap): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualToken` | — |
| `b` | 否 | `ManualToken` | — |
| `map` | 是 | `ManualMap` | — |

## footprintGap

导出接口 · 源码第 93 行。

Separating axes of both rectangles, expanded in the square grid metric.

```ts
export function footprintGap(a: ManualToken, b: ManualToken): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualToken` | — |
| `b` | 否 | `ManualToken` | — |

## lancerBlockDistance

导出接口 · 源码第 99 行。

```ts
export const lancerBlockDistance: (token: ManualToken, block: ManualBlock, map?: ManualMap): number;
```

## lancerBlockOverlaps

导出接口 · 源码第 100 行。

```ts
export function lancerBlockOverlaps(block: ManualBlock, token: ManualToken, map?: ManualMap): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `block` | 否 | `ManualBlock` | — |
| `token` | 否 | `ManualToken` | — |
| `map` | 是 | `ManualMap` | — |

## lancerPosition

导出接口 · 源码第 104 行。

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

导出接口 · 源码第 113 行。

Difficult areas are passable volumes, independent of the visual model.

```ts
export function lancerTerrainContains(b: ManualBlock, t: ManualToken, map?: ManualMap): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `ManualBlock` | — |
| `t` | 否 | `ManualToken` | — |
| `map` | 是 | `ManualMap` | — |

## lancerDifficultAt

导出接口 · 源码第 116 行。

```ts
export function lancerDifficultAt(map: ManualMap, t: ManualToken): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `t` | 否 | `ManualToken` | — |

## lancerDifficultSteps

导出接口 · 源码第 117 行。

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

导出接口 · 源码第 122 行。

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

导出接口 · 源码第 130 行。

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

导出接口 · 源码第 145 行。

Height of the supporting floor under the footprint's centre. Decorative models do not become floors.

```ts
export function lancerFloor(map: ManualMap, t: ManualToken, ceiling?: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `t` | 否 | `ManualToken` | — |
| `ceiling` | 是 | `number` | t.z |

## lancerPolygonCoverage

导出接口 · 源码第 156 行。

Convex polygon intersection, used for the half-cell terrain and template rule.

```ts
export function lancerPolygonCoverage(subject: {x:number;y:number}[], clip: {x:number;y:number}[]): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `subject` | 否 | `{x:number;y:number}[]` | — |
| `clip` | 否 | `{x:number;y:number}[]` | — |
