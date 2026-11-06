# game/packages/game-core/src/dnd/combat-economy.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualActor,ManualTable} from '@aelzerant/contracts';
import {dndClassLevel} from '@aelzerant/rules-engine';
```
</details>

## spendDndAttack

导出接口 · 源码第 5 行。

Returns whether this strike used a pre-paid bonus attack instead of the Attack action.

```ts
export function spendDndAttack(table: ManualTable, a: ManualActor, attackId: string, spend: ()=>void): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `attackId` | 否 | `string` | — |
| `spend` | 否 | `()=>void` | — |
