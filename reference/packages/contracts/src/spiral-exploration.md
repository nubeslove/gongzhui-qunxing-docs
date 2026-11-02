# game/packages/contracts/src/spiral-exploration.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isId,isInteger,isRecord,isText} from './validation';
import type {SpiralBiome,SpiralRoom} from './spiral';
```
</details>

## SpiralHex

导出接口 · 源码第 10 行。

```ts
export interface SpiralHex {
    q: number;
    r: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `q` | 否 | `number` | 见结构定义及所属功能文档 |
| `r` | 否 | `number` | 见结构定义及所属功能文档 |

## SpiralLandTile

导出接口 · 源码第 11 行。

```ts
export interface SpiralLandTile extends SpiralHex {
    terrain: keyof typeof SPIRAL_TERRAINS;
    biome: SpiralBiome;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `terrain` | 否 | `keyof typeof SPIRAL_TERRAINS` | 见结构定义及所属功能文档 |
| `biome` | 否 | `SpiralBiome` | 见结构定义及所属功能文档 |

## SpiralSiteKind

导出接口 · 源码第 12 行。

```ts
export type SpiralSiteKind = 'town' | 'cache' | 'shrine' | 'quest' | 'camp' | 'enemy' | 'dungeon' | 'port' | 'event';
```

## SpiralSurfaceEvent

导出接口 · 源码第 13 行。

```ts
export type SpiralSurfaceEvent = 'spring' | 'merchant' | 'monolith' | 'wreck';
```

## SpiralEventChoice

导出接口 · 源码第 14 行。

```ts
export interface SpiralEventChoice {
    id: string;
    label: string;
    description: string;
    movement: number;
    goldCost?: number;
    mpCost?: number;
    gold?: number;
    hp?: number;
    mp?: number;
    focus?: number;
    reveal?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `movement` | 否 | `number` | 见结构定义及所属功能文档 |
| `goldCost` | 是 | `number` | 见结构定义及所属功能文档 |
| `mpCost` | 是 | `number` | 见结构定义及所属功能文档 |
| `gold` | 是 | `number` | 见结构定义及所属功能文档 |
| `hp` | 是 | `number` | 见结构定义及所属功能文档 |
| `mp` | 是 | `number` | 见结构定义及所属功能文档 |
| `focus` | 是 | `number` | 见结构定义及所属功能文档 |
| `reveal` | 是 | `number` | 见结构定义及所属功能文档 |

## SpiralSite

导出接口 · 源码第 21 行。

```ts
export interface SpiralSite extends SpiralHex {
    id: string;
    kind: SpiralSiteKind;
    name: string;
    biome: SpiralBiome;
    cleared: boolean;
    claimedBy: string[];
    floors: number;
    main?: boolean;
    event?: SpiralSurfaceEvent;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `SpiralSiteKind` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `biome` | 否 | `SpiralBiome` | 见结构定义及所属功能文档 |
| `cleared` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `claimedBy` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `floors` | 否 | `number` | 见结构定义及所属功能文档 |
| `main` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `event` | 是 | `SpiralSurfaceEvent` | 见结构定义及所属功能文档 |

## SpiralTraveller

导出接口 · 源码第 22 行。

```ts
export interface SpiralTraveller extends SpiralHex {
    playerId: string;
    remaining: number;
    ended: boolean;
    motion: number;
    path: SpiralHex[];
    mode?: 'foot' | 'sail';
    pathMode?: 'foot' | 'sail';
    hasBoat?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `playerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `remaining` | 否 | `number` | 见结构定义及所属功能文档 |
| `ended` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `motion` | 否 | `number` | 见结构定义及所属功能文档 |
| `path` | 否 | `SpiralHex[]` | 见结构定义及所属功能文档 |
| `mode` | 是 | `'foot'&#124;'sail'` | 见结构定义及所属功能文档 |
| `pathMode` | 是 | `'foot'&#124;'sail'` | 见结构定义及所属功能文档 |
| `hasBoat` | 是 | `boolean` | 见结构定义及所属功能文档 |

## SpiralDungeonSave

导出接口 · 源码第 25 行。

```ts
export interface SpiralDungeonSave {
    siteId: string;
    floor: number;
    rooms: SpiralRoom[];
    roomId: string | null;
    searched: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `siteId` | 否 | `string` | 见结构定义及所属功能文档 |
| `floor` | 否 | `number` | 见结构定义及所属功能文档 |
| `rooms` | 否 | `SpiralRoom[]` | 见结构定义及所属功能文档 |
| `roomId` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `searched` | 否 | `string[]` | 见结构定义及所属功能文档 |

## SpiralJourney

导出接口 · 源码第 26 行。

```ts
export interface SpiralJourney {
    version: 1 | 2;
    width: number;
    height: number;
    tiles: SpiralLandTile[];
    sites: SpiralSite[];
    discovered: string[];
    chart?: string;
    regions?: Array<SpiralHex & {
        id: string;
        name: string;
        biome: SpiralBiome;
    }>;
    day: number;
    gold: number;
    travellers: SpiralTraveller[];
    location: 'surface' | 'dungeon' | 'encounter';
    activeSiteId?: string;
    participants: string[];
    rally?: {
        siteId: string;
        readyPlayers: string[];
    };
    retreatReady: string[];
    dungeons: SpiralDungeonSave[];
    mainComplete: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `1&#124;2` | 见结构定义及所属功能文档 |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `height` | 否 | `number` | 见结构定义及所属功能文档 |
| `tiles` | 否 | `SpiralLandTile[]` | 见结构定义及所属功能文档 |
| `sites` | 否 | `SpiralSite[]` | 见结构定义及所属功能文档 |
| `discovered` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `chart` | 是 | `string` | Public coastline only. Terrain, sites and events remain covered by exploration fog. |
| `regions` | 是 | `Array<SpiralHex&{id:string;name:string;biome:SpiralBiome}>` | 见结构定义及所属功能文档 |
| `day` | 否 | `number` | 见结构定义及所属功能文档 |
| `gold` | 否 | `number` | 见结构定义及所属功能文档 |
| `travellers` | 否 | `SpiralTraveller[]` | 见结构定义及所属功能文档 |
| `location` | 否 | `'surface'&#124;'dungeon'&#124;'encounter'` | 见结构定义及所属功能文档 |
| `activeSiteId` | 是 | `string` | 见结构定义及所属功能文档 |
| `participants` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `rally` | 是 | `{siteId:string;readyPlayers:string[]}` | 见结构定义及所属功能文档 |
| `rally.siteId` | 否 | `string` | 见结构定义及所属功能文档 |
| `rally.readyPlayers` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `retreatReady` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `dungeons` | 否 | `SpiralDungeonSave[]` | 见结构定义及所属功能文档 |
| `mainComplete` | 否 | `boolean` | 见结构定义及所属功能文档 |

## spiralHexKey

导出接口 · 源码第 43 行。

```ts
export const spiralHexKey: (p: SpiralHex): string;
```

## parseSpiralJourney

导出接口 · 源码第 44 行。

```ts
export function parseSpiralJourney(value: unknown, parseRoom: (v:unknown)=>SpiralRoom): SpiralJourney;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
| `parseRoom` | 否 | `(v:unknown)=>SpiralRoom` | — |
