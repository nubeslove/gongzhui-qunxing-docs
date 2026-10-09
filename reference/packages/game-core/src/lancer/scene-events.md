# game/packages/game-core/src/lancer/scene-events.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {lancerObject,lancerObjectActive,lancerEffectiveBlock,regionAffectsFootprint,type LancerSceneAction,type LancerSceneEffect,type ManualMap,type ManualBlock,type LancerBattle,type ManualToken} from '@aelzerant/contracts';
import {lancerBlockOverlaps} from './geometry';
import {refreshLancerAltitude} from './flight';
import {lancerRoll,type LancerRandom} from './dice';
import {log} from './state';
```
</details>

## planLancerSceneEvent

导出接口 · 源码第 16 行。

Validate the entire event before changing the world or charging the action.

```ts
export function planLancerSceneEvent(map: ManualMap, action: LancerSceneAction, battle?: Pick<LancerBattle,'phase'>, allowNoop?: boolean): { map: ManualMap; hazards: { kind: "hazard"; area: string; damage: string; damageType: "kinetic" | "energy" | "explosive" | "burn" | "heat"; save?: { skill: "hull" | "agility" | "systems" | "engineering"; dc: number; half: boolean; }; }[]; descriptions: string[]; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `action` | 否 | `LancerSceneAction` | — |
| `battle` | 是 | `Pick<LancerBattle,'phase'>` | — |
| `allowNoop` | 是 | `boolean` | false |

## lancerSceneHazardTargets

导出接口 · 源码第 50 行。

Exactly the same region coverage calculation used by map highlighting.

```ts
export function lancerSceneHazardTargets(map: ManualMap, battle: LancerBattle, area: string): import("@source/packages/contracts/src/lancer-combat").LancerCombatUnit[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `battle` | 否 | `LancerBattle` | — |
| `area` | 否 | `string` | — |

## queueLancerSceneHazards

导出接口 · 源码第 59 行。

```ts
export function queueLancerSceneHazards(battle: LancerBattle, map: ManualMap, hazards: Extract<LancerSceneEffect,{kind:'hazard'}>[], random: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `battle` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `hazards` | 否 | `Extract<LancerSceneEffect,{kind:'hazard'}>[]` | — |
| `random` | 否 | `LancerRandom` | — |
