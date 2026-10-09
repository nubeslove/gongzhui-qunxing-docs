# game/packages/game-core/src/lancer/maintenance.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { leadershipPool, leadershipCapacity } from './leadership';
import type { LancerCombatUnit, LancerRepairPlan } from '@aelzerant/contracts';
```
</details>

## lancerStructureRepairCost

导出接口 · 源码第 6 行。

```ts
export const lancerStructureRepairCost: (u: LancerCombatUnit): 2 | 1;
```

## lancerRepairCost

导出接口 · 源码第 7 行。

```ts
export const lancerRepairCost: (u: LancerCombatUnit, p: LancerRepairPlan): number;
```

## restLancerUnit

导出接口 · 源码第 8 行。

```ts
export function restLancerUnit(unit: LancerCombatUnit): LancerCombatUnit;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `unit` | 否 | `LancerCombatUnit` | — |

## repairLancerUnit

导出接口 · 源码第 13 行。

Validates the complete selection before returning a new unit. No partial charge on failure.

```ts
export function repairLancerUnit(unit: LancerCombatUnit, p: LancerRepairPlan): {unit:LancerCombatUnit;cost:number};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `unit` | 否 | `LancerCombatUnit` | — |
| `p` | 否 | `LancerRepairPlan` | — |

## rebuildLancerUnit

导出接口 · 源码第 25 行。

```ts
export function rebuildLancerUnit(unit: LancerCombatUnit): LancerCombatUnit;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `unit` | 否 | `LancerCombatUnit` | — |

## supplyLancerUnit

导出接口 · 源码第 29 行。

```ts
export function supplyLancerUnit(unit: LancerCombatUnit): LancerCombatUnit;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `unit` | 否 | `LancerCombatUnit` | — |
