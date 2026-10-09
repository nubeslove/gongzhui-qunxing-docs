# game/packages/session/src/region-story.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyStory,REGION_EVENTS,type RegionNotice,type StoryWorkspace} from '@aelzerant/contracts';
```
</details>

## appendRegionNotices

导出接口 · 源码第 2 行。

```ts
export function appendRegionNotices(story: StoryWorkspace|undefined, notices: RegionNotice[], hostId: string, sceneId: string, now: number): StoryWorkspace|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace&#124;undefined` | — |
| `notices` | 否 | `RegionNotice[]` | — |
| `hostId` | 否 | `string` | — |
| `sceneId` | 否 | `string` | — |
| `now` | 否 | `number` | — |
