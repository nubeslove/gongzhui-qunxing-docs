# game/packages/game-core/src/dnd/periodic-spells.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndConditionImmune,dndActiveSpellProfiles,dndSpellEffectRule} from '@aelzerant/rules-engine';
import {dndActorMagicBlock} from './magic-fields';
import type {ManualTable,ManualActor,DndMagicJob} from '@aelzerant/contracts';
import {dndEntry,dndIncapacitated,dndTest} from '@aelzerant/rules-engine';
import {dndRegionAffects} from './scene-spells';
import {dndEffectActive,dndEffectApplies,cleanDndEffects,dndEffectRollModifiers,endDndEffectTurn} from './effects';
```
</details>

## dndGreaseSave

导出接口 · 源码第 8 行。

```ts
export function dndGreaseSave(table: ManualTable, a: ManualActor, r: import('@aelzerant/contracts').SceneRegion, random: ()=>number, rollLog: (a:ManualActor,label:string,r:ReturnType<typeof dndTest>)=>void): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `r` | 否 | `import('@aelzerant/contracts').SceneRegion` | — |
| `random` | 否 | `()=>number` | — |
| `rollLog` | 否 | `(a:ManualActor,label:string,r:ReturnType<typeof dndTest>)=>void` | — |

## dndTurnSpellJobs

导出接口 · 源码第 14 行。

```ts
export function dndTurnSpellJobs(table: ManualTable, a: ManualActor, now: number, random: ()=>number, id: ()=>string, rollLog: (a:ManualActor,label:string,r:ReturnType<typeof dndTest>)=>void): DndMagicJob[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `now` | 否 | `number` | — |
| `random` | 否 | `()=>number` | — |
| `id` | 否 | `()=>string` | — |
| `rollLog` | 否 | `(a:ManualActor,label:string,r:ReturnType<typeof dndTest>)=>void` | — |

## dndRepeatSpellSaves

导出接口 · 源码第 28 行。

```ts
export function dndRepeatSpellSaves(table: ManualTable, a: ManualActor, random: ()=>number, rollLog: (a:ManualActor,label:string,r:ReturnType<typeof dndTest>)=>void): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `random` | 否 | `()=>number` | — |
| `rollLog` | 否 | `(a:ManualActor,label:string,r:ReturnType<typeof dndTest>)=>void` | — |
