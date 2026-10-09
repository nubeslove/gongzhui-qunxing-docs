# game/packages/game-core/src/lancer/pilot-gear.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerArea,LancerBattle,LancerCombatIntent,LancerCombatUnit,ManualMap,ManualToken} from '@aelzerant/contracts';
import {LANCER_PILOT_GEAR} from './pilot-equipment';
import {lancerDistance,lancerLineOfSight,lancerPosition} from './geometry';
import {areaOrigin,lancerAreaContains} from './areas';
import {lancerSystemPointInRange} from './systems';
import {condition,has,log,spend,unit} from './state';
```
</details>

## Intent

内部依赖类型 · 源码第 7 行。

```ts
type Intent = Extract<LancerCombatIntent, {
    type: 'pilotGear';
}>;
```

## lancerPilotGear

导出接口 · 源码第 8 行。

```ts
export function lancerPilotGear(b: LancerBattle, u: LancerCombatUnit): import("@source/packages/contracts/src/lancer-combat").LancerPilotGear[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## lancerPilotGearAreas

导出接口 · 源码第 10 行。

A half-size mine occupies one cell: its Burst 1 uses that cell as the origin, never the pilot.

```ts
export function lancerPilotGearAreas(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, i: Intent): LancerArea[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `Intent` | — |

## lancerPilotGearTargets

导出接口 · 源码第 15 行。

```ts
export function lancerPilotGearTargets(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, i: Intent, area?: LancerArea): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `Intent` | — |
| `area` | 是 | `LancerArea` | — |

## pilotGearIssue

导出接口 · 源码第 21 行。

```ts
export function pilotGearIssue(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, i: Intent, placement?: boolean): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `Intent` | — |
| `placement` | 是 | `boolean` | true |

## usePilotGear

导出接口 · 源码第 42 行。

```ts
export function usePilotGear(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, i: Intent): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `Intent` | — |
