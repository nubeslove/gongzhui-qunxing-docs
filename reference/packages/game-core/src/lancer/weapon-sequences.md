# game/packages/game-core/src/lancer/weapon-sequences.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerBattle, LancerBattleStep, LancerCombatUnit, LancerCombatWeapon, LancerDecision, LancerSalvo, ManualMap } from '@aelzerant/contracts';
import { lancerDistance, lancerLineOfSight } from './geometry';
import { has, log } from './state';
import { lancerRoll, type LancerRandom } from './dice';
```
</details>

## Shot

内部依赖类型 · 源码第 6 行。

```ts
type Shot = Extract<LancerBattleStep, {
    kind: 'attack';
}>;
```

## selectedLancerTargets

导出接口 · 源码第 13 行。

```ts
export function selectedLancerTargets(w: LancerCombatWeapon, target: string, extra?: string[]): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `w` | 否 | `LancerCombatWeapon` | — |
| `target` | 否 | `string` | — |
| `extra` | 是 | `string[]` | — |

## lancerSequencePattern

导出接口 · 源码第 18 行。

```ts
export function lancerSequencePattern(w: LancerCombatWeapon): LancerSalvo['pattern'];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `w` | 否 | `LancerCombatWeapon` | — |

## queueLancerSequence

导出接口 · 源码第 27 行。

Called on hit, before damage is queued. Origin is frozen even if that damage destroys its target.

```ts
export function queueLancerSequence(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, w: LancerCombatWeapon, s: Shot): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |
| `s` | 否 | `Shot` | — |

## offerLancerChain

导出接口 · 源码第 37 行。

```ts
export function offerLancerChain(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, s: Extract<LancerBattleStep,{kind:'feature'}>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'feature'}>` | — |

## respondLancerChain

导出接口 · 源码第 44 行。

```ts
export function respondLancerChain(b: LancerBattle, map: ManualMap, p: LancerDecision, option: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |

## resolveLancerGravity

导出接口 · 源码第 50 行。

```ts
export function resolveLancerGravity(b: LancerBattle, u: LancerCombatUnit, s: Shot, r: LancerRandom): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Shot` | — |
| `r` | 否 | `LancerRandom` | — |
