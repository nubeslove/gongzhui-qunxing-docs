# game/packages/game-core/src/lancer/ai-control.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerBattle,LancerCombatIntent,LancerCombatUnit,LancerDecision,LancerTurnBudget} from '@aelzerant/contracts';
import {lancerDie,type LancerRandom} from './dice';
import {condition,has,log,unit} from './state';
import {lancerAIControlling} from './control-state';
```
</details>

## lancerAIBudget

导出接口 · 源码第 5 行。

```ts
export const lancerAIBudget: (u: LancerCombatUnit): LancerTurnBudget;
```

## refreshLancerAI

导出接口 · 源码第 6 行。

```ts
export function refreshLancerAI(u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |

## aiOperationIssue

导出接口 · 源码第 11 行。

```ts
export function aiOperationIssue(u: LancerCombatUnit, i: Extract<LancerCombatIntent,{type:'ai'}>): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `Extract<LancerCombatIntent,{type:'ai'}>` | — |

## useLancerAI

导出接口 · 源码第 19 行。

```ts
export function useLancerAI(b: LancerBattle, u: LancerCombatUnit, i: Extract<LancerCombatIntent,{type:'ai'}>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `Extract<LancerCombatIntent,{type:'ai'}>` | — |

## cascadeLancerAI

导出接口 · 源码第 24 行。

```ts
export function cascadeLancerAI(b: LancerBattle, u: LancerCombatUnit, r: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `r` | 否 | `LancerRandom` | — |

## respondLancerAI

导出接口 · 源码第 32 行。

```ts
export function respondLancerAI(b: LancerBattle, p: LancerDecision, option: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |
