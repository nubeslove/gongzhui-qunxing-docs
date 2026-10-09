# game/packages/game-core/src/lancer/targeting.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {pilotGearIssue,lancerPilotGear} from './pilot-gear';
import {LANCER_PILOT_GEAR} from './pilot-equipment';
import {validateWeapon} from './resolution';
import {lancerRideIssue} from './riding';
import { leadershipTarget } from './leadership';
import { validateDroneLink } from './drone-talents';
import { LANCER_TECH_OPTIONS, validateTechTarget } from './tech';
import { torrentTarget } from './ranged-talents';
import { isDuelistAction, duelistTarget } from './duelist';
import { lancerKnockoutTarget } from './unarmed';
import { lancerCanRam } from './system-passives';
import type { LancerBattle, LancerCombatIntent, LancerCombatUnit, ManualMap } from '@aelzerant/contracts';
import { lancerNpcAreaWeapon, LANCER_NPC_ABILITIES, validateLancerNpcTarget } from './npc';
import {customSystemAction,customSystemTarget} from './custom-equipment';
import { lancerSystemDefinition } from './systems';
import { lancerDistance, lancerUnitLineOfSight } from './geometry';
import { has } from './state';
import { lancerShotWeapon } from './weapon-profiles';
import { planLancerAttack } from './attack-planning';
import { lancerAreaTargets, validateLancerArea } from './areas';
```
</details>

## LancerTargetMode

导出接口 · 源码第 23 行。

```ts
export type LancerTargetMode = 'self' | 'unit' | 'point' | 'area';
```

## lancerTargetMode

导出接口 · 源码第 24 行。

```ts
export function lancerTargetMode(u: LancerCombatUnit, i: LancerCombatIntent): LancerTargetMode;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `LancerCombatIntent` | — |

## validateLancerActionTarget

导出接口 · 源码第 37 行。

Read-only targeting rules, shared by the preview and GM settlement.

```ts
export function validateLancerActionTarget(map: ManualMap, u: LancerCombatUnit, target: LancerCombatUnit|undefined, action: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `target` | 否 | `LancerCombatUnit&#124;undefined` | — |
| `action` | 否 | `string` | — |

## lancerTargetIssue

导出接口 · 源码第 50 行。

```ts
export function lancerTargetIssue(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, i: LancerCombatIntent, id: string): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `LancerCombatIntent` | — |
| `id` | 否 | `string` | — |

## lancerAreaIssue

导出接口 · 源码第 82 行。

```ts
export function lancerAreaIssue(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, i: LancerCombatIntent): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `LancerCombatIntent` | — |
