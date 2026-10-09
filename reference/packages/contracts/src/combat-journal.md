# game/packages/contracts/src/combat-journal.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as obj,storyList as list,storyId as id,storyText as text,storyNumber as num,storyEnum as one,type StoryWorkspace} from './story';
import {canReadConversationMessage,canReadConversation} from './conversation-channels';
```
</details>

## CombatCardKind

导出接口 · 源码第 5 行。

```ts
export type CombatCardKind = keyof typeof COMBAT_CARD_KINDS;
```

## CombatRollDetail

导出接口 · 源码第 6 行。

```ts
export interface CombatRollDetail {
    label: string;
    faces: number[];
    base: number;
    modifiers: {
        label: string;
        value: number;
    }[];
    total: number;
    success?: boolean;
    note?: string;
    outcome?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `faces` | 否 | `number[]` | 见结构定义及所属功能文档 |
| `base` | 否 | `number` | 见结构定义及所属功能文档 |
| `modifiers` | 否 | `{label:string;value:number}[]` | 见结构定义及所属功能文档 |
| `modifiers.[].label` | 否 | `string` | 见结构定义及所属功能文档 |
| `modifiers.[].value` | 否 | `number` | 见结构定义及所属功能文档 |
| `total` | 否 | `number` | 见结构定义及所属功能文档 |
| `success` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `note` | 是 | `string` | 见结构定义及所属功能文档 |
| `outcome` | 是 | `string` | 见结构定义及所属功能文档 |

## CombatFeedback

导出接口 · 源码第 7 行。

```ts
export interface CombatFeedback {
    actorId: string;
    kind: 'hit' | 'miss' | 'critical' | 'damage' | 'heal' | 'mirror';
    value?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'hit'&#124;'miss'&#124;'critical'&#124;'damage'&#124;'heal'&#124;'mirror'` | 见结构定义及所属功能文档 |
| `value` | 是 | `number` | 见结构定义及所属功能文档 |

## CombatStep

导出接口 · 源码第 8 行。

```ts
export interface CombatStep {
    feedback?: CombatFeedback[];
    text: string;
    movement?: {
        tokenId: string;
        name: string;
        distance: number;
        units: string;
        cost: number;
        to?: {
            x: number;
            y: number;
            z: number;
        };
    };
    simpleText?: string;
    roll?: CombatRollDetail;
    actorIds?: string[];
    reactionId?: string;
    reference?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `feedback` | 是 | `CombatFeedback[]` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `movement` | 是 | `{tokenId:string;name:string;distance:number;units:string;cost:number;to?:{x:number;y:number;z:number}}` | 见结构定义及所属功能文档 |
| `movement.tokenId` | 否 | `string` | 见结构定义及所属功能文档 |
| `movement.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `movement.distance` | 否 | `number` | 见结构定义及所属功能文档 |
| `movement.units` | 否 | `string` | 见结构定义及所属功能文档 |
| `movement.cost` | 否 | `number` | 见结构定义及所属功能文档 |
| `movement.to` | 是 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `movement.to.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `movement.to.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `movement.to.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `simpleText` | 是 | `string` | 见结构定义及所属功能文档 |
| `roll` | 是 | `CombatRollDetail` | 见结构定义及所属功能文档 |
| `actorIds` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `reactionId` | 是 | `string` | 见结构定义及所属功能文档 |
| `reference` | 是 | `string` | 见结构定义及所属功能文档 |

## CombatVisual

导出接口 · 源码第 9 行。

```ts
export interface CombatVisual {
    kind: 'weapon' | 'spell' | 'resource';
    id: string;
    point?: {
        x: number;
        y: number;
        z: number;
    };
    radius?: number;
    from?: {
        x: number;
        y: number;
        z: number;
    };
    targets?: {
        actorId: string;
        point: {
            x: number;
            y: number;
            z: number;
        };
    }[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'weapon'&#124;'spell'&#124;'resource'` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `point` | 是 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `point.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `point.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `point.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `radius` | 是 | `number` | 见结构定义及所属功能文档 |
| `from` | 是 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `from.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `from.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `from.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `targets` | 是 | `{actorId:string;point:{x:number;y:number;z:number}}[]` | 见结构定义及所属功能文档 |
| `targets.[].actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `targets.[].point` | 否 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `targets.[].point.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `targets.[].point.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `targets.[].point.z` | 否 | `number` | 见结构定义及所属功能文档 |

## CombatCard

导出接口 · 源码第 10 行。

```ts
export interface CombatCard {
    id: string;
    sceneId: string;
    kind: CombatCardKind;
    title: string;
    at: number;
    authorId: string;
    visual?: CombatVisual;
    source?: {
        actorId: string;
        tokenId?: string;
        name: string;
        portrait?: string;
    };
    actorIds: string[];
    gmOnly?: boolean;
    recipients?: string[];
    messageIds?: string[];
    conversationIds?: string[];
    parentId?: string;
    steps: CombatStep[];
    reverted?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `CombatCardKind` | 见结构定义及所属功能文档 |
| `title` | 否 | `string` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |
| `authorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `visual` | 是 | `CombatVisual` | 见结构定义及所属功能文档 |
| `source` | 是 | `{actorId:string;tokenId?:string;name:string;portrait?:string}` | 见结构定义及所属功能文档 |
| `source.actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `source.tokenId` | 是 | `string` | 见结构定义及所属功能文档 |
| `source.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `source.portrait` | 是 | `string` | 见结构定义及所属功能文档 |
| `actorIds` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `gmOnly` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `recipients` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `messageIds` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `conversationIds` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `parentId` | 是 | `string` | 见结构定义及所属功能文档 |
| `steps` | 否 | `CombatStep[]` | 见结构定义及所属功能文档 |
| `reverted` | 是 | `boolean` | 见结构定义及所属功能文档 |

## CombatDraft

导出接口 · 源码第 17 行。

```ts
export interface CombatDraft {
    root: CombatCard;
    reactions: CombatCard[];
    scope: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `root` | 否 | `CombatCard` | 见结构定义及所属功能文档 |
| `reactions` | 否 | `CombatCard[]` | 见结构定义及所属功能文档 |
| `scope` | 否 | `string[]` | 见结构定义及所属功能文档 |

## CombatJournal

导出接口 · 源码第 18 行。

```ts
export interface CombatJournal {
    cards: CombatCard[];
    pending: Record<string, CombatDraft>;
    since?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `cards` | 否 | `CombatCard[]` | 见结构定义及所属功能文档 |
| `pending` | 否 | `Record<string,CombatDraft>` | 见结构定义及所属功能文档 |
| `since` | 是 | `number` | 见结构定义及所属功能文档 |

## CombatTrace

导出接口 · 源码第 19 行。

```ts
export type CombatTrace = {
    type: 'feedback';
    feedback: CombatFeedback;
} | {
    type: 'step';
    step: CombatStep;
} | {
    type: 'reaction';
    actorId: string;
    title: string;
} | {
    type: 'resume';
} | {
    type: 'scope';
    id?: string;
} | {
    type: 'visual';
    visual: CombatVisual;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'feedback'` | 见结构定义及所属功能文档 |
| `分支1.feedback` | 否 | `CombatFeedback` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'step'` | 见结构定义及所属功能文档 |
| `分支2.step` | 否 | `CombatStep` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'reaction'` | 见结构定义及所属功能文档 |
| `分支3.actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.title` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.type` | 否 | `'resume'` | 见结构定义及所属功能文档 |
| `分支5.type` | 否 | `'scope'` | 见结构定义及所属功能文档 |
| `分支5.id` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支6.type` | 否 | `'visual'` | 见结构定义及所属功能文档 |
| `分支6.visual` | 否 | `CombatVisual` | 见结构定义及所属功能文档 |

## parseCombatRoll

导出接口 · 源码第 21 行。

```ts
export function parseCombatRoll(raw: unknown): CombatRollDetail;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseCombatStep

导出接口 · 源码第 24 行。

```ts
export function parseCombatStep(raw: unknown): CombatStep;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseCombatCard

导出接口 · 源码第 29 行。

```ts
export function parseCombatCard(raw: unknown): CombatCard;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseCombatJournal

导出接口 · 源码第 33 行。

```ts
export function parseCombatJournal(raw: unknown): CombatJournal;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## projectCombatJournal

导出接口 · 源码第 36 行。

```ts
export function projectCombatJournal(story: StoryWorkspace, playerId: string|undefined, gm: boolean, actors: ReadonlySet<string>, scenes?: ReadonlySet<string>): CombatJournal|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `playerId` | 否 | `string&#124;undefined` | — |
| `gm` | 否 | `boolean` | — |
| `actors` | 否 | `ReadonlySet<string>` | — |
| `scenes` | 是 | `ReadonlySet<string>` | — |

## combatRollSummary

导出接口 · 源码第 49 行。

```ts
export function combatRollSummary(roll: CombatRollDetail, simple: boolean): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `roll` | 否 | `CombatRollDetail` | — |
| `simple` | 否 | `boolean` | — |
