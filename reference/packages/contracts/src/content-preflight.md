# game/packages/contracts/src/content-preflight.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ContentReviewState} from './content-review';
```
</details>

## ContentPreflightCategory

导出接口 · 源码第 3 行。

```ts
export type ContentPreflightCategory = 'source' | 'references' | 'media' | 'review';
```

## ContentPreflightIssue

导出接口 · 源码第 4 行。

```ts
export interface ContentPreflightIssue {
    category: ContentPreflightCategory;
    label: string;
    detail: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `category` | 否 | `ContentPreflightCategory` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `detail` | 否 | `string` | 见结构定义及所属功能文档 |

## ContentPreflightReport

导出接口 · 源码第 6 行。

A version-bound diagnostic, not an installation grant or a publication receipt.

```ts
export interface ContentPreflightReport {
    contentId: string;
    contentRevision: number;
    hash: string;
    reviewRevision: number;
    at: number;
    status: 'passed' | 'blocked' | 'stale';
    reviewStatus: ContentReviewState['status'];
    media: {
        total: number;
        ready: number;
        bytes: number;
    };
    issues: ContentPreflightIssue[];
    issueCount: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `contentId` | 否 | `string` | 见结构定义及所属功能文档 |
| `contentRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `reviewRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |
| `status` | 否 | `'passed'&#124;'blocked'&#124;'stale'` | 见结构定义及所属功能文档 |
| `reviewStatus` | 否 | `ContentReviewState['status']` | 见结构定义及所属功能文档 |
| `media` | 否 | `{total:number;ready:number;bytes:number}` | 见结构定义及所属功能文档 |
| `media.total` | 否 | `number` | 见结构定义及所属功能文档 |
| `media.ready` | 否 | `number` | 见结构定义及所属功能文档 |
| `media.bytes` | 否 | `number` | 见结构定义及所属功能文档 |
| `issues` | 否 | `ContentPreflightIssue[]` | 见结构定义及所属功能文档 |
| `issueCount` | 否 | `number` | 见结构定义及所属功能文档 |
