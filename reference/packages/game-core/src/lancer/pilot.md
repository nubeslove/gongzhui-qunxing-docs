# game/packages/game-core/src/lancer/pilot.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {lancerAIControlling} from './control-state';
import {lancerAIBudget,refreshLancerAI} from './ai-control';
import {LANCER_PILOT_GEAR} from './pilot-equipment';
import type {LancerBattle,LancerCombatIntent,LancerCombatUnit,LancerPilotProfile,ManualMap,ManualToken} from '@aelzerant/contracts';
import {lancerDistance,lancerFloor,lancerLineOfSight,lancerMovementCost,lancerPosition} from './geometry';
import {has,condition,log,spend,unit} from './state';
import {lancerRideIssue,useLancerRide} from './riding';
import {queueLancerPath} from './voluntary-movement';
import {refreshLancerAltitude} from './flight';
import type {LancerRandom} from './dice';
```
</details>

## lancerActivationBody

导出接口 · 源码第 12 行。

```ts
export const lancerActivationBody: (u: LancerCombatUnit): boolean;
```

## lancerPilotUnconscious

导出接口 · 源码第 13 行。

```ts
export const lancerPilotUnconscious: (u: LancerCombatUnit): boolean;
```

## lancerPilotActionIssue

导出接口 · 源码第 14 行。

```ts
export function lancerPilotActionIssue(u: LancerCombatUnit, i: LancerCombatIntent): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `LancerCombatIntent` | — |

## lancerPilotUnit

导出接口 · 源码第 26 行。

```ts
export function lancerPilotUnit(mech: LancerCombatUnit, id: string, body?: 'subaltern'|'casket'): LancerCombatUnit;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `mech` | 否 | `LancerCombatUnit` | — |
| `id` | 否 | `string` | — |
| `body` | 是 | `'subaltern'&#124;'casket'` | — |

## captureLancerPilot

导出接口 · 源码第 44 行。

```ts
export function captureLancerPilot(mech: LancerCombatUnit, p: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `mech` | 否 | `LancerCombatUnit` | — |
| `p` | 否 | `LancerCombatUnit` | — |

## lancerPilotPointIssue

导出接口 · 源码第 51 行。

```ts
export function lancerPilotPointIssue(map: ManualMap, mech: LancerCombatUnit, op: 'dismount'|'eject'|'jumpOff', point?: {x:number;y:number;z:number}): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `mech` | 否 | `LancerCombatUnit` | — |
| `op` | 否 | `'dismount'&#124;'eject'&#124;'jumpOff'` | — |
| `point` | 是 | `{x:number;y:number;z:number}` | — |

## pilotOperationIssue

导出接口 · 源码第 62 行。

```ts
export function pilotOperationIssue(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, i: Extract<LancerCombatIntent,{type:'pilot'}>, placement?: boolean): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `Extract<LancerCombatIntent,{type:'pilot'}>` | — |
| `placement` | 是 | `boolean` | true |

## useLancerPilot

导出接口 · 源码第 82 行。

```ts
export function useLancerPilot(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, i: Extract<LancerCombatIntent,{type:'pilot'}>, r: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `Extract<LancerCombatIntent,{type:'pilot'}>` | — |
| `r` | 否 | `LancerRandom` | — |

## finishLancerEjection

导出接口 · 源码第 100 行。

```ts
export function finishLancerEjection(b: LancerBattle, map: ManualMap, p: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `p` | 否 | `LancerCombatUnit` | — |

## refreshLancerPilots

导出接口 · 源码第 102 行。

Preserve personal state and expose a surviving pilot when the cockpit is breached.

```ts
export function refreshLancerPilots(b: LancerBattle, map: ManualMap): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |

## lancerPilotSearchBonus

导出接口 · 源码第 115 行。

```ts
export function lancerPilotSearchBonus(b: LancerBattle, u: LancerCombatUnit, trigger?: string): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `trigger` | 是 | `string` | — |
