# game/packages/game-core/src/spiral/index.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {SPIRAL_VERSION,SPIRAL_BIOMES,SPIRAL_DIFFICULTY_RULES,parseSpiralData,parseSpiralSettings,isId,isInteger,isRecord,isText,parseSceneMap,type SpiralData,type SpiralSettings,type SceneMap,type SpiralBiome,spiralHexKey,type SpiralRoom} from '@aelzerant/contracts';
import {parseDamageDice} from '@aelzerant/rules-engine';
import {restoreCombat} from '../persistence';
import {isCombatantInput} from '../validation';
import {nextRandom} from '../random';
import {isAafAction,aafPendingActor} from '../aaf/actions';
import type {Combatant,CombatState,CombatEvent} from '../types';
import {SPIRAL_CLASSES,SPIRAL_REWARDS,spiralAbility} from './content';
import {spiralDungeonRooms} from './generation';
import {commandSpiralExploration,createSpiralParty,ensureSpiralJourney,expeditionActor,generateSpiralJourney,returnSpiralSurface,syncSpiralParty} from './exploration';
import {spiralBattle,spiralPartyAction,spiralOffhand,spiralEnemyPhase,spiralBattleOutcome} from './battle';
import {recordSpiralBattle} from './presentation';
import {commandRuen,completeRuenDungeon,recruitRuenParty,startRuenJourney,spiralControllers} from './ruen';
```
</details>

## 重新导出的模块

```ts
export {spiralHexDistance,spiralHexNeighbours,spiralTravelPath} from './exploration';
export {SPIRAL_CLASSES,SPIRAL_REWARDS,spiralHero} from './content';
export {planSpiralThreats} from './intents';
```

## SpiralState

导出接口 · 源码第 17 行。

```ts
export interface SpiralState {
    data: SpiralData;
    battle: CombatState | null;
    party?: Record<string, Combatant>;
    rngState: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `data` | 否 | `SpiralData` | 见结构定义及所属功能文档 |
| `battle` | 否 | `CombatState&#124;null` | 见结构定义及所属功能文档 |
| `party` | 是 | `Record<string,Combatant>` | 见结构定义及所属功能文档 |
| `rngState` | 否 | `number` | 见结构定义及所属功能文档 |

## SpiralView

导出接口 · 源码第 18 行。

```ts
export interface SpiralView {
    data: SpiralData;
    party?: Combatant[];
    battle: null | {
        map: SceneMap;
        round: number;
        actors: Combatant[];
        events: CombatEvent[];
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `data` | 否 | `SpiralData` | 见结构定义及所属功能文档 |
| `party` | 是 | `Combatant[]` | 见结构定义及所属功能文档 |
| `battle` | 否 | `null&#124;{map:SceneMap;round:number;actors:Combatant[];events:CombatEvent[]}` | 见结构定义及所属功能文档 |
| `battle.分支2.map` | 否 | `SceneMap` | 见结构定义及所属功能文档 |
| `battle.分支2.round` | 否 | `number` | 见结构定义及所属功能文档 |
| `battle.分支2.actors` | 否 | `Combatant[]` | 见结构定义及所属功能文档 |
| `battle.分支2.events` | 否 | `CombatEvent[]` | 见结构定义及所属功能文档 |

## createSpiral

导出接口 · 源码第 24 行。

```ts
export function createSpiral(settings: SpiralSettings, seed: number): SpiralState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `settings` | 否 | `SpiralSettings` | — |
| `seed` | 否 | `number` | — |

## parseSpiralState

导出接口 · 源码第 30 行。

```ts
export function parseSpiralState(value: unknown): SpiralState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## projectSpiral

导出接口 · 源码第 43 行。

The same fogged projection is used by the host and every traveller.

```ts
export function projectSpiral(input: SpiralState): SpiralView;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `input` | 否 | `SpiralState` | — |

## parseSpiralView

导出接口 · 源码第 49 行。

```ts
export function parseSpiralView(value: unknown): SpiralView;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## commandSpiral

导出接口 · 源码第 110 行。

Called inside WorldAuthority's clone/save/commit transaction. No client may supply outcomes.

```ts
export function commandSpiral(s: SpiralState, action: Record<string,unknown>, playerId: string, hostId: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `SpiralState` | — |
| `action` | 否 | `Record<string,unknown>` | — |
| `playerId` | 否 | `string` | — |
| `hostId` | 否 | `string` | — |

## spiralRewardQuality

导出接口 · 源码第 188 行。

```ts
export function spiralRewardQuality(settings: SpiralSettings): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `settings` | 否 | `SpiralSettings` | — |
