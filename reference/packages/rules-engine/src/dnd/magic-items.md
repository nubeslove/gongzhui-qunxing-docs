# game/packages/rules-engine/src/dnd/magic-items.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndCharacter,DndInventoryItem} from '@aelzerant/contracts';
import {dndEntry} from './index';
import {dndPactPool} from './multiclass';
import type {DndFeatureAction} from './class-features';
```
</details>

## DndMagicItemRule

导出接口 · 源码第 5 行。

```ts
export interface DndMagicItemRule {
    attunement?: 'any' | 'spellcaster';
    wear?: 'cloak' | 'ring' | 'boots' | 'hand';
    ac?: number;
    save?: number;
    stealth?: boolean;
    charges?: number;
    recharge?: string;
    pearl?: boolean;
    spell?: string;
    maxCast?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `attunement` | 是 | `'any'&#124;'spellcaster'` | 见结构定义及所属功能文档 |
| `wear` | 是 | `'cloak'&#124;'ring'&#124;'boots'&#124;'hand'` | 见结构定义及所属功能文档 |
| `ac` | 是 | `number` | 见结构定义及所属功能文档 |
| `save` | 是 | `number` | 见结构定义及所属功能文档 |
| `stealth` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `charges` | 是 | `number` | 见结构定义及所属功能文档 |
| `recharge` | 是 | `string` | 见结构定义及所属功能文档 |
| `pearl` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `spell` | 是 | `string` | 见结构定义及所属功能文档 |
| `maxCast` | 是 | `number` | 见结构定义及所属功能文档 |

## dndMagicItemRule

导出接口 · 源码第 14 行。

```ts
export const dndMagicItemRule: (i: DndInventoryItem): DndMagicItemRule;
```

## dndMagicItemActive

导出接口 · 源码第 15 行。

```ts
export const dndMagicItemActive: (c: DndCharacter, i: DndInventoryItem): boolean;
```

## dndActiveMagicItems

导出接口 · 源码第 16 行。

```ts
export function dndActiveMagicItems(c: DndCharacter): DndInventoryItem[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndMagicItemBonus

导出接口 · 源码第 17 行。

```ts
export function dndMagicItemBonus(c: DndCharacter, kind: 'ac'|'save'): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `kind` | 否 | `'ac'&#124;'save'` | — |

## dndMagicItemStealth

导出接口 · 源码第 18 行。

```ts
export const dndMagicItemStealth: (c: DndCharacter): boolean;
```

## dndHeldMagicItems

导出接口 · 源码第 19 行。

```ts
export const dndHeldMagicItems: (c: DndCharacter): number;
```

## dndItemSpell

导出接口 · 源码第 20 行。

```ts
export function dndItemSpell(c: DndCharacter, itemId: string, spell: string, slot: number, paid?: boolean): { item: DndInventoryItem; rule: DndMagicItemRule; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `itemId` | 否 | `string` | — |
| `spell` | 否 | `string` | — |
| `slot` | 否 | `number` | — |
| `paid` | 是 | `boolean` | false |

## dndAttunementProblem

导出接口 · 源码第 25 行。

```ts
export function dndAttunementProblem(c: DndCharacter, i: DndInventoryItem): "" | "同调物品必须单独登记一件" | "这件物品需要能以职业、物种或特性施法" | "最多同调三件物品，请先结束一件的同调" | "不能同时同调同一种物品的多个副本";
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `i` | 否 | `DndInventoryItem` | — |

## dndMagicItemActions

导出接口 · 源码第 30 行。

```ts
export function dndMagicItemActions(c: DndCharacter): DndFeatureAction[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
