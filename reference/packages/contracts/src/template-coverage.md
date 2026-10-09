# game/packages/contracts/src/template-coverage.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {SceneTemplate} from './scene-template';
```
</details>

## Point

内部依赖类型 · 源码第 3 行。

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

## TemplateFootprint

导出接口 · 源码第 4 行。

```ts
export interface TemplateFootprint {
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

## clipCoveragePolygon

导出接口 · 源码第 8 行。

Clip a convex polygon against f(p) >= 0, retaining the exact boundary.

```ts
export function clipCoveragePolygon(points: Point[], f: (p:Point)=>number): Point[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `points` | 否 | `Point[]` | — |
| `f` | 否 | `(p:Point)=>number` | — |

## templateCoveredArea

导出接口 · 源码第 29 行。

Actual covered area, never a center-point or already-rounded cell count.

```ts
export function templateCoveredArea(t: SceneTemplate, box: TemplateFootprint): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `SceneTemplate` | — |
| `box` | 否 | `TemplateFootprint` | — |

## templateCoveredPolygon

导出接口 · 源码第 33 行。

```ts
export function templateCoveredPolygon(t: SceneTemplate, points: Point[]): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `SceneTemplate` | — |
| `points` | 否 | `Point[]` | — |

## templateCoverage

导出接口 · 源码第 51 行。

```ts
export function templateCoverage(t: SceneTemplate, box: TemplateFootprint): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `SceneTemplate` | — |
| `box` | 否 | `TemplateFootprint` | — |

## templateAffectsFootprint

导出接口 · 源码第 52 行。

```ts
export function templateAffectsFootprint(t: SceneTemplate, box: TemplateFootprint): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `SceneTemplate` | — |
| `box` | 否 | `TemplateFootprint` | — |

## templateAffectsToken

导出接口 · 源码第 53 行。

```ts
export function templateAffectsToken(t: SceneTemplate, token: {x:number;y:number;size:number}): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `SceneTemplate` | — |
| `token` | 否 | `{x:number;y:number;size:number}` | — |
