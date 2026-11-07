# game/packages/tabletop-runtime/src/heartsea/tokenArtwork.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualTable} from '@aelzerant/contracts';
```
</details>

## syncHeartseaTokenArtwork

导出接口 · 源码第 3 行。

Updating a sheet token follows its unchanged instances; explicit per-token art stays intact.

```ts
export function syncHeartseaTokenArtwork(before: ManualTable, after: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `before` | 否 | `ManualTable` | — |
| `after` | 否 | `ManualTable` | — |
