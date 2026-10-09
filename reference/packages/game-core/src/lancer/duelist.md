# game/packages/game-core/src/lancer/duelist.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerBattle, LancerBattleStep, LancerCombatIntent, LancerCombatUnit, LancerDecision, ManualMap } from '@aelzerant/contracts';
import { lancerDie, type LancerRandom } from './dice';
import { count, counter, feature } from './features';
import { lancerDistance, lancerUnitLineOfSight } from './geometry';
import { canReact, clear, has, log, spend, unit, useReaction } from './state';
import { lancerCanRam } from './system-passives';
```
</details>

## isDuelistAction

导出接口 · 源码第 12 行。

```ts
export const isDuelistAction: (id: string): boolean;
```

## duelistTarget

导出接口 · 源码第 13 行。

```ts
export function duelistTarget(map: ManualMap, u: LancerCombatUnit, target: LancerCombatUnit|undefined): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `target` | 否 | `LancerCombatUnit&#124;undefined` | — |

## duelistActionIssue

导出接口 · 源码第 18 行。

```ts
export function duelistActionIssue(u: LancerCombatUnit, id: string, free?: boolean): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `id` | 否 | `string` | — |
| `free` | 是 | `boolean` | false |

## activateDuelist

导出接口 · 源码第 25 行。

```ts
export function activateDuelist(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, i: Extract<LancerCombatIntent,{type:'ability'}>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `Extract<LancerCombatIntent,{type:'ability'}>` | — |

## gainDuelistDie

导出接口 · 源码第 37 行。

```ts
export function gainDuelistDie(b: LancerBattle, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## offerDuelistDefense

导出接口 · 源码第 42 行。

```ts
export function offerDuelistDefense(b: LancerBattle, u: LancerCombatUnit, s: Extract<LancerBattleStep,{kind:'damage'}>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'damage'}>` | — |

## respondDuelistDefense

导出接口 · 源码第 47 行。

```ts
export function respondDuelistDefense(b: LancerBattle, p: LancerDecision, option: string, r: LancerRandom): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |
| `r` | 否 | `LancerRandom` | — |

## offerDuelistFollowup

导出接口 · 源码第 61 行。

```ts
export function offerDuelistFollowup(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, s: Extract<LancerBattleStep,{kind:'feature'}>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'feature'}>` | — |

## respondDuelistFollowup

导出接口 · 源码第 65 行。

```ts
export function respondDuelistFollowup(b: LancerBattle, map: ManualMap, p: LancerDecision, option: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |
