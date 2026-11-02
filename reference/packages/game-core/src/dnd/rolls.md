# game/packages/game-core/src/dnd/rolls.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {chooseDndIndomitableDie,chooseDndHeroicDie,chooseDndRollFeature,rollDndOwnedDice,useDndInspiration,useDndLegendaryResistance} from './roll-decisions';
import type {DndAbility,ManualActor,ManualTable} from '@aelzerant/contracts';
import {dndCanSeeActor} from '@aelzerant/contracts';
import {dndHelpToolKey,dndClassLevel,dndEntry,dndDie,dndFeatureEffect,dndIncapacitated,dndMod,dndSpeed,dndTest} from '@aelzerant/rules-engine';
import {dndFeatureDistance} from './class-features';
```
</details>

## dndProtectionAura

导出接口 · 源码第 7 行。

```ts
export function dndProtectionAura(table: ManualTable, a: ManualActor): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |

## dndContextTest

导出接口 · 源码第 18 行。

All d20 tests, including death saves, share optional decisions and authoritative replay.

```ts
export function dndContextTest(table: ManualTable, a: ManualActor, ability: DndAbility, random: ()=>number, opts?: NonNullable<Parameters<typeof dndTest>[3]>&{tool?:string}): { faces: number[]; natural: number; bonus: number; modifiers: { label: string; value: number; }[]; total: number; success: boolean | undefined; mode: string; autoFail: boolean; critical: boolean; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `ability` | 否 | `DndAbility` | — |
| `random` | 否 | `()=>number` | — |
| `opts` | 是 | `NonNullable<Parameters<typeof dndTest>[3]>&{tool?:string}` | {} |
