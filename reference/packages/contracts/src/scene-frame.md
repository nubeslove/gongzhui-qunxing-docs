# game/packages/contracts/src/scene-frame.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isRecord} from './validation';
```
</details>

## SceneFrame

导出接口 · 源码第 3 行。

The image area is surrounded by an integer number of staging cells on each side.

```ts
export interface SceneFrame {
    width: number;
    height: number;
    padding: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `height` | 否 | `number` | 见结构定义及所属功能文档 |
| `padding` | 否 | `number` | 见结构定义及所属功能文档 |

## SceneFrameRect

导出接口 · 源码第 4 行。

```ts
export interface SceneFrameRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `height` | 否 | `number` | 见结构定义及所属功能文档 |

## parseSceneFrame

导出接口 · 源码第 5 行。

```ts
export function parseSceneFrame(raw: unknown): SceneFrame;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## paddedSceneSize

导出接口 · 源码第 10 行。

```ts
export function paddedSceneSize(frame: SceneFrame): { width: number; height: number; rect: { x: number; y: number; width: number; height: number; }; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `frame` | 否 | `SceneFrame` | — |

## sceneFrameRect

导出接口 · 源码第 13 行。

```ts
export function sceneFrameRect(width: number, height: number, frame?: SceneFrame): SceneFrameRect;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
| `frame` | 是 | `SceneFrame` | — |

## frameContains

导出接口 · 源码第 17 行。

```ts
export function frameContains(frame: SceneFrameRect, p: {x:number;y:number}): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `frame` | 否 | `SceneFrameRect` | — |
| `p` | 否 | `{x:number;y:number}` | — |
