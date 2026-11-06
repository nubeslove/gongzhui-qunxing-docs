# game/packages/game-core/src/dnd/magic-jump.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {elevationStepCost,type DndMovePlan,type ManualActor,type ManualTable,type MovementPoint} from '@aelzerant/contracts';
import {dndFeatureEffect,dndHas,dndIncapacitated,dndMovementBudget,dndSpeed} from '@aelzerant/rules-engine';
import {planDndMove} from './movement';
import {dndMoveHazards} from './move-hazards';
```
</details>

## dndMagicJumpProblem

导出接口 · 源码第 6 行。

```ts
export function dndMagicJumpProblem(table: ManualTable, a: ManualActor): "" | "当前没有生效的跳跃术" | "失能、速度为零或倒地时不能进行法术跳跃" | "法术跳跃只能在自己的回合使用" | "本回合的法术跳跃已经使用" | "法术跳跃至少需要10尺剩余移动力";
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |

## dndMagicJumpStepCost

导出接口 · 源码第 15 行。

```ts
export function dndMagicJumpStepCost(from: MovementPoint, step: DndMovePlan['steps'][number], paid: boolean): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `from` | 否 | `MovementPoint` | — |
| `step` | 否 | `DndMovePlan['steps'][number]` | — |
| `paid` | 否 | `boolean` | — |

## planDndMagicJump

导出接口 · 源码第 16 行。

```ts
export function planDndMagicJump(table: ManualTable, a: ManualActor, point: MovementPoint): DndMovePlan&{hazards:('opportunity'|'terrain')[]};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `point` | 否 | `MovementPoint` | — |
