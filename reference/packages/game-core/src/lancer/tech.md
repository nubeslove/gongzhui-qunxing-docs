# game/packages/game-core/src/lancer/tech.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { offerLeadershipChecks,leadershipCheckAccuracy } from './leadership';
import { pauseForDronePulse } from './drone-talents';
import {bolsterLancer,offerLancerScan,respondLancerScan,offerFriendlyInvade,respondFriendlyInvade} from './tech-support';
import { onSpotterLock, spotterAvailable, offerSpotterRoll } from './spotter';
import { lancerReactionEvaded, consumeLancerSkillAccuracy } from './features';
import type { LancerBattle,LancerBattleStep,LancerCombatIntent,LancerCombatUnit,LancerCondition,LancerDecision,LancerEffect,ManualMap } from '@aelzerant/contracts';
import { applyTechSystemHit, techCondition, queueTechAttackHeat, techInvisible } from './tech-effects';
import { lancerSaveAccuracy } from './features';
import { equippedLancerSystem } from './system-passives';
import { lancerShieldDifficulty } from './effects';
import { count,counter,feature,lancerUniversalAccuracy,lancerSkillAccuracy } from './features';
import { canReact,clear,condition,has,log,spend,unit } from './state';
import { lancerDistance,lancerUnitLineOfSight } from './geometry';
import { lancerCheck,lancerDie,type LancerRandom } from './dice';
import { lancerSystemAttackAccuracy } from './system-passives';
import { breakLancerPassiveCover } from './talents';
import { queueAmbush } from './ranged-talents';
import { queueAceMiss } from './flight-talents';
import { queueLancerWeaponReactions } from './weapon-events';
import { askLancerPoint } from './point-decision';
```
</details>

## LancerTechOption

导出接口 · 源码第 22 行。

```ts
export interface LancerTechOption {
    name: string;
    description: string;
    cost: 1 | 2;
    system?: string;
    support?: boolean;
    repairEffect?: LancerEffect['key'];
    talent?: string;
    repair?: LancerCondition;
    skill?: 'systems' | 'engineering';
    invade?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `cost` | 否 | `1&#124;2` | 见结构定义及所属功能文档 |
| `system` | 是 | `string` | 见结构定义及所属功能文档 |
| `support` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `repairEffect` | 是 | `LancerEffect['key']` | 见结构定义及所属功能文档 |
| `talent` | 是 | `string` | 见结构定义及所属功能文档 |
| `repair` | 是 | `LancerCondition` | 见结构定义及所属功能文档 |
| `skill` | 是 | `'systems'&#124;'engineering'` | 见结构定义及所属功能文档 |
| `invade` | 是 | `boolean` | 见结构定义及所属功能文档 |

## availableLancerTech

导出接口 · 源码第 49 行。

```ts
export function availableLancerTech(u: LancerCombatUnit, b?: LancerBattle): [string,LancerTechOption][];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `b` | 是 | `LancerBattle` | — |

## techActionIssue

导出接口 · 源码第 50 行。

```ts
export function techActionIssue(u: LancerCombatUnit, i: Extract<LancerCombatIntent,{type:'tech'}>, b?: LancerBattle): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `Extract<LancerCombatIntent,{type:'tech'}>` | — |
| `b` | 是 | `LancerBattle` | — |

## validateTechTarget

导出接口 · 源码第 59 行。

```ts
export function validateTechTarget(map: ManualMap, u: LancerCombatUnit, t: LancerCombatUnit|undefined, i: Extract<LancerCombatIntent,{type:'tech'}>, b?: LancerBattle): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit&#124;undefined` | — |
| `i` | 否 | `Extract<LancerCombatIntent,{type:'tech'}>` | — |
| `b` | 是 | `LancerBattle` | — |

## useLancerTech

导出接口 · 源码第 71 行。

```ts
export function useLancerTech(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, i: Extract<LancerCombatIntent,{type:'tech'}>, r: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `Extract<LancerCombatIntent,{type:'tech'}>` | — |
| `r` | 否 | `LancerRandom` | — |

## resolveLancerRepairCheck

导出接口 · 源码第 82 行。

```ts
export function resolveLancerRepairCheck(b: LancerBattle, u: LancerCombatUnit, s: Extract<LancerBattleStep,{kind:'feature'}>, r: LancerRandom): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'feature'}>` | — |
| `r` | 否 | `LancerRandom` | — |

## resolveLancerTech

导出接口 · 源码第 93 行。

```ts
export function resolveLancerTech(b: LancerBattle, map: ManualMap, s: Extract<LancerBattleStep,{kind:'tech'}>, r: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'tech'}>` | — |
| `r` | 否 | `LancerRandom` | — |

## resolveTechResult

导出接口 · 源码第 125 行。

```ts
export function resolveTechResult(b: LancerBattle, map: ManualMap, result: Extract<LancerBattleStep,{kind:'techResult'}>, r: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `result` | 否 | `Extract<LancerBattleStep,{kind:'techResult'}>` | — |
| `r` | 否 | `LancerRandom` | — |

## offerTechFeature

导出接口 · 源码第 142 行。

```ts
export function offerTechFeature(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, s: Extract<LancerBattleStep,{kind:'feature'}>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'feature'}>` | — |

## respondTechFeature

导出接口 · 源码第 147 行。

```ts
export function respondTechFeature(b: LancerBattle, map: ManualMap, p: LancerDecision, option: string, text?: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |
| `text` | 是 | `string` | — |

## useFullTech

导出接口 · 源码第 161 行。

```ts
export function useFullTech(b: LancerBattle, u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
