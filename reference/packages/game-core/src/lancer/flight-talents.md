# game/packages/game-core/src/lancer/flight-talents.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerBattle, LancerBattleStep, LancerCombatUnit, LancerDecision, ManualMap } from '@aelzerant/contracts';
import { count, counter, feature } from './features';
import { canReact, has, log, spend, unit, useReaction } from './state';
import { lancerDistance, lancerUnitLineOfSight } from './geometry';
import { lancerFlightOptions } from './flight';
import { askLancerPoint, respondLancerPoint } from './point-decision';
import { applyHeat } from './resolution';
import { lancerDie, type LancerRandom } from './dice';
```
</details>

## Event

内部依赖类型 · 源码第 10 行。

```ts
type Event = Extract<LancerBattleStep, {
    kind: 'feature';
}>;
```

## queueAceMiss

导出接口 · 源码第 11 行。

```ts
export function queueAceMiss(b: LancerBattle, target: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `target` | 否 | `LancerCombatUnit` | — |

## queueAceBoost

导出接口 · 源码第 14 行。

```ts
export function queueAceBoost(b: LancerBattle, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## spinAceThrusters

导出接口 · 源码第 17 行。

```ts
export function spinAceThrusters(b: LancerBattle, u: LancerCombatUnit, free?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `free` | 是 | `boolean` | false |

## queueAceTurnEnd

导出接口 · 源码第 22 行。

```ts
export function queueAceTurnEnd(b: LancerBattle, map: ManualMap, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## offerFlightTalent

导出接口 · 源码第 31 行。

```ts
export function offerFlightTalent(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, s: Event): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Event` | — |

## respondFlightTalent

导出接口 · 源码第 48 行。

```ts
export function respondFlightTalent(b: LancerBattle, map: ManualMap, p: LancerDecision, option: string, r: LancerRandom, point?: {x:number;y:number;z:number}): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |
| `r` | 否 | `LancerRandom` | — |
| `point` | 是 | `{x:number;y:number;z:number}` | — |
