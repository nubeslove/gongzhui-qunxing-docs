# game/packages/contracts/src/drawing-style.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyNumber as num,storyEnum as one,storyText as text} from './story';
import {safeMedia} from './world-library';
import type {SceneDrawing} from './scene-features';
```
</details>

## DrawingStyleExtras

导出接口 · 源码第 5 行。

```ts
export interface DrawingStyleExtras {
    fillType?: keyof typeof DRAWING_FILLS;
    texture?: string;
    textureScale?: number;
    smoothing?: number;
    textColor?: string;
    textOpacity?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `fillType` | 是 | `keyof typeof DRAWING_FILLS` | 见结构定义及所属功能文档 |
| `texture` | 是 | `string` | 见结构定义及所属功能文档 |
| `textureScale` | 是 | `number` | 见结构定义及所属功能文档 |
| `smoothing` | 是 | `number` | 见结构定义及所属功能文档 |
| `textColor` | 是 | `string` | 见结构定义及所属功能文档 |
| `textOpacity` | 是 | `number` | 见结构定义及所属功能文档 |

## DRAWING_STYLE_FIELDS

导出接口 · 源码第 6 行。

```ts
export const DRAWING_STYLE_FIELDS = ['color', 'public', 'lineWidth', 'strokeOpacity', 'fill', 'fillOpacity', 'fillType', 'texture', 'textureScale', 'smoothing', 'fontSize', 'fontFamily', 'textColor', 'textOpacity'] as const;
```

## DrawingStyle

导出接口 · 源码第 7 行。

```ts
export type DrawingStyle = Pick<SceneDrawing & DrawingStyleExtras, typeof DRAWING_STYLE_FIELDS[number]>;
```

## parseDrawingExtras

导出接口 · 源码第 8 行。

```ts
export function parseDrawingExtras(d: Record<string,unknown>): DrawingStyleExtras;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `d` | 否 | `Record<string,unknown>` | — |

## drawingFill

导出接口 · 源码第 12 行。

```ts
export const drawingFill: (d: Pick<SceneDrawing, "fill"> & DrawingStyleExtras): "none" | "solid" | "pattern";
```

## drawingClosed

导出接口 · 源码第 13 行。

```ts
export const drawingClosed: (d: Pick<SceneDrawing, "kind" | "fill"> & DrawingStyleExtras): boolean;
```

## drawingStyle

导出接口 · 源码第 15 行。

Personal defaults never copy document identity, position, point list, text or lock state.

```ts
export function drawingStyle(d: SceneDrawing&DrawingStyleExtras): DrawingStyle;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `d` | 否 | `SceneDrawing&DrawingStyleExtras` | — |

## defaultDrawingStyle

导出接口 · 源码第 16 行。

```ts
export const defaultDrawingStyle: (): DrawingStyle;
```

## publicDrawingMedia

导出接口 · 源码第 17 行。

```ts
export function publicDrawingMedia<T extends SceneDrawing&DrawingStyleExtras>(d: T, assets: readonly{path:string;public?:boolean}[]): T;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `d` | 否 | `T` | — |
| `assets` | 否 | `readonly{path:string;public?:boolean}[]` | — |
