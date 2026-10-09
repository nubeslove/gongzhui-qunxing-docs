# game/packages/game-core/src/lancer/grapple.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {offerLeadershipChecks,leadershipCheckAccuracy} from './leadership';
import type {LancerBattleStep} from '@aelzerant/contracts';
import { consumeLancerSkillAccuracy } from './features';
import { lancerContestSize } from './system-passives';
import type { LancerBattle, LancerCombatUnit, LancerSide, ManualMap } from '@aelzerant/contracts';
import { lancerCheck, type LancerRandom } from './dice';
import { count, feature, lancerSkillAccuracy } from './features';
import { lancerDistance, lancerPosition } from './geometry';
import { condition, log, unit } from './state';
```
</details>

## lancerGrappleGroup

导出接口 · 源码第 11 行。

```ts
export function lancerGrappleGroup(b: LancerBattle, id: string): LancerCombatUnit[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `id` | 否 | `string` | — |

## refreshLancerGrapples

导出接口 · 源码第 20 行。

```ts
export function refreshLancerGrapples(b: LancerBattle, map: ManualMap): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |

## addLancerGrapple

导出接口 · 源码第 25 行。

```ts
export function addLancerGrapple(b: LancerBattle, map: ManualMap, a: LancerCombatUnit, t: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `a` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit` | — |

## contestLancerGrapple

导出接口 · 源码第 28 行。

```ts
export function contestLancerGrapple(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, r: LancerRandom, escape?: boolean, s?: LancerBattleStep): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `r` | 否 | `LancerRandom` | — |
| `escape` | 是 | `boolean` | false |
| `s` | 是 | `LancerBattleStep` | {kind:'feature',unit:u.id,feature:'grapple-roll',amount:escape?1:0} |

## offerLancerGrappleContest

导出接口 · 源码第 37 行。

```ts
export function offerLancerGrappleContest(b: LancerBattle, map: ManualMap, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## lancerDraggedUnits

导出接口 · 源码第 43 行。

Larger side drags the smaller side without paying their movement or provoking their reactions.

```ts
export function lancerDraggedUnits(b: LancerBattle, map: ManualMap, u: LancerCombatUnit): LancerCombatUnit[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## moveLancerDragged

导出接口 · 源码第 46 行。

```ts
export function moveLancerDragged(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, dx: number, dy: number, dz: number): {unit:LancerCombatUnit;from:{x:number;y:number;z:number};to:{x:number;y:number;z:number}}[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `dx` | 否 | `number` | — |
| `dy` | 否 | `number` | — |
| `dz` | 否 | `number` | — |

## releaseLancerGrapple

导出接口 · 源码第 51 行。

```ts
export function releaseLancerGrapple(b: LancerBattle, map: ManualMap, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
