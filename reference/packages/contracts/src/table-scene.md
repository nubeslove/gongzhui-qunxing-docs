# game/packages/contracts/src/table-scene.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualTable} from './tabletop';
```
</details>

## tableScene

导出接口 · 源码第 3 行。

Reframe a complete table without changing world data, clocks or authority; used for recipient views.

```ts
export function tableScene(table: ManualTable, id: string): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `id` | 否 | `string` | — |
