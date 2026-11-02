# game/packages/game-core/src/lancer/default-triggers.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerBattle,LancerBattleStep,LancerCombatUnit,LancerDecision} from '@aelzerant/contracts';
import {LANCER_EXECUTABLE_FEATURES} from './features';
import {LANCER_TALENT_EFFECTS} from './talents';
import {LANCER_WEAPON_EVENTS} from './weapon-events';
import {canReact,log} from './state';
import {respondLancer,drainLancer} from './resolution';
import type {ManualMap} from '@aelzerant/contracts';
import type {LancerRandom} from './dice';
```
</details>

## LancerTriggeredAction

导出接口 · 源码第 10 行。

```ts
export interface LancerTriggeredAction {
    id: string;
    name: string;
    description: string;
    reaction: boolean;
    configurable?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `reaction` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `configurable` | 是 | `boolean` | 见结构定义及所属功能文档 |

## lancerTriggeredActions

导出接口 · 源码第 39 行。

```ts
export function lancerTriggeredActions(u: LancerCombatUnit): LancerTriggeredAction[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |

## lancerDecisionTrigger

导出接口 · 源码第 64 行。

```ts
export function lancerDecisionTrigger(u: LancerCombatUnit, p: LancerDecision): string|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `p` | 否 | `LancerDecision` | — |

## defaultTriggerConflict

导出接口 · 源码第 76 行。

Keep all simultaneously eligible defaults manual when they compete for one trigger.

```ts
export function defaultTriggerConflict(b: LancerBattle, u: LancerCombatUnit, p: LancerDecision, key: string): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `p` | 否 | `LancerDecision` | — |
| `key` | 否 | `string` | — |

## triggerOptOut

导出接口 · 源码第 86 行。

```ts
export const triggerOptOut: (id: string): boolean;
```

## settleDefaultTriggers

导出接口 · 源码第 89 行。

Resolve consent only. Target, position and multi-option parameters still belong to the player.

```ts
export function settleDefaultTriggers(b: LancerBattle, map: ManualMap, random: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `random` | 否 | `LancerRandom` | — |
