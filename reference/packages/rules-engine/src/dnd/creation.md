# game/packages/rules-engine/src/dnd/creation.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndAlwaysPrepared,syncDndAlwaysPrepared} from './subclass-spells';
import {syncDndClassResources,syncDndSpeciesSpells} from './traits';
import {syncSorcery,spellfirePrepared} from './sorcery';
import {addDndOriginSpells} from './origin-spells';
import {isTerraSpecies} from '@aelzerant/contracts';
import {terraSpeciesFields} from '../terra/creation';
import {dndClassSpellAbility,dndPactPool,dndClassSpellChoices} from './multiclass';
import {DND_ABILITIES,type DndAbility,type DndDamageType,type DndInventoryItem} from '@aelzerant/contracts';
import {DND_CATALOG,DND_SKILLS,DND_ABILITY_NAMES,dndEntry,dndMod} from './index';
import {buildDndCharacter,changeDndAbility,dndClassRow,type DndBuildInput} from './characters';
import type {DndEntry} from './catalog-types';
import {dndChoiceValues,validateDndBuildChoices} from './creation-choices';
```
</details>

## DndGuidedInput

导出接口 · 源码第 14 行。

```ts
export interface DndGuidedInput extends DndBuildInput {
    name: string;
    notes: string;
    languages: string[];
    alignment: string;
    size: 'small' | 'medium';
    speciesChoice: string;
    speciesSkill: string;
    speciesAbility: DndAbility;
    humanFeat: string;
    classEquipment: string;
    backgroundEquipment: string;
    expertise: string[];
    spellbook: string[];
    choices: Record<string, string>;
    growth: {
        level: number;
        feat: string;
        boosts: Partial<Record<DndAbility, number>>;
    }[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `notes` | 否 | `string` | 见结构定义及所属功能文档 |
| `languages` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `alignment` | 否 | `string` | 见结构定义及所属功能文档 |
| `size` | 否 | `'small'&#124;'medium'` | 见结构定义及所属功能文档 |
| `speciesChoice` | 否 | `string` | 见结构定义及所属功能文档 |
| `speciesSkill` | 否 | `string` | 见结构定义及所属功能文档 |
| `speciesAbility` | 否 | `DndAbility` | 见结构定义及所属功能文档 |
| `humanFeat` | 否 | `string` | 见结构定义及所属功能文档 |
| `classEquipment` | 否 | `string` | 见结构定义及所属功能文档 |
| `backgroundEquipment` | 否 | `string` | 见结构定义及所属功能文档 |
| `expertise` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `spellbook` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `choices` | 否 | `Record<string,string>` | 见结构定义及所属功能文档 |
| `growth` | 否 | `{level:number;feat:string;boosts:Partial<Record<DndAbility,number>>}[]` | 见结构定义及所属功能文档 |
| `growth.[].level` | 否 | `number` | 见结构定义及所属功能文档 |
| `growth.[].feat` | 否 | `string` | 见结构定义及所属功能文档 |
| `growth.[].boosts` | 否 | `Partial<Record<DndAbility,number>>` | 见结构定义及所属功能文档 |

## dndFact

导出接口 · 源码第 20 行。

```ts
export const dndFact: (e: DndEntry | undefined, prefix: string): string;
```

## dndClassSkills

导出接口 · 源码第 21 行。

```ts
export function dndClassSkills(id: string): { count: number; ids: string[]; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |

## dndBackgroundSkills

导出接口 · 源码第 22 行。

```ts
export function dndBackgroundSkills(id: string): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |

## dndEquipmentOptions

导出接口 · 源码第 23 行。

```ts
export function dndEquipmentOptions(id: string): { id: string; text: string; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |

## dndStartingGear

导出接口 · 源码第 24 行。

```ts
export function dndStartingGear(classId: string, backgroundId: string, classOption: string, backgroundOption: string): { inventory: DndInventoryItem[]; gp: number; weapons: string[]; armor: string | undefined; shield: boolean; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `classId` | 否 | `string` | — |
| `backgroundId` | 否 | `string` | — |
| `classOption` | 否 | `string` | — |
| `backgroundOption` | 否 | `string` | — |

## DndSpellChoices

导出接口 · 源码第 35 行。

```ts
export interface DndSpellChoices {
    always: string[];
    cantrips: number;
    prepared: number;
    maxLevel: number;
    spellbook: number;
    entries: DndEntry[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `always` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `cantrips` | 否 | `number` | 见结构定义及所属功能文档 |
| `prepared` | 否 | `number` | 见结构定义及所属功能文档 |
| `maxLevel` | 否 | `number` | 见结构定义及所属功能文档 |
| `spellbook` | 否 | `number` | 见结构定义及所属功能文档 |
| `entries` | 否 | `DndEntry[]` | 见结构定义及所属功能文档 |

## dndSpellChoices

导出接口 · 源码第 36 行。

```ts
export function dndSpellChoices(classId: string, level: number, choices?: Record<string,string>, subclass?: string): DndSpellChoices;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `classId` | 否 | `string` | — |
| `level` | 否 | `number` | — |
| `choices` | 是 | `Record<string,string>` | {} |
| `subclass` | 是 | `string` | — |

## dndFeatBoosts

导出接口 · 源码第 44 行。

```ts
export function dndFeatBoosts(feat: DndEntry): { count: number; abilities: ("str" | "dex" | "con" | "int" | "wis" | "cha")[]; max: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `feat` | 否 | `DndEntry` | — |

## dndGrowthLevels

导出接口 · 源码第 50 行。

```ts
export function dndGrowthLevels(classId: string, level: number): number[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `classId` | 否 | `string` | — |
| `level` | 否 | `number` | — |

## recommendedDndInput

导出接口 · 源码第 51 行。

```ts
export function recommendedDndInput(name?: string): DndGuidedInput;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 是 | `string` | '新角色' |

## recommendedTerraInput

导出接口 · 源码第 56 行。

Build-time choices become data and source text; they do not activate temporary powers.

```ts
export function recommendedTerraInput(name?: string): DndGuidedInput;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 是 | `string` | '新角色' |

## buildDndGuidedCharacter

导出接口 · 源码第 60 行。

```ts
export function buildDndGuidedCharacter(input: DndGuidedInput): { character: import("@source/packages/contracts/src/dnd").DndCharacter; fields: Record<string, string>; features: DndEntry[]; warnings: string[]; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `input` | 否 | `DndGuidedInput` | — |
