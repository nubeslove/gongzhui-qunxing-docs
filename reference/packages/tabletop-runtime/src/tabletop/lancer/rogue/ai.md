# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/ai.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {snapGridPoint,lancerObjectId,type LancerCombatIntent,type LancerCombatUnit,type ManualTable,type ManualToken} from '@aelzerant/contracts';
import {lancerDistance,lancerPosition,lancerTerrainCover,lancerMovementCost} from '@aelzerant/game-core';
import {resolveArenaMap} from './encounters';
import {ARENA_ENEMIES,type ArenaEnemy} from './enemies';
import {scenarioDefinition,scenarioPoints} from './scenarios';
import {inArenaHazard} from './objectives';
```
</details>

## arenaPathRoute

导出接口 · 源码第 11 行。

Grid search can move away from the goal to get around cover, unlike greedy pursuit.

```ts
export function arenaPathRoute(t: ManualTable, origin: ManualToken, goal: {x:number;y:number}, avoidDanger?: boolean): {x:number;y:number;z:number}[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `origin` | 否 | `ManualToken` | — |
| `goal` | 否 | `{x:number;y:number}` | — |
| `avoidDanger` | 是 | `boolean` | true |

## arenaPathStep

导出接口 · 源码第 28 行。

```ts
export function arenaPathStep(t: ManualTable, origin: ManualToken, goal: {x:number;y:number}, avoidDanger?: boolean): { x: number; y: number; z: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `origin` | 否 | `ManualToken` | — |
| `goal` | 否 | `{x:number;y:number}` | — |
| `avoidDanger` | 是 | `boolean` | true |

## arenaAIAction

导出接口 · 源码第 29 行。

```ts
export function arenaAIAction(t: ManualTable, u: LancerCombatUnit, attempt: (i:LancerCombatIntent)=>boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `attempt` | 否 | `(i:LancerCombatIntent)=>boolean` | — |
