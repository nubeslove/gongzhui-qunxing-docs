# game/packages/contracts/src/control-runtime.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## ControlRuntime

导出接口 · 源码第 2 行。

Private operational summary, only for platform-wide operations readers.

```ts
export interface ControlRuntime {
    checkedAt: number;
    version: string;
    commit: string;
    ready: boolean;
    uptimeSeconds: number;
    onlineAccounts: number;
    connections: number;
    activeWorlds: number;
    accounts: number;
    worlds: number;
    memoryBytes: number;
    idleForMs: number;
    deployments: Array<{
        id: string;
        version: string;
        status: string;
        message: string;
        requestedAt: string;
    }>;
    storage?: {
        measuredAt: string;
        complete: boolean;
        bytes: number;
        uniqueFileBytes: number;
        files: number;
        categories: Array<{
            id: string;
            bytes: number;
            uniqueFileBytes: number;
            files: number;
        }>;
    };
    storageError?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `checkedAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `version` | 否 | `string` | 见结构定义及所属功能文档 |
| `commit` | 否 | `string` | 见结构定义及所属功能文档 |
| `ready` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `uptimeSeconds` | 否 | `number` | 见结构定义及所属功能文档 |
| `onlineAccounts` | 否 | `number` | 见结构定义及所属功能文档 |
| `connections` | 否 | `number` | 见结构定义及所属功能文档 |
| `activeWorlds` | 否 | `number` | 见结构定义及所属功能文档 |
| `accounts` | 否 | `number` | 见结构定义及所属功能文档 |
| `worlds` | 否 | `number` | 见结构定义及所属功能文档 |
| `memoryBytes` | 否 | `number` | 见结构定义及所属功能文档 |
| `idleForMs` | 否 | `number` | 见结构定义及所属功能文档 |
| `deployments` | 否 | `Array<{id:string;version:string;status:string;message:string;requestedAt:string}>` | 见结构定义及所属功能文档 |
| `storage` | 是 | `{measuredAt:string;complete:boolean;bytes:number;uniqueFileBytes:number;files:number;categories:Array<{id:string;bytes:number;uniqueFileBytes:number;files:number}>}` | 见结构定义及所属功能文档 |
| `storage.measuredAt` | 否 | `string` | 见结构定义及所属功能文档 |
| `storage.complete` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `storage.bytes` | 否 | `number` | 见结构定义及所属功能文档 |
| `storage.uniqueFileBytes` | 否 | `number` | 见结构定义及所属功能文档 |
| `storage.files` | 否 | `number` | 见结构定义及所属功能文档 |
| `storage.categories` | 否 | `Array<{id:string;bytes:number;uniqueFileBytes:number;files:number}>` | 见结构定义及所属功能文档 |
| `storageError` | 是 | `string` | 见结构定义及所属功能文档 |
