# game/packages/game-core/src/lancer/voluntary-movement.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerBattle, LancerBattleStep, LancerCombatUnit, ManualMap, ManualToken } from '@aelzerant/contracts';
import { validateTechMovement } from './tech-effects';
import { feature } from './features';
import { lancerDistance, lancerPosition, lancerMovementWeights } from './geometry';
import { canReact, has } from './state';
```
</details>

## ignoresLancerEngagement

导出接口 · 源码第 7 行。

```ts
export const ignoresLancerEngagement: (b: LancerBattle, u: LancerCombatUnit, target: string): boolean;
```

## canLancerPass

导出接口 · 源码第 9 行。

```ts
export const canLancerPass: (b: LancerBattle, u: LancerCombatUnit, a: ManualToken, t: ManualToken): boolean;
```

## validateLancerPath

导出接口 · 源码第 14 行。

Check intermediate occupants separately from the destination: allies/smaller units may be crossed, never used as a stopping point.

```ts
export function validateLancerPath(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, to: {x:number;y:number;z:number}, teleport?: boolean, involuntary?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `to` | 否 | `{x:number;y:number;z:number}` | — |
| `teleport` | 是 | `boolean` | false |
| `involuntary` | 是 | `boolean` | false |

## queueLancerPath

导出接口 · 源码第 22 行。

```ts
export function queueLancerPath(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, to: {x:number;y:number;z:number}, cost: number, ignoreReactions?: boolean, teleport?: boolean, involuntary?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `to` | 否 | `{x:number;y:number;z:number}` | — |
| `cost` | 否 | `number` | — |
| `ignoreReactions` | 是 | `boolean` | false |
| `teleport` | 是 | `boolean` | false |
| `involuntary` | 是 | `boolean` | false |

## stopLancerEngagement

导出接口 · 源码第 36 行。

Entering a new, equal-or-larger hostile's engagement stops this movement, but never a forced/teleport move.

```ts
export function stopLancerEngagement(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, from: ManualToken, s: Extract<LancerBattleStep,{kind:'move'}>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `from` | 否 | `ManualToken` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'move'}>` | — |
