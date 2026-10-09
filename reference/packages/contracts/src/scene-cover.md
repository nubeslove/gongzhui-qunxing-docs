# game/packages/contracts/src/scene-cover.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {sceneRayBlocked,type SceneFeatures,type ScenePoint} from './scene-features';
import {environmentCoverCrosses} from './scene-environment';
```
</details>

## CoverFootprint

导出接口 · 源码第 3 行。

```ts
export interface CoverFootprint extends ScenePoint {
    size?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `size` | 是 | `number` | 见结构定义及所属功能文档 |

## targetCornerCover

导出接口 · 源码第 4 行。

```ts
export function targetCornerCover(features: SceneFeatures|undefined, source: ScenePoint, target: CoverFootprint, extra?: (a:ScenePoint,b:ScenePoint)=>boolean): 0|2|5|'total';
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `source` | 否 | `ScenePoint` | — |
| `target` | 否 | `CoverFootprint` | — |
| `extra` | 是 | `(a:ScenePoint,b:ScenePoint)=>boolean` | — |
