# game/packages/tabletop-runtime/src/tabletop/lancer/catalogCorrections.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

## LANCER_CATALOG_CORRECTIONS

导出接口 · 源码第 2 行。

Audited fields that the PDF table extractor could not resolve. Keep source text untouched.

```ts
export const LANCER_CATALOG_CORRECTIONS: Record<string, {
    damage: string;
    range: string;
    tags: string;
    source: string;
}>;
```
