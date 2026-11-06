# game/packages/contracts/src/lancer-runtime-fields.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## isLancerRuntimeField

导出接口 · 源码第 2 行。

Persistent play resources, distinct from authored build choices.

```ts
export function isLancerRuntimeField(key: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `key` | 否 | `string` | — |
