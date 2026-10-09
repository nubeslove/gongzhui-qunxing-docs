# game/packages/game-core/src/lancer/unarmed.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerBattle,LancerCombatUnit,LancerCombatWeapon,ManualMap} from '@aelzerant/contracts';
import {count,feature} from './features';
import {lancerDistance,lancerUnitLineOfSight} from './geometry';
import {lancerRoll,type LancerRandom} from './dice';
import {clear,has,log,spend} from './state';
```
</details>

## lancerUnarmedWeapon

导出接口 · 源码第 7 行。

```ts
export function lancerUnarmedWeapon(u: LancerCombatUnit, id: string): LancerCombatWeapon|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `id` | 否 | `string` | — |

## advanceLancerBrawler

导出接口 · 源码第 12 行。

```ts
export function advanceLancerBrawler(b: LancerBattle, u: LancerCombatUnit, w: LancerCombatWeapon): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |

## lancerKnockoutTarget

导出接口 · 源码第 16 行。

```ts
export function lancerKnockoutTarget(map: ManualMap, u: LancerCombatUnit, target: LancerCombatUnit|undefined): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `target` | 否 | `LancerCombatUnit&#124;undefined` | — |

## useLancerKnockout

导出接口 · 源码第 21 行。

```ts
export function useLancerKnockout(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, target: LancerCombatUnit|undefined, r: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `target` | 否 | `LancerCombatUnit&#124;undefined` | — |
| `r` | 否 | `LancerRandom` | — |
