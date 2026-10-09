# game/packages/contracts/src/inline-roll.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseDiceExpression,type WorldRoll} from './world-dice';
import type {RollMode} from './world-conversation';
```
</details>

## InlineRoll

导出接口 · 源码第 4 行。

```ts
export interface InlineRoll {
    start: number;
    end: number;
    kind: 'immediate' | 'deferred';
    expression: string;
    description: string;
    label?: string;
    mode?: RollMode;
    roll?: WorldRoll;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `start` | 否 | `number` | 见结构定义及所属功能文档 |
| `end` | 否 | `number` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'immediate'&#124;'deferred'` | 见结构定义及所属功能文档 |
| `expression` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 是 | `string` | 见结构定义及所属功能文档 |
| `mode` | 是 | `RollMode` | 见结构定义及所属功能文档 |
| `roll` | 是 | `WorldRoll` | 见结构定义及所属功能文档 |

## describedRoll

导出接口 · 源码第 5 行。

```ts
export function describedRoll(source: string): {expression:string;description:string};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `source` | 否 | `string` | — |

## InlineRollSource

导出接口 · 源码第 6 行。

```ts
export interface InlineRollSource {
    start: number;
    end: number;
    body: string;
    label?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `start` | 否 | `number` | 见结构定义及所属功能文档 |
| `end` | 否 | `number` | 见结构定义及所属功能文档 |
| `body` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 是 | `string` | 见结构定义及所属功能文档 |

## inlineRollSources

导出接口 · 源码第 8 行。

Locate outer brackets without confusing a die's [flavor] with the closing ]].

```ts
export function inlineRollSources(source: string, singleLine?: boolean, decodeLabel?: (value: string) => string): InlineRollSource[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `source` | 否 | `string` | — |
| `singleLine` | 是 | `boolean` | false |
| `decodeLabel` | 是 | `(value: string) => string` | (value:string)=>value |

## inlineRolls

导出接口 · 源码第 17 行。

Message spans are immutable source offsets. Rendering never evaluates a roll.

```ts
export function inlineRolls(source: string): InlineRoll[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `source` | 否 | `string` | — |

## inlinePlainText

导出接口 · 源码第 29 行。

```ts
export function inlinePlainText(source: string, rows?: readonly InlineRoll[]): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `source` | 否 | `string` | — |
| `rows` | 是 | `readonly InlineRoll[]` | [] |
