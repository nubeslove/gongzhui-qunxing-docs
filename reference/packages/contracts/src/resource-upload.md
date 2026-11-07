# game/packages/contracts/src/resource-upload.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## ResourceUpload

导出接口 · 源码第 2 行。

Offset is the durable byte boundary acknowledged by the server, never the client-side sent count.

```ts
export interface ResourceUpload {
    hash: string;
    size: number;
    offset: number;
    complete: boolean;
    chunkSize: number;
    updatedAt: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `size` | 否 | `number` | 见结构定义及所属功能文档 |
| `offset` | 否 | `number` | 见结构定义及所属功能文档 |
| `complete` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `chunkSize` | 否 | `number` | 见结构定义及所属功能文档 |
| `updatedAt` | 否 | `number` | 见结构定义及所属功能文档 |

## RESOURCE_UPLOAD_LIMIT

导出接口 · 源码第 4 行。

```ts
export const RESOURCE_UPLOAD_LIMIT = 64000000;
```
