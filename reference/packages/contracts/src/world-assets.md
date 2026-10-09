# game/packages/contracts/src/world-assets.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyDocumentDirectory,parseDocumentDirectory,type DocumentDirectory} from './document-directory';
import {isAssetPath} from './media';
import {storyObject,storyText,storyNumber,storyList} from './story';
```
</details>

## AssetCategory

导出接口 · 源码第 5 行。

```ts
export type AssetCategory = keyof typeof ASSET_CATEGORIES;
```

## assetCategory

导出接口 · 源码第 6 行。

```ts
export const assetCategory: (mime: string): AssetCategory;
```

## WorldAssetFile

导出接口 · 源码第 7 行。

```ts
export interface WorldAssetFile {
    path: string;
    hash: string;
    size: number;
    mime: string;
    name: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `path` | 否 | `string` | 见结构定义及所属功能文档 |
| `hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `size` | 否 | `number` | 见结构定义及所属功能文档 |
| `mime` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |

## WorldAssetPack

导出接口 · 源码第 8 行。

```ts
export interface WorldAssetPack {
    name: string;
    files: WorldAssetFile[];
    directory: DocumentDirectory;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `files` | 否 | `WorldAssetFile[]` | 见结构定义及所属功能文档 |
| `directory` | 否 | `DocumentDirectory` | 见结构定义及所属功能文档 |

## newWorldAssetPack

导出接口 · 源码第 9 行。

```ts
export const newWorldAssetPack: (name: string): WorldAssetPack;
```

## parseWorldAssetFile

导出接口 · 源码第 10 行。

```ts
export function parseWorldAssetFile(raw: unknown): WorldAssetFile;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseWorldAssetPack

导出接口 · 源码第 11 行。

```ts
export function parseWorldAssetPack(raw: unknown): WorldAssetPack;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## assetStoragePath

导出接口 · 源码第 12 行。

```ts
export const assetStoragePath: (file: Pick<WorldAssetFile, "hash" | "mime" | "path">): string;
```

## WorldAssetCommand

导出接口 · 源码第 13 行。

```ts
export type WorldAssetCommand = {
    type: 'asset.register';
    name: string;
    files: WorldAssetFile[];
} | {
    type: 'asset.directory';
    directory: DocumentDirectory;
    expectedRevision: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'asset.register'` | 见结构定义及所属功能文档 |
| `分支1.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.files` | 否 | `WorldAssetFile[]` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'asset.directory'` | 见结构定义及所属功能文档 |
| `分支2.directory` | 否 | `DocumentDirectory` | 见结构定义及所属功能文档 |
| `分支2.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
