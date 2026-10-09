# game/packages/session/src/world-catalog.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { CatalogEntry, WorldHandler } from "./world-types";
import { assertGm, parseCatalogEntry, requireId, requireRecord } from "./world-validation";
```
</details>

## searchCatalog

导出接口 · 源码第 4 行。

```ts
export function searchCatalog(entries: Record<string, CatalogEntry>, query: string, kind?: CatalogEntry["kind"]): CatalogEntry[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `entries` | 否 | `Record<string, CatalogEntry>` | — |
| `query` | 否 | `string` | — |
| `kind` | 是 | `CatalogEntry["kind"]` | — |
