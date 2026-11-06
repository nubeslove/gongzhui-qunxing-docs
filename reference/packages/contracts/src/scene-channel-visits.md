# game/packages/contracts/src/scene-channel-visits.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyId,storyList,storyObject,storyText,type StoryWorkspace} from './story';
```
</details>

## SceneChannelVisits

导出接口 · 源码第 2 行。

```ts
export type SceneChannelVisits = Record<string, {
    id: string;
    name: string;
}[]>;
```

## parseSceneChannelVisits

导出接口 · 源码第 3 行。

```ts
export function parseSceneChannelVisits(raw: unknown): SceneChannelVisits;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## recordSceneChannelVisit

导出接口 · 源码第 8 行。

Called by authority transitions; never accepts visit claims from a client.

```ts
export function recordSceneChannelVisit(story: StoryWorkspace, user: string, scene: {id:string;name:string}|undefined): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `user` | 否 | `string` | — |
| `scene` | 否 | `{id:string;name:string}&#124;undefined` | — |

## sceneConversationChannels

导出接口 · 源码第 15 行。

```ts
export function sceneConversationChannels(story: StoryWorkspace, user: string, scenes: readonly {id:string;name:string}[], current?: string, gm?: boolean): { id: string; name: string; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `user` | 否 | `string` | — |
| `scenes` | 否 | `readonly {id:string;name:string}[]` | — |
| `current` | 是 | `string` | — |
| `gm` | 是 | `boolean` | false |
