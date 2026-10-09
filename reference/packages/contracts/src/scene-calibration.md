# game/packages/contracts/src/scene-calibration.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {sceneFrameRect} from './scene-frame';
import {parseSceneCanvasStyle,type SceneCanvasStyle} from './scene-canvas';
```
</details>

## SceneGridCalibration

导出接口 · 源码第 3 行。

```ts
export interface SceneGridCalibration {
    start: {
        u: number;
        v: number;
    };
    end: {
        u: number;
        v: number;
    };
    columns: number;
    rows: number;
    anchorX: number;
    anchorY: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `start` | 否 | `{u:number;v:number}` | 见结构定义及所属功能文档 |
| `start.u` | 否 | `number` | 见结构定义及所属功能文档 |
| `start.v` | 否 | `number` | 见结构定义及所属功能文档 |
| `end` | 否 | `{u:number;v:number}` | 见结构定义及所属功能文档 |
| `end.u` | 否 | `number` | 见结构定义及所属功能文档 |
| `end.v` | 否 | `number` | 见结构定义及所属功能文档 |
| `columns` | 否 | `number` | 见结构定义及所属功能文档 |
| `rows` | 否 | `number` | 见结构定义及所属功能文档 |
| `anchorX` | 否 | `number` | 见结构定义及所属功能文档 |
| `anchorY` | 否 | `number` | 见结构定义及所属功能文档 |

## calibrateSceneGrid

导出接口 · 源码第 7 行。

Map a measured image rectangle to known world grid intersections without moving any document.

```ts
export function calibrateSceneGrid(width: number, height: number, style: SceneCanvasStyle, value: SceneGridCalibration): SceneCanvasStyle;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
| `style` | 否 | `SceneCanvasStyle` | — |
| `value` | 否 | `SceneGridCalibration` | — |
