# game/packages/contracts/src/scene-fog.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isAssetPath} from './media';
```
</details>

## FogAppearance

导出接口 · 源码第 2 行。

```ts
export interface FogAppearance {
    visible?: readonly string[];
    exploredCells?: readonly string[];
    fogImage?: string;
    unexploredColor?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `visible` | 是 | `readonly string[]` | 见结构定义及所属功能文档 |
| `exploredCells` | 是 | `readonly string[]` | 见结构定义及所属功能文档 |
| `fogImage` | 是 | `string` | 见结构定义及所属功能文档 |
| `unexploredColor` | 是 | `string` | 见结构定义及所属功能文档 |

## FogRect

导出接口 · 源码第 3 行。

```ts
export interface FogRect {
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

## parseFogImage

导出接口 · 源码第 4 行。

```ts
export function parseFogImage(raw: unknown): string|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## sceneFogRegions

导出接口 · 源码第 8 行。

Merge horizontal unknown cells; edge rectangles never extend beyond fractional map dimensions.

```ts
export function sceneFogRegions(width: number, height: number, f: Pick<FogAppearance,'visible'|'exploredCells'>): FogRect[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
| `f` | 否 | `Pick<FogAppearance,'visible'&#124;'exploredCells'>` | — |
