# game/packages/game-core/src/spiral/ruen.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {RUEN_SITES,type RuenFlag,type RuenSiteId,type SpiralJourney,type SpiralRoom,type SpiralMember} from '@aelzerant/contracts';
import type {SpiralState} from './index';
import {expeditionActor,returnSpiralSurface} from './exploration';
```
</details>

## spiralControllers

导出接口 · 源码第 6 行。

```ts
export const spiralControllers: (members: SpiralMember[]): string[];
```

## recruitRuenParty

导出接口 · 源码第 7 行。

```ts
export function recruitRuenParty(s: SpiralState, hostId: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `SpiralState` | — |
| `hostId` | 否 | `string` | — |

## startRuenJourney

导出接口 · 源码第 11 行。

```ts
export function startRuenJourney(s: SpiralState): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `SpiralState` | — |

## completeRuenDungeon

导出接口 · 源码第 25 行。

```ts
export function completeRuenDungeon(s: SpiralState, siteId: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `SpiralState` | — |
| `siteId` | 否 | `string` | — |

## commandRuen

导出接口 · 源码第 36 行。

Scenario actions are validated here and run in the normal world transaction.

```ts
export function commandRuen(s: SpiralState, action: Record<string,unknown>, startBattle: ()=>void): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `SpiralState` | — |
| `action` | 否 | `Record<string,unknown>` | — |
| `startBattle` | 否 | `()=>void` | — |
