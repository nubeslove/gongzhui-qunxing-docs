# game/packages/game-core/src/spiral/generation.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {createSceneMap,type SpiralBiome,type SpiralRoom,type SpiralHazard,type SpiralPoint,type SceneMap} from '@aelzerant/contracts';
```
</details>

## spiralRooms

导出接口 · 源码第 10 行。

```ts
export function spiralRooms(random: ()=>number, floor: number): SpiralRoom[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `random` | 否 | `()=>number` | — |
| `floor` | 否 | `number` | — |

## spiralMap

导出接口 · 源码第 22 行。

```ts
export function spiralMap(random: ()=>number, prefab?: string): SceneMap;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `random` | 否 | `()=>number` | — |
| `prefab` | 是 | `string` | 'layout-0' |

## spiralHazards

导出接口 · 源码第 30 行。

```ts
export function spiralHazards(floor: number, level: number, biome?: SpiralBiome): SpiralHazard[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `floor` | 否 | `number` | — |
| `level` | 否 | `number` | — |
| `biome` | 是 | `SpiralBiome` | 'volcano' |

## inSpiralCells

导出接口 · 源码第 34 行。

```ts
export const inSpiralCells: (cells: SpiralPoint[], point: SpiralPoint): boolean;
```

## spiralDungeonRooms

导出接口 · 源码第 37 行。

A floor plan, not a left-to-right itinerary: spanning corridors, loops and two secret alcoves.

```ts
export function spiralDungeonRooms(random: ()=>number, floor: number, count?: number): SpiralRoom[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `random` | 否 | `()=>number` | — |
| `floor` | 否 | `number` | — |
| `count` | 是 | `number` | 20 |
