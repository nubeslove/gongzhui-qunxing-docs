# game/packages/tabletop-runtime/src/story/compendiumWorldImport.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {compendiumMediaObjectBytes,compendiumEntryImportPlan,type CompendiumKind,COMPENDIUM_LIMITS,canonicalJson,compendiumImportPlan,compendiumImportTargets,parseCompendiumImportBatch,parseCompendiumImportOptions,storyDirectory,storyId,type CompendiumBody,type CompendiumImportBatch,type CompendiumImportOptions,type CompendiumImportPlan,type CompendiumImportPreview,type CompendiumIndex,type CompendiumPack,type StoryWorkspace} from '@aelzerant/contracts';
```
</details>

## CompendiumWorldImportRequest

导出接口 · 源码第 2 行。

```ts
export type CompendiumWorldImportRequest = {
    op: 'worldPreview';
    id: string;
    revision: number;
    options: CompendiumImportOptions;
} | {
    op: 'worldImport';
    id: string;
    revision: number;
    leaseId: string;
    confirmOverwrites: boolean;
} | {
    op: 'worldEntry';
    id: string;
    revision: number;
    worldId: string;
    kind: CompendiumKind;
    entryId: string;
    folderId: string | null;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.op` | 否 | `'worldPreview'` | 见结构定义及所属功能文档 |
| `分支1.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支1.options` | 否 | `CompendiumImportOptions` | 见结构定义及所属功能文档 |
| `分支2.op` | 否 | `'worldImport'` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.leaseId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.confirmOverwrites` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支3.op` | 否 | `'worldEntry'` | 见结构定义及所属功能文档 |
| `分支3.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.worldId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.kind` | 否 | `CompendiumKind` | 见结构定义及所属功能文档 |
| `分支3.entryId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.folderId` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |

## World

内部依赖类型 · 源码第 3 行。

```ts
interface World {
    worldId: string;
    revision: number;
    story: StoryWorkspace;
    actors: {
        id: string;
        name: string;
    }[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `worldId` | 否 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `story` | 否 | `StoryWorkspace` | 见结构定义及所属功能文档 |
| `actors` | 否 | `{id:string;name:string}[]` | 见结构定义及所属功能文档 |
| `actors.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `actors.[].name` | 否 | `string` | 见结构定义及所属功能文档 |

## Context

内部依赖类型 · 源码第 4 行。

```ts
interface Context {
    current: (sender: string, pack: CompendiumPack) => World;
    load: (sender: string, pack: CompendiumPack, id: string) => Promise<CompendiumBody>;
    validate: (sender: string, batch: CompendiumImportBatch) => void;
    commit: (sender: string, batch: CompendiumImportBatch) => Promise<void>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `current` | 否 | `(sender:string,pack:CompendiumPack)=>World` | 见结构定义及所属功能文档 |
| `load` | 否 | `(sender:string,pack:CompendiumPack,id:string)=>Promise<CompendiumBody>` | 见结构定义及所属功能文档 |
| `validate` | 否 | `(sender:string,batch:CompendiumImportBatch)=>void` | 见结构定义及所属功能文档 |
| `commit` | 否 | `(sender:string,batch:CompendiumImportBatch)=>Promise<void>` | 见结构定义及所属功能文档 |

## Lease

内部依赖类型 · 源码第 5 行。

```ts
type Lease = {
    sender: string;
    expiresAt: number;
    plan: CompendiumImportPlan;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `sender` | 否 | `string` | 见结构定义及所属功能文档 |
| `expiresAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `plan` | 否 | `CompendiumImportPlan` | 见结构定义及所属功能文档 |

## CompendiumWorldImport

导出接口 · 源码第 7 行。

No large mutable payload is cached in a lease, and a failed save remains retryable.

```ts
export class CompendiumWorldImport {
  constructor(context: Context, now?: ()=>number);
  preview(sender: string, pack: CompendiumPack, index: CompendiumIndex, raw: unknown): Promise<CompendiumImportPreview>;
  entry(sender: string, pack: CompendiumPack, index: CompendiumIndex, request: Extract<CompendiumWorldImportRequest, { op: "worldEntry"; }>): Promise<string>;
  commit(sender: string, pack: CompendiumPack, index: CompendiumIndex, leaseId: string, confirmOverwrites: boolean): Promise<void>;
}
```
