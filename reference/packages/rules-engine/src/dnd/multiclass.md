# game/packages/rules-engine/src/dnd/multiclass.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndSpellChoices} from './creation';
import {DND_ABILITIES,type DndAbility,type DndCharacter} from '@aelzerant/contracts';
import {DND_ABILITY_NAMES,DND_CATALOG,DND_SKILLS,dndEntry} from './index';
import {dndClassRow} from './characters';
```
</details>

## dndClassSpellAbility

导出接口 · 源码第 7 行。

```ts
export function dndClassSpellAbility(id: string, subclass?: string): DndAbility|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |
| `subclass` | 是 | `string` | — |

## dndMulticlassIssue

导出接口 · 源码第 8 行。

```ts
export function dndMulticlassIssue(c: DndCharacter, id: string): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `id` | 否 | `string` | — |

## dndMulticlassTraining

导出接口 · 源码第 13 行。

```ts
export function dndMulticlassTraining(id: string): { armor: string[]; weapons: string[]; tools: string[]; instrument: boolean; skills: string[]; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |

## dndMulticlassSlots

导出接口 · 源码第 24 行。

```ts
export function dndMulticlassSlots(c: Pick<DndCharacter,'classes'>): number[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `Pick<DndCharacter,'classes'>` | — |

## dndPactPool

导出接口 · 源码第 29 行。

```ts
export function dndPactPool(c: DndCharacter): (import("@source/packages/contracts/src/dnd").DndPool & { level: number; }) | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndSpellSources

导出接口 · 源码第 33 行。

```ts
export function dndSpellSources(c: DndCharacter): Record<string, { ability: DndAbility; spells: string[]; }>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndCastingAbility

导出接口 · 源码第 38 行。

```ts
export function dndCastingAbility(c: DndCharacter, spell: string, classId?: string): "str" | "dex" | "con" | "int" | "wis" | "cha";
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `spell` | 否 | `string` | — |
| `classId` | 是 | `string` | — |

## dndClassSpellChoices

导出接口 · 源码第 40 行。

```ts
export function dndClassSpellChoices(cls: DndCharacter['classes'][number]): { always: string[]; cantrips: number; prepared: number; maxLevel: number; spellbook: number; entries: import("@source/packages/rules-engine/src/index").DndEntry[]; } | { cantrips: number; prepared: number; maxLevel: number; spellbook: number; entries: import("@source/packages/rules-engine/src/index").DndEntry[]; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `cls` | 否 | `DndCharacter['classes'][number]` | — |

## dndSpellSlot

导出接口 · 源码第 46 行。

```ts
export function dndSpellSlot(c: DndCharacter, level: number, kind?: 'spell'|'pact'): import("@source/packages/contracts/src/dnd").DndPool;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `level` | 否 | `number` | — |
| `kind` | 是 | `'spell'&#124;'pact'` | 'spell' |

## spendDndSpellSlot

导出接口 · 源码第 49 行。

```ts
export function spendDndSpellSlot(c: DndCharacter, level: number, kind?: 'spell'|'pact'): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `level` | 否 | `number` | — |
| `kind` | 是 | `'spell'&#124;'pact'` | 'spell' |
