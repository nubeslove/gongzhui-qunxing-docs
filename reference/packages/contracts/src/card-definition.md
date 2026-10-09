# game/packages/contracts/src/card-definition.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as obj,storyNumber as num,storyEnum as one} from './story';
import type {CardDeck,CardFace,WorldCard} from './world-library';
```
</details>

## CardType

导出接口 · 源码第 5 行。

```ts
export type CardType = keyof typeof CARD_TYPES;
```

## CardDimensions

导出接口 · 源码第 6 行。

```ts
export interface CardDimensions {
    width: number;
    height: number;
    rotation: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `height` | 否 | `number` | 见结构定义及所属功能文档 |
| `rotation` | 否 | `number` | 见结构定义及所属功能文档 |

## parseCardDefinition

导出接口 · 源码第 8 行。

```ts
export function parseCardDefinition(raw: unknown): {type?:CardType;dimensions?:CardDimensions;useDeckBack?:boolean};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## cardBack

导出接口 · 源码第 11 行。

```ts
export function cardBack(deck: CardDeck, card: WorldCard): CardFace;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `deck` | 否 | `CardDeck` | — |
| `card` | 否 | `WorldCard` | — |

## concealCardFace

导出接口 · 源码第 12 行。

```ts
export function concealCardFace(card: WorldCard): WorldCard;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `card` | 否 | `WorldCard` | — |

## cardImageGeometry

导出接口 · 源码第 13 行。

```ts
export function cardImageGeometry(card: WorldCard): { ratio: number; imageWidth: number; imageHeight: number; rotation: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `card` | 否 | `WorldCard` | — |

## blankWorldCard

导出接口 · 源码第 14 行。

```ts
export function blankWorldCard(id: string): WorldCard;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |
