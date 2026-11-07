# game/packages/game-core/src/dnd/monster-hits.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndAttack,ManualActor,ManualTable} from '@aelzerant/contracts';
import {dndConditionImmune,dndEntry,dndFeatureExpiry} from '@aelzerant/rules-engine';
import {addDndFeatureEffect} from './class-features';
import {dndContextTest} from './rolls';
import {dndEffectRollModifiers} from './effects';
```
</details>

## applyDndMonsterHit

导出接口 · 源码第 8 行。

A hit rider retains its own source and turn deadline through saving and reactions.

```ts
export function applyDndMonsterHit(table: ManualTable, source: ManualActor, target: ManualActor, hit: DndAttack['onHit'], ctx: {now:number;random:()=>number;id:()=>string;rollLog:(a:ManualActor,label:string,r:ReturnType<typeof dndContextTest>)=>void}): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `source` | 否 | `ManualActor` | — |
| `target` | 否 | `ManualActor` | — |
| `hit` | 否 | `DndAttack['onHit']` | — |
| `ctx` | 否 | `{now:number;random:()=>number;id:()=>string;rollLog:(a:ManualActor,label:string,r:ReturnType<typeof dndContextTest>)=>void}` | — |
