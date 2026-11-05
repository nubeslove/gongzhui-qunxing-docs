# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/enemies.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {lancerNpcTokenAppearance} from '../tokenAppearance';
import {snapGridPoint,type LancerCombatSystem,type LancerCombatWeapon,type LancerCustomAction,type LancerNpcProfile,type ManualTable,type ManualToken} from '@aelzerant/contracts';
import {createLancerNpc,lancerNpcUnit,lancerPosition} from '@aelzerant/game-core';
import {resolveArenaMap} from './encounters';
import {scenarioDefinition} from './scenarios';
```
</details>

## ARENA_AUTHORITY

导出接口 · 源码第 6 行。

```ts
export const ARENA_AUTHORITY = 'lancer-arena-system';
```

## ArenaEnemy

导出接口 · 源码第 21 行。

```ts
export type ArenaEnemy = keyof typeof ARENA_ENEMIES;
```

## arenaEnemySystems

导出接口 · 源码第 23 行。

```ts
export function arenaEnemySystems(key: string, tier: number): LancerCombatSystem[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `key` | 否 | `string` | — |
| `tier` | 否 | `number` | — |

## spawnArenaEnemy

导出接口 · 源码第 27 行。

```ts
export function spawnArenaEnemy(t: ManualTable, index: number, key: ArenaEnemy, options?: {grunt?:boolean;elite?:boolean;boss?:boolean;target?:boolean;reinforcement?:boolean}): import("@source/packages/contracts/src/lancer-combat").LancerCombatUnit | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `index` | 否 | `number` | — |
| `key` | 否 | `ArenaEnemy` | — |
| `options` | 是 | `{grunt?:boolean;elite?:boolean;boss?:boolean;target?:boolean;reinforcement?:boolean}` | {} |

## arenaInitialRoster

导出接口 · 源码第 40 行。

```ts
export function arenaInitialRoster(t: ManualTable): {key:ArenaEnemy;grunt?:boolean;elite?:boolean;boss?:boolean;target?:boolean}[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
