# game/packages/assets/src/asset-packs.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## AssetPackFile

导出接口 · 源码第 7 行。

Official optional asset packs.
World-owned media keeps its existing path: syncAssets/AssetCache with a SyncDeps source.
This module only resolves the public pack index, so a missing official file is fetched from a
configurable mirror with no account and no world dependency. Both caches key on the content hash.

```ts
export interface AssetPackFile {
    path: string;
    size: number;
    sha256: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `path` | 否 | `string` | 见结构定义及所属功能文档 |
| `size` | 否 | `number` | 见结构定义及所属功能文档 |
| `sha256` | 否 | `string` | 见结构定义及所属功能文档 |

## AssetPack

导出接口 · 源码第 12 行。

```ts
export interface AssetPack {
    id: string;
    title: string;
    rules: readonly string[];
    license: string;
    version: number;
    target: string;
    bytes: number;
    files: readonly AssetPackFile[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `title` | 否 | `string` | 见结构定义及所属功能文档 |
| `rules` | 否 | `readonly string[]` | 见结构定义及所属功能文档 |
| `license` | 否 | `string` | 见结构定义及所属功能文档 |
| `version` | 否 | `number` | 见结构定义及所属功能文档 |
| `target` | 否 | `string` | Runtime folder the pack lands in, relative to the asset root. |
| `bytes` | 否 | `number` | 见结构定义及所属功能文档 |
| `files` | 否 | `readonly AssetPackFile[]` | 见结构定义及所属功能文档 |

## AssetPackIndex

导出接口 · 源码第 23 行。

```ts
export interface AssetPackIndex {
    version: number;
    generatedAt: string;
    packs: readonly AssetPack[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `number` | 见结构定义及所属功能文档 |
| `generatedAt` | 否 | `string` | 见结构定义及所属功能文档 |
| `packs` | 否 | `readonly AssetPack[]` | 见结构定义及所属功能文档 |

## parseAssetPackIndex

导出接口 · 源码第 46 行。

```ts
export function parseAssetPackIndex(raw: unknown): AssetPackIndex;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parsePackReference

导出接口 · 源码第 83 行。

`pack:<packId>/<path>` addresses an official file; world manifest paths are a separate namespace.

```ts
export function parsePackReference(reference: string): {packId: string; path: string} | null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `reference` | 否 | `string` | — |

## packFileUrl

导出接口 · 源码第 94 行。

Mirror prefixes make the same index usable behind any reachable host.

```ts
export function packFileUrl(base: string, pack: AssetPack, file: AssetPackFile): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `base` | 否 | `string` | — |
| `pack` | 否 | `AssetPack` | — |
| `file` | 否 | `AssetPackFile` | — |

## PackDownloadPlan

导出接口 · 源码第 99 行。

```ts
export interface PackDownloadPlan {
    files: Array<{
        pack: AssetPack;
        file: AssetPackFile;
    }>;
    reused: number;
    bytes: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `files` | 否 | `Array<{pack: AssetPack; file: AssetPackFile}>` | 见结构定义及所属功能文档 |
| `reused` | 否 | `number` | Files already present with the same hash; nothing is downloaded twice. |
| `bytes` | 否 | `number` | 见结构定义及所属功能文档 |

## planPackDownload

导出接口 · 源码第 107 行。

Incremental plan: only files whose recorded hash differs from the local copy are fetched.

```ts
export function planPackDownload(index: AssetPackIndex, wanted: readonly string[], installed: ReadonlyMap<string, string>): PackDownloadPlan;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `index` | 否 | `AssetPackIndex` | — |
| `wanted` | 否 | `readonly string[]` | — |
| `installed` | 否 | `ReadonlyMap<string, string>` | — |
