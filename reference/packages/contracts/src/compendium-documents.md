# game/packages/contracts/src/compendium-documents.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorFileName,parseActorFile,type ActorFile} from './actor-transfer';
import {parseResourceFile,type ResourceFile} from './resource-transfer';
import {parseJournalFile,type JournalFile} from './journal-transfer';
import {projectJournalEntry} from './story-journal';
import {LIBRARY_KINDS,parseLibraryDocument,type LibraryDocument,type LibraryKind} from './world-library';
import {storyId,storyObject,storyText} from './story';
import type {GameSystemId} from './systems';
import {parseCardStackFile,type CardStackFile} from './card-stack-file';
```
</details>

## CompendiumKind

导出接口 · 源码第 11 行。

```ts
export type CompendiumKind = keyof typeof COMPENDIUM_KINDS;
```

## FileTypes

内部依赖类型 · 源码第 12 行。

```ts
type FileTypes = {
    actor: ActorFile;
    resource: ResourceFile;
    journal: JournalFile;
    cards: CardStackFile;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `actor` | 否 | `ActorFile` | 见结构定义及所属功能文档 |
| `resource` | 否 | `ResourceFile` | 见结构定义及所属功能文档 |
| `journal` | 否 | `JournalFile` | 见结构定义及所属功能文档 |
| `cards` | 否 | `CardStackFile` | 见结构定义及所属功能文档 |

## FileCompendiumDocument

导出接口 · 源码第 13 行。

```ts
export type FileCompendiumDocument<K extends keyof FileTypes = keyof FileTypes> = {
    [P in K]: {
        kind: P;
        id: string;
        name: string;
        description: string;
        file: FileTypes[P];
    };
}[K];
```

## CompendiumDocument

导出接口 · 源码第 16 行。

```ts
export type CompendiumDocument = LibraryDocument | FileCompendiumDocument;
```

## isLibraryCompendiumDocument

导出接口 · 源码第 17 行。

```ts
export function isLibraryCompendiumDocument(doc: CompendiumDocument): doc is LibraryDocument;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `doc` | 否 | `CompendiumDocument` | — |

## isCardStackCompendiumDocument

导出接口 · 源码第 18 行。

```ts
export function isCardStackCompendiumDocument(doc: CompendiumDocument): doc is FileCompendiumDocument<'cards'>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `doc` | 否 | `CompendiumDocument` | — |

## isLibraryCompendiumKind

导出接口 · 源码第 19 行。

```ts
export function isLibraryCompendiumKind(kind: CompendiumKind): kind is LibraryKind;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `kind` | 否 | `CompendiumKind` | — |

## FileCodecs

内部依赖类型 · 源码第 22 行。

One codec per portable document type. Entry identity is independent of file identity.

```ts
type FileCodecs = {
    [K in keyof FileTypes]: {
        parse: (raw: unknown) => FileTypes[K];
        name: (file: FileTypes[K]) => string;
        description: (file: FileTypes[K]) => string;
    };
};
```

## compendiumFileDocument

导出接口 · 源码第 33 行。

```ts
export function compendiumFileDocument<K extends keyof FileTypes>(kind: K, id: string, file: FileTypes[K]): FileCompendiumDocument<K>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `kind` | 否 | `K` | — |
| `id` | 否 | `string` | — |
| `file` | 否 | `FileTypes[K]` | — |

## parseCompendiumDocument

导出接口 · 源码第 34 行。

```ts
export function parseCompendiumDocument(raw: unknown): CompendiumDocument;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## assertCompendiumDocumentSystem

导出接口 · 源码第 42 行。

```ts
export function assertCompendiumDocumentSystem(doc: CompendiumDocument, system: GameSystemId): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `doc` | 否 | `CompendiumDocument` | — |
| `system` | 否 | `GameSystemId` | — |

## captureFileCompendiumDocument

导出接口 · 源码第 44 行。

Clear source-world ownership, but retain private journal pages and secrets as private.

```ts
export function captureFileCompendiumDocument(doc: FileCompendiumDocument): FileCompendiumDocument;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `doc` | 否 | `FileCompendiumDocument` | — |

## projectCompendiumDocument

导出接口 · 源码第 60 行。

```ts
export function projectCompendiumDocument(doc: CompendiumDocument, owner: boolean, gm: boolean): CompendiumDocument;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `doc` | 否 | `CompendiumDocument` | — |
| `owner` | 否 | `boolean` | — |
| `gm` | 否 | `boolean` | — |
