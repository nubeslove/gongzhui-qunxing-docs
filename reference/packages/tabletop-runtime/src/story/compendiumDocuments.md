# game/packages/tabletop-runtime/src/story/compendiumDocuments.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorFile,actorFileName,blankResource,compendiumFileDocument,emptyStory,exportResourceFile,isLibraryCompendiumKind,newLibraryDocument,parseJournalFile,parseResourceFile,remapDocumentReferences,parseJournalHref,journalHref,journalActionSpans,remapJournalTables,mapArchiveStrings,type CompendiumBody,type CompendiumDocument,type CompendiumKind,type GameSystemId,type StoryWorkspace} from '@aelzerant/contracts';
import type {StoryCommand} from '@aelzerant/session/core';
import {blankActorProfile} from '../world/actorProfile';
import {blankActor} from '../tabletop/model';
import type {ActorTransferAdapter} from './actorTransferTypes';
import {compendiumWorldCopy} from './compendiumFiles';
import {isCardStackCompendiumDocument,type FileCompendiumDocument} from '@aelzerant/contracts';
```
</details>

## newCompendiumDocument

导出接口 · 源码第 9 行。

```ts
export function newCompendiumDocument(kind: CompendiumKind, system: GameSystemId): Exclude<CompendiumDocument,FileCompendiumDocument<'cards'>>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `kind` | 否 | `CompendiumKind` | — |
| `system` | 否 | `GameSystemId` | — |

## compendiumWorldSources

导出接口 · 源码第 16 行。

```ts
export function compendiumWorldSources(kind: CompendiumKind, story: StoryWorkspace, actors: {id:string;name:string;tokenInstance?:boolean}[]): { id: string; name: string; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `kind` | 否 | `CompendiumKind` | — |
| `story` | 否 | `StoryWorkspace` | — |
| `actors` | 否 | `{id:string;name:string;tokenInstance?:boolean}[]` | — |

## foreignJournalFile

导出接口 · 源码第 23 行。

Foreign world addresses must not accidentally bind to equal IDs/names in this world.

```ts
export function foreignJournalFile(body: Extract<CompendiumDocument,{kind:'journal'}>['file']): import("@source/packages/contracts/src/journal-transfer").JournalFile;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `body` | 否 | `Extract<CompendiumDocument,{kind:'journal'}>['file']` | — |

## importCompendiumDocument

导出接口 · 源码第 31 行。

```ts
export function importCompendiumDocument(body: CompendiumBody, system: GameSystemId, worldId: string, dispatch: (command:StoryCommand)=>Promise<boolean>, actor?: ActorTransferAdapter, folderId?: string|null): Promise<string>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `body` | 否 | `CompendiumBody` | — |
| `system` | 否 | `GameSystemId` | — |
| `worldId` | 否 | `string` | — |
| `dispatch` | 否 | `(command:StoryCommand)=>Promise<boolean>` | — |
| `actor` | 是 | `ActorTransferAdapter` | — |
| `folderId` | 是 | `string&#124;null` | — |

## resourceCompendiumClosure

导出接口 · 源码第 41 行。

```ts
export function resourceCompendiumClosure(file: Extract<CompendiumDocument,{kind:'resource'}>['file']): import("@source/packages/contracts/src/resource-transfer").ResourceFile;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `file` | 否 | `Extract<CompendiumDocument,{kind:'resource'}>['file']` | — |
