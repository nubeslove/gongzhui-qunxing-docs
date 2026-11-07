# game/packages/contracts/src/cosmetics.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {WalletReceipt,WalletSummary} from './wallet';
```
</details>

## CosmeticCategory

导出接口 · 源码第 4 行。

```ts
export type CosmeticCategory = keyof typeof COSMETIC_CATEGORIES;
```

## CosmeticProduct

导出接口 · 源码第 5 行。

```ts
export interface CosmeticProduct {
    id: string;
    category: CosmeticCategory;
    name: string;
    price: number;
    description: string;
    motif: string;
    style: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `category` | 否 | `CosmeticCategory` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `price` | 否 | `number` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `motif` | 否 | `string` | 见结构定义及所属功能文档 |
| `style` | 否 | `string` | 见结构定义及所属功能文档 |

## CosmeticCatalog

导出接口 · 源码第 6 行。

```ts
export interface CosmeticCatalog {
    revision: number;
    products: readonly CosmeticProduct[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `products` | 否 | `readonly CosmeticProduct[]` | 见结构定义及所属功能文档 |

## COSMETIC_CATALOG

导出接口 · 源码第 8 行。

Prices are shared for previews; only the server catalog authorizes a purchase.

```ts
export const COSMETIC_CATALOG: CosmeticCatalog;
```

## CosmeticOwnership

导出接口 · 源码第 19 行。

```ts
export interface CosmeticOwnership {
    productId: string;
    acquiredAt: number;
    orderId: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `productId` | 否 | `string` | 见结构定义及所属功能文档 |
| `acquiredAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `orderId` | 否 | `string` | 见结构定义及所属功能文档 |

## CosmeticLoadout

导出接口 · 源码第 20 行。

```ts
export type CosmeticLoadout = Partial<Record<CosmeticCategory, string>>;
```

## CosmeticAccount

导出接口 · 源码第 21 行。

```ts
export interface CosmeticAccount {
    accountId: string;
    wallet: WalletSummary;
    inventory: CosmeticOwnership[];
    equipment: CosmeticLoadout;
    revision: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `accountId` | 否 | `string` | 见结构定义及所属功能文档 |
| `wallet` | 否 | `WalletSummary` | 见结构定义及所属功能文档 |
| `inventory` | 否 | `CosmeticOwnership[]` | 见结构定义及所属功能文档 |
| `equipment` | 否 | `CosmeticLoadout` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |

## CosmeticView

导出接口 · 源码第 22 行。

```ts
export interface CosmeticView {
    catalog: CosmeticCatalog;
    account: CosmeticAccount;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `catalog` | 否 | `CosmeticCatalog` | 见结构定义及所属功能文档 |
| `account` | 否 | `CosmeticAccount` | 见结构定义及所属功能文档 |

## CosmeticPurchase

导出接口 · 源码第 23 行。

```ts
export interface CosmeticPurchase {
    requestId: string;
    productId: string;
    catalogRevision: number;
    expectedWalletRevision: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `requestId` | 否 | `string` | 见结构定义及所属功能文档 |
| `productId` | 否 | `string` | 见结构定义及所属功能文档 |
| `catalogRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `expectedWalletRevision` | 否 | `number` | 见结构定义及所属功能文档 |

## CosmeticEquip

导出接口 · 源码第 24 行。

```ts
export interface CosmeticEquip {
    requestId: string;
    category: CosmeticCategory;
    productId: string | null;
    expectedRevision: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `requestId` | 否 | `string` | 见结构定义及所属功能文档 |
| `category` | 否 | `CosmeticCategory` | 见结构定义及所属功能文档 |
| `productId` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |

## CosmeticResult

导出接口 · 源码第 25 行。

```ts
export interface CosmeticResult extends CosmeticView {
    replayed: boolean;
    receipt?: WalletReceipt;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `replayed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `receipt` | 是 | `WalletReceipt` | 见结构定义及所属功能文档 |

## cosmeticProduct

导出接口 · 源码第 26 行。

```ts
export function cosmeticProduct(id: string|undefined, catalog?: CosmeticCatalog): CosmeticProduct | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string&#124;undefined` | — |
| `catalog` | 是 | `CosmeticCatalog` | COSMETIC_CATALOG |
