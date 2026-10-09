# game/packages/session/src/story-library-directory.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {canonicalJson,isLibraryKind,emptyDocumentDirectory,parseDocumentDirectory,placeLibraryDocument,storyId,type WorldLibrary,type LibraryDocument} from '@aelzerant/contracts';
```
</details>

## applyLibraryDirectory

导出接口 · 源码第 3 行。

Called inside an authority candidate. Folder organization is a GM capability.

```ts
export function applyLibraryDirectory(library: WorldLibrary, command: Record<string,unknown>, gm: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `library` | 否 | `WorldLibrary` | — |
| `command` | 否 | `Record<string,unknown>` | — |
| `gm` | 否 | `boolean` | — |

## saveLibraryPlacement

导出接口 · 源码第 13 行。

```ts
export function saveLibraryPlacement(library: WorldLibrary, document: LibraryDocument, previous: LibraryDocument|undefined, command: Record<string,unknown>, gm: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `library` | 否 | `WorldLibrary` | — |
| `document` | 否 | `LibraryDocument` | — |
| `previous` | 否 | `LibraryDocument&#124;undefined` | — |
| `command` | 否 | `Record<string,unknown>` | — |
| `gm` | 否 | `boolean` | — |
