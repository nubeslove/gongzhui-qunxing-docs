# game/packages/rules-engine/src/dnd/spell-effects.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndCondition,DndCharacter,DndAbility,DndDamageType,DndActiveEffect} from '@aelzerant/contracts';
import {dndEntry,DND_SKILLS,DND_ABILITY_NAMES,DND_DAMAGE_NAMES} from './index';
```
</details>

## DndSpellEffectProfile

导出接口 · 源码第 3 行。

```ts
export interface DndSpellEffectProfile {
    duration: number;
    concentration?: boolean;
    expires?: 'source-start' | 'source-end' | 'target-start' | 'target-end';
    condition?: DndCondition;
    additionalConditions?: DndCondition[];
    wakeable?: boolean;
    sleep?: boolean;
    speedZero?: boolean;
    noHealing?: boolean;
    noOpportunity?: boolean;
    noReaction?: boolean;
    speed?: number;
    nextSavePenalty?: number;
    nextAttackDisadvantage?: boolean;
    armorBase?: number;
    armorBonus?: number;
    armorMinimum?: number;
    repeatSave?: DndAbility;
    conditionChoice?: boolean;
    conditionImmunities?: DndCondition[];
    resistances?: DndDamageType[] | 'choice';
    immunities?: DndDamageType[];
    checkAdvantage?: boolean;
    skillBonus?: boolean;
    damageReduction?: boolean;
    tempHpOnStart?: boolean;
    breakOnAttackOrCast?: boolean;
    breakOnDealDamage?: boolean;
    breakOnDamage?: boolean;
    breakOnSourceDamage?: boolean;
    blur?: boolean;
    mirrors?: boolean;
    deathWard?: boolean;
    weaponRadiant?: boolean;
    strengthPenalty?: boolean;
    senses?: DndActiveEffect['senses'];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `duration` | 否 | `number` | 见结构定义及所属功能文档 |
| `concentration` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `expires` | 是 | `'source-start'&#124;'source-end'&#124;'target-start'&#124;'target-end'` | 见结构定义及所属功能文档 |
| `condition` | 是 | `DndCondition` | 见结构定义及所属功能文档 |
| `additionalConditions` | 是 | `DndCondition[]` | 见结构定义及所属功能文档 |
| `wakeable` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `sleep` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `speedZero` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `noHealing` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `noOpportunity` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `noReaction` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `speed` | 是 | `number` | 见结构定义及所属功能文档 |
| `nextSavePenalty` | 是 | `number` | 见结构定义及所属功能文档 |
| `nextAttackDisadvantage` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `armorBase` | 是 | `number` | 见结构定义及所属功能文档 |
| `armorBonus` | 是 | `number` | 见结构定义及所属功能文档 |
| `armorMinimum` | 是 | `number` | 见结构定义及所属功能文档 |
| `repeatSave` | 是 | `DndAbility` | 见结构定义及所属功能文档 |
| `conditionChoice` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `conditionImmunities` | 是 | `DndCondition[]` | 见结构定义及所属功能文档 |
| `resistances` | 是 | `DndDamageType[]&#124;'choice'` | 见结构定义及所属功能文档 |
| `immunities` | 是 | `DndDamageType[]` | 见结构定义及所属功能文档 |
| `checkAdvantage` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `skillBonus` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `damageReduction` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `tempHpOnStart` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `breakOnAttackOrCast` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `breakOnDealDamage` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `breakOnDamage` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `breakOnSourceDamage` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `blur` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `mirrors` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `deathWard` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `weaponRadiant` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `strengthPenalty` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `senses` | 是 | `DndActiveEffect['senses']` | 见结构定义及所属功能文档 |

## dndActiveSpellProfiles

导出接口 · 源码第 53 行。

```ts
export function dndActiveSpellProfiles(c: DndCharacter): { effect: DndActiveEffect; rule: DndSpellEffectProfile; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndSpellSpeedChange

导出接口 · 源码第 54 行。

```ts
export function dndSpellSpeedChange(c: DndCharacter): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndArmorClass

导出接口 · 源码第 55 行。

```ts
export function dndArmorClass(c: DndCharacter): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndSpellEffectRule

导出接口 · 源码第 56 行。

```ts
export function dndSpellEffectRule(e: DndActiveEffect): DndSpellEffectProfile|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `e` | 否 | `DndActiveEffect` | — |

## dndSpellChoiceOptions

导出接口 · 源码第 57 行。

```ts
export function dndSpellChoiceOptions(english: string): {id:string;label:string}[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `english` | 否 | `string` | — |

## dndSpellRollAdvantage

导出接口 · 源码第 64 行。

```ts
export function dndSpellRollAdvantage(c: DndCharacter, ability: DndAbility, save: boolean, attack: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `ability` | 否 | `DndAbility` | — |
| `save` | 否 | `boolean` | — |
| `attack` | 否 | `boolean` | — |

## dndSpellRollDisadvantage

导出接口 · 源码第 65 行。

```ts
export function dndSpellRollDisadvantage(c: DndCharacter, ability: DndAbility): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `ability` | 否 | `DndAbility` | — |

## dndSpellResists

导出接口 · 源码第 66 行。

```ts
export function dndSpellResists(c: DndCharacter, type: DndDamageType): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `type` | 否 | `DndDamageType` | — |

## dndCharmedBy

导出接口 · 源码第 67 行。

```ts
export function dndCharmedBy(c: DndCharacter, actor: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `actor` | 否 | `string` | — |

## dndHumanoid

导出接口 · 源码第 68 行。

```ts
export function dndHumanoid(c: DndCharacter): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndSleepImmune

导出接口 · 源码第 71 行。

```ts
export function dndSleepImmune(c: DndCharacter): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
