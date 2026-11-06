# game/packages/game-core/src/dnd/hands.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualTable} from '@aelzerant/contracts';
import {dndHeldMagicItems} from '@aelzerant/rules-engine';
```
</details>

## dndGrappleTargets

导出接口 · 源码第 4 行。

```ts
export function dndGrappleTargets(table: ManualTable, actor: string): import("@source/packages/contracts/src/tabletop").ManualActor[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actor` | 否 | `string` | — |

## dndOccupiedHands

导出接口 · 源码第 9 行。

A two-handed weapon only needs its second hand while attacking.

```ts
export function dndOccupiedHands(table: ManualTable, actor: string, includeWeapon?: boolean): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actor` | 否 | `string` | — |
| `includeWeapon` | 是 | `boolean` | true |
