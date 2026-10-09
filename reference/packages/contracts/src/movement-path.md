# game/packages/contracts/src/movement-path.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## MovementPoint

导出接口 · 源码第 1 行。

```ts
export interface MovementPoint {
    x: number;
    y: number;
    z: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 否 | `number` | 见结构定义及所属功能文档 |

## movementPath

导出接口 · 源码第 3 行。

Paths include the original position. Reject stale origins and malformed remote input.

```ts
export function movementPath(raw: unknown, from: MovementPoint, to: MovementPoint): MovementPoint[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `from` | 否 | `MovementPoint` | — |
| `to` | 否 | `MovementPoint` | — |

## expandMovementPath

导出接口 · 源码第 13 行。

Grid waypoints preserve turns and backtracking instead of finding a new shortest path.

```ts
export function expandMovementPath(points: MovementPoint[], orthogonal?: boolean): MovementPoint[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `points` | 否 | `MovementPoint[]` | — |
| `orthogonal` | 是 | `boolean` | false |

## expandPlanarMovementPath

导出接口 · 源码第 29 行。

On a 2D grid, height changes must not add rounded horizontal stair-steps.

```ts
export function expandPlanarMovementPath(points: MovementPoint[], orthogonal?: boolean): MovementPoint[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `points` | 否 | `MovementPoint[]` | — |
| `orthogonal` | 是 | `boolean` | false |
