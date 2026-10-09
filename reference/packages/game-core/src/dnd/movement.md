# game/packages/game-core/src/dnd/movement.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {elevationMovementBlocked,elevationDistance,elevationStep,elevationStepCost,expandElevationPath} from '@aelzerant/contracts';
import {movementPath,expandMovementPath,type MovementPoint,movementForStep,type MovementChoice} from '@aelzerant/contracts';
import { environmentMovementAllowed,regionMovementMultiplier,sceneRayBlocked } from '@aelzerant/contracts';
import type { DndMovePlan, ManualBlock, ManualTable, ManualToken } from '@aelzerant/contracts';
import { dndHas, dndIncapacitated,crownActive } from '@aelzerant/rules-engine';
```
</details>

## tokenDistance

导出接口 · 源码第 6 行。

```ts
export const tokenDistance: (a: ManualToken, b: ManualToken): number;
```

## dndTokenOverlapsBlock

导出接口 · 源码第 12 行。

Separating axes for a token footprint against a rotated solid/terrain rectangle.

```ts
export function dndTokenOverlapsBlock(t: ManualToken, b: ManualBlock): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualToken` | — |
| `b` | 否 | `ManualBlock` | — |

## planDndMove

导出接口 · 源码第 21 行。

Straight grid segment; players can choose intermediate squares to turn around obstacles.

```ts
export function planDndMove(table: ManualTable, token: ManualToken, x: number, y: number, z: number, path?: MovementPoint[], choice?: MovementChoice, transit?: boolean): DndMovePlan;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `token` | 否 | `ManualToken` | — |
| `x` | 否 | `number` | — |
| `y` | 否 | `number` | — |
| `z` | 否 | `number` | — |
| `path` | 是 | `MovementPoint[]` | — |
| `choice` | 是 | `MovementChoice` | 'walk' |
| `transit` | 是 | `boolean` | false |
