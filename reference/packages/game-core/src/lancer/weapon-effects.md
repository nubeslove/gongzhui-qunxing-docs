# game/packages/game-core/src/lancer/weapon-effects.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerBattle, LancerCombatUnit, LancerCombatWeapon, LancerDamageType, ManualMap } from '@aelzerant/contracts';
import { condition, log } from './state';
import { lancerDie, lancerRoll, type LancerRandom } from './dice';
import { lancerAreaTargets } from './areas';
import { lancerDistance } from './geometry';
```
</details>

## lancerWeaponOnAttack

导出接口 · 源码第 25 行。

```ts
export function lancerWeaponOnAttack(b: LancerBattle, map: ManualMap, a: LancerCombatUnit, t: LancerCombatUnit, w: LancerCombatWeapon): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `a` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |

## lancerWeaponHitEffects

导出接口 · 源码第 35 行。

Enqueue source-defined hit riders; they resolve after this attack's damage.

```ts
export function lancerWeaponHitEffects(b: LancerBattle, map: ManualMap, a: LancerCombatUnit, t: LancerCombatUnit, w: LancerCombatWeapon, critical: boolean, r: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `a` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |
| `critical` | 否 | `boolean` | — |
| `r` | 否 | `LancerRandom` | — |

## lancerWeaponCriticalBonus

导出接口 · 源码第 47 行。

```ts
export function lancerWeaponCriticalBonus(w: LancerCombatWeapon, r: LancerRandom, maximum: boolean, half: boolean): {amount:number;type:LancerDamageType;text:string}|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `w` | 否 | `LancerCombatWeapon` | — |
| `r` | 否 | `LancerRandom` | — |
| `maximum` | 否 | `boolean` | — |
| `half` | 否 | `boolean` | — |

## lancerWeaponAreaAfter

导出接口 · 源码第 50 行。

```ts
export function lancerWeaponAreaAfter(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, id: string, r: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `id` | 否 | `string` | — |
| `r` | 否 | `LancerRandom` | — |
