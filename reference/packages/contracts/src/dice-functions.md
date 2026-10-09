# game/packages/contracts/src/dice-functions.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## DiceMathFunction

内部依赖类型 · 源码第 1 行。

```ts
interface DiceMathFunction {
    min: number;
    max: number;
    run: (...values: number[]) => number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `min` | 否 | `number` | 见结构定义及所属功能文档 |
| `max` | 否 | `number` | 见结构定义及所属功能文档 |
| `run` | 否 | `(...values:number[])=>number` | 见结构定义及所属功能文档 |
