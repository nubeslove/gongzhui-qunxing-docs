# game/packages/game-core/src/aaf/state.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {aafCombatDuration,type AafCondition,type AafConditionEntry,type AafDuration,type AafBoundary,type AafDefense,type AafCheckKind,type AafAttribute} from '@aelzerant/contracts';
import {aafCheck,aafModifier,aafProficiency,aafSkillValue} from '@aelzerant/rules-engine';
import type {CombatState,Combatant} from '../types';
import {nextRandom} from '../random';
```
</details>

## IMMOBILE

导出接口 · 源码第 6 行。

```ts
export const IMMOBILE = ['失能', '震慑', '麻痹', '昏迷', '石化', '冻结'];
```

## aafConditions

导出接口 · 源码第 7 行。

```ts
export function aafConditions(actor: Combatant): Set<AafCondition>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `Combatant` | — |

## aafIncapacitated

导出接口 · 源码第 16 行。

```ts
export const aafIncapacitated: (actor: Combatant): boolean;
```

## aafLog

导出接口 · 源码第 17 行。

```ts
export function aafLog(state: CombatState, actor: Combatant, text: string, sourceId?: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `text` | 否 | `string` | — |
| `sourceId` | 是 | `string` | — |

## aafId

导出接口 · 源码第 18 行。

```ts
export const aafId: (state: CombatState, prefix: string): string;
```

## aafEndConcentration

导出接口 · 源码第 19 行。

```ts
export function aafEndConcentration(state: CombatState, actor: Combatant, id: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `id` | 否 | `string` | — |

## aafCondition

导出接口 · 源码第 26 行。

```ts
export function aafCondition(state: CombatState, actor: Combatant, name: AafCondition, source: string, duration?: AafDuration, sourceActorId?: string, concentrationId?: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `name` | 否 | `AafCondition` | — |
| `source` | 否 | `string` | — |
| `duration` | 是 | `AafDuration` | aafCombatDuration() |
| `sourceActorId` | 是 | `string` | — |
| `concentrationId` | 是 | `string` | — |

## aafRemoveCondition

导出接口 · 源码第 41 行。

```ts
export function aafRemoveCondition(state: CombatState, actor: Combatant, name: AafCondition): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `name` | 否 | `AafCondition` | — |

## aafExpires

导出接口 · 源码第 42 行。

```ts
export function aafExpires(duration: AafDuration, event: AafBoundary, ownerId: string, actingId?: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `duration` | 否 | `AafDuration` | — |
| `event` | 否 | `AafBoundary` | — |
| `ownerId` | 否 | `string` | — |
| `actingId` | 是 | `string` | — |

## aafBoundary

导出接口 · 源码第 46 行。

```ts
export function aafBoundary(state: CombatState, event: AafBoundary, actingId?: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `event` | 否 | `AafBoundary` | — |
| `actingId` | 是 | `string` | — |

## aafDefenses

导出接口 · 源码第 58 行。

```ts
export function aafDefenses(actor: Combatant): AafDefense[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `Combatant` | — |

## aafCheckActor

导出接口 · 源码第 67 行。

```ts
export function aafCheckActor(state: CombatState, actor: Combatant, kind: AafCheckKind, dc: number, options?: {attribute?:AafAttribute;skill?:string;flat?:number;advantage?:boolean;disadvantage?:boolean;automatic?:boolean;heroBonus?:boolean;visual?:boolean;auditory?:boolean}): import("@source/packages/contracts/src/aaf-rules").AafCheckRecord;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |
| `kind` | 否 | `AafCheckKind` | — |
| `dc` | 否 | `number` | — |
| `options` | 是 | `{attribute?:AafAttribute;skill?:string;flat?:number;advantage?:boolean;disadvantage?:boolean;automatic?:boolean;heroBonus?:boolean;visual?:boolean;auditory?:boolean}` | {} |

## aafSyncQuota

导出接口 · 源码第 84 行。

```ts
export function aafSyncQuota(state: CombatState, actor: Combatant): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |

## aafSpeedValue

导出接口 · 源码第 88 行。

```ts
export function aafSpeedValue(actor: Combatant, mode: 'walk'|'fly'|'swim'|'climb'|'burrow'): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `Combatant` | — |
| `mode` | 否 | `'walk'&#124;'fly'&#124;'swim'&#124;'climb'&#124;'burrow'` | — |
