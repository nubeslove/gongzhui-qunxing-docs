# game/packages/contracts/src/scene-archive.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isAssetPath} from './media';
import {isGameSystemId,type GameSystemId} from './systems';
```
</details>

## SceneArchiveAsset

导出接口 · 源码第 4 行。

```ts
export interface SceneArchiveAsset {
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

## SceneArchiveHeader

导出接口 · 源码第 5 行。

```ts
export interface SceneArchiveHeader {
    format: 'aaf.scene';
    version: 1;
    systemId: GameSystemId;
    systemVersion: string;
    name: string;
    sourceSceneId: string;
    sourceWorldId: string;
    adapter: 'aaf-world' | 'manual-table';
    payload: Record<string, unknown>;
    assets: SceneArchiveAsset[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `format` | 否 | `'aaf.scene'` | 见结构定义及所属功能文档 |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `systemId` | 否 | `GameSystemId` | 见结构定义及所属功能文档 |
| `systemVersion` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `sourceSceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `sourceWorldId` | 否 | `string` | 见结构定义及所属功能文档 |
| `adapter` | 否 | `'aaf-world'&#124;'manual-table'` | 见结构定义及所属功能文档 |
| `payload` | 否 | `Record<string,unknown>` | 见结构定义及所属功能文档 |
| `assets` | 否 | `SceneArchiveAsset[]` | 见结构定义及所属功能文档 |

## SCENE_ARCHIVE_LIMIT

导出接口 · 源码第 6 行。

```ts
export const SCENE_ARCHIVE_LIMIT = 512000000;
```

## SCENE_ARCHIVE_META_LIMIT

导出接口 · 源码第 6 行。

```ts
export const SCENE_ARCHIVE_META_LIMIT = 1900000;
```

## parseSceneArchiveHeader

导出接口 · 源码第 10 行。

```ts
export function parseSceneArchiveHeader(raw: unknown): SceneArchiveHeader;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
