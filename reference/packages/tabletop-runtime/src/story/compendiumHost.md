# game/packages/tabletop-runtime/src/story/compendiumHost.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {VisibleCompendiumImporter} from './compendiumImportTypes';
import {CompendiumWorldImport,type CompendiumWorldImportRequest} from './compendiumWorldImport';
import type {CompendiumImportBatch,CompendiumImportPreview} from '@aelzerant/contracts';
import {rebaseCompendiumBody} from '@aelzerant/contracts';
import {directoryTablePlan,storyDirectory,type CompendiumFolderPreview,type CompendiumFolderOptions} from '@aelzerant/contracts';
import {CompendiumFolderBatch,type CompendiumFolderRequest} from './compendiumFolderBatch';
import {compendiumFileDocument,exportResourceFile,exportJournalFile,parseCompendiumDocument,projectCompendiumDocument,canonicalJson,captureCompendiumBody,compendiumAccess,emptyCompendiumIndex,parseCompendiumBody,parseCompendiumIndex,parseCompendiumPack,parseDocumentDirectory,placeInDocumentDirectory,storyGm,storyId,storyObject,storyText,projectCompendiumCatalog,type CompendiumPlacement,type CompendiumBody,type CompendiumCatalogCommand,type CompendiumIndex,type CompendiumPack,type DocumentAccess,type DocumentDirectory,type GameSystemId,type ActorFile,type CompendiumDocument,type CompendiumKind,type StoryWorkspace} from '@aelzerant/contracts';
import {COMPENDIUM_LIMITS} from '@aelzerant/contracts';
import {exportCardStackFile} from '@aelzerant/contracts';
import {compendiumHash,parseCompendiumMediaChunk,projectCompendiumMedia,type CompendiumMediaChunk} from '@aelzerant/contracts';
import {captureCompendiumMedia,readCompendiumBodyMedia,type CompendiumMediaSource} from './compendiumMedia';
import {compendiumObjectHash,readCompendiumObject,writeCompendiumObject,type CompendiumObjects} from './compendiumObjects';
```
</details>

## CompendiumRequest

导出接口 · 源码第 13 行。

```ts
export type CompendiumRequest = CompendiumWorldImportRequest | CompendiumFolderRequest | {
    op: 'worldVisible';
    id: string;
    revision: number;
    worldId: string;
    entryId: string;
} | {
    op: 'index';
    id: string;
    revision: number;
} | {
    op: 'body';
    id: string;
    revision: number;
    entryId: string;
} | {
    op: 'media';
    id: string;
    revision: number;
    entryId: string;
    path: string;
    part: number;
} | {
    op: 'stageMedia';
    id: string;
    revision: number;
    hash: string;
    chunk: CompendiumMediaChunk;
} | {
    op: 'create';
    name: string;
    kind: CompendiumKind;
    placement?: CompendiumPlacement;
} | {
    op: 'configure';
    id: string;
    revision: number;
    name: string;
    locked: boolean;
    access: DocumentAccess;
} | {
    op: 'delete' | 'duplicate';
    id: string;
    revision: number;
} | {
    op: 'addWorld';
    id: string;
    revision: number;
    documentId: string;
    folderId: string | null;
} | {
    op: 'put';
    id: string;
    revision: number;
    document: CompendiumDocument;
    folderId: string | null;
} | {
    op: 'remove';
    id: string;
    revision: number;
    entryId: string;
} | {
    op: 'stage';
    id: string;
    revision: number;
    body: CompendiumBody;
} | {
    op: 'replaceIndex';
    id: string;
    revision: number;
    index: CompendiumIndex;
} | {
    op: 'directory';
    id: string;
    revision: number;
    directory: DocumentDirectory;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支3.op` | 否 | `'worldVisible'` | 见结构定义及所属功能文档 |
| `分支3.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.worldId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.entryId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.op` | 否 | `'index'` | 见结构定义及所属功能文档 |
| `分支4.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支5.op` | 否 | `'body'` | 见结构定义及所属功能文档 |
| `分支5.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支5.entryId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.op` | 否 | `'media'` | 见结构定义及所属功能文档 |
| `分支6.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支6.entryId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.path` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.part` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支7.op` | 否 | `'stageMedia'` | 见结构定义及所属功能文档 |
| `分支7.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支7.hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.chunk` | 否 | `CompendiumMediaChunk` | 见结构定义及所属功能文档 |
| `分支8.op` | 否 | `'create'` | 见结构定义及所属功能文档 |
| `分支8.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.kind` | 否 | `CompendiumKind` | 见结构定义及所属功能文档 |
| `分支8.placement` | 是 | `CompendiumPlacement` | 见结构定义及所属功能文档 |
| `分支9.op` | 否 | `'configure'` | 见结构定义及所属功能文档 |
| `分支9.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支9.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.locked` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支9.access` | 否 | `DocumentAccess` | 见结构定义及所属功能文档 |
| `分支10.op` | 否 | `'delete'&#124;'duplicate'` | 见结构定义及所属功能文档 |
| `分支10.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支10.revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支11.op` | 否 | `'addWorld'` | 见结构定义及所属功能文档 |
| `分支11.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支11.revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支11.documentId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支11.folderId` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `分支12.op` | 否 | `'put'` | 见结构定义及所属功能文档 |
| `分支12.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支12.revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支12.document` | 否 | `CompendiumDocument` | 见结构定义及所属功能文档 |
| `分支12.folderId` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `分支13.op` | 否 | `'remove'` | 见结构定义及所属功能文档 |
| `分支13.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支13.revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支13.entryId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支14.op` | 否 | `'stage'` | 见结构定义及所属功能文档 |
| `分支14.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支14.revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支14.body` | 否 | `CompendiumBody` | 见结构定义及所属功能文档 |
| `分支15.op` | 否 | `'replaceIndex'` | 见结构定义及所属功能文档 |
| `分支15.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支15.revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支15.index` | 否 | `CompendiumIndex` | 见结构定义及所属功能文档 |
| `分支16.op` | 否 | `'directory'` | 见结构定义及所属功能文档 |
| `分支16.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支16.revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支16.directory` | 否 | `DocumentDirectory` | 见结构定义及所属功能文档 |

## CompendiumResult

导出接口 · 源码第 28 行。

```ts
export type CompendiumResult = {
    importedId?: string;
    pack: CompendiumPack;
    index?: CompendiumIndex;
    body?: CompendiumBody;
    chunk?: CompendiumMediaChunk;
    folderPreview?: CompendiumFolderPreview;
    importPreview?: CompendiumImportPreview;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `importedId` | 是 | `string` | 见结构定义及所属功能文档 |
| `pack` | 否 | `CompendiumPack` | 见结构定义及所属功能文档 |
| `index` | 是 | `CompendiumIndex` | 见结构定义及所属功能文档 |
| `body` | 是 | `CompendiumBody` | 见结构定义及所属功能文档 |
| `chunk` | 是 | `CompendiumMediaChunk` | 见结构定义及所属功能文档 |
| `folderPreview` | 是 | `CompendiumFolderPreview` | 见结构定义及所属功能文档 |
| `importPreview` | 是 | `CompendiumImportPreview` | 见结构定义及所属功能文档 |

## CompendiumCall

导出接口 · 源码第 29 行。

```ts
export type CompendiumCall = (request: CompendiumRequest) => Promise<CompendiumResult>;
```

## CompendiumWorld

导出接口 · 源码第 30 行。

```ts
export interface CompendiumWorld {
    revision?: number;
    story: StoryWorkspace;
    ownerId: string;
    worldId: string;
    systemId: GameSystemId;
    members: ReadonlySet<string>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `revision` | 是 | `number` | 见结构定义及所属功能文档 |
| `story` | 否 | `StoryWorkspace` | 见结构定义及所属功能文档 |
| `ownerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `worldId` | 否 | `string` | 见结构定义及所属功能文档 |
| `systemId` | 否 | `GameSystemId` | 见结构定义及所属功能文档 |
| `members` | 否 | `ReadonlySet<string>` | 见结构定义及所属功能文档 |

## CompendiumHostContext

导出接口 · 源码第 31 行。

```ts
export interface CompendiumHostContext {
    importVisible?: VisibleCompendiumImporter;
    mediaSource?: () => CompendiumMediaSource;
    prepareImportMedia?: (batch: CompendiumImportBatch, files: Map<string, Blob>) => Promise<void>;
    validateImport?: (sender: string, batch: CompendiumImportBatch) => void;
    importBatch?: (sender: string, batch: CompendiumImportBatch) => Promise<void>;
    get: () => CompendiumWorld;
    commit: (command: CompendiumCatalogCommand) => Promise<boolean>;
    listActors?: () => {
        id: string;
        name: string;
    }[];
    captureActor?: (id: string) => ActorFile;
    validateActor?: (file: ActorFile) => void;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `importVisible` | 是 | `VisibleCompendiumImporter` | 见结构定义及所属功能文档 |
| `mediaSource` | 是 | `()=>CompendiumMediaSource` | 见结构定义及所属功能文档 |
| `prepareImportMedia` | 是 | `(batch:CompendiumImportBatch,files:Map<string,Blob>)=>Promise<void>` | 见结构定义及所属功能文档 |
| `validateImport` | 是 | `(sender:string,batch:CompendiumImportBatch)=>void` | 见结构定义及所属功能文档 |
| `importBatch` | 是 | `(sender:string,batch:CompendiumImportBatch)=>Promise<void>` | 见结构定义及所属功能文档 |
| `get` | 否 | `()=>CompendiumWorld` | 见结构定义及所属功能文档 |
| `commit` | 否 | `(command:CompendiumCatalogCommand)=>Promise<boolean>` | 见结构定义及所属功能文档 |
| `listActors` | 是 | `()=>{id:string;name:string}[]` | 见结构定义及所属功能文档 |
| `captureActor` | 是 | `(id:string)=>ActorFile` | 见结构定义及所属功能文档 |
| `validateActor` | 是 | `(file:ActorFile)=>void` | 见结构定义及所属功能文档 |

## CompendiumHost

导出接口 · 源码第 33 行。

One authority queue for writes; reads never revise the world or preload unrelated documents.

```ts
export class CompendiumHost {
  constructor(context: CompendiumHostContext, objects: CompendiumObjects);
  request(sender: string, raw: unknown): Promise<CompendiumResult>;
}
```
