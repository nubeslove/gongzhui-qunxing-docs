# game/packages/game-core/src/lancer/state.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {lancerAIControlling,lancerTurnContains} from './control-state';
import { LANCER_CONDITION_NAMES, type LancerBattle, type LancerCombatUnit, type LancerCondition } from '@aelzerant/contracts';
```
</details>

## 重新导出的模块

```ts
export { LANCER_CONDITION_NAMES };
```

## has

导出接口 · 源码第 3 行。

```ts
export const has: (u: LancerCombatUnit, c: LancerCondition): boolean;
```

## condition

导出接口 · 源码第 4 行。

```ts
export const condition: (u: LancerCombatUnit, c: LancerCondition, source: string, temporary?: boolean): void;
```

## clear

导出接口 · 源码第 5 行。

```ts
export const clear: (u: LancerCombatUnit, c: LancerCondition): void;
```

## unit

导出接口 · 源码第 6 行。

```ts
export const unit: (b: LancerBattle, id: string): LancerCombatUnit;
```

## log

导出接口 · 源码第 7 行。

```ts
export function log(b: LancerBattle, text: string, units?: string[], roll?: import('@aelzerant/contracts').CombatRollDetail, movement?: import('@aelzerant/contracts').CombatStep['movement']): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `text` | 否 | `string` | — |
| `units` | 是 | `string[]` | [] |
| `roll` | 是 | `import('@aelzerant/contracts').CombatRollDetail` | — |
| `movement` | 是 | `import('@aelzerant/contracts').CombatStep['movement']` | — |

## canReact

导出接口 · 源码第 8 行。

```ts
export const canReact: (b: LancerBattle, u: LancerCombatUnit, key: string): boolean;
```

## useReaction

导出接口 · 源码第 9 行。

```ts
export function useReaction(b: LancerBattle, u: LancerCombatUnit, key: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `key` | 否 | `string` | — |

## spend

导出接口 · 源码第 10 行。

```ts
export function spend(b: LancerBattle, u: LancerCombatUnit, key: string, cost?: number, free?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `key` | 否 | `string` | — |
| `cost` | 是 | `number` | 1 |
| `free` | 是 | `boolean` | false |

## queueLancerActionBurn

导出接口 · 源码第 21 行。

A restriction swarm triggers once per action, not once per target of an area attack.

```ts
export function queueLancerActionBurn(b: LancerBattle, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
