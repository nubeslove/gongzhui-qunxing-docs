# game/packages/rules-engine/src/dnd/characters.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndCreationEntries} from './index';
import {applyTerraSpecies} from '../terra/creation';
import {syncSorcery} from './sorcery';
import { DND_ABILITIES, type DndAbility, type DndAbilityMethod, type DndCharacter, type DndDamageType, DND_CONDITIONS } from '@aelzerant/contracts';
import { DND_CATALOG, DND_ABILITY_NAMES, DND_DAMAGE_NAMES, DND_SKILLS, dndBase, dndConditionImmune, dndEntry, dndMod, dndPointBuy, dndProficiency } from './index';
```
</details>

## DndBuildInput

导出接口 · 源码第 7 行。

```ts
export interface DndBuildInput {
    classId: string;
    level: number;
    subclass?: string;
    speciesId: string;
    backgroundId: string;
    abilityMethod?: DndAbilityMethod;
    scores: Record<DndAbility, number>;
    boosts: Record<DndAbility, number>;
    skills: string[];
    weapons: string[];
    armor?: string;
    shield: boolean;
    spells: string[];
    feats: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `classId` | 否 | `string` | 见结构定义及所属功能文档 |
| `level` | 否 | `number` | 见结构定义及所属功能文档 |
| `subclass` | 是 | `string` | 见结构定义及所属功能文档 |
| `speciesId` | 否 | `string` | 见结构定义及所属功能文档 |
| `backgroundId` | 否 | `string` | 见结构定义及所属功能文档 |
| `abilityMethod` | 是 | `DndAbilityMethod` | 见结构定义及所属功能文档 |
| `scores` | 否 | `Record<DndAbility,number>` | 见结构定义及所属功能文档 |
| `boosts` | 否 | `Record<DndAbility,number>` | 见结构定义及所属功能文档 |
| `skills` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `weapons` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `armor` | 是 | `string` | 见结构定义及所属功能文档 |
| `shield` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `spells` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `feats` | 否 | `string[]` | 见结构定义及所属功能文档 |

## DND_STANDARD_ARRAY

导出接口 · 源码第 8 行。

```ts
export const DND_STANDARD_ARRAY = [15, 14, 13, 12, 10, 8] as const;
```

## validateDndScores

导出接口 · 源码第 9 行。

```ts
export function validateDndScores(scores: Record<DndAbility,number>, method?: DndAbilityMethod): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `scores` | 否 | `Record<DndAbility,number>` | — |
| `method` | 是 | `DndAbilityMethod` | 'pointBuy' |

## dndClassRow

导出接口 · 源码第 17 行。

```ts
export function dndClassRow(classId: string, level: number): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `classId` | 否 | `string` | — |
| `level` | 否 | `number` | — |

## buildDndCharacter

导出接口 · 源码第 18 行。

```ts
export function buildDndCharacter(input: DndBuildInput): {character:DndCharacter;warnings:string[]};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `input` | 否 | `DndBuildInput` | — |

## dndMonster

导出接口 · 源码第 62 行。

```ts
export function dndMonster(id: string): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |

## changeDndAbility

导出接口 · 源码第 78 行。

Apply only the derived difference, preserving existing GM adjustments and wounds.

```ts
export function changeDndAbility(c: DndCharacter, ability: DndAbility, score: number): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `ability` | 否 | `DndAbility` | — |
| `score` | 否 | `number` | — |
