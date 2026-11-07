# game/packages/game-core/src/lancer/timing.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {lancerRaleighReloadAvailable} from './features';
import type {LancerBattle,LancerBattleStep,LancerCombatUnit,LancerDecision} from '@aelzerant/contracts';
import {lancerAIControlling} from './control-state';
```
</details>

## lancerEndingBodies

导出接口 · 源码第 4 行。

```ts
export function lancerEndingBodies(b: LancerBattle, u: LancerCombatUnit): LancerCombatUnit[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## Feature

内部依赖类型 · 源码第 8 行。

```ts
type Feature = Extract<LancerBattleStep, {
    kind: 'feature';
}>;
```

## queueLancerTiming

导出接口 · 源码第 21 行。

Core p65: foreign effects resolve first; the active player orders each simultaneous group.
Existing feature nodes carry the boundary/entry IDs, so pending choices survive saves.

```ts
export function queueLancerTiming(b: LancerBattle, u: LancerCombatUnit, at: 'start'|'end'): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `at` | 否 | `'start'&#124;'end'` | — |

## refreshLancerTiming

导出接口 · 源码第 44 行。

```ts
export function refreshLancerTiming(b: LancerBattle): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |

## offerLancerTiming

导出接口 · 源码第 49 行。

```ts
export function offerLancerTiming(b: LancerBattle, s: Feature): LancerBattleStep[]|null|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `s` | 否 | `Feature` | — |

## respondLancerTiming

导出接口 · 源码第 61 行。

```ts
export function respondLancerTiming(b: LancerBattle, p: LancerDecision, id: string): LancerBattleStep[]|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `p` | 否 | `LancerDecision` | — |
| `id` | 否 | `string` | — |
