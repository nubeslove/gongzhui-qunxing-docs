# game/packages/game-core/src/lancer/nhp.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerBattle,LancerCombatIntent,LancerCombatUnit,LancerDecision,ManualMap} from '@aelzerant/contracts';
import {condition,has,log,spend,unit} from './state';
import {lancerPilotUnit,lancerPilotPointIssue} from './pilot';
import {lancerDistance,lancerLineOfSight} from './geometry';
import {lancerAIBudget} from './ai-control';
import {lancerAIControlling} from './control-state';
```
</details>

## nhpRoot

导出接口 · 源码第 7 行。

```ts
export function nhpRoot(b: LancerBattle, u: LancerCombatUnit): LancerCombatUnit | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## addNhpSubalterns

导出接口 · 源码第 8 行。

```ts
export function addNhpSubalterns(b: LancerBattle, map: ManualMap): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |

## refreshNhpBodies

导出接口 · 源码第 13 行。

```ts
export function refreshNhpBodies(b: LancerBattle, map: ManualMap): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |

## nhpOperationIssue

导出接口 · 源码第 26 行。

```ts
export function nhpOperationIssue(b: LancerBattle, u: LancerCombatUnit, i: Extract<LancerCombatIntent,{type:'nhp'}>, map?: ManualMap): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `Extract<LancerCombatIntent,{type:'nhp'}>` | — |
| `map` | 是 | `ManualMap` | — |

## addNhpStress

导出接口 · 源码第 36 行。

```ts
export function addNhpStress(b: LancerBattle, m: LancerCombatUnit, amount: number, reason: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `m` | 否 | `LancerCombatUnit` | — |
| `amount` | 否 | `number` | — |
| `reason` | 否 | `string` | — |

## useNhp

导出接口 · 源码第 37 行。

```ts
export function useNhp(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, i: Extract<LancerCombatIntent,{type:'nhp'}>, host: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `Extract<LancerCombatIntent,{type:'nhp'}>` | — |
| `host` | 否 | `boolean` | — |

## offerNhpTurn

导出接口 · 源码第 69 行。

```ts
export function offerNhpTurn(b: LancerBattle, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## handleNhpFeature

导出接口 · 源码第 72 行。

```ts
export function handleNhpFeature(b: LancerBattle, u: LancerCombatUnit, feature: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `feature` | 否 | `string` | — |

## respondNhp

导出接口 · 源码第 73 行。

```ts
export function respondNhp(b: LancerBattle, p: LancerDecision, option: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |

## shutdownNhp

导出接口 · 源码第 77 行。

```ts
export function shutdownNhp(b: LancerBattle, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
