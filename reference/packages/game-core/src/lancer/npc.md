# game/packages/game-core/src/lancer/npc.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorController} from '@aelzerant/contracts';
import { parseLancerNpc, type LancerNpc, type LancerBattle, type LancerCombatUnit, type LancerCombatWeapon, type LancerCombatIntent, type ManualActor, type ManualMap, type ManualToken } from '@aelzerant/contracts';
import { validateLancerWeaponUse, validateWeapon } from './resolution';
import { lancerDistance } from './geometry';
import { lancerDie, type LancerRandom } from './dice';
import { lancerAreaTargets, validateLancerArea } from './areas';
import { clear, condition, has, log, spend } from './state';
import { count } from './features';
```
</details>

## readLancerNpc

导出接口 · 源码第 32 行。

```ts
export function readLancerNpc(actor: ManualActor): LancerNpc|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |

## createLancerNpc

导出接口 · 源码第 39 行。

```ts
export function createLancerNpc(name: string, ownerId: string, npc?: LancerNpc): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | — |
| `ownerId` | 否 | `string` | — |
| `npc` | 是 | `LancerNpc` | {classId:'assault',tier:1,template:'standard',options:[]} |

## lancerNpcUnit

导出接口 · 源码第 42 行。

```ts
export function lancerNpcUnit(actor: ManualActor, token: ManualToken): LancerCombatUnit;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `token` | 否 | `ManualToken` | — |

## lancerNpcActionIssue

导出接口 · 源码第 66 行。

```ts
export function lancerNpcActionIssue(u: LancerCombatUnit, i: Extract<LancerCombatIntent,{type:'npcAction'}>): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `Extract<LancerCombatIntent,{type:'npcAction'}>` | — |

## lancerNpcAreaWeapon

导出接口 · 源码第 75 行。

```ts
export function lancerNpcAreaWeapon(u: LancerCombatUnit, ability?: string): LancerCombatWeapon;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `ability` | 是 | `string` | 'micro-missiles' |

## validateLancerNpcTarget

导出接口 · 源码第 79 行。

```ts
export function validateLancerNpcTarget(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, ability: string, target: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `ability` | 否 | `string` | — |
| `target` | 否 | `string` | — |

## useLancerNpcAction

导出接口 · 源码第 85 行。

```ts
export function useLancerNpcAction(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, i: Extract<LancerCombatIntent,{type:'npcAction'}>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `Extract<LancerCombatIntent,{type:'npcAction'}>` | — |

## beginLancerNpcTurn

导出接口 · 源码第 109 行。

```ts
export function beginLancerNpcTurn(b: LancerBattle, u: LancerCombatUnit, r: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `r` | 否 | `LancerRandom` | — |

## lancerNpcWeaponHit

导出接口 · 源码第 115 行。

```ts
export function lancerNpcWeaponHit(b: LancerBattle, u: LancerCombatUnit, target: LancerCombatUnit, w: LancerCombatWeapon): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `target` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |

## refreshLancerNpcAuras

导出接口 · 源码第 124 行。

```ts
export function refreshLancerNpcAuras(b: LancerBattle, map: ManualMap): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |

## lancerActivationLimit

导出接口 · 源码第 128 行。

```ts
export function lancerActivationLimit(u: LancerCombatUnit): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |

## lancerActivationsUsed

导出接口 · 源码第 129 行。

```ts
export function lancerActivationsUsed(b: LancerBattle, u: LancerCombatUnit): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## finishLancerActivation

导出接口 · 源码第 130 行。

```ts
export function finishLancerActivation(b: LancerBattle, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
