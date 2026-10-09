# game/packages/assets/src/media-cache.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { mediaWorldId, parseMediaManifest, type MediaFile, type MediaManifest } from "@aelzerant/contracts";
```
</details>

## MediaStorage

导出接口 · 源码第 3 行。

```ts
export interface MediaStorage {
    manifest(worldId: string): Promise<MediaManifest | null>;
    blob(worldId: string, hash: string): Promise<Blob | null>;
    commit(worldId: string, manifest: MediaManifest, blobs: Map<string, Blob>): Promise<void>;
    removeWorld(worldId: string): Promise<void>;
}
```

## blobHash

导出接口 · 源码第 10 行。

```ts
export function blobHash(blob: Blob): Promise<string>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `blob` | 否 | `Blob` | — |

## MediaCache

导出接口 · 源码第 14 行。

```ts
export class MediaCache {
  constructor(storage: MediaStorage);
  manifest(worldId: string): Promise<MediaManifest | null>;
  read(worldId: string, path: string): Promise<Blob | null>;
  sync(worldId: string, fetchManifest: () => Promise<MediaManifest>, fetchBlob: (file: MediaFile) => Promise<Blob>): Promise<{ version: number; pulled: number; reused: number; }>;
  removeWorld(worldId: string): Promise<void>;
}
```

## IndexedDBMediaStorage

导出接口 · 源码第 51 行。

```ts
export class IndexedDBMediaStorage {
  constructor(name?: string);
  manifest(worldId: string): Promise<MediaManifest | null>;
  blob(worldId: string, hash: string): Promise<Blob | null>;
  commit(worldId: string, manifest: MediaManifest, blobs: Map<string, Blob>): Promise<void>;
  removeWorld(worldId: string): Promise<void>;
}
```
