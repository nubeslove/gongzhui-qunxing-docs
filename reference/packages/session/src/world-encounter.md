# game/packages/session/src/world-encounter.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorControllers,emptyStory,encounterOrder,type EncounterCandidate,type EncounterCommand,type SceneEncounter} from '@aelzerant/contracts';
import {initCombat,nextRandom} from '@aelzerant/game-core';
import {attributeModifier} from '@aelzerant/game-core';
import {manageEncounter,newEncounter} from './encounter-management';
import {getScene,syncCombatActors} from './world-scenes';
import {visibleTokenIds} from './world-view';
import {tickCombatEffects} from './world-effects';
import {applyAafEquipment} from './world-aaf-character';
import {prepareAafRules,endAafCombat} from './world-aaf-rules';
import type {WorldDocument,WorldHandler,SceneDocument} from './world-types';
```
</details>

## worldEncounterCandidates

导出接口 · 源码第 12 行。

```ts
export function worldEncounterCandidates(world: WorldDocument, scene: SceneDocument): EncounterCandidate[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `scene` | 否 | `SceneDocument` | — |

## worldEncounterState

导出接口 · 源码第 13 行。

```ts
export function worldEncounterState(world: WorldDocument, scene: SceneDocument): SceneEncounter|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `scene` | 否 | `SceneDocument` | — |
