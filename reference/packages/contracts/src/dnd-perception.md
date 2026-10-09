# game/packages/contracts/src/dnd-perception.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualActor,ManualMap,ManualTable,ManualToken} from './tabletop';
import {emptySceneFeatures,sceneCellLit,sceneRayBlocked,sceneVisibleCells,type SceneFeatures} from './scene-features';
import {manualTokenObserver} from './manual-senses';
import {blindsightRange,sceneObserverSees,tremorDetects,type SceneObserver} from './scene-obscurity';
import {actorControlled} from './actor-access';
import {partyVisionActor} from './party-vision';
```
</details>

## TokenPerception

导出接口 · 源码第 8 行。

```ts
export type TokenPerception = 'visible' | 'spectral' | 'sound' | 'tremor';
```

## TokenPerceptionMasks

导出接口 · 源码第 9 行。

```ts
export type TokenPerceptionMasks = Record<string, Record<string, TokenPerception>>;
```

## manualSightFeatures

导出接口 · 源码第 11 行。

Map solids block both sight and sound. Terrain patches do not form walls.

```ts
export function manualSightFeatures(map: ManualMap): SceneFeatures;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |

## dndObserver

导出接口 · 源码第 19 行。

```ts
export function dndObserver(table: Pick<ManualTable,'map'|'actors'>, token: ManualToken): SceneObserver;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `Pick<ManualTable,'map'&#124;'actors'>` | — |
| `token` | 否 | `ManualToken` | — |

## dndTokenPerception

导出接口 · 源码第 25 行。

A detected location is targetable, but is not sight and carries no identity.

```ts
export function dndTokenPerception(table: Pick<ManualTable,'map'|'actors'>, source: ManualToken, target: ManualToken, features?: SceneFeatures): TokenPerception|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `Pick<ManualTable,'map'&#124;'actors'>` | — |
| `source` | 否 | `ManualToken` | — |
| `target` | 否 | `ManualToken` | — |
| `features` | 是 | `SceneFeatures` | manualSightFeatures(table.map) |

## dndPerception

导出接口 · 源码第 40 行。

```ts
export function dndPerception(table: Pick<ManualTable,'map'|'actors'>, sources: ManualToken[]): { visible: string[]; monochrome: string[]; tokenVision: Record<string, string[]>; tokenMonochrome: Record<string, string[]>; tokenPerception: TokenPerceptionMasks; perception: Record<string, TokenPerception>; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `Pick<ManualTable,'map'&#124;'actors'>` | — |
| `sources` | 否 | `ManualToken[]` | — |

## dndPlayerSources

导出接口 · 源码第 53 行。

```ts
export function dndPlayerSources(table: ManualTable, playerId?: string): ManualToken[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `playerId` | 是 | `string` | — |

## perceivedToken

导出接口 · 源码第 54 行。

```ts
export function perceivedToken(token: ManualToken, mode: TokenPerception): ManualToken;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `token` | 否 | `ManualToken` | — |
| `mode` | 否 | `TokenPerception` | — |

## dndGmVisionMap

导出接口 · 源码第 59 行。

Local GM inspection changes only the rendered map, never authority state.

```ts
export function dndGmVisionMap(table: ManualTable, selected: string|null): ManualMap;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `selected` | 否 | `string&#124;null` | — |

## dndPlayerCanTarget

导出接口 · 源码第 63 行。

```ts
export function dndPlayerCanTarget(table: ManualTable, playerId: string, target: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `playerId` | 否 | `string` | — |
| `target` | 否 | `string` | — |

## dndCanHearActor

导出接口 · 源码第 67 行。

```ts
export function dndCanHearActor(table: Pick<ManualTable,'map'|'actors'>, sourceId: string, targetId: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `Pick<ManualTable,'map'&#124;'actors'>` | — |
| `sourceId` | 否 | `string` | — |
| `targetId` | 否 | `string` | — |

## dndCanSeeActor

导出接口 · 源码第 68 行。

```ts
export function dndCanSeeActor(table: Pick<ManualTable,'map'|'actors'>, sourceId: string, targetId: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `Pick<ManualTable,'map'&#124;'actors'>` | — |
| `sourceId` | 否 | `string` | — |
| `targetId` | 否 | `string` | — |
