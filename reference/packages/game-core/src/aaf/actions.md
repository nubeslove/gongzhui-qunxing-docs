# game/packages/game-core/src/aaf/actions.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {AAF_CONDITIONS,type AafSpeedMode} from '@aelzerant/contracts';
import {aafDamageType,aafModifier,aafProficiency,aafReroll,aafRoll,parseDamageDice} from '@aelzerant/rules-engine';
import type {Combatant,CombatState} from '../types';
import {gridDistance,hasLineOfSight,gridTargetCover,movementCost,cellKey} from '../geometry';
import {nextRandom} from '../random';
import {aafCheckActor,aafCondition,aafConditions,aafEndConcentration,aafIncapacitated,aafLog,aafRemoveCondition,aafSpeedValue,aafSyncQuota} from './state';
import {aafDealDamage,aafHeal} from './damage';
import {aafSpendAction} from './turn';
import {aafAbility,aafCast,aafChant,aafManipulate,aafReactAbility,aafExecuteAbility,aafDispel} from './abilities';
import {aafQueue,aafResponders} from './flow';
```
</details>

## AafAction

导出接口 · 源码第 12 行。

```ts
export type AafAction = {
    type: 'react';
    windowId: string;
    choice: 'pass' | 'opportunity' | 'ability';
    id?: string;
    targets?: string[];
} | {
    type: 'dispel';
    id: string;
    targetId: string;
    concentrationId: string;
} | {
    type: 'convert';
    from: 'standard' | 'move';
} | {
    type: 'dodge' | 'disengage' | 'prone' | 'stand' | 'roll-fire' | 'chant' | 'confirm';
} | {
    type: 'assist' | 'stabilize' | 'entangle' | 'grapple' | 'shove-prone' | 'escape';
    targetId: string;
} | {
    type: 'end-concentration';
    id: string;
} | {
    type: 'cast' | 'manipulate';
    id: string;
    targets: string[];
    prelude?: boolean;
} | {
    type: 'reroll';
    resource: 'hero' | 'story';
    index: number;
} | {
    type: 'choose-reroll';
    keep: boolean;
} | {
    type: 'step';
    x: number;
    y: number;
} | {
    type: 'march';
    mode: AafSpeedMode;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'react'` | 见结构定义及所属功能文档 |
| `分支1.windowId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.choice` | 否 | `'pass'&#124;'opportunity'&#124;'ability'` | 见结构定义及所属功能文档 |
| `分支1.id` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支1.targets` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'dispel'` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.targetId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.concentrationId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'convert'` | 见结构定义及所属功能文档 |
| `分支3.from` | 否 | `'standard'&#124;'move'` | 见结构定义及所属功能文档 |
| `分支4.type` | 否 | `'dodge'&#124;'disengage'&#124;'prone'&#124;'stand'&#124;'roll-fire'&#124;'chant'&#124;'confirm'` | 见结构定义及所属功能文档 |
| `分支5.type` | 否 | `'assist'&#124;'stabilize'&#124;'entangle'&#124;'grapple'&#124;'shove-prone'&#124;'escape'` | 见结构定义及所属功能文档 |
| `分支5.targetId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.type` | 否 | `'end-concentration'` | 见结构定义及所属功能文档 |
| `分支6.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.type` | 否 | `'cast'&#124;'manipulate'` | 见结构定义及所属功能文档 |
| `分支7.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支7.prelude` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支8.type` | 否 | `'reroll'` | 见结构定义及所属功能文档 |
| `分支8.resource` | 否 | `'hero'&#124;'story'` | 见结构定义及所属功能文档 |
| `分支8.index` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支9.type` | 否 | `'choose-reroll'` | 见结构定义及所属功能文档 |
| `分支9.keep` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.type` | 否 | `'step'` | 见结构定义及所属功能文档 |
| `分支10.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支10.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支11.type` | 否 | `'march'` | 见结构定义及所属功能文档 |
| `分支11.mode` | 否 | `AafSpeedMode` | 见结构定义及所属功能文档 |

## isAafAction

导出接口 · 源码第 24 行。

```ts
export function isAafAction(v: unknown): v is AafAction;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |

## aafPendingActor

导出接口 · 源码第 42 行。

```ts
export function aafPendingActor(state: CombatState): Combatant | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |

## aafAttack

导出接口 · 源码第 43 行。

```ts
export function aafAttack(state: CombatState, actor: Combatant, target: Combatant, mode: 'normal'|'special'|'offhand', options?: {reaction?:boolean;nonlethal?:boolean;execution?:boolean;paid?:boolean}): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `target` | 否 | `Combatant` | — |
| `mode` | 否 | `'normal'&#124;'special'&#124;'offhand'` | — |
| `options` | 是 | `{reaction?:boolean;nonlethal?:boolean;execution?:boolean;paid?:boolean}` | {} |

## aafConfirm

导出接口 · 源码第 74 行。

```ts
export function aafConfirm(state: CombatState, actor: Combatant): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |

## aafAction

导出接口 · 源码第 79 行。

```ts
export function aafAction(state: CombatState, actor: Combatant, action: AafAction): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `action` | 否 | `AafAction` | — |

## aafDrainFlow

导出接口 · 源码第 147 行。

Last declared reaction resolves first. A saved frame contains only trusted references and paid intent.

```ts
export function aafDrainFlow(state: CombatState): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
