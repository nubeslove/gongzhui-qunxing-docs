# game/packages/contracts/src/entity-directory.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {DOCUMENT_DIRECTORY_TYPES,emptyDocumentDirectory,parseDocumentDirectory,placeInDocumentDirectory,type DocumentDirectory} from './document-directory';
import {projectJournalDirectory} from './journal-directory';
```
</details>

## EntityDirectoryKind

导出接口 · 源码第 3 行。

```ts
export type EntityDirectoryKind = 'actor' | 'resource';
```

## EntityDirectories

导出接口 · 源码第 4 行。

```ts
export type EntityDirectories = Partial<Record<EntityDirectoryKind, DocumentDirectory>>;
```

## EntityDirectoryCommand

导出接口 · 源码第 5 行。

```ts
export type EntityDirectoryCommand = {
    type: 'entity.directory';
    kind: EntityDirectoryKind;
    directory: DocumentDirectory;
    expectedRevision: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 否 | `'entity.directory'` | 见结构定义及所属功能文档 |
| `kind` | 否 | `EntityDirectoryKind` | 见结构定义及所属功能文档 |
| `directory` | 否 | `DocumentDirectory` | 见结构定义及所属功能文档 |
| `expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |

## parseEntityDirectories

导出接口 · 源码第 6 行。

```ts
export function parseEntityDirectories(raw: unknown, resources: ReadonlySet<string>, actors?: ReadonlySet<string>): EntityDirectories;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `resources` | 否 | `ReadonlySet<string>` | — |
| `actors` | 是 | `ReadonlySet<string>` | — |

## projectEntityDirectories

导出接口 · 源码第 11 行。

```ts
export function projectEntityDirectories(raw: EntityDirectories|undefined, resources: ReadonlySet<string>, actors: ReadonlySet<string>): EntityDirectories|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `EntityDirectories&#124;undefined` | — |
| `resources` | 否 | `ReadonlySet<string>` | — |
| `actors` | 否 | `ReadonlySet<string>` | — |

## placeEntity

导出接口 · 源码第 14 行。

```ts
export function placeEntity(directories: EntityDirectories|undefined, kind: EntityDirectoryKind, id: string, folder: string|null): EntityDirectories;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `directories` | 否 | `EntityDirectories&#124;undefined` | — |
| `kind` | 否 | `EntityDirectoryKind` | — |
| `id` | 否 | `string` | — |
| `folder` | 否 | `string&#124;null` | — |
