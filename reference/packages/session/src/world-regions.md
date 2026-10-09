# game/packages/session/src/world-regions.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {worldEnvironmentNotices} from './world-environment-effects';
import {actorControlled,actorControllers} from '@aelzerant/contracts';
import {requestRegionChoice,takeRegionChoices} from './region-decisions';
import {teleportWorldToken} from './world-teleports';
import {numericRollData,emptyStory,emptySceneFeatures,applyRegionTransitions,type RegionCombatClock,type RegionToken,type ScenePoint} from '@aelzerant/contracts';
import {nextRandom,cellKey,findPath,setCombatMap} from '@aelzerant/game-core';
import {applyRegionEffects,validateRegionMacros} from './region-macros';
import type {WorldDocument,SceneDocument} from './world-types';
```
</details>

## runWorldRegions

导出接口 · 源码第 11 行。

```ts
export function runWorldRegions(next: WorldDocument, previous: WorldDocument, now: number, movement?: {sceneId:string;tokenId:string;path?:{x:number;y:number;z:number}[]}, suppress?: boolean, isGm?: boolean, senderId?: string, quietNewScenes?: boolean, members?: Iterable<string>, relocatedSceneId?: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `next` | 否 | `WorldDocument` | — |
| `previous` | 否 | `WorldDocument` | — |
| `now` | 否 | `number` | — |
| `movement` | 是 | `{sceneId:string;tokenId:string;path?:{x:number;y:number;z:number}[]}` | — |
| `suppress` | 是 | `boolean` | false |
| `isGm` | 是 | `boolean` | true |
| `senderId` | 是 | `string` | next.hostId |
| `quietNewScenes` | 是 | `boolean` | false |
| `members` | 是 | `Iterable<string>` | [] |
| `relocatedSceneId` | 是 | `string` | — |
