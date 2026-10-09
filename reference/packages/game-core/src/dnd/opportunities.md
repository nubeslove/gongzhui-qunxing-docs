# game/packages/game-core/src/dnd/opportunities.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualTable,ManualToken} from '@aelzerant/contracts';
import {dndHas,dndIncapacitated,dndActiveSpellProfiles} from '@aelzerant/rules-engine';
import {dndCover} from './geometry';
import {tokenDistance} from './movement';
```
</details>

## dndOpportunitySources

导出接口 · 源码第 7 行。

A single before-leaving trigger, shared by path warnings and authoritative movement.

```ts
export function dndOpportunitySources(table: ManualTable, moving: ManualToken, next: ManualToken, declined?: readonly string[]): { source: import("@source/packages/contracts/src/tabletop").ManualActor; token: ManualToken; attacks: import("@source/packages/contracts/src/dnd").DndAttack[]; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `moving` | 否 | `ManualToken` | — |
| `next` | 否 | `ManualToken` | — |
| `declined` | 是 | `readonly string[]` | [] |
