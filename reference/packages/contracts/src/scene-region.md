# game/packages/contracts/src/scene-region.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseRegionEnvironment,parseEnvironmentEffect,type RegionEnvironment,type EnvironmentEffect} from './scene-environment';
import {parseDndSceneSpell,type DndSceneSpell} from './dnd-effects';
import {parseSceneTemplate,templateShape,templateContains,templatePathCuts,type SceneTemplate} from './scene-template';
import {storyObject as obj,storyList as list,storyId as id,storyText as text,storyNumber as num,storyEnum as one} from './story';
import type {ScenePoint,SceneWall} from './scene-features';
```
</details>

## RegionEventName

导出接口 · 源码第 11 行。

```ts
export type RegionEventName = keyof typeof REGION_EVENTS;
```

## RegionShape

导出接口 · 源码第 12 行。

```ts
export interface RegionShape {
    id: string;
    kind: keyof typeof REGION_SHAPES;
    a: ScenePoint;
    b: ScenePoint;
    points?: ScenePoint[];
    rotation: number;
    hole: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `keyof typeof REGION_SHAPES` | 见结构定义及所属功能文档 |
| `a` | 否 | `ScenePoint` | 见结构定义及所属功能文档 |
| `b` | 否 | `ScenePoint` | 见结构定义及所属功能文档 |
| `points` | 是 | `ScenePoint[]` | 见结构定义及所属功能文档 |
| `rotation` | 否 | `number` | 见结构定义及所属功能文档 |
| `hole` | 否 | `boolean` | 见结构定义及所属功能文档 |

## RegionBehavior

导出接口 · 源码第 13 行。

```ts
export interface RegionBehavior {
    effect?: EnvironmentEffect;
    allowChoice?: boolean;
    destinationScene?: string;
    destinationRegion?: string;
    multiplier?: number;
    macroId?: string;
    macroRevision?: number;
    id: string;
    name: string;
    type: keyof typeof REGION_BEHAVIORS;
    enabled: boolean;
    events: RegionEventName[];
    once: boolean;
    text: string;
    audience: 'all' | 'gm' | 'owner';
    targetRegion: string;
    targetBehavior: string;
    toggle: 'on' | 'off' | 'toggle';
    darkness: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `effect` | 是 | `EnvironmentEffect` | 见结构定义及所属功能文档 |
| `allowChoice` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `destinationScene` | 是 | `string` | 见结构定义及所属功能文档 |
| `destinationRegion` | 是 | `string` | 见结构定义及所属功能文档 |
| `multiplier` | 是 | `number` | 见结构定义及所属功能文档 |
| `macroId` | 是 | `string` | 见结构定义及所属功能文档 |
| `macroRevision` | 是 | `number` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `type` | 否 | `keyof typeof REGION_BEHAVIORS` | 见结构定义及所属功能文档 |
| `enabled` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `events` | 否 | `RegionEventName[]` | 见结构定义及所属功能文档 |
| `once` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `audience` | 否 | `'all'&#124;'gm'&#124;'owner'` | 见结构定义及所属功能文档 |
| `targetRegion` | 否 | `string` | 见结构定义及所属功能文档 |
| `targetBehavior` | 否 | `string` | 见结构定义及所属功能文档 |
| `toggle` | 否 | `'on'&#124;'off'&#124;'toggle'` | 见结构定义及所属功能文档 |
| `darkness` | 否 | `number` | 见结构定义及所属功能文档 |

## SceneRegion

导出接口 · 源码第 14 行。

```ts
export interface SceneRegion {
    magic?: DndSceneSpell;
    authorId?: string;
    environment?: RegionEnvironment;
    template?: SceneTemplate;
    id: string;
    name: string;
    color: string;
    visibility: keyof typeof REGION_VISIBILITY;
    locked: boolean;
    bottom: number;
    top: number;
    shapes: RegionShape[];
    behaviors: RegionBehavior[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `magic` | 是 | `DndSceneSpell` | 见结构定义及所属功能文档 |
| `authorId` | 是 | `string` | 见结构定义及所属功能文档 |
| `environment` | 是 | `RegionEnvironment` | 见结构定义及所属功能文档 |
| `template` | 是 | `SceneTemplate` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `color` | 否 | `string` | 见结构定义及所属功能文档 |
| `visibility` | 否 | `keyof typeof REGION_VISIBILITY` | 见结构定义及所属功能文档 |
| `locked` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `bottom` | 否 | `number` | 见结构定义及所属功能文档 |
| `top` | 否 | `number` | 见结构定义及所属功能文档 |
| `shapes` | 否 | `RegionShape[]` | 见结构定义及所属功能文档 |
| `behaviors` | 否 | `RegionBehavior[]` | 见结构定义及所属功能文档 |

## validateRegionPolygon

导出接口 · 源码第 20 行。

```ts
export function validateRegionPolygon(points: ScenePoint[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `points` | 否 | `ScenePoint[]` | — |

## parseSceneRegions

导出接口 · 源码第 27 行。

```ts
export function parseSceneRegions(raw: unknown, width: number, height: number): SceneRegion[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |

## regionShapes

导出接口 · 源码第 39 行。

```ts
export function regionShapes(r: SceneRegion): RegionShape[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `r` | 否 | `SceneRegion` | — |

## regionLocalPoint

导出接口 · 源码第 40 行。

```ts
export function regionLocalPoint(s: RegionShape, p: ScenePoint): ScenePoint;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `RegionShape` | — |
| `p` | 否 | `ScenePoint` | — |

## regionShapeContains

导出接口 · 源码第 43 行。

```ts
export function regionShapeContains(s: RegionShape, point: ScenePoint): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `RegionShape` | — |
| `point` | 否 | `ScenePoint` | — |

## regionContains

导出接口 · 源码第 49 行。

```ts
export function regionContains(r: SceneRegion, p: ScenePoint): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `r` | 否 | `SceneRegion` | — |
| `p` | 否 | `ScenePoint` | — |

## regionPathStates

导出接口 · 源码第 54 行。

Exact intersections with all shape edges and elevation planes; never fixed-distance path sampling.

```ts
export function regionPathStates(r: SceneRegion, path: ScenePoint[]): boolean[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `r` | 否 | `SceneRegion` | — |
| `path` | 否 | `ScenePoint[]` | — |

## regionPathEvents

导出接口 · 源码第 71 行。

```ts
export function regionPathEvents(r: SceneRegion, path: ScenePoint[]): RegionEventName[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `r` | 否 | `SceneRegion` | — |
| `path` | 否 | `ScenePoint[]` | — |

## regionShapeFromWalls

导出接口 · 源码第 78 行。

Selected walls must form one simple closed loop; disjoint loops are created separately.

```ts
export function regionShapeFromWalls(walls: SceneWall[], shapeId: string): RegionShape;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `walls` | 否 | `SceneWall[]` | — |
| `shapeId` | 否 | `string` | — |

## regionDarkness

导出接口 · 源码第 85 行。

```ts
export function regionDarkness(regions: SceneRegion[]|undefined, p: ScenePoint, base: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `regions` | 否 | `SceneRegion[]&#124;undefined` | — |
| `p` | 否 | `ScenePoint` | — |
| `base` | 否 | `number` | — |
