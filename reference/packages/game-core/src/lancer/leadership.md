# game/packages/game-core/src/lancer/leadership.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {LANCER_LEADERSHIP_PURPOSES,type LancerLeadershipPurpose} from '@aelzerant/contracts';
import type { LancerBattle, LancerBattleStep, LancerCombatIntent, LancerCombatUnit, LancerDecision } from '@aelzerant/contracts';
import { count, counter, feature } from './features';
import { canReact, has, log, queueLancerActionBurn, unit, useReaction } from './state';
import { lancerRoll, type LancerRandom } from './dice';
```
</details>

## leadershipMatches

导出接口 · 源码第 7 行。

```ts
export function leadershipMatches(u: LancerCombatUnit, purpose: LancerLeadershipPurpose): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `purpose` | 否 | `LancerLeadershipPurpose` | — |

## leadershipCheckAccuracy

导出接口 · 源码第 12 行。

```ts
export function leadershipCheckAccuracy(s: LancerBattleStep, u: LancerCombatUnit): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `LancerBattleStep` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## offerLeadershipChecks

导出接口 · 源码第 13 行。

```ts
export function offerLeadershipChecks(b: LancerBattle, s: LancerBattleStep, checks: {unit:LancerCombatUnit;purpose:'attack'|'save'|'check'}[]): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `s` | 否 | `LancerBattleStep` | — |
| `checks` | 否 | `{unit:LancerCombatUnit;purpose:'attack'&#124;'save'&#124;'check'}[]` | — |

## leadershipCapacity

导出接口 · 源码第 22 行。

```ts
export function leadershipCapacity(u: LancerCombatUnit): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |

## leadershipPool

导出接口 · 源码第 25 行。

```ts
export function leadershipPool(u: LancerCombatUnit): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |

## leadershipTarget

导出接口 · 源码第 29 行。

```ts
export function leadershipTarget(source: LancerCombatUnit, target: LancerCombatUnit): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `source` | 否 | `LancerCombatUnit` | — |
| `target` | 否 | `LancerCombatUnit` | — |

## leadershipIssue

导出接口 · 源码第 32 行。

```ts
export function leadershipIssue(b: LancerBattle, u: LancerCombatUnit, id: string): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `id` | 否 | `string` | — |

## activateLeadership

导出接口 · 源码第 44 行。

```ts
export function activateLeadership(b: LancerBattle, u: LancerCombatUnit, id: string, targetId?: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `id` | 否 | `string` | — |
| `targetId` | 是 | `string` | — |

## queueLeadershipTurn

导出接口 · 源码第 56 行。

```ts
export function queueLeadershipTurn(b: LancerBattle, active: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `active` | 否 | `LancerCombatUnit` | — |

## offerLeadershipFeature

导出接口 · 源码第 60 行。

```ts
export function offerLeadershipFeature(b: LancerBattle, u: LancerCombatUnit, s: Extract<LancerBattleStep,{kind:'feature'}>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'feature'}>` | — |

## beginLeadershipAction

导出接口 · 源码第 67 行。

Narrative compliance is confirmed by the controlling player; payment is authoritative.

```ts
export function beginLeadershipAction(b: LancerBattle, u: LancerCombatUnit, i: LancerCombatIntent): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `LancerCombatIntent` | — |

## Damage

内部依赖类型 · 源码第 75 行。

```ts
type Damage = Extract<LancerBattleStep, {
    kind: 'damage';
}>;
```

## offerLeadershipDamage

导出接口 · 源码第 76 行。

```ts
export function offerLeadershipDamage(b: LancerBattle, s: Damage): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `s` | 否 | `Damage` | — |

## offerLeadershipHarm

导出接口 · 源码第 86 行。

```ts
export function offerLeadershipHarm(b: LancerBattle, s: Extract<LancerBattleStep,{kind:'harm'}>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'harm'}>` | — |

## respondLeadership

导出接口 · 源码第 91 行。

```ts
export function respondLeadership(b: LancerBattle, p: LancerDecision, option: string, r: LancerRandom, text?: string, purpose?: LancerLeadershipPurpose): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |
| `r` | 否 | `LancerRandom` | — |
| `text` | 是 | `string` | — |
| `purpose` | 是 | `LancerLeadershipPurpose` | — |
