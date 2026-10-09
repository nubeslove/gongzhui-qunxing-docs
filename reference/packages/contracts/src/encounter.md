# game/packages/contracts/src/encounter.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as obj,storyList as list,storyId as id,storyText as text,storyNumber as num,storyEnum as one} from './story';
```
</details>

## EncounterSide

导出接口 · 源码第 2 行。

```ts
export type EncounterSide = 'party' | 'hostile' | 'neutral';
```

## EncounterParticipant

导出接口 · 源码第 3 行。

```ts
export interface EncounterParticipant {
    tokenId: string;
    actorId: string;
    name: string;
    portrait?: string;
    conditions?: string[];
    initiative: number | null;
    hidden: boolean;
    defeated: boolean;
    side: EncounterSide;
    xp: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `tokenId` | 否 | `string` | 见结构定义及所属功能文档 |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `portrait` | 是 | `string` | 见结构定义及所属功能文档 |
| `conditions` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `initiative` | 否 | `number&#124;null` | 见结构定义及所属功能文档 |
| `hidden` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `defeated` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `side` | 否 | `EncounterSide` | 见结构定义及所属功能文档 |
| `xp` | 否 | `number` | 见结构定义及所属功能文档 |

## EncounterAward

导出接口 · 源码第 4 行。

```ts
export interface EncounterAward {
    actorId: string;
    name: string;
    amount: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `amount` | 否 | `number` | 见结构定义及所属功能文档 |

## SceneEncounter

导出接口 · 源码第 5 行。

```ts
export interface SceneEncounter {
    id: string;
    phase: 'preparation' | 'active' | 'ended';
    round: number;
    activeId: string | null;
    participants: EncounterParticipant[];
    awards?: EncounterAward[];
    ping?: {
        id: string;
        tokenId: string;
        at: number;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `phase` | 否 | `'preparation'&#124;'active'&#124;'ended'` | 见结构定义及所属功能文档 |
| `round` | 否 | `number` | 见结构定义及所属功能文档 |
| `activeId` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `participants` | 否 | `EncounterParticipant[]` | 见结构定义及所属功能文档 |
| `awards` | 是 | `EncounterAward[]` | 见结构定义及所属功能文档 |
| `ping` | 是 | `{id:string;tokenId:string;at:number}` | 见结构定义及所属功能文档 |
| `ping.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `ping.tokenId` | 否 | `string` | 见结构定义及所属功能文档 |
| `ping.at` | 否 | `number` | 见结构定义及所属功能文档 |

## EncounterCommand

导出接口 · 源码第 6 行。

```ts
export type EncounterCommand = {
    op: 'roll' | 'include';
    tokenIds: string[];
} | {
    op: 'update';
    tokenId: string;
    patch: Partial<Pick<EncounterParticipant, 'name' | 'portrait' | 'initiative' | 'hidden' | 'defeated' | 'xp'>>;
} | {
    op: 'remove';
    tokenId: string;
} | {
    op: 'start';
    precombatEffects?: 'keep' | 'clear';
} | {
    op: 'end';
} | {
    op: 'navigate';
    unit: 'turn' | 'round';
    direction: 1 | -1;
} | {
    op: 'award';
    awards: EncounterAward[];
} | {
    op: 'ping';
    tokenId: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.op` | 否 | `'roll'&#124;'include'` | 见结构定义及所属功能文档 |
| `分支1.tokenIds` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支2.op` | 否 | `'update'` | 见结构定义及所属功能文档 |
| `分支2.tokenId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.patch` | 否 | `Partial<Pick<EncounterParticipant,'name'&#124;'portrait'&#124;'initiative'&#124;'hidden'&#124;'defeated'&#124;'xp'>>` | 见结构定义及所属功能文档 |
| `分支3.op` | 否 | `'remove'` | 见结构定义及所属功能文档 |
| `分支3.tokenId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.op` | 否 | `'start'` | 见结构定义及所属功能文档 |
| `分支4.precombatEffects` | 是 | `'keep'&#124;'clear'` | 见结构定义及所属功能文档 |
| `分支5.op` | 否 | `'end'` | 见结构定义及所属功能文档 |
| `分支6.op` | 否 | `'navigate'` | 见结构定义及所属功能文档 |
| `分支6.unit` | 否 | `'turn'&#124;'round'` | 见结构定义及所属功能文档 |
| `分支6.direction` | 否 | `1&#124;-1` | 见结构定义及所属功能文档 |
| `分支7.op` | 否 | `'award'` | 见结构定义及所属功能文档 |
| `分支7.awards` | 否 | `EncounterAward[]` | 见结构定义及所属功能文档 |
| `分支8.op` | 否 | `'ping'` | 见结构定义及所属功能文档 |
| `分支8.tokenId` | 否 | `string` | 见结构定义及所属功能文档 |

## EncounterCandidate

导出接口 · 源码第 7 行。

```ts
export interface EncounterCandidate extends EncounterParticipant {
    hp?: number;
    maxHp?: number;
    conditions?: string[];
    owners?: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `hp` | 是 | `number` | 见结构定义及所属功能文档 |
| `maxHp` | 是 | `number` | 见结构定义及所属功能文档 |
| `conditions` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `owners` | 是 | `string[]` | 见结构定义及所属功能文档 |

## parseSceneEncounter

导出接口 · 源码第 8 行。

```ts
export function parseSceneEncounter(raw: unknown): SceneEncounter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseEncounters

导出接口 · 源码第 9 行。

```ts
export function parseEncounters(raw: unknown): Record<string,SceneEncounter>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## projectEncounters

导出接口 · 源码第 10 行。

```ts
export function projectEncounters(values: Record<string,SceneEncounter>, scenes?: ReadonlySet<string>): Record<string,SceneEncounter>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `values` | 否 | `Record<string,SceneEncounter>` | — |
| `scenes` | 是 | `ReadonlySet<string>` | — |

## encounterOrder

导出接口 · 源码第 11 行。

```ts
export const encounterOrder: (participants: EncounterParticipant[]): EncounterParticipant[];
```

## encounterVisibleInScene

导出接口 · 源码第 12 行。

```ts
export function encounterVisibleInScene(story: import('./story').StoryWorkspace, sceneId: string|null|undefined, tokens: ReadonlySet<string>, statuses?: Record<string,string[]>): import('./story').StoryWorkspace;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `import('./story').StoryWorkspace` | — |
| `sceneId` | 否 | `string&#124;null&#124;undefined` | — |
| `tokens` | 否 | `ReadonlySet<string>` | — |
| `statuses` | 是 | `Record<string,string[]>` | {} |

## equalEncounterAwards

导出接口 · 源码第 17 行。

```ts
export function equalEncounterAwards(total: number, players: {actorId:string;name:string}[]): EncounterAward[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `total` | 否 | `number` | — |
| `players` | 否 | `{actorId:string;name:string}[]` | — |
