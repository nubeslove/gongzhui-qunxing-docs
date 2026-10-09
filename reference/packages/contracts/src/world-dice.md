# game/packages/contracts/src/world-dice.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseDiceExpression,assertDiceDimension,type DiceNode,type DiceScalar,type DiceModifier} from './dice-parser';
import {DICE_MATH_FUNCTIONS} from './dice-functions';
```
</details>

## 重新导出的模块

```ts
export type {DiceNode} from './dice-parser';
export {parseDiceExpression} from './dice-parser';
```

## DiceFace

导出接口 · 源码第 3 行。

Parsed dice language. No expression is evaluated as JavaScript.

```ts
export interface DiceFace {
    value: number;
    active: boolean;
    reason?: 'rerolled' | 'dropped';
    count?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `value` | 否 | `number` | 见结构定义及所属功能文档 |
| `active` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `reason` | 是 | `'rerolled'&#124;'dropped'` | 见结构定义及所属功能文档 |
| `count` | 是 | `number` | 见结构定义及所属功能文档 |

## DiceTerm

导出接口 · 源码第 4 行。

```ts
export interface DiceTerm {
    label: string;
    faces: DiceFace[];
    total: number;
    flavor?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `faces` | 否 | `DiceFace[]` | 见结构定义及所属功能文档 |
| `total` | 否 | `number` | 见结构定义及所属功能文档 |
| `flavor` | 是 | `string` | 见结构定义及所属功能文档 |

## WorldRoll

导出接口 · 源码第 5 行。

```ts
export interface WorldRoll {
    expression: string;
    total: number;
    terms: DiceTerm[];
    variables: Record<string, number>;
    external?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `expression` | 否 | `string` | 见结构定义及所属功能文档 |
| `total` | 否 | `number` | 见结构定义及所属功能文档 |
| `terms` | 否 | `DiceTerm[]` | 见结构定义及所属功能文档 |
| `variables` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `external` | 是 | `boolean` | 见结构定义及所属功能文档 |

## Modifier

内部依赖类型 · 源码第 9 行。

```ts
type Modifier = {
    op: string;
    compare?: string;
    value?: number;
    cap?: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `op` | 否 | `string` | 见结构定义及所属功能文档 |
| `compare` | 是 | `string` | 见结构定义及所属功能文档 |
| `value` | 是 | `number` | 见结构定义及所属功能文档 |
| `cap` | 是 | `number` | 见结构定义及所属功能文档 |

## evaluateDice

导出接口 · 源码第 11 行。

```ts
export function evaluateDice(expression: string, roll: (sides:number)=>number, variables?: Record<string,number>): WorldRoll;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `expression` | 否 | `string` | — |
| `roll` | 否 | `(sides:number)=>number` | — |
| `variables` | 是 | `Record<string,number>` | {} |
