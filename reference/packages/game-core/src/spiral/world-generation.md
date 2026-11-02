# game/packages/game-core/src/spiral/world-generation.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {SPIRAL_TERRAINS,spiralHexKey,type SpiralBiome,type SpiralHex,type SpiralJourney,type SpiralSite,type SpiralSurfaceEvent} from '@aelzerant/contracts';
import {spiralHexDistance,spiralHexNeighbours} from './hex';
```
</details>

## expandSpiralWorld

导出接口 · 源码第 5 行。

Expand without replacing any recorded tile, landmark, reward, dungeon or traveller.

```ts
export function expandSpiralWorld(j: SpiralJourney, random: ()=>number, themes: SpiralBiome[], preserveTiles?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `j` | 否 | `SpiralJourney` | — |
| `random` | 否 | `()=>number` | — |
| `themes` | 否 | `SpiralBiome[]` | — |
| `preserveTiles` | 是 | `boolean` | true |
