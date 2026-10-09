# game/packages/game-core/src/lancer/features.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerBattle, LancerCombatUnit } from '@aelzerant/contracts';
import { clear, condition, has, log } from './state';
```
</details>

## feature

导出接口 · 源码第 41 行。

```ts
export const feature: (u: LancerCombatUnit, id: string): boolean;
```

## counter

导出接口 · 源码第 42 行。

```ts
export const counter: (u: LancerCombatUnit, id: string): number;
```

## count

导出接口 · 源码第 43 行。

```ts
export function count(u: LancerCombatUnit, id: string, value: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `id` | 否 | `string` | — |
| `value` | 否 | `number` | — |

## activateLancerFeature

导出接口 · 源码第 44 行。

```ts
export function activateLancerFeature(b: LancerBattle, u: LancerCombatUnit, id: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `id` | 否 | `string` | — |

## lancerUniversalAccuracy

导出接口 · 源码第 58 行。

```ts
export function lancerUniversalAccuracy(u: LancerCombatUnit): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |

## consumeLancerSkillAccuracy

导出接口 · 源码第 60 行。

Consume only at the actual roll, never while previewing a target or validating an action.

```ts
export function consumeLancerSkillAccuracy(u: LancerCombatUnit, skill: 'hull'|'agility'|'systems'|'engineering', save?: boolean): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `skill` | 否 | `'hull'&#124;'agility'&#124;'systems'&#124;'engineering'` | — |
| `save` | 是 | `boolean` | false |

## lancerSaveAccuracy

导出接口 · 源码第 64 行。

```ts
export function lancerSaveAccuracy(u: LancerCombatUnit, skill: 'hull'|'agility'|'systems'|'engineering'): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `skill` | 否 | `'hull'&#124;'agility'&#124;'systems'&#124;'engineering'` | — |

## lancerSkillAccuracy

导出接口 · 源码第 65 行。

```ts
export function lancerSkillAccuracy(u: LancerCombatUnit, skill: 'hull'|'agility'|'systems'|'engineering'): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `skill` | 否 | `'hull'&#124;'agility'&#124;'systems'&#124;'engineering'` | — |

## lancerReactionEvaded

导出接口 · 源码第 72 行。

```ts
export function lancerReactionEvaded(b: LancerBattle, target: LancerCombatUnit, reaction?: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `target` | 否 | `LancerCombatUnit` | — |
| `reaction` | 是 | `boolean` | false |
