# game/packages/game-core/src/dnd/geometry.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { environmentCoverCrosses,sceneRayBlocked } from '@aelzerant/contracts';
import type { ManualMap, ManualToken } from '@aelzerant/contracts';
```
</details>

## Point

内部依赖类型 · 源码第 3 行。

```ts
type Point = {
    x: number;
    y: number;
    z: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 否 | `number` | 见结构定义及所属功能文档 |

## tokenCenter

导出接口 · 源码第 4 行。

```ts
export const tokenCenter: (t: ManualToken): Point;
```

## dndRayBlocked

导出接口 · 源码第 5 行。

```ts
export function dndRayBlocked(a: Point, b: Point, map: ManualMap): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `Point` | — |
| `b` | 否 | `Point` | — |
| `map` | 否 | `ManualMap` | — |

## dndCover

导出接口 · 源码第 13 行。

Four target corners and map solids. The ruler and adjudicator share grid units (5 ft).

```ts
export function dndCover(map: ManualMap, attacker: string, target: string): 0|2|5|'total';
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `attacker` | 否 | `string` | — |
| `target` | 否 | `string` | — |

## dndCoverFrom

导出接口 · 源码第 17 行。

```ts
export function dndCoverFrom(map: ManualMap, source: Point, b: ManualToken): 0|2|5|'total';
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `source` | 否 | `Point` | — |
| `b` | 否 | `ManualToken` | — |
