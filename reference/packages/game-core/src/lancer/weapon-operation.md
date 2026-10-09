# game/packages/game-core/src/lancer/weapon-operation.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerBattle, LancerCombatIntent, LancerCombatUnit, LancerCombatWeapon } from '@aelzerant/contracts';
import { rollLancerMimic } from './mimic';
import type { LancerRandom } from './dice';
import { condition, has, log, spend } from './state';
import { count } from './features';
```
</details>

## lancerWeaponSpinning

导出接口 · 源码第 12 行。

```ts
export function lancerWeaponSpinning(u: LancerCombatUnit, w: LancerCombatWeapon): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |

## lancerWeaponCanSkirmish

导出接口 · 源码第 13 行。

```ts
export function lancerWeaponCanSkirmish(u: LancerCombatUnit, w: LancerCombatWeapon): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |

## lancerWeaponModeIssue

导出接口 · 源码第 14 行。

```ts
export function lancerWeaponModeIssue(u: LancerCombatUnit, i: Extract<LancerCombatIntent,{type:'weaponMode'}>): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `Extract<LancerCombatIntent,{type:'weaponMode'}>` | — |

## operateLancerWeapon

导出接口 · 源码第 28 行。

```ts
export function operateLancerWeapon(b: LancerBattle, u: LancerCombatUnit, i: Extract<LancerCombatIntent,{type:'weaponMode'}>, r?: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `Extract<LancerCombatIntent,{type:'weaponMode'}>` | — |
| `r` | 是 | `LancerRandom` | Math.random |

## spinningLancerProfile

导出接口 · 源码第 37 行。

```ts
export function spinningLancerProfile(u: LancerCombatUnit, w: LancerCombatWeapon): LancerCombatWeapon;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |

## refreshLancerWeaponOperation

导出接口 · 源码第 43 行。

```ts
export function refreshLancerWeaponOperation(u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
