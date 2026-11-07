# game/packages/contracts/src/world-deletion.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## WorldDeletionMode

导出接口 · 源码第 2 行。

A durable cloud cleanup receipt. No world content is retained in this record.

```ts
export type WorldDeletionMode = 'unpublish' | 'delete';
```

## WorldDeletionStep

导出接口 · 源码第 3 行。

```ts
export type WorldDeletionStep = 'disconnect' | 'state' | 'files' | 'backups' | 'external';
```

## WorldDeletionJob

导出接口 · 源码第 4 行。

```ts
export interface WorldDeletionJob {
    worldId: string;
    ownerId: string;
    requestedBy: string;
    name?: string;
    systemId?: string;
    reason?: string;
    auditOperationId?: string;
    members?: string[];
    mode: WorldDeletionMode;
    status: 'pending' | 'running' | 'failed' | 'complete';
    step: WorldDeletionStep;
    completed: WorldDeletionStep[];
    createdAt: number;
    updatedAt: number;
    error?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `worldId` | 否 | `string` | 见结构定义及所属功能文档 |
| `ownerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `requestedBy` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 是 | `string` | 见结构定义及所属功能文档 |
| `systemId` | 是 | `string` | 见结构定义及所属功能文档 |
| `reason` | 是 | `string` | 见结构定义及所属功能文档 |
| `auditOperationId` | 是 | `string` | 见结构定义及所属功能文档 |
| `members` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `mode` | 否 | `WorldDeletionMode` | 见结构定义及所属功能文档 |
| `status` | 否 | `'pending' &#124; 'running' &#124; 'failed' &#124; 'complete'` | 见结构定义及所属功能文档 |
| `step` | 否 | `WorldDeletionStep` | 见结构定义及所属功能文档 |
| `completed` | 否 | `WorldDeletionStep[]` | 见结构定义及所属功能文档 |
| `createdAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `updatedAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `error` | 是 | `string` | 见结构定义及所属功能文档 |

## WORLD_DELETION_STEPS

导出接口 · 源码第 21 行。

```ts
export const WORLD_DELETION_STEPS = ['disconnect', 'state', 'files', 'backups', 'external'];
```
