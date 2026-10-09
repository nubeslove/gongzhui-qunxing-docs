# game/packages/contracts/src/document-reference.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {decodeJournalEntities,isJournalHtml,escapeJournalHtml} from './journal-format';
import {journalProseMask} from './journal-actions';
```
</details>

## WorldDocumentKind

导出接口 · 源码第 6 行。

```ts
export type WorldDocumentKind = keyof typeof WORLD_DOCUMENT_TYPES;
```

## WorldDocumentReference

导出接口 · 源码第 7 行。

```ts
export interface WorldDocumentReference {
    kind: WorldDocumentKind;
    target: string;
    pageId?: string;
    anchor?: string;
    itemId?: string;
    definitionId?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `WorldDocumentKind` | 见结构定义及所属功能文档 |
| `target` | 否 | `string` | 见结构定义及所属功能文档 |
| `pageId` | 是 | `string` | 见结构定义及所属功能文档 |
| `anchor` | 是 | `string` | 见结构定义及所属功能文档 |
| `itemId` | 是 | `string` | 见结构定义及所属功能文档 |
| `definitionId` | 是 | `string` | 见结构定义及所属功能文档 |

## WorldDocumentRow

导出接口 · 源码第 8 行。

```ts
export interface WorldDocumentRow {
    kind: WorldDocumentKind;
    id: string;
    name: string;
    pageIds?: readonly string[];
    items?: readonly {
        id: string;
        name: string;
        definitions: readonly {
            id: string;
            name: string;
        }[];
    }[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `WorldDocumentKind` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `pageIds` | 是 | `readonly string[]` | 见结构定义及所属功能文档 |
| `items` | 是 | `readonly {id:string;name:string;definitions:readonly {id:string;name:string}[]}[]` | 见结构定义及所属功能文档 |

## WORLD_DOCUMENT_DRAG

导出接口 · 源码第 9 行。

```ts
export const WORLD_DOCUMENT_DRAG = 'application/x-aaf-document';
```

## documentHref

导出接口 · 源码第 11 行。

```ts
export function documentHref(ref: WorldDocumentReference): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `ref` | 否 | `WorldDocumentReference` | — |

## parseDocumentHref

导出接口 · 源码第 12 行。

```ts
export function parseDocumentHref(value: string): WorldDocumentReference|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `string` | — |

## parseDocumentUuid

导出接口 · 源码第 20 行。

```ts
export function parseDocumentUuid(value: string): WorldDocumentReference|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `string` | — |

## DocumentLinkSpan

导出接口 · 源码第 25 行。

```ts
export interface DocumentLinkSpan {
    start: number;
    end: number;
    label: string;
    ref: WorldDocumentReference | null;
    source: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `start` | 否 | `number` | 见结构定义及所属功能文档 |
| `end` | 否 | `number` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `ref` | 否 | `WorldDocumentReference&#124;null` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |

## documentLinkSpans

导出接口 · 源码第 26 行。

```ts
export function documentLinkSpans(text: string): DocumentLinkSpan[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |

## resolveDocumentReference

导出接口 · 源码第 34 行。

Resolve only a caller-supplied authorized index. Duplicate names never silently choose a target.

```ts
export function resolveDocumentReference(rows: readonly WorldDocumentRow[], ref: WorldDocumentReference): WorldDocumentRow|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `rows` | 否 | `readonly WorldDocumentRow[]` | — |
| `ref` | 否 | `WorldDocumentReference` | — |

## documentLinkMarkdown

导出接口 · 源码第 37 行。

```ts
export function documentLinkMarkdown(text: string, rows: readonly WorldDocumentRow[]): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |
| `rows` | 否 | `readonly WorldDocumentRow[]` | — |

## documentReferences

导出接口 · 源码第 40 行。

```ts
export function documentReferences(text: string): WorldDocumentReference[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |

## remapDocumentReferences

导出接口 · 源码第 42 行。

Only registered links change; prose and unsupported UUIDs remain verbatim.

```ts
export function remapDocumentReferences(text: string, map: (ref:WorldDocumentReference)=>WorldDocumentReference): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |
| `map` | 否 | `(ref:WorldDocumentReference)=>WorldDocumentReference` | — |
