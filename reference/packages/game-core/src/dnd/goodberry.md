# game/packages/game-core/src/dnd/goodberry.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndCastCommand,DndIntent,ManualActor,ManualTable} from '@aelzerant/contracts';
import {dndEntry,dndIncapacitated} from '@aelzerant/rules-engine';
import {dndActorMagicBlock,dndCastOrigin} from './magic-fields';
import {dndCover} from './geometry';
import {tokenDistance} from './movement';
```
</details>

## createDndGoodberries

导出接口 · 源码第 7 行。

```ts
export function createDndGoodberries(table: ManualTable, a: ManualActor, intent: DndCastCommand, now: number, id: ()=>string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `intent` | 否 | `DndCastCommand` | — |
| `now` | 否 | `number` | — |
| `id` | 否 | `()=>string` | — |

## useDndGoodberry

导出接口 · 源码第 11 行。

```ts
export function useDndGoodberry(table: ManualTable, a: ManualActor, intent: Extract<DndIntent,{type:'goodberry'}>, ctx: {now:number;id:()=>string;spend:(kind:'action'|'bonus')=>void;heal:(amount:number)=>void;log:(text:string,...actors:ManualActor[])=>void}): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `intent` | 否 | `Extract<DndIntent,{type:'goodberry'}>` | — |
| `ctx` | 否 | `{now:number;id:()=>string;spend:(kind:'action'&#124;'bonus')=>void;heal:(amount:number)=>void;log:(text:string,...actors:ManualActor[])=>void}` | — |
