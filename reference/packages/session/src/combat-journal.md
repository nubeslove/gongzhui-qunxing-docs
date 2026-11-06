# game/packages/session/src/combat-journal.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseDiceExpression,type DiceNode,type StoryWorkspace,type CombatCard,type CombatDraft,type CombatTrace,type CombatStep,type WorldRoll,type CombatRollDetail,type CombatLogLine,type CombatLogSession,type CombatLogArchive} from '@aelzerant/contracts';
import {parseCombatCard} from '@aelzerant/contracts';
```
</details>

## combatLogActive

导出接口 · 源码第 5 行。

The live channel only accepts records while a combat session is open for that scene.

```ts
export function combatLogActive(story: StoryWorkspace, sceneId: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `sceneId` | 否 | `string` | — |

## beginCombatLog

导出接口 · 源码第 9 行。

Open the channel at the initiative/start boundary. Any earlier live cards are discarded.

```ts
export function beginCombatLog(story: StoryWorkspace, options: {sceneId:string;at:number;sceneName?:string;systemId?:string}): CombatLogSession;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `options` | 否 | `{sceneId:string;at:number;sceneName?:string;systemId?:string}` | — |

## finishCombatLog

导出接口 · 源码第 19 行。

Close the channel at the end boundary: archive this combat, then clear the live records.

```ts
export function finishCombatLog(story: StoryWorkspace, options: {sceneId:string;at:number;sceneName?:string;systemId?:string;lines?:CombatLogLine[]}): CombatLogArchive|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `options` | 否 | `{sceneId:string;at:number;sceneName?:string;systemId?:string;lines?:CombatLogLine[]}` | — |

## recordCombatSettlement

导出接口 · 源码第 41 行。

Called only on the isolated, authoritative candidate that will be persisted.

```ts
export function recordCombatSettlement(story: StoryWorkspace, card: CombatCard, events: CombatTrace[], options: {continuation:boolean;pending:boolean;since?:number;source:(actorId:string)=>CombatCard['source'];hidden:(actorId:string)=>boolean}): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `card` | 否 | `CombatCard` | — |
| `events` | 否 | `CombatTrace[]` | — |
| `options` | 否 | `{continuation:boolean;pending:boolean;since?:number;source:(actorId:string)=>CombatCard['source'];hidden:(actorId:string)=>boolean}` | — |

## revertCombatJournal

导出接口 · 源码第 74 行。

```ts
export function revertCombatJournal(story: StoryWorkspace, sceneId: string, at: number, pending?: CombatDraft): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `sceneId` | 否 | `string` | — |
| `at` | 否 | `number` | — |
| `pending` | 是 | `CombatDraft` | — |

## storyRollStep

导出接口 · 源码第 79 行。

```ts
export function storyRollStep(m: import('@aelzerant/contracts').StoryMessage): CombatStep;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `import('@aelzerant/contracts').StoryMessage` | — |
