# game/packages/contracts/src/scene-canvas.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseGridPixels,DEFAULT_GRID_PIXELS} from './scene-pixels';
import {parseSceneMeasurementScale,type SceneMeasurementScale} from './scene-measurement';
import {parseSceneFrame,sceneFrameRect,type SceneFrame} from './scene-frame';
import {parseSceneInitialView,type SceneInitialView} from './scene-camera';
import {isRecord} from './validation';
```
</details>

## SceneMediaKind

导出接口 · 源码第 7 行。

Presentation coordinates are in cells; frame bounds may only change through scene.resize.

```ts
export type SceneMediaKind = 'image' | 'video';
```

## SceneForeground

导出接口 · 源码第 8 行。

```ts
export interface SceneForeground {
    src: string;
    media: SceneMediaKind;
    elevation: number;
    opacity: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `src` | 否 | `string` | 见结构定义及所属功能文档 |
| `media` | 否 | `SceneMediaKind` | 见结构定义及所属功能文档 |
| `elevation` | 否 | `number` | 见结构定义及所属功能文档 |
| `opacity` | 否 | `number` | 见结构定义及所属功能文档 |

## SceneCanvasStyle

导出接口 · 源码第 9 行。

```ts
export interface SceneCanvasStyle {
    gridPixels?: number;
    measurement?: SceneMeasurementScale;
    frame?: SceneFrame;
    backgroundMedia?: SceneMediaKind;
    foreground?: SceneForeground;
    initialView?: SceneInitialView;
    backgroundColor: string;
    gridColor: string;
    gridOpacity: number;
    offsetX: number;
    offsetY: number;
    scaleX: number;
    scaleY: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `gridPixels` | 是 | `number` | 见结构定义及所属功能文档 |
| `measurement` | 是 | `SceneMeasurementScale` | 见结构定义及所属功能文档 |
| `frame` | 是 | `SceneFrame` | 见结构定义及所属功能文档 |
| `backgroundMedia` | 是 | `SceneMediaKind` | 见结构定义及所属功能文档 |
| `foreground` | 是 | `SceneForeground` | 见结构定义及所属功能文档 |
| `initialView` | 是 | `SceneInitialView` | 见结构定义及所属功能文档 |
| `backgroundColor` | 否 | `string` | 见结构定义及所属功能文档 |
| `gridColor` | 否 | `string` | 见结构定义及所属功能文档 |
| `gridOpacity` | 否 | `number` | 见结构定义及所属功能文档 |
| `offsetX` | 否 | `number` | 见结构定义及所属功能文档 |
| `offsetY` | 否 | `number` | 见结构定义及所属功能文档 |
| `scaleX` | 否 | `number` | 见结构定义及所属功能文档 |
| `scaleY` | 否 | `number` | 见结构定义及所属功能文档 |

## SceneCanvasValue

导出接口 · 源码第 10 行。

```ts
export interface SceneCanvasValue {
    background: string | null;
    style: SceneCanvasStyle;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `background` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `style` | 否 | `SceneCanvasStyle` | 见结构定义及所属功能文档 |

## sceneCanvasStyle

导出接口 · 源码第 11 行。

```ts
export function sceneCanvasStyle(value?: SceneCanvasStyle, legacyOpacity?: number): SceneCanvasStyle;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 是 | `SceneCanvasStyle` | — |
| `legacyOpacity` | 是 | `number` | — |

## parseSceneCanvasStyle

导出接口 · 源码第 12 行。

```ts
export function parseSceneCanvasStyle(raw: unknown): SceneCanvasStyle;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseSceneCanvasValue

导出接口 · 源码第 21 行。

```ts
export function parseSceneCanvasValue(raw: unknown): SceneCanvasValue;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## changeSceneCanvas

导出接口 · 源码第 25 行。

```ts
export function changeSceneCanvas(current: SceneCanvasValue, before: unknown, value: unknown): SceneCanvasValue;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `current` | 否 | `SceneCanvasValue` | — |
| `before` | 否 | `unknown` | — |
| `value` | 否 | `unknown` | — |

## sceneBackgroundRect

导出接口 · 源码第 32 行。

Clip a transformed background to the scene and preserve its source UV rectangle.

```ts
export function sceneBackgroundRect(width: number, height: number, style?: SceneCanvasStyle): { x: number; y: number; width: number; height: number; u: number; v: number; uw: number; vh: number; } | null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
| `style` | 是 | `SceneCanvasStyle` | — |

## projectSceneCanvas

导出接口 · 源码第 38 行。

Removes source addresses the recipient cannot read; never changes the saved style.

```ts
export function projectSceneCanvas(style: SceneCanvasStyle|undefined, readable: (path:string)=>boolean): SceneCanvasStyle|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `style` | 否 | `SceneCanvasStyle&#124;undefined` | — |
| `readable` | 否 | `(path:string)=>boolean` | — |

## sceneBackgroundPlacement

导出接口 · 源码第 42 行。

```ts
export function sceneBackgroundPlacement(width: number, height: number, style?: SceneCanvasStyle): { x: number; y: number; width: number; height: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
| `style` | 是 | `SceneCanvasStyle` | — |
