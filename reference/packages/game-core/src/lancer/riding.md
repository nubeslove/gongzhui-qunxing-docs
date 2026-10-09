# game/packages/game-core/src/lancer/riding.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerBattle,LancerBattleStep,LancerCombatIntent,LancerCombatUnit,LancerDecision,ManualMap,ManualToken} from '@aelzerant/contracts';
import {lancerDistance,lancerLineOfSight,lancerPosition} from './geometry';
import {lancerCheck,type LancerRandom} from './dice';
import {has,log,spend,unit,condition} from './state';
import {refreshLancerAltitude} from './flight';
```
</details>

## PilotIntent

内部依赖类型 · 源码第 7 行。

```ts
type PilotIntent = Extract<LancerCombatIntent, {
    type: 'pilot';
}>;
```

## lancerRideIssue

导出接口 · 源码第 13 行。

```ts
export function lancerRideIssue(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, i: PilotIntent, checkTarget?: boolean): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `PilotIntent` | — |
| `checkTarget` | 是 | `boolean` | true |

## detachLancerRider

导出接口 · 源码第 38 行。

```ts
export function detachLancerRider(b: LancerBattle, map: ManualMap, p: LancerCombatUnit, point?: {x:number;y:number;z:number}): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `p` | 否 | `LancerCombatUnit` | — |
| `point` | 是 | `{x:number;y:number;z:number}` | — |

## useLancerRide

导出接口 · 源码第 54 行。

```ts
export function useLancerRide(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, i: PilotIntent, r: LancerRandom): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `PilotIntent` | — |
| `r` | 否 | `LancerRandom` | — |

## respondLancerRide

导出接口 · 源码第 72 行。

```ts
export function respondLancerRide(b: LancerBattle, map: ManualMap, p: LancerDecision, option: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |

## refreshLancerRiders

导出接口 · 源码第 78 行。

Every actual displacement, including forced motion and falls, shares this attachment update.

```ts
export function refreshLancerRiders(b: LancerBattle, map: ManualMap): {unit:LancerCombatUnit;from:ManualToken;to:ManualToken}[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
