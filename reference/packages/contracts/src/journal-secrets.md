# game/packages/contracts/src/journal-secrets.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {JournalReference} from './journal-reference';
import {storyObject,storyId,storyList,storyText} from './story';
```
</details>

## JournalSecretCommand

导出接口 · 源码第 3 行。

```ts
export type JournalSecretCommand = {
    type: 'journal.secret';
    reference: JournalReference;
    secretId: string;
    before: boolean;
    revealed: boolean;
    expectedRevision: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 否 | `'journal.secret'` | 见结构定义及所属功能文档 |
| `reference` | 否 | `JournalReference` | 见结构定义及所属功能文档 |
| `secretId` | 否 | `string` | 见结构定义及所属功能文档 |
| `before` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `revealed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |

## JournalSecret

导出接口 · 源码第 4 行。

```ts
export interface JournalSecret {
    id: string;
    text: string;
    revealed: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `revealed` | 否 | `boolean` | 见结构定义及所属功能文档 |

## parseJournalSecrets

导出接口 · 源码第 5 行。

```ts
export function parseJournalSecrets(raw: unknown): JournalSecret[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## visibleJournalSecrets

导出接口 · 源码第 10 行。

```ts
export const visibleJournalSecrets: (rows: JournalSecret[] | undefined, owner?: boolean): { id: string; text: string; revealed: boolean; }[] | undefined;
```

## journalSecretMarker

导出接口 · 源码第 11 行。

```ts
export const journalSecretMarker: (id: string): string;
```

## journalPublicText

导出接口 · 源码第 13 行。

Used for plain excerpts; never expands hidden content from an authority copy.

```ts
export function journalPublicText(text: string, secrets?: readonly JournalSecret[]): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |
| `secrets` | 是 | `readonly JournalSecret[]` | [] |
