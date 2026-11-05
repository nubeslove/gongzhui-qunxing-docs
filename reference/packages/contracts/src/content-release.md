# game/packages/contracts/src/content-release.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## CONTENT_RELEASE_ACTIONS

导出接口 · 源码第 1 行。

```ts
export const CONTENT_RELEASE_ACTIONS = ['publish', 'withdraw', 'relist', 'disable'] as const;
```

## ContentReleaseAction

导出接口 · 源码第 2 行。

```ts
export type ContentReleaseAction = typeof CONTENT_RELEASE_ACTIONS[number];
```

## ContentReleaseStatus

导出接口 · 源码第 3 行。

```ts
export type ContentReleaseStatus = 'listed' | 'withdrawn' | 'disabled';
```

## ContentRelease

导出接口 · 源码第 4 行。

```ts
export interface ContentRelease {
    contentId: string;
    version: number;
    contentRevision: number;
    hash: string;
    reviewRevision: number;
    publisherId: string;
    publishedAt: number;
    status: ContentReleaseStatus;
    stateRevision: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `contentId` | 否 | `string` | 见结构定义及所属功能文档 |
| `version` | 否 | `number` | 见结构定义及所属功能文档 |
| `contentRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `reviewRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `publisherId` | 否 | `string` | 见结构定义及所属功能文档 |
| `publishedAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `status` | 否 | `ContentReleaseStatus` | 见结构定义及所属功能文档 |
| `stateRevision` | 否 | `number` | 见结构定义及所属功能文档 |

## ContentReleaseCommand

导出接口 · 源码第 8 行。

```ts
export type ContentReleaseCommand = {
    requestId: string;
    reason: string;
} & ({
    action: 'publish';
    contentRevision: number;
    expectedHash: string;
    expectedReviewRevision: number;
    expectedReleaseVersion: number;
} | {
    action: 'withdraw' | 'relist' | 'disable';
    releaseVersion: number;
    expectedStateRevision: number;
});
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `requestId` | 否 | `string` | 见结构定义及所属功能文档 |
| `reason` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.action` | 否 | `'publish'` | 见结构定义及所属功能文档 |
| `分支1.contentRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支1.expectedHash` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.expectedReviewRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支1.expectedReleaseVersion` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.action` | 否 | `'withdraw'&#124;'relist'&#124;'disable'` | 见结构定义及所属功能文档 |
| `分支2.releaseVersion` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.expectedStateRevision` | 否 | `number` | 见结构定义及所属功能文档 |

## ContentReleaseEvent

导出接口 · 源码第 12 行。

```ts
export interface ContentReleaseEvent {
    contentId: string;
    releaseVersion: number;
    stateRevision: number;
    action: ContentReleaseAction;
    status: ContentReleaseStatus;
    contentRevision: number;
    hash: string;
    actorId: string;
    reason: string;
    at: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `contentId` | 否 | `string` | 见结构定义及所属功能文档 |
| `releaseVersion` | 否 | `number` | 见结构定义及所属功能文档 |
| `stateRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `action` | 否 | `ContentReleaseAction` | 见结构定义及所属功能文档 |
| `status` | 否 | `ContentReleaseStatus` | 见结构定义及所属功能文档 |
| `contentRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `reason` | 否 | `string` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |

## ContentReleaseReceipt

导出接口 · 源码第 16 行。

```ts
export interface ContentReleaseReceipt {
    requestId: string;
    event: ContentReleaseEvent;
    replayed: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `requestId` | 否 | `string` | 见结构定义及所属功能文档 |
| `event` | 否 | `ContentReleaseEvent` | 见结构定义及所属功能文档 |
| `replayed` | 否 | `boolean` | 见结构定义及所属功能文档 |

## parseContentReleaseCommand

导出接口 · 源码第 17 行。

```ts
export function parseContentReleaseCommand(raw: unknown): ContentReleaseCommand;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
