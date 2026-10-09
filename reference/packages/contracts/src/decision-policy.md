# game/packages/contracts/src/decision-policy.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## DECISION_TIMEOUT_MS

导出接口 · 源码第 2 行。

Shared interaction policy, confirmed by the user on 2026-09-28.

```ts
export const DECISION_TIMEOUT_MS = 15000;
```

## TimedDecision

导出接口 · 源码第 3 行。

```ts
export interface TimedDecision {
    id: string;
    controllerId: string;
    title: string;
    optional: boolean;
    choices: {
        id: string;
        label: string;
    }[];
    createdAt: number;
    deadlineAt: number;
    pausedAt?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `controllerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `title` | 否 | `string` | 见结构定义及所属功能文档 |
| `optional` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `choices` | 否 | `{ id: string; label: string }[]` | 见结构定义及所属功能文档 |
| `choices.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `choices.[].label` | 否 | `string` | 见结构定义及所属功能文档 |
| `createdAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `deadlineAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `pausedAt` | 是 | `number` | 见结构定义及所属功能文档 |

## createTimedDecision

导出接口 · 源码第 8 行。

```ts
export function createTimedDecision(input: Omit<TimedDecision,'deadlineAt'|'pausedAt'>, timeoutMs?: number): TimedDecision;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `input` | 否 | `Omit<TimedDecision,'deadlineAt'&#124;'pausedAt'>` | — |
| `timeoutMs` | 是 | `number` | DECISION_TIMEOUT_MS |

## parseTimedDecision

导出接口 · 源码第 11 行。

```ts
export function parseTimedDecision(raw: unknown): TimedDecision;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## pauseTimedDecision

导出接口 · 源码第 22 行。

```ts
export function pauseTimedDecision(decision: TimedDecision, senderId: string, now: number): TimedDecision;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `decision` | 否 | `TimedDecision` | — |
| `senderId` | 否 | `string` | — |
| `now` | 否 | `number` | — |

## timedDecisionDefault

导出接口 · 源码第 28 行。

```ts
export function timedDecisionDefault(decision: TimedDecision): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `decision` | 否 | `TimedDecision` | — |

## timedDecisionAnswer

导出接口 · 源码第 29 行。

```ts
export function timedDecisionAnswer(decision: TimedDecision, senderId: string, choice: string|null, now: number): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `decision` | 否 | `TimedDecision` | — |
| `senderId` | 否 | `string` | — |
| `choice` | 否 | `string&#124;null` | — |
| `now` | 否 | `number` | — |

## timedDecisionExpired

导出接口 · 源码第 35 行。

```ts
export function timedDecisionExpired(decision: TimedDecision, now: number): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `decision` | 否 | `TimedDecision` | — |
| `now` | 否 | `number` | — |
