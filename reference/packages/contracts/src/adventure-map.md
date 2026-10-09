# game/packages/contracts/src/adventure-map.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {AdventureBinding,AdventureSelector,AdventureTrigger} from './adventure-events';
import type {ManualMap,ManualActor,ManualToken} from './tabletop';
import {regionContains,regionPathEvents,type SceneRegion} from './scene-region';
import type {ScenePoint} from './scene-features';
import {tileCorners} from './scene-tile';
```
</details>

## adventureCenter

导出接口 · 源码第 6 行。

```ts
export const adventureCenter: (t: ManualToken): ScenePoint;
```

## adventureFeet

导出接口 · 源码第 7 行。

```ts
export const adventureFeet: (map: ManualMap): number;
```

## adventureRegion

导出接口 · 源码第 8 行。

```ts
export function adventureRegion(map: ManualMap, b: AdventureBinding): SceneRegion|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `b` | 否 | `AdventureBinding` | — |

## adventureContains

导出接口 · 源码第 19 行。

```ts
export const adventureContains: (map: ManualMap, b: AdventureBinding, p: ScenePoint): boolean;
```

## adventureAnchor

导出接口 · 源码第 20 行。

```ts
export function adventureAnchor(map: ManualMap, b: AdventureBinding): ScenePoint|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `b` | 否 | `AdventureBinding` | — |

## adventureMatches

导出接口 · 源码第 21 行。

```ts
export function adventureMatches(selector: AdventureSelector, a: ManualActor, t: ManualToken, sourceId: string, map: ManualMap, center?: ScenePoint): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `selector` | 否 | `AdventureSelector` | — |
| `a` | 否 | `ManualActor` | — |
| `t` | 否 | `ManualToken` | — |
| `sourceId` | 否 | `string` | — |
| `map` | 否 | `ManualMap` | — |
| `center` | 是 | `ScenePoint` | — |

## adventureCrossings

导出接口 · 源码第 27 行。

```ts
export function adventureCrossings(map: ManualMap, trigger: AdventureTrigger, path: ScenePoint[]): ('enter'|'exit')[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `trigger` | 否 | `AdventureTrigger` | — |
| `path` | 否 | `ScenePoint[]` | — |
