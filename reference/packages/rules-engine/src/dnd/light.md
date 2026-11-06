# game/packages/rules-engine/src/dnd/light.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndCharacter} from '@aelzerant/contracts';
import {dndEntry} from './index';
```
</details>

## dndLightItems

导出接口 · 源码第 5 行。

A carried light belongs to one actual inventory item, never to the creature's body.

```ts
export function dndLightItems(c: DndCharacter, litOnly?: boolean): import("@source/packages/contracts/src/dnd").DndInventoryItem[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `litOnly` | 是 | `boolean` | false |
