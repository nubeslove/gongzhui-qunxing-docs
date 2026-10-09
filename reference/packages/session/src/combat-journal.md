# game/packages/session/src/combat-journal.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseDiceExpression,type DiceNode,type StoryWorkspace,type CombatCard,type CombatDraft,type CombatTrace,type CombatStep,type WorldRoll,type CombatRollDetail} from '@aelzerant/contracts';
import {parseCombatCard} from '@aelzerant/contracts';
```
</details>

## recordCombatSettlement

导出接口 · 源码第 5 行。

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

导出接口 · 源码第 37 行。

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

导出接口 · 源码第 42 行。

```ts
export function storyRollStep(m: import('@aelzerant/contracts').StoryMessage): CombatStep;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `import('@aelzerant/contracts').StoryMessage` | — |
