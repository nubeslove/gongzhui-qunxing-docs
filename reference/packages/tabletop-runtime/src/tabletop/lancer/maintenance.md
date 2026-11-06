# game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseLancerNhp,parseLancerAI,actorAccess,actorControlled,actorController} from '@aelzerant/contracts';
import { parseLancerUnit, parseLancerMaintenance, type LancerMaintenanceIntent, type LancerMission, type ManualActor, type ManualTable } from '@aelzerant/contracts';
import { rebuildLancerUnit, repairLancerUnit, restLancerUnit, supplyLancerUnit } from '@aelzerant/game-core';
import { prepareLancerUnits, combatUnit, syncLancerUnit } from './combatAdapter';
import {readPilotProfile} from './pilotProfile';
import { readLancer, readyLancer } from './model';
```
</details>

## emptyLancerMission

导出接口 · 源码第 8 行。

```ts
export const emptyLancerMission: (): LancerMission;
```

## maintenanceUnit

导出接口 · 源码第 9 行。

```ts
export const maintenanceUnit: (actor: ManualActor): import("@source/packages/contracts/src/lancer-combat").LancerCombatUnit;
```

## lancerPilotHealth

导出接口 · 源码第 10 行。

```ts
export function lancerPilotHealth(actor: ManualActor): { max: number; hp: number; unconscious: boolean; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |

## applyLancerMaintenance

导出接口 · 源码第 15 行。

Runs only on the host, inside applyTableAction's cloned transaction.

```ts
export function applyLancerMaintenance(table: ManualTable, sender: string, raw: LancerMaintenanceIntent, random?: () => number, nodeExecutionId?: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `sender` | 否 | `string` | — |
| `raw` | 否 | `LancerMaintenanceIntent` | — |
| `random` | 是 | `() => number` | Math.random |
| `nodeExecutionId` | 是 | `string` | — |
