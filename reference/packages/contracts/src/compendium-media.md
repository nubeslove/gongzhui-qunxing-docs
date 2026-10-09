# game/packages/contracts/src/compendium-media.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyList,storyObject,storyText} from './story';
import {mapArchiveMedia} from './scene-archive-content';
import type {SceneArchiveAsset} from './scene-archive';
```
</details>

## COMPENDIUM_MEDIA_CHUNK_BYTES

导出接口 · 源码第 5 行。

```ts
export const COMPENDIUM_MEDIA_CHUNK_BYTES = 524288;
```

## COMPENDIUM_MEDIA_TOTAL_BYTES

导出接口 · 源码第 6 行。

```ts
export const COMPENDIUM_MEDIA_TOTAL_BYTES = 64000000;
```

## CompendiumMedia

导出接口 · 源码第 8 行。

```ts
export interface CompendiumMedia extends SceneArchiveAsset {
    chunks: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `chunks` | 否 | `string[]` | 见结构定义及所属功能文档 |

## CompendiumMediaChunk

导出接口 · 源码第 9 行。

```ts
export interface CompendiumMediaChunk {
    format: 'aaf-compendium-media';
    version: 1;
    data: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `format` | 否 | `'aaf-compendium-media'` | 见结构定义及所属功能文档 |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `data` | 否 | `string` | 见结构定义及所属功能文档 |

## compendiumMediaPaths

导出接口 · 源码第 11 行。

```ts
export function compendiumMediaPaths(document: unknown): Set<string>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `document` | 否 | `unknown` | — |

## parseCompendiumMedia

导出接口 · 源码第 14 行。

```ts
export function parseCompendiumMedia(raw: unknown, document?: unknown): CompendiumMedia[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `document` | 是 | `unknown` | — |

## parseCompendiumMediaChunk

导出接口 · 源码第 28 行。

```ts
export function parseCompendiumMediaChunk(raw: unknown): CompendiumMediaChunk;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## projectCompendiumMedia

导出接口 · 源码第 33 行。

```ts
export function projectCompendiumMedia(media: readonly CompendiumMedia[]|undefined, document: unknown): CompendiumMedia[]|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `media` | 否 | `readonly CompendiumMedia[]&#124;undefined` | — |
| `document` | 否 | `unknown` | — |

## compendiumMediaObjectBytes

导出接口 · 源码第 37 行。

Exact encoded object size, deduplicated by immutable chunk hash.

```ts
export function compendiumMediaObjectBytes(files: readonly CompendiumMedia[]): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `files` | 否 | `readonly CompendiumMedia[]` | — |
