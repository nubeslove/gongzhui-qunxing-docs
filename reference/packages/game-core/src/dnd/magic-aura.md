# game/packages/game-core/src/dnd/magic-aura.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {calendarDay,defaultWorldCalendar,emptyStory,type ManualActor,type ManualTable,type DndActiveEffect} from '@aelzerant/contracts';
import {dndEntry,dndSpellChoiceOptions} from '@aelzerant/rules-engine';
```
</details>

## dndMagicAuraProblem

导出接口 · 源码第 4 行。

```ts
export function dndMagicAuraProblem(target: ManualActor, choice?: string): "涅斯图魔法灵光不能选择正被穿戴或携带的物件" | "请为物件选择虚假灵光" | "请选择不同于目标实际类型的伪装生物类型" | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `target` | 否 | `ManualActor` | — |
| `choice` | 是 | `string` | — |

## recordDndMagicAura

导出接口 · 源码第 10 行。

The daily casting record outlives the 24-hour effect, and is private character data.

```ts
export function recordDndMagicAura(table: ManualTable, target: ManualActor, effect: DndActiveEffect): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `target` | 否 | `ManualActor` | — |
| `effect` | 否 | `DndActiveEffect` | — |
