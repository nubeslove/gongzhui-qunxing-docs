# game/packages/game-core/src/aaf/damage.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {aafCombatDuration,type AafDamagePart,type AafDuration,type AafEffectOperation} from '@aelzerant/contracts';
import {aafDamage,aafRoll} from '@aelzerant/rules-engine';
import type {CombatState,Combatant} from '../types';
import {nextRandom} from '../random';
import {aafCheckActor,aafCondition,aafConditions,aafDefenses,aafEndConcentration,aafId,aafLog,aafRemoveCondition} from './state';
```
</details>

## aafDefeat

导出接口 · 源码第 7 行。

```ts
export function aafDefeat(state: CombatState, actor: Combatant): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |

## aafEnterWounds

导出接口 · 源码第 14 行。

```ts
export function aafEnterWounds(state: CombatState, actor: Combatant): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |

## aafExhaustion

导出接口 · 源码第 21 行。

```ts
export function aafExhaustion(state: CombatState, actor: Combatant, levels: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `levels` | 否 | `number` | — |

## aafFocusCheck

导出接口 · 源码第 28 行。

```ts
export function aafFocusCheck(state: CombatState, actor: Combatant, damage?: number, casting?: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `damage` | 是 | `number` | 0 |
| `casting` | 是 | `boolean` | false |

## aafDealDamage

导出接口 · 源码第 34 行。

```ts
export function aafDealDamage(state: CombatState, target: Combatant, parts: AafDamagePart[], options?: {sourceId?:string;critical?:number;half?:boolean;unreducible?:boolean;nonlethal?:boolean;terminal?:boolean}): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `target` | 否 | `Combatant` | — |
| `parts` | 否 | `AafDamagePart[]` | — |
| `options` | 是 | `{sourceId?:string;critical?:number;half?:boolean;unreducible?:boolean;nonlethal?:boolean;terminal?:boolean}` | {} |

## aafLoseLife

导出接口 · 源码第 60 行。

```ts
export function aafLoseLife(state: CombatState, actor: Combatant, amount: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `amount` | 否 | `number` | — |

## aafHeal

导出接口 · 源码第 64 行。

```ts
export function aafHeal(state: CombatState, actor: Combatant, amount: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `amount` | 否 | `number` | — |

## aafInjurySave

导出接口 · 源码第 71 行。

```ts
export function aafInjurySave(state: CombatState, actor: Combatant): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |

## aafAddEffect

导出接口 · 源码第 79 行。

```ts
export function aafAddEffect(state: CombatState, actor: Combatant, name: 'burning'|'bleeding'|'cold'|'shock', stacks: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `name` | 否 | `'burning'&#124;'bleeding'&#124;'cold'&#124;'shock'` | — |
| `stacks` | 否 | `number` | — |

## aafTerminal

导出接口 · 源码第 90 行。

```ts
export function aafTerminal(state: CombatState, actor: Combatant, name: 'burning'|'bleeding'|'cold'|'shock'): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `name` | 否 | `'burning'&#124;'bleeding'&#124;'cold'&#124;'shock'` | — |

## aafApplyEffect

导出接口 · 源码第 97 行。

```ts
export function aafApplyEffect(state: CombatState, target: Combatant, effect: AafEffectOperation, options?: {sourceId?:string;source?:string;duration?:AafDuration;concentrationId?:string;critical?:number;half?:boolean}): number | void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `target` | 否 | `Combatant` | — |
| `effect` | 否 | `AafEffectOperation` | — |
| `options` | 是 | `{sourceId?:string;source?:string;duration?:AafDuration;concentrationId?:string;critical?:number;half?:boolean}` | {} |
