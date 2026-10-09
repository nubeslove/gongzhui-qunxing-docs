# game/packages/contracts/src/scene-thumbnail.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseSceneCanvasValue,sceneCanvasStyle,type SceneCanvasStyle} from './scene-canvas';
import {isRecord} from './validation';
```
</details>

## SceneThumbnailSource

导出接口 · 源码第 4 行。

GM directory preview input. No tokens, annotations, vision or player delivery.

```ts
export interface SceneThumbnailSource {
    width: number;
    height: number;
    background: string | null;
    style: SceneCanvasStyle;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `height` | 否 | `number` | 见结构定义及所属功能文档 |
| `background` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `style` | 否 | `SceneCanvasStyle` | 见结构定义及所属功能文档 |

## sceneThumbnailSource

导出接口 · 源码第 5 行。

```ts
export function sceneThumbnailSource(width: number, height: number, background: string|null, canvas?: SceneCanvasStyle, opacity?: number): SceneThumbnailSource;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
| `background` | 否 | `string&#124;null` | — |
| `canvas` | 是 | `SceneCanvasStyle` | — |
| `opacity` | 是 | `number` | — |

## parseSceneThumbnailSource

导出接口 · 源码第 8 行。

```ts
export function parseSceneThumbnailSource(raw: unknown): SceneThumbnailSource;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
