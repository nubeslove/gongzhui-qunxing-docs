# game/packages/rules-engine/src/dnd/index.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndMagicItemBonus,dndMagicItemStealth} from './magic-items';
import {dndFeatureEffect} from './class-features';
import {dndMoonLevel} from './wild-shape';
import {dndRaging,dndClassLevel} from './class-features';
import {dndSpeciesSaveAdvantage,dndUntrainedArmor} from './traits';
import {dndSpellSpeedChange,dndActiveSpellProfiles,dndSpellRollAdvantage,dndSpellRollDisadvantage,dndSpellResists} from './spell-effects';
import {crownActive} from './sorcery';
import {DND_SPELLFIRE_ENTRIES,DND_SPELLFIRE_BOOK} from './spellfire.generated';
import { DND_ABILITIES, type DndAbility, type DndCharacter, type DndCondition, type DndDamageType, type DndRollMode } from '@aelzerant/contracts';
import { DND_CATALOG as baseCatalog } from './catalog.generated';
import {DND_CREATION_OPTIONS} from './creation-options.generated';
import {TERRA_CREATION_ENTRIES} from '../terra/creation.generated';
import {dndBaseMovementSpeed,dndMovementSpeeds} from './movement-speeds';
```
</details>

## 重新导出的模块

```ts
export * from './legendary';
export * from './wild-shape';
export * from './casting-time';
export {TERRA_CREATION_ENTRIES} from '../terra/creation.generated';
export type { DndEntry, DndEntryKind } from './catalog-types';
export * from './movement-speeds';
export * from './creation';
export * from './creation-choices';
export * from './multiclass';
export * from './origin-spells';
export * from './traits';
export * from './class-features';
export * from './monster-powers';
export * from './items';
export * from './magic-items';
export * from './weapon-properties';
export * from './mastery-choices';
export * from './components';
export * from './light';
export * from './duration';
```

## dndCreationEntries

导出接口 · 源码第 21 行。

Lookup supports variant IDs; ordinary DND catalog lists stay unchanged.

```ts
export const dndCreationEntries: (speciesId: string): import("@source/packages/rules-engine/src/index").DndEntry[];
```

## dndEntry

导出接口 · 源码第 22 行。

```ts
export const dndEntry: (id: string): import("@source/packages/rules-engine/src/index").DndEntry | undefined;
```

## DND_ABILITY_NAMES

导出接口 · 源码第 23 行。

```ts
export const DND_ABILITY_NAMES: Record<DndAbility, string>;
```

## DND_SKILLS

导出接口 · 源码第 24 行。

```ts
export const DND_SKILLS: Record<string, {
    name: string;
    ability: DndAbility;
}>;
```

## DND_CONDITION_NAMES

导出接口 · 源码第 25 行。

```ts
export const DND_CONDITION_NAMES: Record<DndCondition, string>;
```

## DND_DAMAGE_NAMES

导出接口 · 源码第 26 行。

```ts
export const DND_DAMAGE_NAMES: Record<DndDamageType, string>;
```

## dndMod

导出接口 · 源码第 27 行。

```ts
export const dndMod: (score: number): number;
```

## dndSkillBonus

导出接口 · 源码第 28 行。

```ts
export const dndSkillBonus: (c: DndCharacter, id: string): number;
```

## dndProficiency

导出接口 · 源码第 29 行。

```ts
export const dndProficiency: (level: number): number;
```

## dndHas

导出接口 · 源码第 30 行。

```ts
export const dndHas: (c: DndCharacter, condition: DndCondition): boolean;
```

## dndConditionImmune

导出接口 · 源码第 31 行。

```ts
export function dndConditionImmune(c: DndCharacter, condition: DndCondition): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `condition` | 否 | `DndCondition` | — |

## dndStinkingNausea

导出接口 · 源码第 32 行。

```ts
export const dndStinkingNausea: (c: DndCharacter): boolean;
```

## dndIncapacitated

导出接口 · 源码第 33 行。

```ts
export const dndIncapacitated: (c: DndCharacter): boolean;
```

## dndMaxSpeed

导出接口 · 源码第 36 行。

```ts
export const dndMaxSpeed: (c: DndCharacter): number;
```

## dndSpeed

导出接口 · 源码第 37 行。

```ts
export const dndSpeed: (c: DndCharacter, mode?: string): number;
```

## dndDie

导出接口 · 源码第 38 行。

```ts
export function dndDie(sides: number, random: ()=>number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `sides` | 否 | `number` | — |
| `random` | 否 | `()=>number` | — |

## dndDice

导出接口 · 源码第 40 行。

Bounded dice grammar, no eval. Critical hits double dice, never static modifiers.

```ts
export function dndDice(expression: string, random: ()=>number, critical?: boolean): {total:number;faces:number[];formula:string};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `expression` | 否 | `string` | — |
| `random` | 否 | `()=>number` | — |
| `critical` | 是 | `boolean` | false |

## dndTest

导出接口 · 源码第 46 行。

```ts
export function dndTest(c: DndCharacter, ability: DndAbility, random: ()=>number, opts?: {deferLuck?:boolean;deathSave?:boolean;fixedFaces?:number[];againstCondition?:DndCondition;mode?:DndRollMode;save?:boolean;skill?:string;dc?:number;bonus?:number;criticalThreshold?:number;attack?:number;advantage?:boolean;disadvantage?:boolean;cover?:0|2|5;modifiers?:{label:string;value:number}[]}): { faces: number[]; natural: number; bonus: number; modifiers: { label: string; value: number; }[]; total: number; success: boolean | undefined; mode: string; autoFail: boolean; critical: boolean; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `ability` | 否 | `DndAbility` | — |
| `random` | 否 | `()=>number` | — |
| `opts` | 是 | `{deferLuck?:boolean;deathSave?:boolean;fixedFaces?:number[];againstCondition?:DndCondition;mode?:DndRollMode;save?:boolean;skill?:string;dc?:number;bonus?:number;criticalThreshold?:number;attack?:number;advantage?:boolean;disadvantage?:boolean;cover?:0&#124;2&#124;5;modifiers?:{label:string;value:number}[]}` | {} |

## dndDamage

导出接口 · 源码第 69 行。

```ts
export function dndDamage(amount: number, type: DndDamageType, c: DndCharacter): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `amount` | 否 | `number` | — |
| `type` | 否 | `DndDamageType` | — |
| `c` | 否 | `DndCharacter` | — |

## dndPointBuy

导出接口 · 源码第 74 行。

```ts
export function dndPointBuy(scores: Record<DndAbility,number>): { spent: number; remaining: number; valid: boolean; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `scores` | 否 | `Record<DndAbility,number>` | — |

## dndBase

导出接口 · 源码第 75 行。

```ts
export function dndBase(): DndCharacter;
```

## dndMovementBudget

导出接口 · 源码第 83 行。

```ts
export function dndMovementBudget(c: DndCharacter, t: import('@aelzerant/contracts').DndTurn, mode?: string): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `t` | 否 | `import('@aelzerant/contracts').DndTurn` | — |
| `mode` | 是 | `string` | 'walk' |
