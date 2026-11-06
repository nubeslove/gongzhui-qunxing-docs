# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/generationValidation.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {hexTokenNeighbours,type ManualMap,type ManualToken} from '@aelzerant/contracts';
import {lancerPlacementCandidates,lancerPosition,lancerDistance} from '@aelzerant/game-core';
```
</details>

## inspectArenaGroundRoutes

导出接口 · 源码第 5 行。

Content QA uses the game's actual hex footprints/collision; no flying or climbing shortcut.

```ts
export function inspectArenaGroundRoutes(map: ManualMap, objectives: {x:number;y:number}[], size?: number): { size: number; spawnCapacity: number; deployments: number; reachable: number; legal: number; north: number; flanks: boolean[]; reachableObjectives: boolean[]; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `objectives` | 否 | `{x:number;y:number}[]` | — |
| `size` | 是 | `number` | 3 |
