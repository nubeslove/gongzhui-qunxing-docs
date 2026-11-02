# game/packages/game-core/src/lancer/displacement.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isHexGrid} from '@aelzerant/contracts';
import {hexTokenLine,hexDistance,hexTokenNeighbours,hexGridCells,snapHexToken} from '@aelzerant/contracts';
import type { LancerBattle, LancerCombatUnit, ManualMap, ManualToken } from '@aelzerant/contracts';
import { lancerPosition } from './geometry';
import { feature } from './features';
import { log } from './state';
import type { LancerRandom } from './dice';
```
</details>

## knockbackLancer

导出接口 · 源码第 9 行。

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

导出接口 · 源码第 26 行。

Gravity pulls toward the blast centre, including height, and never passes through an occupied cell.

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

导出接口 · 源码第 41 行。

```ts
export function nearestLancerSpaces(map: ManualMap, token: ManualToken): {x:number;y:number;z:number}[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `token` | 否 | `ManualToken` | — |
