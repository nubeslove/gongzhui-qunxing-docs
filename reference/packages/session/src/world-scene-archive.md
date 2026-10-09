# game/packages/session/src/world-scene-archive.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {assertSceneArchiveReplacement,clearReplacedSceneLinks,type SceneArchiveTarget} from '@aelzerant/contracts';
import {migrateOwnedItems} from '@aelzerant/contracts';
import {remapActorDeltaMask,parseMediaManifest,cleanArchiveFeatures,archiveAssets,sceneArchiveStory,emptyStory,GAME_SYSTEMS,parseSceneArchiveHeader,remapArchiveAssets,importArchiveStory,mergeArchiveStory,remapArchiveFeatures,copySceneFeatures,placeInSceneDirectory,type SceneArchiveHeader,type SceneArchiveAsset} from '@aelzerant/contracts';
import {restoreWorld} from './world-persistence';
import {validateRegionMacros} from './region-macros';
import {assertGm,requireId,requireText} from './world-validation';
import type {WorldDocument,WorldHandler} from './world-types';
```
</details>

## exportWorldScene

导出接口 · 源码第 8 行。

```ts
export function exportWorldScene(world: WorldDocument, sceneId: string, available: SceneArchiveAsset[]): SceneArchiveHeader;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `sceneId` | 否 | `string` | — |
| `available` | 否 | `SceneArchiveAsset[]` | — |

## worldSceneArchiveTargets

导出接口 · 源码第 17 行。

```ts
export function worldSceneArchiveTargets(world: WorldDocument): SceneArchiveTarget[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |

## importWorldScene

导出接口 · 源码第 18 行。

```ts
export function importWorldScene(world: WorldDocument, raw: unknown, id: string, name: string, folderId: string|null, replacement?: unknown): {world:WorldDocument;warnings:string[]};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `raw` | 否 | `unknown` | — |
| `id` | 否 | `string` | — |
| `name` | 否 | `string` | — |
| `folderId` | 否 | `string&#124;null` | — |
| `replacement` | 是 | `unknown` | — |
