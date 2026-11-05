# game/packages/contracts/src/progress-directory.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyDocumentDirectory,parseDocumentDirectory,type DocumentDirectory} from './document-directory';
import type {StoryWorkspace} from './story';
```
</details>

## ProgressKind

导出接口 · 源码第 4 行。

```ts
export type ProgressKind = 'quest' | 'event';
```

## ProgressDirectories

导出接口 · 源码第 5 行。

```ts
export type ProgressDirectories = Partial<Record<ProgressKind, DocumentDirectory>>;
```

## ProgressDirectoryCommand

导出接口 · 源码第 6 行。

```ts
export type ProgressDirectoryCommand = {
    type: 'progress.directory';
    kind: ProgressKind;
    directory: DocumentDirectory;
    expectedRevision: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 否 | `'progress.directory'` | 见结构定义及所属功能文档 |
| `kind` | 否 | `ProgressKind` | 见结构定义及所属功能文档 |
| `directory` | 否 | `DocumentDirectory` | 见结构定义及所属功能文档 |
| `expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |

## parseProgressDirectories

导出接口 · 源码第 8 行。

```ts
export function parseProgressDirectories(raw: unknown, quests: Set<string>, events: Set<string>): ProgressDirectories;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `quests` | 否 | `Set<string>` | — |
| `events` | 否 | `Set<string>` | — |

## progressDirectory

导出接口 · 源码第 15 行。

```ts
export function progressDirectory(story: StoryWorkspace, kind: ProgressKind): DocumentDirectory;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `kind` | 否 | `ProgressKind` | — |
