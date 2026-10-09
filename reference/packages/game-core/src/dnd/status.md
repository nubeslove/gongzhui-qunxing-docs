# game/packages/game-core/src/dnd/status.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualTable,ManualActor,DndIntent} from '@aelzerant/contracts';
import {dndSpeed} from '@aelzerant/rules-engine';
```
</details>

## applyDndStatus

导出接口 · 源码第 3 行。

```ts
export function applyDndStatus(table: ManualTable, a: ManualActor, intent: Extract<DndIntent,{type:'status'}>, senderId: string, log: (s:string,a:ManualActor)=>void): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `intent` | 否 | `Extract<DndIntent,{type:'status'}>` | — |
| `senderId` | 否 | `string` | — |
| `log` | 否 | `(s:string,a:ManualActor)=>void` | — |
