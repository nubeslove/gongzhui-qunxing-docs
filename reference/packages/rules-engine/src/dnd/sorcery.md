# game/packages/rules-engine/src/dnd/sorcery.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndCharacter} from '@aelzerant/contracts';
import {DND_CATALOG,dndEntry,dndIncapacitated,dndMod,dndSpellSources} from './index';
```
</details>

## SPELLFIRE_ID

导出接口 · 源码第 3 行。

```ts
export const SPELLFIRE_ID = 'dnd-28cb25692e3dd93fc9b5';
```

## sorcererClass

导出接口 · 源码第 4 行。

```ts
export const sorcererClass: (c: Pick<DndCharacter, "classes">): { id: string; level: number; subclass?: string; } | undefined;
```

## spellfireLevel

导出接口 · 源码第 5 行。

```ts
export const spellfireLevel: (c: Pick<DndCharacter, "classes">): number;
```

## crownActive

导出接口 · 源码第 6 行。

```ts
export const crownActive: (c: DndCharacter): boolean;
```

## sorcererSpell

导出接口 · 源码第 7 行。

```ts
export function sorcererSpell(c: DndCharacter, spell: string, classId?: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `spell` | 否 | `string` | — |
| `classId` | 是 | `string` | — |

## innateBonus

导出接口 · 源码第 8 行。

```ts
export const innateBonus: (c: DndCharacter, spell: string, classId?: string): 0 | 1;
```

## spellfirePrepared

导出接口 · 源码第 9 行。

```ts
export function spellfirePrepared(c: Pick<DndCharacter,'classes'>, classId?: string): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `Pick<DndCharacter,'classes'>` | — |
| `classId` | 是 | `string` | — |

## syncSorcery

导出接口 · 源码第 15 行。

Idempotent migration and level growth: preserve damage, expenditure and all custom fields.

```ts
export function syncSorcery(c: DndCharacter): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## sorceryMetamagic

导出接口 · 源码第 23 行。

```ts
export function sorceryMetamagic(c: DndCharacter, name: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `name` | 否 | `string` | — |

## spellfireDie

导出接口 · 源码第 24 行。

```ts
export const spellfireDie: (c: DndCharacter): 4 | 8;
```

## spellfireBolster

导出接口 · 源码第 25 行。

```ts
export const spellfireBolster: (c: DndCharacter): number;
```

## sorcerySlotCosts

导出接口 · 源码第 26 行。

```ts
export const sorcerySlotCosts = [0, 2, 3, 5, 6, 7];
```
