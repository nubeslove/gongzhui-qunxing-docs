# game/packages/contracts/src/scene-frame-features.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isRecord} from './validation';
import {sceneFrameRect,type SceneFrame} from './scene-frame';
import {emptySceneFeatures,parseSceneFeatures,type SceneFeatures} from './scene-features';
```
</details>

## sceneFrameFeatures

导出接口 · 源码第 5 行。

The saved canvas frame is authoritative; the lighting rectangle is a derived feature projection.

```ts
export function sceneFrameFeatures(raw: unknown, width: number, height: number, frame?: SceneFrame): SceneFeatures|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
| `frame` | 是 | `SceneFrame` | — |
