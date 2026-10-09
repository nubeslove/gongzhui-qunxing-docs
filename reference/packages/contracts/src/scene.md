# game/packages/contracts/src/scene.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {sceneFrameFeatures} from './scene-frame-features';
import {parseSceneCanvasStyle,type SceneCanvasStyle} from './scene-canvas';
import { parseSceneFeatures, type SceneFeatures } from './scene-features';
import { isInteger, isRecord, isId, isText } from "./validation";
```
</details>

## TerrainTag

导出接口 · 源码第 10 行。

地形标签 8 词（DR-025）+ 光照占位

```ts
export type TerrainTag = "normal" | "difficult" | "soft-cover" | "hard-cover" | "wall" | "fire" | "acid" | "ice" | "water";
```

## TileSpec

导出接口 · 源码第 21 行。

```ts
export interface TileSpec {
    x: number;
    y: number;
    tag: TerrainTag;
    extra?: Record<string, unknown>;
    door?: {
        open: boolean;
        locked: boolean;
        secret: boolean;
    };
    light?: {
        radiusFeet: number;
        enabled: boolean;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `tag` | 否 | `TerrainTag` | 见结构定义及所属功能文档 |
| `extra` | 是 | `Record<string, unknown>` | 扩展（M6 起）：height/lighting 等 |
| `door` | 是 | `{ open: boolean; locked: boolean; secret: boolean }` | 见结构定义及所属功能文档 |
| `door.open` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `door.locked` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `door.secret` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `light` | 是 | `{ radiusFeet: number; enabled: boolean }` | 见结构定义及所属功能文档 |
| `light.radiusFeet` | 否 | `number` | 见结构定义及所属功能文档 |
| `light.enabled` | 否 | `boolean` | 见结构定义及所属功能文档 |

## TokenSpec

导出接口 · 源码第 31 行。

```ts
export interface TokenSpec {
    id: string;
    name: string;
    x: number;
    y: number;
    faction: "pc" | "npc";
    speed: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `faction` | 否 | `"pc" &#124; "npc"` | 见结构定义及所属功能文档 |
| `speed` | 否 | `number` | 步行速度（尺）；M3 移动力 = speed |

## SceneMap

导出接口 · 源码第 41 行。

```ts
export interface SceneMap {
    canvas?: SceneCanvasStyle;
    features?: SceneFeatures;
    width: number;
    height: number;
    tilePx: number;
    tiles: TileSpec[];
    tokens: TokenSpec[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `canvas` | 是 | `SceneCanvasStyle` | 见结构定义及所属功能文档 |
| `features` | 是 | `SceneFeatures` | 见结构定义及所属功能文档 |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `height` | 否 | `number` | 见结构定义及所属功能文档 |
| `tilePx` | 否 | `number` | 网格左上角世界像素坐标（渲染层用） |
| `tiles` | 否 | `TileSpec[]` | 见结构定义及所属功能文档 |
| `tokens` | 否 | `TokenSpec[]` | 见结构定义及所属功能文档 |

## terrainExtraCost

导出接口 · 源码第 77 行。

困难地形附加消耗（尺/尺）——困难/冰面 +1；水域 +1（M3 简化：游泳者能力后接入）

```ts
export function terrainExtraCost(tag: TerrainTag): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `tag` | 否 | `TerrainTag` | — |

## parseSceneMap

导出接口 · 源码第 82 行。

Imported maps are normalized to row-major order, with no duplicate/missing tiles.

```ts
export function parseSceneMap(value: unknown): SceneMap;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## createSceneMap

导出接口 · 源码第 120 行。

```ts
export function createSceneMap(width?: number, height?: number, tilePx?: number): SceneMap;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `width` | 是 | `number` | 64 |
| `height` | 是 | `number` | 64 |
| `tilePx` | 是 | `number` | 44 |
