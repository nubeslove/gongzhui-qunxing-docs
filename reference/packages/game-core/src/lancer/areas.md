# game/packages/game-core/src/lancer/areas.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { lancerSystemActive } from './system-passives';
import { parseLancerArea, type LancerArea, type LancerBattle, type LancerCombatUnit, type LancerCombatWeapon, type ManualMap, type ManualToken } from '@aelzerant/contracts';
import { lancerFootprintPoints,lancerDistance, lancerLineOfSight, lancerUnitLineOfSight } from './geometry';
```
</details>

## areaOrigin

导出接口 · 源码第 6 行。

```ts
export function areaOrigin(area: LancerArea): ManualToken;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `area` | 否 | `LancerArea` | — |

## lancerAreaContains

导出接口 · 源码第 8 行。

A cell is occupied in 3D; direction is clockwise from +X on the board.

```ts
export function lancerAreaContains(area: LancerArea, token: ManualToken, source?: ManualToken): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `area` | 否 | `LancerArea` | — |
| `token` | 否 | `ManualToken` | — |
| `source` | 是 | `ManualToken` | — |

## lancerAreaCells

导出接口 · 源码第 20 行。

```ts
export function lancerAreaCells(map: ManualMap, area: LancerArea, source?: ManualToken): {x:number;y:number;z:number}[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `area` | 否 | `LancerArea` | — |
| `source` | 是 | `ManualToken` | — |

## validateLancerArea

导出接口 · 源码第 26 行。

Validate the chosen origin; size and kind come exclusively from the installed weapon.

```ts
export function validateLancerArea(map: ManualMap, a: LancerCombatUnit, w: LancerCombatWeapon, raw: LancerArea): LancerArea;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `a` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |
| `raw` | 否 | `LancerArea` | — |

## lancerAreaTargets

导出接口 · 源码第 38 行。

```ts
export function lancerAreaTargets(b: LancerBattle, map: ManualMap, a: LancerCombatUnit, w: LancerCombatWeapon, area: LancerArea): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `a` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |
| `area` | 否 | `LancerArea` | — |
