# game/apps/desktop/src/tabletop/model.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {expandPlanarMovementPath,elevationMovementBlocked,elevationStep,expandElevationPath} from '@aelzerant/contracts';
import {climbEnvironmentDecision,assertClimbAttempt,tableClimbTurn} from '@aelzerant/session';
import {applyHeartseaContent} from '../heartsea/azur/package';
import {syncHeartseaTokenArtwork} from '../heartsea/tokenArtwork';
import {applyAtlasCommand} from './atlasRuntime';
import {assertTerraActorChanges,adventureSpeechBlocked,storyGm as stageStoryGm} from '@aelzerant/contracts';
import {applyUtopiaIntent,planUtopiaMove} from '@aelzerant/game-core';
import type {UtopiaIntent} from '@aelzerant/contracts';
import {lancerSceneInteraction} from '../../../../packages/game-core/src/lancer/scene-objects';
import {lancerLitMap} from '@aelzerant/contracts';
import {lancerMovementCost} from '../../../../packages/game-core/src/lancer/geometry';
import {applySceneObject,syncSceneObjectTokens,type SceneObjectCommand} from './dnd/sceneObjects';
import {crownActive} from '@aelzerant/rules-engine';
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
import {validateEnvironmentMove,jumpEnvironmentDecision,requestEnvironmentDecision} from '@aelzerant/session';
import type {MovementChoice} from '@aelzerant/contracts';
import {movementPath,expandMovementPath,type MovementPoint} from '@aelzerant/contracts';
import {applyOwnedItemCommand} from '@aelzerant/session';
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
import { settleDndEffectTime,applyDndIntent } from '@aelzerant/game-core';
import type { DndIntent } from '@aelzerant/contracts';
import { applyGmEdit, type GmEditPatch } from './gmEdit';
import { useStoryResource } from './useStoryResource';
import type { ResourceUse } from '@aelzerant/session';
import { applyTableStory, type TableStoryAction } from './storyActions';
```
</details>

## blankActor

导出接口 · 源码第 68 行。

```ts
export function blankActor(name: string, ownerId: string): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | — |
| `ownerId` | 否 | `string` | — |

## TableAction

导出接口 · 源码第 69 行。

```ts
export type TableAction = {
    sceneScope?: string;
} & ({
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
} | DndCreationAction | {
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
| `分支1.kind` | 否 | `'heartsea.content'` | 见结构定义及所属功能文档 |
| `分支1.pack` | 否 | `'azur-ux'` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'atlas'` | 见结构定义及所属功能文档 |
| `分支2.command` | 否 | `import('@aelzerant/contracts').AtlasCommand` | 见结构定义及所属功能文档 |
| `分支3.kind` | 否 | `'utopia'` | 见结构定义及所属功能文档 |
| `分支3.intent` | 否 | `UtopiaIntent` | 见结构定义及所属功能文档 |
| `分支4.kind` | 否 | `'scene.object'` | 见结构定义及所属功能文档 |
| `分支4.command` | 否 | `SceneObjectCommand` | 见结构定义及所属功能文档 |
| `分支5.kind` | 否 | `'adventure'` | 见结构定义及所属功能文档 |
| `分支5.command` | 否 | `import('@aelzerant/contracts').AdventureCommand` | 见结构定义及所属功能文档 |
| `分支7.kind` | 否 | `'lancer.deployment'` | 见结构定义及所属功能文档 |
| `分支7.command` | 否 | `DeploymentCommand` | 见结构定义及所属功能文档 |
| `分支8.kind` | 否 | `'combat.rollback'` | 见结构定义及所属功能文档 |
| `分支8.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.rollbackKind` | 否 | `import('@aelzerant/contracts').RollbackKind` | 见结构定义及所属功能文档 |
| `分支8.confirmed` | 否 | `true` | 见结构定义及所属功能文档 |
| `分支9.kind` | 否 | `'encounter'` | 见结构定义及所属功能文档 |
| `分支9.command` | 否 | `EncounterCommand` | 见结构定义及所属功能文档 |
| `分支11.kind` | 否 | `'actor.patch'` | 见结构定义及所属功能文档 |
| `分支11.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支11.expected` | 否 | `ActorEdit` | 见结构定义及所属功能文档 |
| `分支11.value` | 否 | `ActorEdit` | 见结构定义及所属功能文档 |
| `分支12.kind` | 否 | `'world.notes'` | 见结构定义及所属功能文档 |
| `分支12.expected` | 否 | `WorldNotes` | 见结构定义及所属功能文档 |
| `分支12.value` | 否 | `WorldNotes` | 见结构定义及所属功能文档 |
| `分支13.kind` | 否 | `'gm.edit'` | 见结构定义及所属功能文档 |
| `分支13.patch` | 否 | `GmEditPatch` | 见结构定义及所属功能文档 |
| `分支14.kind` | 否 | `'story.use'` | 见结构定义及所属功能文档 |
| `分支14.request` | 否 | `ResourceUse` | 见结构定义及所属功能文档 |
| `分支16.kind` | 否 | `'dnd'` | 见结构定义及所属功能文档 |
| `分支16.intent` | 否 | `DndIntent` | 见结构定义及所属功能文档 |
| `分支17.kind` | 否 | `'maintenance'` | 见结构定义及所属功能文档 |
| `分支17.intent` | 否 | `LancerMaintenanceIntent` | 见结构定义及所属功能文档 |
| `分支18.kind` | 否 | `'appearance'` | 见结构定义及所属功能文档 |
| `分支18.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支18.model` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支18.image` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支18.color` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支19.kind` | 否 | `'move'` | 见结构定义及所属功能文档 |
| `分支19.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支19.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支19.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支19.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支19.mode` | 是 | `MovementChoice` | 见结构定义及所属功能文档 |
| `分支19.path` | 是 | `MovementPoint[]` | 见结构定义及所属功能文档 |
| `分支20.kind` | 否 | `'chat'` | 见结构定义及所属功能文档 |
| `分支20.text` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支21.kind` | 否 | `'roll'` | 见结构定义及所属功能文档 |
| `分支21.expression` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支22.kind` | 否 | `'actor'` | 见结构定义及所属功能文档 |
| `分支22.actor` | 否 | `ManualActor` | 见结构定义及所属功能文档 |
| `分支22.folderId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |
| `分支23.kind` | 否 | `'lancer'` | 见结构定义及所属功能文档 |
| `分支23.intent` | 否 | `LancerCombatIntent` | 见结构定义及所属功能文档 |

## rollDice

导出接口 · 源码第 70 行。

```ts
export function rollDice(expression: string, random?: () => number): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `expression` | 否 | `string` | — |
| `random` | 是 | `() => number` | Math.random |

## applyTableAction

导出接口 · 源码第 76 行。

```ts
export function applyTableAction(table: ManualTable, senderId: string, action: TableAction, nickname: string, memberIds?: ReadonlySet<string>): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `senderId` | 否 | `string` | — |
| `action` | 否 | `TableAction` | — |
| `nickname` | 否 | `string` | — |
| `memberIds` | 是 | `ReadonlySet<string>` | — |
