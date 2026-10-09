# game/packages/contracts/src/scene-obscurity.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {templatePathCuts,templateContains} from './scene-template';
import {dndFieldPathCuts,dndMagicSuppression} from './dnd-magic-fields';
import type {SceneFeatures,SceneLight,ScenePoint} from './scene-features';
import {lightActive,lightReaches} from './scene-perception';
import {storyObject,storyNumber,storyEnum,storyText} from './story';
import {sceneRayTransmission,sceneRayBlocked,sceneCellLit} from './scene-features';
```
</details>

## TokenSenses

导出接口 · 源码第 9 行。

```ts
export interface TokenSenses {
    darkvision: number;
    magicalDarkness: boolean;
    hearingBlindsight?: number;
    blindsight?: number;
    truesight?: number;
    seeInvisibility?: number;
    tremorsense?: number;
    contact?: 'auto' | 'ground' | 'air';
    surface?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `darkvision` | 否 | `number` | 见结构定义及所属功能文档 |
| `magicalDarkness` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `hearingBlindsight` | 是 | `number` | 见结构定义及所属功能文档 |
| `blindsight` | 是 | `number` | 见结构定义及所属功能文档 |
| `truesight` | 是 | `number` | 见结构定义及所属功能文档 |
| `seeInvisibility` | 是 | `number` | 见结构定义及所属功能文档 |
| `tremorsense` | 是 | `number` | 见结构定义及所属功能文档 |
| `contact` | 是 | `'auto'&#124;'ground'&#124;'air'` | 见结构定义及所属功能文档 |
| `surface` | 是 | `string` | 见结构定义及所属功能文档 |

## SceneObserver

导出接口 · 源码第 10 行。

```ts
export interface SceneObserver extends ScenePoint {
    senses?: TokenSenses;
    blinded?: boolean;
    deafened?: boolean;
    unaware?: boolean;
    contact?: string;
    sightRange?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `senses` | 是 | `TokenSenses` | 见结构定义及所属功能文档 |
| `blinded` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `deafened` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `unaware` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `contact` | 是 | `string` | 见结构定义及所属功能文档 |
| `sightRange` | 是 | `number` | 见结构定义及所属功能文档 |

## parseTokenSenses

导出接口 · 源码第 11 行。

```ts
export function parseTokenSenses(raw: unknown): TokenSenses;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## observerConditions

导出接口 · 源码第 12 行。

```ts
export function observerConditions(conditions: readonly string[]): { blinded: boolean; deafened: boolean; unaware: boolean; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `conditions` | 否 | `readonly string[]` | — |

## blindsightRange

导出接口 · 源码第 13 行。

```ts
export function blindsightRange(a: SceneObserver): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `SceneObserver` | — |

## sceneObserverSees

导出接口 · 源码第 14 行。

```ts
export function sceneObserverSees(features: SceneFeatures, a: SceneObserver, b: ScenePoint, range?: number, illuminated?: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures` | — |
| `a` | 否 | `SceneObserver` | — |
| `b` | 否 | `ScenePoint` | — |
| `range` | 是 | `number` | a.sightRange??features.vision |
| `illuminated` | 是 | `boolean` | false |

## seesInvisible

导出接口 · 源码第 21 行。

```ts
export function seesInvisible(features: SceneFeatures, a: SceneObserver, b: ScenePoint): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures` | — |
| `a` | 否 | `SceneObserver` | — |
| `b` | 否 | `ScenePoint` | — |

## tremorDetects

导出接口 · 源码第 25 行。

Tremorsense grants a location, never sight or explored map cells.

```ts
export function tremorDetects(a: SceneObserver, b: ScenePoint&{contact?:string}): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `SceneObserver` | — |
| `b` | 否 | `ScenePoint&{contact?:string}` | — |

## isSmoke

导出接口 · 源码第 26 行。

```ts
export const isSmoke: (light: SceneLight): boolean;
```

## obscurityCrosses

导出接口 · 源码第 28 行。

Nonzero segment intersection with the obscuring volume; touching its edge is not entering it.

```ts
export function obscurityCrosses(light: SceneLight, a: ScenePoint, b: ScenePoint): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `light` | 否 | `SceneLight` | — |
| `a` | 否 | `ScenePoint` | — |
| `b` | 否 | `ScenePoint` | — |

## sceneObscured

导出接口 · 源码第 35 行。

```ts
export function sceneObscured(features: SceneFeatures, a: SceneObserver, b: ScenePoint): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures` | — |
| `a` | 否 | `SceneObserver` | — |
| `b` | 否 | `ScenePoint` | — |

## magicalDarknessAt

导出接口 · 源码第 52 行。

```ts
export function magicalDarknessAt(features: SceneFeatures, p: ScenePoint): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures` | — |
| `p` | 否 | `ScenePoint` | — |
