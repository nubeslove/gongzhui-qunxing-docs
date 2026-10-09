# game/packages/game-core/src/lancer/terrain-hazards.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {offerLeadershipChecks,leadershipCheckAccuracy} from './leadership';
import type {LancerBattle,LancerBattleStep,LancerCombatUnit,ManualMap} from '@aelzerant/contracts';
import {count,counter,consumeLancerSkillAccuracy} from './features';
import {lancerTerrainContains} from './geometry';
import {lancerCheck,type LancerRandom} from './dice';
import {log} from './state';
```
</details>

## queueTerrainHazard

导出接口 · 源码第 8 行。

```ts
export function queueTerrainHazard(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, from?: {x:number;y:number;z:number}): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `from` | 是 | `{x:number;y:number;z:number}` | — |

## resolveTerrainHazard

导出接口 · 源码第 14 行。

```ts
export function resolveTerrainHazard(b: LancerBattle, u: LancerCombatUnit, s: Extract<LancerBattleStep,{kind:'feature'}>, r: LancerRandom): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'feature'}>` | — |
| `r` | 否 | `LancerRandom` | — |
