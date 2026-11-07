# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/battle.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {lancerNpcTokenAppearance} from '../tokenAppearance';
import {commitLancerMotion} from '../committedMotion';
import {parseManualTable,type LancerCombatIntent,type ManualTable} from '@aelzerant/contracts';
import {applyLancerIntent,pauseLancerRecovery,recoveryOwner,lancerScanPanel,refreshLancerIntel,lancerGMControls,lancerPlacementCandidates,lancerActivationBody} from '@aelzerant/game-core';
import {applyDeploymentCommand,deploymentToken} from '../deployment';
import {syncCombatCards} from '../combatAdapter';
import {arenaMapForEncounter,buildArenaMap} from './encounters';
import {initializeArenaTasks,resolveArenaWithdrawal} from './missionProgress';
import {trackArenaCargoMovement} from './cargo';
import {ARENA_AUTHORITY,arenaInitialRoster,arenaEnemySystems,spawnArenaEnemy} from './enemies';
import {freshScenario,settleArenaObjectives,resolveArenaHazard,validateArenaInteraction,trackArenaInteraction} from './objectives';
import {arenaAIAction} from './ai';
import {rogueRandom} from './resources';
import {ensureRogueInitialRewards} from './rewardFlow';
import {scenarioObjects,scenarioDefinition} from './scenarios';
```
</details>

## 重新导出的模块

```ts
export {ARENA_AUTHORITY} from './enemies';
```

## launchArena

导出接口 · 源码第 27 行。

```ts
export function launchArena(t: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |

## arenaIntent

导出接口 · 源码第 41 行。

```ts
export function arenaIntent(t: ManualTable, intent: LancerCombatIntent, sender?: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `intent` | 否 | `LancerCombatIntent` | — |
| `sender` | 是 | `string` | ARENA_AUTHORITY |

## settleArena

导出接口 · 源码第 56 行。

```ts
export const settleArena: (t: ManualTable): boolean;
```

## advanceRogueAI

导出接口 · 源码第 83 行。

One authoritative action per tick. Player reactions retain their normal timer and survive reload.

```ts
export function advanceRogueAI(table: ManualTable, now?: number): ManualTable|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `now` | 是 | `number` | Date.now() |
