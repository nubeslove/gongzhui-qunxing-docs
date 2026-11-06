# game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {effectiveLancerResourceActor} from './resourceEquipment';
import {lancerNpcTokenAppearance} from './tokenAppearance';
import {isNarrativeActor} from '../narrativeActor';
import {readPilotProfile,savePilotProfile} from './pilotProfile';
import {lancerPilotUnit,captureLancerPilot} from '@aelzerant/game-core';
import {parseLancerNhp,parseLancerAI,actorController} from '@aelzerant/contracts';
import { prototypeWeapon } from './prototypeEquipment';
import { LANCER_CONDITIONS } from '@aelzerant/contracts';
import type { LancerCombatUnit, LancerCombatWeapon, ManualActor, ManualTable, ManualToken } from '@aelzerant/contracts';
import { lancerNpcUnit } from '@aelzerant/game-core';
import { activateLancer, lancerMechName, readLancer, readyLancer, setEquipment } from './model';
import { LANCER_CATALOG } from './catalog';
import coreWeaponTypes from './data/core-weapon-types.json';
import { coreSystemId } from './coreResources';
```
</details>

## combatUnit

导出接口 · 源码第 17 行。

```ts
export function combatUnit(actor: ManualActor, token: ManualToken): LancerCombatUnit;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `token` | 否 | `ManualToken` | — |

## sceneCombatUnit

导出接口 · 源码第 55 行。

```ts
export function sceneCombatUnit(table: ManualTable, actor: ManualActor, token: ManualToken): LancerCombatUnit;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actor` | 否 | `ManualActor` | — |
| `token` | 否 | `ManualToken` | — |

## prepareLancerUnits

导出接口 · 源码第 59 行。

```ts
export function prepareLancerUnits(table: ManualTable): LancerCombatUnit[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |

## syncCombatCards

导出接口 · 源码第 67 行。

```ts
export function syncCombatCards(table: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |

## syncLancerUnit

导出接口 · 源码第 72 行。

```ts
export function syncLancerUnit(actor: ManualActor, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## readPersistentConditions

导出接口 · 源码第 92 行。

```ts
export function readPersistentConditions(actor: ManualActor): LancerCombatUnit['conditions'];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |

## starterLancer

导出接口 · 源码第 97 行。

```ts
export function starterLancer(name: string, ownerId: string, hostile?: boolean): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | — |
| `ownerId` | 否 | `string` | — |
| `hostile` | 是 | `boolean` | false |
