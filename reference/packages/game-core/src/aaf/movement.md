# game/packages/game-core/src/aaf/movement.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {AAF_SPEED_MODES,elevationStep,elevationStepCost,elevationMovementBlocked,type AafSpeedMode,type AafFlowOperation,type AafMovementPool} from '@aelzerant/contracts';
import type {CombatState,Combatant} from '../types';
import {cellKey,gridDistance,movementCost,hasLineOfSight} from '../geometry';
import {aafConditions,aafSpeedValue,aafId,aafLog,aafIncapacitated} from './state';
import {aafSpendAction} from './turn';
import {aafQueue} from './flow';
```
</details>

## aafMovementState

导出接口 · 源码第 8 行。

```ts
export function aafMovementState(actor: Combatant): import("@source/packages/contracts/src/aaf-movement").AafTurnMovement;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `Combatant` | — |

## aafRefreshMovement

导出接口 · 源码第 9 行。

```ts
export function aafRefreshMovement(state: CombatState, actor: Combatant): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |

## aafGrantMovement

导出接口 · 源码第 14 行。

```ts
export function aafGrantMovement(state: CombatState, actor: Combatant, mode: AafSpeedMode, distance?: number, outOfTurn?: boolean): AafMovementPool;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `mode` | 否 | `AafSpeedMode` | — |
| `distance` | 是 | `number` | aafSpeedValue(actor,mode) |
| `outOfTurn` | 是 | `boolean` | false |

## aafMarch

导出接口 · 源码第 21 行。

```ts
export function aafMarch(state: CombatState, actor: Combatant, mode: AafSpeedMode): AafMovementPool | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `mode` | 否 | `AafSpeedMode` | — |

## aafMove

导出接口 · 源码第 42 行。

```ts
export function aafMove(state: CombatState, actor: Combatant, to: {x:number;y:number;z?:number}, requested: AafSpeedMode): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `to` | 否 | `{x:number;y:number;z?:number}` | — |
| `requested` | 否 | `AafSpeedMode` | — |

## aafCompleteMove

导出接口 · 源码第 50 行。

```ts
export function aafCompleteMove(state: CombatState, actor: Combatant, o: Extract<AafFlowOperation,{kind:'move'}>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `o` | 否 | `Extract<AafFlowOperation,{kind:'move'}>` | — |
