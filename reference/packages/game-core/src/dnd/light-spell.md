# game/packages/game-core/src/dnd/light-spell.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndMagicSuppression,type DndActiveEffect,type DndCastCommand,type DndIntent,type ManualActor,type ManualTable,type ScenePoint} from '@aelzerant/contracts';
import {dndEntry,dndIncapacitated,dndLightItems} from '@aelzerant/rules-engine';
import {dndCurrentSize} from './body-size';
import {dndCastOrigin} from './magic-fields';
import {dndCover} from './geometry';
import {tokenDistance} from './movement';
```
</details>

## endDndLightSpell

导出接口 · 源码第 9 行。

```ts
export function endDndLightSpell(table: ManualTable, source: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `source` | 否 | `string` | — |

## dndLightTargetProblem

导出接口 · 源码第 11 行。

```ts
export function dndLightTargetProblem(table: ManualTable, source: string, target: string, item?: string, cover?: boolean, selecting?: boolean): "" | "请选择场景物件，或选择自己的一件随身物品" | "没有可用的随身物品" | "请选择仍受光亮术影响的随身物品" | "请选择一件大型或更小的随身物品" | "背包已满，无法单独记录这件发光物品" | "光亮术的目标必须是物件，不能是生物或他人携带的物品" | "此物件正被携带；自己的物品请从随身物品中选择" | "光亮术只能选择大型或更小的物件" | "物件已损毁" | "此物件没有仍在持续的光亮术" | "请先移动到物件5尺内" | "无法隔着实体障碍触碰物件";
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `source` | 否 | `string` | — |
| `target` | 否 | `string` | — |
| `item` | 是 | `string` | — |
| `cover` | 是 | `boolean` | false |
| `selecting` | 是 | `boolean` | false |

## applyDndLight

导出接口 · 源码第 33 行。

```ts
export function applyDndLight(table: ManualTable, a: ManualActor, target: ManualActor, intent: DndCastCommand, now: number, id: ()=>string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `target` | 否 | `ManualActor` | — |
| `intent` | 否 | `DndCastCommand` | — |
| `now` | 否 | `number` | — |
| `id` | 否 | `()=>string` | — |

## coverDndLight

导出接口 · 源码第 42 行。

```ts
export function coverDndLight(table: ManualTable, a: ManualActor, intent: Extract<DndIntent,{type:'coverLight'}>, spend: ()=>void): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `intent` | 否 | `Extract<DndIntent,{type:'coverLight'}>` | — |
| `spend` | 否 | `()=>void` | — |

## dndEffectLightSource

导出接口 · 源码第 57 行。

Resolve illumination from the object position in each scene, including a thrown weapon.

```ts
export function dndEffectLightSource(table: ManualTable, scene: Pick<ManualTable,'map'>&{id?:string}, a: ManualActor, e: DndActiveEffect): ScenePoint|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `scene` | 否 | `Pick<ManualTable,'map'>&{id?:string}` | — |
| `a` | 否 | `ManualActor` | — |
| `e` | 否 | `DndActiveEffect` | — |
