# game/packages/contracts/src/content-distribution.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## ContentAudience

导出接口 · 源码第 2 行。

```ts
export type ContentAudience = keyof typeof CONTENT_AUDIENCES;
```

## ContentDistribution

导出接口 · 源码第 3 行。

```ts
export interface ContentDistribution {
    contentId: string;
    authorId: string;
    revision: number;
    audience: ContentAudience;
    updatedAt: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `contentId` | 否 | `string` | 见结构定义及所属功能文档 |
| `authorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `audience` | 否 | `ContentAudience` | 见结构定义及所属功能文档 |
| `updatedAt` | 否 | `number` | 见结构定义及所属功能文档 |

## ContentDistributionEvent

导出接口 · 源码第 4 行。

```ts
export interface ContentDistributionEvent {
    contentId: string;
    revision: number;
    audience: ContentAudience;
    actorId: string;
    reason: string;
    at: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `contentId` | 否 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `audience` | 否 | `ContentAudience` | 见结构定义及所属功能文档 |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `reason` | 否 | `string` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |

## ContentDistributionCommand

导出接口 · 源码第 5 行。

```ts
export interface ContentDistributionCommand {
    requestId: string;
    expectedRevision: number;
    audience: ContentAudience;
    reason: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `requestId` | 否 | `string` | 见结构定义及所属功能文档 |
| `expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `audience` | 否 | `ContentAudience` | 见结构定义及所属功能文档 |
| `reason` | 否 | `string` | 见结构定义及所属功能文档 |

## ContentDistributionReceipt

导出接口 · 源码第 6 行。

```ts
export interface ContentDistributionReceipt {
    requestId: string;
    event: ContentDistributionEvent;
    replayed: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `requestId` | 否 | `string` | 见结构定义及所属功能文档 |
| `event` | 否 | `ContentDistributionEvent` | 见结构定义及所属功能文档 |
| `replayed` | 否 | `boolean` | 见结构定义及所属功能文档 |

## parseContentDistributionCommand

导出接口 · 源码第 7 行。

```ts
export function parseContentDistributionCommand(raw: unknown): ContentDistributionCommand;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
