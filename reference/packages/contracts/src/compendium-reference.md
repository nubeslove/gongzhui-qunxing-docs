# game/packages/contracts/src/compendium-reference.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {documentHref as worldHref} from './document-reference';
import {journalProseMask} from './journal-actions';
import {decodeJournalEntities,escapeJournalHtml,isJournalHtml} from './journal-format';
```
</details>

## CompendiumReference

导出接口 · 源码第 5 行。

Pack UUIDs resolve only within the current world's authorized catalog.

```ts
export interface CompendiumReference {
    packId: string;
    entryId: string;
    pageId?: string;
    anchor?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `packId` | 否 | `string` | 见结构定义及所属功能文档 |
| `entryId` | 否 | `string` | 见结构定义及所属功能文档 |
| `pageId` | 是 | `string` | 见结构定义及所属功能文档 |
| `anchor` | 是 | `string` | 见结构定义及所属功能文档 |

## COMPENDIUM_DOCUMENT_DRAG

导出接口 · 源码第 6 行。

```ts
export const COMPENDIUM_DOCUMENT_DRAG = 'application/x-aaf-compendium-document';
```

## compendiumHref

导出接口 · 源码第 8 行。

```ts
export function compendiumHref(ref: CompendiumReference): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `ref` | 否 | `CompendiumReference` | — |

## parseCompendiumHref

导出接口 · 源码第 9 行。

```ts
export function parseCompendiumHref(value: string): CompendiumReference|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `string` | — |

## compendiumUuid

导出接口 · 源码第 16 行。

Our UUID namespace is explicit; Foundry module/world names are never guessed.

```ts
export function compendiumUuid(ref: CompendiumReference): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `ref` | 否 | `CompendiumReference` | — |

## parseCompendiumUuid

导出接口 · 源码第 17 行。

```ts
export function parseCompendiumUuid(value: string): CompendiumReference|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `string` | — |

## Span

内部依赖类型 · 源码第 21 行。

```ts
interface Span {
    start: number;
    end: number;
    ref: CompendiumReference;
    label: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `start` | 否 | `number` | 见结构定义及所属功能文档 |
| `end` | 否 | `number` | 见结构定义及所属功能文档 |
| `ref` | 否 | `CompendiumReference` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |

## compendiumLinkMarkdown

导出接口 · 源码第 26 行。

```ts
export function compendiumLinkMarkdown(text: string): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |

## remapCompendiumReferences

导出接口 · 源码第 30 行。

Migration only rewrites registered addresses; ordinary prose and inert code survive verbatim.

```ts
export function remapCompendiumReferences(text: string, map: (ref:CompendiumReference)=>CompendiumReference): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |
| `map` | 否 | `(ref:CompendiumReference)=>CompendiumReference` | — |

## localizeCompendiumReferences

导出接口 · 源码第 37 行。

Localize only selected entries; other compendium links keep their explicit origin.

```ts
export function localizeCompendiumReferences(text: string, map: (ref:CompendiumReference)=>import('./document-reference').WorldDocumentReference|undefined): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |
| `map` | 否 | `(ref:CompendiumReference)=>import('./document-reference').WorldDocumentReference&#124;undefined` | — |
