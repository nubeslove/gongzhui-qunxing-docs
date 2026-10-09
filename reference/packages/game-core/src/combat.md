# game/packages/game-core/src/combat.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {elevationCellKey,emptyAafRules} from '@aelzerant/contracts';
import {aafAction,aafAttack,aafPendingActor,aafDrainFlow} from './aaf/actions';
import {aafReactionWindow} from './aaf/flow';
import {aafTurnStart,aafTurnEnd,aafSpendAction} from './aaf/turn';
import {aafConditions,aafIncapacitated,aafSpeedValue,aafSyncQuota} from './aaf/state';
import {elevationMovementBlocked,elevationStep,elevationStepCost,sceneRayBlocked} from '@aelzerant/contracts';
import { createSceneMap, isInteger, parseSceneMap, aafMovementRemaining, aafSpeed, AAF_SPEED_MODES, type CombatStatePayload, type SceneMap } from "@aelzerant/contracts";
import { attributeModifier, computeDamage, initiative, parseDamageDice, resolveAttack } from "@aelzerant/rules-engine";
import { cellKey, gridTargetCover, gridDistance, hasLineOfSight, movementCost } from "./geometry";
import { nextRandom } from "./random";
import { isCombatantInput, isCombatIntent } from "./validation";
import type { ActionQuota, Combatant, CombatantInput, CombatState } from "./types";
```
</details>

## initCombat

导出接口 · 源码第 22 行。

```ts
export function initCombat(inputs: CombatantInput[], seed: number, map?: SceneMap, prepared?: Record<string,number>): CombatState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `inputs` | 否 | `CombatantInput[]` | — |
| `seed` | 否 | `number` | — |
| `map` | 是 | `SceneMap` | createSceneMap() |
| `prepared` | 是 | `Record<string,number>` | — |

## advance

导出接口 · 源码第 84 行。

```ts
export function advance(state: CombatState): CombatState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |

## applyIntent

导出接口 · 源码第 94 行。

Unknown is intentional: this boundary is also used for untrusted network intents.

```ts
export function applyIntent(state: CombatState, intent: unknown): CombatState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `intent` | 否 | `unknown` | — |

## setCombatMap

导出接口 · 源码第 161 行。

```ts
export function setCombatMap(state: CombatState, map: SceneMap): CombatState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
| `map` | 否 | `SceneMap` | — |

## snapshotCombat

导出接口 · 源码第 166 行。

```ts
export function snapshotCombat(state: CombatState): CombatStatePayload;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
