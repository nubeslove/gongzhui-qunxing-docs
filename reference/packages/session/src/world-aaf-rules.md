# game/packages/session/src/world-aaf-rules.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyAafRules,parseAafRules,parseAafOperation,parseAafAbility,parseAafDuration,createSceneMap,type AafAttributes,type AafBoundary} from '@aelzerant/contracts';
import {AAF_CREATION,aafBuildStats,aafSkillRank,aafEquipmentStats,aafLearningPools} from '@aelzerant/rules-engine';
import {aafApplyEffect,aafBoundary,aafCheckActor,aafConditions,aafExhaustion,aafHeal,aafLog,aafDefeat,aafAction,aafDrainFlow,isAafAction,type CombatState,type Combatant} from '@aelzerant/game-core';
import type {ActorDocument,WorldDocument,WorldHandler} from './world-types';
import {assertGm,ownedActor,requireId,requireInteger,requireText,requireRecord} from './world-validation';
```
</details>

## prepareAafRules

导出接口 · 源码第 8 行。

Initialize only the missing extension. Existing HP/MP/focus balances never refill here.

```ts
export function prepareAafRules(actor: ActorDocument): import("@source/packages/contracts/src/aaf-rules").AafRuleState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ActorDocument` | — |

## syncAafRules

导出接口 · 源码第 22 行。

```ts
export function syncAafRules(actor: ActorDocument, combatant: Combatant): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ActorDocument` | — |
| `combatant` | 否 | `Combatant` | — |

## endAafCombat

导出接口 · 源码第 33 行。

```ts
export function endAafCombat(world: WorldDocument, sceneId: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `sceneId` | 否 | `string` | — |
