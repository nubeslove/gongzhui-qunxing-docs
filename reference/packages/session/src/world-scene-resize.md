# game/packages/session/src/world-scene-resize.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {assertSceneResizeRevision,assertSceneResizeReview,reviewSceneResize,resizeFootprint,translatedScenePoint,translateSceneCells,translateSceneFeatures,resizedSceneCanvas,createSceneMap,parseSceneMap,type SceneResizeSource} from '@aelzerant/contracts';
import {assertGm,requireId} from './world-validation';
import type {SceneDocument,WorldDocument,WorldHandler} from './world-types';
```
</details>

## worldSceneResizeSource

导出接口 · 源码第 4 行。

```ts
export function worldSceneResizeSource(scene: SceneDocument, world: WorldDocument): SceneResizeSource;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `scene` | 否 | `SceneDocument` | — |
| `world` | 否 | `WorldDocument` | — |
