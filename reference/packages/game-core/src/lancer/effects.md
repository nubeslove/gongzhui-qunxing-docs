# game/packages/game-core/src/lancer/effects.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerBattle, LancerCombatUnit, ManualMap, ManualToken } from '@aelzerant/contracts';
import { lancerAreaContains } from './areas';
import { lancerDistance, lancerTerrainCover } from './geometry';
import { log } from './state';
```
</details>

## expireLancerEffects

导出接口 · 源码第 6 行。

```ts
export function expireLancerEffects(b: LancerBattle, u: LancerCombatUnit, at: 'start'|'end'): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `at` | 否 | `'start'&#124;'end'` | — |

## lancerShieldDifficulty

导出接口 · 源码第 11 行。

```ts
export function lancerShieldDifficulty(b: LancerBattle, a: LancerCombatUnit, t: LancerCombatUnit): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `a` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit` | — |

## lancerCover

导出接口 · 源码第 14 行。

```ts
export function lancerCover(b: LancerBattle, map: ManualMap, origin: ManualToken, target: LancerCombatUnit): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `origin` | 否 | `ManualToken` | — |
| `target` | 否 | `LancerCombatUnit` | — |
