# game/packages/game-core/src/lancer/displacement.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isHexGrid,sceneRayBlocked,lancerEffectiveBlock} from '@aelzerant/contracts';
import {hexTokenLine,hexDistance,hexTokenNeighbours,hexGridCells,snapHexToken} from '@aelzerant/contracts';
import type { LancerBattle, LancerBattleStep, LancerCombatUnit, ManualMap, ManualToken } from '@aelzerant/contracts';
import { lancerPosition } from './geometry';
import {canLancerPass} from './voluntary-movement';
import { feature } from './features';
import { log } from './state';
import type { LancerRandom } from './dice';
```
</details>

## lancerForcedPath

导出接口 · 源码第 10 行。

Allies and smaller obstacles may be crossed, but the returned route always ends in an unoccupied space.

```ts
export function lancerForcedPath<T extends {x:number;y:number;z:number}>(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, points: readonly T[]): T[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `points` | 否 | `readonly T[]` | — |

## prepareLancerForcedStep

导出接口 · 源码第 23 行。

Recheck a queued route before entering occupied transit cells; interrupted routes must still have a free endpoint.

```ts
export function prepareLancerForcedStep(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, step: Extract<LancerBattleStep,{kind:'move'}>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `step` | 否 | `Extract<LancerBattleStep,{kind:'move'}>` | — |

## lancerKnockbackPath

导出接口 · 源码第 35 行。

The exact forced route is shared by map previews and committed knockback.

```ts
export function lancerKnockbackPath(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, t: ManualToken, distance: number, o: Pick<ManualToken,'x'|'y'|'z'|'size'>, pull?: boolean): { x: number; y: number; z: number; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `ManualToken` | — |
| `distance` | 否 | `number` | — |
| `o` | 否 | `Pick<ManualToken,'x'&#124;'y'&#124;'z'&#124;'size'>` | — |
| `pull` | 是 | `boolean` | false |

## knockbackLancer

导出接口 · 源码第 45 行。

Forced movement does not pay speed or trigger overwatch. Collision stops it at the last free space.

```ts
export function knockbackLancer(b: LancerBattle, map: ManualMap, source: LancerCombatUnit, target: LancerCombatUnit, distance: number, r: LancerRandom, origin?: {x:number;y:number;z:number}, pull?: boolean): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `source` | 否 | `LancerCombatUnit` | — |
| `target` | 否 | `LancerCombatUnit` | — |
| `distance` | 否 | `number` | — |
| `r` | 否 | `LancerRandom` | — |
| `origin` | 是 | `{x:number;y:number;z:number}` | — |
| `pull` | 是 | `boolean` | false |

## pullLancerToPoint

导出接口 · 源码第 56 行。

Gravity pulls toward the blast centre, including height, and ends in an unoccupied cell.

```ts
export function pullLancerToPoint(b: LancerBattle, map: ManualMap, source: LancerCombatUnit, target: LancerCombatUnit, point: {x:number;y:number;z:number}): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `source` | 否 | `LancerCombatUnit` | — |
| `target` | 否 | `LancerCombatUnit` | — |
| `point` | 否 | `{x:number;y:number;z:number}` | — |

## nearestLancerSpaces

导出接口 · 源码第 70 行。

```ts
export function nearestLancerSpaces(map: ManualMap, token: ManualToken): {x:number;y:number;z:number}[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `token` | 否 | `ManualToken` | — |
