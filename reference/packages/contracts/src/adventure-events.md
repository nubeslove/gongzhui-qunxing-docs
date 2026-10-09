# game/packages/contracts/src/adventure-events.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseUtopiaIntent,type UtopiaIntent} from './utopia';
import {parseStoryStage,parseAdventureBallot,type StoryStage,type AdventureBallot,type StageCommand} from './story-stage';
import {storyObject as obj,storyList as list,storyId,storyText as text,storyNumber as num,storyEnum as one} from './story';
import {parseSceneRegions,type SceneRegion} from './scene-region';
import type {ScenePoint} from './scene-features';
```
</details>

## AdventureSignal

导出接口 · 源码第 8 行。

```ts
export type AdventureSignal = keyof typeof ADVENTURE_SIGNALS;
```

## AdventureSelector

导出接口 · 源码第 9 行。

```ts
export interface AdventureSelector {
    kind: 'source' | 'ids' | 'pcs' | 'npcs' | 'monsters' | 'objects' | 'all';
    ids?: string[];
    radiusFeet?: number;
    center?: ScenePoint;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'source'&#124;'ids'&#124;'pcs'&#124;'npcs'&#124;'monsters'&#124;'objects'&#124;'all'` | 见结构定义及所属功能文档 |
| `ids` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `radiusFeet` | 是 | `number` | 见结构定义及所属功能文档 |
| `center` | 是 | `ScenePoint` | 见结构定义及所属功能文档 |

## AdventureBinding

导出接口 · 源码第 10 行。

```ts
export type AdventureBinding = {
    kind: 'point';
    point: ScenePoint;
    radiusFeet: number;
} | {
    kind: 'region' | 'tile' | 'drawing' | 'wall' | 'token';
    id: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.kind` | 否 | `'point'` | 见结构定义及所属功能文档 |
| `分支1.point` | 否 | `ScenePoint` | 见结构定义及所属功能文档 |
| `分支1.radiusFeet` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'region'&#124;'tile'&#124;'drawing'&#124;'wall'&#124;'token'` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |

## AdventureEffect

导出接口 · 源码第 11 行。

```ts
export type AdventureEffect = ({
    type: 'event';
    eventId: string;
} | {
    type: 'stage';
    stageId: string;
} | {
    type: 'utopia';
    sceneId: string;
    intent: UtopiaIntent;
} | {
    type: 'damage' | 'heal';
    formula: string;
    damageType?: string;
} | {
    type: 'condition';
    condition: string;
    add: boolean;
} | {
    type: 'teleport';
    sceneId: string;
    point: ScenePoint;
} | {
    type: 'combat';
    precombatEffects: 'keep' | 'clear';
} | {
    type: 'scene';
    sceneId: string;
} | {
    type: 'deploy';
    sceneId: string;
    units: {
        actorId: string;
        point: ScenePoint;
        hidden: boolean;
    }[];
    ifAbsent?: boolean;
} | {
    type: 'withdraw';
    sceneId: string;
    actorIds: string[];
} | {
    type: 'door';
    sceneId: string;
    wallIds: string[];
    state: 'open' | 'closed' | 'locked';
    unlock?: boolean;
} | {
    type: 'reveal';
    entryId: string;
} | {
    type: 'quest';
    entryId: string;
    objectiveId: string;
    mode: 'add' | 'set';
    value: number;
} | {
    type: 'quest.publish';
    entryId: string;
} | {
    type: 'economy';
    cost: 'action' | 'bonus' | 'reaction';
} | {
    type: 'region';
    region: SceneRegion;
} | {
    type: 'trigger';
    triggerId: string;
    enabled: boolean;
} | {
    type: 'flag';
    key: string;
    value: string;
} | {
    type: 'message';
    text: string;
    audience: 'all' | 'gm' | 'owner';
}) & {
    targets?: AdventureSelector;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'event'` | 见结构定义及所属功能文档 |
| `分支1.eventId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'stage'` | 见结构定义及所属功能文档 |
| `分支2.stageId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'utopia'` | 见结构定义及所属功能文档 |
| `分支3.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.intent` | 否 | `UtopiaIntent` | 见结构定义及所属功能文档 |
| `分支4.type` | 否 | `'damage'&#124;'heal'` | 见结构定义及所属功能文档 |
| `分支4.formula` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.damageType` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支5.type` | 否 | `'condition'` | 见结构定义及所属功能文档 |
| `分支5.condition` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.add` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支6.type` | 否 | `'teleport'` | 见结构定义及所属功能文档 |
| `分支6.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.point` | 否 | `ScenePoint` | 见结构定义及所属功能文档 |
| `分支7.type` | 否 | `'combat'` | 见结构定义及所属功能文档 |
| `分支7.precombatEffects` | 否 | `'keep'&#124;'clear'` | 见结构定义及所属功能文档 |
| `分支8.type` | 否 | `'scene'` | 见结构定义及所属功能文档 |
| `分支8.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.type` | 否 | `'deploy'` | 见结构定义及所属功能文档 |
| `分支9.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.units` | 否 | `{actorId:string;point:ScenePoint;hidden:boolean}[]` | 见结构定义及所属功能文档 |
| `分支9.units.[].actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.units.[].point` | 否 | `ScenePoint` | 见结构定义及所属功能文档 |
| `分支9.units.[].hidden` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支9.ifAbsent` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.type` | 否 | `'withdraw'` | 见结构定义及所属功能文档 |
| `分支10.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支10.actorIds` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支11.type` | 否 | `'door'` | 见结构定义及所属功能文档 |
| `分支11.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支11.wallIds` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支11.state` | 否 | `'open'&#124;'closed'&#124;'locked'` | 见结构定义及所属功能文档 |
| `分支11.unlock` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支12.type` | 否 | `'reveal'` | 见结构定义及所属功能文档 |
| `分支12.entryId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支13.type` | 否 | `'quest'` | 见结构定义及所属功能文档 |
| `分支13.entryId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支13.objectiveId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支13.mode` | 否 | `'add'&#124;'set'` | 见结构定义及所属功能文档 |
| `分支13.value` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支14.type` | 否 | `'quest.publish'` | 见结构定义及所属功能文档 |
| `分支14.entryId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支15.type` | 否 | `'economy'` | 见结构定义及所属功能文档 |
| `分支15.cost` | 否 | `'action'&#124;'bonus'&#124;'reaction'` | 见结构定义及所属功能文档 |
| `分支16.type` | 否 | `'region'` | 见结构定义及所属功能文档 |
| `分支16.region` | 否 | `SceneRegion` | 见结构定义及所属功能文档 |
| `分支17.type` | 否 | `'trigger'` | 见结构定义及所属功能文档 |
| `分支17.triggerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支17.enabled` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支18.type` | 否 | `'flag'` | 见结构定义及所属功能文档 |
| `分支18.key` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支18.value` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支19.type` | 否 | `'message'` | 见结构定义及所属功能文档 |
| `分支19.text` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支19.audience` | 否 | `'all'&#124;'gm'&#124;'owner'` | 见结构定义及所属功能文档 |
| `targets` | 是 | `AdventureSelector` | 见结构定义及所属功能文档 |

## AdventureCheck

导出接口 · 源码第 32 行。

```ts
export interface AdventureCheck {
    ability: 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';
    skill?: string;
    save: boolean;
    dc: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `ability` | 否 | `'str'&#124;'dex'&#124;'con'&#124;'int'&#124;'wis'&#124;'cha'` | 见结构定义及所属功能文档 |
| `skill` | 是 | `string` | 见结构定义及所属功能文档 |
| `save` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `dc` | 否 | `number` | 见结构定义及所属功能文档 |

## AdventureRequirement

导出接口 · 源码第 33 行。

```ts
export interface AdventureRequirement {
    abilityId?: string;
    pool?: string;
    cost: number;
    label: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `abilityId` | 是 | `string` | 见结构定义及所属功能文档 |
| `pool` | 是 | `string` | 见结构定义及所属功能文档 |
| `cost` | 否 | `number` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |

## AdventureOption

导出接口 · 源码第 34 行。

```ts
export interface AdventureOption {
    id: string;
    label: string;
    description: string;
    check?: AdventureCheck;
    requirement?: AdventureRequirement;
    effects: AdventureEffect[];
    failure: AdventureEffect[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `check` | 是 | `AdventureCheck` | 见结构定义及所属功能文档 |
| `requirement` | 是 | `AdventureRequirement` | 见结构定义及所属功能文档 |
| `effects` | 否 | `AdventureEffect[]` | 见结构定义及所属功能文档 |
| `failure` | 否 | `AdventureEffect[]` | 见结构定义及所属功能文档 |

## AdventureEvent

导出接口 · 源码第 35 行。

```ts
export interface AdventureEvent {
    id: string;
    revision: number;
    name: string;
    text: string;
    image: string;
    notes: string;
    audience: 'all' | 'gm' | 'owner';
    resolution: 'first' | 'each' | 'gm' | 'vote';
    options: AdventureOption[];
    cinematic?: {
        media: string;
        kind: 'image' | 'video';
        seconds: number;
        fit: 'contain' | 'cover';
        sound: boolean;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `image` | 否 | `string` | 见结构定义及所属功能文档 |
| `notes` | 否 | `string` | 见结构定义及所属功能文档 |
| `audience` | 否 | `'all'&#124;'gm'&#124;'owner'` | 见结构定义及所属功能文档 |
| `resolution` | 否 | `'first'&#124;'each'&#124;'gm'&#124;'vote'` | 见结构定义及所属功能文档 |
| `options` | 否 | `AdventureOption[]` | 见结构定义及所属功能文档 |
| `cinematic` | 是 | `{media:string;kind:'image'&#124;'video';seconds:number;fit:'contain'&#124;'cover';sound:boolean}` | 见结构定义及所属功能文档 |
| `cinematic.media` | 否 | `string` | 见结构定义及所属功能文档 |
| `cinematic.kind` | 否 | `'image'&#124;'video'` | 见结构定义及所属功能文档 |
| `cinematic.seconds` | 否 | `number` | 见结构定义及所属功能文档 |
| `cinematic.fit` | 否 | `'contain'&#124;'cover'` | 见结构定义及所属功能文档 |
| `cinematic.sound` | 否 | `boolean` | 见结构定义及所属功能文档 |

## AdventureTrigger

导出接口 · 源码第 36 行。

```ts
export interface AdventureTrigger {
    id: string;
    revision: number;
    name: string;
    sceneId: string;
    binding: AdventureBinding;
    signals: AdventureSignal[];
    enabled: boolean;
    visible: boolean;
    once: 'never' | 'world' | 'token';
    cooldown: number;
    staySeconds: number;
    interactionFeet: number;
    filter: AdventureSelector;
    requires?: {
        key: string;
        value: string;
    };
    effects: AdventureEffect[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `binding` | 否 | `AdventureBinding` | 见结构定义及所属功能文档 |
| `signals` | 否 | `AdventureSignal[]` | 见结构定义及所属功能文档 |
| `enabled` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `visible` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `once` | 否 | `'never'&#124;'world'&#124;'token'` | 见结构定义及所属功能文档 |
| `cooldown` | 否 | `number` | 见结构定义及所属功能文档 |
| `staySeconds` | 否 | `number` | 见结构定义及所属功能文档 |
| `interactionFeet` | 否 | `number` | 见结构定义及所属功能文档 |
| `filter` | 否 | `AdventureSelector` | 见结构定义及所属功能文档 |
| `requires` | 是 | `{key:string;value:string}` | 见结构定义及所属功能文档 |
| `requires.key` | 否 | `string` | 见结构定义及所属功能文档 |
| `requires.value` | 否 | `string` | 见结构定义及所属功能文档 |
| `effects` | 否 | `AdventureEffect[]` | 见结构定义及所属功能文档 |

## AdventureDecision

导出接口 · 源码第 37 行。

```ts
export interface AdventureDecision {
    playerId: string;
    actorId: string;
    optionId: string;
    at: number;
    success: boolean;
    total?: number;
    text: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `playerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `optionId` | 否 | `string` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |
| `success` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `total` | 是 | `number` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |

## AdventureRun

导出接口 · 源码第 38 行。

```ts
export interface AdventureRun {
    ballot?: AdventureBallot;
    id: string;
    event: AdventureEvent;
    sceneId: string;
    sourceId: string;
    recipients: string[] | null;
    startedAt: number;
    mediaReady?: string[];
    endedAt?: number;
    decisions: AdventureDecision[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `ballot` | 是 | `AdventureBallot` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `event` | 否 | `AdventureEvent` | 见结构定义及所属功能文档 |
| `sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `sourceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `recipients` | 否 | `string[]&#124;null` | 见结构定义及所属功能文档 |
| `startedAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `mediaReady` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `endedAt` | 是 | `number` | 见结构定义及所属功能文档 |
| `decisions` | 否 | `AdventureDecision[]` | 见结构定义及所属功能文档 |

## AdventureState

导出接口 · 源码第 39 行。

```ts
export interface AdventureState {
    stage?: StoryStage;
    version: 1;
    events: AdventureEvent[];
    triggers: AdventureTrigger[];
    runs: AdventureRun[];
    flags: Record<string, string>;
    fired: Record<string, number>;
    presence: Record<string, {
        since: number;
        fired: boolean;
    }>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `stage` | 是 | `StoryStage` | 见结构定义及所属功能文档 |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `events` | 否 | `AdventureEvent[]` | 见结构定义及所属功能文档 |
| `triggers` | 否 | `AdventureTrigger[]` | 见结构定义及所属功能文档 |
| `runs` | 否 | `AdventureRun[]` | 见结构定义及所属功能文档 |
| `flags` | 否 | `Record<string,string>` | 见结构定义及所属功能文档 |
| `fired` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `presence` | 否 | `Record<string,{since:number;fired:boolean}>` | 见结构定义及所属功能文档 |

## AdventureCommand

导出接口 · 源码第 40 行。

```ts
export type AdventureCommand = StageCommand | {
    op: 'event.vote';
    runId: string;
    optionId: string;
    round: number;
} | {
    op: 'event.ballot.close' | 'event.ballot.restart';
    runId: string;
    round: number;
} | {
    op: 'event.resolve';
    runId: string;
    optionId: string;
    round: number;
    actorId: string;
} | {
    op: 'notebook.run';
    entryId: string;
    chapterId: string;
    nodeId: string;
    expected: number;
    sourceId?: string;
} | {
    op: 'event.save';
    value: AdventureEvent;
    expected: number | null;
} | {
    op: 'event.delete';
    id: string;
    expected: number;
} | {
    op: 'trigger.save';
    value: AdventureTrigger;
    expected: number | null;
} | {
    op: 'trigger.delete';
    id: string;
    expected: number;
} | {
    op: 'trigger.fire';
    id: string;
    signal: AdventureSignal;
    tokenId?: string;
    point?: ScenePoint;
} | {
    op: 'trigger.interact';
    signal: 'click' | 'doubleClick' | 'rightClick';
    tokenId?: string;
    point: ScenePoint;
} | {
    op: 'event.open';
    id: string;
    sourceId?: string;
} | {
    op: 'event.choose';
    runId: string;
    optionId: string;
    actorId: string;
} | {
    op: 'event.close';
    runId: string;
} | {
    op: 'event.ready';
    runId: string;
} | {
    op: 'event.play';
    runId: string;
} | {
    op: 'tick';
} | {
    op: 'trigger.reset';
    id: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支2.op` | 否 | `'event.vote'` | 见结构定义及所属功能文档 |
| `分支2.runId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.optionId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.round` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.op` | 否 | `'event.ballot.close'&#124;'event.ballot.restart'` | 见结构定义及所属功能文档 |
| `分支3.runId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.round` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支4.op` | 否 | `'event.resolve'` | 见结构定义及所属功能文档 |
| `分支4.runId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.optionId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.round` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支4.actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.op` | 否 | `'notebook.run'` | 见结构定义及所属功能文档 |
| `分支5.entryId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.chapterId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.nodeId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.expected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支5.sourceId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支6.op` | 否 | `'event.save'` | 见结构定义及所属功能文档 |
| `分支6.value` | 否 | `AdventureEvent` | 见结构定义及所属功能文档 |
| `分支6.expected` | 否 | `number&#124;null` | 见结构定义及所属功能文档 |
| `分支7.op` | 否 | `'event.delete'` | 见结构定义及所属功能文档 |
| `分支7.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.expected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支8.op` | 否 | `'trigger.save'` | 见结构定义及所属功能文档 |
| `分支8.value` | 否 | `AdventureTrigger` | 见结构定义及所属功能文档 |
| `分支8.expected` | 否 | `number&#124;null` | 见结构定义及所属功能文档 |
| `分支9.op` | 否 | `'trigger.delete'` | 见结构定义及所属功能文档 |
| `分支9.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.expected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支10.op` | 否 | `'trigger.fire'` | 见结构定义及所属功能文档 |
| `分支10.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支10.signal` | 否 | `AdventureSignal` | 见结构定义及所属功能文档 |
| `分支10.tokenId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支10.point` | 是 | `ScenePoint` | 见结构定义及所属功能文档 |
| `分支11.op` | 否 | `'trigger.interact'` | 见结构定义及所属功能文档 |
| `分支11.signal` | 否 | `'click'&#124;'doubleClick'&#124;'rightClick'` | 见结构定义及所属功能文档 |
| `分支11.tokenId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支11.point` | 否 | `ScenePoint` | 见结构定义及所属功能文档 |
| `分支12.op` | 否 | `'event.open'` | 见结构定义及所属功能文档 |
| `分支12.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支12.sourceId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支13.op` | 否 | `'event.choose'` | 见结构定义及所属功能文档 |
| `分支13.runId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支13.optionId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支13.actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支14.op` | 否 | `'event.close'` | 见结构定义及所属功能文档 |
| `分支14.runId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支15.op` | 否 | `'event.ready'` | 见结构定义及所属功能文档 |
| `分支15.runId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支16.op` | 否 | `'event.play'` | 见结构定义及所属功能文档 |
| `分支16.runId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支17.op` | 否 | `'tick'` | 见结构定义及所属功能文档 |
| `分支18.op` | 否 | `'trigger.reset'` | 见结构定义及所属功能文档 |
| `分支18.id` | 否 | `string` | 见结构定义及所属功能文档 |

## emptyAdventure

导出接口 · 源码第 52 行。

```ts
export const emptyAdventure: (): AdventureState;
```

## parseAdventureSelector

导出接口 · 源码第 58 行。

```ts
export function parseAdventureSelector(raw: unknown): AdventureSelector;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseAdventureEffects

导出接口 · 源码第 59 行。

```ts
export function parseAdventureEffects(raw: unknown): AdventureEffect[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseAdventureEvent

导出接口 · 源码第 79 行。

```ts
export function parseAdventureEvent(raw: unknown): AdventureEvent;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseAdventureTrigger

导出接口 · 源码第 80 行。

```ts
export function parseAdventureTrigger(raw: unknown): AdventureTrigger;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseAdventure

导出接口 · 源码第 81 行。

```ts
export function parseAdventure(raw: unknown): AdventureState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## projectAdventure

导出接口 · 源码第 83 行。

Future branches and effect payloads never cross a player connection.

```ts
export function projectAdventure(state: AdventureState, playerId: string|undefined, sceneIds?: ReadonlySet<string>): AdventureState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `AdventureState` | — |
| `playerId` | 否 | `string&#124;undefined` | — |
| `sceneIds` | 是 | `ReadonlySet<string>` | — |
