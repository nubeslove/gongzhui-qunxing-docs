# game/packages/rules-engine/src/dnd/catalog-types.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

## DndEntryKind

导出接口 · 源码第 1 行。

```ts
export type DndEntryKind = 'spell' | 'class' | 'subclass' | 'feature' | 'species' | 'background' | 'feat' | 'weapon' | 'armor' | 'gear' | 'magic-item' | 'monster' | 'rule';
```

## DndSource

导出接口 · 源码第 2 行。

```ts
export interface DndSource {
    book: string;
    page: string;
    path: string;
    anchor?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `book` | 否 | `string` | 见结构定义及所属功能文档 |
| `page` | 否 | `string` | 见结构定义及所属功能文档 |
| `path` | 否 | `string` | 见结构定义及所属功能文档 |
| `anchor` | 是 | `string` | 见结构定义及所属功能文档 |

## DndEntry

导出接口 · 源码第 3 行。

```ts
export interface DndEntry {
    id: string;
    kind: DndEntryKind;
    name: string;
    english: string;
    text: string;
    source: DndSource;
    parent?: string;
    level?: number;
    facts: Record<string, string>;
    rows?: string[][];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | Whole-page rule entries resolve source.book/source.page on demand; text is empty for them. |
| `kind` | 否 | `DndEntryKind` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `english` | 否 | `string` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 否 | `DndSource` | 见结构定义及所属功能文档 |
| `parent` | 是 | `string` | 见结构定义及所属功能文档 |
| `level` | 是 | `number` | 见结构定义及所属功能文档 |
| `facts` | 否 | `Record<string, string>` | 见结构定义及所属功能文档 |
| `rows` | 是 | `string[][]` | 见结构定义及所属功能文档 |

## DndCatalog

导出接口 · 源码第 10 行。

```ts
export interface DndCatalog {
    version: 1;
    edition: '2024';
    books: {
        id: string;
        title: string;
        pages: number;
        sha256: string;
    }[];
    entries: DndEntry[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `edition` | 否 | `'2024'` | 见结构定义及所属功能文档 |
| `books` | 否 | `{ id: string; title: string; pages: number; sha256: string }[]` | 见结构定义及所属功能文档 |
| `books.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `books.[].title` | 否 | `string` | 见结构定义及所属功能文档 |
| `books.[].pages` | 否 | `number` | 见结构定义及所属功能文档 |
| `books.[].sha256` | 否 | `string` | 见结构定义及所属功能文档 |
| `entries` | 否 | `DndEntry[]` | 见结构定义及所属功能文档 |
