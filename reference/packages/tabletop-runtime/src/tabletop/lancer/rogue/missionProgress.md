# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/missionProgress.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {lancerObjectToken,type ManualBlock,type ManualTable,type RogueEncounter,type RogueSecondary,type RogueChallenge,type RogueWearSnapshot,type LancerCombatUnit} from '@aelzerant/contracts';
import {lancerDistance} from '@aelzerant/game-core';
```
</details>

## arenaSupplyScale

导出接口 · 源码第 5 行。

```ts
export const arenaSupplyScale: (difficulty: 1 | 2 | 3): number;
```

## arenaObjectiveBrief

导出接口 · 源码第 21 行。

```ts
export function arenaObjectiveBrief(e: RogueEncounter, difficulty: 1|2|3): { secondaries: RogueSecondary[]; challenges: RogueChallenge[]; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `e` | 否 | `RogueEncounter` | — |
| `difficulty` | 否 | `1&#124;2&#124;3` | — |

## initializeArenaTasks

导出接口 · 源码第 29 行。

```ts
export function initializeArenaTasks(t: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |

## arenaWearSnapshot

导出接口 · 源码第 41 行。

```ts
export function arenaWearSnapshot(t: ManualTable, u: LancerCombatUnit): RogueWearSnapshot;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `u` | 否 | `LancerCombatUnit` | — |

## arenaBattleWear

导出接口 · 源码第 47 行。

Used repairs plus remaining repair debt; later replenishment does not charge the battle twice.

```ts
export function arenaBattleWear(t: ManualTable): { [k: string]: number; } | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |

## completeArenaPrimary

导出接口 · 源码第 51 行。

```ts
export function completeArenaPrimary(t: ManualTable, now?: number, completedRound?: number): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `now` | 是 | `number` | Date.now() |
| `completedRound` | 是 | `number` | t.lancerRogue!.scenario!.flags['end-round']??t.lancerBattle!.round |

## resolveArenaWithdrawal

导出接口 · 源码第 57 行。

```ts
export function resolveArenaWithdrawal(t: ManualTable, now?: number): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `now` | 是 | `number` | Date.now() |

## voteArenaWithdrawal

导出接口 · 源码第 64 行。

```ts
export function voteArenaWithdrawal(t: ManualTable, sender: string, agree: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `sender` | 否 | `string` | — |
| `agree` | 否 | `boolean` | — |

## updateArenaTasks

导出接口 · 源码第 71 行。

```ts
export function updateArenaTasks(t: ManualTable, ending?: boolean, won?: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `ending` | 是 | `boolean` | false |
| `won` | 是 | `boolean` | true |

## arenaMissionRewards

导出接口 · 源码第 92 行。

```ts
export function arenaMissionRewards(t: ManualTable, won: boolean): { base: number; secondary: number; challenge: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `won` | 否 | `boolean` | — |
