# game/packages/rules-engine/src/dnd/preparation.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {syncSorcery,spellfirePrepared} from './sorcery';
import {dndClassSpellAbility,dndClassSpellChoices,dndSpellSources} from './multiclass';
import type {DndCharacter,ManualActor} from '@aelzerant/contracts';
import {DND_CATALOG,dndEntry} from './index';
```
</details>

## dndSpellbookIds

导出接口 · 源码第 7 行。

Old saves stored the book as display names and copied resources; migrate by exact catalog identity.

```ts
export function dndSpellbookIds(actor: ManualActor): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |

## restSpellPreparation

导出接口 · 源码第 12 行。

```ts
export function restSpellPreparation(c: DndCharacter, rest: 'short'|'long'): DndCharacter['preparation'];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `rest` | 否 | `'short'&#124;'long'` | — |

## dndPreparationOptions

导出接口 · 源码第 17 行。

```ts
export function dndPreparationOptions(actor: ManualActor, classId: string): { always: string[]; candidates: import("@source/packages/rules-engine/src/index").DndEntry[]; current: string[]; fixed: string[]; cantrips: string[]; cantripChanges: number; requiredCantrip: string | undefined; cantripLimit: number; cantripCandidates: import("@source/packages/rules-engine/src/index").DndEntry[]; learnCandidates: import("@source/packages/rules-engine/src/index").DndEntry[]; learnCount: number; limit: number; maxChanges: number; available: boolean; trigger: "long-rest" | "short-rest" | "level-up" | undefined; wizard: boolean; book: string[]; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `classId` | 否 | `string` | — |

## prepareDndSpells

导出接口 · 源码第 28 行。

```ts
export function prepareDndSpells(actor: ManualActor, classId: string, spells: string[], cantrips?: string[], learn?: string[]): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `classId` | 否 | `string` | — |
| `spells` | 否 | `string[]` | — |
| `cantrips` | 是 | `string[]` | — |
| `learn` | 是 | `string[]` | [] |
