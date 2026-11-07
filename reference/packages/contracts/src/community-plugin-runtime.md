# game/packages/contracts/src/community-plugin-runtime.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## RuntimePermission

导出接口 · 源码第 2 行。

Third-party code has no DOM, native bridge, ambient files or network access.

```ts
export type RuntimePermission = 'scene:read' | 'files:selected' | `action:${string}` | `service:${string}`;
```

## RuntimeService

导出接口 · 源码第 3 行。

```ts
export interface RuntimeService {
    id: string;
    label: string;
    origin: string;
    pathPrefixes: string[];
    methods: ('GET' | 'POST')[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `origin` | 否 | `string` | 见结构定义及所属功能文档 |
| `pathPrefixes` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `methods` | 否 | `('GET'&#124;'POST')[]` | 见结构定义及所属功能文档 |

## RuntimeContribution

导出接口 · 源码第 4 行。

```ts
export interface RuntimeContribution {
    id: string;
    title: string;
    requires: RuntimePermission[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `title` | 否 | `string` | 见结构定义及所属功能文档 |
| `requires` | 否 | `RuntimePermission[]` | 见结构定义及所属功能文档 |

## RuntimeManifest

导出接口 · 源码第 5 行。

```ts
export interface RuntimeManifest {
    apiVersion: 1;
    id: string;
    version: string;
    entry: string;
    permissions: {
        sceneRead?: true;
        selectedFiles?: true;
        actions: string[];
        services: RuntimeService[];
    };
    contributions: {
        panels: RuntimeContribution[];
        mapTools: RuntimeContribution[];
        processors: RuntimeContribution[];
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `apiVersion` | 否 | `1` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `version` | 否 | `string` | 见结构定义及所属功能文档 |
| `entry` | 否 | `string` | 见结构定义及所属功能文档 |
| `permissions` | 否 | `{sceneRead?:true; selectedFiles?:true; actions:string[]; services:RuntimeService[]}` | 见结构定义及所属功能文档 |
| `permissions.sceneRead` | 是 | `true` | 见结构定义及所属功能文档 |
| `permissions.selectedFiles` | 是 | `true` | 见结构定义及所属功能文档 |
| `permissions.actions` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `permissions.services` | 否 | `RuntimeService[]` | 见结构定义及所属功能文档 |
| `contributions` | 否 | `{panels:RuntimeContribution[]; mapTools:RuntimeContribution[]; processors:RuntimeContribution[]}` | 见结构定义及所属功能文档 |
| `contributions.panels` | 否 | `RuntimeContribution[]` | 见结构定义及所属功能文档 |
| `contributions.mapTools` | 否 | `RuntimeContribution[]` | 见结构定义及所属功能文档 |
| `contributions.processors` | 否 | `RuntimeContribution[]` | 见结构定义及所属功能文档 |

## RuntimeNode

导出接口 · 源码第 10 行。

```ts
export type RuntimeNode = {
    type: 'text';
    text: string;
} | {
    type: 'button';
    text: string;
    event: string;
} | {
    type: 'input';
    label: string;
    key: string;
    value: string;
} | {
    type: 'table';
    columns: string[];
    rows: string[][];
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'text'` | 见结构定义及所属功能文档 |
| `分支1.text` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'button'` | 见结构定义及所属功能文档 |
| `分支2.text` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.event` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'input'` | 见结构定义及所属功能文档 |
| `分支3.label` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.key` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.value` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.type` | 否 | `'table'` | 见结构定义及所属功能文档 |
| `分支4.columns` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支4.rows` | 否 | `string[][]` | 见结构定义及所属功能文档 |

## RuntimeServiceRequest

导出接口 · 源码第 15 行。

```ts
export interface RuntimeServiceRequest {
    path: string;
    method: 'GET' | 'POST';
    body?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `path` | 否 | `string` | 见结构定义及所属功能文档 |
| `method` | 否 | `'GET'&#124;'POST'` | 见结构定义及所属功能文档 |
| `body` | 是 | `string` | 见结构定义及所属功能文档 |

## RuntimeServiceResponse

导出接口 · 源码第 16 行。

```ts
export interface RuntimeServiceResponse {
    status: number;
    body: string;
    contentType: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `status` | 否 | `number` | 见结构定义及所属功能文档 |
| `body` | 否 | `string` | 见结构定义及所属功能文档 |
| `contentType` | 否 | `string` | 见结构定义及所属功能文档 |

## runtimeDeclaredPermissions

导出接口 · 源码第 25 行。

```ts
export function runtimeDeclaredPermissions(m: RuntimeManifest): RuntimePermission[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `RuntimeManifest` | — |

## runtimeServiceUrl

导出接口 · 源码第 27 行。

Restrict URL syntax before WHATWG normalization can hide traversal.

```ts
export function runtimeServiceUrl(service: RuntimeService, path: string): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `service` | 否 | `RuntimeService` | — |
| `path` | 否 | `string` | — |

## parseRuntimeManifest

导出接口 · 源码第 33 行。

```ts
export function parseRuntimeManifest(value: unknown): RuntimeManifest;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## parseRuntimeNodes

导出接口 · 源码第 50 行。

Only inert host-rendered data; never HTML, CSS, scripts, images or navigable URLs.

```ts
export function parseRuntimeNodes(value: unknown): RuntimeNode[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
