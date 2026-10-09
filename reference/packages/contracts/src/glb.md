# game/packages/contracts/src/glb.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## inspectGlb

导出接口 · 源码第 2 行。

Validate the bounded, self-contained subset we can render without fetching external files.

```ts
export function inspectGlb(bytes: ArrayBuffer): { triangles: number; nodes: number };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `bytes` | 否 | `ArrayBuffer` | — |
