# game/packages/game-core/src/lancer/scene-grid.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isHexGrid,snapHexToken,type ManualMap,type SceneGrid} from '@aelzerant/contracts';
import {lancerPosition} from './geometry';
```
</details>

## changeLancerMapGrid

导出接口 · 源码第 5 行。

Validate the entire conversion before changing the map; no partial token moves.

```ts
export function changeLancerMapGrid(map: ManualMap, grid: SceneGrid): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `grid` | 否 | `SceneGrid` | — |
