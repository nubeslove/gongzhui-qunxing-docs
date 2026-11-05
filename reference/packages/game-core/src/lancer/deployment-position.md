# game/packages/game-core/src/lancer/deployment-position.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isHexGrid,regionFootprintCoverage,type SceneRegion} from '@aelzerant/contracts';
import {hexFootprint,hexVertices,templateCoveredPolygon,type SceneTemplate,type LancerCombatUnit,type LancerDeploymentZone,type ManualToken,type ManualMap} from '@aelzerant/contracts';
```
</details>

## lancerDeploymentFits

导出接口 · 源码第 4 行。

Each occupied cell belongs to the zone at >=50% area coverage, including boundary cells.

```ts
export function lancerDeploymentFits(map: ManualMap, token: Pick<ManualToken,'x'|'y'|'z'|'size'>, zone: LancerDeploymentZone): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `token` | 否 | `Pick<ManualToken,'x'&#124;'y'&#124;'z'&#124;'size'>` | — |
| `zone` | 否 | `LancerDeploymentZone` | — |

## lancerDeploymentAvailable

导出接口 · 源码第 20 行。

Capacity counts deployed combatants of this side, excluding the moving unit and entities.

```ts
export function lancerDeploymentAvailable(map: ManualMap, token: Pick<ManualToken,'id'|'x'|'y'|'z'|'size'>, zone: LancerDeploymentZone, units: readonly LancerCombatUnit[]): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `token` | 否 | `Pick<ManualToken,'id'&#124;'x'&#124;'y'&#124;'z'&#124;'size'>` | — |
| `zone` | 否 | `LancerDeploymentZone` | — |
| `units` | 否 | `readonly LancerCombatUnit[]` | — |
