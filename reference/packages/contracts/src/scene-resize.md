# game/packages/contracts/src/scene-resize.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseGridPixels} from './scene-pixels';
import {parseSceneCanvasStyle,sceneCanvasStyle,type SceneCanvasStyle} from './scene-canvas';
import {sceneFrameFeatures} from './scene-frame-features';
import {isRecord} from './validation';
import {paddedSceneSize,parseSceneFrame,sceneFrameRect,type SceneFrame,type SceneFrameRect} from './scene-frame';
import {type SceneFeatures,type ScenePoint} from './scene-features';
```
</details>

## SceneResizeRequest

导出接口 · 源码第 8 行。

```ts
export interface SceneResizeRequest {
    gridPixels?: number;
    frame: SceneFrame;
    image: keyof typeof SCENE_RESIZE_IMAGE;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `gridPixels` | 是 | `number` | 见结构定义及所属功能文档 |
| `frame` | 否 | `SceneFrame` | 见结构定义及所属功能文档 |
| `image` | 否 | `keyof typeof SCENE_RESIZE_IMAGE` | 见结构定义及所属功能文档 |

## SceneResizeTransform

导出接口 · 源码第 9 行。

```ts
export interface SceneResizeTransform {
    gridPixels?: number;
    width: number;
    height: number;
    frame: SceneFrame;
    from: SceneFrameRect;
    to: SceneFrameRect;
    dx: number;
    dy: number;
    image: SceneResizeRequest['image'];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `gridPixels` | 是 | `number` | 见结构定义及所属功能文档 |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `height` | 否 | `number` | 见结构定义及所属功能文档 |
| `frame` | 否 | `SceneFrame` | 见结构定义及所属功能文档 |
| `from` | 否 | `SceneFrameRect` | 见结构定义及所属功能文档 |
| `to` | 否 | `SceneFrameRect` | 见结构定义及所属功能文档 |
| `dx` | 否 | `number` | 见结构定义及所属功能文档 |
| `dy` | 否 | `number` | 见结构定义及所属功能文档 |
| `image` | 否 | `SceneResizeRequest['image']` | 见结构定义及所属功能文档 |

## parseSceneResizeRequest

导出接口 · 源码第 10 行。

```ts
export function parseSceneResizeRequest(raw: unknown): SceneResizeRequest;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## sceneResizeTransform

导出接口 · 源码第 13 行。

```ts
export function sceneResizeTransform(width: number, height: number, frame: SceneFrame|undefined, raw: unknown, limits: {min:number;max:number;integer:boolean}): SceneResizeTransform;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
| `frame` | 否 | `SceneFrame&#124;undefined` | — |
| `raw` | 否 | `unknown` | — |
| `limits` | 否 | `{min:number;max:number;integer:boolean}` | — |

## translatedScenePoint

导出接口 · 源码第 18 行。

```ts
export const translatedScenePoint: <T extends { x: number; y: number; }>(point: T, t: Pick<SceneResizeTransform, "dx" | "dy">): T;
```

## translateSceneCells

导出接口 · 源码第 20 行。

Cells that remain in bounds retain knowledge. New staging cells are never marked as explored.

```ts
export function translateSceneCells(cells: readonly string[], t: SceneResizeTransform): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `cells` | 否 | `readonly string[]` | — |
| `t` | 否 | `SceneResizeTransform` | — |

## translateSceneFeatures

导出接口 · 源码第 24 行。

Moving an entire coordinate origin is an edit, not movement through region boundaries.

```ts
export function translateSceneFeatures(features: SceneFeatures|undefined, t: SceneResizeTransform): SceneFeatures|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `t` | 否 | `SceneResizeTransform` | — |

## resizedSceneCanvas

导出接口 · 源码第 38 行。

```ts
export function resizedSceneCanvas(style: SceneCanvasStyle|undefined, t: SceneResizeTransform): SceneCanvasStyle;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `style` | 否 | `SceneCanvasStyle&#124;undefined` | — |
| `t` | 否 | `SceneResizeTransform` | — |
