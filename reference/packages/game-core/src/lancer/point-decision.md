# game/packages/game-core/src/lancer/point-decision.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isHexGrid} from '@aelzerant/contracts';
import {hexTokenNeighbours,hexGridCells,snapGridPoint,hexDistance} from '@aelzerant/contracts';
import { knockbackLancer,lancerKnockbackPath } from './displacement';
import {feature} from './features';
import { validateLancerPath, queueLancerPath, canLancerPass } from './voluntary-movement';
import type { LancerBattle, LancerCombatUnit, LancerDecision, ManualMap } from '@aelzerant/contracts';
import { lancerDistance, lancerFloor, lancerMovementCost, lancerPosition } from './geometry';
import { canReact, has, log, unit } from './state';
```
</details>

## askLancerPoint

导出接口 · 源码第 9 行。

```ts
export function askLancerPoint(b: LancerBattle, u: LancerCombatUnit, title: string, body: string, point: NonNullable<LancerDecision['point']>, key: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `title` | 否 | `string` | — |
| `body` | 否 | `string` | — |
| `point` | 否 | `NonNullable<LancerDecision['point']>` | — |
| `key` | 否 | `string` | — |

## validateLancerPoint

导出接口 · 源码第 12 行。

```ts
export function validateLancerPoint(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, spec: NonNullable<LancerDecision['point']>, to: {x:number;y:number;z:number}, sourceId?: string | undefined): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `spec` | 否 | `NonNullable<LancerDecision['point']>` | — |
| `to` | 否 | `{x:number;y:number;z:number}` | — |
| `sourceId` | 是 | `string &#124; undefined` | b.pending?.unit |

## respondLancerPoint

导出接口 · 源码第 35 行。

```ts
export function respondLancerPoint(b: LancerBattle, map: ManualMap, p: LancerDecision, choice: string, to?: {x:number;y:number;z:number}): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `p` | 否 | `LancerDecision` | — |
| `choice` | 否 | `string` | — |
| `to` | 是 | `{x:number;y:number;z:number}` | — |

## lancerPushPointIssue

导出接口 · 源码第 54 行。

Push choices are actual reachable endpoints, using the authority's exact route and footprint.

```ts
export function lancerPushPointIssue(b: LancerBattle, map: ManualMap, to: {x:number;y:number;z:number}): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `to` | 否 | `{x:number;y:number;z:number}` | — |

## lancerPushPointChoices

导出接口 · 源码第 58 行。

```ts
export function lancerPushPointChoices(b: LancerBattle, map: ManualMap): { point: { z: number; x: number; y: number; }; cell: { x: number; y: number; z: number; }; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |

## lancerPushPointCells

导出接口 · 源码第 64 行。

```ts
export function lancerPushPointCells(b: LancerBattle, map: ManualMap): {x:number;y:number;z:number}[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
