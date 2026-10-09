# game/packages/game-core/src/lancer/scene-objects.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {lancerObject,lancerObjectActive,lancerObjectId,lancerObjectToken,type LancerBattle,type LancerBattleStep,type LancerCombatUnit,type ManualMap,type ManualToken} from '@aelzerant/contracts';
import {lancerBlockDistance,lancerLineOfSight} from './geometry';
import {spend,log} from './state';
import {planLancerSceneEvent,queueLancerSceneHazards} from './scene-events';
import type {LancerRandom} from './dice';
```
</details>

## lancerSceneInteraction

导出接口 · 源码第 7 行。

```ts
export function lancerSceneInteraction(map: ManualMap, token: ManualToken, object: string, action: string, battle?: LancerBattle, unit?: LancerCombatUnit, random?: LancerRandom, publicPreview?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `token` | 否 | `ManualToken` | — |
| `object` | 否 | `string` | — |
| `action` | 否 | `string` | — |
| `battle` | 是 | `LancerBattle` | — |
| `unit` | 是 | `LancerCombatUnit` | — |
| `random` | 是 | `LancerRandom` | Math.random |
| `publicPreview` | 是 | `boolean` | false |

## resolveLancerSceneEffect

导出接口 · 源码第 33 行。

Resume after damage/reaction decisions; recheck intervening GM edits without executing stale geometry.

```ts
export function resolveLancerSceneEffect(battle: LancerBattle, map: ManualMap, step: Extract<LancerBattleStep,{kind:'scene'}>, random: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `battle` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `step` | 否 | `Extract<LancerBattleStep,{kind:'scene'}>` | — |
| `random` | 否 | `LancerRandom` | — |

## syncLancerScenery

导出接口 · 源码第 49 行。

Scenery is a target, never an actor or an activation in the alternating turn order.

```ts
export function syncLancerScenery(battle: LancerBattle, map: ManualMap): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `battle` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |

## persistLancerScenery

导出接口 · 源码第 62 行。

```ts
export function persistLancerScenery(battle: LancerBattle, map: ManualMap): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `battle` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
