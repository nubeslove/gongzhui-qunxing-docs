# game/packages/tabletop-runtime/src/tabletop/sceneResize.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {sceneCanvasStyle,assertSceneResizeRevision,assertSceneResizeReview,reviewSceneResize,resizeFootprint,translatedScenePoint,translateSceneFeatures,resizedSceneCanvas,type ManualTable,type SceneResizeCommand,type SceneResizeSource} from '@aelzerant/contracts';
```
</details>

## tableSceneResizeSource

导出接口 · 源码第 2 行。

```ts
export function tableSceneResizeSource(table: ManualTable): SceneResizeSource;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |

## resizeTableScene

导出接口 · 源码第 5 行。

```ts
export function resizeTableScene(table: ManualTable, action: SceneResizeCommand): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `action` | 否 | `SceneResizeCommand` | — |
