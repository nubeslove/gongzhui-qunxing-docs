# game/packages/game-core/src/lancer/talent-events.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { lancerWeaponType } from './mimic';
import type { LancerBattle, LancerBattleStep, LancerCombatUnit, LancerCombatWeapon, LancerDecision, ManualMap } from '@aelzerant/contracts';
import { count, counter, feature } from './features';
import { canReact, log, useReaction } from './state';
import { validateWeapon } from './resolution';
import { lancerShotWeapon } from './weapon-profiles';
```
</details>

## Attack

内部依赖类型 · 源码第 8 行。

```ts
type Attack = Extract<LancerBattleStep, {
    kind: 'attack';
}>;
```

## lancerAttackTalents

导出接口 · 源码第 9 行。

```ts
export function lancerAttackTalents(b: LancerBattle, s: Attack): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `s` | 否 | `Attack` | — |

## offerLancerAttackTalents

导出接口 · 源码第 10 行。

```ts
export function offerLancerAttackTalents(b: LancerBattle, u: LancerCombatUnit, w: LancerCombatWeapon, s: Attack): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |
| `s` | 否 | `Attack` | — |

## respondLancerAttackTalents

导出接口 · 源码第 20 行。

```ts
export function respondLancerAttackTalents(b: LancerBattle, p: LancerDecision, option: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |

## queueLancerGunslinger

导出接口 · 源码第 32 行。

```ts
export function queueLancerGunslinger(b: LancerBattle, map: ManualMap, attacker: LancerCombatUnit, target: LancerCombatUnit, w: LancerCombatWeapon): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `attacker` | 否 | `LancerCombatUnit` | — |
| `target` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |

## offerLancerTalentEvent

导出接口 · 源码第 36 行。

```ts
export function offerLancerTalentEvent(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, s: Extract<LancerBattleStep,{kind:'feature'}>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'feature'}>` | — |

## respondLancerTalentEvent

导出接口 · 源码第 45 行。

```ts
export function respondLancerTalentEvent(b: LancerBattle, map: ManualMap, p: LancerDecision, option: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |
