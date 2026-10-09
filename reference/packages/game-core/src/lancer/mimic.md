# game/packages/game-core/src/lancer/mimic.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerBattle, LancerCombatUnit, LancerCombatWeapon } from '@aelzerant/contracts';
import { lancerDie, type LancerRandom } from './dice';
import { count } from './features';
import { log } from './state';
```
</details>

## lancerWeaponType

导出接口 · 源码第 7 行。

```ts
export function lancerWeaponType(w: LancerCombatWeapon, type: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `w` | 否 | `LancerCombatWeapon` | — |
| `type` | 否 | `string` | — |

## rollLancerMimic

导出接口 · 源码第 8 行。

```ts
export function rollLancerMimic(b: LancerBattle, u: LancerCombatUnit, w: LancerCombatWeapon, r: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |
| `r` | 否 | `LancerRandom` | — |

## startLancerMimics

导出接口 · 源码第 12 行。

```ts
export function startLancerMimics(b: LancerBattle, r: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `r` | 否 | `LancerRandom` | — |

## cycleLancerMimics

导出接口 · 源码第 13 行。

```ts
export function cycleLancerMimics(b: LancerBattle, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## mimicLancerProfile

导出接口 · 源码第 16 行。

```ts
export function mimicLancerProfile(u: LancerCombatUnit, w: LancerCombatWeapon): LancerCombatWeapon;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |
