# game/packages/session/src/world-view.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {sceneObserverSees,observerConditions,tremorDetects,type SceneObserver} from '@aelzerant/contracts';
import {encounterVisibleInScene} from '@aelzerant/contracts';
import {activatedSceneSounds} from '@aelzerant/contracts';
import {partyVisionActor,emptySceneFeatures,projectSceneCanvas,actorAccess,actorControlled,actorReadable,actorControllers} from '@aelzerant/contracts';
import {projectWorldActor} from './world-actor-access';
import {sceneSummaries,sceneThumbnailSource,type SceneSummary} from '@aelzerant/contracts';
import {presentWorldToken} from './world-token-presentation';
import type {TokenPresentation} from '@aelzerant/contracts';
import type { CombatStatePayload, SceneMap, SceneKind } from "@aelzerant/contracts";
import { cellKey, gridDistance, hasLineOfSight, snapshotCombat } from "@aelzerant/game-core";
import type { ActorDocument, SceneDocument, TokenDocument, Visibility, WorldDocument } from "./world-types";
import { illuminationQuery } from "./world-illumination";
import { exploredFor, publicSceneFeatures, sceneObscured,sceneCellLit,magicalDarknessAt,isSmoke,lightActive, lightReaches, sceneVisibleCells, projectStory, storyGm } from '@aelzerant/contracts';
```
</details>

## SceneView

导出接口 · 源码第 14 行。

```ts
export interface SceneView {
    tokenPresentation?: Record<string, TokenPresentation>;
    hiddenTokenIds?: string[];
    kind?: SceneKind;
    id: string;
    name: string;
    background: string | null;
    map: SceneMap;
    snapshot: CombatStatePayload;
    bindings: Record<string, string>;
    inCombat: boolean;
    annotations: SceneDocument["annotations"];
    visibleCells: string[] | null;
    combatId?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `tokenPresentation` | 是 | `Record<string,TokenPresentation>` | 见结构定义及所属功能文档 |
| `hiddenTokenIds` | 是 | `string[]` | GM-only visibility metadata; never includes unauthorized token identifiers. |
| `kind` | 是 | `SceneKind` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `background` | 否 | `string &#124; null` | 见结构定义及所属功能文档 |
| `map` | 否 | `SceneMap` | 见结构定义及所属功能文档 |
| `snapshot` | 否 | `CombatStatePayload` | 见结构定义及所属功能文档 |
| `bindings` | 否 | `Record<string, string>` | 见结构定义及所属功能文档 |
| `inCombat` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `annotations` | 否 | `SceneDocument["annotations"]` | 见结构定义及所属功能文档 |
| `visibleCells` | 否 | `string[] &#124; null` | 见结构定义及所属功能文档 |
| `combatId` | 是 | `string` | 见结构定义及所属功能文档 |

## WorldView

导出接口 · 源码第 24 行。

```ts
export interface WorldView {
    aafCatalog?: WorldDocument['aafCatalog'];
    activeSceneId?: string | null;
    story?: WorldDocument["story"];
    id: string;
    name: string;
    revision: number;
    hostId: string;
    scenes: SceneSummary[];
    scene: SceneView | null;
    actors: Record<string, ActorDocument>;
    catalog: WorldDocument["catalog"];
    journals: WorldDocument["journals"];
    messages: WorldDocument["messages"];
    clocks: WorldDocument["clocks"];
    audio: WorldDocument["audio"];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `aafCatalog` | 是 | `WorldDocument['aafCatalog']` | 见结构定义及所属功能文档 |
| `activeSceneId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |
| `story` | 是 | `WorldDocument["story"]` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `hostId` | 否 | `string` | 见结构定义及所属功能文档 |
| `scenes` | 否 | `SceneSummary[]` | 见结构定义及所属功能文档 |
| `scene` | 否 | `SceneView &#124; null` | 见结构定义及所属功能文档 |
| `actors` | 否 | `Record<string, ActorDocument>` | 见结构定义及所属功能文档 |
| `catalog` | 否 | `WorldDocument["catalog"]` | 见结构定义及所属功能文档 |
| `journals` | 否 | `WorldDocument["journals"]` | 见结构定义及所属功能文档 |
| `messages` | 否 | `WorldDocument["messages"]` | 见结构定义及所属功能文档 |
| `clocks` | 否 | `WorldDocument["clocks"]` | 见结构定义及所属功能文档 |
| `audio` | 否 | `WorldDocument["audio"]` | 见结构定义及所属功能文档 |

## visibleCells

导出接口 · 源码第 40 行。

```ts
export function visibleCells(world: WorldDocument, scene: SceneDocument, playerId: string, focus?: string): Set<string> | null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `scene` | 否 | `SceneDocument` | — |
| `playerId` | 否 | `string` | — |
| `focus` | 是 | `string` | — |

## visibleTokenIds

导出接口 · 源码第 62 行。

```ts
export function visibleTokenIds(world: WorldDocument, scene: SceneDocument, playerId: string, cells?: Set<string> | null): Set<string>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `scene` | 否 | `SceneDocument` | — |
| `playerId` | 否 | `string` | — |
| `cells` | 是 | `Set<string> &#124; null` | visibleCells(world, scene, playerId) |

## worldSceneId

导出接口 · 源码第 67 行。

Construct a recipient-specific allowlist. Never serialize the authoritative world for a player.

```ts
export function worldSceneId(world: WorldDocument, playerId: string): string | null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `playerId` | 否 | `string` | — |

## projectWorld

导出接口 · 源码第 68 行。

```ts
export function projectWorld(world: WorldDocument, playerId: string): WorldView;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `playerId` | 否 | `string` | — |
