# game/packages/tabletop-runtime/src/story/compendiumFolderBatch.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {COMPENDIUM_LIMITS,canonicalJson,compendiumFolderPlan,parseCompendiumFolderOptions,parseCompendiumIndex,storyId,type CompendiumFolderPreview,type CompendiumBody,type CompendiumFolderOptions,type CompendiumFolderPlan,type CompendiumIndex,type CompendiumPack,type DocumentDirectory} from '@aelzerant/contracts';
import {compendiumObjectHash,writeCompendiumObject,type CompendiumObjects} from './compendiumObjects';
import {compendiumMediaObjectBytes} from '@aelzerant/contracts';
```
</details>

## CompendiumFolderRequest

导出接口 · 源码第 5 行。

```ts
export type CompendiumFolderRequest = {
    op: 'folderPreview';
    id: string;
    revision: number;
    folderId: string;
    options: CompendiumFolderOptions;
} | {
    op: 'folderCommit';
    id: string;
    revision: number;
    leaseId: string;
    confirmOverwrites: boolean;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.op` | 否 | `'folderPreview'` | 见结构定义及所属功能文档 |
| `分支1.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支1.folderId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.options` | 否 | `CompendiumFolderOptions` | 见结构定义及所属功能文档 |
| `分支2.op` | 否 | `'folderCommit'` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.leaseId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.confirmOverwrites` | 否 | `boolean` | 见结构定义及所属功能文档 |

## Source

内部依赖类型 · 源码第 8 行。

```ts
type Source = {
    worldId: string;
    revision: number;
    directory: DocumentDirectory;
    bodies: CompendiumBody[];
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `worldId` | 否 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `directory` | 否 | `DocumentDirectory` | 见结构定义及所属功能文档 |
| `bodies` | 否 | `CompendiumBody[]` | 见结构定义及所属功能文档 |

## Lease

内部依赖类型 · 源码第 9 行。

```ts
type Lease = {
    sender: string;
    worldId: string;
    packId: string;
    revision: number;
    folderId: string;
    options: CompendiumFolderOptions;
    digest: string;
    plan: CompendiumFolderPlan;
    expiresAt: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `sender` | 否 | `string` | 见结构定义及所属功能文档 |
| `worldId` | 否 | `string` | 见结构定义及所属功能文档 |
| `packId` | 否 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `folderId` | 否 | `string` | 见结构定义及所属功能文档 |
| `options` | 否 | `CompendiumFolderOptions` | 见结构定义及所属功能文档 |
| `digest` | 否 | `string` | 见结构定义及所属功能文档 |
| `plan` | 否 | `CompendiumFolderPlan` | 见结构定义及所属功能文档 |
| `expiresAt` | 否 | `number` | 见结构定义及所属功能文档 |

## CompendiumFolderBatch

导出接口 · 源码第 11 行。

Leases retain only a plan and hashes. Bodies are captured again from the authority on commit.

```ts
export class CompendiumFolderBatch {
  constructor(source: (sender:string,pack:CompendiumPack,folder:string,options:CompendiumFolderOptions)=>Source|Promise<Source>, objects: CompendiumObjects, now?: ()=>number);
  preview(sender: string, pack: CompendiumPack, index: CompendiumIndex, request: Extract<CompendiumFolderRequest, { op: "folderPreview"; }>): Promise<CompendiumFolderPreview>;
  prepare(sender: string, pack: CompendiumPack, index: CompendiumIndex, request: Extract<CompendiumFolderRequest, { op: "folderCommit"; }>): Promise<{ index: CompendiumIndex; indexHash: string; expectedWorldRevision: number; }>;
  complete(leaseId: string): void;
}
```
