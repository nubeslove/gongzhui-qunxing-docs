# game/packages/contracts/src/journal-format.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## JOURNAL_HTML_PREFIX

导出接口 · 源码第 2 行。

The discriminator is inside the existing bounded text field; legacy Markdown is unchanged.

```ts
export const JOURNAL_HTML_PREFIX = '<!-- aaf:html -->\n';
```

## isJournalHtml

导出接口 · 源码第 3 行。

```ts
export const isJournalHtml: (text: string): boolean;
```

## escapeJournalHtml

导出接口 · 源码第 4 行。

```ts
export const escapeJournalHtml: (text: string): string;
```

## decodeJournalEntities

导出接口 · 源码第 5 行。

```ts
export function decodeJournalEntities(text: string): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |

## journalPlainText

导出接口 · 源码第 9 行。

```ts
export function journalPlainText(text: string): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |
