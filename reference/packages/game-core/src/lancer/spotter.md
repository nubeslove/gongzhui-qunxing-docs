# game/packages/game-core/src/lancer/spotter.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {queueSpotterReaction} from './quick-reaction';
import type {LancerBattle,LancerBattleStep,LancerCombatUnit,LancerDecision,ManualMap} from '@aelzerant/contracts';
import {feature,counter,count} from './features';
import {lancerDistance} from './geometry';
import {has,unit,log,queueLancerActionBurn} from './state';
import {validateTechTarget} from './tech';
```
</details>

## spotterAvailable

导出接口 · 源码第 7 行。

```ts
export function spotterAvailable(b: LancerBattle, map: ManualMap, attacker: LancerCombatUnit): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `attacker` | 否 | `LancerCombatUnit` | — |

## Result

内部依赖类型 · 源码第 11 行。

```ts
type Result = Extract<LancerBattleStep, {
    kind: 'attackResult' | 'techResult';
}>;
```

## offerSpotterRoll

导出接口 · 源码第 12 行。

```ts
export function offerSpotterRoll(b: LancerBattle, u: LancerCombatUnit, s: Result): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Result` | — |

## onSpotterLock

导出接口 · 源码第 15 行。

```ts
export function onSpotterLock(b: LancerBattle, u: LancerCombatUnit, t: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit` | — |

## queueSpotterEnd

导出接口 · 源码第 23 行。

```ts
export function queueSpotterEnd(b: LancerBattle, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## offerSpotterFeature

导出接口 · 源码第 29 行。

```ts
export function offerSpotterFeature(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, s: Extract<LancerBattleStep,{kind:'feature'}>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'feature'}>` | — |

## respondSpotter

导出接口 · 源码第 38 行。

```ts
export function respondSpotter(b: LancerBattle, map: ManualMap, p: LancerDecision, option: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |
