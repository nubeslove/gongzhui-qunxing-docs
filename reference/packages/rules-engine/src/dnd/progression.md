# game/packages/rules-engine/src/dnd/progression.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {prepareDndSpells} from './preparation';
import {syncSorcery} from './sorcery';
import {dndMulticlassIssue,dndMulticlassTraining,dndMulticlassSlots,dndPactPool,dndSpellSources,dndClassSpellAbility} from './multiclass';
import {DND_INSTRUMENTS} from './creation-choices';
import type {DndLevelChoice} from '@aelzerant/contracts';
import { DND_ABILITIES, type DndAbility, type DndCharacter } from '@aelzerant/contracts';
import { DND_CATALOG, dndEntry, dndMod, dndProficiency } from './index';
import { changeDndAbility, dndClassRow } from './characters';
```
</details>

## 重新导出的模块

```ts
export type {DndLevelChoice} from '@aelzerant/contracts';
```

## DND_XP_THRESHOLDS

导出接口 · 源码第 12 行。

PHB 2024, Character Advancement. Total XP, not XP to spend.

```ts
export const DND_XP_THRESHOLDS = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000] as const;
```

## dndHitDie

导出接口 · 源码第 13 行。

```ts
export function dndHitDie(classId: string): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `classId` | 否 | `string` | — |

## dndLevelFeatures

导出接口 · 源码第 18 行。

```ts
export function dndLevelFeatures(c: DndCharacter, level: number, subclass?: string, classId?: string): import("@source/packages/rules-engine/src/index").DndEntry[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `level` | 否 | `number` | — |
| `subclass` | 是 | `string` | — |
| `classId` | 是 | `string` | c.classes[0]?.id |

## levelUpDndCharacter

导出接口 · 源码第 23 行。

Upgrade the existing character by one level. Never rebuild the card or refresh spent pools.

```ts
export function levelUpDndCharacter(current: DndCharacter, choice: DndLevelChoice): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `current` | 否 | `DndCharacter` | — |
| `choice` | 否 | `DndLevelChoice` | — |
