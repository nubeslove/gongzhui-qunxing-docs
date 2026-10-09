# game/packages/contracts/src/validation.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## isRecord

导出接口 · 源码第 2 行。

Reusable wire-boundary guards. No browser, database or rules dependencies.

```ts
export function isRecord(value: unknown): value is Record<string, unknown>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## isFiniteNumber

导出接口 · 源码第 5 行。

```ts
export function isFiniteNumber(value: unknown): value is number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## isInteger

导出接口 · 源码第 8 行。

```ts
export function isInteger(value: unknown, min?: number, max?: number): value is number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
| `min` | 是 | `number` | 0 |
| `max` | 是 | `number` | Number.MAX_SAFE_INTEGER |

## isId

导出接口 · 源码第 11 行。

```ts
export function isId(value: unknown): value is string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## isText

导出接口 · 源码第 15 行。

```ts
export function isText(value: unknown, max?: number): value is string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
| `max` | 是 | `number` | 1000 |
