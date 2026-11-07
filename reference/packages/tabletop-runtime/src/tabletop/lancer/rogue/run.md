# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {voteArenaWithdrawal,updateArenaTasks,arenaMissionRewards,arenaBattleWear} from './missionProgress';
import {claimRogueBossReward,ensureRogueBossRewards,rogueBonusMounts} from './bossRewards';
import {ensureRogueInitialRewards,rogueInitialRewardsPending,rogueRewardKind,rogueRewardRounds} from './rewardFlow';
import {ROGUE_ATTRIBUTES,rogueAttributes,rogueHealthSnapshot,preserveRogueDamage} from './growth';
import {applyRogueRepair} from './maintenance';
import {rogueAbilitySources,setRogueAbilityStats,settleRogueAbility} from './abilities';
import {arenaModifiers,ARENA_EQUIPMENT} from './arsenal';
import {fitRogueStartingWeapons} from './loadout';
import {EQUIPMENT_ACCESS,CORE_BY_ID} from '../content';
import {parseManualTable,type ManualActor,type ManualTable,type RogueCommand,type RoguePlayer} from '@aelzerant/contracts';
import {checkLancerLoadout,type LancerEquipment,type LancerWeapon} from '@aelzerant/rules-engine';
import {LANCER_FRAMES} from '../frames';
import {LANCER_CATALOG} from '../catalog';
import {readLancer,readyLancer,selectLancerFrame,setEquipment} from '../model';
import {starterLancer} from '../combatAdapter';
import {rogueUnlockedFrames,rogueSlotCapacity,rogueEquipment,ROGUE_JOBS,rogueJob,ROGUE_RESOURCES,ROGUE_RESOURCE_BY_ID,drawRogueCards,learnRogueChoice,rogueRandom} from './resources';
import {drawRogueRoutes} from './encounters';
import {launchArena,settleArena} from './battle';
import {applyRogueRetraining,grantRogueRetraining} from './retraining';
```
</details>

## createRogueWorld

导出接口 · 源码第 21 行。

```ts
export function createRogueWorld(table: ManualTable, start?: 0|2, difficulty?: 1|2|3): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `start` | 是 | `0&#124;2` | 0 |
| `difficulty` | 是 | `1&#124;2&#124;3` | 2 |

## refreshRogueActor

导出接口 · 源码第 30 行。

```ts
export function refreshRogueActor(t: ManualTable, p: RoguePlayer): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `p` | 否 | `RoguePlayer` | — |

## openRogueRewards

导出接口 · 源码第 57 行。

```ts
export function openRogueRewards(t: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |

## applyRogueCommand

导出接口 · 源码第 77 行。

```ts
export function applyRogueCommand(t: ManualTable, sender: string, c: RogueCommand, nickname: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `sender` | 否 | `string` | — |
| `c` | 否 | `RogueCommand` | — |
| `nickname` | 否 | `string` | — |

## finishRogueBattle

导出接口 · 源码第 167 行。

```ts
export function finishRogueBattle(t: ManualTable, won: boolean, wipe?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `won` | 否 | `boolean` | — |
| `wipe` | 是 | `boolean` | false |
