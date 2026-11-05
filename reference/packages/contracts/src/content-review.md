# game/packages/contracts/src/content-review.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## CONTENT_REVIEW_ACTIONS

导出接口 · 源码第 1 行。

```ts
export const CONTENT_REVIEW_ACTIONS = ['submit', 'approve', 'reject', 'withdraw'] as const;
```

## ContentReviewAction

导出接口 · 源码第 2 行。

```ts
export type ContentReviewAction = typeof CONTENT_REVIEW_ACTIONS[number];
```

## ContentReviewStatus

导出接口 · 源码第 3 行。

```ts
export type ContentReviewStatus = 'requested' | 'approved' | 'rejected' | 'withdrawn';
```

## ContentReviewCommand

导出接口 · 源码第 5 行。

```ts
export interface ContentReviewCommand {
    requestId: string;
    action: ContentReviewAction;
    contentRevision: number;
    expectedHash: string;
    expectedReviewRevision: number;
    reason: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `requestId` | 否 | `string` | 见结构定义及所属功能文档 |
| `action` | 否 | `ContentReviewAction` | 见结构定义及所属功能文档 |
| `contentRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `expectedHash` | 否 | `string` | 见结构定义及所属功能文档 |
| `expectedReviewRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `reason` | 否 | `string` | 见结构定义及所属功能文档 |

## ContentReviewRecord

导出接口 · 源码第 6 行。

```ts
export interface ContentReviewRecord {
    contentId: string;
    reviewRevision: number;
    contentRevision: number;
    hash: string;
    action: ContentReviewAction;
    status: ContentReviewStatus;
    actorId: string;
    requestedBy: string;
    reason: string;
    at: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `contentId` | 否 | `string` | 见结构定义及所属功能文档 |
| `reviewRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `contentRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `action` | 否 | `ContentReviewAction` | 见结构定义及所属功能文档 |
| `status` | 否 | `ContentReviewStatus` | 见结构定义及所属功能文档 |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `requestedBy` | 否 | `string` | 见结构定义及所属功能文档 |
| `reason` | 否 | `string` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |

## ContentReviewState

导出接口 · 源码第 7 行。

```ts
export interface ContentReviewState {
    contentId: string;
    headRevision: number;
    reviewRevision: number;
    status: ContentReviewStatus | 'unsubmitted' | 'stale';
    record?: ContentReviewRecord;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `contentId` | 否 | `string` | 见结构定义及所属功能文档 |
| `headRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `reviewRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `status` | 否 | `ContentReviewStatus&#124;'unsubmitted'&#124;'stale'` | 见结构定义及所属功能文档 |
| `record` | 是 | `ContentReviewRecord` | 见结构定义及所属功能文档 |

## ContentReviewReceipt

导出接口 · 源码第 8 行。

```ts
export interface ContentReviewReceipt {
    requestId: string;
    record: ContentReviewRecord;
    replayed: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `requestId` | 否 | `string` | 见结构定义及所属功能文档 |
| `record` | 否 | `ContentReviewRecord` | 见结构定义及所属功能文档 |
| `replayed` | 否 | `boolean` | 见结构定义及所属功能文档 |

## parseContentReviewCommand

导出接口 · 源码第 9 行。

```ts
export function parseContentReviewCommand(raw: unknown): ContentReviewCommand;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
