# game/packages/contracts/src/scene-grid.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## SceneGrid

导出接口 · 源码第 2 行。

One scene unit between adjacent centres. Existing `hex` saves remain pointy-top.

```ts
export type SceneGrid = 'square' | 'hex' | 'hex-flat';
```

## isHexGrid

导出接口 · 源码第 3 行。

```ts
export const isHexGrid: (grid?: SceneGrid): grid is "hex" | "hex-flat";
```

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

## Footprint

内部依赖类型 · 源码第 5 行。

```ts
type Footprint = Point & {
    size: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `size` | 否 | `number` | 见结构定义及所属功能文档 |

## hexPoint

导出接口 · 源码第 9 行。

```ts
export function hexPoint(q: number, r: number, grid?: SceneGrid): Point;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `q` | 否 | `number` | — |
| `r` | 否 | `number` | — |
| `grid` | 是 | `SceneGrid` | — |

## hexAxial

导出接口 · 源码第 10 行。

```ts
export function hexAxial(p: Point, grid?: SceneGrid): { q: number; r: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `p` | 否 | `Point` | — |
| `grid` | 是 | `SceneGrid` | — |

## hexDistance

导出接口 · 源码第 11 行。

```ts
export function hexDistance(a: Point, b: Point, grid?: SceneGrid): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `Point` | — |
| `b` | 否 | `Point` | — |
| `grid` | 是 | `SceneGrid` | — |

## snapHexToken

导出接口 · 源码第 14 行。

```ts
export function snapHexToken(center: Point, size?: number, grid?: SceneGrid): Point;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `center` | 否 | `Point` | — |
| `size` | 是 | `number` | 1 |
| `grid` | 是 | `SceneGrid` | — |

## hexFootprint

导出接口 · 源码第 16 行。

Size 1/2 and 1 occupy one hex, size 2 three hexes, size 3 seven hexes.

```ts
export function hexFootprint(t: Footprint, grid?: SceneGrid): Point[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `Footprint` | — |
| `grid` | 是 | `SceneGrid` | — |

## hexVertices

导出接口 · 源码第 17 行。

```ts
export function hexVertices(center: Point, inset?: number, grid?: SceneGrid): Point[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `center` | 否 | `Point` | — |
| `inset` | 是 | `number` | 0 |
| `grid` | 是 | `SceneGrid` | — |

## hexInBounds

导出接口 · 源码第 18 行。

```ts
export function hexInBounds(t: Footprint, width: number, depth: number, grid?: SceneGrid): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `Footprint` | — |
| `width` | 否 | `number` | — |
| `depth` | 否 | `number` | — |
| `grid` | 是 | `SceneGrid` | — |

## hexGridCells

导出接口 · 源码第 19 行。

```ts
export function hexGridCells(width: number, depth: number, grid?: SceneGrid): Point[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 否 | `number` | — |
| `depth` | 否 | `number` | — |
| `grid` | 是 | `SceneGrid` | — |

## snapGridPoint

导出接口 · 源码第 20 行。

```ts
export function snapGridPoint(p: Point, grid?: SceneGrid, size?: number): Point;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `p` | 否 | `Point` | — |
| `grid` | 是 | `SceneGrid` | — |
| `size` | 是 | `number` | 1 |

## hexTokenNeighbours

导出接口 · 源码第 21 行。

```ts
export function hexTokenNeighbours(t: Footprint, grid?: SceneGrid): Point[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `Footprint` | — |
| `grid` | 是 | `SceneGrid` | — |

## hexTokenLine

导出接口 · 源码第 22 行。

```ts
export function hexTokenLine(a: Point, b: Point, size?: number, grid?: SceneGrid): Point[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `Point` | — |
| `b` | 否 | `Point` | — |
| `size` | 是 | `number` | 1 |
| `grid` | 是 | `SceneGrid` | — |

## sceneGridLabel

导出接口 · 源码第 25 行。

Display a cell address rather than leaking fractional render coordinates into logs.

```ts
export function sceneGridLabel(t: Footprint&{z:number}, grid?: SceneGrid): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `Footprint&{z:number}` | — |
| `grid` | 是 | `SceneGrid` | — |

## sceneGridCenter

导出接口 · 源码第 28 行。

Offset column/row addresses used by image calibration, including staggered rows/columns.

```ts
export function sceneGridCenter(column: number, row: number, grid?: SceneGrid): Point;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `column` | 否 | `number` | — |
| `row` | 否 | `number` | — |
| `grid` | 是 | `SceneGrid` | — |

## sceneGridSegments

导出接口 · 源码第 31 行。

Shared edges for the editor and battle map, drawn once to keep opacity uniform.

```ts
export function sceneGridSegments(width: number, depth: number, grid?: SceneGrid): [Point,Point][];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 否 | `number` | — |
| `depth` | 否 | `number` | — |
| `grid` | 是 | `SceneGrid` | — |
