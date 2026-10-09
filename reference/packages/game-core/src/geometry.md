# game/packages/game-core/src/geometry.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {elevationTarget,elevationStep,elevationStepCost,elevationMovementBlocked,type MovementMode} from '@aelzerant/contracts';
import {targetCornerCover} from '@aelzerant/contracts';
import { regionMovementMultiplier, sceneRayBlocked, TERRAIN_PASSABLE, terrainExtraCost, type SceneMap, type TileSpec } from "@aelzerant/contracts";
```
</details>

## GridPoint

导出接口 · 源码第 5 行。

```ts
export interface GridPoint {
    x: number;
    y: number;
    z?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 是 | `number` | 见结构定义及所属功能文档 |

## cellKey

导出接口 · 源码第 6 行。

```ts
export const cellKey: (point: GridPoint): string;
```

## gridDistance

导出接口 · 源码第 7 行。

```ts
export const gridDistance: (a: GridPoint, b: GridPoint): number;
```

## radiusCells

导出接口 · 源码第 9 行。

Grid-radius guide using the same four-direction distance as movement, not a spell rule.

```ts
export function radiusCells(map: SceneMap, center: GridPoint, radiusFeet: number): GridPoint[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `SceneMap` | — |
| `center` | 否 | `GridPoint` | — |
| `radiusFeet` | 否 | `number` | — |

## inBounds

导出接口 · 源码第 19 行。

```ts
export function inBounds(map: SceneMap, point: GridPoint): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `SceneMap` | — |
| `point` | 否 | `GridPoint` | — |

## tileAt

导出接口 · 源码第 23 行。

```ts
export function tileAt(map: SceneMap, point: GridPoint): TileSpec | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `SceneMap` | — |
| `point` | 否 | `GridPoint` | — |

## movementCost

导出接口 · 源码第 28 行。

```ts
export function movementCost(map: SceneMap, point: GridPoint, occupied?: ReadonlySet<string>, mode?: import('@aelzerant/contracts').MovementMode): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `SceneMap` | — |
| `point` | 否 | `GridPoint` | — |
| `occupied` | 是 | `ReadonlySet<string>` | new Set() |
| `mode` | 是 | `import('@aelzerant/contracts').MovementMode` | 'walk' |

## hasLineOfSight

导出接口 · 源码第 34 行。

Supercover grid ray. Both touching cells block a diagonal corner peek.

```ts
export function hasLineOfSight(map: SceneMap, from: GridPoint, to: GridPoint, allowOpaqueTarget?: boolean, channel?: 'sight'|'light'): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `SceneMap` | — |
| `from` | 否 | `GridPoint` | — |
| `to` | 否 | `GridPoint` | — |
| `allowOpaqueTarget` | 是 | `boolean` | false |
| `channel` | 是 | `'sight'&#124;'light'` | 'sight' |

## PathCell

导出接口 · 源码第 55 行。

```ts
export interface PathCell extends GridPoint {
    cost: number;
    previous?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `cost` | 否 | `number` | 见结构定义及所属功能文档 |
| `previous` | 是 | `string` | 见结构定义及所属功能文档 |

## reachableCells

导出接口 · 源码第 84 行。

Shared Dijkstra preview: never wraps rows and accounts for occupied cells/terrain.

```ts
export function reachableCells(map: SceneMap, from: GridPoint, budget: number, occupied?: ReadonlySet<string>, mode?: MovementMode, active?: readonly MovementMode[]): Map<string, PathCell>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `SceneMap` | — |
| `from` | 否 | `GridPoint` | — |
| `budget` | 否 | `number` | — |
| `occupied` | 是 | `ReadonlySet<string>` | new Set() |
| `mode` | 是 | `MovementMode` | 'walk' |
| `active` | 是 | `readonly MovementMode[]` | [mode] |

## findPath

导出接口 · 源码第 109 行。

```ts
export function findPath(map: SceneMap, from: GridPoint, to: GridPoint, budget: number, occupied?: ReadonlySet<string>, mode?: MovementMode, active?: readonly MovementMode[]): GridPoint[] | null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `SceneMap` | — |
| `from` | 否 | `GridPoint` | — |
| `to` | 否 | `GridPoint` | — |
| `budget` | 否 | `number` | — |
| `occupied` | 是 | `ReadonlySet<string>` | new Set() |
| `mode` | 是 | `MovementMode` | 'walk' |
| `active` | 是 | `readonly MovementMode[]` | [mode] |

## gridTargetCover

导出接口 · 源码第 121 行。

```ts
export function gridTargetCover(map: SceneMap, from: GridPoint, to: GridPoint): 0|2|5|'total';
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `SceneMap` | — |
| `from` | 否 | `GridPoint` | — |
| `to` | 否 | `GridPoint` | — |
