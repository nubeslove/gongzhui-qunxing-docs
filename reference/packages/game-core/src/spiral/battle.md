# game/packages/game-core/src/spiral/battle.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyAafRules,SPIRAL_BIOMES,SPIRAL_DIFFICULTY_RULES,type SpiralData,type SpiralThreat} from '@aelzerant/contracts';
import {aafDistance,parseDamageDice,aafDamageType} from '@aelzerant/rules-engine';
import {initCombat} from '../combat';
import {aafAction,aafAttack,aafDrainFlow,aafPendingActor,type AafAction} from '../aaf/actions';
import {aafMove,aafRefreshMovement,aafMarch} from '../aaf/movement';
import {aafTurnStart,aafTurnEnd} from '../aaf/turn';
import {aafApplyEffect,aafDealDamage,aafHeal} from '../aaf/damage';
import {aafBoundary,aafIncapacitated,aafSyncQuota} from '../aaf/state';
import {hasLineOfSight,cellKey,reachableCells} from '../geometry';
import type {Combatant,CombatantInput,CombatState} from '../types';
import {spiralHero} from './content';
import {inSpiralCells,spiralHazards,spiralMap} from './generation';
import {planSpiralThreats} from './intents';
import type {SpiralRecorder} from './presentation';
```
</details>

## selectSpiralActor

导出接口 · 源码第 17 行。

Switching collaborators never calls turn-start or refreshes their personal grants.

```ts
export function selectSpiralActor(s: CombatState, actor: Combatant): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `CombatState` | — |
| `actor` | 否 | `Combatant` | — |

## spiralBattle

导出接口 · 源码第 23 行。

```ts
export function spiralBattle(data: SpiralData, previous: CombatState|null, random: ()=>number, party?: Record<string,Combatant>): CombatState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `data` | 否 | `SpiralData` | — |
| `previous` | 否 | `CombatState&#124;null` | — |
| `random` | 否 | `()=>number` | — |
| `party` | 是 | `Record<string,Combatant>` | {} |

## spiralPartyAction

导出接口 · 源码第 54 行。

```ts
export function spiralPartyAction(s: CombatState, data: SpiralData, actorId: string, action: AafAction|{type:'move';x:number;y:number}|{type:'offhand'}, record?: SpiralRecorder): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `CombatState` | — |
| `data` | 否 | `SpiralData` | — |
| `actorId` | 否 | `string` | — |
| `action` | 否 | `AafAction&#124;{type:'move';x:number;y:number}&#124;{type:'offhand'}` | — |
| `record` | 是 | `SpiralRecorder` | — |

## spiralOffhand

导出接口 · 源码第 84 行。

```ts
export function spiralOffhand(s: CombatState, data: SpiralData, actorId: string, targetId: string, record?: SpiralRecorder): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `CombatState` | — |
| `data` | 否 | `SpiralData` | — |
| `actorId` | 否 | `string` | — |
| `targetId` | 否 | `string` | — |
| `record` | 是 | `SpiralRecorder` | — |

## spiralEnemyPhase

导出接口 · 源码第 122 行。

```ts
export function spiralEnemyPhase(s: CombatState, data: SpiralData, record?: SpiralRecorder): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `CombatState` | — |
| `data` | 否 | `SpiralData` | — |
| `record` | 是 | `SpiralRecorder` | — |

## spiralBattleOutcome

导出接口 · 源码第 135 行。

```ts
export function spiralBattleOutcome(s: CombatState, data: SpiralData): 'victory'|'defeat'|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `CombatState` | — |
| `data` | 否 | `SpiralData` | — |
