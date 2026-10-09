# game/packages/contracts/src/scene-exploration.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptySceneFeatures,parseSceneFeatures,sceneVisibleCells,type SceneFeatures,type ScenePoint} from './scene-features';
import {storyObject} from './story';
```
</details>

## ExplorationMode

导出接口 · 源码第 4 行。

```ts
export type ExplorationMode = keyof typeof EXPLORATION_MODES;
```

## PERCEPTION_FIELDS

导出接口 · 源码第 5 行。

```ts
export const PERCEPTION_FIELDS = ['fogImage', 'illumination', 'globalLightThreshold', 'fog', 'dark', 'vision', 'darknessLevel', 'exploration', 'unexploredColor', 'exploredColor'] as const;
```

## ScenePerceptionSettings

导出接口 · 源码第 6 行。

```ts
export type ScenePerceptionSettings = Pick<SceneFeatures, typeof PERCEPTION_FIELDS[number]>;
```

## ScenePerceptionEdit

导出接口 · 源码第 7 行。

```ts
export interface ScenePerceptionEdit {
    before: ScenePerceptionSettings;
    after: ScenePerceptionSettings;
    reset?: boolean;
    clearRevealed?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `before` | 否 | `ScenePerceptionSettings` | 见结构定义及所属功能文档 |
| `after` | 否 | `ScenePerceptionSettings` | 见结构定义及所属功能文档 |
| `reset` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `clearRevealed` | 是 | `boolean` | 见结构定义及所属功能文档 |

## scenePerceptionSettings

导出接口 · 源码第 8 行。

```ts
export function scenePerceptionSettings(f?: SceneFeatures): ScenePerceptionSettings;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `f` | 是 | `SceneFeatures` | emptySceneFeatures() |

## applyScenePerception

导出接口 · 源码第 9 行。

```ts
export function applyScenePerception(previous: SceneFeatures|undefined, raw: unknown, width: number, height: number): SceneFeatures;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `previous` | 否 | `SceneFeatures&#124;undefined` | — |
| `raw` | 否 | `unknown` | — |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |

## knownSceneCells

导出接口 · 源码第 16 行。

```ts
export function knownSceneCells(features: SceneFeatures|undefined): Set<string>|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |

## exploredFor

导出接口 · 源码第 17 行。

```ts
export function exploredFor(features: SceneFeatures|undefined, playerId?: string): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `playerId` | 是 | `string` | — |

## recordSceneExploration

导出接口 · 源码第 22 行。

Record only authority-computed sight. This does not make explored cells currently visible.

```ts
export function recordSceneExploration(features: SceneFeatures, width: number, height: number, observers: Readonly<Record<string,ScenePoint[]>>, current?: (playerId:string)=>Set<string>|null): SceneFeatures;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures` | — |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
| `observers` | 否 | `Readonly<Record<string,ScenePoint[]>>` | — |
| `current` | 是 | `(playerId:string)=>Set<string>&#124;null` | — |

## retainSceneExploration

导出接口 · 源码第 36 行。

Ordinary edits cannot forge or discard exploration. Explicit reset is handled by the authority.

```ts
export function retainSceneExploration(next: SceneFeatures|undefined, previous: SceneFeatures|undefined, width: number, height: number): SceneFeatures|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `next` | 否 | `SceneFeatures&#124;undefined` | — |
| `previous` | 否 | `SceneFeatures&#124;undefined` | — |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
