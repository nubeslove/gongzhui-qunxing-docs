# game/packages/contracts/src/scene-directory.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyDocumentDirectory,parseDocumentDirectory,removeDocumentFolder,documentFolderDescendants,documentDirectoryOrder,placeInDocumentDirectory,removeFromDocumentDirectory,type DocumentDirectory,type DocumentFolder} from './document-directory';
```
</details>

## SceneFolder

导出接口 · 源码第 2 行。

```ts
export type SceneFolder = DocumentFolder;
```

## SceneDirectory

导出接口 · 源码第 3 行。

```ts
export type SceneDirectory = DocumentDirectory;
```

## SceneDirectoryCommand

导出接口 · 源码第 4 行。

```ts
export type SceneDirectoryCommand = {
    type: 'scene.directory';
    directory: SceneDirectory;
    expectedRevision: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 否 | `'scene.directory'` | 见结构定义及所属功能文档 |
| `directory` | 否 | `SceneDirectory` | 见结构定义及所属功能文档 |
| `expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |

## emptySceneDirectory

导出接口 · 源码第 5 行。

```ts
export const emptySceneDirectory: (): DocumentDirectory;
```

## parseSceneDirectory

导出接口 · 源码第 6 行。

```ts
export function parseSceneDirectory(raw: unknown, sceneIds?: ReadonlySet<string>): SceneDirectory;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `sceneIds` | 是 | `ReadonlySet<string>` | — |

## removeSceneFolder

导出接口 · 源码第 9 行。

```ts
export const removeSceneFolder: (directory: DocumentDirectory, folderId: string, maxEntries?: number): DocumentDirectory;
```

## sceneFolderDescendants

导出接口 · 源码第 10 行。

```ts
export const sceneFolderDescendants: (directory: DocumentDirectory, folderId: string): Set<string>;
```

## sceneDirectoryOrder

导出接口 · 源码第 11 行。

```ts
export const sceneDirectoryOrder: <T extends { id: string; name: string; }>(rows: readonly T[], directory: DocumentDirectory, parent: string | null, rootSorting?: DocumentFolder["sorting"]): T[];
```

## placeInSceneDirectory

导出接口 · 源码第 12 行。

```ts
export function placeInSceneDirectory(directory: SceneDirectory|undefined, scene: string, folder: string|null): DocumentDirectory;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `directory` | 否 | `SceneDirectory&#124;undefined` | — |
| `scene` | 否 | `string` | — |
| `folder` | 否 | `string&#124;null` | — |

## removeFromSceneDirectory

导出接口 · 源码第 13 行。

```ts
export const removeFromSceneDirectory: (directory: DocumentDirectory | undefined, document: string): void;
```
