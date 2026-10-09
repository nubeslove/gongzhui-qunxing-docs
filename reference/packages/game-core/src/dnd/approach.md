# game/packages/game-core/src/dnd/approach.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndMovePlan,ManualTable,MovementPoint} from '@aelzerant/contracts';
import {dndHas,dndSpeed,dndMovementBudget} from '@aelzerant/rules-engine';
import {dndCover} from './geometry';
import {planDndMove,tokenDistance,dndTokenOverlapsBlock} from './movement';
import {dndOpportunitySources} from './opportunities';
```
</details>

## DndApproachPlan

导出接口 · 源码第 6 行。

```ts
export type DndApproachPlan = DndMovePlan & {
    hazards: ('opportunity' | 'terrain')[];
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `hazards` | 否 | `('opportunity'&#124;'terrain')[]` | 见结构定义及所属功能文档 |

## planDndApproach

导出接口 · 源码第 9 行。

Same planner in hover previews and the authority. Only legal, affordable walking is automatic.

```ts
export function planDndApproach(table: ManualTable, actorId: string, targetId: string, attackId: string): DndApproachPlan;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actorId` | 否 | `string` | — |
| `targetId` | 否 | `string` | — |
| `attackId` | 否 | `string` | — |
