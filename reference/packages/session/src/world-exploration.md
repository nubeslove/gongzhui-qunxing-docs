# game/packages/session/src/world-exploration.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorControlled,actorControllers} from '@aelzerant/contracts';
import {emptySceneFeatures,recordSceneExploration,retainSceneExploration,storyGm,type ScenePoint} from '@aelzerant/contracts';
import {cellKey,findPath,setCombatMap} from '@aelzerant/game-core';
import {visibleCells} from './world-view';
import type {WorldDocument,SceneDocument} from './world-types';
```
</details>

## recordWorldExploration

导出接口 · 源码第 13 行。

```ts
export function recordWorldExploration(next: WorldDocument, previous: WorldDocument, resetScene?: string, movement?: {sceneId:string;tokenId:string;path?:{x:number;y:number;z:number}[];to?:{x:number;y:number}}, members?: Iterable<string>, relocatedSceneId?: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `next` | 否 | `WorldDocument` | — |
| `previous` | 否 | `WorldDocument` | — |
| `resetScene` | 是 | `string` | — |
| `movement` | 是 | `{sceneId:string;tokenId:string;path?:{x:number;y:number;z:number}[];to?:{x:number;y:number}}` | — |
| `members` | 是 | `Iterable<string>` | [] |
| `relocatedSceneId` | 是 | `string` | — |
