# game/packages/session/src/world-scenes.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {worldMovePath,worldMovementModes} from './world-elevation';
import {prepareAafRules,syncAafRules,endAafCombat} from './world-aaf-rules';
import {elevationMovementBlocked,elevationStep,surfaceElevation} from '@aelzerant/contracts';
import {applyPlayerTemplateEdits} from '@aelzerant/contracts';
import {aafMovementRemaining,isAafSpeedMode,movementForStep,type AafSpeedMode} from '@aelzerant/contracts';
import {movementPath,expandMovementPath,sceneRayBlocked} from '@aelzerant/contracts';
import {actorControlled,actorControllers} from '@aelzerant/contracts';
import {changeSceneCanvas,sceneCanvasStyle} from '@aelzerant/contracts';
import {placeInSceneDirectory,removeFromSceneDirectory,emptyStory} from '@aelzerant/contracts';
import {actorTokenPrototype,tokenPrototypeConfiguration} from '@aelzerant/contracts';
import {bindWorldToken,removeWorldTokenActor,requestedTokenBinding} from './world-token-instances';
import {assertTokenRotationChange} from '@aelzerant/contracts';
import {tokenConfiguration,parseTokenConfiguration,canonicalJson} from '@aelzerant/contracts';
import {activateSceneAudio} from './story-scene-audio';
import { applyScenePerception, doorChange, applySceneFeatureEdits, createSceneMap, isRecord, parseSceneMap, parseSceneKind } from "@aelzerant/contracts";
import { nextRandom, advance, applyIntent, cellKey, findPath, initCombat, isCombatIntent, movementCost, setCombatMap,aafEnterWounds } from "@aelzerant/game-core";
import type { SceneDocument, WorldContext, WorldDocument, WorldHandler } from "./world-types";
import { worldSceneId,visibleCells, visibleTokenIds } from "./world-view";
import { tickCombatEffects } from "./world-effects";
import {applyAafEquipment} from './world-aaf-character';
import { assetReference, assertGm, ownedActor, requireBoolean, requireId, requireInteger, requireRecord, requireText, visibility } from "./world-validation";
```
</details>

## getScene

导出接口 · 源码第 23 行。

```ts
export function getScene(world: WorldDocument, id: unknown): SceneDocument;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `id` | 否 | `unknown` | — |

## syncCombatActors

导出接口 · 源码第 26 行。

```ts
export function syncCombatActors(world: WorldDocument, scene: SceneDocument): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `scene` | 否 | `SceneDocument` | — |

## controlToken

导出接口 · 源码第 37 行。

```ts
export function controlToken(world: WorldDocument, scene: SceneDocument, tokenId: unknown, context: WorldContext): import("@source/packages/session/src/world-types").TokenDocument;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `scene` | 否 | `SceneDocument` | — |
| `tokenId` | 否 | `unknown` | — |
| `context` | 否 | `WorldContext` | — |

## deleteWorldScenes

导出接口 · 源码第 43 行。

Delete all selected scenes before choosing a fallback or changing scene audio.

```ts
export function deleteWorldScenes(world: WorldDocument, ids: readonly string[], context: WorldContext): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `ids` | 否 | `readonly string[]` | — |
| `context` | 否 | `WorldContext` | — |
