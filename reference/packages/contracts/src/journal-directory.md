# game/packages/contracts/src/journal-directory.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseDocumentDirectory,type DocumentDirectory} from './document-directory';
```
</details>

## JournalDirectoryCommand

导出接口 · 源码第 2 行。

```ts
export type JournalDirectoryCommand = {
    type: 'journal.directory';
    directory: DocumentDirectory;
    expectedRevision: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 否 | `'journal.directory'` | 见结构定义及所属功能文档 |
| `directory` | 否 | `DocumentDirectory` | 见结构定义及所属功能文档 |
| `expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |

## parseJournalDirectory

导出接口 · 源码第 3 行。

```ts
export const parseJournalDirectory: (raw: unknown, entryIds?: ReadonlySet<string>): DocumentDirectory;
```

## projectJournalDirectory

导出接口 · 源码第 5 行。

Players receive only paths that contain records present in their own directory.

```ts
export function projectJournalDirectory(directory: DocumentDirectory|undefined, visible: ReadonlySet<string>): DocumentDirectory|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `directory` | 否 | `DocumentDirectory&#124;undefined` | — |
| `visible` | 否 | `ReadonlySet<string>` | — |
