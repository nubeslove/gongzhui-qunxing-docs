# game/packages/contracts/src/scene-template.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as obj,storyNumber as num,storyEnum as one,storyText as text} from './story';
import {templateAffectsFootprint} from './template-coverage';
import {safeMedia} from './world-library';
import type {ScenePoint} from './scene-features';
import type {RegionShape} from './scene-region';
```
</details>

## 重新导出的模块

```ts
export {templateCoverage,templateCoveredArea,templateAffectsFootprint,templateAffectsToken} from './template-coverage';
```

## SceneTemplate

导出接口 · 源码第 7 行。

```ts
export interface SceneTemplate {
    wallChannel?: 'none' | 'movement' | 'sight' | 'light' | 'sound';
    texture?: string;
    semicircle?: boolean;
    borderColor?: string;
    sort?: number;
    kind: keyof typeof TEMPLATE_SHAPES;
    origin: ScenePoint;
    distance: number;
    width: number;
    angle: number;
    rotation: number;
    cap: 'round' | 'flat';
    highlight: boolean;
    opacity: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `wallChannel` | 是 | `'none'&#124;'movement'&#124;'sight'&#124;'light'&#124;'sound'` | 见结构定义及所属功能文档 |
| `texture` | 是 | `string` | 见结构定义及所属功能文档 |
| `semicircle` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `borderColor` | 是 | `string` | 见结构定义及所属功能文档 |
| `sort` | 是 | `number` | 见结构定义及所属功能文档 |
| `kind` | 否 | `keyof typeof TEMPLATE_SHAPES` | 见结构定义及所属功能文档 |
| `origin` | 否 | `ScenePoint` | 见结构定义及所属功能文档 |
| `distance` | 否 | `number` | 见结构定义及所属功能文档 |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `angle` | 否 | `number` | 见结构定义及所属功能文档 |
| `rotation` | 否 | `number` | 见结构定义及所属功能文档 |
| `cap` | 否 | `'round'&#124;'flat'` | 见结构定义及所属功能文档 |
| `highlight` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `opacity` | 否 | `number` | 见结构定义及所属功能文档 |

## parseSceneTemplate

导出接口 · 源码第 8 行。

```ts
export function parseSceneTemplate(raw: unknown, width: number, height: number): SceneTemplate;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |

## templateContains

导出接口 · 源码第 20 行。

Closed area for display/target preview. This does not resolve an attack or apply damage.

```ts
export function templateContains(t: SceneTemplate, p: ScenePoint): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `SceneTemplate` | — |
| `p` | 否 | `ScenePoint` | — |

## templateShape

导出接口 · 源码第 28 行。

Geometry is derived every time; a measured region has no second editable shape list.

```ts
export function templateShape(t: SceneTemplate, id?: string): RegionShape;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `SceneTemplate` | — |
| `id` | 是 | `string` | 'template' |

## templatePathCuts

导出接口 · 源码第 40 行。

Exact cut candidates for arcs and polygon sides; membership removes irrelevant intersections.

```ts
export function templatePathCuts(t: SceneTemplate, from: ScenePoint, to: ScenePoint): number[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `SceneTemplate` | — |
| `from` | 否 | `ScenePoint` | — |
| `to` | 否 | `ScenePoint` | — |

## templateCells

导出接口 · 源码第 50 行。

```ts
export function templateCells(t: SceneTemplate): {x:number;y:number}[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `SceneTemplate` | — |

## templateFromDrag

导出接口 · 源码第 54 行。

```ts
export function templateFromDrag(kind: SceneTemplate['kind'], origin: ScenePoint, end?: ScenePoint): SceneTemplate;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `kind` | 否 | `SceneTemplate['kind']` | — |
| `origin` | 否 | `ScenePoint` | — |
| `end` | 是 | `ScenePoint` | — |
