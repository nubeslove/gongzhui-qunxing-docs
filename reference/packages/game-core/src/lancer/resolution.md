# game/packages/game-core/src/lancer/resolution.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {persistLancerScenery} from './scene-objects';
import {handleNhpFeature,respondNhp,refreshNhpBodies} from './nhp';
import {cascadeLancerAI,respondLancerAI} from './ai-control';
import {lancerAIControlling} from './control-state';
import {queueReadiedActions,offerReadiedAction,respondReadiedAction} from './ready';
import {captureLancerPilot,lancerActivationBody,refreshLancerPilots,finishLancerEjection} from './pilot';
import {refreshLancerRiders,respondLancerRide} from './riding';
import {resolveCustomEquipment} from './custom-equipment';
import {resolveLancerCheckFeature} from './skill-checks';
import {lancerReactionEvaded} from './features';
import {offerQuickReaction,respondQuickReaction} from './quick-reaction';
import { onSpotterLock, spotterAvailable, offerSpotterRoll, offerSpotterFeature, respondSpotter } from './spotter';
import { offerLeadershipChecks,leadershipCheckAccuracy,offerLeadershipFeature, offerLeadershipDamage, offerLeadershipHarm, respondLeadership } from './leadership';
import {queueTerrainHazard,resolveTerrainHazard} from './terrain-hazards';
import { consumeLancerSkillAccuracy } from './features';
import { queueExecutioner, offerExecutioner, respondExecutioner } from './executioner';
import { offerDuelistDefense, respondDuelistDefense, offerDuelistFollowup, respondDuelistFollowup } from './duelist';
import { ignoresLancerEngagement, stopLancerEngagement } from './voluntary-movement';
import { lancerUnarmedWeapon, advanceLancerBrawler } from './unarmed';
import { lancerSystemActive, lancerCanRam, reloadLancerWeapons, lancerSystemAttackAccuracy, lancerSystemAttackResult, consumeLancerRoland, refreshLancerSystemStates, lancerHyperdenseDistant } from './system-passives';
import { LANCER_CONDITION_NAMES } from '@aelzerant/contracts';
import { lancerWeaponType } from './mimic';
import type { LancerArea, LancerBattle, LancerBattleStep, LancerCombatUnit, LancerCombatWeapon, ManualMap } from '@aelzerant/contracts';
import { techInvisible, queueTechAttackHeat, breakTechStalk, onTechMovement, validateTechMovement, offerTechSystemFeature, respondTechSystemFeature } from './tech-effects';
import { resolveLancerRepairCheck,resolveLancerTech, resolveTechResult, offerTechFeature, respondTechFeature } from './tech';
import { queueAceMiss, offerFlightTalent, respondFlightTalent } from './flight-talents';
import { pauseForDronePulse, offerDroneTalent, respondDroneTalent } from './drone-talents';
import { queueAmbush, queueRangedTalents, offerRangedTalent, respondRangedTalent } from './ranged-talents';
import { lancerAttackTalents, offerLancerAttackTalents, respondLancerAttackTalents, queueLancerGunslinger, offerLancerTalentEvent, respondLancerTalentEvent } from './talent-events';
import { lancerNpcWeaponHit, finishLancerActivation, refreshLancerNpcAuras } from './npc';
import { offerLancerSystemChoice, respondLancerSystemChoice } from './system-choices';
import { equippedLancerSystem, clearLancerHeat, queueLancerVents, resolveLancerVents, lancerHeatResistance, invalidateLancerCooler, breakLancerBatteries, stabilizeLancer } from './thermal-systems';
import { refreshLancerWeaponOperation } from './weapon-operation';
import { queueLancerSequence, offerLancerChain, respondLancerChain, resolveLancerGravity } from './weapon-sequences';
import { pullLancerToPoint } from './displacement';
import { lancerShotWeapon } from './weapon-profiles';
import { lancerWeaponRestriction, queueLancerWeaponReactions, offerLancerWeaponEvent, respondLancerWeaponEvent } from './weapon-events';
import { offerLancerPlasma, respondLancerPlasma, triggerLancerHazards } from './hazards';
import { planLancerVolley } from './volley';
import { lancerWeaponOnAttack, lancerWeaponHitEffects, lancerWeaponCriticalBonus, lancerWeaponAreaAfter } from './weapon-effects';
import { lancerMaximum } from './dice';
import { lancerCheck, lancerDie, lancerRoll, lancerDamagePool, lancerPoolDamage, type LancerRandom } from './dice';
import { areaOrigin, lancerAreaContains } from './areas';
import { lancerDistance, lancerLineOfSight, lancerUnitLineOfSight, lancerPosition } from './geometry';
import { canReact, clear, condition, has, log, unit, useReaction } from './state';
import { expireLancerEffects, lancerCover, lancerShieldDifficulty } from './effects';
import { fallLancer, lancerFlightTurnEnd, refreshLancerAltitude } from './flight';
import { refreshLancerConcealment } from './concealment';
import { addLancerGrapple, contestLancerGrapple, moveLancerDragged, refreshLancerGrapples } from './grapple';
import { askLancerPoint, respondLancerPoint } from './point-decision';
import { phaseLancer } from './phase';
import { knockbackLancer } from './displacement';
import { lancerTalentAccuracy, lancerTalentHit, breakLancerPassiveCover } from './talents';
import { triggerLancerMines } from './systems';
import { count, counter, feature, lancerUniversalAccuracy, lancerSkillAccuracy, lancerSaveAccuracy } from './features';
import {resolveLancerSceneEffect} from './scene-objects';
```
</details>

## availableWeapon

导出接口 · 源码第 58 行。

```ts
export function availableWeapon(w: LancerCombatWeapon): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `w` | 否 | `LancerCombatWeapon` | — |

## validateLancerWeaponUse

导出接口 · 源码第 59 行。

```ts
export function validateLancerWeaponUse(a: LancerCombatUnit, w: LancerCombatWeapon, reaction?: boolean, committed?: boolean, spent?: boolean, special?: Extract<LancerBattleStep,{kind:'attack'}>['special']): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |
| `reaction` | 是 | `boolean` | false |
| `committed` | 是 | `boolean` | false |
| `spent` | 是 | `boolean` | false |
| `special` | 是 | `Extract<LancerBattleStep,{kind:'attack'}>['special']` | — |

## validateWeapon

导出接口 · 源码第 67 行。

```ts
export function validateWeapon(b: LancerBattle, map: ManualMap, a: LancerCombatUnit, target: LancerCombatUnit, w: LancerCombatWeapon, reaction?: boolean, committed?: boolean, area?: LancerArea, spent?: boolean, planningRange?: number, special?: Extract<LancerBattleStep,{kind:'attack'}>['special'], secondary?: {origin:{x:number;y:number;z:number;size?:number};area:boolean}): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `a` | 否 | `LancerCombatUnit` | — |
| `target` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |
| `reaction` | 是 | `boolean` | false |
| `committed` | 是 | `boolean` | false |
| `area` | 是 | `LancerArea` | — |
| `spent` | 是 | `boolean` | false |
| `planningRange` | 是 | `number` | 0 |
| `special` | 是 | `Extract<LancerBattleStep,{kind:'attack'}>['special']` | — |
| `secondary` | 是 | `{origin:{x:number;y:number;z:number;size?:number};area:boolean}` | — |

## applyHeat

导出接口 · 源码第 123 行。

```ts
export function applyHeat(b: LancerBattle, u: LancerCombatUnit, amount: number, r: LancerRandom, resistanceApplied?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `amount` | 否 | `number` | — |
| `r` | 否 | `LancerRandom` | — |
| `resistanceApplied` | 是 | `boolean` | false |

## drainLancer

导出接口 · 源码第 278 行。

```ts
export function drainLancer(b: LancerBattle, map: ManualMap, r: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `r` | 否 | `LancerRandom` | — |

## respondLancer

导出接口 · 源码第 383 行。

```ts
export function respondLancer(b: LancerBattle, option: string, gmOverride: boolean, map: ManualMap, r: LancerRandom, point?: {x:number;y:number;z:number}, text?: string, purpose?: import('@aelzerant/contracts').LancerLeadershipPurpose): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `option` | 否 | `string` | — |
| `gmOverride` | 否 | `boolean` | — |
| `map` | 否 | `ManualMap` | — |
| `r` | 否 | `LancerRandom` | — |
| `point` | 是 | `{x:number;y:number;z:number}` | — |
| `text` | 是 | `string` | — |
| `purpose` | 是 | `import('@aelzerant/contracts').LancerLeadershipPurpose` | — |
