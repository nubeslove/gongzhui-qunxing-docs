# game/packages/rules-engine/src/aaf.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { AafCatalog, AafCell, AafCharacter, AafDirection, AafItemInstance, AafPlacement, AafRange, AafRotation, AafTalentNode } from '@aelzerant/contracts';
import {aafShareHand} from './aaf-character';
```
</details>

## aafTpTotal

导出接口 · 源码第 4 行。

```ts
export const aafTpTotal: (level: number): number;
```

## aafBoardSize

导出接口 · 源码第 5 行。

```ts
export const aafBoardSize: (level: number): { columns: number; rows: number; };
```

## aafTpSpent

导出接口 · 源码第 6 行。

```ts
export const aafTpSpent: (actor: AafCharacter): number;
```

## aafTalentReason

导出接口 · 源码第 7 行。

```ts
export function aafTalentReason(actor: AafCharacter, node: AafTalentNode): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `AafCharacter` | — |
| `node` | 否 | `AafTalentNode` | — |

## aafRefund

导出接口 · 源码第 14 行。

```ts
export function aafRefund(actor: AafCharacter, id: string): AafCharacter['learned'];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `AafCharacter` | — |
| `id` | 否 | `string` | — |

## aafCellKey

导出接口 · 源码第 19 行。

```ts
export const aafCellKey: (p: AafCell): string;
```

## aafShapeSize

导出接口 · 源码第 20 行。

```ts
export const aafShapeSize: (shape: AafCell[]): { width: number; height: number; };
```

## aafRotateCell

导出接口 · 源码第 21 行。

```ts
export function aafRotateCell(p: AafCell, rotation: AafRotation, shape: AafCell[]): AafCell;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `p` | 否 | `AafCell` | — |
| `rotation` | 否 | `AafRotation` | — |
| `shape` | 否 | `AafCell[]` | — |

## aafPlacedCells

导出接口 · 源码第 25 行。

```ts
export const aafPlacedCells: (item: AafItemInstance, p: AafPlacement): AafCell[];
```

## aafNeedsBlockedCell

导出接口 · 源码第 31 行。

```ts
export const aafNeedsBlockedCell: (actor: AafCharacter, item: AafItemInstance): boolean;
```

## aafBlockedCell

导出接口 · 源码第 32 行。

```ts
export function aafBlockedCell(item: AafItemInstance, placement: AafPlacement): AafCell|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `item` | 否 | `AafItemInstance` | — |
| `placement` | 否 | `AafPlacement` | — |

## aafBlockedOptions

导出接口 · 源码第 35 行。

```ts
export function aafBlockedOptions(item: AafItemInstance): AafCell[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `item` | 否 | `AafItemInstance` | — |

## aafItemActive

导出接口 · 源码第 39 行。

```ts
export function aafItemActive(actor: AafCharacter, item: AafItemInstance): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `AafCharacter` | — |
| `item` | 否 | `AafItemInstance` | — |

## aafLayoutErrors

导出接口 · 源码第 50 行。

```ts
export function aafLayoutErrors(actor: AafCharacter): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `AafCharacter` | — |

## aafMovePlacement

导出接口 · 源码第 98 行。

All placements use board coordinates; an entire socket moves as one transaction.

```ts
export function aafMovePlacement(actor: AafCharacter, id: string, next: AafPlacement): AafPlacement[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `AafCharacter` | — |
| `id` | 否 | `string` | — |
| `next` | 否 | `AafPlacement` | — |

## aafRangeCells

导出接口 · 源码第 121 行。

```ts
export function aafRangeCells(actor: AafCharacter, item: AafItemInstance, placement: AafPlacement, range: AafRange): AafCell[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `AafCharacter` | — |
| `item` | 否 | `AafItemInstance` | — |
| `placement` | 否 | `AafPlacement` | — |
| `range` | 否 | `AafRange` | — |

## AafResonanceLink

导出接口 · 源码第 140 行。

```ts
export interface AafResonanceLink {
    sourceId: string;
    targetId: string;
    rangeId: string;
    label: string;
    negative: boolean;
    active: boolean;
    reason: string;
    scope: 'equipment' | 'bearer';
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `sourceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `targetId` | 否 | `string` | 见结构定义及所属功能文档 |
| `rangeId` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `negative` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `active` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `reason` | 否 | `string` | 见结构定义及所属功能文档 |
| `scope` | 否 | `'equipment' &#124; 'bearer'` | 见结构定义及所属功能文档 |

## aafRangeAcceptsItem

导出接口 · 源码第 141 行。

```ts
export function aafRangeAcceptsItem(range: AafRange, source: AafItemInstance, target: AafItemInstance): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `range` | 否 | `AafRange` | — |
| `source` | 否 | `AafItemInstance` | — |
| `target` | 否 | `AafItemInstance` | — |

## aafResonanceLinks

导出接口 · 源码第 147 行。

Geometry and activation are separate; inactive reserved equipment still stops rays.

```ts
export function aafResonanceLinks(actor: AafCharacter): AafResonanceLink[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `AafCharacter` | — |

## aafCharacterErrors

导出接口 · 源码第 217 行。

```ts
export function aafCharacterErrors(actor: AafCharacter): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `AafCharacter` | — |

## aafRefreshResources

导出接口 · 源码第 222 行。

Explicit adoption of a revised catalog never grants TP or replenishes uses.

```ts
export function aafRefreshResources(actor: AafCharacter, catalog: AafCatalog): AafCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `AafCharacter` | — |
| `catalog` | 否 | `AafCatalog` | — |

## aafUsePool

导出接口 · 源码第 231 行。

A recitation charge is prepared at a real long rest, then spent from its own
physical item and blueprint ledger. Re-selecting targets never creates one.

```ts
export function aafUsePool(actor: AafCharacter, item: AafItemInstance): AafItemInstance|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `AafCharacter` | — |
| `item` | 否 | `AafItemInstance` | — |
