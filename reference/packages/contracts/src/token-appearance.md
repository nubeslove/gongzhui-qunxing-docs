# game/packages/contracts/src/token-appearance.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {movementMode,type MovementMode} from './scene-environment';
import {parseTokenSenses,type TokenSenses} from './scene-obscurity';
import {storyObject,storyNumber,storyEnum,storyText} from './story';
```
</details>

## TokenDisplay

导出接口 · 源码第 6 行。

```ts
export type TokenDisplay = keyof typeof TOKEN_DISPLAY;
```

## TokenAppearance

导出接口 · 源码第 7 行。

```ts
export interface TokenAppearance {
    movementModes?: MovementMode[];
    senses?: TokenSenses;
    nameDisplay: TokenDisplay;
    barDisplay: TokenDisplay;
    bar1: string;
    bar2: string;
    scaleX: number;
    scaleY: number;
    mirrorX: boolean;
    mirrorY: boolean;
    tint: string;
    alpha: number;
    lockRotation: boolean;
    disposition: keyof typeof TOKEN_DISPOSITIONS;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `movementModes` | 是 | `MovementMode[]` | 见结构定义及所属功能文档 |
| `senses` | 是 | `TokenSenses` | 见结构定义及所属功能文档 |
| `nameDisplay` | 否 | `TokenDisplay` | 见结构定义及所属功能文档 |
| `barDisplay` | 否 | `TokenDisplay` | 见结构定义及所属功能文档 |
| `bar1` | 否 | `string` | 见结构定义及所属功能文档 |
| `bar2` | 否 | `string` | 见结构定义及所属功能文档 |
| `scaleX` | 否 | `number` | 见结构定义及所属功能文档 |
| `scaleY` | 否 | `number` | 见结构定义及所属功能文档 |
| `mirrorX` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `mirrorY` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `tint` | 否 | `string` | 见结构定义及所属功能文档 |
| `alpha` | 否 | `number` | 见结构定义及所属功能文档 |
| `lockRotation` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `disposition` | 否 | `keyof typeof TOKEN_DISPOSITIONS` | 见结构定义及所属功能文档 |

## defaultTokenAppearance

导出接口 · 源码第 8 行。

```ts
export function defaultTokenAppearance(): TokenAppearance;
```

## parseTokenAppearance

导出接口 · 源码第 9 行。

```ts
export function parseTokenAppearance(raw: unknown): TokenAppearance;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## tokenDisplayPermitted

导出接口 · 源码第 16 行。

Ownership gates delivery; selection/hover only determine local presentation afterward.

```ts
export function tokenDisplayPermitted(mode: TokenDisplay, owner: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `mode` | 否 | `TokenDisplay` | — |
| `owner` | 否 | `boolean` | — |

## tokenDisplayVisible

导出接口 · 源码第 17 行。

```ts
export function tokenDisplayVisible(mode: TokenDisplay, owner: boolean, selected: boolean, hover: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `mode` | 否 | `TokenDisplay` | — |
| `owner` | 否 | `boolean` | — |
| `selected` | 否 | `boolean` | — |
| `hover` | 否 | `boolean` | — |

## tokenDispositionColor

导出接口 · 源码第 18 行。

```ts
export function tokenDispositionColor(d: TokenAppearance['disposition']): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `d` | 否 | `TokenAppearance['disposition']` | — |

## TokenResourceBar

导出接口 · 源码第 19 行。

```ts
export interface TokenResourceBar {
    key: string;
    label: string;
    value: number;
    max: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `key` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `value` | 否 | `number` | 见结构定义及所属功能文档 |
| `max` | 否 | `number` | 见结构定义及所属功能文档 |

## TokenLabel

导出接口 · 源码第 20 行。

```ts
export interface TokenLabel {
    badges?: string[];
    id: string;
    name: string;
    owned: boolean;
    x: number;
    y: number;
    z: number;
    width: number;
    appearance: TokenAppearance;
    bars: TokenResourceBar[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `badges` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `owned` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 否 | `number` | 见结构定义及所属功能文档 |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `appearance` | 否 | `TokenAppearance` | 见结构定义及所属功能文档 |
| `bars` | 否 | `TokenResourceBar[]` | 见结构定义及所属功能文档 |

## projectTokenBars

导出接口 · 源码第 21 行。

```ts
export function projectTokenBars(appearance: TokenAppearance, owner: boolean, resources: TokenResourceBar[]): { key: string; label: string; value: number; max: number; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `appearance` | 否 | `TokenAppearance` | — |
| `owner` | 否 | `boolean` | — |
| `resources` | 否 | `TokenResourceBar[]` | — |

## TokenConfigurationValue

导出接口 · 源码第 23 行。

```ts
export interface TokenConfigurationValue {
    z?: number;
    name: string;
    image: string;
    rotation: number;
    appearance: TokenAppearance;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `z` | 是 | `number` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `image` | 否 | `string` | 见结构定义及所属功能文档 |
| `rotation` | 否 | `number` | 见结构定义及所属功能文档 |
| `appearance` | 否 | `TokenAppearance` | 见结构定义及所属功能文档 |

## tokenConfiguration

导出接口 · 源码第 24 行。

```ts
export function tokenConfiguration(token: {z?:number;name?:string;image?:string;rotation?:number;appearance?:TokenAppearance}, fallbackName?: string): TokenConfigurationValue;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `token` | 否 | `{z?:number;name?:string;image?:string;rotation?:number;appearance?:TokenAppearance}` | — |
| `fallbackName` | 是 | `string` | '' |

## parseTokenConfiguration

导出接口 · 源码第 25 行。

```ts
export function parseTokenConfiguration(raw: unknown): TokenConfigurationValue;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## TokenPresentation

导出接口 · 源码第 31 行。

```ts
export interface TokenPresentation extends TokenConfigurationValue {
    badges?: string[];
    owned: boolean;
    resources: TokenResourceBar[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `badges` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `owned` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `resources` | 否 | `TokenResourceBar[]` | 见结构定义及所属功能文档 |

## parseTokenPresentation

导出接口 · 源码第 32 行。

```ts
export function parseTokenPresentation(raw: unknown): TokenPresentation;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## assertTokenRotationChange

导出接口 · 源码第 35 行。

A locked token can change facing only after the same explicit edit unlocks it.

```ts
export function assertTokenRotationChange(before: {rotation?:number;appearance?:TokenAppearance}, after: {rotation?:number;appearance?:TokenAppearance}): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `before` | 否 | `{rotation?:number;appearance?:TokenAppearance}` | — |
| `after` | 否 | `{rotation?:number;appearance?:TokenAppearance}` | — |
