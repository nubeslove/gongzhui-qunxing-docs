# game/apps/desktop/src/terra/wiki/library.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {DND_CATALOG} from '@aelzerant/rules-engine';
import type {DndEntry} from '@aelzerant/rules-engine';
import source from './terra.generated.json';
```
</details>

## Category

导出接口 · 源码第 5 行。

```ts
export type Category = 'guide' | 'species' | 'background' | 'class' | 'feat' | 'spell' | 'equipment' | 'rules' | 'appendix' | 'bestiary';
```

## Origin

导出接口 · 源码第 6 行。

```ts
export type Origin = 'terra' | '2024';
```

## Entry

导出接口 · 源码第 7 行。

```ts
export interface Entry {
    id: string;
    name: string;
    english: string;
    code: string;
    category: Category;
    kind: string;
    origin: Origin;
    body: string;
    search: string;
    source: string;
    parent?: string;
    level?: number;
    group?: string;
    school?: string;
    classes?: string[];
    concentration?: boolean;
    ritual?: boolean;
    note?: string;
    book?: string;
    page?: string;
    anchor?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `english` | 否 | `string` | 见结构定义及所属功能文档 |
| `code` | 否 | `string` | 见结构定义及所属功能文档 |
| `category` | 否 | `Category` | 见结构定义及所属功能文档 |
| `kind` | 否 | `string` | 见结构定义及所属功能文档 |
| `origin` | 否 | `Origin` | 见结构定义及所属功能文档 |
| `body` | 否 | `string` | 见结构定义及所属功能文档 |
| `search` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |
| `parent` | 是 | `string` | 见结构定义及所属功能文档 |
| `level` | 是 | `number` | 见结构定义及所属功能文档 |
| `group` | 是 | `string` | 见结构定义及所属功能文档 |
| `school` | 是 | `string` | 见结构定义及所属功能文档 |
| `classes` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `concentration` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `ritual` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `note` | 是 | `string` | 见结构定义及所属功能文档 |
| `book` | 是 | `string` | 见结构定义及所属功能文档 |
| `page` | 是 | `string` | 见结构定义及所属功能文档 |
| `anchor` | 是 | `string` | 见结构定义及所属功能文档 |

## RulePage

导出接口 · 源码第 13 行。

```ts
export interface RulePage {
    id: string;
    title: string;
    body: string;
    source: string;
    section: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `title` | 否 | `string` | 见结构定义及所属功能文档 |
| `body` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |
| `section` | 否 | `string` | 见结构定义及所属功能文档 |

## PHB

导出接口 · 源码第 14 行。

```ts
export const PHB = 'dnd-f473a607f72c5a164e';
```

## sourceLabel

导出接口 · 源码第 28 行。

```ts
export const sourceLabel: (origin: Origin): "泰拉私设 0.9.1" | "2024 基础规则";
```

## formatBody

导出接口 · 源码第 38 行。

Presentation repairs only: join broken emphasis, separate flattened bullets, and
turn exported multirow table headers into actual column labels. Values stay intact.

```ts
export function formatBody(raw: string): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `string` | — |

## createLibrary

导出接口 · 源码第 80 行。

```ts
export function createLibrary(pages: RulePage[]): Entry[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `pages` | 否 | `RulePage[]` | — |

## Filters

导出接口 · 源码第 124 行。

```ts
export interface Filters {
    category: Category | 'all';
    origin: Origin | 'all';
    query: string;
    level: string;
    school: string;
    profession: string;
    kind: string;
    group: string;
    concentration: boolean;
    ritual: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `category` | 否 | `Category&#124;'all'` | 见结构定义及所属功能文档 |
| `origin` | 否 | `Origin&#124;'all'` | 见结构定义及所属功能文档 |
| `query` | 否 | `string` | 见结构定义及所属功能文档 |
| `level` | 否 | `string` | 见结构定义及所属功能文档 |
| `school` | 否 | `string` | 见结构定义及所属功能文档 |
| `profession` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `string` | 见结构定义及所属功能文档 |
| `group` | 否 | `string` | 见结构定义及所属功能文档 |
| `concentration` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `ritual` | 否 | `boolean` | 见结构定义及所属功能文档 |

## searchEntries

导出接口 · 源码第 126 行。

```ts
export function searchEntries(entries: Entry[], f: Filters): Entry[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `entries` | 否 | `Entry[]` | — |
| `f` | 否 | `Filters` | — |

## withReferences

导出接口 · 源码第 137 行。

```ts
export function withReferences(body: string, entries: Entry[]): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `body` | 否 | `string` | — |
| `entries` | 否 | `Entry[]` | — |

## relatedEntries

导出接口 · 源码第 152 行。

```ts
export function relatedEntries(entry: Entry, entries: Entry[]): Entry[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `entry` | 否 | `Entry` | — |
| `entries` | 否 | `Entry[]` | — |
