# game/packages/contracts/src/scene-resize-review.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptySceneFeatures,type SceneFeatures} from './scene-features';
import {FEATURE_LAYERS,type FeatureLayer} from './scene-feature-edits';
import type {SceneCanvasStyle} from './scene-canvas';
import {sceneResizeTransform,translateSceneFeatures,type SceneResizeTransform,type SceneResizeRequest} from './scene-resize';
```
</details>

## ResizeDocumentType

导出接口 · 源码第 6 行。

```ts
export type ResizeDocumentType = keyof typeof RESIZE_DOCUMENT_TYPES;
```

## SceneResizeObject

导出接口 · 源码第 7 行。

```ts
export interface SceneResizeObject {
    kind: ResizeDocumentType;
    id: string;
    name: string;
    points: {
        x: number;
        y: number;
    }[];
    exclusive?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `ResizeDocumentType` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `points` | 否 | `{x:number;y:number}[]` | 见结构定义及所属功能文档 |
| `points.[].x` | 否 | `number` | 见结构定义及所属功能文档 |
| `points.[].y` | 否 | `number` | 见结构定义及所属功能文档 |
| `exclusive` | 是 | `boolean` | 见结构定义及所属功能文档 |

## SceneResizeSource

导出接口 · 源码第 8 行。

```ts
export interface SceneResizeSource {
    width: number;
    height: number;
    canvas?: SceneCanvasStyle;
    features?: SceneFeatures;
    objects: SceneResizeObject[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `height` | 否 | `number` | 见结构定义及所属功能文档 |
| `canvas` | 是 | `SceneCanvasStyle` | 见结构定义及所属功能文档 |
| `features` | 是 | `SceneFeatures` | 见结构定义及所属功能文档 |
| `objects` | 否 | `SceneResizeObject[]` | 见结构定义及所属功能文档 |

## SceneResizeCommand

导出接口 · 源码第 9 行。

```ts
export interface SceneResizeCommand {
    kind: 'scene.resize';
    sceneId: string;
    expectedRevision: number;
    request: SceneResizeRequest;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'scene.resize'` | 见结构定义及所属功能文档 |
| `sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `request` | 否 | `SceneResizeRequest` | 见结构定义及所属功能文档 |

## SceneResizeReview

导出接口 · 源码第 10 行。

```ts
export interface SceneResizeReview {
    transform: SceneResizeTransform;
    counts: Record<string, number>;
    conflicts: {
        kind: string;
        id: string;
        name: string;
        reason: string;
    }[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `transform` | 否 | `SceneResizeTransform` | 见结构定义及所属功能文档 |
| `counts` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `conflicts` | 否 | `{kind:string;id:string;name:string;reason:string}[]` | 见结构定义及所属功能文档 |
| `conflicts.[].kind` | 否 | `string` | 见结构定义及所属功能文档 |
| `conflicts.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `conflicts.[].name` | 否 | `string` | 见结构定义及所属功能文档 |
| `conflicts.[].reason` | 否 | `string` | 见结构定义及所属功能文档 |

## resizeFootprint

导出接口 · 源码第 11 行。

```ts
export function resizeFootprint(kind: ResizeDocumentType, id: string, name: string, x: number, y: number, width: number, height: number): SceneResizeObject;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `kind` | 否 | `ResizeDocumentType` | — |
| `id` | 否 | `string` | — |
| `name` | 否 | `string` | — |
| `x` | 否 | `number` | — |
| `y` | 否 | `number` | — |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |

## reviewSceneResize

导出接口 · 源码第 13 行。

The preview and both authorities run the same per-document boundary checks.

```ts
export function reviewSceneResize(source: SceneResizeSource, request: unknown, limits: {min:number;max:number;integer:boolean}): SceneResizeReview;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `source` | 否 | `SceneResizeSource` | — |
| `request` | 否 | `unknown` | — |
| `limits` | 否 | `{min:number;max:number;integer:boolean}` | — |

## assertSceneResizeReview

导出接口 · 源码第 19 行。

```ts
export function assertSceneResizeReview(review: SceneResizeReview): SceneResizeTransform;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `review` | 否 | `SceneResizeReview` | — |

## assertSceneResizeRevision

导出接口 · 源码第 20 行。

```ts
export function assertSceneResizeRevision(expected: unknown, revision: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `expected` | 否 | `unknown` | — |
| `revision` | 否 | `number` | — |
