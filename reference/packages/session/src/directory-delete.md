# game/packages/session/src/directory-delete.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {deleteLibraryDocuments} from './library-delete';
import {isLibraryKind} from '@aelzerant/contracts';
import {pruneSceneJournals,type StoryWorkspace,type DocumentDirectoryKind} from '@aelzerant/contracts';
```
</details>

## deleteDirectoryStoryDocuments

导出接口 · 源码第 5 行。

Mutates an authority candidate only; the caller validates the preview and commits once.

```ts
export function deleteDirectoryStoryDocuments(story: StoryWorkspace, kind: DocumentDirectoryKind, ids: ReadonlySet<string>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `kind` | 否 | `DocumentDirectoryKind` | — |
| `ids` | 否 | `ReadonlySet<string>` | — |
