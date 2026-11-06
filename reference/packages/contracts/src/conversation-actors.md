# game/packages/contracts/src/conversation-actors.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {StoryWorkspace} from './story';
```
</details>

## sceneSpeakingActors

导出接口 · 源码第 4 行。

An active performance replaces map presence, including after its last actor leaves.

```ts
export function sceneSpeakingActors(story: StoryWorkspace, sceneId: string, viewedSceneId: string|null|undefined, tokens: readonly {actorId:string;hidden?:boolean}[], gm: boolean): Set<string>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `sceneId` | 否 | `string` | — |
| `viewedSceneId` | 否 | `string&#124;null&#124;undefined` | — |
| `tokens` | 否 | `readonly {actorId:string;hidden?:boolean}[]` | — |
| `gm` | 否 | `boolean` | — |

## performanceConversation

导出接口 · 源码第 12 行。

```ts
export function performanceConversation(story: StoryWorkspace): string|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
