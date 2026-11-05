# game/packages/contracts/src/content-installation.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {contentDraftId} from './content-drafts';
```
</details>

## ContentInstallation

导出接口 · 源码第 4 行。

A permit is scoped to one account, world and immutable release, never to a mutable latest.

```ts
export interface ContentInstallation {
    id: string;
    accountId: string;
    worldId: string;
    contentId: string;
    releaseVersion: number;
    contentRevision: number;
    hash: string;
    grantedAt: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `accountId` | 否 | `string` | 见结构定义及所属功能文档 |
| `worldId` | 否 | `string` | 见结构定义及所属功能文档 |
| `contentId` | 否 | `string` | 见结构定义及所属功能文档 |
| `releaseVersion` | 否 | `number` | 见结构定义及所属功能文档 |
| `contentRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `grantedAt` | 否 | `number` | 见结构定义及所属功能文档 |

## ContentInstallationCommand

导出接口 · 源码第 8 行。

```ts
export interface ContentInstallationCommand {
    requestId: string;
    worldId: string;
    contentId: string;
    releaseVersion: number;
    expectedHash: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `requestId` | 否 | `string` | 见结构定义及所属功能文档 |
| `worldId` | 否 | `string` | 见结构定义及所属功能文档 |
| `contentId` | 否 | `string` | 见结构定义及所属功能文档 |
| `releaseVersion` | 否 | `number` | 见结构定义及所属功能文档 |
| `expectedHash` | 否 | `string` | 见结构定义及所属功能文档 |

## ContentInstallationReceipt

导出接口 · 源码第 9 行。

```ts
export interface ContentInstallationReceipt {
    requestId: string;
    installation: ContentInstallation;
    replayed: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `requestId` | 否 | `string` | 见结构定义及所属功能文档 |
| `installation` | 否 | `ContentInstallation` | 见结构定义及所属功能文档 |
| `replayed` | 否 | `boolean` | 见结构定义及所属功能文档 |

## parseContentInstallationCommand

导出接口 · 源码第 10 行。

```ts
export function parseContentInstallationCommand(raw: unknown): ContentInstallationCommand;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
