# game/packages/contracts/src/region-coverage.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {regionShapes,type SceneRegion,type RegionShape,type RegionEventName} from './scene-region';
import {templateCoverage} from './template-coverage';
import type {ScenePoint} from './scene-features';
```
</details>

## Point

内部依赖类型 · 源码第 4 行。

```ts
type Point = {
    x: number;
    y: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |

## regionFootprintCoverage

导出接口 · 源码第 10 行。

Integrates ordered shape unions/holes, without counting already-rounded grid cells.

```ts
export function regionFootprintCoverage(r: SceneRegion, center: ScenePoint, size?: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `r` | 否 | `SceneRegion` | — |
| `center` | 否 | `ScenePoint` | — |
| `size` | 是 | `number` | 1 |

## regionAffectsFootprint

导出接口 · 源码第 32 行。

```ts
export const regionAffectsFootprint: (r: SceneRegion, p: ScenePoint, size?: number): boolean;
```

## regionEffectPathEvents

导出接口 · 源码第 33 行。

```ts
export function regionEffectPathEvents(r: SceneRegion, path: ScenePoint[], size?: number): RegionEventName[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `r` | 否 | `SceneRegion` | — |
| `path` | 否 | `ScenePoint[]` | — |
| `size` | 是 | `number` | 1 |
