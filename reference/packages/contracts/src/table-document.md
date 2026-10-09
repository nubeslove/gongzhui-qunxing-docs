# game/packages/contracts/src/table-document.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {WORLD_DOCUMENT_TYPES,type WorldDocumentReference} from './document-reference';
import {storyObject,storyId,type StoryWorkspace} from './story';
import {resourceAccess} from './resource-access';
import {journalEntryAccess,journalReadable} from './journal-access';
import {documentAccess} from './world-library';
```
</details>

## TableDocumentReference

导出接口 · 源码第 7 行。

Table results currently target whole world documents; embedded targets require their own ACL index.

```ts
export type TableDocumentReference = Pick<WorldDocumentReference, 'kind' | 'target'>;
```

## parseTableDocument

导出接口 · 源码第 8 行。

```ts
export function parseTableDocument(raw: unknown): TableDocumentReference;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## tableDocumentVisible

导出接口 · 源码第 12 行。

```ts
export function tableDocumentVisible(story: StoryWorkspace, ref: TableDocumentReference, playerId: string|undefined, actorIds: ReadonlySet<string>, sceneIds: ReadonlySet<string>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `ref` | 否 | `TableDocumentReference` | — |
| `playerId` | 否 | `string&#124;undefined` | — |
| `actorIds` | 否 | `ReadonlySet<string>` | — |
| `sceneIds` | 否 | `ReadonlySet<string>` | — |
