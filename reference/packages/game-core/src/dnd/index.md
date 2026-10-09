# game/packages/game-core/src/dnd/index.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndZoneTurn,combineDndZoneJobs,dndOngoingZoneJobs,dndZoneEntryJobs,dndMoveZonePreview,moveDndZone} from './ongoing-zones';
import type {DndDamagePart} from './damage-roll';
import {dndSpellEffectRule,dndSleepImmune} from '@aelzerant/rules-engine';
import {dndObserver,sceneObserverSees,manualSightFeatures} from '@aelzerant/contracts';
import {dndBlurDisadvantage,dndMirrorIntercept,dndEndActionEffects,dndDamageEndsEffects,dndReduceSpellDamage,dndUseDeathWard,dndRemoveSpellConditions} from './combat-effects';
import {dndCharmedBy,dndAttackAbility,dndHumanoid,dndSpellChoiceOptions} from '@aelzerant/rules-engine';
import {attachDndSpellEffect,dndConsumeAttackDisadvantage} from './attach-effect';
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
import {dndCastingAbility,dndPactPool,dndSpellSlot,spendDndSpellSlot,levelUpDndCharacter} from '@aelzerant/rules-engine';
import {assertDndCanHide} from './hiding';
import {dndCanSeeActor,dndCanHearActor} from '@aelzerant/contracts';
import {dndPlayerCanTarget,dndTokenPerception} from '@aelzerant/contracts';
import {settleDndEffectTime,cleanDndEffects,startDndEffects,endDndEffectBattle,advanceDndEffectRound,dndEffectRollModifiers,endDndEffectTurn,consumeDndGuidingBolt,dndShieldBonus} from './effects';
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
import {adjudicateDnd} from './adjudication';
```
</details>

## 重新导出的模块

```ts
export {dndMoveZonePreview} from './ongoing-zones';
export * from './teleport';
export * from './scene-spells';
export * from './effects';
export * from './magic-fields';
```

## Context

内部依赖类型 · 源码第 42 行。

```ts
type Context = {
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
| `senderId` | 否 | `string` | 见结构定义及所属功能文档 |
| `memberIds` | 是 | `ReadonlySet<string>` | 见结构定义及所属功能文档 |
| `random` | 是 | `()=>number` | 见结构定义及所属功能文档 |
| `now` | 是 | `number` | 见结构定义及所属功能文档 |
| `id` | 是 | `()=>string` | 见结构定义及所属功能文档 |
| `trace` | 是 | `(event:CombatTrace)=>void` | 见结构定义及所属功能文档 |

## dndDistance

导出接口 · 源码第 45 行。

```ts
export function dndDistance(table: ManualTable, a: string, b: string): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `string` | — |
| `b` | 否 | `string` | — |

## applyDndIntent

导出接口 · 源码第 62 行。

Operates on an isolated transaction clone; any exception discards the entire change.

```ts
export function applyDndIntent(table: ManualTable, intent: DndIntent, context: Context): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `intent` | 否 | `DndIntent` | — |
| `context` | 否 | `Context` | — |
