# game/packages/game-core/src/lancer/flight.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerBattle, LancerCombatUnit, ManualMap, ManualToken } from '@aelzerant/contracts';
import { count, counter, feature } from './features';
import { lancerFloor, lancerMovementCost, lancerPosition } from './geometry';
import { has, log } from './state';
```
</details>

## LancerFlightOption

导出接口 · 源码第 6 行。

```ts
export interface LancerFlightOption {
    id: string;
    name: string;
    mode: 'fly' | 'hover';
    heat: number;
    boostOnly?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `mode` | 否 | `'fly'&#124;'hover'` | 见结构定义及所属功能文档 |
| `heat` | 否 | `number` | 见结构定义及所属功能文档 |
| `boostOnly` | 是 | `boolean` | 见结构定义及所属功能文档 |

## lancerFlightOptions

导出接口 · 源码第 7 行。

```ts
export function lancerFlightOptions(u: LancerCombatUnit, map: ManualMap): LancerFlightOption[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `map` | 否 | `ManualMap` | — |

## validateLancerFlight

导出接口 · 源码第 21 行。

A boost opens a new straight flight segment; small repeated clicks cannot turn without one.

```ts
export function validateLancerFlight(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, t: ManualToken, x: number, y: number, z: number, id: string): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `ManualToken` | — |
| `x` | 否 | `number` | — |
| `y` | 否 | `number` | — |
| `z` | 否 | `number` | — |
| `id` | 否 | `string` | — |

## beginLancerFlight

导出接口 · 源码第 32 行。

```ts
export function beginLancerFlight(u: LancerCombatUnit, map: ManualMap, t: ManualToken, x: number, y: number, z: number, id: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `map` | 否 | `ManualMap` | — |
| `t` | 否 | `ManualToken` | — |
| `x` | 否 | `number` | — |
| `y` | 否 | `number` | — |
| `z` | 否 | `number` | — |
| `id` | 否 | `string` | — |

## refreshLancerAltitude

导出接口 · 源码第 37 行。

```ts
export function refreshLancerAltitude(u: LancerCombatUnit, map: ManualMap): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `map` | 否 | `ManualMap` | — |

## lancerFlightTurnEnd

导出接口 · 源码第 45 行。

```ts
export function lancerFlightTurnEnd(b: LancerBattle, map: ManualMap, u: LancerCombatUnit): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## fallLancer

导出接口 · 源码第 51 行。

```ts
export function fallLancer(b: LancerBattle, map: ManualMap, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
