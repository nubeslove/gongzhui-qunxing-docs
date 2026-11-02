# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/encounters.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerRogueRun,ManualMap,RogueDanger,RogueEncounter} from '@aelzerant/contracts';
import {rogueRandom} from './resources';
import {arenaCoverLayout} from './mapLayouts';
import {scenarioDefinition,scenarioObjects,scenarioPoints} from './scenarios';
```
</details>

## ArenaMission

导出接口 · 源码第 5 行。

```ts
export type ArenaMission = 'hold' | 'escort' | 'control' | 'hunt' | 'shutdown' | 'boss';
```

## ArenaMap

导出接口 · 源码第 6 行。

```ts
export interface ArenaMap {
    id: string;
    name: string;
    mission: ArenaMission;
    width: number;
    height: number;
    variant: number;
    rounds: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `mission` | 否 | `ArenaMission` | 见结构定义及所属功能文档 |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `height` | 否 | `number` | 见结构定义及所属功能文档 |
| `variant` | 否 | `number` | 见结构定义及所属功能文档 |
| `rounds` | 否 | `number` | 见结构定义及所属功能文档 |

## missionBrief

导出接口 · 源码第 10 行。

```ts
export function missionBrief(m: ArenaMap): {task:string;objectives:string[];rules:string;rounds:number};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `ArenaMap` | — |

## missionText

导出接口 · 源码第 13 行。

```ts
export function missionText(m: ArenaMap): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `ArenaMap` | — |

## encounterFor

导出接口 · 源码第 14 行。

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

导出接口 · 源码第 21 行。

```ts
export function drawRogueRoutes(run: LancerRogueRun): RogueEncounter[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `run` | 否 | `LancerRogueRun` | — |

## objectivePoints

导出接口 · 源码第 30 行。

```ts
export const objectivePoints: (m: ArenaMap): { x: number; y: number; }[];
```

## buildArenaMap

导出接口 · 源码第 31 行。

```ts
export function buildArenaMap(m: ArenaMap): ManualMap;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `ArenaMap` | — |
