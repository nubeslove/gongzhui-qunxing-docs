# game/packages/tabletop-runtime/src/tabletop/storyActions.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {applyTableMinigameStatus} from './minigameStatus';
import {assertWorldStartingGrants} from './lancer/startingGrants';
import {applyLancerScenePreparation,type LancerScenePreparationAction} from './lancer/scenePreparation';
import {applyTacticalCommand} from '@aelzerant/game-core';
import {surfaceElevation} from '@aelzerant/contracts';
import {applyPlayerTemplateEdits} from '@aelzerant/contracts';
import {publicTable,tableFromDirectory,emptyWorldLibrary,type DirectoryTableCommand} from '@aelzerant/contracts';
import {deleteTableDirectory} from './directoryDelete';
import type {DirectoryDeleteCommand} from '@aelzerant/contracts';
import {applyDirectoryAccess} from '@aelzerant/session/core';
import type {DirectoryAccessCommand} from '@aelzerant/contracts';
import {actorOwnership,parseActorAccess} from '@aelzerant/contracts';
import {actorAccess,actorControlled,actorController} from '@aelzerant/contracts';
import {transferTableActor} from './actorTransfer';
import type {ActorTransferCommand} from '@aelzerant/contracts';
import {removeFromDocumentDirectory} from '@aelzerant/contracts';
import {applyManualInheritance} from './tokenInstances';
import type {ActorInheritanceMode,ActorInheritanceState} from '@aelzerant/contracts';
import {changeSceneCanvas,sceneCanvasStyle,type SceneCanvasValue} from '@aelzerant/contracts';
import {scenePreloadFiles} from '@aelzerant/contracts';
import {importTableScene} from './sceneArchive';
import {copyTableScene} from './sceneCopy';
import {placeInSceneDirectory,removeFromSceneDirectory} from '@aelzerant/contracts';
import {bindManualToken,removeManualTokenActor,applyManualPrototype} from './tokenInstances';
import {actorTokenPrototype,parseTokenPrototype,duplicateTokenActor,numberedTokenName,surroundingCellOffsets,copyTokenActorStory,type TokenPrototype} from '@aelzerant/contracts';
import {assertTokenRotationChange} from '@aelzerant/contracts';
import {tokenConfiguration,parseTokenConfiguration,canonicalJson,type TokenConfigurationValue} from '@aelzerant/contracts';
import type {DoorIntent} from '@aelzerant/contracts';
import { tableScene, applyScenePerception, type ScenePerceptionEdit, doorChange, applySceneFeatureEdits, type SceneFeatureEdit, numericRollData, emptyStory, parseManualTable, parseSceneKind, resolvedSceneKind, storyGm, type ManualTable, type SceneKind } from '@aelzerant/contracts';
import {activateSceneAudio} from '@aelzerant/session/core';
import { applyStoryCommand, type StoryCommand } from '@aelzerant/session/core';
import { actorToken } from './scene/editor';
import {resizeTableScene} from './sceneResize';
import {syncDndCalendarAdvance,applyDndIntent} from '@aelzerant/game-core';
import type {SceneResizeCommand} from '@aelzerant/contracts';
```
</details>

## TableStoryAction

导出接口 · 源码第 37 行。

```ts
export type TableStoryAction = LancerScenePreparationAction | SceneResizeCommand | DirectoryTableCommand | DirectoryDeleteCommand | DirectoryAccessCommand | {
    kind: "actor.access";
    id: string;
    before: import("@aelzerant/contracts").DocumentAccess;
    value: import("@aelzerant/contracts").DocumentAccess;
} | ActorTransferCommand | {
    kind: 'actor.inheritance';
    id: string;
    mode: ActorInheritanceMode;
    expected: ActorInheritanceState;
} | {
    kind: 'scene.canvas';
    sceneId: string;
    value: SceneCanvasValue;
    before: SceneCanvasValue;
} | {
    kind: 'scene.lancer-mode';
    sceneId: string;
    value: 'mech' | 'foot';
} | {
    kind: 'scene.view';
    sceneId: string;
    value: '2d' | '3d';
} | {
    kind: 'story';
    command: StoryCommand;
} | {
    kind: 'scene.import';
    archive: unknown;
    id: string;
    name: string;
    folderId: string | null;
    replacement?: import('@aelzerant/contracts').SceneArchiveReplacement;
} | {
    kind: 'scene.copy';
    sourceId: string;
    id: string;
    name: string;
    folderId?: string | null;
} | {
    kind: 'scene';
    type: 'create' | 'activate' | 'rename' | 'delete';
    id: string;
    name?: string;
    sceneKind?: SceneKind;
    folderId?: string | null;
    combatMode?: 'mech' | 'foot';
} | {
    kind: 'token';
    type: 'place' | 'delete' | 'hide' | 'duplicate';
    id: string;
    actorId?: string;
    x?: number;
    y?: number;
    z?: number;
} | {
    kind: 'token.configure';
    id: string;
    sceneId: string;
    value: TokenConfigurationValue;
    before: TokenConfigurationValue;
    binding?: {
        linked: boolean;
        expectedActorId: string;
    };
} | {
    kind: 'actor.prototype';
    id: string;
    value: TokenPrototype;
    before: TokenPrototype;
} | {
    kind: 'actor.delete';
    id: string;
} | {
    kind: 'features';
    sceneId: string;
    edits: SceneFeatureEdit[];
} | {
    kind: 'perception';
    sceneId: string;
    edit: ScenePerceptionEdit;
} | {
    kind: 'door';
    sceneId: string;
    id: string;
    intent?: DoorIntent;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支6.kind` | 否 | `"actor.access"` | 见结构定义及所属功能文档 |
| `分支6.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.before` | 否 | `import("@aelzerant/contracts").DocumentAccess` | 见结构定义及所属功能文档 |
| `分支6.value` | 否 | `import("@aelzerant/contracts").DocumentAccess` | 见结构定义及所属功能文档 |
| `分支8.kind` | 否 | `'actor.inheritance'` | 见结构定义及所属功能文档 |
| `分支8.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.mode` | 否 | `ActorInheritanceMode` | 见结构定义及所属功能文档 |
| `分支8.expected` | 否 | `ActorInheritanceState` | 见结构定义及所属功能文档 |
| `分支9.kind` | 否 | `'scene.canvas'` | 见结构定义及所属功能文档 |
| `分支9.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.value` | 否 | `SceneCanvasValue` | 见结构定义及所属功能文档 |
| `分支9.before` | 否 | `SceneCanvasValue` | 见结构定义及所属功能文档 |
| `分支10.kind` | 否 | `'scene.lancer-mode'` | 见结构定义及所属功能文档 |
| `分支10.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支10.value` | 否 | `'mech'&#124;'foot'` | 见结构定义及所属功能文档 |
| `分支11.kind` | 否 | `'scene.view'` | 见结构定义及所属功能文档 |
| `分支11.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支11.value` | 否 | `'2d'&#124;'3d'` | 见结构定义及所属功能文档 |
| `分支12.kind` | 否 | `'story'` | 见结构定义及所属功能文档 |
| `分支12.command` | 否 | `StoryCommand` | 见结构定义及所属功能文档 |
| `分支13.kind` | 否 | `'scene.import'` | 见结构定义及所属功能文档 |
| `分支13.archive` | 否 | `unknown` | 见结构定义及所属功能文档 |
| `分支13.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支13.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支13.folderId` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `分支13.replacement` | 是 | `import('@aelzerant/contracts').SceneArchiveReplacement` | 见结构定义及所属功能文档 |
| `分支14.kind` | 否 | `'scene.copy'` | 见结构定义及所属功能文档 |
| `分支14.sourceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支14.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支14.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支14.folderId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |
| `分支15.kind` | 否 | `'scene'` | 见结构定义及所属功能文档 |
| `分支15.type` | 否 | `'create'&#124;'activate'&#124;'rename'&#124;'delete'` | 见结构定义及所属功能文档 |
| `分支15.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支15.name` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支15.sceneKind` | 是 | `SceneKind` | 见结构定义及所属功能文档 |
| `分支15.folderId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |
| `分支15.combatMode` | 是 | `'mech'&#124;'foot'` | 见结构定义及所属功能文档 |
| `分支16.kind` | 否 | `'token'` | 见结构定义及所属功能文档 |
| `分支16.type` | 否 | `'place'&#124;'delete'&#124;'hide'&#124;'duplicate'` | 见结构定义及所属功能文档 |
| `分支16.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支16.actorId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支16.x` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支16.y` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支16.z` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支17.kind` | 否 | `'token.configure'` | 见结构定义及所属功能文档 |
| `分支17.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支17.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支17.value` | 否 | `TokenConfigurationValue` | 见结构定义及所属功能文档 |
| `分支17.before` | 否 | `TokenConfigurationValue` | 见结构定义及所属功能文档 |
| `分支17.binding` | 是 | `{linked:boolean;expectedActorId:string}` | 见结构定义及所属功能文档 |
| `分支17.binding.linked` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支17.binding.expectedActorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支18.kind` | 否 | `'actor.prototype'` | 见结构定义及所属功能文档 |
| `分支18.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支18.value` | 否 | `TokenPrototype` | 见结构定义及所属功能文档 |
| `分支18.before` | 否 | `TokenPrototype` | 见结构定义及所属功能文档 |
| `分支19.kind` | 否 | `'actor.delete'` | 见结构定义及所属功能文档 |
| `分支19.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支20.kind` | 否 | `'features'` | 见结构定义及所属功能文档 |
| `分支20.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支20.edits` | 否 | `SceneFeatureEdit[]` | 见结构定义及所属功能文档 |
| `分支21.kind` | 否 | `'perception'` | 见结构定义及所属功能文档 |
| `分支21.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支21.edit` | 否 | `ScenePerceptionEdit` | 见结构定义及所属功能文档 |
| `分支22.kind` | 否 | `'door'` | 见结构定义及所属功能文档 |
| `分支22.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支22.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支22.intent` | 是 | `DoorIntent` | 见结构定义及所属功能文档 |

## applyTableStory

导出接口 · 源码第 48 行。

```ts
export function applyTableStory(table: ManualTable, action: TableStoryAction, senderId: string, memberIds?: ReadonlySet<string>): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `action` | 否 | `TableStoryAction` | — |
| `senderId` | 否 | `string` | — |
| `memberIds` | 是 | `ReadonlySet<string>` | — |
