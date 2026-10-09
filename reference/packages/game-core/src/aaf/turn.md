# game/packages/game-core/src/aaf/turn.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {AafActionCost} from '@aelzerant/contracts';
import {aafRoll,aafUpkeep} from '@aelzerant/rules-engine';
import type {Combatant,CombatState} from '../types';
import {nextRandom} from '../random';
import {aafBoundary,aafConditions,aafEndConcentration,aafIncapacitated,aafLog,aafSpeedValue,aafSyncQuota} from './state';
import {aafDealDamage,aafInjurySave,aafLoseLife} from './damage';
```
</details>

## aafPayUpkeep

导出接口 · 源码第 8 行。

```ts
export function aafPayUpkeep(state: CombatState, actor: Combatant): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |

## aafTurnStart

导出接口 · 源码第 19 行。

```ts
export function aafTurnStart(state: CombatState, actor: Combatant): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |

## aafTurnEnd

导出接口 · 源码第 41 行。

```ts
export function aafTurnEnd(state: CombatState, actor: Combatant): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |

## aafSpendAction

导出接口 · 源码第 50 行。

Returns false when shock consumes the action and prevents execution. The caller commits that outcome.

```ts
export function aafSpendAction(state: CombatState, actor: Combatant, cost: AafActionCost): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `cost` | 否 | `AafActionCost` | — |
