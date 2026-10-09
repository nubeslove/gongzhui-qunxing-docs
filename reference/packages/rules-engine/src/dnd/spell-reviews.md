# game/packages/rules-engine/src/dnd/spell-reviews.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

## DndSpellReview

导出接口 · 源码第 2 行。

Each row follows a reading of the catalog rule. Missing engineering is never GM discretion.

```ts
export interface DndSpellReview {
    execution: string;
    adjudication?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `execution` | 否 | `string` | 见结构定义及所属功能文档 |
| `adjudication` | 是 | `string` | 见结构定义及所属功能文档 |
