# game/packages/game-core/src/lancer/executioner.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerAttackReplay, LancerAttackStep, LancerBattle, LancerBattleStep, LancerCombatUnit, LancerCombatWeapon, LancerDecision, ManualMap } from '@aelzerant/contracts';
import { count, counter, feature } from './features';
import { lancerDistance, lancerUnitLineOfSight } from './geometry';
import { has, log, unit } from './state';
import { lancerCanRam } from './system-passives';
import { lancerUnarmedWeapon } from './unarmed';
import { validateWeapon } from './resolution';
import { lancerShotWeapon } from './weapon-profiles';
```
</details>

## Followup

内部依赖类型 · 源码第 9 行。

```ts
type Followup = Extract<LancerBattleStep, {
    kind: 'melee';
}>;
```

## queueExecutioner

导出接口 · 源码第 22 行。

```ts
export function queueExecutioner(b: LancerBattle, u: LancerCombatUnit, w: LancerCombatWeapon, s: LancerAttackStep, hit: boolean, critical: boolean, replay: LancerAttackReplay): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |
| `s` | 否 | `LancerAttackStep` | — |
| `hit` | 否 | `boolean` | — |
| `critical` | 否 | `boolean` | — |
| `replay` | 否 | `LancerAttackReplay` | — |

## offerExecutioner

导出接口 · 源码第 30 行。

```ts
export function offerExecutioner(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, s: Followup): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Followup` | — |

## respondExecutioner

导出接口 · 源码第 38 行。

```ts
export function respondExecutioner(b: LancerBattle, map: ManualMap, p: LancerDecision, option: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |
