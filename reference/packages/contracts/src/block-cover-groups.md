# game/packages/contracts/src/block-cover-groups.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualBlock} from './tabletop';
import {lancerObjectActive} from './lancer-scene';
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

## blockCoverPolygon

导出接口 · 源码第 12 行。

The same clockwise world rotation used by LANCER's rectangular collision solids.

```ts
export function blockCoverPolygon(b: ManualBlock): Point[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `ManualBlock` | — |

## blockCoverUnion

导出接口 · 源码第 23 行。

Exact union boundary: split edges at intersections, keep only exposed segments.
Original solids remain authoritative; this never bridges a gap or fills a hole.

```ts
export function blockCoverUnion(blocks: ManualBlock[]): Point[][];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `blocks` | 否 | `ManualBlock[]` | — |

## BlockCoverGroup

导出接口 · 源码第 57 行。

```ts
export type BlockCoverGroup = {
    id: string;
    name: string;
    blocks: ManualBlock[];
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `blocks` | 否 | `ManualBlock[]` | 见结构定义及所属功能文档 |

## blockCoverGroups

导出接口 · 源码第 59 行。

Membership is explicit. Connectivity and equal elevation are re-evaluated after edits/destruction.

```ts
export function blockCoverGroups(blocks: ManualBlock[]): BlockCoverGroup[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `blocks` | 否 | `ManualBlock[]` | — |

## blockCoverGroupLabels

导出接口 · 源码第 69 行。

```ts
export function blockCoverGroupLabels(blocks: ManualBlock[]): Map<string,string>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `blocks` | 否 | `ManualBlock[]` | — |
