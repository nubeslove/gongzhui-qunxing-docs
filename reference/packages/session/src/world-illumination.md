# game/packages/session/src/world-illumination.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { SceneMap, TileSpec } from "@aelzerant/contracts";
import { cellKey, gridDistance, hasLineOfSight, type GridPoint } from "@aelzerant/game-core";
```
</details>

## illuminationQuery

导出接口 · 源码第 5 行。

Per-projection index; never reuse across map edits or recipient transactions.

```ts
export function illuminationQuery(map: SceneMap): (point: GridPoint) => boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `SceneMap` | — |
