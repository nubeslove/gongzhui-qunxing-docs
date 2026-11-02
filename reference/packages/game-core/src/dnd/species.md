# game/packages/game-core/src/dnd/species.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {manualSightFeatures,sceneRayBlocked,type ManualActor,type ManualTable,type DndIntent,type DndMagicJob,type ManualToken} from '@aelzerant/contracts';
import {dndSpecies,dndFeatureEffect,dndFeatureExpiry,dndIncapacitated,dndMod,dndMaxSpeed,dndConditionImmune} from '@aelzerant/rules-engine';
import {addDndFeatureEffect,type FeatureContext} from './class-features';
import {rollDndOwnedDice} from './roll-decisions';
import {dndContextTest} from './rolls';
import {dndEffectRollModifiers} from './effects';
import {dndTeleportProblem,applyDndTeleport} from './teleport';
import {dndTokenOverlapsBlock,tokenDistance} from './movement';
import {dndCover} from './geometry';
import {dndActorMagicBlock} from './magic-fields';
import {addDndSizeChange} from './body-size';
```
</details>

## applyDndSpeciesFeature

导出接口 · 源码第 24 行。

```ts
export function applyDndSpeciesFeature(table: ManualTable, a: ManualActor, intent: Extract<DndIntent,{type:'feature'}>, ctx: FeatureContext): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `intent` | 否 | `Extract<DndIntent,{type:'feature'}>` | — |
| `ctx` | 否 | `FeatureContext` | — |

## cleanDndSpeciesEffects

导出接口 · 源码第 59 行。

```ts
export function cleanDndSpeciesEffects(table: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |

## dndSpeciesEndTurnJobs

导出接口 · 源码第 67 行。

The marker prevents repeated end-turn checks (including a saved pending reaction) from applying the aura twice.

```ts
export function dndSpeciesEndTurnJobs(table: ManualTable, a: ManualActor): DndMagicJob[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
