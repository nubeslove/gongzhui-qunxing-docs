# game/packages/contracts/src/heartsea.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## validateHeartseaFields

导出接口 · 源码第 2 行。

Narrative records use their own scales; they do not grant combat bonuses.

```ts
export function validateHeartseaFields(fields: Record<string,string>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `fields` | 否 | `Record<string,string>` | — |
