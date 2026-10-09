# game/packages/game-core/src/lancer/weapon-events.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerBattle, LancerBattleStep, LancerCombatUnit, LancerCombatWeapon, LancerDecision, ManualMap } from '@aelzerant/contracts';
import { validateWeapon } from './resolution';
import { canReact, log, useReaction } from './state';
```
</details>

## Special

内部依赖类型 · 源码第 5 行。

```ts
type Special = NonNullable<Extract<LancerBattleStep, {
    kind: 'attack';
}>['special']>;
```

## lancerWeaponRestriction

导出接口 · 源码第 11 行。

```ts
export function lancerWeaponRestriction(w: LancerCombatWeapon, special?: Special): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `w` | 否 | `LancerCombatWeapon` | — |
| `special` | 是 | `Special` | — |

## queueLancerWeaponReactions

导出接口 · 源码第 25 行。

```ts
export function queueLancerWeaponReactions(b: LancerBattle, map: ManualMap, attacker: LancerCombatUnit, target: LancerCombatUnit, key: 'autopod'|'vorpal'): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `attacker` | 否 | `LancerCombatUnit` | — |
| `target` | 否 | `LancerCombatUnit` | — |
| `key` | 否 | `'autopod'&#124;'vorpal'` | — |

## offerLancerWeaponEvent

导出接口 · 源码第 36 行。

```ts
export function offerLancerWeaponEvent(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, s: Extract<LancerBattleStep,{kind:'feature'}>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'feature'}>` | — |

## respondLancerWeaponEvent

导出接口 · 源码第 46 行。

```ts
export function respondLancerWeaponEvent(b: LancerBattle, map: ManualMap, p: LancerDecision, option: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |
