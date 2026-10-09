# game/packages/contracts/src/drawing-shape.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {SceneDrawing,ScenePoint} from './scene-features';
```
</details>

## reduceDrawingPath

导出接口 · 源码第 3 行。

Iterative RDP reduction avoids recursion on long stylus paths.

```ts
export function reduceDrawingPath(input: readonly ScenePoint[], epsilon: number): ScenePoint[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `input` | 否 | `readonly ScenePoint[]` | — |
| `epsilon` | 否 | `number` | — |

## smoothDrawingPath

导出接口 · 源码第 11 行。

Interpolated cardinal curves keep original endpoints, with bounded samples and no viewport-dependent state.

```ts
export function smoothDrawingPath(input: readonly ScenePoint[], factor: number, closed?: boolean): ScenePoint[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `input` | 否 | `readonly ScenePoint[]` | — |
| `factor` | 否 | `number` | — |
| `closed` | 是 | `boolean` | false |

## drawingBounds

导出接口 · 源码第 19 行。

```ts
export function drawingBounds(d: SceneDrawing): { x: number; y: number; z: number; width: number; height: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `d` | 否 | `SceneDrawing` | — |

## reshapeDrawing

导出接口 · 源码第 20 行。

```ts
export function reshapeDrawing(d: SceneDrawing, patch: Partial<ReturnType<typeof drawingBounds>>): SceneDrawing;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `d` | 否 | `SceneDrawing` | — |
| `patch` | 否 | `Partial<ReturnType<typeof drawingBounds>>` | — |

## drawingHandles

导出接口 · 源码第 27 行。

Handles use map coordinates and preserve the opposite rotated corner during resizing.

```ts
export function drawingHandles(d: SceneDrawing): { id: string; resize: ScenePoint; rotate: ScenePoint; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `d` | 否 | `SceneDrawing` | — |

## transformDrawing

导出接口 · 源码第 32 行。

```ts
export function transformDrawing(d: SceneDrawing, kind: 'resize'|'rotate', p: ScenePoint, constrain?: boolean): SceneDrawing;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `d` | 否 | `SceneDrawing` | — |
| `kind` | 否 | `'resize'&#124;'rotate'` | — |
| `p` | 否 | `ScenePoint` | — |
| `constrain` | 是 | `boolean` | false |

## drawingOrderEdits

导出接口 · 源码第 41 行。

```ts
export function drawingOrderEdits(drawings: SceneDrawing[], id: string, direction: 'front'|'back'): import('./scene-feature-edits').SceneFeatureEdit[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `drawings` | 否 | `SceneDrawing[]` | — |
| `id` | 否 | `string` | — |
| `direction` | 否 | `'front'&#124;'back'` | — |
