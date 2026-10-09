# game/packages/contracts/src/owned-item.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {journalActionSpans,remapJournalTables} from './journal-actions';
import {emptyStory,blankResource,parseResource,storyObject,storyId,storyText,storyList,type StoryResource,type StoryWorkspace,RESOURCE_KINDS,type ResourceKind} from './story';
import {parseResourceFile,exportResourceFile,transferResourceFile,type ResourceFile} from './resource-transfer';
import type {GameSystemId} from './systems';
import {remapDocumentReferences,resolveDocumentReference,documentHref,parseDocumentHref,type WorldDocumentRow} from './document-reference';
```
</details>

## OwnedItem

导出接口 · 源码第 8 行。

Embedded IDs belong to this actor, never to the world resource directory.

```ts
export interface OwnedItem {
    id: string;
    rootId: string;
    quantity: number;
    resources: StoryResource[];
    source?: {
        id: string;
        name: string;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `rootId` | 否 | `string` | 见结构定义及所属功能文档 |
| `quantity` | 否 | `number` | 见结构定义及所属功能文档 |
| `resources` | 否 | `StoryResource[]` | 见结构定义及所属功能文档 |
| `source` | 是 | `{id:string;name:string}` | 见结构定义及所属功能文档 |
| `source.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `source.name` | 否 | `string` | 见结构定义及所属功能文档 |

## OwnedItemActor

导出接口 · 源码第 9 行。

```ts
export interface OwnedItemActor {
    ownedItems?: OwnedItem[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `ownedItems` | 是 | `OwnedItem[]` | 见结构定义及所属功能文档 |

## OwnedItemCommand

导出接口 · 源码第 10 行。

```ts
export type OwnedItemCommand = {
    kind: 'actor.owned';
    actorId: string;
} & ({
    op: 'attach';
    id: string;
    resourceId: string;
    beforeSource: ResourceFile;
} | {
    op: 'import';
    id: string;
    file: ResourceFile;
} | {
    op: 'create';
    id: string;
    name: string;
    resourceKind: ResourceKind;
} | {
    op: 'save';
    id: string;
    before: OwnedItem;
    item: OwnedItem;
} | {
    op: 'remove';
    id: string;
    before: OwnedItem;
} | {
    op: 'copy';
    id: string;
    sourceId: string;
    before: OwnedItem;
});
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'actor.owned'` | 见结构定义及所属功能文档 |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.op` | 否 | `'attach'` | 见结构定义及所属功能文档 |
| `分支1.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.resourceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.beforeSource` | 否 | `ResourceFile` | 见结构定义及所属功能文档 |
| `分支2.op` | 否 | `'import'` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.file` | 否 | `ResourceFile` | 见结构定义及所属功能文档 |
| `分支3.op` | 否 | `'create'` | 见结构定义及所属功能文档 |
| `分支3.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.resourceKind` | 否 | `ResourceKind` | 见结构定义及所属功能文档 |
| `分支4.op` | 否 | `'save'` | 见结构定义及所属功能文档 |
| `分支4.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.before` | 否 | `OwnedItem` | 见结构定义及所属功能文档 |
| `分支4.item` | 否 | `OwnedItem` | 见结构定义及所属功能文档 |
| `分支5.op` | 否 | `'remove'` | 见结构定义及所属功能文档 |
| `分支5.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.before` | 否 | `OwnedItem` | 见结构定义及所属功能文档 |
| `分支6.op` | 否 | `'copy'` | 见结构定义及所属功能文档 |
| `分支6.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.sourceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.before` | 否 | `OwnedItem` | 见结构定义及所属功能文档 |

## parseOwnedItem

导出接口 · 源码第 17 行。

```ts
export function parseOwnedItem(raw: unknown, systemId?: GameSystemId): OwnedItem;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `systemId` | 是 | `GameSystemId` | — |

## parseOwnedItems

导出接口 · 源码第 25 行。

```ts
export function parseOwnedItems(raw: unknown, systemId?: GameSystemId): OwnedItem[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `systemId` | 是 | `GameSystemId` | — |

## ownedItemRoot

导出接口 · 源码第 26 行。

```ts
export const ownedItemRoot: (item: OwnedItem): StoryResource;
```

## ownedItemFile

导出接口 · 源码第 27 行。

```ts
export function ownedItemFile(item: OwnedItem): ResourceFile;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `item` | 否 | `OwnedItem` | — |

## ownedItemFromResource

导出接口 · 源码第 28 行。

```ts
export function ownedItemFromResource(story: StoryWorkspace, id: string, resourceId: string, gm: boolean, playerId?: string): OwnedItem;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `id` | 否 | `string` | — |
| `resourceId` | 否 | `string` | — |
| `gm` | 否 | `boolean` | — |
| `playerId` | 是 | `string` | — |

## blankOwnedItem

导出接口 · 源码第 32 行。

```ts
export function blankOwnedItem(systemId: GameSystemId, id: string, name: string, kind: ResourceKind): OwnedItem;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `systemId` | 否 | `GameSystemId` | — |
| `id` | 否 | `string` | — |
| `name` | 否 | `string` | — |
| `kind` | 否 | `ResourceKind` | — |

## copyOwnedItem

导出接口 · 源码第 33 行。

```ts
export function copyOwnedItem(item: OwnedItem, id: string, sameWorld?: boolean, onMap?: (ids:ReadonlyMap<string,string>)=>void): OwnedItem;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `item` | 否 | `OwnedItem` | — |
| `id` | 否 | `string` | — |
| `sameWorld` | 是 | `boolean` | true |
| `onMap` | 是 | `(ids:ReadonlyMap<string,string>)=>void` | — |

## migrateOwnedItems

导出接口 · 源码第 35 行。

Keep local graph IDs when copying actor/instance pairs so sparse inheritance stays aligned.

```ts
export function migrateOwnedItems(items: OwnedItem[]|undefined, rewrite: (text:string)=>string, clearSource: boolean, clearImages?: boolean): OwnedItem[]|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | 否 | `OwnedItem[]&#124;undefined` | — |
| `rewrite` | 否 | `(text:string)=>string` | — |
| `clearSource` | 否 | `boolean` | — |
| `clearImages` | 是 | `boolean` | false |

## ownedItemWorkspace

导出接口 · 源码第 38 行。

```ts
export function ownedItemWorkspace(item: OwnedItem): StoryWorkspace;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `item` | 否 | `OwnedItem` | — |

## removeOwnedDefinition

导出接口 · 源码第 39 行。

```ts
export function removeOwnedDefinition(item: OwnedItem, id: string): OwnedItem;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `item` | 否 | `OwnedItem` | — |
| `id` | 否 | `string` | — |

## OwnedItemCopyMap

导出接口 · 源码第 45 行。

```ts
export interface OwnedItemCopyMap {
    itemId: string;
    definitions: ReadonlyMap<string, string>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `itemId` | 否 | `string` | 见结构定义及所属功能文档 |
| `definitions` | 否 | `ReadonlyMap<string,string>` | 见结构定义及所属功能文档 |

## copyActorOwnedItems

导出接口 · 源码第 46 行。

```ts
export function copyActorOwnedItems(items: OwnedItem[]|undefined, keepIds?: boolean): {items:OwnedItem[]|undefined;mapping:ReadonlyMap<string,OwnedItemCopyMap>};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | 否 | `OwnedItem[]&#124;undefined` | — |
| `keepIds` | 是 | `boolean` | false |

## copyOwnedItemForActor

导出接口 · 源码第 51 行。

```ts
export function copyOwnedItemForActor(item: OwnedItem, id: string, actorId: string): OwnedItem;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `item` | 否 | `OwnedItem` | — |
| `id` | 否 | `string` | — |
| `actorId` | 否 | `string` | — |
