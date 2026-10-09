# game/packages/game-core/src/lancer/tech-effects.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerBattle,LancerBattleStep,LancerCombatUnit,LancerCondition,LancerDecision,LancerEffect,ManualMap,ManualToken} from '@aelzerant/contracts';
import {feature} from './features';
import {condition,has,log,unit} from './state';
import {lancerDistance,lancerLineOfSight} from './geometry';
import {askLancerPoint} from './point-decision';
```
</details>

## techCondition

导出接口 · 源码第 7 行。

```ts
export function techCondition(t: LancerCombatUnit, id: LancerCondition, source: string, timed?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `LancerCombatUnit` | — |
| `id` | 否 | `LancerCondition` | — |
| `source` | 否 | `string` | — |
| `timed` | 是 | `boolean` | false |

## techEffect

导出接口 · 源码第 10 行。

```ts
export function techEffect(b: LancerBattle, u: LancerCombatUnit, t: LancerCombatUnit, key: LancerEffect['key'], permanent?: boolean, source?: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit` | — |
| `key` | 否 | `LancerEffect['key']` | — |
| `permanent` | 是 | `boolean` | false |
| `source` | 是 | `string` | — |

## techInvisible

导出接口 · 源码第 14 行。

```ts
export function techInvisible(b: LancerBattle, a: LancerCombatUnit, t: LancerCombatUnit): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `a` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit` | — |

## breakTechStalk

导出接口 · 源码第 17 行。

```ts
export function breakTechStalk(b: LancerBattle, a: LancerCombatUnit, t: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `a` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit` | — |

## queueTechAttackHeat

导出接口 · 源码第 21 行。

Pause before the attack itself. The flag survives shield choices, saves and reconnects.

```ts
export function queueTechAttackHeat(b: LancerBattle, u: LancerCombatUnit, s: Extract<LancerBattleStep,{kind:'attack'|'tech'}>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'attack'&#124;'tech'}>` | — |

## validateTechMovement

导出接口 · 源码第 28 行。

```ts
export function validateTechMovement(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, from: ManualToken, to: Pick<ManualToken,'x'|'y'|'z'>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `from` | 否 | `ManualToken` | — |
| `to` | 否 | `Pick<ManualToken,'x'&#124;'y'&#124;'z'>` | — |

## onTechMovement

导出接口 · 源码第 38 行。

```ts
export function onTechMovement(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, from: ManualToken, s: Extract<LancerBattleStep,{kind:'move'}>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `from` | 否 | `ManualToken` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'move'}>` | — |

## beginTechTurn

导出接口 · 源码第 44 行。

```ts
export function beginTechTurn(b: LancerBattle, map: ManualMap, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## endTechTurn

导出接口 · 源码第 45 行。

```ts
export function endTechTurn(b: LancerBattle, map: ManualMap, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## applyTechSystemHit

导出接口 · 源码第 52 行。

```ts
export function applyTechSystemHit(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, t: LancerCombatUnit, option: string, ally?: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit` | — |
| `option` | 否 | `string` | — |
| `ally` | 是 | `string` | — |

## offerTechSystemFeature

导出接口 · 源码第 74 行。

```ts
export function offerTechSystemFeature(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, s: Extract<LancerBattleStep,{kind:'feature'}>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'feature'}>` | — |

## respondTechSystemFeature

导出接口 · 源码第 90 行。

```ts
export function respondTechSystemFeature(b: LancerBattle, map: ManualMap, p: LancerDecision, option: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |
