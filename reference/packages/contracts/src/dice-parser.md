# game/packages/contracts/src/dice-parser.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {DICE_MATH_FUNCTIONS} from './dice-functions';
```
</details>

## DiceScalar

导出接口 · 源码第 2 行。

```ts
export type DiceScalar = number | DiceNode;
```

## DiceModifier

导出接口 · 源码第 3 行。

```ts
export interface DiceModifier {
    op: string;
    compare?: string;
    value?: DiceScalar;
    cap?: DiceScalar;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `op` | 否 | `string` | 见结构定义及所属功能文档 |
| `compare` | 是 | `string` | 见结构定义及所属功能文档 |
| `value` | 是 | `DiceScalar` | 见结构定义及所属功能文档 |
| `cap` | 是 | `DiceScalar` | 见结构定义及所属功能文档 |

## DiceNode

导出接口 · 源码第 4 行。

```ts
export type DiceNode = {
    kind: 'number';
    value: number;
} | {
    kind: 'variable';
    path: string;
} | {
    kind: 'binary';
    op: string;
    left: DiceNode;
    right: DiceNode;
} | {
    kind: 'unary';
    sign: number;
    node: DiceNode;
} | {
    kind: 'function';
    name: string;
    args: DiceNode[];
} | {
    kind: 'dice';
    count: DiceScalar;
    sides: DiceScalar | 'f' | 'c';
    mods: DiceModifier[];
} | {
    kind: 'pool';
    items: DiceNode[];
    mods: DiceModifier[];
} | {
    kind: 'flavor';
    node: DiceNode;
    description: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.kind` | 否 | `'number'` | 见结构定义及所属功能文档 |
| `分支1.value` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'variable'` | 见结构定义及所属功能文档 |
| `分支2.path` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.kind` | 否 | `'binary'` | 见结构定义及所属功能文档 |
| `分支3.op` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.left` | 否 | `DiceNode` | 见结构定义及所属功能文档 |
| `分支3.right` | 否 | `DiceNode` | 见结构定义及所属功能文档 |
| `分支4.kind` | 否 | `'unary'` | 见结构定义及所属功能文档 |
| `分支4.sign` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支4.node` | 否 | `DiceNode` | 见结构定义及所属功能文档 |
| `分支5.kind` | 否 | `'function'` | 见结构定义及所属功能文档 |
| `分支5.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.args` | 否 | `DiceNode[]` | 见结构定义及所属功能文档 |
| `分支6.kind` | 否 | `'dice'` | 见结构定义及所属功能文档 |
| `分支6.count` | 否 | `DiceScalar` | 见结构定义及所属功能文档 |
| `分支6.sides` | 否 | `DiceScalar&#124;'f'&#124;'c'` | 见结构定义及所属功能文档 |
| `分支6.mods` | 否 | `DiceModifier[]` | 见结构定义及所属功能文档 |
| `分支7.kind` | 否 | `'pool'` | 见结构定义及所属功能文档 |
| `分支7.items` | 否 | `DiceNode[]` | 见结构定义及所属功能文档 |
| `分支7.mods` | 否 | `DiceModifier[]` | 见结构定义及所属功能文档 |
| `分支8.kind` | 否 | `'flavor'` | 见结构定义及所属功能文档 |
| `分支8.node` | 否 | `DiceNode` | 见结构定义及所属功能文档 |
| `分支8.description` | 否 | `string` | 见结构定义及所属功能文档 |

## assertDiceDimension

导出接口 · 源码第 5 行。

```ts
export function assertDiceDimension(value: number, kind: 'count'|'sides'): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `number` | — |
| `kind` | 否 | `'count'&#124;'sides'` | — |

## parseDiceExpression

导出接口 · 源码第 53 行。

```ts
export function parseDiceExpression(expression: string): DiceNode;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `expression` | 否 | `string` | — |
