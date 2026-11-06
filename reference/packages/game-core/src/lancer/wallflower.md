# game/packages/game-core/src/lancer/wallflower.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerBattle,LancerCombatUnit,ManualMap,ManualToken} from '@aelzerant/contracts';
import {lancerDistance,lancerLineOfSight} from './geometry';
import {log} from './state';
```
</details>

## isWallflowerEidolon

导出接口 · 源码第 4 行。

```ts
export const isWallflowerEidolon: (u: LancerCombatUnit): boolean;
```

## isWallflowerShard

导出接口 · 源码第 5 行。

```ts
export const isWallflowerShard: (u: LancerCombatUnit): boolean;
```

## WALLFLOWER_LAYER_NAMES

导出接口 · 源码第 6 行。

```ts
export const WALLFLOWER_LAYER_NAMES = ['尖叫', '牺牲', '深渊', '固执', '基准', '核心'] as const;
```

## wallflowerLayer

导出接口 · 源码第 7 行。

```ts
export const wallflowerLayer: (u: LancerCombatUnit): number;
```

## wallflowerImmune

导出接口 · 源码第 8 行。

```ts
export const wallflowerImmune: (u: LancerCombatUnit): boolean;
```

## wallflowerDamageImmune

导出接口 · 源码第 9 行。

```ts
export const wallflowerDamageImmune: (u: LancerCombatUnit): boolean;
```

## wallflowerSight

导出接口 · 源码第 10 行。

```ts
export function wallflowerSight(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, target: ManualToken): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `target` | 否 | `ManualToken` | — |

## refreshWallflowerAbyss

导出接口 · 源码第 15 行。

```ts
export function refreshWallflowerAbyss(b: LancerBattle, map: ManualMap): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |

## shatterWallflowerShards

导出接口 · 源码第 23 行。

```ts
export function shatterWallflowerShards(b: LancerBattle, map: ManualMap): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |

## breakWallflowerLayer

导出接口 · 源码第 27 行。

A layer is not a structure bar. Its overflow never crosses the transition.

```ts
export function breakWallflowerLayer(b: LancerBattle, u: LancerCombatUnit): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
