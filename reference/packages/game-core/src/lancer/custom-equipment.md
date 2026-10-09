# game/packages/game-core/src/lancer/custom-equipment.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {LANCER_CONDITION_NAMES,parseLancerAutomation,type LancerBattle,type LancerBattleStep,type LancerCombatIntent,type LancerCombatSystem,type LancerCombatUnit,type LancerCustomAction,type ManualMap} from '@aelzerant/contracts';
import {lancerDistance,lancerUnitLineOfSight} from './geometry';
import {condition,clear,has,log,spend} from './state';
import {lancerRoll,type LancerRandom} from './dice';
import {reloadLancerWeapons} from './system-passives';
import {clearLancerHeat} from './thermal-systems';
```
</details>

## customSystemAction

导出接口 · 源码第 8 行。

```ts
export function customSystemAction(s: LancerCombatSystem, mode: string): LancerCustomAction|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `LancerCombatSystem` | — |
| `mode` | 否 | `string` | — |

## customSystemTarget

导出接口 · 源码第 13 行。

```ts
export function customSystemTarget(map: ManualMap, u: LancerCombatUnit, t: LancerCombatUnit|undefined, a: LancerCustomAction): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit&#124;undefined` | — |
| `a` | 否 | `LancerCustomAction` | — |

## useCustomSystem

导出接口 · 源码第 24 行。

The GM resolves the installed definition; intents never carry formulas/effects.

```ts
export function useCustomSystem(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, s: LancerCombatSystem, i: Extract<LancerCombatIntent,{type:'system'}>): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `LancerCombatSystem` | — |
| `i` | 否 | `Extract<LancerCombatIntent,{type:'system'}>` | — |

## resolveCustomEquipment

导出接口 · 源码第 42 行。

Resolve one node at a time so intervening saves, reactions and reloads retain order.

```ts
export function resolveCustomEquipment(b: LancerBattle, s: Extract<LancerBattleStep,{kind:'customEffect'}>, r: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'customEffect'}>` | — |
| `r` | 否 | `LancerRandom` | — |
