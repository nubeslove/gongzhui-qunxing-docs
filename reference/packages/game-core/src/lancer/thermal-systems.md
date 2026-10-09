# game/packages/game-core/src/lancer/thermal-systems.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { LANCER_COMBAT_SYSTEM_PASSIVES, equippedLancerSystem, reloadLancerWeapons } from './system-passives';
import type { LancerBattle, LancerCombatUnit, LancerCondition, LancerTimedCondition, ManualMap } from '@aelzerant/contracts';
import { count, feature } from './features';
import { clear, has, log } from './state';
import { lancerDistance, lancerLineOfSight } from './geometry';
import { lancerRoll, type LancerRandom } from './dice';
```
</details>

## 重新导出的模块

```ts
export { equippedLancerSystem } from './system-passives';
```

## queueLancerVents

导出接口 · 源码第 17 行。

```ts
export function queueLancerVents(b: LancerBattle, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## clearLancerHeat

导出接口 · 源码第 21 行。

```ts
export function clearLancerHeat(b: LancerBattle, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## invalidateLancerCooler

导出接口 · 源码第 25 行。

```ts
export function invalidateLancerCooler(u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |

## beginLancerThermalTurn

导出接口 · 源码第 26 行。

```ts
export function beginLancerThermalTurn(b: LancerBattle, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## lancerHeatResistance

导出接口 · 源码第 33 行。

```ts
export function lancerHeatResistance(b: LancerBattle, u: LancerCombatUnit): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## resolveLancerVents

导出接口 · 源码第 34 行。

```ts
export function resolveLancerVents(b: LancerBattle, map: ManualMap, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## breakLancerBatteries

导出接口 · 源码第 40 行。

```ts
export function breakLancerBatteries(b: LancerBattle, u: LancerCombatUnit, r: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `r` | 否 | `LancerRandom` | — |

## canStabilizeCondition

导出接口 · 源码第 49 行。

Only standard conditions imposed by another character can be cleared by Stabilize.

```ts
export function canStabilizeCondition(u: LancerCombatUnit, c: LancerTimedCondition): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `c` | 否 | `LancerTimedCondition` | — |

## stabilizeLancer

导出接口 · 源码第 52 行。

```ts
export function stabilizeLancer(b: LancerBattle, u: LancerCombatUnit, primary: 'cool'|'repair', secondary?: 'reload'|'burn'|'condition', remove?: LancerCondition): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `primary` | 否 | `'cool'&#124;'repair'` | — |
| `secondary` | 是 | `'reload'&#124;'burn'&#124;'condition'` | 'reload' |
| `remove` | 是 | `LancerCondition` | — |
