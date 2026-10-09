# game/packages/contracts/src/scene-navigation.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseSceneThumbnailSource,type SceneThumbnailSource} from './scene-thumbnail';
import {storyId,storyObject,storyText,type StoryWorkspace} from './story';
import {parseSceneKind,type SceneKind} from './world-calendar';
```
</details>

## SceneNavigationConfig

导出接口 · 源码第 4 行。

```ts
export interface SceneNavigationConfig {
    revision: number;
    navigation: boolean;
    players: boolean;
    name: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `navigation` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `players` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |

## SceneSummary

导出接口 · 源码第 5 行。

```ts
export interface SceneSummary {
    thumbnail?: SceneThumbnailSource;
    id: string;
    name: string;
    kind?: SceneKind;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `thumbnail` | 是 | `SceneThumbnailSource` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 是 | `SceneKind` | 见结构定义及所属功能文档 |

## defaultSceneNavigation

导出接口 · 源码第 6 行。

```ts
export const defaultSceneNavigation: (): SceneNavigationConfig;
```

## parseSceneNavigationConfig

导出接口 · 源码第 7 行。

```ts
export function parseSceneNavigationConfig(raw: unknown): SceneNavigationConfig;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseSceneNavigation

导出接口 · 源码第 11 行。

```ts
export function parseSceneNavigation(raw: unknown): Record<string,SceneNavigationConfig>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseSceneSummaries

导出接口 · 源码第 15 行。

```ts
export function parseSceneSummaries(raw: unknown): SceneSummary[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## canBrowseScene

导出接口 · 源码第 20 行。

```ts
export function canBrowseScene(story: StoryWorkspace|undefined, id: string, active: string|null|undefined, viewed: string|null|undefined, gm: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace&#124;undefined` | — |
| `id` | 否 | `string` | — |
| `active` | 否 | `string&#124;null&#124;undefined` | — |
| `viewed` | 否 | `string&#124;null&#124;undefined` | — |
| `gm` | 否 | `boolean` | — |

## sceneSummaries

导出接口 · 源码第 23 行。

```ts
export function sceneSummaries(rows: readonly SceneSummary[], story: StoryWorkspace|undefined, active: string|null|undefined, viewed: string|null|undefined, gm: boolean): SceneSummary[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `rows` | 否 | `readonly SceneSummary[]` | — |
| `story` | 否 | `StoryWorkspace&#124;undefined` | — |
| `active` | 否 | `string&#124;null&#124;undefined` | — |
| `viewed` | 否 | `string&#124;null&#124;undefined` | — |
| `gm` | 否 | `boolean` | — |

## SceneNavigationCommand

导出接口 · 源码第 26 行。

```ts
export type SceneNavigationCommand = {
    type: 'scene.view';
    sceneId: string;
} | {
    type: 'scene.pull';
    sceneId: string;
    users: string[];
} | {
    type: 'scene.navigation';
    sceneId: string;
    expectedRevision: number;
    value: SceneNavigationConfig;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'scene.view'` | 见结构定义及所属功能文档 |
| `分支1.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'scene.pull'` | 见结构定义及所属功能文档 |
| `分支2.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.users` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'scene.navigation'` | 见结构定义及所属功能文档 |
| `分支3.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.value` | 否 | `SceneNavigationConfig` | 见结构定义及所属功能文档 |
