# game/packages/tabletop-runtime/src/tabletop/lancer/reinforcements.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {validateSolsticeReinforcements} from './solsticeReinforcements';
import {validateWallflowerReinforcements} from './wallflowerReinforcements';
import {parseLancerBattle,storyGm,type ManualTable,type ManualToken} from '@aelzerant/contracts';
import {lancerPosition,lancerPlacementCandidates,lancerDeploymentFits} from '@aelzerant/game-core';
import {actorToken} from '../scene/editor';
import {combatUnit} from './combatAdapter';
import {applyTableEncounter} from '../encounterManager';
import {validateWinterReinforcements} from './winterReinforcements';
import {validateDustgraveReinforcements} from './dustgraveReinforcements';
```
</details>

## ReinforcementPlacement

导出接口 · 源码第 11 行。

```ts
export type ReinforcementPlacement = {
    actorId: string;
    x: number;
    y: number;
    z: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 否 | `number` | 见结构定义及所属功能文档 |

## applyLancerReinforcements

导出接口 · 源码第 14 行。

Derive stats from authoritative character cards, never from a submitted unit.

```ts
export function applyLancerReinforcements(table: ManualTable, sender: string, placements: ReinforcementPlacement[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `sender` | 否 | `string` | — |
| `placements` | 否 | `ReinforcementPlacement[]` | — |

## planLancerReinforcements

导出接口 · 源码第 45 行。

The preview uses the same size/collision rules as placement. No live data is mutated.

```ts
export function planLancerReinforcements(table: ManualTable, actorIds: string[], anchor: {x:number;y:number}, zoneId?: string): ReinforcementPlacement[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actorIds` | 否 | `string[]` | — |
| `anchor` | 否 | `{x:number;y:number}` | — |
| `zoneId` | 是 | `string` | — |
