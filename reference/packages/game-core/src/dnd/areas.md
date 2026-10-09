# game/packages/game-core/src/dnd/areas.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {walledTemplateAffects,templateVisiblePolygons,dndMagicSuppression,type ManualTable,type SceneTemplate,type SceneWall,type MovementPoint} from '@aelzerant/contracts';
import {DND_SPELL_EXECUTORS} from '@aelzerant/rules-engine';
import {dndCoverFrom,dndRayBlocked} from './geometry';
```
</details>

## dndAreaWalls

导出接口 · 源码第 6 行。

Solid block edges participate in the same shadow geometry as scene walls.

```ts
export function dndAreaWalls(table: ManualTable): SceneWall[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |

## dndSpellArea

导出接口 · 源码第 18 行。

Shared targeting/authority geometry: a cell needs 50% coverage; creatures occupy every cell of their footprint.

```ts
export function dndSpellArea(table: ManualTable, actorId: string, english: string, point: MovementPoint, slot?: number, placement?: {from:MovementPoint;range:number;spellOrigin?:MovementPoint;teleport?:boolean}): { template: SceneTemplate; cells: MovementPoint[]; targets: string[]; visiblePolygons: { x: number; y: number; }[][]; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actorId` | 否 | `string` | — |
| `english` | 否 | `string` | — |
| `point` | 否 | `MovementPoint` | — |
| `slot` | 是 | `number` | 1 |
| `placement` | 是 | `{from:MovementPoint;range:number;spellOrigin?:MovementPoint;teleport?:boolean}` | — |
