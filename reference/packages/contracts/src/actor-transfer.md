# game/packages/contracts/src/actor-transfer.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {OwnedItemCopyMap} from './owned-item';
import {emptyStory,parseStory,storyObject,storyId,storyText,type StoryWorkspace,type StoryResource,type StoryCounter} from './story';
import {GAME_SYSTEMS,isGameSystemId,type GameSystemId} from './systems';
import {exportResourceFile} from './resource-transfer';
import {remapDocumentReferences,resolveDocumentReference,type WorldDocumentRow} from './document-reference';
import {journalActionSpans,remapJournalTables} from './journal-actions';
import {parseJournalHref,journalHref} from './journal-reference';
```
</details>

## ACTOR_FILE_MAX_BYTES

导出接口 · 源码第 8 行。

```ts
export const ACTOR_FILE_MAX_BYTES = 1900000;
```

## ActorFile

导出接口 · 源码第 9 行。

```ts
export interface ActorFile {
    format: 'aaf-actor';
    version: 1;
    systemId: GameSystemId;
    systemVersion: string;
    actor: Record<string, unknown>;
    resources: StoryResource[];
    grants: string[];
    counters: Omit<StoryCounter, 'actorId'>[];
    catalog: unknown[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `format` | 否 | `'aaf-actor'` | 见结构定义及所属功能文档 |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `systemId` | 否 | `GameSystemId` | 见结构定义及所属功能文档 |
| `systemVersion` | 否 | `string` | 见结构定义及所属功能文档 |
| `actor` | 否 | `Record<string,unknown>` | 见结构定义及所属功能文档 |
| `resources` | 否 | `StoryResource[]` | 见结构定义及所属功能文档 |
| `grants` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `counters` | 否 | `Omit<StoryCounter,'actorId'>[]` | 见结构定义及所属功能文档 |
| `catalog` | 否 | `unknown[]` | 见结构定义及所属功能文档 |

## ActorTransferCommand

导出接口 · 源码第 10 行。

```ts
export type ActorTransferCommand = {
    kind: 'actor.copy';
    sourceId: string;
    expected: ActorFile;
    id: string;
    name: string;
    folderId?: string | null;
} | {
    kind: 'actor.import';
    file: ActorFile;
    id: string;
    name: string;
    targetId?: string;
    expected?: ActorFile;
    folderId?: string | null;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.kind` | 否 | `'actor.copy'` | 见结构定义及所属功能文档 |
| `分支1.sourceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.expected` | 否 | `ActorFile` | 见结构定义及所属功能文档 |
| `分支1.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.folderId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'actor.import'` | 见结构定义及所属功能文档 |
| `分支2.file` | 否 | `ActorFile` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.targetId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支2.expected` | 是 | `ActorFile` | 见结构定义及所属功能文档 |
| `分支2.folderId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |

## parseActorFile

导出接口 · 源码第 12 行。

```ts
export function parseActorFile(raw: unknown): ActorFile;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## actorFile

导出接口 · 源码第 18 行。

Caller supplies an already authorized actor and story projection.

```ts
export function actorFile(systemId: GameSystemId, actor: Record<string,unknown>, story: StoryWorkspace|undefined, catalog?: unknown[]): ActorFile;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `systemId` | 否 | `GameSystemId` | — |
| `actor` | 否 | `Record<string,unknown>` | — |
| `story` | 否 | `StoryWorkspace&#124;undefined` | — |
| `catalog` | 是 | `unknown[]` | [] |

## actorFileName

导出接口 · 源码第 22 行。

```ts
export function actorFileName(file: ActorFile): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `file` | 否 | `ActorFile` | — |

## transferActorResources

导出接口 · 源码第 23 行。

```ts
export function transferActorResources(file: ActorFile, id: string, sameWorld: boolean, embedded?: ReadonlyMap<string,OwnedItemCopyMap>, options?: {ids?:ReadonlyMap<string,string>;rewrite?:(text:string)=>string}): {story:StoryWorkspace;rewrite:(text:string)=>string};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `file` | 否 | `ActorFile` | — |
| `id` | 否 | `string` | — |
| `sameWorld` | 否 | `boolean` | — |
| `embedded` | 是 | `ReadonlyMap<string,OwnedItemCopyMap>` | new Map() |
| `options` | 是 | `{ids?:ReadonlyMap<string,string>;rewrite?:(text:string)=>string}` | {} |

## mergeActorResources

导出接口 · 源码第 28 行。

```ts
export function mergeActorResources(target: StoryWorkspace|undefined, source: StoryWorkspace, id: string, deduplicate?: boolean): StoryWorkspace;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `target` | 否 | `StoryWorkspace&#124;undefined` | — |
| `source` | 否 | `StoryWorkspace` | — |
| `id` | 否 | `string` | — |
| `deduplicate` | 是 | `boolean` | false |

## actorTransferWarnings

导出接口 · 源码第 29 行。

```ts
export const actorTransferWarnings = ['文件保存角色资料、可见的授予资源及其依赖；不包含场景、实时战斗、日记全文和素材文件。', '新角色默认为主持人私密资料。跨世界导入会清除原控制者、场景实例关联、持续施法关联与外部文档链接；旧资源定义会保留。', '跨世界导入不带本地头像、原型或资源图片；请在目标世界重新选择素材。'];
```
