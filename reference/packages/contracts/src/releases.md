# game/packages/contracts/src/releases.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## ClientArtifact

导出接口 · 源码第 2 行。

Release metadata is separate from worlds and rules. Stable releases only.

```ts
export interface ClientArtifact {
    url: string;
    signature: string;
    sha256: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `url` | 否 | `string` | 见结构定义及所属功能文档 |
| `signature` | 否 | `string` | 见结构定义及所属功能文档 |
| `sha256` | 否 | `string` | 见结构定义及所属功能文档 |

## AppRelease

导出接口 · 源码第 3 行。

```ts
export interface AppRelease {
    id: string;
    version: string;
    commit: string;
    docsCommit: string;
    publishedAt: string;
    notes: string;
    protocol: number;
    minClientVersion: string;
    artifacts: Record<string, ClientArtifact>;
    serverWindows?: {
        url: string;
        sha256: string;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `version` | 否 | `string` | 见结构定义及所属功能文档 |
| `commit` | 否 | `string` | 见结构定义及所属功能文档 |
| `docsCommit` | 否 | `string` | 见结构定义及所属功能文档 |
| `publishedAt` | 否 | `string` | 见结构定义及所属功能文档 |
| `notes` | 否 | `string` | 见结构定义及所属功能文档 |
| `protocol` | 否 | `number` | 见结构定义及所属功能文档 |
| `minClientVersion` | 否 | `string` | 见结构定义及所属功能文档 |
| `artifacts` | 否 | `Record<string,ClientArtifact>` | 见结构定义及所属功能文档 |
| `serverWindows` | 是 | `{url:string;sha256:string}` | 见结构定义及所属功能文档 |
| `serverWindows.url` | 否 | `string` | 见结构定义及所属功能文档 |
| `serverWindows.sha256` | 否 | `string` | 见结构定义及所属功能文档 |

## DeploymentJob

导出接口 · 源码第 4 行。

```ts
export interface DeploymentJob {
    id: string;
    release: AppRelease;
    requestedBy: string;
    requestedAt: string;
    status: 'awaiting-approval' | 'approved' | 'queued' | 'preparing' | 'stopping' | 'switching' | 'checking' | 'complete' | 'rolled-back' | 'failed';
    message: string;
    approvedBy?: string;
    approvedAt?: string;
    execution?: 'idle' | 'force';
    prepared?: string;
    previous?: string;
    backup?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `release` | 否 | `AppRelease` | 见结构定义及所属功能文档 |
| `requestedBy` | 否 | `string` | 见结构定义及所属功能文档 |
| `requestedAt` | 否 | `string` | 见结构定义及所属功能文档 |
| `status` | 否 | `'awaiting-approval'&#124;'approved'&#124;'queued'&#124;'preparing'&#124;'stopping'&#124;'switching'&#124;'checking'&#124;'complete'&#124;'rolled-back'&#124;'failed'` | 见结构定义及所属功能文档 |
| `message` | 否 | `string` | 见结构定义及所属功能文档 |
| `approvedBy` | 是 | `string` | 见结构定义及所属功能文档 |
| `approvedAt` | 是 | `string` | 见结构定义及所属功能文档 |
| `execution` | 是 | `'idle'&#124;'force'` | 见结构定义及所属功能文档 |
| `prepared` | 是 | `string` | 见结构定义及所属功能文档 |
| `previous` | 是 | `string` | 见结构定义及所属功能文档 |
| `backup` | 是 | `string` | 见结构定义及所属功能文档 |

## releaseVersion

导出接口 · 源码第 5 行。

```ts
export function releaseVersion(value: string): number[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `string` | — |

## newerRelease

导出接口 · 源码第 6 行。

```ts
export function newerRelease(a: string, b: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `string` | — |
| `b` | 否 | `string` | — |

## parseRelease

导出接口 · 源码第 7 行。

```ts
export function parseRelease(input: unknown, allowedOrigins: ReadonlySet<string>): AppRelease;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `input` | 否 | `unknown` | — |
| `allowedOrigins` | 否 | `ReadonlySet<string>` | — |
