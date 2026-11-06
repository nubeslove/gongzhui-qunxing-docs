# game/packages/rules-engine/src/dnd/traits.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndAbility,DndCharacter,DndCondition} from '@aelzerant/contracts';
import {DND_CATALOG,dndEntry,dndMod} from './index';
import {dndMulticlassTraining} from './multiclass';
import {syncDndSpeciesResources} from './species';
```
</details>

## dndTraining

导出接口 · 源码第 7 行。

```ts
export function dndTraining(c: DndCharacter, kind: 'armor'|'weapons'): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `kind` | 否 | `'armor'&#124;'weapons'` | — |

## dndWeaponTrained

导出接口 · 源码第 10 行。

```ts
export function dndWeaponTrained(c: DndCharacter, id: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `id` | 否 | `string` | — |

## dndUntrainedArmor

导出接口 · 源码第 14 行。

```ts
export function dndUntrainedArmor(c: DndCharacter): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndSpeciesSaveAdvantage

导出接口 · 源码第 18 行。

```ts
export function dndSpeciesSaveAdvantage(c: DndCharacter, ability: DndAbility, condition?: DndCondition): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `ability` | 否 | `DndAbility` | — |
| `condition` | 是 | `DndCondition` | — |

## dndCriticalThreshold

导出接口 · 源码第 22 行。

```ts
export function dndCriticalThreshold(c: DndCharacter): 18 | 20 | 19;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## syncDndClassResources

导出接口 · 源码第 25 行。

Explicit PHB class tables; sync does not replenish a previously spent pool.

```ts
export function syncDndClassResources(c: DndCharacter): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## syncDndSpeciesSpells

导出接口 · 源码第 44 行。

PHB origin tables. Each levelled racial spell has its own long-rest use.

```ts
export function syncDndSpeciesSpells(c: DndCharacter): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
