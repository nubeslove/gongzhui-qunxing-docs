# game/packages/game-core/src/lancer/apocalypse-rail.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerBattle,LancerCombatIntent,LancerCombatUnit,ManualMap} from '@aelzerant/contracts';
import {lancerAreaCells} from './areas';
import {log,spend} from './state';
```
</details>

## APOCALYPSE_RAIL

导出接口 · 源码第 5 行。

```ts
export const APOCALYPSE_RAIL = 'apocalypse-rail';
```

## activateApocalypseRail

导出接口 · 源码第 6 行。

```ts
export function activateApocalypseRail(b: LancerBattle, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## advanceApocalypseRail

导出接口 · 源码第 11 行。

```ts
export function advanceApocalypseRail(u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |

## apocalypseActionIssue

导出接口 · 源码第 16 行。

```ts
export function apocalypseActionIssue(u: LancerCombatUnit, i: LancerCombatIntent): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `LancerCombatIntent` | — |

## finishApocalypseShot

导出接口 · 源码第 25 行。

Called only after the shot actually spends its salvo, including an empty blast.

```ts
export function finishApocalypseShot(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, salvoId: string, die: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `salvoId` | 否 | `string` | — |
| `die` | 否 | `number` | — |

## endApocalypseRail

导出接口 · 源码第 36 行。

```ts
export function endApocalypseRail(b: LancerBattle, map: ManualMap): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |

## syncApocalypsePosition

导出接口 · 源码第 41 行。

Also catches carried movement and teleports outside the normal movement queue.

```ts
export function syncApocalypsePosition(b: LancerBattle, map: ManualMap, before: ManualMap): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `before` | 否 | `ManualMap` | — |
