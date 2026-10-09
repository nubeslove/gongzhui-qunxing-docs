# game/packages/game-core/src/lancer/battle.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {lancerSceneInteraction,syncLancerScenery,persistLancerScenery} from './scene-objects';
import {addNhpSubalterns,refreshNhpBodies,useNhp,offerNhpTurn,shutdownNhp,nhpRoot} from './nhp';
import {lancerAIControlling,lancerTurnContains,lancerGMControls} from './control-state';
import {useLancerAI,refreshLancerAI,lancerAIBudget} from './ai-control';
import {prepareLancerAction,readyDefinition,queueReadiedActions} from './ready';
import {lancerActionIssue} from './action-availability';
import {usePilotGear} from './pilot-gear';
import {lancerPilotSearchBonus,lancerActivationBody,lancerPilotActionIssue,useLancerPilot,refreshLancerPilots} from './pilot';
import {movementPath} from '@aelzerant/contracts';
import {armLancerDecision,canAnswerLancerDecision} from './decisions';
import {beginQuickReaction,finishQuickReaction} from './quick-reaction';
import {queueLancerWeaponReactions} from './weapon-events';
import { onSpotterLock, queueSpotterEnd } from './spotter';
import { beginLeadershipAction, queueLeadershipTurn } from './leadership';
import {queueTerrainHazard} from './terrain-hazards';
import { consumeLancerSkillAccuracy } from './features';
import { validateLancerPath, queueLancerPath, canLancerPass } from './voluntary-movement';
import { parseLancerBattle, parseLancerZone, LANCER_CONDITION_NAMES, type LancerBattle, type LancerCombatIntent, type LancerCombatUnit, type ManualMap, type ManualToken } from '@aelzerant/contracts';
import { lancerCanRam, lancerSystemAttackAccuracy, refreshLancerSystemStates } from './system-passives';
import { startLancerMimics, cycleLancerMimics } from './mimic';
import { beginLancerNpcTurn, useLancerNpcAction, refreshLancerNpcAuras } from './npc';
import { stabilizeLancer, clearLancerHeat, beginLancerThermalTurn } from './thermal-systems';
import { operateLancerWeapon, lancerWeaponCanSkirmish } from './weapon-operation';
import { selectedLancerTargets, lancerSequencePattern } from './weapon-sequences';
import { triggerLancerHazards } from './hazards';
import { lancerShotWeapon } from './weapon-profiles';
import { planLancerAttack } from './attack-planning';
import { validateLancerActionTarget } from './targeting';
import { beginLancerFlight, refreshLancerAltitude, validateLancerFlight } from './flight';
import { lancerFloor } from './geometry';
import { lancerCheck, lancerRoll, type LancerRandom } from './dice';
import { lancerDistance, lancerMovementCost, lancerPosition, lancerLineOfSight } from './geometry';
import { applyHeat, drainLancer, respondLancer, validateWeapon, validateLancerWeaponUse } from './resolution';
import { queueLancerActionBurn, canReact, clear, condition, has, log, spend, unit } from './state';
import { activateLancerFeature, count, feature, lancerUniversalAccuracy, lancerSkillAccuracy } from './features';
import { beginTechTurn, endTechTurn } from './tech-effects';
import { LANCER_TECH_OPTIONS, useLancerTech, useFullTech } from './tech';
import { queueAmbush } from './ranged-talents';
import { queueAceBoost, queueAceTurnEnd, queueAceMiss } from './flight-talents';
import { activateLancerTalent } from './talent-actions';
import { canLancerHide, refreshLancerConcealment } from './concealment';
import { contestLancerGrapple, lancerDraggedUnits, moveLancerDragged, offerLancerGrappleContest, refreshLancerGrapples, releaseLancerGrapple } from './grapple';
import { returnLancer } from './phase';
import { breakLancerPassiveCover } from './talents';
import { useLancerSystem } from './systems';
import { expireLancerEffects } from './effects';
import { validateLancerArea, lancerAreaTargets, LANCER_AREA_NAMES } from './areas';
```
</details>

## 重新导出的模块

```ts
export { lancerDistance } from './geometry';
export { canReact, has as hasLancerCondition } from './state';
export { LANCER_EXECUTABLE_FEATURES } from './features';
```

## lancerStartIssue

导出接口 · 源码第 49 行。

Shared by the deployment UI and the authority transition.

```ts
export function lancerStartIssue(b: Pick<LancerBattle,'phase'|'units'>): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `Pick<LancerBattle,'phase'&#124;'units'>` | — |

## LancerBattleContext

导出接口 · 源码第 55 行。

```ts
export interface LancerBattleContext {
    createToken?: (unit: LancerCombatUnit) => ManualToken;
    senderId: string;
    hostId: string;
    random?: LancerRandom;
    now?: number;
    decisionSeconds?: number;
    controls?: (unit: LancerCombatUnit) => boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `createToken` | 是 | `(unit:LancerCombatUnit)=>ManualToken` | 见结构定义及所属功能文档 |
| `senderId` | 否 | `string` | 见结构定义及所属功能文档 |
| `hostId` | 否 | `string` | 见结构定义及所属功能文档 |
| `random` | 是 | `LancerRandom` | 见结构定义及所属功能文档 |
| `now` | 是 | `number` | 见结构定义及所属功能文档 |
| `decisionSeconds` | 是 | `number` | 见结构定义及所属功能文档 |
| `controls` | 是 | `(unit:LancerCombatUnit)=>boolean` | 见结构定义及所属功能文档 |

## applyLancerIntent

导出接口 · 源码第 59 行。

```ts
export function applyLancerIntent(current: LancerBattle|undefined, sourceMap: ManualMap, intent: LancerCombatIntent, ctx: LancerBattleContext): {battle:LancerBattle;map:ManualMap};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `current` | 否 | `LancerBattle&#124;undefined` | — |
| `sourceMap` | 否 | `ManualMap` | — |
| `intent` | 否 | `LancerCombatIntent` | — |
| `ctx` | 否 | `LancerBattleContext` | — |
