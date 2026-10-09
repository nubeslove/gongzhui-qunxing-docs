# game/packages/game-core/src/aaf/flow.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {AafAbility,AafFlowFrame,AafFlowOperation,AafTrigger,AafReactionWindow} from '@aelzerant/contracts';
import type {Combatant,CombatState} from '../types';
import {gridDistance,hasLineOfSight} from '../geometry';
import {aafConditions,aafId,aafIncapacitated,aafLog} from './state';
```
</details>

## aafReactionAbility

导出接口 · 源码第 6 行。

```ts
export function aafReactionAbility(state: CombatState, reactor: Combatant, frame: AafFlowFrame, ability: AafAbility): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `reactor` | 否 | `Combatant` | — |
| `frame` | 否 | `AafFlowFrame` | — |
| `ability` | 否 | `AafAbility` | — |

## aafOpportunity

导出接口 · 源码第 17 行。

```ts
export function aafOpportunity(state: CombatState, reactor: Combatant, source: Combatant, event: AafTrigger): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `reactor` | 否 | `Combatant` | — |
| `source` | 否 | `Combatant` | — |
| `event` | 否 | `AafTrigger` | — |

## aafQueue

导出接口 · 源码第 23 行。

```ts
export function aafQueue(state: CombatState, actor: Combatant, label: string, event: AafTrigger, operation: AafFlowOperation, provoke?: boolean): AafFlowFrame;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `label` | 否 | `string` | — |
| `event` | 否 | `AafTrigger` | — |
| `operation` | 否 | `AafFlowOperation` | — |
| `provoke` | 是 | `boolean` | false |

## aafResponders

导出接口 · 源码第 33 行。

```ts
export function aafResponders(state: CombatState, frame: AafFlowFrame): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `frame` | 否 | `AafFlowFrame` | — |

## aafReactionWindow

导出接口 · 源码第 36 行。

```ts
export function aafReactionWindow(state: CombatState): AafReactionWindow|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
