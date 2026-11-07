# game/packages/session/src/world-aaf-rules.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {AAF_CONDITIONS,emptyAafRules,parseAafRules,parseAafOperation,parseAafAbility,parseAafDuration,createSceneMap,type AafAttributes,type AafBoundary} from '@aelzerant/contracts';
import {AAF_CREATION,aafBuildStats,aafSkillRank,aafEquipmentStats,aafLearningPools} from '@aelzerant/rules-engine';
import {aafApplyEffect,aafApplyEffects,aafBoundary,aafCheckActor,aafConditions,aafExhaustion,aafHeal,aafLog,aafDefeat,aafAction,aafDrainFlow,aafPendingActor,isAafAction,type CombatState,type Combatant} from '@aelzerant/game-core';
import type {ActorDocument,WorldDocument,WorldHandler} from './world-types';
import {assertGm,ownedActor,requireId,requireInteger,requireText,requireRecord} from './world-validation';
import {settleAafCombat,aafRefreshMovement} from '@aelzerant/game-core';
```
</details>

## aafWorldSkillRoll

导出接口 · 源码第 8 行。

```ts
export function aafWorldSkillRoll(world: WorldDocument, document: ActorDocument, skill: string, messageId: string, context: Parameters<WorldHandler>[2]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `document` | 否 | `ActorDocument` | — |
| `skill` | 否 | `string` | — |
| `messageId` | 否 | `string` | — |
| `context` | 否 | `Parameters<WorldHandler>[2]` | — |

## aafLegacyCondition

导出接口 · 源码第 14 行。

```ts
export function aafLegacyCondition(world: WorldDocument, document: ActorDocument, id: string, effect?: ActorDocument['effects'][number]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `document` | 否 | `ActorDocument` | — |
| `id` | 否 | `string` | — |
| `effect` | 是 | `ActorDocument['effects'][number]` | — |

## prepareAafRules

导出接口 · 源码第 21 行。

Initialize only the missing extension. Existing HP/MP/focus balances never refill here.

```ts
export function prepareAafRules(actor: ActorDocument): import("@source/packages/contracts/src/aaf-rules").AafRuleState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ActorDocument` | — |

## syncAafRules

导出接口 · 源码第 35 行。

```ts
export function syncAafRules(actor: ActorDocument, combatant: Combatant): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ActorDocument` | — |
| `combatant` | 否 | `Combatant` | — |

## migrateAafCombatRules

导出接口 · 源码第 40 行。

Upgrade an old running encounter without starting a turn, refilling, or spending resources.

```ts
export function migrateAafCombatRules(world: WorldDocument): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |

## aafActorContext

导出接口 · 源码第 55 行。

```ts
export function aafActorContext(world: WorldDocument, actor: ActorDocument): { state: CombatState; actor: Combatant; combat: boolean; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `actor` | 否 | `ActorDocument` | — |

## endAafCombat

导出接口 · 源码第 62 行。

```ts
export function endAafCombat(world: WorldDocument, sceneId: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `sceneId` | 否 | `string` | — |

## aafRuleHandlers

导出接口 · 源码第 115 行。

```ts
export const aafRuleHandlers: Record<string, WorldHandler>;
```
