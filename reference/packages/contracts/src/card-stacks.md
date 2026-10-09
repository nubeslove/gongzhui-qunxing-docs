# game/packages/contracts/src/card-stacks.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as obj,storyId as id,storyList as list,storyEnum as one} from './story';
import type {CardDeck,LibraryDocument,WorldCard,WorldLibrary,AccessLevel} from './world-library';
import type {CardDrawMethod} from './card-actions';
```
</details>

## CardStackReference

导出接口 · 源码第 5 行。

```ts
export interface CardStackReference {
    id: string;
    deckId: string;
    cardId: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `deckId` | 否 | `string` | 见结构定义及所属功能文档 |
| `cardId` | 否 | `string` | 见结构定义及所属功能文档 |

## CardStackState

导出接口 · 源码第 6 行。

```ts
export interface CardStackState {
    type: 'hand' | 'pile';
    contents: CardStackReference[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 否 | `'hand'&#124;'pile'` | 见结构定义及所属功能文档 |
| `contents` | 否 | `CardStackReference[]` | 见结构定义及所属功能文档 |

## CardStackCommand

导出接口 · 源码第 7 行。

```ts
export type CardStackCommand = {
    type: 'cards.stack.deal';
    id: string;
    targets: string[];
    count: number;
    method: CardDrawMethod;
    faceUp: boolean;
    expectedRevision: number;
    targetRevisions: Record<string, number>;
} | {
    type: 'cards.stack.draw';
    id: string;
    source: string;
    count: number;
    method: CardDrawMethod;
    faceUp: boolean;
    expectedRevision: number;
    sourceRevision: number;
} | {
    type: 'cards.stack.pass';
    id: string;
    target: string;
    cardIds?: string[];
    count?: number;
    method?: CardDrawMethod;
    faceUp: boolean;
    expectedRevision: number;
    targetRevision: number;
} | {
    type: 'cards.stack.return';
    id: string;
    cardIds: string[];
    placement: 'top' | 'bottom';
    expectedRevision: number;
} | {
    type: 'cards.stack.shuffle';
    id: string;
    expectedRevision: number;
} | {
    type: 'cards.stack.flip';
    id: string;
    cardId: string;
    face: number;
    faceUp: boolean;
    expectedRevision: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'cards.stack.deal'` | 见结构定义及所属功能文档 |
| `分支1.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支1.count` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支1.method` | 否 | `CardDrawMethod` | 见结构定义及所属功能文档 |
| `分支1.faceUp` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支1.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支1.targetRevisions` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'cards.stack.draw'` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.source` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.count` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.method` | 否 | `CardDrawMethod` | 见结构定义及所属功能文档 |
| `分支2.faceUp` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支2.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.sourceRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'cards.stack.pass'` | 见结构定义及所属功能文档 |
| `分支3.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.cardIds` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支3.count` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支3.method` | 是 | `CardDrawMethod` | 见结构定义及所属功能文档 |
| `分支3.faceUp` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支3.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.targetRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支4.type` | 否 | `'cards.stack.return'` | 见结构定义及所属功能文档 |
| `分支4.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.cardIds` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支4.placement` | 否 | `'top'&#124;'bottom'` | 见结构定义及所属功能文档 |
| `分支4.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支5.type` | 否 | `'cards.stack.shuffle'` | 见结构定义及所属功能文档 |
| `分支5.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支6.type` | 否 | `'cards.stack.flip'` | 见结构定义及所属功能文档 |
| `分支6.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.cardId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.face` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支6.faceUp` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支6.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |

## cardStackType

导出接口 · 源码第 14 行。

```ts
export const cardStackType: (doc: CardDeck): "hand" | "pile" | "deck";
```

## parseCardStack

导出接口 · 源码第 15 行。

```ts
export function parseCardStack(raw: unknown): CardStackState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## resolveStackCard

导出接口 · 源码第 16 行。

```ts
export function resolveStackCard(library: WorldLibrary, reference: CardStackReference): {deck:CardDeck;card:WorldCard}|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `library` | 否 | `WorldLibrary` | — |
| `reference` | 否 | `CardStackReference` | — |

## validateCardStacks

导出接口 · 源码第 17 行。

```ts
export function validateCardStacks(documents: LibraryDocument[], projected?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `documents` | 否 | `LibraryDocument[]` | — |
| `projected` | 是 | `boolean` | false |

## stackCardAccess

导出接口 · 源码第 23 行。

Only the destination stack can reveal a card moved out of its source deck.

```ts
export function stackCardAccess(library: WorldLibrary, deck: CardDeck, card: WorldCard, access: (doc:CardDeck)=>AccessLevel): AccessLevel;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `library` | 否 | `WorldLibrary` | — |
| `deck` | 否 | `CardDeck` | — |
| `card` | 否 | `WorldCard` | — |
| `access` | 否 | `(doc:CardDeck)=>AccessLevel` | — |

## resetCardTemplate

导出接口 · 源码第 27 行。

Template copies never carry live source locations. Nonempty containers need a source bundle.

```ts
export function resetCardTemplate(doc: CardDeck, preserveInitialFaces?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `doc` | 否 | `CardDeck` | — |
| `preserveInitialFaces` | 是 | `boolean` | false |
