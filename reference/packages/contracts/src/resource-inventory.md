# game/packages/contracts/src/resource-inventory.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## ResourceInventoryStatus

导出接口 · 源码第 1 行。

```ts
export interface ResourceInventoryStatus {
    running: boolean;
    completed: number;
    total: number;
    checkedAt: number;
    error: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `running` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `completed` | 否 | `number` | 见结构定义及所属功能文档 |
| `total` | 否 | `number` | 见结构定义及所属功能文档 |
| `checkedAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `error` | 否 | `string` | 见结构定义及所属功能文档 |

## ResourceInventoryRow

导出接口 · 源码第 2 行。

```ts
export interface ResourceInventoryRow {
    worldId: string;
    revision: number;
    checkedAt: number;
    files: number;
    bytes: number;
    referenced: number;
    retained: number;
    uploads: number;
    problems: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `worldId` | 否 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `checkedAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `files` | 否 | `number` | 见结构定义及所属功能文档 |
| `bytes` | 否 | `number` | 见结构定义及所属功能文档 |
| `referenced` | 否 | `number` | 见结构定义及所属功能文档 |
| `retained` | 否 | `number` | 见结构定义及所属功能文档 |
| `uploads` | 否 | `number` | 见结构定义及所属功能文档 |
| `problems` | 否 | `number` | 见结构定义及所属功能文档 |

## ResourceInventorySummary

导出接口 · 源码第 3 行。

```ts
export interface ResourceInventorySummary {
    worlds: number;
    files: number;
    bytes: number;
    uniqueFiles: number;
    uniqueBytes: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `worlds` | 否 | `number` | 见结构定义及所属功能文档 |
| `files` | 否 | `number` | 见结构定义及所属功能文档 |
| `bytes` | 否 | `number` | 见结构定义及所属功能文档 |
| `uniqueFiles` | 否 | `number` | 见结构定义及所属功能文档 |
| `uniqueBytes` | 否 | `number` | 见结构定义及所属功能文档 |

## ResourceInventoryReport

导出接口 · 源码第 4 行。

```ts
export interface ResourceInventoryReport {
    status: ResourceInventoryStatus;
    summary: ResourceInventorySummary;
    worlds: Array<ResourceInventoryRow & {
        name: string;
    }>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `status` | 否 | `ResourceInventoryStatus` | 见结构定义及所属功能文档 |
| `summary` | 否 | `ResourceInventorySummary` | 见结构定义及所属功能文档 |
| `worlds` | 否 | `Array<ResourceInventoryRow&{name:string}>` | 见结构定义及所属功能文档 |

## ResourceInventoryDetail

导出接口 · 源码第 5 行。

```ts
export interface ResourceInventoryDetail {
    worldId: string;
    revision: number;
    checkedAt: number;
    total: number;
    problems: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `worldId` | 否 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `checkedAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `total` | 否 | `number` | 见结构定义及所属功能文档 |
| `problems` | 否 | `string[]` | 见结构定义及所属功能文档 |

## OfficialResourceInventory

导出接口 · 源码第 7 行。

Local deployed official files only; pack archives and old rollback versions are outside this snapshot.

```ts
export interface OfficialResourceInventory {
    version?: string;
    checkedAt: number;
    files: number;
    bytes: number;
    verifiedFiles: number;
    verifiedBytes: number;
    remoteFiles?: number;
    packs: Array<{
        id: string;
        files: number;
        bytes: number;
        verifiedFiles: number;
        verifiedBytes: number;
        issues: number;
        remoteFiles?: number;
    }>;
    issueCount: number;
    issues: string[];
    error?: string;
    failedAt?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 是 | `string` | 见结构定义及所属功能文档 |
| `checkedAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `files` | 否 | `number` | 见结构定义及所属功能文档 |
| `bytes` | 否 | `number` | 见结构定义及所属功能文档 |
| `verifiedFiles` | 否 | `number` | 见结构定义及所属功能文档 |
| `verifiedBytes` | 否 | `number` | 见结构定义及所属功能文档 |
| `remoteFiles` | 是 | `number` | 见结构定义及所属功能文档 |
| `packs` | 否 | `Array<{id:string;files:number;bytes:number;verifiedFiles:number;verifiedBytes:number;issues:number;remoteFiles?:number}>` | 见结构定义及所属功能文档 |
| `issueCount` | 否 | `number` | 见结构定义及所属功能文档 |
| `issues` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `error` | 是 | `string` | 见结构定义及所属功能文档 |
| `failedAt` | 是 | `number` | 见结构定义及所属功能文档 |

## OfficialResourceReport

导出接口 · 源码第 12 行。

```ts
export interface OfficialResourceReport {
    configured: boolean;
    status: {
        running: boolean;
        phase: 'idle' | 'queued' | 'checking';
        completed: number;
        total: number;
        error: string;
    };
    inventory?: OfficialResourceInventory;
    totalPacks: number;
    storedIssues: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `configured` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `status` | 否 | `{running:boolean;phase:'idle'&#124;'queued'&#124;'checking';completed:number;total:number;error:string}` | 见结构定义及所属功能文档 |
| `status.running` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `status.phase` | 否 | `'idle'&#124;'queued'&#124;'checking'` | 见结构定义及所属功能文档 |
| `status.completed` | 否 | `number` | 见结构定义及所属功能文档 |
| `status.total` | 否 | `number` | 见结构定义及所属功能文档 |
| `status.error` | 否 | `string` | 见结构定义及所属功能文档 |
| `inventory` | 是 | `OfficialResourceInventory` | 见结构定义及所属功能文档 |
| `totalPacks` | 否 | `number` | 见结构定义及所属功能文档 |
| `storedIssues` | 否 | `number` | 见结构定义及所属功能文档 |
