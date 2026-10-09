# game/packages/game-core/src/dnd/rest.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorControlled,actorControllers,storyGm,type DndIntent,type ManualTable} from '@aelzerant/contracts';
```
</details>

## applyDndRest

导出接口 · 源码第 4 行。

World-wide rest is one host transaction; votes never authorize recovery themselves.

```ts
export function applyDndRest(table: ManualTable, intent: DndIntent, context: {senderId:string;now:number;id:()=>string;memberIds?:ReadonlySet<string>;rest:(actor:string,rest:'short'|'long',hitDice?:number[])=>void;log:(message:string)=>void}): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `intent` | 否 | `DndIntent` | — |
| `context` | 否 | `{senderId:string;now:number;id:()=>string;memberIds?:ReadonlySet<string>;rest:(actor:string,rest:'short'&#124;'long',hitDice?:number[])=>void;log:(message:string)=>void}` | — |
