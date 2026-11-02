# game/packages/game-core/src/dnd/grapple-movement.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {elevationMovementBlocked,environmentMovementAllowed,type ManualTable,type ManualToken,type MovementChoice,type MovementPoint} from '@aelzerant/contracts';
import {dndIncapacitated} from '@aelzerant/rules-engine';
import {dndCurrentSize} from './body-size';
import {dndTokenOverlapsBlock,tokenDistance} from './movement';
```
</details>

## dndDraggedTokens

导出接口 · 源码第 7 行。

A maintained hand grapple travels with its source; releasing it is a separate free choice.

```ts
export function dndDraggedTokens(table: ManualTable, source: ManualToken): ManualToken[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `source` | 否 | `ManualToken` | — |

## dndDragExtraCost

导出接口 · 源码第 11 行。

```ts
export function dndDragExtraCost(table: ManualTable, source: ManualToken, targets?: ManualToken[]): 1 | 0;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `source` | 否 | `ManualToken` | — |
| `targets` | 是 | `ManualToken[]` | dndDraggedTokens(table,source) |

## dndDragStep

导出接口 · 源码第 18 行。

Preserve relative placement. Each footprint must have a clear route, including around corners.

```ts
export function dndDragStep(table: ManualTable, source: ManualToken, next: MovementPoint, targets: ManualToken[], mode: MovementChoice): { x: number; y: number; z: number; sceneBlock?: string; objectFootprint?: { width: number; depth: number; height: number; rotation: number; }; objectKind?: "object" | "vehicle"; lancerRiding?: import("@source/packages/contracts/src/lancer-combat").LancerRide; lancerPilotOf?: string; lancerPilotBody?: "casket" | "subaltern"; perception?: import("@source/packages/contracts/src/dnd-perception").TokenPerception; appearance?: import("@source/packages/contracts/src/token-appearance").TokenAppearance; id: string; actorId: string; name: string; size: number; color: string; hidden: boolean; model?: string; image?: string; rotation?: number; lancerOwner?: string; nonBlocking?: boolean; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `source` | 否 | `ManualToken` | — |
| `next` | 否 | `MovementPoint` | — |
| `targets` | 否 | `ManualToken[]` | — |
| `mode` | 否 | `MovementChoice` | — |
