# game/packages/tabletop-runtime/src/tabletop/model.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {recordTableSceneVisits} from './sceneChannelVisits';
import {commitLancerMotion} from './lancer/committedMotion';
import {applyRogueCommand} from './lancer/rogue/run';
import {arenaIntent,settleArena} from './lancer/rogue/battle';
import {executeLancerNode,type LancerNodeAction} from './lancer/nodeExecution';
import {createNodeScene,type NodeSceneCreateAction} from './nodeSceneCreation';
import {readLancerNpc} from '@aelzerant/game-core';
import {settleTacticalMission} from '@aelzerant/game-core';
import {lancerStartIssue} from '@aelzerant/game-core';
import {launchLancerBattle,type LancerLaunchAction} from './lancer/launch';
import {importWorldLancerPilot,type LancerPilotImportAction} from './lancer/importPilot';
import {createWorldLancer,validateWorldLancerCreation,type LancerCreationAction} from './lancer/creation';
import {expandPlanarMovementPath,elevationMovementBlocked,elevationStep,expandElevationPath} from '@aelzerant/contracts';
import {climbEnvironmentDecision,assertClimbAttempt,tableClimbTurn} from '@aelzerant/session/core';
import {applyHeartseaContent} from '../heartsea/azur/package';
import {syncHeartseaTokenArtwork} from '../heartsea/tokenArtwork';
import {applyAtlasCommand} from './atlasRuntime';
import {assertTerraActorChanges,adventureSpeechBlocked,storyGm as stageStoryGm} from '@aelzerant/contracts';
import {applyUtopiaIntent,planUtopiaMove} from '@aelzerant/game-core';
import type {UtopiaIntent} from '@aelzerant/contracts';
import {lancerSceneInteraction} from '@aelzerant/game-core';
import {lancerLitMap} from '@aelzerant/contracts';
import {lancerMovementCost} from '@aelzerant/game-core';
import {applySceneObject,syncSceneObjectTokens,type SceneObjectCommand} from './dnd/sceneObjects';
import {crownActive,dndMovementSpeeds,dndSpiderClimbActive} from '@aelzerant/rules-engine';
import {applyAdventureCommand,advanceAdventureTriggers} from './adventureRuntime';
import {syncDndTokenSizes} from './dnd/tokenSize';
import {pendingMovement} from './pendingMovement';
import {committedTokenMotion,emptySceneFeatures} from '@aelzerant/contracts';
import {applyDeploymentCommand,deploymentToken,type DeploymentCommand} from './lancer/deployment';
import {applyDndCreation,type DndCreationAction} from './dnd/creation';
import {recordTableCombatJournal} from './combatJournal';
import type {CombatTrace} from '@aelzerant/contracts';
import {recordTableCombatCheckpoint,restoreTableCombatCheckpoint} from './combatRollback';
import {applyTableEncounter} from './encounterManager';
import type {EncounterCommand} from '@aelzerant/contracts';
import {resolveTableEnvironment} from './environmentEffects';
import {validateEnvironmentMove,jumpEnvironmentDecision,requestEnvironmentDecision} from '@aelzerant/session/core';
import type {MovementChoice} from '@aelzerant/contracts';
import {movementPath,expandMovementPath,type MovementPoint} from '@aelzerant/contracts';
import {applyOwnedItemCommand} from '@aelzerant/session/core';
import {canonicalJson,type OwnedItemCommand} from '@aelzerant/contracts';
import {manualActorBusy} from './tokenInstances';
import {actorAccess,actorControlled,actorController} from '@aelzerant/contracts';
import {emptyStory,placeEntity} from '@aelzerant/contracts';
import {syncManualActorInheritance} from './tokenInstances';
import {tableActionScene,assertOtherSceneActors} from './sceneViewing';
import {mergeActorEdit,applyNotesEdit,preservePlayerTokenMetadata,type ActorEdit,type WorldNotes} from './documentEdits';
import {runTableRegions} from './regions';
import {recordTableExploration} from './exploration';
import { tableScene,storyGm, sceneRayBlocked, parseManualTable, type ManualActor, type ManualTable } from '@aelzerant/contracts';
import type { LancerCombatIntent } from '@aelzerant/contracts';
import { applyLancerIntent, lancerFlightOptions } from '@aelzerant/game-core';
import { syncCombatCards } from './lancer/combatAdapter';
import { applyLancerMaintenance } from './lancer/maintenance';
import type { LancerMaintenanceIntent } from '@aelzerant/contracts';
import { readLancer } from './lancer/model';
import { syncDndMagicDetection,settleDndEffectTime,applyDndIntent } from '@aelzerant/game-core';
import type { DndIntent } from '@aelzerant/contracts';
import { applyGmEdit, applyRuntimeEdit, type GmEditPatch } from './gmEdit';
import { useStoryResource } from './useStoryResource';
import type { ResourceUse } from '@aelzerant/session/core';
import { applyTableStory, type TableStoryAction } from './storyActions';
```
</details>

## blankActor

导出接口 · 源码第 80 行。

```ts
export function blankActor(name: string, ownerId: string): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | — |
| `ownerId` | 否 | `string` | — |

## TableAction

导出接口 · 源码第 81 行。

```ts
export type TableAction = {
    sceneScope?: string;
} & ({
    kind: 'lancer.rogue';
    command: import('@aelzerant/contracts').RogueCommand;
} | LancerNodeAction | NodeSceneCreateAction | LancerLaunchAction | {
    kind: 'heartsea.content';
    pack: 'azur-ux';
} | {
    kind: 'atlas';
    command: import('@aelzerant/contracts').AtlasCommand;
} | {
    kind: 'utopia';
    intent: UtopiaIntent;
} | {
    kind: 'scene.object';
    command: SceneObjectCommand;
} | {
    kind: 'adventure';
    command: import('@aelzerant/contracts').AdventureCommand;
} | DndCreationAction | LancerCreationAction | LancerPilotImportAction | {
    kind: 'lancer.deployment';
    command: DeploymentCommand;
} | {
    kind: 'combat.rollback';
    id: string;
    rollbackKind: import('@aelzerant/contracts').RollbackKind;
    confirmed: true;
} | {
    kind: 'encounter';
    command: EncounterCommand;
} | OwnedItemCommand | {
    kind: 'actor.patch';
    id: string;
    expected: ActorEdit;
    value: ActorEdit;
} | {
    kind: 'world.notes';
    expected: WorldNotes;
    value: WorldNotes;
} | {
    kind: 'runtime.edit';
    patch: import('@aelzerant/contracts').RuntimeEdit;
} | {
    kind: 'gm.edit';
    patch: GmEditPatch;
} | {
    kind: 'story.use';
    request: ResourceUse;
} | TableStoryAction | {
    kind: 'dnd';
    intent: DndIntent;
} | {
    kind: 'maintenance';
    intent: LancerMaintenanceIntent;
} | {
    kind: 'appearance';
    id: string;
    model?: string;
    image?: string;
    color?: string;
} | {
    kind: 'move';
    id: string;
    x: number;
    y: number;
    z: number;
    mode?: MovementChoice;
    path?: MovementPoint[];
} | {
    kind: 'chat';
    text: string;
} | {
    kind: 'roll';
    expression: string;
} | {
    kind: 'actor';
    actor: ManualActor;
    folderId?: string | null;
} | {
    kind: 'lancer';
    intent: LancerCombatIntent;
});
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `sceneScope` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支1.kind` | 否 | `'lancer.rogue'` | 见结构定义及所属功能文档 |
| `分支1.command` | 否 | `import('@aelzerant/contracts').RogueCommand` | 见结构定义及所属功能文档 |
| `分支5.kind` | 否 | `'heartsea.content'` | 见结构定义及所属功能文档 |
| `分支5.pack` | 否 | `'azur-ux'` | 见结构定义及所属功能文档 |
| `分支6.kind` | 否 | `'atlas'` | 见结构定义及所属功能文档 |
| `分支6.command` | 否 | `import('@aelzerant/contracts').AtlasCommand` | 见结构定义及所属功能文档 |
| `分支7.kind` | 否 | `'utopia'` | 见结构定义及所属功能文档 |
| `分支7.intent` | 否 | `UtopiaIntent` | 见结构定义及所属功能文档 |
| `分支8.kind` | 否 | `'scene.object'` | 见结构定义及所属功能文档 |
| `分支8.command` | 否 | `SceneObjectCommand` | 见结构定义及所属功能文档 |
| `分支9.kind` | 否 | `'adventure'` | 见结构定义及所属功能文档 |
| `分支9.command` | 否 | `import('@aelzerant/contracts').AdventureCommand` | 见结构定义及所属功能文档 |
| `分支13.kind` | 否 | `'lancer.deployment'` | 见结构定义及所属功能文档 |
| `分支13.command` | 否 | `DeploymentCommand` | 见结构定义及所属功能文档 |
| `分支14.kind` | 否 | `'combat.rollback'` | 见结构定义及所属功能文档 |
| `分支14.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支14.rollbackKind` | 否 | `import('@aelzerant/contracts').RollbackKind` | 见结构定义及所属功能文档 |
| `分支14.confirmed` | 否 | `true` | 见结构定义及所属功能文档 |
| `分支15.kind` | 否 | `'encounter'` | 见结构定义及所属功能文档 |
| `分支15.command` | 否 | `EncounterCommand` | 见结构定义及所属功能文档 |
| `分支17.kind` | 否 | `'actor.patch'` | 见结构定义及所属功能文档 |
| `分支17.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支17.expected` | 否 | `ActorEdit` | 见结构定义及所属功能文档 |
| `分支17.value` | 否 | `ActorEdit` | 见结构定义及所属功能文档 |
| `分支18.kind` | 否 | `'world.notes'` | 见结构定义及所属功能文档 |
| `分支18.expected` | 否 | `WorldNotes` | 见结构定义及所属功能文档 |
| `分支18.value` | 否 | `WorldNotes` | 见结构定义及所属功能文档 |
| `分支19.kind` | 否 | `'runtime.edit'` | 见结构定义及所属功能文档 |
| `分支19.patch` | 否 | `import('@aelzerant/contracts').RuntimeEdit` | 见结构定义及所属功能文档 |
| `分支20.kind` | 否 | `'gm.edit'` | 见结构定义及所属功能文档 |
| `分支20.patch` | 否 | `GmEditPatch` | 见结构定义及所属功能文档 |
| `分支21.kind` | 否 | `'story.use'` | 见结构定义及所属功能文档 |
| `分支21.request` | 否 | `ResourceUse` | 见结构定义及所属功能文档 |
| `分支23.kind` | 否 | `'dnd'` | 见结构定义及所属功能文档 |
| `分支23.intent` | 否 | `DndIntent` | 见结构定义及所属功能文档 |
| `分支24.kind` | 否 | `'maintenance'` | 见结构定义及所属功能文档 |
| `分支24.intent` | 否 | `LancerMaintenanceIntent` | 见结构定义及所属功能文档 |
| `分支25.kind` | 否 | `'appearance'` | 见结构定义及所属功能文档 |
| `分支25.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支25.model` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支25.image` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支25.color` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支26.kind` | 否 | `'move'` | 见结构定义及所属功能文档 |
| `分支26.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支26.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支26.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支26.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支26.mode` | 是 | `MovementChoice` | 见结构定义及所属功能文档 |
| `分支26.path` | 是 | `MovementPoint[]` | 见结构定义及所属功能文档 |
| `分支27.kind` | 否 | `'chat'` | 见结构定义及所属功能文档 |
| `分支27.text` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支28.kind` | 否 | `'roll'` | 见结构定义及所属功能文档 |
| `分支28.expression` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支29.kind` | 否 | `'actor'` | 见结构定义及所属功能文档 |
| `分支29.actor` | 否 | `ManualActor` | 见结构定义及所属功能文档 |
| `分支29.folderId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |
| `分支30.kind` | 否 | `'lancer'` | 见结构定义及所属功能文档 |
| `分支30.intent` | 否 | `LancerCombatIntent` | 见结构定义及所属功能文档 |

## rollDice

导出接口 · 源码第 82 行。

```ts
export function rollDice(expression: string, random?: () => number): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `expression` | 否 | `string` | — |
| `random` | 是 | `() => number` | Math.random |

## applyTableAction

导出接口 · 源码第 88 行。

```ts
export function applyTableAction(table: ManualTable, senderId: string, action: TableAction, nickname: string, memberIds?: ReadonlySet<string>, onlineIds?: ReadonlySet<string>): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `senderId` | 否 | `string` | — |
| `action` | 否 | `TableAction` | — |
| `nickname` | 否 | `string` | — |
| `memberIds` | 是 | `ReadonlySet<string>` | — |
| `onlineIds` | 是 | `ReadonlySet<string>` | memberIds??new Set([senderId]) |
