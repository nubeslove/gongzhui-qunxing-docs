# game/packages/game-core/src/dnd/detect-magic.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {sceneObserverSees,dndObserver,blindsightRange,dndCanSeeActor,dndTokenPerception,dndMagicBarrierBlocks,manualSightFeatures,sceneRayBlocked,emptySceneFeatures,dndAntimagicAt,dndMagicSuppression,DND_MAGIC_SCHOOLS,type DndMagicDetection,type DndMagicSchool,type ManualTable,type ManualActor,type ScenePoint,type DndActiveEffect,walledTemplateAffects} from '@aelzerant/contracts';
import {dndEntry,dndIncapacitated,dndMagicAuraEffect,DND_AURA_SCHOOLS} from '@aelzerant/rules-engine';
import {dndDistance} from './index';
import {dndAreaWalls} from './areas';
import {dndActorMagicBlock} from './magic-fields';
```
</details>

## syncDndMagicDetection

导出接口 · 源码第 80 行。

Derived only on authority state, then projected exclusively to this character's controllers.

```ts
export function syncDndMagicDetection(table: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |

## studyDndMagic

导出接口 · 源码第 89 行。

```ts
export function studyDndMagic(table: ManualTable, actor: ManualActor, now: number, spend: ()=>void): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actor` | 否 | `ManualActor` | — |
| `now` | 否 | `number` | — |
| `spend` | 否 | `()=>void` | — |
