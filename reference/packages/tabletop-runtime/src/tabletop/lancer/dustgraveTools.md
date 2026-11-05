# game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveTools.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {hexFootprint,hexDistance,snapHexToken,lancerObjectToken,parseLancerBattle,storyGm,type ManualTable,type ManualToken,type LancerCombatUnit} from '@aelzerant/contracts';
import {lancerDistance,lancerPlacementCandidates,lancerPosition,lancerDeploymentFits,lancerFloor} from '@aelzerant/game-core';
import {applyHeat,drainLancer,stress} from '../../../../game-core/src/lancer/resolution';
import {condition,log} from '../../../../game-core/src/lancer/state';
import {lancerCheck} from '../../../../game-core/src/lancer/dice';
import {refreshDustgraveBoss} from '../../../../game-core/src/lancer/dustgrave';
import {actorToken} from '../scene/editor';
import {combatUnit,syncCombatCards} from './combatAdapter';
import {applyTableEncounter} from '../encounterManager';
```
</details>

## DustgraveCommand

导出接口 · 源码第 10 行。

```ts
export type DustgraveCommand = {
    action: 'conditional' | 'manifest' | 'mesmer' | 'clear-mesmer' | 'repair' | 'carry-start' | 'carry-drop' | 'deliver-core';
    unit?: string;
    objectId?: string;
    x?: number;
    y?: number;
    accuracy?: number;
    round?: number;
    turn?: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `action` | 否 | `'conditional'&#124;'manifest'&#124;'mesmer'&#124;'clear-mesmer'&#124;'repair'&#124;'carry-start'&#124;'carry-drop'&#124;'deliver-core'` | 见结构定义及所属功能文档 |
| `unit` | 是 | `string` | 见结构定义及所属功能文档 |
| `objectId` | 是 | `string` | 见结构定义及所属功能文档 |
| `x` | 是 | `number` | 见结构定义及所属功能文档 |
| `y` | 是 | `number` | 见结构定义及所属功能文档 |
| `accuracy` | 是 | `number` | 见结构定义及所属功能文档 |
| `round` | 是 | `number` | 见结构定义及所属功能文档 |
| `turn` | 是 | `number` | 见结构定义及所属功能文档 |

## dustgraveReserveAvailable

导出接口 · 源码第 12 行。

```ts
export function dustgraveReserveAvailable(table: ManualTable, actor: ManualTable['actors'][number]): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actor` | 否 | `ManualTable['actors'][number]` | — |

## applyDustgraveCommand

导出接口 · 源码第 17 行。

```ts
export function applyDustgraveCommand(table: ManualTable, sender: string, c: DustgraveCommand, random?: () => number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `sender` | 否 | `string` | — |
| `c` | 否 | `DustgraveCommand` | — |
| `random` | 是 | `() => number` | ()=>Math.random() |
