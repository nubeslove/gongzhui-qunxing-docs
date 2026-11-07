# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/encounters.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {ARENA_BIOMES,ARENA_SCALES,generatedArenaBlocks} from './generation';
import type {LancerRogueRun,ManualMap,RogueDanger,RogueEncounter,RogueBattlefieldRecipe} from '@aelzerant/contracts';
import {rogueRandom} from './resources';
import {arenaCoverLayout} from './mapLayouts';
import {scenarioDefinition,scenarioObjects,scenarioPoints,MISSION_FAMILIES} from './scenarios';
```
</details>

## ArenaMission

导出接口 · 源码第 6 行。

```ts
export type ArenaMission = 'hold' | 'escort' | 'control' | 'hunt' | 'shutdown' | 'boss';
```

## ArenaMap

导出接口 · 源码第 7 行。

```ts
export interface ArenaMap {
    generation?: RogueBattlefieldRecipe;
    id: string;
    name: string;
    mission: ArenaMission;
    width: number;
    height: number;
    variant: number;
    rounds: number;
    missionVersion?: 2;
    missionKey?: string;
    modifier?: RogueEncounter['modifier'];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `generation` | 是 | `RogueBattlefieldRecipe` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `mission` | 否 | `ArenaMission` | 见结构定义及所属功能文档 |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `height` | 否 | `number` | 见结构定义及所属功能文档 |
| `variant` | 否 | `number` | 见结构定义及所属功能文档 |
| `rounds` | 否 | `number` | 见结构定义及所属功能文档 |
| `missionVersion` | 是 | `2` | 见结构定义及所属功能文档 |
| `missionKey` | 是 | `string` | 见结构定义及所属功能文档 |
| `modifier` | 是 | `RogueEncounter['modifier']` | 见结构定义及所属功能文档 |

## ORDINARY_ARENA_MAPS

导出接口 · 源码第 11 行。

```ts
export const ORDINARY_ARENA_MAPS: ArenaMap[];
```

## ARENA_MAPS

导出接口 · 源码第 12 行。

```ts
export const ARENA_MAPS: ArenaMap[];
```

## compatibleArenaMissions

导出接口 · 源码第 14 行。

Six compatible families per layout; each family appears on twenty maps.

```ts
export function compatibleArenaMissions(m: ArenaMap): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `ArenaMap` | — |

## arenaMapForEncounter

导出接口 · 源码第 15 行。

```ts
export function arenaMapForEncounter(e: RogueEncounter): ArenaMap;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `e` | 否 | `RogueEncounter` | — |

## resolveArenaMap

导出接口 · 源码第 19 行。

```ts
export function resolveArenaMap(encounter: RogueEncounter): ArenaMap;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `encounter` | 否 | `RogueEncounter` | — |

## MISSION_NAMES

导出接口 · 源码第 24 行。

```ts
export const MISSION_NAMES: Record<ArenaMission, string>;
```

## missionBrief

导出接口 · 源码第 25 行。

```ts
export function missionBrief(m: ArenaMap): {task:string;objectives:string[];rules:string;rounds:number;missionVersion?:2;missionKey?:string;modifier?:RogueEncounter['modifier']};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `ArenaMap` | — |

## missionText

导出接口 · 源码第 28 行。

```ts
export function missionText(m: ArenaMap): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `ArenaMap` | — |

## encounterFor

导出接口 · 源码第 29 行。

```ts
export function encounterFor(run: LancerRogueRun, danger: RogueDanger, index: number, exclude?: string[]): RogueEncounter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `run` | 否 | `LancerRogueRun` | — |
| `danger` | 否 | `RogueDanger` | — |
| `index` | 否 | `number` | — |
| `exclude` | 是 | `string[]` | [] |

## drawRogueRoutes

导出接口 · 源码第 37 行。

```ts
export function drawRogueRoutes(run: LancerRogueRun): RogueEncounter[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `run` | 否 | `LancerRogueRun` | — |

## objectivePoints

导出接口 · 源码第 46 行。

```ts
export const objectivePoints: (m: ArenaMap): { x: number; y: number; }[];
```

## buildArenaMap

导出接口 · 源码第 47 行。

```ts
export function buildArenaMap(m: ArenaMap): ManualMap;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `ArenaMap` | — |
