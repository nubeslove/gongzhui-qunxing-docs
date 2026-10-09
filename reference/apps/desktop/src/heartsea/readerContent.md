# game/apps/desktop/src/heartsea/readerContent.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

## RuleBlock

导出接口 · 源码第 1 行。

```ts
export type RuleBlock = {
    kind: 'paragraph' | 'heading';
    text: string;
} | {
    kind: 'table';
    rows: string[][];
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.kind` | 否 | `'paragraph'&#124;'heading'` | 见结构定义及所属功能文档 |
| `分支1.text` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'table'` | 见结构定义及所属功能文档 |
| `分支2.rows` | 否 | `string[][]` | 见结构定义及所属功能文档 |

## RuleEntry

导出接口 · 源码第 2 行。

```ts
export type RuleEntry = {
    id: string;
    book: 'rules' | 'world';
    group: string;
    section?: string;
    title: string;
    page: number;
    blocks: RuleBlock[];
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `book` | 否 | `'rules'&#124;'world'` | 见结构定义及所属功能文档 |
| `group` | 否 | `string` | 见结构定义及所属功能文档 |
| `section` | 是 | `string` | 见结构定义及所属功能文档 |
| `title` | 否 | `string` | 见结构定义及所属功能文档 |
| `page` | 否 | `number` | 见结构定义及所属功能文档 |
| `blocks` | 否 | `RuleBlock[]` | 见结构定义及所属功能文档 |

## HeartseaLibrary

导出接口 · 源码第 3 行。

```ts
export type HeartseaLibrary = {
    version: string;
    entries: RuleEntry[];
    terms: {
        old: string;
        new: string;
        reason: string;
    }[];
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `string` | 见结构定义及所属功能文档 |
| `entries` | 否 | `RuleEntry[]` | 见结构定义及所属功能文档 |
| `terms` | 否 | `{old:string;new:string;reason:string}[]` | 见结构定义及所属功能文档 |
| `terms.[].old` | 否 | `string` | 见结构定义及所属功能文档 |
| `terms.[].new` | 否 | `string` | 见结构定义及所属功能文档 |
| `terms.[].reason` | 否 | `string` | 见结构定义及所属功能文档 |

## readingParagraphs

导出接口 · 源码第 6 行。

PDF columns may join several paragraphs. Reflow at sentence boundaries only.

```ts
export function readingParagraphs(text: string): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |

## ruleFacts

导出接口 · 源码第 19 行。

```ts
export function ruleFacts(text: string): {title?:string;rows:{label:string;value:string}[]}|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |

## searchRules

导出接口 · 源码第 30 行。

```ts
export function searchRules(entries: RuleEntry[], query: string, terms: HeartseaLibrary['terms']): RuleEntry[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `entries` | 否 | `RuleEntry[]` | — |
| `query` | 否 | `string` | — |
| `terms` | 否 | `HeartseaLibrary['terms']` | — |
