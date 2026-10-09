# game/packages/game-core/src/aaf/abilities.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {aafCombatDuration,type AafAbility,type AafEffectOperation} from '@aelzerant/contracts';
import {AAF_RANK_LEVELS,aafModifier,aafProficiency,aafRoll,aafUpkeepBase} from '@aelzerant/rules-engine';
import type {CombatState,Combatant} from '../types';
import {gridDistance,hasLineOfSight,gridTargetCover} from '../geometry';
import {nextRandom} from '../random';
import {aafCheckActor,aafConditions,aafEndConcentration,aafId,aafIncapacitated,aafLog,IMMOBILE} from './state';
import {aafApplyEffect,aafFocusCheck} from './damage';
import {aafSpendAction} from './turn';
import {aafQueue,aafReactionAbility} from './flow';
```
</details>

## aafAbility

导出接口 · 源码第 11 行。

```ts
export function aafAbility(actor: Combatant, id: string): AafAbility;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `Combatant` | — |
| `id` | 否 | `string` | — |

## aafExecuteAbility

导出接口 · 源码第 41 行。

```ts
export function aafExecuteAbility(state: CombatState, actor: Combatant, a: AafAbility, ids: string[], concentrationId?: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `a` | 否 | `AafAbility` | — |
| `ids` | 否 | `string[]` | — |
| `concentrationId` | 是 | `string` | — |

## aafCast

导出接口 · 源码第 71 行。

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

导出接口 · 源码第 97 行。

```ts
export function aafChant(state: CombatState, actor: Combatant): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |

## aafManipulate

导出接口 · 源码第 107 行。

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

导出接口 · 源码第 116 行。

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

导出接口 · 源码第 123 行。

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
