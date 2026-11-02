# game/packages/game-core/src/spiral/exploration.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {SPIRAL_TRAVEL_RULES,SPIRAL_SURFACE_EVENTS,spiralHexKey,isInteger,type SpiralHex,type SpiralJourney,type SpiralMember,type SpiralBiome,type SpiralSite} from '@aelzerant/contracts';
import {initCombat} from '../combat';
import {nextRandom} from '../random';
import type {Combatant} from '../types';
import type {SpiralState} from './index';
import {spiralHero} from './content';
import {spiralMap,spiralDungeonRooms} from './generation';
import {spiralHexDistance,spiralHexNeighbours,spiralTravelPath} from './hex';
import {expandSpiralWorld} from './world-generation';
```
</details>

## 重新导出的模块

```ts
export {spiralHexDistance,spiralHexNeighbours,spiralTravelPath} from './hex';
```

## revealSpiralLand

导出接口 · 源码第 12 行。

```ts
export function revealSpiralLand(j: SpiralJourney, points: SpiralHex[], radius?: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `j` | 否 | `SpiralJourney` | — |
| `points` | 否 | `SpiralHex[]` | — |
| `radius` | 是 | `number` | SPIRAL_TRAVEL_RULES.sight |

## generateSpiralJourney

导出接口 · 源码第 13 行。

```ts
export function generateSpiralJourney(random: ()=>number, members: SpiralMember[], themes: SpiralBiome[]): SpiralJourney;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `random` | 否 | `()=>number` | — |
| `members` | 否 | `SpiralMember[]` | — |
| `themes` | 否 | `SpiralBiome[]` | — |

## expeditionActor

导出接口 · 源码第 30 行。

```ts
export function expeditionActor(s: SpiralState, actorId: string): Combatant|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `SpiralState` | — |
| `actorId` | 否 | `string` | — |

## syncSpiralParty

导出接口 · 源码第 31 行。

```ts
export function syncSpiralParty(s: SpiralState): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `SpiralState` | — |

## createSpiralParty

导出接口 · 源码第 32 行。

```ts
export function createSpiralParty(s: SpiralState): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `SpiralState` | — |

## ensureSpiralJourney

导出接口 · 源码第 37 行。

```ts
export function ensureSpiralJourney(s: SpiralState): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `SpiralState` | — |

## saveSpiralDungeon

导出接口 · 源码第 46 行。

```ts
export function saveSpiralDungeon(s: SpiralState): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `SpiralState` | — |

## returnSpiralSurface

导出接口 · 源码第 47 行。

```ts
export function returnSpiralSurface(s: SpiralState): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `SpiralState` | — |

## spiralNearbyParty

导出接口 · 源码第 51 行。

```ts
export function spiralNearbyParty(s: SpiralState, site: SpiralHex): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `SpiralState` | — |
| `site` | 否 | `SpiralHex` | — |

## commandSpiralExploration

导出接口 · 源码第 54 行。

```ts
export function commandSpiralExploration(s: SpiralState, action: Record<string,unknown>, playerId: string, startBattle: (participants:string[])=>void): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `SpiralState` | — |
| `action` | 否 | `Record<string,unknown>` | — |
| `playerId` | 否 | `string` | — |
| `startBattle` | 否 | `(participants:string[])=>void` | — |
