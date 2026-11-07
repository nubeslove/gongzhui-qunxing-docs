# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/enemies.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {lancerNpcTokenAppearance} from '../tokenAppearance';
import {snapGridPoint,type LancerCombatSystem,type LancerCombatWeapon,type LancerCustomAction,type LancerNpcProfile,type ManualTable,type ManualToken} from '@aelzerant/contracts';
import {createLancerNpc,lancerNpcUnit,lancerPosition} from '@aelzerant/game-core';
import {arenaMapForEncounter} from './encounters';
import {scenarioDefinition} from './scenarios';
```
</details>

## ARENA_AUTHORITY

导出接口 · 源码第 6 行。

```ts
export const ARENA_AUTHORITY = 'lancer-arena-system';
```

## ArenaEnemy

导出接口 · 源码第 33 行。

```ts
export type ArenaEnemy = keyof typeof ARENA_ENEMIES;
```

## arenaEnemySystems

导出接口 · 源码第 36 行。

Arena adaptations: these effects execute through the ordinary custom-system queue.

```ts
export function arenaEnemySystems(key: string, tier: number, veteran?: boolean): LancerCombatSystem[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `key` | 否 | `string` | — |
| `tier` | 否 | `number` | — |
| `veteran` | 是 | `boolean` | false |

## ArenaEnemySpawn

导出接口 · 源码第 65 行。

```ts
export interface ArenaEnemySpawn {
    key: ArenaEnemy;
    grunt?: boolean;
    veteran?: boolean;
    elite?: boolean;
    boss?: boolean;
    target?: boolean;
    reinforcement?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `key` | 否 | `ArenaEnemy` | 见结构定义及所属功能文档 |
| `grunt` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `veteran` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `elite` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `boss` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `target` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `reinforcement` | 是 | `boolean` | 见结构定义及所属功能文档 |

## spawnArenaEnemy

导出接口 · 源码第 66 行。

```ts
export function spawnArenaEnemy(t: ManualTable, index: number, key: ArenaEnemy, options?: Omit<ArenaEnemySpawn,'key'>): import("@source/packages/contracts/src/lancer-combat").LancerCombatUnit | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `index` | 否 | `number` | — |
| `key` | 否 | `ArenaEnemy` | — |
| `options` | 是 | `Omit<ArenaEnemySpawn,'key'>` | {} |

## arenaActivationCap

导出接口 · 源码第 93 行。

```ts
export function arenaActivationCap(t: ManualTable): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |

## arenaEncounterRoster

导出接口 · 源码第 98 行。

A fixed four-PC budget; actual player count never enters generation-two rosters.

```ts
export function arenaEncounterRoster(t: ManualTable): {initial:ArenaEnemySpawn[];reserve:ArenaEnemySpawn[]};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |

## arenaInitialRoster

导出接口 · 源码第 118 行。

```ts
export function arenaInitialRoster(t: ManualTable): ArenaEnemySpawn[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |

## arenaReinforcementPlan

导出接口 · 源码第 120 行。

Caller invokes only on mission wave triggers, then counts successful spawns.

```ts
export function arenaReinforcementPlan(t: ManualTable): ArenaEnemySpawn[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
