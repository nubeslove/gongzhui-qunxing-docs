# game/packages/tabletop-runtime/src/tabletop/pendingMovement.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualTable,MovementPoint} from '@aelzerant/contracts';
```
</details>

## pendingMovement

导出接口 · 源码第 3 行。

Reactions pause a route; the next authority result can commit its remaining steps.

```ts
export function pendingMovement(table: ManualTable): {id:string;points:MovementPoint[]}|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
