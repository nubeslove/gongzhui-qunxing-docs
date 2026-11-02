# game/packages/game-core/src/dnd/movement.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {surfaceElevation,surfaceContains,elevationMovementBlocked,elevationDistance,elevationStep,elevationStepCost,expandElevationPath} from '@aelzerant/contracts';
import {movementPath,expandMovementPath,type MovementPoint,movementForStep,type MovementChoice} from '@aelzerant/contracts';
import { environmentMovementAllowed,regionMovementMultiplier,sceneRayBlocked } from '@aelzerant/contracts';
import type { DndCharacter, DndMovePlan, ManualBlock, ManualTable, ManualToken } from '@aelzerant/contracts';
import {dndMovementSpeeds,dndFeatureEffect,dndSpiderClimbActive} from '@aelzerant/rules-engine';
import { dndHas, dndIncapacitated,crownActive } from '@aelzerant/rules-engine';
import {dndCurrentSize} from './body-size';
import {dndDraggedTokens,dndDragExtraCost,dndDragStep} from './grapple-movement';
```
</details>

## dndFlightEnabled

导出接口 · 源码第 10 行。

Authored token abilities and rule-granted flight must agree in movement and gravity.

```ts
export const dndFlightEnabled: (c: DndCharacter, t: ManualToken): boolean;
```

## tokenDistance

导出接口 · 源码第 11 行。

```ts
export const tokenDistance: (a: ManualToken, b: ManualToken): number;
```

## dndTokenOverlapsBlock

导出接口 · 源码第 17 行。

Separating axes for a token footprint against a rotated solid/terrain rectangle.

```ts
export function dndTokenOverlapsBlock(t: ManualToken, b: ManualBlock): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualToken` | — |
| `b` | 否 | `ManualBlock` | — |

## dndSpiderSupported

导出接口 · 源码第 27 行。

Magical adhesion needs an actual scene surface; it never grants unsupported flight.

```ts
export function dndSpiderSupported(table: ManualTable, t: ManualToken): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `t` | 否 | `ManualToken` | — |

## planDndMove

导出接口 · 源码第 41 行。

Straight grid segment; players can choose intermediate squares to turn around obstacles.

```ts
export function planDndMove(table: ManualTable, token: ManualToken, x: number, y: number, z: number, path?: MovementPoint[], choice?: MovementChoice, transit?: boolean, continuingJump?: boolean): DndMovePlan;
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
| `continuingJump` | 是 | `boolean` | false |
