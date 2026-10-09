# game/packages/contracts/src/scene-preload.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {SceneCanvasStyle} from './scene-canvas';
import {safeMedia} from './world-library';
import {storyObject,storyId,storyText,storyList,storyNumber,storyEnum} from './story';
import type {SceneFeatures} from './scene-features';
```
</details>

## ScenePreloadFile

导出接口 · 源码第 5 行。

```ts
export interface ScenePreloadFile {
    src: string;
    kind: 'image' | 'video';
    audience: 'all' | 'gm';
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `src` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'image'&#124;'video'` | 见结构定义及所属功能文档 |
| `audience` | 否 | `'all'&#124;'gm'` | 见结构定义及所属功能文档 |

## ScenePreloadReport

导出接口 · 源码第 6 行。

```ts
export interface ScenePreloadReport {
    playerId: string;
    loaded: number;
    failed: number;
    at: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `playerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `loaded` | 否 | `number` | 见结构定义及所属功能文档 |
| `failed` | 否 | `number` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |

## ScenePreload

导出接口 · 源码第 7 行。

```ts
export interface ScenePreload {
    id: string;
    sceneId: string;
    name: string;
    at: number;
    expiresAt: number;
    recipients: string[];
    files: ScenePreloadFile[];
    reports: ScenePreloadReport[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |
| `expiresAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `recipients` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `files` | 否 | `ScenePreloadFile[]` | 见结构定义及所属功能文档 |
| `reports` | 否 | `ScenePreloadReport[]` | 见结构定义及所属功能文档 |

## SCENE_PRELOAD_LIFETIME

导出接口 · 源码第 8 行。

```ts
export const SCENE_PRELOAD_LIFETIME = 180000;
```

## parseScenePreloads

导出接口 · 源码第 9 行。

```ts
export function parseScenePreloads(raw: unknown): ScenePreload[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## projectScenePreloads

导出接口 · 源码第 16 行。

```ts
export function projectScenePreloads(rows: ScenePreload[]|undefined, playerId: string|undefined, gm: boolean): ScenePreload[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `rows` | 否 | `ScenePreload[]&#124;undefined` | — |
| `playerId` | 否 | `string&#124;undefined` | — |
| `gm` | 否 | `boolean` | — |

## scenePreloadFiles

导出接口 · 源码第 19 行。

```ts
export function scenePreloadFiles(background: string|null|undefined, features: SceneFeatures|undefined, tokens: readonly{image?:string|null;hidden?:boolean}[], shared: (path:string)=>boolean, canvas?: SceneCanvasStyle): ScenePreloadFile[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `background` | 否 | `string&#124;null&#124;undefined` | — |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `tokens` | 否 | `readonly{image?:string&#124;null;hidden?:boolean}[]` | — |
| `shared` | 否 | `(path:string)=>boolean` | — |
| `canvas` | 是 | `SceneCanvasStyle` | — |

## ScenePreloadCommand

导出接口 · 源码第 31 行。

```ts
export type ScenePreloadCommand = {
    type: 'scene.preload';
    sceneId: string;
    recipients: string[];
    sharedPaths?: string[];
} | {
    type: 'scene.preload.report';
    id: string;
    loaded: number;
    failed: number;
} | {
    type: 'scene.preload.remove';
    id: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'scene.preload'` | 见结构定义及所属功能文档 |
| `分支1.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.recipients` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支1.sharedPaths` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'scene.preload.report'` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.loaded` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.failed` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'scene.preload.remove'` | 见结构定义及所属功能文档 |
| `分支3.id` | 否 | `string` | 见结构定义及所属功能文档 |
