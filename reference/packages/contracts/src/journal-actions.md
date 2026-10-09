# game/packages/contracts/src/journal-actions.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isJournalHtml,decodeJournalEntities} from './journal-format';
import {inlineRolls,inlineRollSources} from './inline-roll';
import type {RollMode} from './world-conversation';
import type {JournalReference} from './journal-reference';
```
</details>

## JournalActionSpan

导出接口 · 源码第 5 行。

```ts
export type JournalActionSpan = {
    start: number;
    end: number;
    source: string;
} & ({
    kind: 'dice';
    expression: string;
    description: string;
    label?: string;
    mode?: RollMode;
} | {
    kind: 'table';
    tableId: string;
    label: string;
});
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `start` | 否 | `number` | 见结构定义及所属功能文档 |
| `end` | 否 | `number` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.kind` | 否 | `'dice'` | 见结构定义及所属功能文档 |
| `分支1.expression` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.description` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.label` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支1.mode` | 是 | `RollMode` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'table'` | 见结构定义及所属功能文档 |
| `分支2.tableId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.label` | 否 | `string` | 见结构定义及所属功能文档 |

## JournalActionCommand

导出接口 · 源码第 6 行。

```ts
export type JournalActionCommand = {
    type: 'journal.action';
    reference: JournalReference;
    offset: number;
    expected: string;
    secretId?: string;
    actorId?: string;
    mode?: RollMode;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 否 | `'journal.action'` | 见结构定义及所属功能文档 |
| `reference` | 否 | `JournalReference` | 见结构定义及所属功能文档 |
| `offset` | 否 | `number` | 见结构定义及所属功能文档 |
| `expected` | 否 | `string` | 见结构定义及所属功能文档 |
| `secretId` | 是 | `string` | 见结构定义及所属功能文档 |
| `actorId` | 是 | `string` | 见结构定义及所属功能文档 |
| `mode` | 是 | `RollMode` | 见结构定义及所属功能文档 |

## journalProseMask

导出接口 · 源码第 8 行。

Inert parsing. Code, escaped delimiters and malformed expressions remain ordinary prose.

```ts
export function journalProseMask(text: string): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |

## journalActionSpans

导出接口 · 源码第 12 行。

```ts
export function journalActionSpans(text: string): JournalActionSpan[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |

## journalActionMarkdown

导出接口 · 源码第 21 行。

```ts
export function journalActionMarkdown(text: string, spans?: JournalActionSpan[]): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |
| `spans` | 是 | `JournalActionSpan[]` | journalActionSpans(text) |

## remapJournalTables

导出接口 · 源码第 24 行。

```ts
export function remapJournalTables(text: string, ids: ReadonlyMap<string,string>): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |
| `ids` | 否 | `ReadonlyMap<string,string>` | — |
