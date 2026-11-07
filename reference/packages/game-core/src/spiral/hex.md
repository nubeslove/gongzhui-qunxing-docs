# game/packages/game-core/src/spiral/hex.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {SPIRAL_TERRAINS,spiralHexKey,type SpiralHex,type SpiralJourney} from '@aelzerant/contracts';
```
</details>

## spiralHexDistance

导出接口 · 源码第 2 行。

```ts
export const spiralHexDistance: (a: SpiralHex, b: SpiralHex): number;
```

## spiralHexNeighbours

导出接口 · 源码第 3 行。

```ts
export function spiralHexNeighbours(p: SpiralHex): SpiralHex[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `p` | 否 | `SpiralHex` | — |

## spiralTravelPath

导出接口 · 源码第 5 行。

A* on the public movement graph. A boat can cross charted sea, but only land at a discovered port.

```ts
export function spiralTravelPath(j: SpiralJourney, from: SpiralHex&{mode?:'foot'|'sail'}, to: SpiralHex, knownOnly?: boolean): {path:SpiralHex[];cost:number}|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `j` | 否 | `SpiralJourney` | — |
| `from` | 否 | `SpiralHex&{mode?:'foot'&#124;'sail'}` | — |
| `to` | 否 | `SpiralHex` | — |
| `knownOnly` | 是 | `boolean` | true |
