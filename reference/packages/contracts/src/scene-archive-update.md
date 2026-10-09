# game/packages/contracts/src/scene-archive-update.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject,storyNumber,type StoryWorkspace} from './story';
import {FEATURE_LAYERS,type FeatureLayer} from './scene-feature-edits';
import type {SceneFeatures} from './scene-features';
```
</details>

## SceneArchiveReplacement

导出接口 · 源码第 5 行。

```ts
export interface SceneArchiveReplacement {
    expectedRevision: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |

## SceneArchiveTarget

导出接口 · 源码第 6 行。

```ts
export interface SceneArchiveTarget {
    id: string;
    name: string;
    width: number;
    height: number;
    tokens: number;
    features?: SceneFeatures;
    busy?: string;
    blocks?: number;
    annotations?: number;
    deployment?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `height` | 否 | `number` | 见结构定义及所属功能文档 |
| `tokens` | 否 | `number` | 见结构定义及所属功能文档 |
| `features` | 是 | `SceneFeatures` | 见结构定义及所属功能文档 |
| `busy` | 是 | `string` | 见结构定义及所属功能文档 |
| `blocks` | 是 | `number` | 见结构定义及所属功能文档 |
| `annotations` | 是 | `number` | 见结构定义及所属功能文档 |
| `deployment` | 是 | `number` | 见结构定义及所属功能文档 |

## assertSceneArchiveReplacement

导出接口 · 源码第 8 行。

A replacement is explicitly reviewed against a whole-world revision.

```ts
export function assertSceneArchiveReplacement(scenes: SceneArchiveTarget[], story: StoryWorkspace|undefined, revision: number, id: string, raw: unknown): SceneArchiveReplacement;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `scenes` | 否 | `SceneArchiveTarget[]` | — |
| `story` | 否 | `StoryWorkspace&#124;undefined` | — |
| `revision` | 否 | `number` | — |
| `id` | 否 | `string` | — |
| `raw` | 否 | `unknown` | — |

## sceneArchiveCounts

导出接口 · 源码第 16 行。

```ts
export function sceneArchiveCounts(scene: SceneArchiveTarget): Record<string,number>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `scene` | 否 | `SceneArchiveTarget` | — |

## clearReplacedSceneLinks

导出接口 · 源码第 25 行。

Keep scene identity, directory placement, access and viewers; replace authored associations.

```ts
export function clearReplacedSceneLinks(story: StoryWorkspace|undefined, id: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace&#124;undefined` | — |
| `id` | 否 | `string` | — |
