# game/packages/game-core/src/dnd/magic-items.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {type ManualTable,type ManualActor,type WorldCalendar} from '@aelzerant/contracts';
import {dndAttunementProblem,dndMagicItemRule,dndMagicItemActive,dndIncapacitated,dndDice,dndPactPool,type DndFeatureAction} from '@aelzerant/rules-engine';
import {dndOccupiedHands} from './hands';
import {dndCannotUseMagic} from './magic-fields';
import type {FeatureContext} from './class-features';
```
</details>

## applyDndMagicItem

导出接口 · 源码第 6 行。

```ts
export function applyDndMagicItem(table: ManualTable, a: ManualActor, action: DndFeatureAction, ctx: FeatureContext): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `action` | 否 | `DndFeatureAction` | — |
| `ctx` | 否 | `FeatureContext` | — |

## finishDndAttunement

导出接口 · 源码第 20 行。

```ts
export function finishDndAttunement(a: ManualActor, log: (text:string,...actors:ManualActor[])=>void): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |
| `log` | 否 | `(text:string,...actors:ManualActor[])=>void` | — |

## cleanDndMagicItems

导出接口 · 源码第 21 行。

```ts
export function cleanDndMagicItems(table: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |

## refreshDndMagicItems

导出接口 · 源码第 23 行。

World time, not number of rests, owns dawn recharge. A stored day prevents rewind/replay recovery.

```ts
export function refreshDndMagicItems(table: ManualTable, calendar: WorldCalendar, before: number, after: number, random?: ()=>number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `calendar` | 否 | `WorldCalendar` | — |
| `before` | 否 | `number` | — |
| `after` | 否 | `number` | — |
| `random` | 是 | `()=>number` | Math.random |
