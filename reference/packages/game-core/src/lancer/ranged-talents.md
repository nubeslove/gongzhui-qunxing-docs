# game/packages/game-core/src/lancer/ranged-talents.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerBattle, LancerBattleStep, LancerCombatUnit, LancerCombatWeapon, LancerDecision, ManualMap } from '@aelzerant/contracts';
import { count, counter, feature } from './features';
import { lancerDistance, lancerUnitLineOfSight } from './geometry';
import { lancerWeaponType } from './mimic';
import { canReact, clear, condition, has, log, spend, unit, useReaction } from './state';
import { lancerCover } from './effects';
import { lancerShotWeapon } from './weapon-profiles';
import { validateWeapon } from './resolution';
import { knockbackLancer } from './displacement';
import { lancerRoll, type LancerRandom } from './dice';
```
</details>

## queueAmbush

导出接口 · 源码第 13 行。

The first actual attack roll consumes the ambush, even if it misses.

```ts
export function queueAmbush(b: LancerBattle, u: LancerCombatUnit, t: LancerCombatUnit, hit: boolean, rolled: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit` | — |
| `hit` | 否 | `boolean` | — |
| `rolled` | 否 | `boolean` | — |

## Event

内部依赖类型 · 源码第 18 行。

```ts
type Event = Extract<LancerBattleStep, {
    kind: 'feature';
}>;
```

## queueRangedTalents

导出接口 · 源码第 27 行。

Called only after a real attack roll; a saved continuation never rolls this attack again.

```ts
export function queueRangedTalents(b: LancerBattle, map: ManualMap, a: LancerCombatUnit, t: LancerCombatUnit, w: LancerCombatWeapon, hit: boolean, critical: boolean, consumedLock: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `a` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |
| `hit` | 否 | `boolean` | — |
| `critical` | 否 | `boolean` | — |
| `consumedLock` | 否 | `boolean` | — |

## offerRangedTalent

导出接口 · 源码第 63 行。

```ts
export function offerRangedTalent(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, s: Event, r: LancerRandom): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Event` | — |
| `r` | 否 | `LancerRandom` | — |

## respondRangedTalent

导出接口 · 源码第 89 行。

```ts
export function respondRangedTalent(b: LancerBattle, map: ManualMap, p: LancerDecision, option: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |

## torrentTarget

导出接口 · 源码第 128 行。

```ts
export function torrentTarget(map: ManualMap, u: LancerCombatUnit, t: LancerCombatUnit|undefined): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit&#124;undefined` | — |

## useTorrent

导出接口 · 源码第 132 行。

```ts
export function useTorrent(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, t: LancerCombatUnit|undefined, r: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit&#124;undefined` | — |
| `r` | 否 | `LancerRandom` | — |
