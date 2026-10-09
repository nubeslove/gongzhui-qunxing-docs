# game/packages/contracts/src/compendium-directory.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseDocumentDirectory,type DocumentDirectory} from './document-directory';
import {projectJournalDirectory} from './journal-directory';
```
</details>

## CompendiumDirectoryCommand

导出接口 · 源码第 4 行。

```ts
export type CompendiumDirectoryCommand = {
    type: 'compendium.directory';
    directory: DocumentDirectory;
    expectedRevision: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 否 | `'compendium.directory'` | 见结构定义及所属功能文档 |
| `directory` | 否 | `DocumentDirectory` | 见结构定义及所属功能文档 |
| `expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |

## CompendiumPlacement

导出接口 · 源码第 5 行。

```ts
export interface CompendiumPlacement {
    folderId: string | null;
    expectedRevision: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `folderId` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |

## parseCompendiumDirectory

导出接口 · 源码第 6 行。

```ts
export const parseCompendiumDirectory: (raw: unknown, ids: ReadonlySet<string>): DocumentDirectory;
```

## projectCompendiumDirectory

导出接口 · 源码第 7 行。

```ts
export const projectCompendiumDirectory: (directory: DocumentDirectory | undefined, ids: ReadonlySet<string>): DocumentDirectory | undefined;
```
