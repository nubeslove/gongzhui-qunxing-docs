# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/objectives.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {generatedArenaHazard} from './generation';
import {lancerObject,lancerObjectId,lancerObjectToken,snapGridPoint,type LancerCombatIntent,type LancerCombatUnit,type ManualTable,type ManualMap,type ManualToken,type RogueHazard,type RogueScenario} from '@aelzerant/contracts';
import {lancerDistance,lancerPosition,lancerBlockOverlaps} from '@aelzerant/game-core';
import {arenaMapForEncounter} from './encounters';
import {settleModernArena} from './modernObjectives';
import {validateArenaCargo,trackArenaCargo} from './cargo';
import {arenaObjectId,scenarioDefinition,scenarioPoints,scenarioObjects} from './scenarios';
import {spawnArenaEnemy,type ArenaEnemy} from './enemies';
import {finishRogueBattle} from './run';
```
</details>

## freshScenario

导出接口 · 源码第 11 行。

```ts
export const freshScenario: (): RogueScenario;
```

## validateArenaInteraction

导出接口 · 源码第 15 行。

```ts
export function validateArenaInteraction(t: ManualTable, i: LancerCombatIntent): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `i` | 否 | `LancerCombatIntent` | — |

## trackArenaInteraction

导出接口 · 源码第 23 行。

```ts
export function trackArenaInteraction(t: ManualTable, i: LancerCombatIntent): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `i` | 否 | `LancerCombatIntent` | — |

## alarm

导出接口 · 源码第 33 行。

```ts
export function alarm(t: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |

## inArenaHazard

导出接口 · 源码第 42 行。

```ts
export function inArenaHazard(p: ManualToken, h: RogueHazard, map?: ManualMap): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `p` | 否 | `ManualToken` | — |
| `h` | 否 | `RogueHazard` | — |
| `map` | 是 | `ManualMap` | — |

## resolveArenaHazard

导出接口 · 源码第 43 行。

```ts
export function resolveArenaHazard(t: ManualTable, apply: (t:ManualTable,i:LancerCombatIntent)=>void): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `apply` | 否 | `(t:ManualTable,i:LancerCombatIntent)=>void` | — |

## moveEscort

导出接口 · 源码第 52 行。

```ts
export function moveEscort(t: ManualTable): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |

## updateBoss

导出接口 · 源码第 71 行。

```ts
export function updateBoss(t: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |

## settleArenaObjectives

导出接口 · 源码第 81 行。

Called only after normal combat/reaction queues have drained.

```ts
export function settleArenaObjectives(t: ManualTable): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
