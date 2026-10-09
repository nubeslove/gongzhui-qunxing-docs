# game/packages/contracts/src/media.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { isId, isInteger, isRecord } from "./validation";
```
</details>

## MEDIA_TYPES

导出接口 · 源码第 3 行。

```ts
export const MEDIA_TYPES = ["image/png", "image/jpeg", "image/webp", "image/gif", "image/svg+xml", "audio/mpeg", "audio/ogg", "audio/wav", "video/webm", "video/mp4", "application/pdf"] as const;
```

## MediaType

导出接口 · 源码第 4 行。

```ts
export type MediaType = typeof MEDIA_TYPES[number];
```

## MediaFile

导出接口 · 源码第 5 行。

```ts
export interface MediaFile {
    path: string;
    hash: string;
    size: number;
    mime: MediaType;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `path` | 否 | `string` | 见结构定义及所属功能文档 |
| `hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `size` | 否 | `number` | 见结构定义及所属功能文档 |
| `mime` | 否 | `MediaType` | 见结构定义及所属功能文档 |

## MediaManifest

导出接口 · 源码第 6 行。

```ts
export interface MediaManifest {
    schemaVersion: 1;
    version: number;
    files: MediaFile[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `schemaVersion` | 否 | `1` | 见结构定义及所属功能文档 |
| `version` | 否 | `number` | 见结构定义及所属功能文档 |
| `files` | 否 | `MediaFile[]` | 见结构定义及所属功能文档 |

## isAssetPath

导出接口 · 源码第 7 行。

```ts
export function isAssetPath(value: unknown): value is string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## parseMediaManifest

导出接口 · 源码第 11 行。

```ts
export function parseMediaManifest(value: unknown): MediaManifest;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## mediaWorldId

导出接口 · 源码第 23 行。

```ts
export function mediaWorldId(value: unknown): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
