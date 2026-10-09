# game/packages/game-core/src/lancer/talents.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { gainDuelistDie, LANCER_DUELIST_ACTIONS } from './duelist';
import { lancerWeaponType } from './mimic';
import type { LancerBattle, LancerCombatUnit, LancerCombatWeapon, ManualMap } from '@aelzerant/contracts';
import { count, counter, feature } from './features';
import { lancerDistance } from './geometry';
import { lancerGrappleGroup } from './grapple';
import { has } from './state';
```
</details>

## lancerTalentAccuracy

导出接口 · 源码第 74 行。

```ts
export function lancerTalentAccuracy(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, target: LancerCombatUnit, w: LancerCombatWeapon): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `target` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |

## lancerTalentHit

导出接口 · 源码第 85 行。

```ts
export function lancerTalentHit(b: LancerBattle, u: LancerCombatUnit, target: LancerCombatUnit, w: LancerCombatWeapon, hit: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `target` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |
| `hit` | 否 | `boolean` | — |

## breakLancerPassiveCover

导出接口 · 源码第 91 行。

```ts
export function breakLancerPassiveCover(b: LancerBattle, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
