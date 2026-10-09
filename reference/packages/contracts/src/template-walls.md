# game/packages/contracts/src/template-walls.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {wallRayRestriction,type WallChannel} from './scene-perception';
import type {SceneWall} from './scene-features';
import {templateShape,type SceneTemplate} from './scene-template';
import {clipCoveragePolygon as clip,templateCoveredPolygon,type TemplateFootprint} from './template-coverage';
```
</details>

## Point

内部依赖类型 · 源码第 5 行。

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

## templateVisiblePolygons

导出接口 · 源码第 10 行。

Split at each shadow boundary, preserving exact polygon areas and the terrain wall's second crossing.

```ts
export function templateVisiblePolygons(t: SceneTemplate, walls: readonly SceneWall[]): Point[][];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `SceneTemplate` | — |
| `walls` | 否 | `readonly SceneWall[]` | — |

## walledTemplateArea

导出接口 · 源码第 30 行。

```ts
export function walledTemplateArea(t: SceneTemplate, box: TemplateFootprint, walls: readonly SceneWall[]): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `SceneTemplate` | — |
| `box` | 否 | `TemplateFootprint` | — |
| `walls` | 否 | `readonly SceneWall[]` | — |

## walledTemplateAffects

导出接口 · 源码第 33 行。

```ts
export function walledTemplateAffects(t: SceneTemplate, box: TemplateFootprint, walls: readonly SceneWall[]): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `SceneTemplate` | — |
| `box` | 否 | `TemplateFootprint` | — |
| `walls` | 否 | `readonly SceneWall[]` | — |

## walledTemplateCells

导出接口 · 源码第 34 行。

```ts
export function walledTemplateCells(t: SceneTemplate, walls: readonly SceneWall[]): Point[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `SceneTemplate` | — |
| `walls` | 否 | `readonly SceneWall[]` | — |
