# game/packages/contracts/src/story.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {visibleSceneGraphs} from './scene-graph-visibility';
import {parseSceneChannelVisits,type SceneChannelVisits} from './scene-channel-visits';
import {parseLancerNodeRuns,projectLancerNodeRuns,parseLancerNodeRestPlan,parseLancerNodeEndPlan,type LancerNodeRun,type LancerNodeRestPlan,type LancerNodeEndPlan} from './lancer-node-execution';
import {parseLancerScenePlans,type LancerScenePlan} from './lancer-scene-plan';
import {parseTacticalMissions,projectTacticalMissions,type TacticalMission} from './tactical-mission';
import {parseWorldAtlas,projectWorldAtlas,type WorldAtlas} from './world-atlas';
import {parseTeamAssets,type TeamAssets} from './team-assets';
import {parseQuest,parseNotebook,questUnlocked,type QuestDetails,type GmNotebook} from './story-progress';
import {parseAdventure,projectAdventure,type AdventureState} from './adventure-events';
import {parseUserColor} from './user-colors';
import {parseConversationChannel,canReadConversationMessage,canReadConversation,type ConversationChannel} from './conversation-channels';
import {parseCombatJournal,projectCombatJournal,type CombatJournal} from './combat-journal';
import {parseResourceVisual,parseResourceVisualEvent,type ResourceVisual,type ResourceVisualEvent} from './resource-visual';
import {parseCombatCheckpoints,type CombatCheckpoint} from './combat-rollback';
import {parseEncounters,projectEncounters,type SceneEncounter} from './encounter';
import {parseWorldAssetPack,type WorldAssetPack} from './world-assets';
import {parseCompendiumDirectory,projectCompendiumDirectory} from './compendium-directory';
import {parseCompendiumCatalog,projectCompendiumCatalog,type CompendiumPack} from './compendium';
import {tableDocumentVisible} from './table-document';
import {parseResourceImage,parseResourceSource,type ResourceSource} from './resource-details';
import {parseResourceAccess,projectResources,resourceReadable,resourceAccess} from './resource-access';
import {parseProgressDirectories,progressDirectory,type ProgressDirectories} from './progress-directory';
import {parseEntityDirectories,projectEntityDirectories,type EntityDirectories} from './entity-directory';
import {journalInDirectory} from './journal-access';
import {parseJournalDirectory,projectJournalDirectory} from './journal-directory';
import type {DocumentDirectory} from './document-directory';
import {parseJournalSecrets,type JournalSecret} from './journal-secrets';
import {parseSceneJournals,projectSceneJournals} from './scene-journal';
import type {JournalReference} from './journal-reference';
import {parseScenePreloads,projectScenePreloads,type ScenePreload} from './scene-preload';
import {parseSceneNavigation,type SceneNavigationConfig} from './scene-navigation';
import {parseLancerStartingGrants} from './lancer-starting-grants';
import {parseSceneDirectory,emptySceneDirectory,type SceneDirectory} from './scene-directory';
import {parseJournalAccess} from './journal-access';
import type {DocumentAccess} from './world-library';
import {parseJournalPages,projectJournalEntry,type JournalPage} from './story-journal';
import {parseRegionDecisions,type RegionDecision} from './region-decision';
import {parseHandouts,parseRecaps,type StoryHandout,type StoryRecap} from './story-delivery';
import { isGameSystemId, type GameSystemId } from './systems';
import { parseWorldCalendar, type WorldCalendar } from './world-calendar';
import {parseStoryPlugins,parseTheatreState,type StoryPlugins,type TheatreState} from './theatre';
import {parseBossBarState,type BossBarState} from './boss-bar';
import {MONSTER_HP_VISIBILITIES,type MonsterHpVisibility} from './monster-health';
import {parseWorldLibrary,projectWorldLibrary,type WorldLibrary} from './world-library';
import {parseMessageDetails,canReadMessage,type MessageDetails} from './world-conversation';
```
</details>

## 重新导出的模块

```ts
export * from './story-journal';
export * from './story-delivery';
```

## ResourceKind

导出接口 · 源码第 52 行。

```ts
export type ResourceKind = keyof typeof RESOURCE_KINDS;
```

## StoryChannel

导出接口 · 源码第 53 行。

```ts
export type StoryChannel = keyof typeof STORY_CHANNELS;
```

## StoryVisibility

导出接口 · 源码第 54 行。

```ts
export type StoryVisibility = 'gm' | 'public';
```

## StoryMember

导出接口 · 源码第 55 行。

```ts
export interface StoryMember {
    id: string;
    name: string;
    role: 'gm' | 'player';
    color?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `role` | 否 | `'gm'&#124;'player'` | 见结构定义及所属功能文档 |
| `color` | 是 | `string` | 见结构定义及所属功能文档 |

## StoryPack

导出接口 · 源码第 56 行。

```ts
export interface StoryPack {
    id: string;
    name: string;
    enabled: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `enabled` | 否 | `boolean` | 见结构定义及所属功能文档 |

## ResourceEffect

导出接口 · 源码第 57 行。

```ts
export interface ResourceEffect {
    kind: 'damage' | 'heal' | 'counter' | 'modifier' | 'condition' | 'template';
    target: 'self' | 'targets';
    value: string;
    key: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'damage'&#124;'heal'&#124;'counter'&#124;'modifier'&#124;'condition'&#124;'template'` | 见结构定义及所属功能文档 |
| `target` | 否 | `'self'&#124;'targets'` | 见结构定义及所属功能文档 |
| `value` | 否 | `string` | 见结构定义及所属功能文档 |
| `key` | 否 | `string` | 见结构定义及所属功能文档 |

## ResourceActivity

导出接口 · 源码第 63 行。

```ts
export interface ResourceActivity {
    visual?: ResourceVisual;
    id: string;
    name: string;
    activation: 'free' | 'action' | 'bonus' | 'reaction' | 'quick' | 'full' | 'passive';
    cost: number;
    pool: string;
    poolCost: number;
    target: 'self' | 'single' | 'multiple' | 'area';
    range: number;
    count: number;
    duration: number;
    trigger: 'use' | 'turn-start' | 'turn-end' | 'enter' | 'leave' | 'aura';
    effects: ResourceEffect[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `visual` | 是 | `ResourceVisual` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `activation` | 否 | `'free'&#124;'action'&#124;'bonus'&#124;'reaction'&#124;'quick'&#124;'full'&#124;'passive'` | 见结构定义及所属功能文档 |
| `cost` | 否 | `number` | 见结构定义及所属功能文档 |
| `pool` | 否 | `string` | 见结构定义及所属功能文档 |
| `poolCost` | 否 | `number` | 见结构定义及所属功能文档 |
| `target` | 否 | `'self'&#124;'single'&#124;'multiple'&#124;'area'` | 见结构定义及所属功能文档 |
| `range` | 否 | `number` | 见结构定义及所属功能文档 |
| `count` | 否 | `number` | 见结构定义及所属功能文档 |
| `duration` | 否 | `number` | 见结构定义及所属功能文档 |
| `trigger` | 否 | `'use'&#124;'turn-start'&#124;'turn-end'&#124;'enter'&#124;'leave'&#124;'aura'` | 见结构定义及所属功能文档 |
| `effects` | 否 | `ResourceEffect[]` | 见结构定义及所属功能文档 |

## StoryResource

导出接口 · 源码第 73 行。

```ts
export interface StoryResource {
    image?: string;
    source?: ResourceSource;
    access?: DocumentAccess;
    id: string;
    systemId: GameSystemId;
    name: string;
    kind: ResourceKind;
    description: string;
    packId: string;
    visibility: StoryVisibility;
    tags: string[];
    children: string[];
    activities: ResourceActivity[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `image` | 是 | `string` | 见结构定义及所属功能文档 |
| `source` | 是 | `ResourceSource` | 见结构定义及所属功能文档 |
| `access` | 是 | `DocumentAccess` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `systemId` | 否 | `GameSystemId` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `ResourceKind` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `packId` | 否 | `string` | 见结构定义及所属功能文档 |
| `visibility` | 否 | `StoryVisibility` | 见结构定义及所属功能文档 |
| `tags` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `children` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `activities` | 否 | `ResourceActivity[]` | 见结构定义及所属功能文档 |

## StoryEntry

导出接口 · 源码第 79 行。

```ts
export interface StoryEntry {
    quest?: QuestDetails;
    notebook?: GmNotebook;
    secrets?: JournalSecret[];
    access?: DocumentAccess;
    pages?: JournalPage[];
    revision?: number;
    id: string;
    kind: 'announcement' | 'quest' | 'journal';
    title: string;
    body: string;
    visibility: StoryVisibility;
    authorId: string;
    status: 'open' | 'completed' | 'failed';
    sceneId: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `quest` | 是 | `QuestDetails` | 见结构定义及所属功能文档 |
| `notebook` | 是 | `GmNotebook` | 见结构定义及所属功能文档 |
| `secrets` | 是 | `JournalSecret[]` | 见结构定义及所属功能文档 |
| `access` | 是 | `DocumentAccess` | 见结构定义及所属功能文档 |
| `pages` | 是 | `JournalPage[]` | 见结构定义及所属功能文档 |
| `revision` | 是 | `number` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'announcement'&#124;'quest'&#124;'journal'` | 见结构定义及所属功能文档 |
| `title` | 否 | `string` | 见结构定义及所属功能文档 |
| `body` | 否 | `string` | 见结构定义及所属功能文档 |
| `visibility` | 否 | `StoryVisibility` | 见结构定义及所属功能文档 |
| `authorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `status` | 否 | `'open'&#124;'completed'&#124;'failed'` | 见结构定义及所属功能文档 |
| `sceneId` | 否 | `string` | 见结构定义及所属功能文档 |

## StoryMessage

导出接口 · 源码第 80 行。

```ts
export interface StoryMessage extends MessageDetails {
    visual?: ResourceVisualEvent;
    actorIds?: string[];
    id: string;
    authorId: string;
    at: number;
    channel: StoryChannel;
    text: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `visual` | 是 | `ResourceVisualEvent` | 见结构定义及所属功能文档 |
| `actorIds` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `authorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |
| `channel` | 否 | `StoryChannel` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |

## ResourceGrant

导出接口 · 源码第 81 行。

```ts
export interface ResourceGrant {
    actorId: string;
    resourceId: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `resourceId` | 否 | `string` | 见结构定义及所属功能文档 |

## StoryCounter

导出接口 · 源码第 82 行。

```ts
export interface StoryCounter {
    actorId: string;
    key: string;
    value: number;
    max: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `key` | 否 | `string` | 见结构定义及所属功能文档 |
| `value` | 否 | `number` | 见结构定义及所属功能文档 |
| `max` | 否 | `number` | 见结构定义及所属功能文档 |

## PRESENTATION_MODES

导出接口 · 源码第 83 行。

```ts
export const PRESENTATION_MODES = ['terminal', 'scene', 'performance', 'deployment', 'battle'] as const;
```

## PresentationMode

导出接口 · 源码第 84 行。

```ts
export type PresentationMode = typeof PRESENTATION_MODES[number];
```

## PRESENTATION_TRANSITIONS

导出接口 · 源码第 85 行。

```ts
export const PRESENTATION_TRANSITIONS = ['fade', 'iris', 'black', 'cut'] as const;
```

## PresentationTransition

导出接口 · 源码第 86 行。

```ts
export type PresentationTransition = typeof PRESENTATION_TRANSITIONS[number];
```

## PRESENTATION_EFFECTS

导出接口 · 源码第 87 行。

```ts
export const PRESENTATION_EFFECTS = ['rain', 'fog', 'embers', 'scan', 'glitch', 'impact'] as const;
```

## PresentationEffect

导出接口 · 源码第 88 行。

```ts
export type PresentationEffect = typeof PRESENTATION_EFFECTS[number];
```

## PresentationState

导出接口 · 源码第 89 行。

```ts
export interface PresentationState {
    id: number;
    mode: PresentationMode;
    sceneId?: string;
    transition?: PresentationTransition;
    effects?: PresentationEffect[];
    startedAt: number;
    revision: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `number` | 见结构定义及所属功能文档 |
| `mode` | 否 | `PresentationMode` | 见结构定义及所属功能文档 |
| `sceneId` | 是 | `string` | 见结构定义及所属功能文档 |
| `transition` | 是 | `PresentationTransition` | 见结构定义及所属功能文档 |
| `effects` | 是 | `PresentationEffect[]` | 见结构定义及所属功能文档 |
| `startedAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |

## SCENE_NODE_KINDS

导出接口 · 源码第 98 行。

```ts
export const SCENE_NODE_KINDS = ['start', 'scene', 'battle', 'rest', 'event', 'branch', 'merge', 'end', 'note'] as const;
```

## SceneNodeKind

导出接口 · 源码第 99 行。

```ts
export type SceneNodeKind = typeof SCENE_NODE_KINDS[number];
```

## SceneNode

导出接口 · 源码第 100 行。

```ts
export interface SceneNode {
    body?: string;
    rest?: LancerNodeRestPlan;
    ending?: LancerNodeEndPlan;
    id: string;
    name: string;
    kind: SceneNodeKind;
    sceneId?: string;
    eventId?: string;
    mode?: 'scene' | 'performance';
    requires: string[];
    x: number;
    y: number;
    hidden?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `body` | 是 | `string` | 见结构定义及所属功能文档 |
| `rest` | 是 | `LancerNodeRestPlan` | 见结构定义及所属功能文档 |
| `ending` | 是 | `LancerNodeEndPlan` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `SceneNodeKind` | 见结构定义及所属功能文档 |
| `sceneId` | 是 | `string` | 见结构定义及所属功能文档 |
| `eventId` | 是 | `string` | 见结构定义及所属功能文档 |
| `mode` | 是 | `'scene'&#124;'performance'` | 见结构定义及所属功能文档 |
| `requires` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `hidden` | 是 | `boolean` | 见结构定义及所属功能文档 |

## SceneGraph

导出接口 · 源码第 101 行。

```ts
export interface SceneGraph {
    id: string;
    name: string;
    version: 1;
    revision: number;
    nodes: SceneNode[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `nodes` | 否 | `SceneNode[]` | 见结构定义及所属功能文档 |

## SceneGraphLibrary

导出接口 · 源码第 102 行。

```ts
export interface SceneGraphLibrary {
    version: 1;
    revision: number;
    activeId: string;
    graphs: SceneGraph[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `activeId` | 否 | `string` | 见结构定义及所属功能文档 |
| `graphs` | 否 | `SceneGraph[]` | 见结构定义及所属功能文档 |

## PlayerProgress

导出接口 · 源码第 103 行。

```ts
export type PlayerProgress = Record<string, number>;
```

## StoryOnboarding

导出接口 · 源码第 104 行。

```ts
export interface StoryOnboarding {
    startingLevel: number;
    bonus: string;
    allowPlayerCreate: boolean;
    mode?: 'campaign' | 'arena' | 'open';
    startingGrants?: import('./lancer-starting-grants').LancerStartingGrant[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `startingLevel` | 否 | `number` | 见结构定义及所属功能文档 |
| `bonus` | 否 | `string` | 见结构定义及所属功能文档 |
| `allowPlayerCreate` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `mode` | 是 | `'campaign'&#124;'arena'&#124;'open'` | 见结构定义及所属功能文档 |
| `startingGrants` | 是 | `import('./lancer-starting-grants').LancerStartingGrant[]` | 见结构定义及所属功能文档 |

## SceneEffectMap

导出接口 · 源码第 105 行。

```ts
export type SceneEffectMap = Record<string, PresentationEffect[]>;
```

## StoryWorkspace

导出接口 · 源码第 106 行。

```ts
export interface StoryWorkspace {
    progressDirectories?: ProgressDirectories;
    lancerNodeRuns?: Record<string, LancerNodeRun>;
    lancerScenePlans?: Record<string, LancerScenePlan>;
    tacticalMissions?: Record<string, TacticalMission>;
    sceneEffects?: SceneEffectMap;
    presentation?: PresentationState;
    sceneGraphs?: SceneGraphLibrary;
    playerProgress?: Record<string, PlayerProgress>;
    onboarding?: StoryOnboarding;
    atlas?: WorldAtlas;
    conversationChannels?: ConversationChannel[];
    combatJournal?: CombatJournal;
    combatCheckpoints?: CombatCheckpoint[];
    encounters?: Record<string, SceneEncounter>;
    assetPack?: WorldAssetPack;
    compendiumDirectory?: DocumentDirectory;
    compendiums?: CompendiumPack[];
    entityDirectories?: EntityDirectories;
    journalDirectory?: DocumentDirectory;
    adventure?: AdventureState;
    teamAssets?: TeamAssets;
    sceneJournals?: Record<string, JournalReference>;
    scenePreloads?: ScenePreload[];
    sceneNavigation?: Record<string, SceneNavigationConfig>;
    sceneDirectory?: SceneDirectory;
    paused?: boolean;
    climbAttempts?: Record<string, string>;
    regionDecisions?: RegionDecision[];
    sceneViews?: Record<string, string>;
    sceneChannelVisits?: SceneChannelVisits;
    calendar?: WorldCalendar;
    plugins?: StoryPlugins;
    theatre?: TheatreState;
    bossBar?: BossBarState;
    monsterHpVisibility?: MonsterHpVisibility;
    library?: WorldLibrary;
    handouts?: StoryHandout[];
    recaps?: StoryRecap[];
    dndRules?: {
        dawnHour?: number | null;
        outsideCombatTime: 'frozen' | 'realtime';
        backgroundAbilityUnbound?: boolean;
    };
    reactionSeconds?: number;
    version: 1;
    members: StoryMember[];
    packs: StoryPack[];
    resources: StoryResource[];
    grants: ResourceGrant[];
    entries: StoryEntry[];
    messages: StoryMessage[];
    counters: StoryCounter[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `progressDirectories` | 是 | `ProgressDirectories` | 见结构定义及所属功能文档 |
| `lancerNodeRuns` | 是 | `Record<string,LancerNodeRun>` | 见结构定义及所属功能文档 |
| `lancerScenePlans` | 是 | `Record<string,LancerScenePlan>` | 见结构定义及所属功能文档 |
| `tacticalMissions` | 是 | `Record<string,TacticalMission>` | 见结构定义及所属功能文档 |
| `sceneEffects` | 是 | `SceneEffectMap` | 见结构定义及所属功能文档 |
| `presentation` | 是 | `PresentationState` | 见结构定义及所属功能文档 |
| `sceneGraphs` | 是 | `SceneGraphLibrary` | 见结构定义及所属功能文档 |
| `playerProgress` | 是 | `Record<string,PlayerProgress>` | 见结构定义及所属功能文档 |
| `onboarding` | 是 | `StoryOnboarding` | 见结构定义及所属功能文档 |
| `atlas` | 是 | `WorldAtlas` | 见结构定义及所属功能文档 |
| `conversationChannels` | 是 | `ConversationChannel[]` | 见结构定义及所属功能文档 |
| `combatJournal` | 是 | `CombatJournal` | 见结构定义及所属功能文档 |
| `combatCheckpoints` | 是 | `CombatCheckpoint[]` | 见结构定义及所属功能文档 |
| `encounters` | 是 | `Record<string,SceneEncounter>` | 见结构定义及所属功能文档 |
| `assetPack` | 是 | `WorldAssetPack` | 见结构定义及所属功能文档 |
| `compendiumDirectory` | 是 | `DocumentDirectory` | 见结构定义及所属功能文档 |
| `compendiums` | 是 | `CompendiumPack[]` | 见结构定义及所属功能文档 |
| `entityDirectories` | 是 | `EntityDirectories` | 见结构定义及所属功能文档 |
| `journalDirectory` | 是 | `DocumentDirectory` | 见结构定义及所属功能文档 |
| `adventure` | 是 | `AdventureState` | 见结构定义及所属功能文档 |
| `teamAssets` | 是 | `TeamAssets` | 见结构定义及所属功能文档 |
| `sceneJournals` | 是 | `Record<string,JournalReference>` | 见结构定义及所属功能文档 |
| `scenePreloads` | 是 | `ScenePreload[]` | 见结构定义及所属功能文档 |
| `sceneNavigation` | 是 | `Record<string,SceneNavigationConfig>` | 见结构定义及所属功能文档 |
| `sceneDirectory` | 是 | `SceneDirectory` | 见结构定义及所属功能文档 |
| `paused` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `climbAttempts` | 是 | `Record<string,string>` | 见结构定义及所属功能文档 |
| `regionDecisions` | 是 | `RegionDecision[]` | 见结构定义及所属功能文档 |
| `sceneViews` | 是 | `Record<string,string>` | 见结构定义及所属功能文档 |
| `sceneChannelVisits` | 是 | `SceneChannelVisits` | 见结构定义及所属功能文档 |
| `calendar` | 是 | `WorldCalendar` | 见结构定义及所属功能文档 |
| `plugins` | 是 | `StoryPlugins` | 见结构定义及所属功能文档 |
| `theatre` | 是 | `TheatreState` | 见结构定义及所属功能文档 |
| `bossBar` | 是 | `BossBarState` | 见结构定义及所属功能文档 |
| `monsterHpVisibility` | 是 | `MonsterHpVisibility` | 见结构定义及所属功能文档 |
| `library` | 是 | `WorldLibrary` | 见结构定义及所属功能文档 |
| `handouts` | 是 | `StoryHandout[]` | 见结构定义及所属功能文档 |
| `recaps` | 是 | `StoryRecap[]` | 见结构定义及所属功能文档 |
| `dndRules` | 是 | `{dawnHour?:number&#124;null;outsideCombatTime:'frozen'&#124;'realtime';backgroundAbilityUnbound?:boolean}` | 见结构定义及所属功能文档 |
| `dndRules.dawnHour` | 是 | `number&#124;null` | 见结构定义及所属功能文档 |
| `dndRules.outsideCombatTime` | 否 | `'frozen'&#124;'realtime'` | 见结构定义及所属功能文档 |
| `dndRules.backgroundAbilityUnbound` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `reactionSeconds` | 是 | `number` | 见结构定义及所属功能文档 |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `members` | 否 | `StoryMember[]` | 见结构定义及所属功能文档 |
| `packs` | 否 | `StoryPack[]` | 见结构定义及所属功能文档 |
| `resources` | 否 | `StoryResource[]` | 见结构定义及所属功能文档 |
| `grants` | 否 | `ResourceGrant[]` | 见结构定义及所属功能文档 |
| `entries` | 否 | `StoryEntry[]` | 见结构定义及所属功能文档 |
| `messages` | 否 | `StoryMessage[]` | 见结构定义及所属功能文档 |
| `counters` | 否 | `StoryCounter[]` | 见结构定义及所属功能文档 |

## storyObject

导出接口 · 源码第 128 行。

```ts
export const storyObject: (v: unknown): Record<string, unknown>;
```

## storyText

导出接口 · 源码第 129 行。

```ts
export const storyText: (v: unknown, max?: number): string;
```

## storyId

导出接口 · 源码第 130 行。

```ts
export const storyId: (v: unknown): string;
```

## storyNumber

导出接口 · 源码第 131 行。

```ts
export const storyNumber: (v: unknown, min?: number, max?: number): number;
```

## storyList

导出接口 · 源码第 132 行。

```ts
export const storyList: (v: unknown, max?: number): unknown[];
```

## storyEnum

导出接口 · 源码第 133 行。

```ts
export const storyEnum: <T extends string>(v: unknown, values: readonly T[]): T;
```

## emptyStory

导出接口 · 源码第 137 行。

```ts
export function emptyStory(): StoryWorkspace;
```

## blankResource

导出接口 · 源码第 138 行。

```ts
export function blankResource(systemId: GameSystemId, id: string): StoryResource;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `systemId` | 否 | `GameSystemId` | — |
| `id` | 否 | `string` | — |

## blankActivity

导出接口 · 源码第 139 行。

```ts
export function blankActivity(id: string): ResourceActivity;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |

## parseResource

导出接口 · 源码第 140 行。

```ts
export function parseResource(raw: unknown): StoryResource;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parsePresentationState

导出接口 · 源码第 151 行。

```ts
export function parsePresentationState(raw: unknown): PresentationState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseSceneEffects

导出接口 · 源码第 155 行。

```ts
export function parseSceneEffects(raw: unknown): SceneEffectMap;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseOnboarding

导出接口 · 源码第 160 行。

```ts
export function parseOnboarding(raw: unknown): StoryOnboarding;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parsePlayerProgress

导出接口 · 源码第 163 行。

```ts
export function parsePlayerProgress(raw: unknown): Record<string,PlayerProgress>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseSceneGraph

导出接口 · 源码第 183 行。

```ts
export function parseSceneGraph(raw: unknown): SceneGraph;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseLegacySceneGraph

导出接口 · 源码第 187 行。

```ts
export function parseLegacySceneGraph(raw: unknown): SceneGraphLibrary;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseSceneGraphLibrary

导出接口 · 源码第 190 行。

```ts
export function parseSceneGraphLibrary(raw: unknown): SceneGraphLibrary;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseStory

导出接口 · 源码第 198 行。

```ts
export function parseStory(raw: unknown): StoryWorkspace;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## storyGm

导出接口 · 源码第 219 行。

```ts
export function storyGm(story: StoryWorkspace|undefined, ownerId: string, playerId: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace&#124;undefined` | — |
| `ownerId` | 否 | `string` | — |
| `playerId` | 否 | `string` | — |

## projectStory

导出接口 · 源码第 220 行。

```ts
export function projectStory(story: StoryWorkspace, ownerId: string, playerId: string|undefined, actorIds: ReadonlySet<string>, sceneIds?: ReadonlySet<string>, readableActorIds?: ReadonlySet<string>, combatActorIds?: ReadonlySet<string>, channelScenes?: ReadonlySet<string>): StoryWorkspace;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `ownerId` | 否 | `string` | — |
| `playerId` | 否 | `string&#124;undefined` | — |
| `actorIds` | 否 | `ReadonlySet<string>` | — |
| `sceneIds` | 是 | `ReadonlySet<string>` | — |
| `readableActorIds` | 是 | `ReadonlySet<string>` | actorIds |
| `combatActorIds` | 是 | `ReadonlySet<string>` | readableActorIds |
| `channelScenes` | 是 | `ReadonlySet<string>` | new Set() |

## projectStoryValue

导出接口 · 源码第 224 行。

Borrow projected values only while serializing or inside an enclosing detached copy.

```ts
export function projectStoryValue(story: StoryWorkspace, ownerId: string, playerId: string|undefined, actorIds: ReadonlySet<string>, sceneIds?: ReadonlySet<string>, readableActorIds?: ReadonlySet<string>, combatActorIds?: ReadonlySet<string>, channelScenes?: ReadonlySet<string>): StoryWorkspace;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `ownerId` | 否 | `string` | — |
| `playerId` | 否 | `string&#124;undefined` | — |
| `actorIds` | 否 | `ReadonlySet<string>` | — |
| `sceneIds` | 是 | `ReadonlySet<string>` | — |
| `readableActorIds` | 是 | `ReadonlySet<string>` | actorIds |
| `combatActorIds` | 是 | `ReadonlySet<string>` | readableActorIds |
| `channelScenes` | 是 | `ReadonlySet<string>` | new Set() |
