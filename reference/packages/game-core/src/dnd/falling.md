# game/packages/game-core/src/dnd/falling.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {surfaceElevation,type DndActiveEffect,type DndMagicJob,type ManualActor,type ManualTable,type ManualToken} from '@aelzerant/contracts';
import {dndActiveSpellProfiles,dndEntry,dndHas,dndIncapacitated,dndSpeed} from '@aelzerant/rules-engine';
import {dndTokenOverlapsBlock,tokenDistance,dndSpiderSupported,dndFlightEnabled} from './movement';
import {dndActorMagicBlock} from './magic-fields';
```
</details>

## dndLandingHeight

导出接口 · 源码第 10 行。

```ts
export function dndLandingHeight(table: ManualTable, t: ManualToken): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `t` | 否 | `ManualToken` | — |

## dndIsFalling

导出接口 · 源码第 15 行。

```ts
export function dndIsFalling(table: ManualTable, id: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `id` | 否 | `string` | — |

## dndFeatherEffect

导出接口 · 源码第 23 行。

```ts
export function dndFeatherEffect(table: ManualTable, a: ManualActor): DndActiveEffect | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |

## recordDndSlowFallTime

导出接口 · 源码第 26 行。

Accrue before expiry so a bulk clock advance cannot skip safe descent.

```ts
export function recordDndSlowFallTime(table: ManualTable, a: ManualActor, e: DndActiveEffect, seconds: number): true | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `e` | 否 | `DndActiveEffect` | — |
| `seconds` | 否 | `number` | — |

## dndFallJobs

导出接口 · 源码第 35 行。

Only tracked airborne creatures fall; authored scenery and GM placement are independent.

```ts
export function dndFallJobs(table: ManualTable): DndMagicJob[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |

## resolveDndFallStep

导出接口 · 源码第 46 行。

```ts
export function resolveDndFallStep(table: ManualTable, job: Extract<DndMagicJob,{kind:'fall-step'}>, log: (text:string,...actors:ManualActor[])=>void, onEntry: (before:ManualTable,actor:string)=>DndMagicJob[]): DndMagicJob[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `job` | 否 | `Extract<DndMagicJob,{kind:'fall-step'}>` | — |
| `log` | 否 | `(text:string,...actors:ManualActor[])=>void` | — |
| `onEntry` | 否 | `(before:ManualTable,actor:string)=>DndMagicJob[]` | — |
