# game/packages/tabletop-runtime/src/story/compendiumMedia.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {COMPENDIUM_LIMITS,compendiumMediaObjectBytes,COMPENDIUM_MEDIA_CHUNK_BYTES,archiveAssets,canonicalJson,compendiumMediaPaths,inspectGlb,parseCompendiumBody,parseCompendiumMediaChunk,remapArchiveAssets,validateLocalPdf,type CompendiumBody,type CompendiumMedia,type CompendiumMediaChunk,type SceneArchiveAsset} from '@aelzerant/contracts';
import {hashBlob} from '../tabletop/blobHash';
import {compendiumObjectHash,readCompendiumObject,writeCompendiumObject,type CompendiumObjects} from './compendiumObjects';
import type {CompendiumCall} from './compendiumHost';
```
</details>

## CompendiumMediaSource

导出接口 · 源码第 6 行。

```ts
export interface CompendiumMediaSource {
    files: readonly SceneArchiveAsset[];
    read: (path: string) => Promise<Blob>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `files` | 否 | `readonly SceneArchiveAsset[]` | 见结构定义及所属功能文档 |
| `read` | 否 | `(path:string)=>Promise<Blob>` | 见结构定义及所属功能文档 |

## CompendiumChunkReader

导出接口 · 源码第 7 行。

```ts
export type CompendiumChunkReader = (hash: string, index: number) => Promise<unknown>;
```

## inspectCompendiumMedia

导出接口 · 源码第 8 行。

```ts
export function inspectCompendiumMedia(blob: Blob, file: SceneArchiveAsset): Promise<void>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `blob` | 否 | `Blob` | — |
| `file` | 否 | `SceneArchiveAsset` | — |

## readCompendiumMediaBlob

导出接口 · 源码第 12 行。

```ts
export function readCompendiumMediaBlob(file: CompendiumMedia, read: CompendiumChunkReader): Promise<Blob>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `file` | 否 | `CompendiumMedia` | — |
| `read` | 否 | `CompendiumChunkReader` | — |

## writeCompendiumMediaBlob

导出接口 · 源码第 22 行。

```ts
export function writeCompendiumMediaBlob(file: SceneArchiveAsset, blob: Blob, objects: CompendiumObjects): Promise<CompendiumMedia>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `file` | 否 | `SceneArchiveAsset` | — |
| `blob` | 否 | `Blob` | — |
| `objects` | 否 | `CompendiumObjects` | — |

## captureCompendiumMedia

导出接口 · 源码第 32 行。

Existing attachment bytes are immutable; newly referenced paths come from the current world only.

```ts
export function captureCompendiumMedia(body: CompendiumBody, objects: CompendiumObjects, source?: CompendiumMediaSource, original?: CompendiumBody): Promise<CompendiumBody>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `body` | 否 | `CompendiumBody` | — |
| `objects` | 否 | `CompendiumObjects` | — |
| `source` | 是 | `CompendiumMediaSource` | — |
| `original` | 是 | `CompendiumBody` | — |

## readCompendiumBodyMedia

导出接口 · 源码第 42 行。

```ts
export function readCompendiumBodyMedia(body: CompendiumBody, objects: CompendiumObjects): Promise<Map<string,Blob>>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `body` | 否 | `CompendiumBody` | — |
| `objects` | 否 | `CompendiumObjects` | — |

## requestCompendiumMedia

导出接口 · 源码第 45 行。

```ts
export function requestCompendiumMedia(call: CompendiumCall, id: string, revision: number, entryId: string, file: CompendiumMedia): Promise<Blob>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `call` | 否 | `CompendiumCall` | — |
| `id` | 否 | `string` | — |
| `revision` | 否 | `number` | — |
| `entryId` | 否 | `string` | — |
| `file` | 否 | `CompendiumMedia` | — |

## attachedCompendiumMedia

导出接口 · 源码第 50 行。

```ts
export function attachedCompendiumMedia(body: CompendiumBody, reference: string): CompendiumMedia|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `body` | 否 | `CompendiumBody` | — |
| `reference` | 否 | `string` | — |

## assertCompendiumMediaClosure

导出接口 · 源码第 53 行。

```ts
export function assertCompendiumMediaClosure(body: CompendiumBody): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `body` | 否 | `CompendiumBody` | — |
