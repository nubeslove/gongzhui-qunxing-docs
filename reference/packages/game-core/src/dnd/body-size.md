# game/packages/game-core/src/dnd/body-size.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {manualSightFeatures,sceneRayBlocked,type ManualActor,type ManualTable,type ManualToken,type DndActiveEffect} from '@aelzerant/contracts';
import {dndEntry} from '@aelzerant/rules-engine';
import {dndTokenOverlapsBlock} from './movement';
```
</details>

## dndFormSize

导出接口 · 源码第 8 行。

```ts
export const dndFormSize: (form: string): number;
```

## ensureDndSizeState

导出接口 · 源码第 9 行。

```ts
export function ensureDndSizeState(table: ManualTable, a: ManualActor): { base: number; current: number; order: number; tokens: Record<string, number>; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |

## addDndSizeChange

导出接口 · 源码第 19 行。

```ts
export function addDndSizeChange(table: ManualTable, a: ManualActor, e: DndActiveEffect, change: {by:number}|{to:number}): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `e` | 否 | `DndActiveEffect` | — |
| `change` | 否 | `{by:number}&#124;{to:number}` | — |

## dndCurrentSize

导出接口 · 源码第 20 行。

```ts
export function dndCurrentSize(table: ManualTable, a: ManualActor): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |

## dndSizeCategory

导出接口 · 源码第 21 行。

```ts
export function dndSizeCategory(table: ManualTable, a: ManualActor, replacement?: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `replacement` | 是 | `number` | — |

## dndSizePosition

导出接口 · 源码第 28 行。

```ts
export function dndSizePosition(table: ManualTable, t: ManualToken, category: number): { size: number; x: number; y: number; lancerArt?: { npc: string; grunt?: boolean; }; sceneBlock?: string; objectFootprint?: { width: number; depth: number; height: number; rotation: number; }; objectKind?: "object" | "vehicle"; lancerRiding?: import("@source/packages/contracts/src/lancer-combat").LancerRide; lancerPilotOf?: string; lancerPilotBody?: "casket" | "subaltern"; perception?: import("@source/packages/contracts/src/dnd-perception").TokenPerception; appearance?: import("@source/packages/contracts/src/token-appearance").TokenAppearance; id: string; actorId: string; name: string; z: number; color: string; hidden: boolean; model?: string; image?: string; rotation?: number; lancerOwner?: string; nonBlocking?: boolean; } | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `t` | 否 | `ManualToken` | — |
| `category` | 否 | `number` | — |

## syncDndBodySizes

导出接口 · 源码第 39 行。

Recompute active size layers instead of restoring a stale intermediate footprint.

```ts
export function syncDndBodySizes(table: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
