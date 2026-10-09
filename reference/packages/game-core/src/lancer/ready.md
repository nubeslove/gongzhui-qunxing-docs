# game/packages/game-core/src/lancer/ready.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {LANCER_QUICK_TALENT_ACTIONS} from './ability-costs';
import {LANCER_NPC_ABILITIES} from './npc';
import {parseLancerReadyReference,type LancerBattle,type LancerBattleStep,type LancerCombatIntent,type LancerCombatUnit,type LancerDecision,type LancerReadyReference,type ManualMap} from '@aelzerant/contracts';
import {lancerSystemActionName,lancerSystemDefinition} from './systems';
import {LANCER_TECH_OPTIONS} from './tech';
import {LANCER_PILOT_GEAR} from './pilot-equipment';
import {lancerPilotGear} from './pilot-gear';
import {lancerShotWeapon} from './weapon-profiles';
import {lancerDistance,lancerLineOfSight} from './geometry';
import {canReact,has,log,spend,unit,useReaction} from './state';
```
</details>

## lancerReadyReference

导出接口 · 源码第 12 行。

```ts
export function lancerReadyReference(i: LancerCombatIntent): LancerReadyReference|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `i` | 否 | `LancerCombatIntent` | — |

## sameReadyReference

导出接口 · 源码第 24 行。

```ts
export function sameReadyReference(a: LancerReadyReference, b: LancerReadyReference|null): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `LancerReadyReference` | — |
| `b` | 否 | `LancerReadyReference&#124;null` | — |

## readyDefinition

导出接口 · 源码第 25 行。

```ts
export function readyDefinition(b: LancerBattle, u: LancerCombatUnit, ref: LancerReadyReference): {intent:LancerCombatIntent;key:string;label:string};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `ref` | 否 | `LancerReadyReference` | — |

## prepareLancerAction

导出接口 · 源码第 37 行。

```ts
export function prepareLancerAction(b: LancerBattle, u: LancerCombatUnit, i: Extract<LancerCombatIntent,{type:'ready'}>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `Extract<LancerCombatIntent,{type:'ready'}>` | — |

## queueReadiedActions

导出接口 · 源码第 43 行。

```ts
export function queueReadiedActions(b: LancerBattle, map: ManualMap, subject: LancerCombatUnit, event: 'move'|'action'|'reaction'): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `subject` | 否 | `LancerCombatUnit` | — |
| `event` | 否 | `'move'&#124;'action'&#124;'reaction'` | — |

## offerReadiedAction

导出接口 · 源码第 49 行。

```ts
export function offerReadiedAction(b: LancerBattle, u: LancerCombatUnit, s: Extract<LancerBattleStep,{kind:'feature'}>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'feature'}>` | — |

## respondReadiedAction

导出接口 · 源码第 53 行。

```ts
export function respondReadiedAction(b: LancerBattle, p: LancerDecision, option: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |
