# game/packages/contracts/src/card-actions.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {documentAccess,type CardDeck,type WorldCard} from './world-library';
```
</details>

## CardDrawMethod

导出接口 · 源码第 2 行。

```ts
export type CardDrawMethod = 'top' | 'bottom' | 'random';
```

## CardDealCommand

导出接口 · 源码第 3 行。

```ts
export interface CardDealCommand {
    type: 'cards.deal';
    id: string;
    recipients: string[];
    count: number;
    method: CardDrawMethod;
    faceUp: boolean;
    expectedRevision: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 否 | `'cards.deal'` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `recipients` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `count` | 否 | `number` | 见结构定义及所属功能文档 |
| `method` | 否 | `CardDrawMethod` | 见结构定义及所属功能文档 |
| `faceUp` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |

## CardReturnCommand

导出接口 · 源码第 4 行。

```ts
export interface CardReturnCommand {
    type: 'cards.return';
    id: string;
    cardIds: string[];
    placement: 'top' | 'bottom';
    expectedRevision: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 否 | `'cards.return'` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `cardIds` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `placement` | 否 | `'top'&#124;'bottom'` | 见结构定义及所属功能文档 |
| `expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |

## canManageCard

导出接口 · 源码第 5 行。

```ts
export function canManageCard(deck: CardDeck, card: WorldCard, playerId: string, gm: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `deck` | 否 | `CardDeck` | — |
| `card` | 否 | `WorldCard` | — |
| `playerId` | 否 | `string` | — |
| `gm` | 否 | `boolean` | — |

## cardDealTotal

导出接口 · 源码第 6 行。

```ts
export function cardDealTotal(count: number, recipients: readonly string[], remaining: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `count` | 否 | `number` | — |
| `recipients` | 否 | `readonly string[]` | — |
| `remaining` | 否 | `number` | — |

## planCardDeal

导出接口 · 源码第 10 行。

A single plan gives cards to recipients in round-robin order and never mutates input.

```ts
export function planCardDeal(order: readonly string[], recipients: readonly string[], count: number, method: CardDrawMethod, roll: (sides:number)=>number): {order:string[];assignments:{cardId:string;recipient:string}[]};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `order` | 否 | `readonly string[]` | — |
| `recipients` | 否 | `readonly string[]` | — |
| `count` | 否 | `number` | — |
| `method` | 否 | `CardDrawMethod` | — |
| `roll` | 否 | `(sides:number)=>number` | — |
