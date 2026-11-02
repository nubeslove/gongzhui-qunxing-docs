# game/packages/contracts/src/scene-archive-content.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {documentReferences,remapDocumentReferences,resolveDocumentReference,type WorldDocumentRow} from './document-reference';
import {journalActionSpans,remapJournalTables} from './journal-actions';
import {emptyStory,parseStory,type StoryWorkspace} from './story';
import {readableJournalReference,parseJournalHref,journalHref,type JournalReference} from './journal-reference';
import type {SceneFeatures} from './scene-features';
import type {SceneArchiveAsset} from './scene-archive';
import {sceneArchiveLibrary,remapSceneArchiveCards} from './scene-archive-cards';
```
</details>

## mapArchiveStrings

导出接口 · 源码第 10 行。

Only registered local references are rewritten. Free prose and rule identifiers remain intact.

```ts
export function mapArchiveStrings<T>(value: T, change: (s:string)=>string): T;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `T` | — |
| `change` | 否 | `(s:string)=>string` | — |

## archiveJournalLinks

导出接口 · 源码第 16 行。

```ts
export function archiveJournalLinks(text: string): JournalReference[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |

## sceneArchiveStory

导出接口 · 源码第 17 行。

```ts
export function sceneArchiveStory(source: StoryWorkspace|undefined, sceneId: string, actorIds: Set<string>, features?: SceneFeatures, linkedText?: unknown): StoryWorkspace;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `source` | 否 | `StoryWorkspace&#124;undefined` | — |
| `sceneId` | 否 | `string` | — |
| `actorIds` | 否 | `Set<string>` | — |
| `features` | 是 | `SceneFeatures` | — |
| `linkedText` | 是 | `unknown` | null |

## mapArchiveMedia

导出接口 · 源码第 52 行。

```ts
export function mapArchiveMedia<T>(value: T, change: (ref:string)=>string): T;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `T` | — |
| `change` | 否 | `(ref:string)=>string` | — |

## visitArchiveMedia

导出接口 · 源码第 54 行。

Read-only authorization/reference scans do not allocate a second copy of the world.

```ts
export function visitArchiveMedia(value: unknown, visit: (ref:string)=>void): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
| `visit` | 否 | `(ref:string)=>void` | — |

## archiveAssets

导出接口 · 源码第 55 行。

```ts
export function archiveAssets(payload: unknown, available: readonly SceneArchiveAsset[]): SceneArchiveAsset[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `payload` | 否 | `unknown` | — |
| `available` | 否 | `readonly SceneArchiveAsset[]` | — |

## remapArchiveAssets

导出接口 · 源码第 59 行。

```ts
export function remapArchiveAssets<T>(payload: T, assets: readonly SceneArchiveAsset[]): {value:T;assets:SceneArchiveAsset[]};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `payload` | 否 | `T` | — |
| `assets` | 否 | `readonly SceneArchiveAsset[]` | — |

## ArchiveStoryImport

导出接口 · 源码第 64 行。

```ts
export interface ArchiveStoryImport {
    warnings: string[];
    story: StoryWorkspace;
    resourceIds: Map<string, string>;
    entryIds: Map<string, string>;
    pages: Map<string, string>;
    documentIds: Map<string, string>;
    rewrite: (text: string) => string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `warnings` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `story` | 否 | `StoryWorkspace` | 见结构定义及所属功能文档 |
| `resourceIds` | 否 | `Map<string,string>` | 见结构定义及所属功能文档 |
| `entryIds` | 否 | `Map<string,string>` | 见结构定义及所属功能文档 |
| `pages` | 否 | `Map<string,string>` | 见结构定义及所属功能文档 |
| `documentIds` | 否 | `Map<string,string>` | 见结构定义及所属功能文档 |
| `rewrite` | 否 | `(text:string)=>string` | 见结构定义及所属功能文档 |

## importArchiveStory

导出接口 · 源码第 65 行。

```ts
export function importArchiveStory(source: StoryWorkspace, actorIds: Map<string,string>, oldScene: string, newScene: string, ownerId: string, newId?: ()=>string): ArchiveStoryImport;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `source` | 否 | `StoryWorkspace` | — |
| `actorIds` | 否 | `Map<string,string>` | — |
| `oldScene` | 否 | `string` | — |
| `newScene` | 否 | `string` | — |
| `ownerId` | 否 | `string` | — |
| `newId` | 是 | `()=>string` | ()=>crypto.randomUUID() |

## mergeArchiveStory

导出接口 · 源码第 86 行。

```ts
export function mergeArchiveStory(target: StoryWorkspace|undefined, source: StoryWorkspace): StoryWorkspace;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `target` | 否 | `StoryWorkspace&#124;undefined` | — |
| `source` | 否 | `StoryWorkspace` | — |

## remapArchiveFeatures

导出接口 · 源码第 91 行。

```ts
export function remapArchiveFeatures(features: SceneFeatures|undefined, refs: ArchiveStoryImport, oldScene: string, warnings: string[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `refs` | 否 | `ArchiveStoryImport` | — |
| `oldScene` | 否 | `string` | — |
| `warnings` | 否 | `string[]` | — |

## cleanArchiveFeatures

导出接口 · 源码第 98 行。

Keep authored object ids for dependency resolution; discard runtime knowledge and playback.

```ts
export function cleanArchiveFeatures(features: SceneFeatures|undefined): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
