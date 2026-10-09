# game/packages/contracts/src/party-vision.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorControllers,type ActorAccessSource} from './actor-access';
import {storyGm,type StoryWorkspace} from './story';
import type {SceneFeatures} from './scene-features';
```
</details>

## partyVisionActor

导出接口 · 源码第 6 行。

A party source is a visible token controlled by a non-GM world member. GM-owned monsters are excluded.

```ts
export function partyVisionActor(actor: ActorAccessSource|undefined, playerId: string|undefined, hostId: string, story?: StoryWorkspace): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ActorAccessSource&#124;undefined` | — |
| `playerId` | 否 | `string&#124;undefined` | — |
| `hostId` | 否 | `string` | — |
| `story` | 是 | `StoryWorkspace` | — |

## focusedSceneFeatures

导出接口 · 源码第 11 行。

Player snapshots contain the party union plus per-token masks. A local selection can only narrow it.

```ts
export function focusedSceneFeatures(features: SceneFeatures|undefined, selected: string|null|undefined): SceneFeatures|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `selected` | 否 | `string&#124;null&#124;undefined` | — |

## inSceneVision

导出接口 · 源码第 16 行。

```ts
export function inSceneVision(features: SceneFeatures|undefined, point: {x:number;y:number}, size?: number): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `point` | 否 | `{x:number;y:number}` | — |
| `size` | 是 | `number` | 1 |
