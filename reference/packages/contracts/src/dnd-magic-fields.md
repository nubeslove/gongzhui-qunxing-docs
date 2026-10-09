# game/packages/contracts/src/dnd-magic-fields.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndSceneSpell} from './dnd-effects';
import {sceneRayBlocked,type SceneFeatures,type ScenePoint} from './scene-features';
import type {SceneRegion} from './scene-region';
import {templateContains,templatePathCuts} from './scene-template';
```
</details>

## dndFieldContains

导出接口 · 源码第 6 行。

```ts
export function dndFieldContains(features: SceneFeatures, r: SceneRegion, p: ScenePoint): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures` | — |
| `r` | 否 | `SceneRegion` | — |
| `p` | 否 | `ScenePoint` | — |

## dndAntimagicAt

导出接口 · 源码第 10 行。

```ts
export function dndAntimagicAt(features: SceneFeatures|undefined, p: ScenePoint): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `p` | 否 | `ScenePoint` | — |

## dndMagicSuppression

导出接口 · 源码第 12 行。

Suppression is a query; neither the spell instance nor its duration is changed.

```ts
export function dndMagicSuppression(features: SceneFeatures|undefined, magic: Pick<DndSceneSpell,'slot'|'origin'|'field'>, p: ScenePoint): 'antimagic'|'globe'|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `magic` | 否 | `Pick<DndSceneSpell,'slot'&#124;'origin'&#124;'field'>` | — |
| `p` | 否 | `ScenePoint` | — |

## dndFieldPathCuts

导出接口 · 源码第 19 行。

Ray intervals include field edges, so a small clear pocket never reveals fog beyond it.

```ts
export function dndFieldPathCuts(features: SceneFeatures, a: ScenePoint, b: ScenePoint): number[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures` | — |
| `a` | 否 | `ScenePoint` | — |
| `b` | 否 | `ScenePoint` | — |

## dndSpellLightAt

导出接口 · 源码第 20 行。

```ts
export function dndSpellLightAt(features: SceneFeatures, l: import('./scene-features').SceneLight, p: ScenePoint): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures` | — |
| `l` | 否 | `import('./scene-features').SceneLight` | — |
| `p` | 否 | `ScenePoint` | — |
