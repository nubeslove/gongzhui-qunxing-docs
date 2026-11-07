# game/packages/game-core/src/lancer/mission-transport.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {lancerObjectId,lancerObjectToken,type LancerBattle,type LancerCombatUnit,type LancerBattleStep,type ManualMap,type ManualToken} from '@aelzerant/contracts';
import {lancerDistance,lancerRegionContains} from './geometry';
import {adjudicateLancerScenery} from './scenery-adjudication';
import {log} from './state';
```
</details>

## startMissionTransport

导出接口 · 源码第 6 行。

```ts
export function startMissionTransport(b: LancerBattle, map: ManualMap, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## moveMissionTransport

导出接口 · 源码第 12 行。

Called only for an actually resolved standard-movement step, after interrupting reactions.

```ts
export function moveMissionTransport(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, from: ManualToken, step: Extract<LancerBattleStep,{kind:'move'}>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `from` | 否 | `ManualToken` | — |
| `step` | 否 | `Extract<LancerBattleStep,{kind:'move'}>` | — |

## canEvacuate

导出接口 · 源码第 22 行。

```ts
export function canEvacuate(b: LancerBattle, map: ManualMap, u: LancerCombatUnit): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## evacuateMissionUnit

导出接口 · 源码第 26 行。

```ts
export function evacuateMissionUnit(b: LancerBattle, map: ManualMap, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## finishMissionTransport

导出接口 · 源码第 38 行。

```ts
export function finishMissionTransport(b: LancerBattle, map: ManualMap, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
