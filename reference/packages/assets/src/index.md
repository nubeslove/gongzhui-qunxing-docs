# game/packages/assets/src/index.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { AssetFileMeta, AssetManifest, AssetPayload } from "@aelzerant/contracts";
import { canonicalJson, isAssetPath, isInteger, isRecord } from "@aelzerant/contracts";
```
</details>

## 重新导出的模块

```ts
export * from "./media-cache";
```

## KVStorage

导出接口 · 源码第 14 行。

```ts
export interface KVStorage {
    get(key: string): string | null;
    set(key: string, value: string): void;
    remove(key: string): void;
}
```

## MemoryStorage

导出接口 · 源码第 20 行。

```ts
export class MemoryStorage {
  get(k: string): string | null;
  set(k: string, v: string): void;
  remove(k: string): void;
}
```

## sha256Hex

导出接口 · 源码第 35 行。

```ts
export function sha256Hex(text: string): Promise<string>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |

## CachedIndex

内部依赖类型 · 源码第 42 行。

```ts
interface CachedIndex {
    version: number;
    files: AssetFileMeta[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `number` | 见结构定义及所属功能文档 |
| `files` | 否 | `AssetFileMeta[]` | 见结构定义及所属功能文档 |

## AssetCache

导出接口 · 源码第 47 行。

```ts
export class AssetCache {
  constructor(storage: KVStorage);
  loadIndex(worldId: string): CachedIndex | null;
  read(worldId: string, path: string): unknown | null;
  readVersion(worldId: string, meta: AssetFileMeta): unknown | null;
  storeFile(worldId: string, meta: AssetFileMeta, data: unknown): Promise<void>;
  storeIndex(worldId: string, index: CachedIndex): void;
  deleteWorld(worldId: string): void;
  deleteFile(worldId: string, path: string): void;
  deleteVersion(worldId: string, meta: AssetFileMeta): void;
  sizeInWorld(worldId: string): number;
}
```

## SyncDeps

导出接口 · 源码第 121 行。

```ts
export interface SyncDeps {
    getManifest(): Promise<AssetManifest>;
    getFile(path: string): Promise<AssetPayload>;
}
```

## WorldGoneError

导出接口 · 源码第 127 行。

```ts
export class WorldGoneError {
  constructor();
}
```

## SyncResult

导出接口 · 源码第 134 行。

```ts
export interface SyncResult {
    worldId: string;
    version: number;
    pulled: string[];
    reused: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `worldId` | 否 | `string` | 见结构定义及所属功能文档 |
| `version` | 否 | `number` | 见结构定义及所属功能文档 |
| `pulled` | 否 | `string[]` | 本次实际拉取的文件（增量=仅变更项） |
| `reused` | 否 | `number` | 直接复用的文件数（hash 一致） |

## syncAssets

导出接口 · 源码第 144 行。

```ts
export function syncAssets(cache: AssetCache, deps: SyncDeps, worldId: string): Promise<SyncResult>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `cache` | 否 | `AssetCache` | — |
| `deps` | 否 | `SyncDeps` | — |
| `worldId` | 否 | `string` | — |
