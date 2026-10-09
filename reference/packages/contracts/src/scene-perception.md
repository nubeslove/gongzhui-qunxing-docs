# game/packages/contracts/src/scene-perception.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {changedDoorState,parseDoorIntent} from './scene-door';
import {publicSceneNotes} from './scene-note';
import {sceneVisibleCells,sceneRayBlocked} from './scene-features';
import type {StoryEntry} from './story';
import {regionMovementCells} from './region-movement';
import {sceneCellLit} from './scene-features';
import {sceneSoundGain} from './scene-sound';
import {exploredFor} from './scene-exploration';
import type {SceneFeatures,SceneWall,SceneLight,ScenePoint} from './scene-features';
```
</details>

## WallChannel

导出接口 · 源码第 11 行。

```ts
export type WallChannel = keyof typeof WALL_CHANNELS;
```

## WallRestriction

导出接口 · 源码第 13 行。

```ts
export interface WallRestriction {
    mode: keyof typeof WALL_RESTRICTIONS;
    threshold: number;
    attenuation: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `mode` | 否 | `keyof typeof WALL_RESTRICTIONS` | 见结构定义及所属功能文档 |
| `threshold` | 否 | `number` | 见结构定义及所属功能文档 |
| `attenuation` | 否 | `boolean` | 见结构定义及所属功能文档 |

## wallPreset

导出接口 · 源码第 15 行。

```ts
export function wallPreset(w: SceneWall, preset: keyof typeof WALL_PRESETS): SceneWall;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `w` | 否 | `SceneWall` | — |
| `preset` | 否 | `keyof typeof WALL_PRESETS` | — |

## wallRayRestriction

导出接口 · 源码第 24 行。

```ts
export function wallRayRestriction(w: SceneWall, a: ScenePoint, _hit: ScenePoint, channel: WallChannel, target?: ScenePoint, range?: number): number|'limited';
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `w` | 否 | `SceneWall` | — |
| `a` | 否 | `ScenePoint` | — |
| `_hit` | 否 | `ScenePoint` | — |
| `channel` | 否 | `WallChannel` | — |
| `target` | 是 | `ScenePoint` | — |
| `range` | 是 | `number` | Infinity |

## lightActive

导出接口 · 源码第 41 行。

```ts
export function lightActive(light: SceneLight, features: SceneFeatures): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `light` | 否 | `SceneLight` | — |
| `features` | 否 | `SceneFeatures` | — |

## lightReaches

导出接口 · 源码第 42 行。

```ts
export function lightReaches(light: SceneLight, p: ScenePoint): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `light` | 否 | `SceneLight` | — |
| `p` | 否 | `ScenePoint` | — |

## doorChange

导出接口 · 源码第 49 行。

```ts
export function doorChange(features: SceneFeatures|undefined, id: string, gm: boolean, observers: ScenePoint[], intent?: unknown): SceneFeatures;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `id` | 否 | `string` | — |
| `gm` | 否 | `boolean` | — |
| `observers` | 否 | `ScenePoint[]` | — |
| `intent` | 是 | `unknown` | — |

## publicSceneFeatures

导出接口 · 源码第 54 行。

```ts
export function publicSceneFeatures(features: SceneFeatures, listeners?: readonly ScenePoint[], playerId?: string, dimensions?: {width:number;height:number}, entries?: readonly StoryEntry[], visionCells?: Set<string>): SceneFeatures;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures` | — |
| `listeners` | 是 | `readonly ScenePoint[]` | [] |
| `playerId` | 是 | `string` | — |
| `dimensions` | 是 | `{width:number;height:number}` | — |
| `entries` | 是 | `readonly StoryEntry[]` | [] |
| `visionCells` | 是 | `Set<string>` | — |
