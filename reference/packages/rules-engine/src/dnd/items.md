# game/packages/rules-engine/src/dnd/items.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndInventoryItem} from '@aelzerant/contracts';
import {dndEntry} from './index';
```
</details>

## dndHealingPotion

导出接口 · 源码第 5 行。

PHB drinking/administering uses a Bonus Action; DMG specifies the four healing formulas.

```ts
export function dndHealingPotion(item: DndInventoryItem): { formula: string; name: string; } | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `item` | 否 | `DndInventoryItem` | — |
