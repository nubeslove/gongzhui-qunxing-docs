# game/packages/game-core/src/aaf/abilities.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {aafDistance as gridDistance} from '@aelzerant/rules-engine';
import {aafCombatDuration,type AafAbility,type AafEffectOperation,type AafCheckRecord,type AafRuleState,type AafEffectTask} from '@aelzerant/contracts';
import {AAF_RANK_LEVELS,aafModifier,aafProficiency,aafRoll,aafUpkeepBase} from '@aelzerant/rules-engine';
import type {CombatState,Combatant} from '../types';
import {hasLineOfSight,gridTargetCover} from '../geometry';
import {nextRandom} from '../random';
import {aafCheckActor,aafConditions,aafEndConcentration,aafId,aafIncapacitated,aafLog,IMMOBILE,aafCheckNeedsDecision} from './state';
import {aafApplyEffects,aafFocusCheck} from './damage';
import {aafSpendAction} from './turn';
import {aafQueue,aafReactionAbility,aafContinue} from './flow';
```
</details>

## aafAbility

导出接口 · 源码第 12 行。

```ts
export function aafAbility(actor: Combatant, id: string): AafAbility;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `Combatant` | — |
| `id` | 否 | `string` | — |

## aafExecuteAbility

导出接口 · 源码第 42 行。

```ts
export function aafExecuteAbility(state: CombatState, actor: Combatant, a: AafAbility, ids: string[], concentrationId?: string, armorChecked?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `a` | 否 | `AafAbility` | — |
| `ids` | 否 | `string[]` | — |
| `concentrationId` | 是 | `string` | — |
| `armorChecked` | 是 | `boolean` | false |

## aafApplyAbilityResult

导出接口 · 源码第 52 行。

```ts
export function aafApplyAbilityResult(state: CombatState, result: NonNullable<NonNullable<AafRuleState['pending']>['abilityResult']>, check?: AafCheckRecord): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `result` | 否 | `NonNullable<NonNullable<AafRuleState['pending']>['abilityResult']>` | — |
| `check` | 是 | `AafCheckRecord` | — |

## aafExecuteTargets

导出接口 · 源码第 69 行。

```ts
export function aafExecuteTargets(state: CombatState, actor: Combatant, a: AafAbility, ids: string[], effects: AafEffectOperation[], cid?: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `a` | 否 | `AafAbility` | — |
| `ids` | 否 | `string[]` | — |
| `effects` | 否 | `AafEffectOperation[]` | — |
| `cid` | 是 | `string` | — |

## aafCast

导出接口 · 源码第 94 行。

```ts
export function aafCast(state: CombatState, actor: Combatant, id: string, targets: string[], prelude?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `id` | 否 | `string` | — |
| `targets` | 否 | `string[]` | — |
| `prelude` | 是 | `boolean` | false |

## aafChant

导出接口 · 源码第 120 行。

```ts
export function aafChant(state: CombatState, actor: Combatant): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |

## aafManipulate

导出接口 · 源码第 130 行。

```ts
export function aafManipulate(state: CombatState, actor: Combatant, id: string, targets: string[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `id` | 否 | `string` | — |
| `targets` | 否 | `string[]` | — |

## aafReactAbility

导出接口 · 源码第 139 行。

```ts
export function aafReactAbility(state: CombatState, actor: Combatant, id: string, targets: string[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `id` | 否 | `string` | — |
| `targets` | 否 | `string[]` | — |

## aafDispel

导出接口 · 源码第 146 行。

```ts
export function aafDispel(state: CombatState, actor: Combatant, id: string, targetId: string, concentrationId: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `id` | 否 | `string` | — |
| `targetId` | 否 | `string` | — |
| `concentrationId` | 否 | `string` | — |
