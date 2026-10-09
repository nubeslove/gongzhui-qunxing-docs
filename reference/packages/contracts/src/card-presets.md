# game/packages/contracts/src/card-presets.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {blankWorldCard} from './card-definition';
import type {WorldCard} from './world-library';
```
</details>

## CardPresetTheme

导出接口 · 源码第 3 行。

```ts
export type CardPresetTheme = keyof typeof CARD_PRESET_THEMES;
```

## CardSuit

导出接口 · 源码第 5 行。

```ts
export type CardSuit = keyof typeof CARD_SUITS;
```

## builtinCardImage

导出接口 · 源码第 6 行。

```ts
export function builtinCardImage(value: string): {theme:CardPresetTheme;face:'back'|'joker-red'|'joker-black'|CardSuit;rank?:number}|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `string` | — |

## pokerPreset

导出接口 · 源码第 9 行。

```ts
export function pokerPreset(theme: CardPresetTheme, jokers: boolean, makeId: ()=>string): WorldCard[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `theme` | 否 | `CardPresetTheme` | — |
| `jokers` | 否 | `boolean` | — |
| `makeId` | 否 | `()=>string` | — |
