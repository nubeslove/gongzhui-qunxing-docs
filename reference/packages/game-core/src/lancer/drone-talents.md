# game/packages/game-core/src/lancer/drone-talents.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerBattle,LancerBattleStep,LancerCombatUnit,LancerDecision,ManualMap,ManualToken} from '@aelzerant/contracts';
import {count,counter,feature} from './features';
import {lancerDistance,lancerLineOfSight,lancerUnitLineOfSight} from './geometry';
import {clear,has,log,spend,unit} from './state';
import {lancerRoll,type LancerRandom} from './dice';
import {queueLancerWeaponReactions} from './weapon-events';
```
</details>

## Event

内部依赖类型 · 源码第 8 行。

```ts
type Event = Extract<LancerBattleStep, {
    kind: 'feature';
}>;
```

## Shot

内部依赖类型 · 源码第 9 行。

```ts
type Shot = Extract<LancerBattleStep, {
    kind: 'attack' | 'tech';
}>;
```

## pauseForDronePulse

导出接口 · 源码第 18 行。

Lock is consumed before this pause. The saved continuation alone carries its accuracy benefit.

```ts
export function pauseForDronePulse(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, t: LancerCombatUnit, s: Shot): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Shot` | — |

## validateDroneLink

导出接口 · 源码第 25 行。

```ts
export function validateDroneLink(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, t: LancerCombatUnit|undefined, selected?: string[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit&#124;undefined` | — |
| `selected` | 是 | `string[]` | [] |

## droneLinkContains

导出接口 · 源码第 35 行。

A three-dimensional segment through occupied volumes, including elevated or large characters.

```ts
export function droneLinkContains(from: ManualToken, to: ManualToken, t: ManualToken): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `from` | 否 | `ManualToken` | — |
| `to` | 否 | `ManualToken` | — |
| `t` | 否 | `ManualToken` | — |

## useDroneInvigorate

导出接口 · 源码第 50 行。

```ts
export function useDroneInvigorate(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, t: LancerCombatUnit|undefined, free?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit&#124;undefined` | — |
| `free` | 是 | `boolean` | false |

## offerDroneTalent

导出接口 · 源码第 55 行。

```ts
export function offerDroneTalent(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, s: Event): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Event` | — |

## respondDroneTalent

导出接口 · 源码第 69 行。

```ts
export function respondDroneTalent(b: LancerBattle, map: ManualMap, p: LancerDecision, option: string, r: LancerRandom): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |
| `r` | 否 | `LancerRandom` | — |
