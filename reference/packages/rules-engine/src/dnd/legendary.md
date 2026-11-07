# game/packages/rules-engine/src/dnd/legendary.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndCharacter} from '@aelzerant/contracts';
import {DND_CATALOG,dndEntry} from './index';
```
</details>

## DndLegendaryOption

导出接口 · 源码第 4 行。

```ts
export interface DndLegendaryOption {
    id: string;
    name: string;
    text: string;
    cost: number;
    once: boolean;
    attack?: string;
    move?: boolean;
    spell?: string;
    slot?: number;
    noComponents?: boolean;
    noMaterials?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `cost` | 否 | `number` | 见结构定义及所属功能文档 |
| `once` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `attack` | 是 | `string` | 见结构定义及所属功能文档 |
| `move` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `spell` | 是 | `string` | 见结构定义及所属功能文档 |
| `slot` | 是 | `number` | 见结构定义及所属功能文档 |
| `noComponents` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `noMaterials` | 是 | `boolean` | 见结构定义及所属功能文档 |

## dndLegendaryOptions

导出接口 · 源码第 10 行。

Preserve every option as a reference; automate only complete, recognized clauses.

```ts
export function dndLegendaryOptions(c: DndCharacter): DndLegendaryOption[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndLegendaryLimit

导出接口 · 源码第 28 行。

```ts
export function dndLegendaryLimit(c: DndCharacter): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## syncDndLegendary

导出接口 · 源码第 32 行。

```ts
export function syncDndLegendary(c: DndCharacter): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
