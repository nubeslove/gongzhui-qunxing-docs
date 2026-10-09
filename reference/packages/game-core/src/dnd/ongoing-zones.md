# game/packages/game-core/src/dnd/ongoing-zones.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualTable,ManualActor,MovementPoint,DndMagicJob,SceneRegion} from '@aelzerant/contracts';
import {DND_SPELL_EXECUTORS,dndEntry,dndTest,crownActive,dndIncapacitated} from '@aelzerant/rules-engine';
import {dndEffectActive,dndEffectRollModifiers} from './effects';
import {dndMagicRegion,dndRegionAffects} from './scene-spells';
import {dndActorMagicBlock,dndCannotUseMagic} from './magic-fields';
import {dndSpellArea} from './areas';
```
</details>

## dndZoneTurn

导出接口 · 源码第 8 行。

```ts
export const dndZoneTurn: (table: ManualTable, now: number): string;
```

## RollLog

内部依赖类型 · 源码第 9 行。

```ts
type RollLog = (a: ManualActor, label: string, r: ReturnType<typeof dndTest>) => void;
```

## dndOngoingZoneJobs

导出接口 · 源码第 12 行。

All four triggers share the same per-creature, per-global-turn record, including a passed save.

```ts
export function dndOngoingZoneJobs(table: ManualTable, a: ManualActor, now: number, random: ()=>number, rollLog: RollLog, regions?: SceneRegion[]): DndMagicJob[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `now` | 否 | `number` | — |
| `random` | 否 | `()=>number` | — |
| `rollLog` | 否 | `RollLog` | — |
| `regions` | 是 | `SceneRegion[]` | table.map.features?.regions??[] |

## dndZoneEntryJobs

导出接口 · 源码第 25 行。

```ts
export function dndZoneEntryJobs(table: ManualTable, actorId: string, before: ManualTable, now: number, random: ()=>number, rollLog: RollLog): DndMagicJob[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actorId` | 否 | `string` | — |
| `before` | 否 | `ManualTable` | — |
| `now` | 否 | `number` | — |
| `random` | 否 | `()=>number` | — |
| `rollLog` | 否 | `RollLog` | — |

## dndMoveZonePreview

导出接口 · 源码第 31 行。

Repositioning uses the existing instance and its original cast origin/slot, never recasts it.

```ts
export function dndMoveZonePreview(table: ManualTable, actorId: string, effectId: string, point: MovementPoint): { region: SceneRegion; profile: import("@source/packages/rules-engine/src/index").DndSpellExecutor; from: { x: number; y: number; z: number; }; point: MovementPoint; plan: { targets: string[]; template: import("@source/packages/contracts/src/scene-template").SceneTemplate; cells: MovementPoint[]; visiblePolygons: { x: number; y: number; }[][]; }; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actorId` | 否 | `string` | — |
| `effectId` | 否 | `string` | — |
| `point` | 否 | `MovementPoint` | — |

## moveDndZone

导出接口 · 源码第 46 行。

```ts
export function moveDndZone(table: ManualTable, preview: ReturnType<typeof dndMoveZonePreview>, now: number, random: ()=>number, rollLog: RollLog): DndMagicJob[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `preview` | 否 | `ReturnType<typeof dndMoveZonePreview>` | — |
| `now` | 否 | `number` | — |
| `random` | 否 | `()=>number` | — |
| `rollLog` | 否 | `RollLog` | — |

## combineDndZoneJobs

导出接口 · 源码第 58 行。

Creatures hit by one creation or relocation share one damage roll.

```ts
export function combineDndZoneJobs(jobs: DndMagicJob[]): DndMagicJob[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `jobs` | 否 | `DndMagicJob[]` | — |
