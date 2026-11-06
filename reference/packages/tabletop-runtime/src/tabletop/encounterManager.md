# game/packages/tabletop-runtime/src/tabletop/encounterManager.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {createBattleEntry} from './lancer/battleEntry';
import {dndMaxSpeed} from '@aelzerant/rules-engine';
import {applyUtopiaIntent} from '@aelzerant/game-core';
import {utopiaStats} from '@aelzerant/rules-engine';
import {UTOPIA_CONDITION_NAMES} from '@aelzerant/contracts';
import {readLancer} from './lancer/model';
import {actorControllers,emptyStory,encounterOrder,storyGm,type ManualTable,type SceneEncounter,type EncounterCommand,type EncounterCandidate,type CombatTrace} from '@aelzerant/contracts';
import {manageEncounter,newEncounter} from '@aelzerant/session/core';
import {DND_CATALOG,DND_CONDITION_NAMES,dndTest,dndSpeed,dndHas,dndIncapacitated} from '@aelzerant/rules-engine';
import {rollDndInitiative,applyDndIntent,advanceDndEffectRound,applyLancerIntent} from '@aelzerant/game-core';
import {combatUnit,syncCombatCards} from './lancer/combatAdapter';
```
</details>

## tableEncounterCandidates

导出接口 · 源码第 12 行。

```ts
export function tableEncounterCandidates(table: ManualTable): EncounterCandidate[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |

## tableEncounterState

导出接口 · 源码第 13 行。

```ts
export function tableEncounterState(table: ManualTable): SceneEncounter|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |

## applyTableEncounter

导出接口 · 源码第 22 行。

```ts
export function applyTableEncounter(table: ManualTable, sender: string, command: EncounterCommand, context?: {random?:()=>number;trace?:(event:CombatTrace)=>void}): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `sender` | 否 | `string` | — |
| `command` | 否 | `EncounterCommand` | — |
| `context` | 是 | `{random?:()=>number;trace?:(event:CombatTrace)=>void}` | {} |
