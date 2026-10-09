# game/packages/contracts/src/compendium-import-content.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {resetCardTemplate} from './card-stacks';
import {canonicalJson} from './index';
import {type CompendiumImportBatch,type CompendiumImportRow} from './compendium-import';
import {type CompendiumBody} from './compendium';
import {type ActorFile,transferActorResources} from './actor-transfer';
import {copyActorOwnedItems,type OwnedItem,type OwnedItemCopyMap} from './owned-item';
import {remapDocumentReferences,type WorldDocumentKind,type WorldDocumentReference} from './document-reference';
import {journalActionSpans,remapJournalTables} from './journal-actions';
import {parseJournalHref,journalHref} from './journal-reference';
import {transferJournalEntry} from './journal-transfer';
import {mapArchiveStrings} from './scene-archive-content';
import {emptyStory,parseResource,parseStory,type StoryWorkspace,type StoryResource} from './story';
import {parseLibraryDocument,emptyWorldLibrary} from './world-library';
import {isLibraryCompendiumKind,isCardStackCompendiumDocument} from './compendium-documents';
import {copyCardStackFile} from './card-stack-file';
import {localizeCompendiumReferences} from './compendium-reference';
```
</details>

## PreparedCompendiumActor

导出接口 · 源码第 18 行。

```ts
export interface PreparedCompendiumActor {
    owned: ReturnType<typeof copyActorOwnedItems>;
    refs: ReturnType<typeof transferActorResources>;
    sameWorld: boolean;
    keepIds: boolean;
    mediaAttached?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `owned` | 否 | `ReturnType<typeof copyActorOwnedItems>` | 见结构定义及所属功能文档 |
| `refs` | 否 | `ReturnType<typeof transferActorResources>` | 见结构定义及所属功能文档 |
| `sameWorld` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `keepIds` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `mediaAttached` | 是 | `boolean` | 见结构定义及所属功能文档 |

## CompendiumActorImport

导出接口 · 源码第 19 行。

```ts
export interface CompendiumActorImport {
    row: CompendiumImportRow;
    file: ActorFile;
    prepared: PreparedCompendiumActor;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `row` | 否 | `CompendiumImportRow` | 见结构定义及所属功能文档 |
| `file` | 否 | `ActorFile` | 见结构定义及所属功能文档 |
| `prepared` | 否 | `PreparedCompendiumActor` | 见结构定义及所属功能文档 |

## Mapping

内部依赖类型 · 源码第 20 行。

```ts
type Mapping = {
    kind: WorldDocumentKind;
    source: string;
    name: string;
    target: string;
    world: string;
    pages?: ReadonlyMap<string, string>;
    owned?: ReadonlyMap<string, OwnedItemCopyMap>;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `WorldDocumentKind` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `target` | 否 | `string` | 见结构定义及所属功能文档 |
| `world` | 否 | `string` | 见结构定义及所属功能文档 |
| `pages` | 是 | `ReadonlyMap<string,string>` | 见结构定义及所属功能文档 |
| `owned` | 是 | `ReadonlyMap<string,OwnedItemCopyMap>` | 见结构定义及所属功能文档 |

## prepareCompendiumContent

导出接口 · 源码第 23 行。

Build the entire graph before changing any target document. Only registered references are rewritten.

```ts
export function prepareCompendiumContent(batch: CompendiumImportBatch, original: StoryWorkspace|undefined, ownerId: string): {story:StoryWorkspace;actors:CompendiumActorImport[]};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `batch` | 否 | `CompendiumImportBatch` | — |
| `original` | 否 | `StoryWorkspace&#124;undefined` | — |
| `ownerId` | 否 | `string` | — |
