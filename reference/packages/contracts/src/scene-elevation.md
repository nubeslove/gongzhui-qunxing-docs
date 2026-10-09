# game/packages/contracts/src/scene-elevation.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {regionShapeContains,regionShapes,type SceneRegion} from './scene-region';
import {sceneRayBlocked,type SceneFeatures,type ScenePoint} from './scene-features';
import {movementForStep,type MovementChoice,type MovementMode} from './scene-environment';
import type {SceneMeasurementScale} from './scene-measurement';
import {expandMovementPath,expandPlanarMovementPath} from './movement-path';
```
</details>

## elevationLabel

导出接口 · 源码第 8 行。

World height is measured in grid cells, independently of the display unit.

```ts
export function elevationLabel(z: number, scale: SceneMeasurementScale): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `z` | 否 | `number` | — |
| `scale` | 否 | `SceneMeasurementScale` | — |

## elevationDistance

导出接口 · 源码第 11 行。

```ts
export function elevationDistance(horizontal: number, a: {z?:number}, b: {z?:number}): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `horizontal` | 否 | `number` | — |
| `a` | 否 | `{z?:number}` | — |
| `b` | 否 | `{z?:number}` | — |

## surfaceContains

导出接口 · 源码第 14 行。

```ts
export function surfaceContains(r: SceneRegion, p: Pick<ScenePoint,'x'|'y'>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `r` | 否 | `SceneRegion` | — |
| `p` | 否 | `Pick<ScenePoint,'x'&#124;'y'>` | — |

## surfaceRegionAt

导出接口 · 源码第 17 行。

```ts
export function surfaceRegionAt(features: SceneFeatures|undefined, p: Pick<ScenePoint,'x'|'y'>): SceneRegion|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `p` | 否 | `Pick<ScenePoint,'x'&#124;'y'>` | — |

## surfaceElevation

导出接口 · 源码第 20 行。

```ts
export const surfaceElevation: (features: SceneFeatures | undefined, p: Pick<ScenePoint, "x" | "y">): number;
```

## elevationTarget

导出接口 · 源码第 21 行。

```ts
export function elevationTarget(features: SceneFeatures|undefined, p: ScenePoint, choice: MovementChoice, active: readonly MovementMode[]): ScenePoint;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `p` | 否 | `ScenePoint` | — |
| `choice` | 否 | `MovementChoice` | — |
| `active` | 否 | `readonly MovementMode[]` | — |

## climbSurface

导出接口 · 源码第 27 行。

The higher of the two surfaces supplies its cliff's climb permissions.

```ts
export function climbSurface(features: SceneFeatures|undefined, a: ScenePoint, b: ScenePoint): SceneRegion|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `a` | 否 | `ScenePoint` | — |
| `b` | 否 | `ScenePoint` | — |

## elevationStep

导出接口 · 源码第 30 行。

```ts
export function elevationStep(features: SceneFeatures|undefined, a: ScenePoint, b: ScenePoint, choice: MovementChoice, active: readonly MovementMode[]): {mode:MovementMode;region?:SceneRegion};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `a` | 否 | `ScenePoint` | — |
| `b` | 否 | `ScenePoint` | — |
| `choice` | 否 | `MovementChoice` | — |
| `active` | 否 | `readonly MovementMode[]` | — |

## elevationStepCost

导出接口 · 源码第 40 行。

```ts
export function elevationStepCost(a: ScenePoint, b: ScenePoint, mode: MovementMode, climbSpeed: boolean, horizontal?: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ScenePoint` | — |
| `b` | 否 | `ScenePoint` | — |
| `mode` | 否 | `MovementMode` | — |
| `climbSpeed` | 否 | `boolean` | — |
| `horizontal` | 是 | `number` | Math.max(Math.abs(a.x-b.x),Math.abs(a.y-b.y)) |

## expandElevationPath

导出接口 · 源码第 43 行。

```ts
export function expandElevationPath(features: SceneFeatures|undefined, path: ScenePoint[], mode: MovementChoice, active: readonly MovementMode[], size?: number, orthogonal?: boolean): ScenePoint[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `path` | 否 | `ScenePoint[]` | — |
| `mode` | 否 | `MovementChoice` | — |
| `active` | 否 | `readonly MovementMode[]` | — |
| `size` | 是 | `number` | 1 |
| `orthogonal` | 是 | `boolean` | false |

## elevationCellKey

导出接口 · 源码第 56 行。

```ts
export const elevationCellKey: (p: { x: number; y: number; z?: number; }): string;
```

## elevationMovementBlocked

导出接口 · 源码第 59 行。

A climb rises beside the face, then crosses its rim; tall walls still block.

```ts
export function elevationMovementBlocked(features: SceneFeatures|undefined, a: ScenePoint, b: ScenePoint, mode: MovementMode): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `a` | 否 | `ScenePoint` | — |
| `b` | 否 | `ScenePoint` | — |
| `mode` | 否 | `MovementMode` | — |
