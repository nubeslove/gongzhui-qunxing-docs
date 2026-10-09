# game/packages/contracts/src/scene-pixels.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isRecord} from './validation';
```
</details>

## DEFAULT_GRID_PIXELS

导出接口 · 源码第 2 行。

```ts
export const DEFAULT_GRID_PIXELS = 100;
```

## ScenePixelDimensions

导出接口 · 源码第 3 行。

```ts
export interface ScenePixelDimensions {
    width: number;
    height: number;
    grid: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `height` | 否 | `number` | 见结构定义及所属功能文档 |
| `grid` | 否 | `number` | 见结构定义及所属功能文档 |

## parseGridPixels

导出接口 · 源码第 5 行。

Authoring image pixels per logical cell, independent of the renderer's device pixel ratio.

```ts
export function parseGridPixels(raw: unknown): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseScenePixels

导出接口 · 源码第 8 行。

```ts
export function parseScenePixels(raw: unknown): ScenePixelDimensions;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## scenePixels

导出接口 · 源码第 13 行。

```ts
export function scenePixels(width: number, height: number, grid?: number): ScenePixelDimensions;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
| `grid` | 是 | `number` | DEFAULT_GRID_PIXELS |

## scenePixelCells

导出接口 · 源码第 15 行。

Does not move documents or round cells; scene.resize performs the existing rules-specific validation.

```ts
export function scenePixelCells(raw: unknown): { width: number; height: number; gridPixels: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## proportionalScenePixels

导出接口 · 源码第 16 行。

```ts
export function proportionalScenePixels(current: ScenePixelDimensions, key: 'width'|'height', value: number, ratio: number): ScenePixelDimensions;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `current` | 否 | `ScenePixelDimensions` | — |
| `key` | 否 | `'width'&#124;'height'` | — |
| `value` | 否 | `number` | — |
| `ratio` | 否 | `number` | — |
