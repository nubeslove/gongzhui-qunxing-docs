# game/packages/session/src/story-workspace.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {applyStoryProgress,settleStoryProgress} from './story-progress';
import type {StoryProgressCommand} from '@aelzerant/contracts';
import {assignUserColor,parseUserColor} from '@aelzerant/contracts';
import {applyWorldAssets} from './story-assets';
import type {WorldAssetCommand} from '@aelzerant/contracts';
import {applyCompendiumCatalog} from './story-compendium';
import type {CompendiumCatalogCommand,CompendiumDirectoryCommand} from '@aelzerant/contracts';
import {applyResourceEdit} from './story-resource-edits';
import {canonicalJson,type ResourceTransferCommand,type GameSystemId,type StoryResource} from '@aelzerant/contracts';
import {applyResourceTransfer} from './story-resource-transfer';
import {placeEntity,type EntityDirectoryCommand} from '@aelzerant/contracts';
import {applyEntityDirectory} from './story-entity-directory';
import {applyJournalTransfer} from './story-journal-transfer';
import type {JournalTransferCommand} from '@aelzerant/contracts';
import {applyJournalDirectory} from './story-journal-directory';
import {placeInDocumentDirectory,removeFromDocumentDirectory,type JournalDirectoryCommand} from '@aelzerant/contracts';
import {applyJournalSecret} from './story-journal-secrets';
import type {JournalSecretCommand} from '@aelzerant/contracts';
import {applyJournalAction} from './story-journal-actions';
import type {JournalActionCommand} from '@aelzerant/contracts';
import {changeSceneJournal,pruneSceneJournals,type SceneJournalCommand} from '@aelzerant/contracts';
import {applyScenePreload} from './story-scene-preload';
import type {ScenePreloadCommand,ScenePreloadFile} from '@aelzerant/contracts';
import {applySceneNavigation} from './story-scene-navigation';
import type {SceneNavigationCommand} from '@aelzerant/contracts';
import {applySceneDirectory} from './story-scene-directory';
import type {SceneDirectoryCommand} from '@aelzerant/contracts';
import {saveJournalEntry} from './story-journal';
import {applyRegionDecision} from './region-decisions';
import {applyStoryDelivery} from './story-delivery';
import {applyCalendarCommand} from './story-calendar';
import type {CalendarCommand} from '@aelzerant/contracts';
import { journalDeletable, emptyStory, parseResource, parseStory, storyGm, storyId, storyText, storyObject, storyEnum, storyList, type StoryWorkspace, type StoryEntry, type StoryPack, type StoryCounter } from '@aelzerant/contracts';
import {applyConversation} from './story-conversation';
import {applyLibraryCommand} from './story-library';
import type {LibraryCommand,ConversationCommand} from '@aelzerant/contracts';
```
</details>

## StoryCommand

导出接口 · 源码第 38 行。

```ts
export type StoryCommand = StoryProgressCommand | WorldAssetCommand | CompendiumDirectoryCommand | CompendiumCatalogCommand | ResourceTransferCommand | EntityDirectoryCommand | JournalTransferCommand | JournalDirectoryCommand | JournalSecretCommand | JournalActionCommand | SceneJournalCommand | ScenePreloadCommand | SceneNavigationCommand | SceneDirectoryCommand | {
    type: 'region.environment';
    id: string;
    resolution: NonNullable<import('@aelzerant/contracts').EnvironmentDecision['resolution']>;
} | {
    type: 'region.answer';
    id: string;
    accept: boolean;
} | {
    type: 'region.hold' | 'region.timeout' | 'region.cancel';
    id: string;
} | {
    type: 'world.pause';
    paused: boolean;
} | CalendarCommand | {
    type: 'handout.show';
    entryId: string;
    pageId?: string;
    recipients: string[] | null;
} | {
    type: 'handout.read' | 'handout.close' | 'handout.remove' | 'recap.remove';
    id: string;
} | {
    type: 'recap.save';
    summary: string;
    nextSteps: string;
    sceneName: string;
    visibility: 'gm' | 'public';
} | ConversationCommand | LibraryCommand | {
    type: 'resource.save';
    resource: unknown;
    expectedResource?: StoryResource | null;
    folderId?: string | null;
} | {
    type: 'resource.delete';
    id: string;
    expectedResource?: StoryResource;
} | {
    type: 'resource.grant';
    actorId: string;
    resourceId: string;
    remove?: boolean;
} | {
    type: 'entry.save';
    entry: StoryEntry;
    folderId?: string | null;
} | {
    type: 'entry.delete';
    id: string;
} | {
    type: 'member.set';
    id: string;
    name: string;
    role: 'gm' | 'player';
} | {
    type: 'member.join';
    name: string;
} | {
    type: 'member.color';
    id: string;
    color: string;
} | {
    type: 'decision.settings';
    seconds: number;
} | {
    type: 'dnd.settings';
    outsideCombatTime: 'frozen' | 'realtime';
    backgroundAbilityUnbound: boolean;
} | {
    type: 'packs.set';
    packs: StoryPack[];
} | {
    type: 'counter.set';
    counter: StoryCounter;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支15.type` | 否 | `'region.environment'` | 见结构定义及所属功能文档 |
| `分支15.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支15.resolution` | 否 | `NonNullable<import('@aelzerant/contracts').EnvironmentDecision['resolution']>` | 见结构定义及所属功能文档 |
| `分支16.type` | 否 | `'region.answer'` | 见结构定义及所属功能文档 |
| `分支16.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支16.accept` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支17.type` | 否 | `'region.hold'&#124;'region.timeout'&#124;'region.cancel'` | 见结构定义及所属功能文档 |
| `分支17.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支18.type` | 否 | `'world.pause'` | 见结构定义及所属功能文档 |
| `分支18.paused` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支20.type` | 否 | `'handout.show'` | 见结构定义及所属功能文档 |
| `分支20.entryId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支20.pageId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支20.recipients` | 否 | `string[]&#124;null` | 见结构定义及所属功能文档 |
| `分支21.type` | 否 | `'handout.read'&#124;'handout.close'&#124;'handout.remove'&#124;'recap.remove'` | 见结构定义及所属功能文档 |
| `分支21.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支22.type` | 否 | `'recap.save'` | 见结构定义及所属功能文档 |
| `分支22.summary` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支22.nextSteps` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支22.sceneName` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支22.visibility` | 否 | `'gm'&#124;'public'` | 见结构定义及所属功能文档 |
| `分支25.type` | 否 | `'resource.save'` | 见结构定义及所属功能文档 |
| `分支25.resource` | 否 | `unknown` | 见结构定义及所属功能文档 |
| `分支25.expectedResource` | 是 | `StoryResource&#124;null` | 见结构定义及所属功能文档 |
| `分支25.folderId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |
| `分支26.type` | 否 | `'resource.delete'` | 见结构定义及所属功能文档 |
| `分支26.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支26.expectedResource` | 是 | `StoryResource` | 见结构定义及所属功能文档 |
| `分支27.type` | 否 | `'resource.grant'` | 见结构定义及所属功能文档 |
| `分支27.actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支27.resourceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支27.remove` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支28.type` | 否 | `'entry.save'` | 见结构定义及所属功能文档 |
| `分支28.entry` | 否 | `StoryEntry` | 见结构定义及所属功能文档 |
| `分支28.folderId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |
| `分支29.type` | 否 | `'entry.delete'` | 见结构定义及所属功能文档 |
| `分支29.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支30.type` | 否 | `'member.set'` | 见结构定义及所属功能文档 |
| `分支30.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支30.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支30.role` | 否 | `'gm'&#124;'player'` | 见结构定义及所属功能文档 |
| `分支31.type` | 否 | `'member.join'` | 见结构定义及所属功能文档 |
| `分支31.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支32.type` | 否 | `'member.color'` | 见结构定义及所属功能文档 |
| `分支32.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支32.color` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支33.type` | 否 | `'decision.settings'` | 见结构定义及所属功能文档 |
| `分支33.seconds` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支34.type` | 否 | `'dnd.settings'` | 见结构定义及所属功能文档 |
| `分支34.outsideCombatTime` | 否 | `'frozen'&#124;'realtime'` | 见结构定义及所属功能文档 |
| `分支34.backgroundAbilityUnbound` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支35.type` | 否 | `'packs.set'` | 见结构定义及所属功能文档 |
| `分支35.packs` | 否 | `StoryPack[]` | 见结构定义及所属功能文档 |
| `分支36.type` | 否 | `'counter.set'` | 见结构定义及所属功能文档 |
| `分支36.counter` | 否 | `StoryCounter` | 见结构定义及所属功能文档 |

## StoryContext

导出接口 · 源码第 63 行。

```ts
export interface StoryContext {
    worldRevision?: number;
    actorDocumentIds?: ReadonlySet<string>;
    sceneDocumentIds?: ReadonlySet<string>;
    systemId?: GameSystemId;
    sceneNames?: ReadonlyMap<string, string>;
    preloadFiles?: (id: string, sharedPaths: ReadonlySet<string>) => ScenePreloadFile[];
    activeSceneId?: string | null;
    sceneIds?: ReadonlySet<string>;
    sceneId?: string | null;
    speakerTokens?: readonly {
        id: string;
        actorId: string;
        hidden?: boolean;
    }[];
    diceContext?: Readonly<Record<string, number>>;
    ownerId: string;
    senderId: string;
    now: number;
    id: string;
    actorIds: ReadonlySet<string>;
    controlledActorIds?: ReadonlySet<string>;
    memberIds?: ReadonlySet<string>;
    rollData?: (actorId: string) => Record<string, number>;
    roll?: (sides: number) => number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `worldRevision` | 是 | `number` | 见结构定义及所属功能文档 |
| `actorDocumentIds` | 是 | `ReadonlySet<string>` | 见结构定义及所属功能文档 |
| `sceneDocumentIds` | 是 | `ReadonlySet<string>` | 见结构定义及所属功能文档 |
| `systemId` | 是 | `GameSystemId` | 见结构定义及所属功能文档 |
| `sceneNames` | 是 | `ReadonlyMap<string,string>` | 见结构定义及所属功能文档 |
| `preloadFiles` | 是 | `(id:string,sharedPaths:ReadonlySet<string>)=>ScenePreloadFile[]` | 见结构定义及所属功能文档 |
| `activeSceneId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |
| `sceneIds` | 是 | `ReadonlySet<string>` | 见结构定义及所属功能文档 |
| `sceneId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |
| `speakerTokens` | 是 | `readonly {id:string;actorId:string;hidden?:boolean}[]` | 见结构定义及所属功能文档 |
| `diceContext` | 是 | `Readonly<Record<string,number>>` | 见结构定义及所属功能文档 |
| `ownerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `senderId` | 否 | `string` | 见结构定义及所属功能文档 |
| `now` | 否 | `number` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `actorIds` | 否 | `ReadonlySet<string>` | 见结构定义及所属功能文档 |
| `controlledActorIds` | 是 | `ReadonlySet<string>` | 见结构定义及所属功能文档 |
| `memberIds` | 是 | `ReadonlySet<string>` | 见结构定义及所属功能文档 |
| `rollData` | 是 | `(actorId:string)=>Record<string,number>` | 见结构定义及所属功能文档 |
| `roll` | 是 | `(sides:number)=>number` | 见结构定义及所属功能文档 |

## applyStoryCommand

导出接口 · 源码第 65 行。

Called inside the world's existing atomic command queue, never directly on received snapshots.

```ts
export function applyStoryCommand(previous: StoryWorkspace|undefined, raw: unknown, c: StoryContext): StoryWorkspace;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `previous` | 否 | `StoryWorkspace&#124;undefined` | — |
| `raw` | 否 | `unknown` | — |
| `c` | 否 | `StoryContext` | — |
