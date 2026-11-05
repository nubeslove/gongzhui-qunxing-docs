# game/packages/tabletop-runtime/src/tabletop/regions.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {tableEnvironmentNotices} from './environmentEffects';
import {actorControllers} from '@aelzerant/contracts';
import {teleportTableToken,type SceneRegionEffect} from './regionTeleports';
import {numericRollData,emptyStory,emptySceneFeatures,applyRegionTransitions,type ManualTable,type ManualMap,type RegionCombatClock,type RegionToken,type ScenePoint} from '@aelzerant/contracts';
import {requestRegionChoice,takeRegionChoices,applyRegionEffects,validateRegionMacros} from '@aelzerant/session/core';
```
</details>

## SceneState

内部依赖类型 · 源码第 7 行。

```ts
type SceneState = Pick<ManualTable, 'map' | 'dndBattle' | 'dndPending' | 'lancerBattle'>;
```

## runTableRegions

导出接口 · 源码第 17 行。

```ts
export function runTableRegions(next: ManualTable, previous: ManualTable, movement?: boolean, isGm?: boolean, senderId?: string, quietNewScenes?: boolean, members?: Iterable<string>, relocatedSceneId?: string, route?: {id:string;points:ScenePoint[]}): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `next` | 否 | `ManualTable` | — |
| `previous` | 否 | `ManualTable` | — |
| `movement` | 是 | `boolean` | false |
| `isGm` | 是 | `boolean` | true |
| `senderId` | 是 | `string` | next.hostId |
| `quietNewScenes` | 是 | `boolean` | false |
| `members` | 是 | `Iterable<string>` | [] |
| `relocatedSceneId` | 是 | `string` | — |
| `route` | 是 | `{id:string;points:ScenePoint[]}` | — |
