# game/packages/game-core/src/dnd/move-hazards.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndMovePlan,ManualTable,ManualToken,MovementPoint} from '@aelzerant/contracts';
import {DND_SPELL_EXECUTORS,dndEntry,dndHas} from '@aelzerant/rules-engine';
import {dndTokenOverlapsBlock} from './movement';
import {dndOpportunitySources} from './opportunities';
import {dndRegionAffects} from './scene-spells';
```
</details>

## dndMoveHazards

导出接口 · 源码第 7 行。

```ts
export function dndMoveHazards(table: ManualTable, token: ManualToken, plan: DndMovePlan): ("opportunity" | "terrain")[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `token` | 否 | `ManualToken` | — |
| `plan` | 否 | `DndMovePlan` | — |
