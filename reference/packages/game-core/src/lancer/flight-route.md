# game/packages/game-core/src/lancer/flight-route.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {hexTokenLine,isHexGrid,lancerObject,lancerObjectActive,lancerEffectiveBlock,type ManualMap,type ManualToken,type MovementPoint} from '@aelzerant/contracts';
import {lancerBlockOverlaps,lancerPosition} from './geometry';
```
</details>

## lancerFlightRoute

导出接口 · 源码第 4 行。

Keep the planar heading while choosing the lowest collision-free altitude profile.

```ts
export function lancerFlightRoute(map: ManualMap, t: ManualToken, to: MovementPoint): MovementPoint[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `t` | 否 | `ManualToken` | — |
| `to` | 否 | `MovementPoint` | — |
