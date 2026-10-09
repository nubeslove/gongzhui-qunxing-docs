# game/packages/game-core/src/lancer/quick-reaction.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {lancerReadyReference,sameReadyReference} from './ready';
import type {LancerBattle,LancerBattleStep,LancerCombatIntent,LancerCombatUnit,LancerDecision,ManualMap} from '@aelzerant/contracts';
import {canReact,clear,has,log,queueLancerActionBurn,spend,unit,useReaction} from './state';
import {feature} from './features';
import {lancerDistance} from './geometry';
import {LANCER_TECH_OPTIONS} from './tech';
import {lancerSystemDefinition} from './systems';
import {LANCER_QUICK_TALENT_ACTIONS} from './ability-costs';
import {LANCER_NPC_ABILITIES} from './npc';
import {lancerShotWeapon} from './weapon-profiles';
```
</details>

## quickReactionIssue

导出接口 · 源码第 13 行。

Extra actions keep the actual turn owner; own-turn talents must not trigger here.

```ts
export function quickReactionIssue(b: LancerBattle, u: LancerCombatUnit, i: LancerCombatIntent): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `LancerCombatIntent` | — |

## queueSpotterReaction

导出接口 · 源码第 36 行。

```ts
export function queueSpotterReaction(b: LancerBattle, u: LancerCombatUnit, target: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `target` | 否 | `LancerCombatUnit` | — |

## offerQuickReaction

导出接口 · 源码第 39 行。

```ts
export function offerQuickReaction(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, s: Extract<LancerBattleStep,{kind:'feature'}>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'feature'}>` | — |

## respondQuickReaction

导出接口 · 源码第 61 行。

```ts
export function respondQuickReaction(b: LancerBattle, map: ManualMap, p: LancerDecision, option: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |

## beginQuickReaction

导出接口 · 源码第 70 行。

```ts
export function beginQuickReaction(b: LancerBattle, u: LancerCombatUnit, i: LancerCombatIntent): LancerCombatIntent;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `LancerCombatIntent` | — |

## finishQuickReaction

导出接口 · 源码第 78 行。

```ts
export function finishQuickReaction(b: LancerBattle): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
