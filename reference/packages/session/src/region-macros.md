# game/packages/session/src/region-macros.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyStory,REGION_EVENTS,canonicalJson,type RegionNotice,type SceneFeatures,type StoryWorkspace} from '@aelzerant/contracts';
import {applyStoryCommand,type StoryContext} from './story-workspace';
import {appendRegionNotices} from './region-story';
```
</details>

## validateRegionMacros

导出接口 · 源码第 12 行。

Only changed bindings are checked on edits; an unrelated command must still be able to repair a stale binding.

```ts
export function validateRegionMacros(story: StoryWorkspace|undefined, after: SceneFeatures|undefined, before?: SceneFeatures): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace&#124;undefined` | — |
| `after` | 否 | `SceneFeatures&#124;undefined` | — |
| `before` | 是 | `SceneFeatures` | — |

## applyRegionEffects

导出接口 · 源码第 19 行。

Called on the same candidate as the originating world command. No renderer or background replay.

```ts
export function applyRegionEffects(story: StoryWorkspace|undefined, effects: RegionNotice[], context: Omit<StoryContext,'id'|'senderId'>, sceneId: string): StoryWorkspace|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace&#124;undefined` | — |
| `effects` | 否 | `RegionNotice[]` | — |
| `context` | 否 | `Omit<StoryContext,'id'&#124;'senderId'>` | — |
| `sceneId` | 否 | `string` | — |
