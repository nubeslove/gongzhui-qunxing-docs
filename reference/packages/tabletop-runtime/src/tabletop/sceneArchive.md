# game/packages/tabletop-runtime/src/tabletop/sceneArchive.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {assertSceneArchiveReplacement,clearReplacedSceneLinks,type SceneArchiveTarget} from '@aelzerant/contracts';
import {migrateOwnedItems} from '@aelzerant/contracts';
import {remapActorDeltaMask,cleanArchiveFeatures,archiveAssets,sceneArchiveStory,emptyStory,parseManualTable,parseSceneArchiveHeader,remapArchiveAssets,importArchiveStory,mergeArchiveStory,remapArchiveFeatures,copySceneFeatures,placeInSceneDirectory,storyId,storyText,type SceneArchiveHeader,type ManualTable} from '@aelzerant/contracts';
import {validateRegionMacros} from '@aelzerant/session/core';
```
</details>

## exportTableScene

导出接口 · 源码第 5 行。

```ts
export function exportTableScene(table: ManualTable, sceneId: string): SceneArchiveHeader;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `sceneId` | 否 | `string` | — |

## tableSceneArchiveTargets

导出接口 · 源码第 15 行。

```ts
export function tableSceneArchiveTargets(table: ManualTable): SceneArchiveTarget[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |

## importTableScene

导出接口 · 源码第 16 行。

```ts
export function importTableScene(table: ManualTable, raw: unknown, id: string, name: string, folderId: string|null, replacement?: unknown): {table:ManualTable;warnings:string[]};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `raw` | 否 | `unknown` | — |
| `id` | 否 | `string` | — |
| `name` | 否 | `string` | — |
| `folderId` | 否 | `string&#124;null` | — |
| `replacement` | 是 | `unknown` | — |
