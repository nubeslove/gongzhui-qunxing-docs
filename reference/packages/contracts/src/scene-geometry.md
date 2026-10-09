# game/packages/contracts/src/scene-geometry.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {smoothDrawingPath} from './drawing-shape';
import {drawingClosed} from './drawing-style';
import type {SceneDrawing,ScenePoint} from './scene-features';
```
</details>

## DrawingKind

导出接口 · 源码第 5 行。

```ts
export type DrawingKind = keyof typeof DRAWING_KINDS;
```

## drawingPoints

导出接口 · 源码第 6 行。

```ts
export function drawingPoints(d: SceneDrawing): ScenePoint[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `d` | 否 | `SceneDrawing` | — |

## pointInPolygon

导出接口 · 源码第 13 行。

```ts
export function pointInPolygon(p: {x:number;y:number}, points: readonly {x:number;y:number}[]): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `p` | 否 | `{x:number;y:number}` | — |
| `points` | 否 | `readonly {x:number;y:number}[]` | — |

## drawingContains

导出接口 · 源码第 20 行。

```ts
export function drawingContains(d: SceneDrawing, p: {x:number;y:number}, tolerance?: number): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `d` | 否 | `SceneDrawing` | — |
| `p` | 否 | `{x:number;y:number}` | — |
| `tolerance` | 是 | `number` | .2 |
