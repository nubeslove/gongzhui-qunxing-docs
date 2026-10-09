# game/packages/game-core/src/lancer/system-passives.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerBattle, LancerCombatUnit, LancerCombatWeapon, ManualMap } from '@aelzerant/contracts';
import { lancerDistance } from './geometry';
import { condition } from './state';
```
</details>

## equippedLancerSystem

导出接口 · 源码第 11 行。

```ts
export const equippedLancerSystem: (u: LancerCombatUnit, id: string): boolean;
```

## lancerSystemActive

导出接口 · 源码第 12 行。

```ts
export const lancerSystemActive: (u: LancerCombatUnit, id: string): boolean;
```

## lancerContestSize

导出接口 · 源码第 14 行。

Temporary combat sizes never alter occupancy, movement geometry or rendered models.

```ts
export function lancerContestSize(map: ManualMap, u: LancerCombatUnit, opponents: LancerCombatUnit[]): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `opponents` | 否 | `LancerCombatUnit[]` | — |

## lancerCanRam

导出接口 · 源码第 20 行。

```ts
export function lancerCanRam(map: ManualMap, u: LancerCombatUnit, t: LancerCombatUnit): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit` | — |

## reloadLancerWeapons

导出接口 · 源码第 21 行。

```ts
export function reloadLancerWeapons(u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |

## lancerSystemAttackAccuracy

导出接口 · 源码第 27 行。

Called only when an actual attack roll is about to be made.

```ts
export function lancerSystemAttackAccuracy(b: LancerBattle, u: LancerCombatUnit, ranged: boolean): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `ranged` | 否 | `boolean` | — |

## lancerSystemAttackResult

导出接口 · 源码第 35 行。

```ts
export function lancerSystemAttackResult(u: LancerCombatUnit, w: LancerCombatWeapon, hit: boolean, rolled: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |
| `hit` | 否 | `boolean` | — |
| `rolled` | 否 | `boolean` | — |

## consumeLancerRoland

导出接口 · 源码第 38 行。

```ts
export function consumeLancerRoland(u: LancerCombatUnit, w: LancerCombatWeapon): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |

## refreshLancerSystemStates

导出接口 · 源码第 42 行。

```ts
export function refreshLancerSystemStates(u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |

## lancerHyperdenseDistant

导出接口 · 源码第 50 行。

```ts
export function lancerHyperdenseDistant(map: ManualMap, u: LancerCombatUnit, target: LancerCombatUnit): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `target` | 否 | `LancerCombatUnit` | — |
