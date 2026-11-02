# game/packages/tabletop-runtime/src/tabletop/adventureRuntime.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {UTOPIA_CONDITIONS,type UtopiaDamage} from '@aelzerant/contracts';
import {applyUtopiaIntent} from '@aelzerant/game-core';
import {utopiaStats} from '@aelzerant/rules-engine';
import {applyStageCommand} from './stageRuntime';
import {ballotTally,type StageCommand} from '@aelzerant/contracts';
import {settleStoryProgress,setQuestObjective} from '@aelzerant/session/core';
import {documentHref,adventureAnchor,adventureCenter,adventureContains,adventureCrossings,adventureFeet,adventureMatches,actorControlled,actorControllers,emptyAdventure,emptySceneFeatures,emptyStory,parseAdventureEvent,parseAdventureTrigger,parseSceneRegions,sceneObserverSees,manualTokenObserver,storyGm,tableScene,DND_DAMAGE_TYPES,DND_CONDITIONS,type AdventureCommand,type AdventureEffect,type AdventureEvent,type AdventureRun,type AdventureSelector,type AdventureTrigger,type CombatTrace,type ManualTable,type ManualToken,type ScenePoint} from '@aelzerant/contracts';
import {applyDndIntent} from '@aelzerant/game-core';
import {dndDice,dndHudActions,dndIncapacitated} from '@aelzerant/rules-engine';
import {adventureLanding} from './adventurePlacement';
import {dndActorTokenSize} from './dnd/tokenSize';
```
</details>

## Context

内部依赖类型 · 源码第 13 行。

```ts
interface Context {
    now?: number;
    random?: () => number;
    trace?: (event: CombatTrace) => void;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `now` | 是 | `number` | 见结构定义及所属功能文档 |
| `random` | 是 | `()=>number` | 见结构定义及所属功能文档 |
| `trace` | 是 | `(event:CombatTrace)=>void` | 见结构定义及所属功能文档 |

## applyAdventureCommand

导出接口 · 源码第 102 行。

Called on an isolated candidate; every effect must validate before the candidate is committed.

```ts
export function applyAdventureCommand(t: ManualTable, senderId: string, command: AdventureCommand, context?: Context): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `senderId` | 否 | `string` | — |
| `command` | 否 | `AdventureCommand` | — |
| `context` | 是 | `Context` | {} |

## advanceAdventureTriggers

导出接口 · 源码第 200 行。

Uses the committed movement path, so passing through a thin region is not lost.

```ts
export function advanceAdventureTriggers(next: ManualTable, previous: ManualTable, context?: Context, route?: {id:string;points:ScenePoint[];discontinuous?:boolean}, activatedSceneId?: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `next` | 否 | `ManualTable` | — |
| `previous` | 否 | `ManualTable` | — |
| `context` | 是 | `Context` | {} |
| `route` | 是 | `{id:string;points:ScenePoint[];discontinuous?:boolean}` | — |
| `activatedSceneId` | 是 | `string` | — |
