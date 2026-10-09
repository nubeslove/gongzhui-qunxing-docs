# game/packages/contracts/src/scene-sound.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as obj,storyId as id,storyText as text,storyNumber as num,storyList as list,storyEnum as one} from './story';
import {safeMedia} from './world-library';
import {sceneRayTransmission,type ScenePoint,type SceneFeatures} from './scene-features';
```
</details>

## SceneSound

导出接口 · 源码第 5 行。

```ts
export interface SceneSound extends ScenePoint {
    trigger?: keyof typeof SOUND_TRIGGERS;
    loop?: boolean;
    active?: boolean;
    id: string;
    name: string;
    src: string;
    radius: number;
    volume: number;
    easing: boolean;
    walls: boolean;
    muted: boolean;
    activationMin: number;
    activationMax: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `trigger` | 是 | `keyof typeof SOUND_TRIGGERS` | 见结构定义及所属功能文档 |
| `loop` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `active` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `src` | 否 | `string` | 见结构定义及所属功能文档 |
| `radius` | 否 | `number` | 见结构定义及所属功能文档 |
| `volume` | 否 | `number` | 见结构定义及所属功能文档 |
| `easing` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `walls` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `muted` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `activationMin` | 否 | `number` | 见结构定义及所属功能文档 |
| `activationMax` | 否 | `number` | 见结构定义及所属功能文档 |

## parseSceneSounds

导出接口 · 源码第 6 行。

```ts
export function parseSceneSounds(raw: unknown, width: number, height: number): SceneSound[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |

## sceneSoundGain

导出接口 · 源码第 11 行。

Multiple owned listeners use the loudest signal, never an additive gain.

```ts
export function sceneSoundGain(sound: SceneSound, features: SceneFeatures, listeners: readonly ScenePoint[]): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `sound` | 否 | `SceneSound` | — |
| `features` | 否 | `SceneFeatures` | — |
| `listeners` | 否 | `readonly ScenePoint[]` | — |

## activatedSceneSounds

导出接口 · 源码第 17 行。

Evaluate occupancy before filtering recipients. Hidden actors never need to be sent with the sound.

```ts
export function activatedSceneSounds(sounds: SceneSound[], tokens: readonly (ScenePoint&{player:boolean})[]): SceneSound[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `sounds` | 否 | `SceneSound[]` | — |
| `tokens` | 否 | `readonly (ScenePoint&{player:boolean})[]` | — |
