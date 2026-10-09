# game/packages/game-core/src/dnd/scene-spells.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptySceneFeatures,walledTemplateAffects,dndMagicSuppression,templateVisiblePolygons,templateContains,type ManualTable,type ManualActor,type SceneRegion,type DndSceneSpell,type MovementPoint} from '@aelzerant/contracts';
import {dndEntry,DND_SPELL_EXECUTORS} from '@aelzerant/rules-engine';
import {dndActorMagicBlock} from './magic-fields';
import {dndAreaWalls} from './areas';
import {dndRayBlocked,tokenCenter} from './geometry';
```
</details>

## dndMagicRegion

导出接口 · 源码第 7 行。

```ts
export function dndMagicRegion(table: ManualTable, id: string): SceneRegion | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `id` | 否 | `string` | — |

## dndRegionAffects

导出接口 · 源码第 8 行。

```ts
export function dndRegionAffects(table: ManualTable, r: SceneRegion, actorId: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `r` | 否 | `SceneRegion` | — |
| `actorId` | 否 | `string` | — |

## dndEffectTargetProblem

导出接口 · 源码第 18 行。

```ts
export function dndEffectTargetProblem(table: ManualTable, regionId: string, targetId: string): "" | "此效果已结束" | "请选择生物" | "此效果不能复活死者" | "目标位于阻挡此法术的魔法区域中" | "目标不在30尺灵光内，或被障碍阻隔";
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `regionId` | 否 | `string` | — |
| `targetId` | 否 | `string` | — |

## dndMagicPreview

导出接口 · 源码第 27 行。

```ts
export function dndMagicPreview(table: ManualTable, regionId: string): { template: import("@source/packages/contracts/src/scene-template").SceneTemplate; visiblePolygons: { x: number; y: number; }[][]; label: string; } | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `regionId` | 否 | `string` | — |

## dndMagicAt

导出接口 · 源码第 29 行。

Only effects at the clicked position; the client receives already projected regions.

```ts
export function dndMagicAt(table: ManualTable, p: MovementPoint): SceneRegion[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `p` | 否 | `MovementPoint` | — |

## dndDispelRegionProblem

导出接口 · 源码第 30 行。

```ts
export function dndDispelRegionProblem(table: ManualTable, actorId: string, regionId: string, slot?: number): "" | "请选择地图上的魔法效果" | "魔法效果超出120尺施法距离" | "魔法效果被全身掩护阻隔" | "魔法屏障阻挡了本环阶的解除魔法";
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actorId` | 否 | `string` | — |
| `regionId` | 否 | `string` | — |
| `slot` | 是 | `number` | 3 |

## createDndSceneSpell

导出接口 · 源码第 43 行。

```ts
export function createDndSceneSpell(table: ManualTable, a: ManualActor, magic: DndSceneSpell, template: NonNullable<SceneRegion['template']>): SceneRegion;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `magic` | 否 | `DndSceneSpell` | — |
| `template` | 否 | `NonNullable<SceneRegion['template']>` | — |

## removeDndSceneSpell

导出接口 · 源码第 55 行。

All owned visuals disappear atomically. Unrelated scenery is never removed.

```ts
export function removeDndSceneSpell(table: ManualTable, id: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `id` | 否 | `string` | — |

## followDndSceneSpell

导出接口 · 源码第 60 行。

```ts
export function followDndSceneSpell(table: ManualTable, r: SceneRegion): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `r` | 否 | `SceneRegion` | — |
