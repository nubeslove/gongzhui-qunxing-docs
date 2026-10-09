# game/packages/contracts/src/story.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseWorldAtlas,projectWorldAtlas,type WorldAtlas} from './world-atlas';
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
import {parseEntityDirectories,projectEntityDirectories,type EntityDirectories} from './entity-directory';
import {journalInDirectory} from './journal-access';
import {parseJournalDirectory,projectJournalDirectory} from './journal-directory';
import type {DocumentDirectory} from './document-directory';
import {parseJournalSecrets,type JournalSecret} from './journal-secrets';
import {parseSceneJournals,projectSceneJournals} from './scene-journal';
import type {JournalReference} from './journal-reference';
import {parseScenePreloads,projectScenePreloads,type ScenePreload} from './scene-preload';
import {parseSceneNavigation,type SceneNavigationConfig} from './scene-navigation';
import {parseSceneDirectory,emptySceneDirectory,type SceneDirectory} from './scene-directory';
import {parseJournalAccess} from './journal-access';
import type {DocumentAccess} from './world-library';
import {parseJournalPages,projectJournalEntry,type JournalPage} from './story-journal';
import {parseRegionDecisions,type RegionDecision} from './region-decision';
import {parseHandouts,parseRecaps,type StoryHandout,type StoryRecap} from './story-delivery';
import { isGameSystemId, type GameSystemId } from './systems';
import { parseWorldCalendar, type WorldCalendar } from './world-calendar';
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

导出接口 · 源码第 41 行。

```ts
export type ResourceKind = keyof typeof RESOURCE_KINDS;
```

## StoryChannel

导出接口 · 源码第 42 行。

```ts
export type StoryChannel = keyof typeof STORY_CHANNELS;
```

## StoryVisibility

导出接口 · 源码第 43 行。

```ts
export type StoryVisibility = 'gm' | 'public';
```

## StoryMember

导出接口 · 源码第 44 行。

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

导出接口 · 源码第 45 行。

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

导出接口 · 源码第 46 行。

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

导出接口 · 源码第 52 行。

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

导出接口 · 源码第 62 行。

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

导出接口 · 源码第 68 行。

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

导出接口 · 源码第 69 行。

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

导出接口 · 源码第 70 行。

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

导出接口 · 源码第 71 行。

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

## StoryWorkspace

导出接口 · 源码第 72 行。

```ts
export interface StoryWorkspace {
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
    sceneJournals?: Record<string, JournalReference>;
    scenePreloads?: ScenePreload[];
    sceneNavigation?: Record<string, SceneNavigationConfig>;
    sceneDirectory?: SceneDirectory;
    paused?: boolean;
    climbAttempts?: Record<string, string>;
    regionDecisions?: RegionDecision[];
    sceneViews?: Record<string, string>;
    calendar?: WorldCalendar;
    library?: WorldLibrary;
    handouts?: StoryHandout[];
    recaps?: StoryRecap[];
    dndRules?: {
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
| `sceneJournals` | 是 | `Record<string,JournalReference>` | 见结构定义及所属功能文档 |
| `scenePreloads` | 是 | `ScenePreload[]` | 见结构定义及所属功能文档 |
| `sceneNavigation` | 是 | `Record<string,SceneNavigationConfig>` | 见结构定义及所属功能文档 |
| `sceneDirectory` | 是 | `SceneDirectory` | 见结构定义及所属功能文档 |
| `paused` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `climbAttempts` | 是 | `Record<string,string>` | 见结构定义及所属功能文档 |
| `regionDecisions` | 是 | `RegionDecision[]` | 见结构定义及所属功能文档 |
| `sceneViews` | 是 | `Record<string,string>` | 见结构定义及所属功能文档 |
| `calendar` | 是 | `WorldCalendar` | 见结构定义及所属功能文档 |
| `library` | 是 | `WorldLibrary` | 见结构定义及所属功能文档 |
| `handouts` | 是 | `StoryHandout[]` | 见结构定义及所属功能文档 |
| `recaps` | 是 | `StoryRecap[]` | 见结构定义及所属功能文档 |
| `dndRules` | 是 | `{outsideCombatTime:'frozen'&#124;'realtime';backgroundAbilityUnbound?:boolean}` | 见结构定义及所属功能文档 |
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

导出接口 · 源码第 88 行。

```ts
export const storyObject: (v: unknown): Record<string, unknown>;
```

## storyText

导出接口 · 源码第 89 行。

```ts
export const storyText: (v: unknown, max?: number): string;
```

## storyId

导出接口 · 源码第 90 行。

```ts
export const storyId: (v: unknown): string;
```

## storyNumber

导出接口 · 源码第 91 行。

```ts
export const storyNumber: (v: unknown, min?: number, max?: number): number;
```

## storyList

导出接口 · 源码第 92 行。

```ts
export const storyList: (v: unknown, max?: number): unknown[];
```

## storyEnum

导出接口 · 源码第 93 行。

```ts
export const storyEnum: <T extends string>(v: unknown, values: readonly T[]): T;
```

## emptyStory

导出接口 · 源码第 97 行。

```ts
export function emptyStory(): StoryWorkspace;
```

## blankResource

导出接口 · 源码第 98 行。

```ts
export function blankResource(systemId: GameSystemId, id: string): StoryResource;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `systemId` | 否 | `GameSystemId` | — |
| `id` | 否 | `string` | — |

## blankActivity

导出接口 · 源码第 99 行。

```ts
export function blankActivity(id: string): ResourceActivity;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |

## parseResource

导出接口 · 源码第 100 行。

```ts
export function parseResource(raw: unknown): StoryResource;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseStory

导出接口 · 源码第 111 行。

```ts
export function parseStory(raw: unknown): StoryWorkspace;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## storyGm

导出接口 · 源码第 131 行。

```ts
export function storyGm(story: StoryWorkspace|undefined, ownerId: string, playerId: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace&#124;undefined` | — |
| `ownerId` | 否 | `string` | — |
| `playerId` | 否 | `string` | — |

## projectStory

导出接口 · 源码第 132 行。

```ts
export function projectStory(story: StoryWorkspace, ownerId: string, playerId: string|undefined, actorIds: ReadonlySet<string>, sceneIds?: ReadonlySet<string>, readableActorIds?: ReadonlySet<string>): StoryWorkspace;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `ownerId` | 否 | `string` | — |
| `playerId` | 否 | `string&#124;undefined` | — |
| `actorIds` | 否 | `ReadonlySet<string>` | — |
| `sceneIds` | 是 | `ReadonlySet<string>` | — |
| `readableActorIds` | 是 | `ReadonlySet<string>` | actorIds |
