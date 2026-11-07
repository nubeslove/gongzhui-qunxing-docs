# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/arena-balance-v2.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {writeFileSync} from 'node:fs';
import {lancerObjectToken,type ManualTable,type LancerCombatIntent,type LancerCombatUnit,type RogueDanger} from '@aelzerant/contracts';
import {lancerDistance,lancerUnitLineOfSight,lancerPlacementCandidates} from '@aelzerant/game-core';
import {createRogueWorld,applyRogueCommand} from './run';
import {arenaIntent,advanceRogueAI,launchArena,settleArena} from './battle';
import {arenaMapForEncounter} from './encounters';
import {arenaEncounterRoster,arenaActivationCap} from './enemies';
import {arenaPathStep} from './ai';
import {arenaBattleWear,arenaWearSnapshot} from './missionProgress';
import {rogueEquipment,drawRogueCards,ROGUE_RESOURCE_BY_ID} from './resources';
import {scenarioPoints} from './scenarios';
import {deploymentToken} from '../deployment';
import {readLancer,readyLancer} from '../model';
```
</details>

## Archetype

内部依赖类型 · 源码第 27 行。

```ts
type Archetype = typeof archetypes[number];
```

## Stat

内部依赖类型 · 源码第 28 行。

```ts
type Stat = 'hull' | 'agility' | 'systems' | 'engineering';
```

## MedicalPlan

内部依赖类型 · 源码第 77 行。

```ts
type MedicalPlan = Map<string, {
    pod: string;
    courier: boolean;
}>;
```
