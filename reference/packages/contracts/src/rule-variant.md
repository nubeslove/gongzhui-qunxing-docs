# game/packages/contracts/src/rule-variant.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {GameSystemId} from './systems';
```
</details>

## RuleVariant

导出接口 · 源码第 3 行。

```ts
export type RuleVariant = {
    id: 'terra-walker';
    version: '0.9.1';
    base: '2024';
} | typeof NEW_UTOPIA_VARIANT;
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.id` | 否 | `'terra-walker'` | 见结构定义及所属功能文档 |
| `分支1.version` | 否 | `'0.9.1'` | 见结构定义及所属功能文档 |
| `分支1.base` | 否 | `'2024'` | 见结构定义及所属功能文档 |

## parseRuleVariant

导出接口 · 源码第 5 行。

Identity is persisted and projected, never inferred from a client theme.

```ts
export function parseRuleVariant(raw: unknown, system: GameSystemId): RuleVariant|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `system` | 否 | `GameSystemId` | — |
