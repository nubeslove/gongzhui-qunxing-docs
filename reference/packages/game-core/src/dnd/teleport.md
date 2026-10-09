# game/packages/game-core/src/dnd/teleport.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndAntimagicAt,dndObserver,manualSightFeatures,sceneObserverSees,sceneRayBlocked,type ManualTable,type MovementPoint,type DndMagicJob} from '@aelzerant/contracts';
import {dndIncapacitated} from '@aelzerant/rules-engine';
import {dndTokenOverlapsBlock,tokenDistance} from './movement';
```
</details>

## DndPointEffect

导出接口 · 源码第 5 行。

```ts
export type DndPointEffect = Extract<DndMagicJob, {
    kind: 'choose-point';
}>['effect'];
```

## dndTeleportProblem

导出接口 · 源码第 7 行。

Shared preview/authority validation. A teleport checks its endpoints, never a walking route.

```ts
export function dndTeleportProblem(table: ManualTable, actorId: string, point: MovementPoint, effect: DndPointEffect): string|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actorId` | 否 | `string` | — |
| `point` | 否 | `MovementPoint` | — |
| `effect` | 否 | `DndPointEffect` | — |

## applyDndTeleport

导出接口 · 源码第 24 行。

```ts
export function applyDndTeleport(table: ManualTable, actorId: string, point: MovementPoint, effect: DndPointEffect): { from: { x: number; y: number; z: number; }; to: { x: number; y: number; z: number; }; token: import("@source/packages/contracts/src/tabletop").ManualToken; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actorId` | 否 | `string` | — |
| `point` | 否 | `MovementPoint` | — |
| `effect` | 否 | `DndPointEffect` | — |
