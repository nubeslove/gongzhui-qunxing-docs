# game/packages/contracts/src/scene-camera.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isRecord} from './validation';
```
</details>

## SceneInitialView

导出接口 · 源码第 3 行。

Center in scene cells; zoom is relative to the engine's fitted scene view.

```ts
export interface SceneInitialView {
    x: number;
    y: number;
    zoom: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `zoom` | 否 | `number` | 见结构定义及所属功能文档 |

## parseSceneInitialView

导出接口 · 源码第 4 行。

```ts
export function parseSceneInitialView(raw: unknown): SceneInitialView;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## initialSceneView

导出接口 · 源码第 8 行。

```ts
export function initialSceneView(width: number, height: number, value?: SceneInitialView, owned?: {x:number;y:number}): SceneInitialView;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
| `value` | 是 | `SceneInitialView` | — |
| `owned` | 是 | `{x:number;y:number}` | — |

## fittedSceneZoom

导出接口 · 源码第 11 行。

```ts
export function fittedSceneZoom(width: number, height: number, tilePx: number, viewportWidth: number, viewportHeight: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
| `tilePx` | 否 | `number` | — |
| `viewportWidth` | 否 | `number` | — |
| `viewportHeight` | 否 | `number` | — |

## sceneCameraDistance

导出接口 · 源码第 12 行。

```ts
export function sceneCameraDistance(width: number, height: number, top: boolean): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
| `top` | 否 | `boolean` | — |
