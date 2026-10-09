# game/packages/game-core/src/dnd/combat-effects.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndDamageType,ManualActor,ManualTable} from '@aelzerant/contracts';
import {blindsightRange,dndObserver,dndCanSeeActor} from '@aelzerant/contracts';
import {dndActiveSpellProfiles,dndDie,dndEntry,dndSpellEffectRule,dndHas} from '@aelzerant/rules-engine';
import {cleanDndEffects,dndEffectApplies} from './effects';
```
</details>

## dndBlurDisadvantage

导出接口 · 源码第 13 行。

```ts
export function dndBlurDisadvantage(table: ManualTable, source: ManualActor, target: ManualActor): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `source` | 否 | `ManualActor` | — |
| `target` | 否 | `ManualActor` | — |

## dndMirrorIntercept

导出接口 · 源码第 14 行。

```ts
export function dndMirrorIntercept(table: ManualTable, source: ManualActor, target: ManualActor, random: ()=>number, log: (s:string,...a:ManualActor[])=>void): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `source` | 否 | `ManualActor` | — |
| `target` | 否 | `ManualActor` | — |
| `random` | 否 | `()=>number` | — |
| `log` | 否 | `(s:string,...a:ManualActor[])=>void` | — |

## dndEndActionEffects

导出接口 · 源码第 21 行。

```ts
export function dndEndActionEffects(table: ManualTable, actor: string, event: 'attackOrCast'|'dealDamage'): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actor` | 否 | `string` | — |
| `event` | 否 | `'attackOrCast'&#124;'dealDamage'` | — |

## dndDamageEndsEffects

导出接口 · 源码第 25 行。

```ts
export function dndDamageEndsEffects(table: ManualTable, target: ManualActor, sourceId?: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `target` | 否 | `ManualActor` | — |
| `sourceId` | 是 | `string` | — |

## dndReduceSpellDamage

导出接口 · 源码第 33 行。

Resistance is a flat reduction before resistance/vulnerability, once per global turn.

```ts
export function dndReduceSpellDamage(table: ManualTable, a: ManualActor, amount: number, type: DndDamageType, now: number, random: ()=>number, log: (s:string,...a:ManualActor[])=>void): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `amount` | 否 | `number` | — |
| `type` | 否 | `DndDamageType` | — |
| `now` | 否 | `number` | — |
| `random` | 否 | `()=>number` | — |
| `log` | 否 | `(s:string,...a:ManualActor[])=>void` | — |

## dndUseDeathWard

导出接口 · 源码第 41 行。

```ts
export function dndUseDeathWard(table: ManualTable, a: ManualActor): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |

## dndRemoveSpellConditions

导出接口 · 源码第 46 行。

```ts
export function dndRemoveSpellConditions(table: ManualTable, a: ManualActor, conditions: readonly import('@aelzerant/contracts').DndCondition[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `conditions` | 否 | `readonly import('@aelzerant/contracts').DndCondition[]` | — |
