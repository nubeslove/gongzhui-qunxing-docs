# game/packages/contracts/src/tabletop.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {validateHeartseaFields} from './heartsea';
import {PORTRAIT_STATES,withCurrentStagePortraits} from './character-portraits';
import {projectWorldAtlas} from './world-atlas';
import {ensureTerraSetting,TERRA_SETTING_PACK} from './terra-setting';
import {parseUtopiaCharacter,parseUtopiaBattle,projectUtopiaBattle,type UtopiaCharacter,type UtopiaBattle} from './utopia';
import {parseLancerSceneObject,lancerLitMap,lancerLitFeatures} from './lancer-scene';
import {inspectDndUnit,parseUnitInspection,parseSceneObject,type UnitInspection,type SceneObject} from './unit-inspection';
import {parseLancerRide,type LancerRide} from './lancer-combat';
import {dndPerception,dndPlayerSources,perceivedToken} from './dnd-perception';
import {journalAssetPaths} from './story-journal';
import {manualTokenObserver} from './manual-senses';
import {seesInvisible,tremorDetects} from './scene-obscurity';
import {encounterVisibleInScene} from './encounter';
import {activatedSceneSounds} from './scene-sound';
import {parseRuleVariant,type RuleVariant} from './rule-variant';
import {partyVisionActor} from './party-vision';
import {sceneFrameFeatures} from './scene-frame-features';
import {assertCompendiumSystem} from './compendium';
import {parseOwnedItems} from './owned-item';
import {actorAccess,actorControlled,actorReadable,projectedActorAccess,parseActorAccess} from './actor-access';
import {parseEntityDirectories} from './entity-directory';
import {projectSceneCanvas,parseSceneCanvasStyle,type SceneCanvasStyle} from './scene-canvas';
import {parseSceneSummaries,sceneSummaries,type SceneSummary} from './scene-navigation';
import {parseSceneDirectory} from './scene-directory';
import {parseTokenPrototype,parseTokenActorInstance,type TokenPrototype,type TokenActorInstance} from './token-prototype';
import {parseTokenAppearance,type TokenAppearance} from './token-appearance';
import {publicDrawingMedia} from './drawing-style';
import {publicDoorMedia} from './door-feedback';
import {publicNoteIcon} from './scene-note';
import {tableScene} from './table-scene';
import {exploredFor} from './scene-exploration';
import {publicSceneFeatures} from './scene-perception';
import { parseDndCharacter, parseDndBattle, parseDndPending, parseDndRest, type DndRestRequest, projectDndBattle, type DndCharacter, type DndBattle, type DndPending } from './dnd';
import { emptySceneFeatures, parseSceneFeatures, sceneVisibleCells, type SceneFeatures } from './scene-features';
import { isGameSystemId, type GameSystemId } from './systems';
import { emptyStory, parseStory, projectStory, storyGm, type StoryWorkspace } from './story';
import { parseLancerMission, projectLancerMission, type LancerMission } from './lancer-maintenance';
import { SCENE_MODEL_BY_ID } from './scene-assets';
import { parseSceneKind, type SceneKind } from './world-calendar';
import { parseLancerBattle, parseLancerZone, projectLancerBattle, type LancerBattle, type LancerDeploymentZone } from './lancer-combat';
```
</details>

## ManualActor

导出接口 · 源码第 42 行。

```ts
export interface ManualActor {
    utopia?: UtopiaCharacter;
    inspection?: UnitInspection;
    sceneObject?: SceneObject;
    ownedItems?: import("./owned-item").OwnedItem[];
    access?: import("./world-library").DocumentAccess;
    prototypeToken?: TokenPrototype;
    tokenInstance?: TokenActorInstance;
    dnd?: DndCharacter;
    id: string;
    name: string;
    ownerId: string;
    public: boolean;
    fields: Record<string, string>;
    notes: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `utopia` | 是 | `UtopiaCharacter` | 见结构定义及所属功能文档 |
| `inspection` | 是 | `UnitInspection` | 见结构定义及所属功能文档 |
| `sceneObject` | 是 | `SceneObject` | 见结构定义及所属功能文档 |
| `ownedItems` | 是 | `import("./owned-item").OwnedItem[]` | 见结构定义及所属功能文档 |
| `access` | 是 | `import("./world-library").DocumentAccess` | 见结构定义及所属功能文档 |
| `prototypeToken` | 是 | `TokenPrototype` | 见结构定义及所属功能文档 |
| `tokenInstance` | 是 | `TokenActorInstance` | 见结构定义及所属功能文档 |
| `dnd` | 是 | `DndCharacter` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `ownerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `public` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `fields` | 否 | `Record<string, string>` | 见结构定义及所属功能文档 |
| `notes` | 否 | `string` | 见结构定义及所属功能文档 |

## ManualToken

导出接口 · 源码第 43 行。

```ts
export interface ManualToken {
    sceneBlock?: string;
    objectFootprint?: {
        width: number;
        depth: number;
        height: number;
        rotation: number;
    };
    objectKind?: 'object' | 'vehicle';
    lancerRiding?: LancerRide;
    lancerPilotOf?: string;
    lancerPilotBody?: 'casket' | 'subaltern';
    perception?: import('./dnd-perception').TokenPerception;
    appearance?: TokenAppearance;
    id: string;
    actorId: string;
    name: string;
    x: number;
    y: number;
    z: number;
    size: number;
    color: string;
    hidden: boolean;
    model?: string;
    image?: string;
    rotation?: number;
    lancerOwner?: string;
    nonBlocking?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `sceneBlock` | 是 | `string` | 见结构定义及所属功能文档 |
| `objectFootprint` | 是 | `{width:number;depth:number;height:number;rotation:number}` | 见结构定义及所属功能文档 |
| `objectFootprint.width` | 否 | `number` | 见结构定义及所属功能文档 |
| `objectFootprint.depth` | 否 | `number` | 见结构定义及所属功能文档 |
| `objectFootprint.height` | 否 | `number` | 见结构定义及所属功能文档 |
| `objectFootprint.rotation` | 否 | `number` | 见结构定义及所属功能文档 |
| `objectKind` | 是 | `'object'&#124;'vehicle'` | 见结构定义及所属功能文档 |
| `lancerRiding` | 是 | `LancerRide` | 见结构定义及所属功能文档 |
| `lancerPilotOf` | 是 | `string` | 见结构定义及所属功能文档 |
| `lancerPilotBody` | 是 | `'casket'&#124;'subaltern'` | 见结构定义及所属功能文档 |
| `perception` | 是 | `import('./dnd-perception').TokenPerception` | 见结构定义及所属功能文档 |
| `appearance` | 是 | `TokenAppearance` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 否 | `number` | 见结构定义及所属功能文档 |
| `size` | 否 | `number` | 见结构定义及所属功能文档 |
| `color` | 否 | `string` | 见结构定义及所属功能文档 |
| `hidden` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `model` | 是 | `string` | 见结构定义及所属功能文档 |
| `image` | 是 | `string` | 见结构定义及所属功能文档 |
| `rotation` | 是 | `number` | 见结构定义及所属功能文档 |
| `lancerOwner` | 是 | `string` | 见结构定义及所属功能文档 |
| `nonBlocking` | 是 | `boolean` | 见结构定义及所属功能文档 |

## ManualBlock

导出接口 · 源码第 44 行。

```ts
export interface ManualBlock {
    lancer?: import('./lancer-scene').LancerSceneObject;
    collisionOnly?: boolean;
    terrain?: 'difficult' | 'dangerous' | 'difficult-dangerous';
    hazardDamage?: 'kinetic' | 'energy' | 'explosive' | 'burn';
    id: string;
    name: string;
    x: number;
    y: number;
    z: number;
    width: number;
    depth: number;
    height: number;
    color: string;
    model?: string;
    rotation?: number;
    hidden?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `lancer` | 是 | `import('./lancer-scene').LancerSceneObject` | 见结构定义及所属功能文档 |
| `collisionOnly` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `terrain` | 是 | `'difficult'&#124;'dangerous'&#124;'difficult-dangerous'` | 见结构定义及所属功能文档 |
| `hazardDamage` | 是 | `'kinetic'&#124;'energy'&#124;'explosive'&#124;'burn'` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 否 | `number` | 见结构定义及所属功能文档 |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `depth` | 否 | `number` | 见结构定义及所属功能文档 |
| `height` | 否 | `number` | 见结构定义及所属功能文档 |
| `color` | 否 | `string` | 见结构定义及所属功能文档 |
| `model` | 是 | `string` | 见结构定义及所属功能文档 |
| `rotation` | 是 | `number` | 见结构定义及所属功能文档 |
| `hidden` | 是 | `boolean` | 见结构定义及所属功能文档 |

## ManualMap

导出接口 · 源码第 45 行。

```ts
export interface ManualMap {
    canvas?: SceneCanvasStyle;
    features?: SceneFeatures;
    width: number;
    depth: number;
    background: string | null;
    blocks: ManualBlock[];
    tokens: ManualToken[];
    environment?: 'normal' | 'zero-g' | 'underwater';
    gridOpacity?: number;
    deploymentZones?: LancerDeploymentZone[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `canvas` | 是 | `SceneCanvasStyle` | 见结构定义及所属功能文档 |
| `features` | 是 | `SceneFeatures` | 见结构定义及所属功能文档 |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `depth` | 否 | `number` | 见结构定义及所属功能文档 |
| `background` | 否 | `string &#124; null` | 见结构定义及所属功能文档 |
| `blocks` | 否 | `ManualBlock[]` | 见结构定义及所属功能文档 |
| `tokens` | 否 | `ManualToken[]` | 见结构定义及所属功能文档 |
| `environment` | 是 | `'normal'&#124;'zero-g'&#124;'underwater'` | 见结构定义及所属功能文档 |
| `gridOpacity` | 是 | `number` | 见结构定义及所属功能文档 |
| `deploymentZones` | 是 | `LancerDeploymentZone[]` | 见结构定义及所属功能文档 |

## ManualAsset

导出接口 · 源码第 46 行。

```ts
export interface ManualAsset {
    path: string;
    hash: string;
    size: number;
    mime: string;
    name: string;
    public: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `path` | 否 | `string` | 见结构定义及所属功能文档 |
| `hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `size` | 否 | `number` | 见结构定义及所属功能文档 |
| `mime` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `public` | 否 | `boolean` | 见结构定义及所属功能文档 |

## ManualMessage

导出接口 · 源码第 47 行。

```ts
export interface ManualMessage {
    actorIds?: string[];
    id: string;
    from: string;
    text: string;
    at: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `actorIds` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `from` | 否 | `string` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |

## ManualTable

导出接口 · 源码第 48 行。

```ts
export interface ManualTable {
    utopiaBattle?: UtopiaBattle;
    dndRest?: DndRestRequest;
    ruleVariant?: RuleVariant;
    worldActiveSceneId?: string;
    sceneSummaries?: SceneSummary[];
    story?: StoryWorkspace;
    activeSceneId?: string;
    activeSceneName?: string;
    activeSceneKind?: SceneKind;
    scenes?: Array<{
        id: string;
        name: string;
        kind?: SceneKind;
        map: ManualMap;
        utopiaBattle?: UtopiaBattle;
        dndBattle?: DndBattle;
        dndPending?: DndPending;
        lancerBattle?: LancerBattle;
    }>;
    schemaVersion: 1;
    id: string;
    systemId: GameSystemId;
    systemVersion: string;
    name: string;
    hostId: string;
    revision: number;
    serverWorldId?: string;
    publishedVersion: number;
    updatedAt: number;
    actors: ManualActor[];
    map: ManualMap;
    journal: string;
    privateNotes: string;
    messages: ManualMessage[];
    assets: ManualAsset[];
    dndBattle?: DndBattle;
    dndPending?: DndPending;
    lancerBattle?: LancerBattle;
    lancerMission?: LancerMission;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `utopiaBattle` | 是 | `UtopiaBattle` | 见结构定义及所属功能文档 |
| `dndRest` | 是 | `DndRestRequest` | 见结构定义及所属功能文档 |
| `ruleVariant` | 是 | `RuleVariant` | 见结构定义及所属功能文档 |
| `worldActiveSceneId` | 是 | `string` | Recipient-only metadata; canonical host tables omit these fields. |
| `sceneSummaries` | 是 | `SceneSummary[]` | 见结构定义及所属功能文档 |
| `story` | 是 | `StoryWorkspace` | 见结构定义及所属功能文档 |
| `activeSceneId` | 是 | `string` | 见结构定义及所属功能文档 |
| `activeSceneName` | 是 | `string` | 见结构定义及所属功能文档 |
| `activeSceneKind` | 是 | `SceneKind` | 见结构定义及所属功能文档 |
| `scenes` | 是 | `Array<{id:string;name:string;kind?:SceneKind;map:ManualMap;utopiaBattle?:UtopiaBattle;dndBattle?:DndBattle;dndPending?:DndPending;lancerBattle?:LancerBattle}>` | 见结构定义及所属功能文档 |
| `schemaVersion` | 否 | `1` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `systemId` | 否 | `GameSystemId` | 见结构定义及所属功能文档 |
| `systemVersion` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `hostId` | 否 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `serverWorldId` | 是 | `string` | 见结构定义及所属功能文档 |
| `publishedVersion` | 否 | `number` | 见结构定义及所属功能文档 |
| `updatedAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `actors` | 否 | `ManualActor[]` | 见结构定义及所属功能文档 |
| `map` | 否 | `ManualMap` | 见结构定义及所属功能文档 |
| `journal` | 否 | `string` | 见结构定义及所属功能文档 |
| `privateNotes` | 否 | `string` | 见结构定义及所属功能文档 |
| `messages` | 否 | `ManualMessage[]` | 见结构定义及所属功能文档 |
| `assets` | 否 | `ManualAsset[]` | 见结构定义及所属功能文档 |
| `dndBattle` | 是 | `DndBattle` | 见结构定义及所属功能文档 |
| `dndPending` | 是 | `DndPending` | 见结构定义及所属功能文档 |
| `lancerBattle` | 是 | `LancerBattle` | 见结构定义及所属功能文档 |
| `lancerMission` | 是 | `LancerMission` | 见结构定义及所属功能文档 |

## PublicationFile

导出接口 · 源码第 65 行。

```ts
export interface PublicationFile {
    path: string;
    hash: string;
    size: number;
    mime: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `path` | 否 | `string` | 见结构定义及所属功能文档 |
| `hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `size` | 否 | `number` | 见结构定义及所属功能文档 |
| `mime` | 否 | `string` | 见结构定义及所属功能文档 |

## WorldPublication

导出接口 · 源码第 66 行。

```ts
export interface WorldPublication {
    schemaVersion: 1;
    version: number;
    systemId: GameSystemId;
    systemVersion: string;
    files: PublicationFile[];
    publishedAt: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `schemaVersion` | 否 | `1` | 见结构定义及所属功能文档 |
| `version` | 否 | `number` | 见结构定义及所属功能文档 |
| `systemId` | 否 | `GameSystemId` | 见结构定义及所属功能文档 |
| `systemVersion` | 否 | `string` | 见结构定义及所属功能文档 |
| `files` | 否 | `PublicationFile[]` | 见结构定义及所属功能文档 |
| `publishedAt` | 否 | `number` | 见结构定义及所属功能文档 |

## validHash

导出接口 · 源码第 67 行。

```ts
export const validHash: (value: unknown): value is string;
```

## validPublicationPath

导出接口 · 源码第 68 行。

```ts
export const validPublicationPath: (value: unknown): value is string;
```

## parseManualActor

导出接口 · 源码第 77 行。

```ts
export const parseManualActor: (raw: unknown): ManualActor;
```

## parseManualTable

导出接口 · 源码第 78 行。

```ts
export function parseManualTable(raw: unknown): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## publicTable

导出接口 · 源码第 141 行。

A published pack contains only deliberately public preparation content, never live chat or GM notes.

```ts
export function publicTable(table: ManualTable, playerId?: string): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `playerId` | 是 | `string` | — |

## parsePublication

导出接口 · 源码第 181 行。

```ts
export function parsePublication(raw: unknown): WorldPublication;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
