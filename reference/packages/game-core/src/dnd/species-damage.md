# game/packages/game-core/src/dnd/species-damage.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualActor,ManualTable} from '@aelzerant/contracts';
import {dndSpecies,dndActiveSpellProfiles,dndIncapacitated,dndMod,dndFeatureEffect,dndFeatureExpiry,dndConditionImmune,dndDamage} from '@aelzerant/rules-engine';
import {chooseDndRollFeature,rollDndOwnedDice} from './roll-decisions';
import {addDndFeatureEffect,type FeatureContext} from './class-features';
import {tokenDistance} from './movement';
import type {DndDamagePart} from './damage-roll';
```
</details>

## Context

内部依赖类型 · 源码第 7 行。

```ts
type Context = Pick<FeatureContext, 'now' | 'id' | 'random' | 'spend' | 'log'>;
```

## reduceDndSpeciesDamage

导出接口 · 源码第 12 行。

Reduction precedes resistance, and a single reaction reduces the complete mixed damage event.

```ts
export function reduceDndSpeciesDamage(table: ManualTable, a: ManualActor, parts: DndDamagePart[], ctx: Context): DndDamagePart[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `parts` | 否 | `DndDamagePart[]` | — |
| `ctx` | 否 | `Context` | — |

## dndSpeciesDamageRiders

导出接口 · 源码第 18 行。

Offered only after an actual damaging hit, including a spell attack.

```ts
export function dndSpeciesDamageRiders(table: ManualTable, source: ManualActor|undefined, target: ManualActor, attack: boolean, spell: boolean, critical: boolean, ctx: Context): DndDamagePart[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `source` | 否 | `ManualActor&#124;undefined` | — |
| `target` | 否 | `ManualActor` | — |
| `attack` | 否 | `boolean` | — |
| `spell` | 否 | `boolean` | — |
| `critical` | 否 | `boolean` | — |
| `ctx` | 否 | `Context` | — |

## dndRelentlessEndurance

导出接口 · 源码第 35 行。

```ts
export function dndRelentlessEndurance(table: ManualTable, a: ManualActor, wasZero: boolean, overkill: number, ctx: Context): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `wasZero` | 否 | `boolean` | — |
| `overkill` | 否 | `number` | — |
| `ctx` | 否 | `Context` | — |

## dndStormRetaliation

导出接口 · 源码第 39 行。

```ts
export function dndStormRetaliation(table: ManualTable, a: ManualActor, source: ManualActor|undefined, ctx: Context): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `source` | 否 | `ManualActor&#124;undefined` | — |
| `ctx` | 否 | `Context` | — |
