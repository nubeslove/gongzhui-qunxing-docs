# game/packages/contracts/src/wallet.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## WalletEntryKind

导出接口 · 源码第 1 行。

```ts
export type WalletEntryKind = 'daily' | 'adjustment' | 'reversal' | 'community' | 'spend';
```

## WalletBalance

导出接口 · 源码第 2 行。

```ts
export interface WalletBalance {
    accountId: string;
    balance: number;
    revision: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `accountId` | 否 | `string` | 见结构定义及所属功能文档 |
| `balance` | 否 | `number` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |

## WalletSummary

导出接口 · 源码第 3 行。

```ts
export interface WalletSummary extends WalletBalance {
    day: string;
    dailyClaimed: boolean;
    dailyAmount: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `day` | 否 | `string` | 见结构定义及所属功能文档 |
| `dailyClaimed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `dailyAmount` | 否 | `number` | 见结构定义及所属功能文档 |

## WalletEntry

导出接口 · 源码第 4 行。

```ts
export interface WalletEntry {
    id: string;
    sequence: number;
    accountId: string;
    amount: number;
    balanceAfter: number;
    kind: WalletEntryKind;
    actorId: string;
    reason: string;
    source: string;
    at: number;
    reverses?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `sequence` | 否 | `number` | 见结构定义及所属功能文档 |
| `accountId` | 否 | `string` | 见结构定义及所属功能文档 |
| `amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `balanceAfter` | 否 | `number` | 见结构定义及所属功能文档 |
| `kind` | 否 | `WalletEntryKind` | 见结构定义及所属功能文档 |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `reason` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |
| `reverses` | 是 | `string` | 见结构定义及所属功能文档 |

## WalletReceipt

导出接口 · 源码第 5 行。

```ts
export interface WalletReceipt {
    entry: WalletEntry;
    wallet: WalletBalance;
    replayed: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `entry` | 否 | `WalletEntry` | 见结构定义及所属功能文档 |
| `wallet` | 否 | `WalletBalance` | 见结构定义及所属功能文档 |
| `replayed` | 否 | `boolean` | 见结构定义及所属功能文档 |

## WalletAdjustment

导出接口 · 源码第 6 行。

```ts
export interface WalletAdjustment {
    requestId: string;
    amount: number;
    expectedRevision: number;
    reason: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `requestId` | 否 | `string` | 见结构定义及所属功能文档 |
| `amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `reason` | 否 | `string` | 见结构定义及所属功能文档 |

## WalletReversal

导出接口 · 源码第 7 行。

```ts
export interface WalletReversal {
    requestId: string;
    expectedRevision: number;
    reason: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `requestId` | 否 | `string` | 见结构定义及所属功能文档 |
| `expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `reason` | 否 | `string` | 见结构定义及所属功能文档 |

## DAILY_STARDUST

导出接口 · 源码第 8 行。

```ts
export const DAILY_STARDUST = 5;
```
