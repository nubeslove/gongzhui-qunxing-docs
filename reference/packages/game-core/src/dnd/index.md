# game/packages/game-core/src/dnd/index.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {studyDndMagic} from './detect-magic';
import {createDndGoodberries,useDndGoodberry} from './goodberry';
import {applyDndLight,coverDndLight,dndLightTargetProblem,endDndLightSpell} from './light-spell';
import {dndWarCasterChoices} from './war-caster';
import {dndVigorProblem} from '@aelzerant/rules-engine';
import {pushDndActor} from './forced-movement';
import {finishDndAttunement} from './magic-items';
import {dndOccupiedHands} from './hands';
import {dndMagicItemRule,dndMagicItemActive,dndItemSpell} from '@aelzerant/rules-engine';
import {reduceDndSpeciesDamage,dndSpeciesDamageRiders,dndRelentlessEndurance,dndStormRetaliation} from './species-damage';
import {dndSpeciesEndTurnJobs} from './species';
import {selectedDndLegendary,payDndLegendary,assertDndLegendaryIntent,chooseDndLegendary,dndLegendaryCandidates,restoreDndLegendaryMovement} from './legendary';
import {startDndReady,cancelDndReady,dndReadyMatches,dndReadyMovePlan} from './ready';
import {dndThrownWeapon,dndWeaponStock} from '@aelzerant/rules-engine';
import {restoreDndShortResources} from '@aelzerant/rules-engine';
import {handleDndLongCasting,progressDndCasting,dndCastingReady,stopDndCasting} from './long-casting';
import {dndCastingPrepared,dndRitualCharacter} from '@aelzerant/rules-engine';
import {dndRangedMasteryReplacements,dndMasteryRestReplacements,dndMartialWeapon,dndLightAttackAvailable} from '@aelzerant/rules-engine';
import {dndWeaponProperties,dndWeaponMastery,dndAmmoItem,dndHeavyDisadvantage} from '@aelzerant/rules-engine';
import {dndMagicAuraProblem} from './magic-aura';
import {dndCreatureType,dndMagicAuraEffect} from '@aelzerant/rules-engine';
import {dndVerbalProblem,consumeDndMaterial} from './spell-components';
import {dndFallJobs,resolveDndFallStep} from './falling';
import {applyDndTeleport,dndTeleportProblem} from './teleport';
import {applyDndMonsterHit} from './monster-hits';
import {dndHealingPotion,dndEffectiveWeaponAttack,dndMaxSpeed} from '@aelzerant/rules-engine';
import {dndSmiteChoices} from './smite';
import {chooseDndRollFeature,rollDndOwnedDice,withDndRollDecisions,useDndInspiration} from './roll-decisions';
import {spendDndAttack} from './combat-economy';
import {applyDndFeature,addDndFeatureEffect,extendDndRage} from './class-features';
import {dndContextTest} from './rolls';
import {dndSaveDamageFactor} from '@aelzerant/rules-engine';
import {stabilizeDndActor,consumeDndHelp,dndGrappledAttackDisadvantage} from './class-features';
import {syncDndCombatFeatures,dndClassLevel,dndFeatureEffect,dndRaging,dndRageDamage,dndConditionImmune} from '@aelzerant/rules-engine';
import {dndCriticalThreshold,dndUntrainedArmor} from '@aelzerant/rules-engine';
import {dndZoneTurn,combineDndZoneJobs,dndOngoingZoneJobs,dndZoneEntryJobs,dndMoveZonePreview,moveDndZone} from './ongoing-zones';
import type {DndDamagePart} from './damage-roll';
import {dndSpellEffectRule,dndSleepImmune} from '@aelzerant/rules-engine';
import {dndObserver,sceneObserverSees,manualSightFeatures} from '@aelzerant/contracts';
import {dndBlurDisadvantage,dndMirrorIntercept,dndEndActionEffects,dndDamageEndsEffects,dndDamageSpellSaves,dndReduceSpellDamage,dndUseDeathWard,dndRemoveSpellConditions} from './combat-effects';
import {dndCharmedBy,dndAttackAbility,dndHumanoid,dndSpellChoiceOptions} from '@aelzerant/rules-engine';
import {attachDndSpellEffect,dndConsumeAttackDisadvantage} from './attach-effect';
import {dndResizeProblem} from './resize';
import {dndEnlargeEffect} from '@aelzerant/rules-engine';
import {DND_SPELL_EFFECTS,dndActiveSpellProfiles,dndSpellSpeedChange,dndArmorClass} from '@aelzerant/rules-engine';
import {dndStinkingNausea} from '@aelzerant/rules-engine';
import {dndActionTriggerJobs} from '@aelzerant/rules-engine';
import {applyDndStatus} from './status';
import {dndActorMagicBlock,dndCannotUseMagic,dndCastOrigin} from './magic-fields';
import {validateDndLights,setDndLights} from './lights';
import {dndTurnSpellJobs,dndGreaseSave,dndRepeatSpellSaves} from './periodic-spells';
import {createDndSceneSpell,dndRegionAffects,dndMagicRegion,dndDispelRegionProblem,removeDndSceneSpell} from './scene-spells';
import {dndSorceryRuntime} from './sorcery';
import type {DndMagicJob,DndCastCommand,DndCastFrame} from '@aelzerant/contracts';
import {syncSorcery,dndMovementBudget,innateBonus,crownActive,sorceryMetamagic} from '@aelzerant/rules-engine';
import {dndCastingAbility,dndPactPool,dndSpellSlot,spendDndSpellSlot,dndFreeSpellCast,dndSpellPayment,spendDndSpellPayment,levelUpDndCharacter} from '@aelzerant/rules-engine';
import {assertDndCanHide} from './hiding';
import {dndCanSeeActor,dndCanHearActor} from '@aelzerant/contracts';
import {dndPlayerCanTarget,dndTokenPerception} from '@aelzerant/contracts';
import {advanceDndEffectTime,settleDndEffectTime,cleanDndEffects,startDndEffects,endDndEffectBattle,advanceDndEffectRound,dndEffectRollModifiers,endDndEffectTurn,consumeDndGuidingBolt,dndShieldBonus} from './effects';
import {applyDndRest} from './rest';
import {prepareDndSpells,restSpellPreparation} from '@aelzerant/rules-engine';
import {dndSpellArea} from './areas';
import {planDndApproach} from './approach';
import {dndOpportunitySources} from './opportunities';
import {defaultSceneMeasurement,type CombatTrace,type CombatFeedback,type CombatRollDetail,type CombatVisual,type MovementPoint} from '@aelzerant/contracts';
import {actorAccess,actorControlled,actorController} from '@aelzerant/contracts';
import { DND_ABILITIES, DND_CONDITIONS, createTimedDecision, pauseTimedDecision, timedDecisionAnswer, timedDecisionDefault, timedDecisionExpired, type DndMovePlan, type DndPending, type ManualActor, type ManualTable, type DndAbility, type DndCharacter, type DndDamageType, type DndIntent, type DndTurn } from '@aelzerant/contracts';
import { DND_ABILITY_NAMES, DND_CONDITION_NAMES, DND_DAMAGE_NAMES, DND_SKILLS, dndDamage, dndDice, dndDie, dndEntry, dndHas, dndIncapacitated, dndMod, dndSpeed, dndTest } from '@aelzerant/rules-engine';
import { DND_SPELL_EXECUTORS,dndSpellRayCount } from '@aelzerant/rules-engine';
import { dndCover,dndCoverFrom } from './geometry';
import { planDndMove, tokenDistance } from './movement';
import {dndDraggedTokens,dndDragStep} from './grapple-movement';
import {dndMagicJumpStepCost} from './magic-jump';
import {adjudicateDnd} from './adjudication';
```
</details>

## 重新导出的模块

```ts
export {syncDndMagicDetection} from './detect-magic';
export {dndLightTargetProblem} from './light-spell';
export {dndWarCasterChoices} from './war-caster';
export {dndReadyMovePlan} from './ready';
export {dndCleaveProblem} from './weapon-mastery';
export {dndFeatherTargetProblem} from './feather-fall';
export {dndMoveZonePreview} from './ongoing-zones';
export * from './teleport';
export * from './scene-spells';
export * from './effects';
export * from './magic-fields';
```

## Context

内部依赖类型 · 源码第 87 行。

```ts
type Context = {
    settleFalls?: boolean;
    skipRestTime?: boolean;
    startingInitiative?: Readonly<Record<string, number>>;
    senderId: string;
    memberIds?: ReadonlySet<string>;
    random?: () => number;
    now?: number;
    id?: () => string;
    trace?: (event: CombatTrace) => void;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `settleFalls` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `skipRestTime` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `startingInitiative` | 是 | `Readonly<Record<string,number>>` | 见结构定义及所属功能文档 |
| `senderId` | 否 | `string` | 见结构定义及所属功能文档 |
| `memberIds` | 是 | `ReadonlySet<string>` | 见结构定义及所属功能文档 |
| `random` | 是 | `()=>number` | 见结构定义及所属功能文档 |
| `now` | 是 | `number` | 见结构定义及所属功能文档 |
| `id` | 是 | `()=>string` | 见结构定义及所属功能文档 |
| `trace` | 是 | `(event:CombatTrace)=>void` | 见结构定义及所属功能文档 |

## dndDistance

导出接口 · 源码第 90 行。

```ts
export function dndDistance(table: ManualTable, a: string, b: string): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `string` | — |
| `b` | 否 | `string` | — |

## rollDndInitiative

导出接口 · 源码第 95 行。

```ts
export function rollDndInitiative(table: ManualTable, a: ManualActor, random: ()=>number): { faces: number[]; natural: number; bonus: number; modifiers: { label: string; value: number; }[]; total: number; success: boolean | undefined; mode: string; autoFail: boolean; critical: boolean; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `random` | 否 | `()=>number` | — |

## applyDndIntent

导出接口 · 源码第 108 行。

Operates on an isolated transaction clone; any exception discards the entire change.

```ts
export function applyDndIntent(table: ManualTable, intent: DndIntent, context: Context): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `intent` | 否 | `DndIntent` | — |
| `context` | 否 | `Context` | — |
