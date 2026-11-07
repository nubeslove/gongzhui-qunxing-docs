# game/packages/game-core/src/lancer/gms.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerBattle,LancerBattleStep,LancerCombatUnit,LancerDecision,ManualMap} from '@aelzerant/contracts';
import {count,counter,feature} from './features';
import {has,log,spend,unit} from './state';
import {lancerDistance,lancerUnitLineOfSight} from './geometry';
import {availableLancerTech,validateTechTarget} from './tech';
```
</details>

## activateGmsFeature

导出接口 · 源码第 8 行。

GMS expansion frames share ordinary actions, effect clocks and queued tech resolution.

```ts
export function activateGmsFeature(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, id: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `id` | 否 | `string` | — |

## offerGmsFeature

导出接口 · 源码第 34 行。

```ts
export function offerGmsFeature(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, s: Extract<LancerBattleStep,{kind:'feature'}>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'feature'}>` | — |

## respondGmsFeature

导出接口 · 源码第 49 行。

```ts
export function respondGmsFeature(b: LancerBattle, map: ManualMap, p: LancerDecision, option: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |
