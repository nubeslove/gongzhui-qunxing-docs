# game/packages/contracts/src/scene-tile.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as obj,storyList as list,storyText as text,storyId as id,storyNumber as num,storyEnum as one} from './story';
import {safeMedia} from './world-library';
import type {ScenePoint} from './scene-features';
```
</details>

## TileOcclusion

导出接口 · 源码第 5 行。

```ts
export type TileOcclusion = keyof typeof TILE_OCCLUSION;
```

## SceneTile

导出接口 · 源码第 6 行。

```ts
export interface SceneTile {
    id: string;
    name: string;
    src: string;
    media: 'image' | 'video';
    x: number;
    y: number;
    z: number;
    width: number;
    height: number;
    rotation: number;
    anchorX: number;
    anchorY: number;
    flipX: boolean;
    flipY: boolean;
    alpha: number;
    tint: string;
    sort: number;
    hidden: boolean;
    locked: boolean;
    occlusion: TileOcclusion[];
    occludedAlpha: number;
    video: {
        playing: boolean;
        loop: boolean;
        offset: number;
        startedAt: number;
        rate: number;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `src` | 否 | `string` | 见结构定义及所属功能文档 |
| `media` | 否 | `'image'&#124;'video'` | 见结构定义及所属功能文档 |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 否 | `number` | 见结构定义及所属功能文档 |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `height` | 否 | `number` | 见结构定义及所属功能文档 |
| `rotation` | 否 | `number` | 见结构定义及所属功能文档 |
| `anchorX` | 否 | `number` | 见结构定义及所属功能文档 |
| `anchorY` | 否 | `number` | 见结构定义及所属功能文档 |
| `flipX` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `flipY` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `alpha` | 否 | `number` | 见结构定义及所属功能文档 |
| `tint` | 否 | `string` | 见结构定义及所属功能文档 |
| `sort` | 否 | `number` | 见结构定义及所属功能文档 |
| `hidden` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `locked` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `occlusion` | 否 | `TileOcclusion[]` | 见结构定义及所属功能文档 |
| `occludedAlpha` | 否 | `number` | 见结构定义及所属功能文档 |
| `video` | 否 | `{playing:boolean;loop:boolean;offset:number;startedAt:number;rate:number}` | 见结构定义及所属功能文档 |
| `video.playing` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `video.loop` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `video.offset` | 否 | `number` | 见结构定义及所属功能文档 |
| `video.startedAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `video.rate` | 否 | `number` | 见结构定义及所属功能文档 |

## TileObserver

导出接口 · 源码第 7 行。

```ts
export interface TileObserver extends ScenePoint {
    size?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `size` | 是 | `number` | 见结构定义及所属功能文档 |

## parseSceneTiles

导出接口 · 源码第 8 行。

```ts
export function parseSceneTiles(raw: unknown, width: number, height: number): SceneTile[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |

## tileToWorld

导出接口 · 源码第 15 行。

```ts
export function tileToWorld(t: SceneTile, u: number, v: number): ScenePoint;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `SceneTile` | — |
| `u` | 否 | `number` | — |
| `v` | 否 | `number` | — |

## worldToTile

导出接口 · 源码第 16 行。

```ts
export function worldToTile(t: SceneTile, p: ScenePoint): {u:number;v:number};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `SceneTile` | — |
| `p` | 否 | `ScenePoint` | — |

## tileCorners

导出接口 · 源码第 17 行。

```ts
export const tileCorners: (t: SceneTile): ScenePoint[];
```

## tileContains

导出接口 · 源码第 18 行。

```ts
export function tileContains(t: SceneTile, p: ScenePoint): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `SceneTile` | — |
| `p` | 否 | `ScenePoint` | — |

## tileVideoPosition

导出接口 · 源码第 19 行。

```ts
export function tileVideoPosition(t: SceneTile, now: number, duration: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `SceneTile` | — |
| `now` | 否 | `number` | — |
| `duration` | 否 | `number` | — |

## tileOcclusionAt

导出接口 · 源码第 20 行。

```ts
export function tileOcclusionAt(t: SceneTile, p: ScenePoint, observers: readonly TileObserver[], visible?: ReadonlySet<string>): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `SceneTile` | — |
| `p` | 否 | `ScenePoint` | — |
| `observers` | 否 | `readonly TileObserver[]` | — |
| `visible` | 是 | `ReadonlySet<string>` | — |
