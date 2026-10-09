# game/packages/rules-engine/src/dnd/index.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndSpellSpeedChange,dndActiveSpellProfiles,dndSpellRollAdvantage,dndSpellRollDisadvantage,dndSpellResists} from './spell-effects';
import {crownActive} from './sorcery';
import {DND_SPELLFIRE_ENTRIES,DND_SPELLFIRE_BOOK} from './spellfire.generated';
import { DND_ABILITIES, type DndAbility, type DndCharacter, type DndCondition, type DndDamageType, type DndRollMode } from '@aelzerant/contracts';
import { DND_CATALOG as baseCatalog } from './catalog.generated';
import {DND_CREATION_OPTIONS} from './creation-options.generated';
import {TERRA_CREATION_ENTRIES} from '../terra/creation.generated';
```
</details>

## 重新导出的模块

```ts
export {TERRA_CREATION_ENTRIES} from '../terra/creation.generated';
export type { DndEntry, DndEntryKind } from './catalog-types';
export * from './creation';
export * from './creation-choices';
export * from './multiclass';
```

## dndCreationEntries

导出接口 · 源码第 13 行。

Lookup supports variant IDs; ordinary DND catalog lists stay unchanged.

```ts
export const dndCreationEntries: (speciesId: string): import("@source/packages/rules-engine/src/index").DndEntry[];
```

## dndEntry

导出接口 · 源码第 14 行。

```ts
export const dndEntry: (id: string): import("@source/packages/rules-engine/src/index").DndEntry | undefined;
```

## dndMod

导出接口 · 源码第 19 行。

```ts
export const dndMod: (score: number): number;
```

## dndSkillBonus

导出接口 · 源码第 20 行。

```ts
export const dndSkillBonus: (c: DndCharacter, id: string): number;
```

## dndProficiency

导出接口 · 源码第 21 行。

```ts
export const dndProficiency: (level: number): number;
```

## dndHas

导出接口 · 源码第 22 行。

```ts
export const dndHas: (c: DndCharacter, condition: DndCondition): boolean;
```

## dndConditionImmune

导出接口 · 源码第 23 行。

```ts
export function dndConditionImmune(c: DndCharacter, condition: DndCondition): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `condition` | 否 | `DndCondition` | — |

## dndStinkingNausea

导出接口 · 源码第 24 行。

```ts
export const dndStinkingNausea: (c: DndCharacter): boolean;
```

## dndIncapacitated

导出接口 · 源码第 25 行。

```ts
export const dndIncapacitated: (c: DndCharacter): boolean;
```

## dndSpeed

导出接口 · 源码第 26 行。

```ts
export const dndSpeed: (c: DndCharacter, mode?: string): number;
```

## dndDie

导出接口 · 源码第 27 行。

```ts
export function dndDie(sides: number, random: ()=>number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `sides` | 否 | `number` | — |
| `random` | 否 | `()=>number` | — |

## dndDice

导出接口 · 源码第 29 行。

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

导出接口 · 源码第 35 行。

```ts
export function dndTest(c: DndCharacter, ability: DndAbility, random: ()=>number, opts?: {againstCondition?:DndCondition;mode?:DndRollMode;save?:boolean;skill?:string;dc?:number;attack?:number;advantage?:boolean;disadvantage?:boolean;cover?:0|2|5;modifiers?:{label:string;value:number}[]}): { faces: number[]; natural: number; bonus: number; modifiers: { label: string; value: number; }[]; total: number; success: boolean | undefined; mode: string; autoFail: boolean; critical: boolean; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `ability` | 否 | `DndAbility` | — |
| `random` | 否 | `()=>number` | — |
| `opts` | 是 | `{againstCondition?:DndCondition;mode?:DndRollMode;save?:boolean;skill?:string;dc?:number;attack?:number;advantage?:boolean;disadvantage?:boolean;cover?:0&#124;2&#124;5;modifiers?:{label:string;value:number}[]}` | {} |

## dndDamage

导出接口 · 源码第 52 行。

```ts
export function dndDamage(amount: number, type: DndDamageType, c: DndCharacter): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `amount` | 否 | `number` | — |
| `type` | 否 | `DndDamageType` | — |
| `c` | 否 | `DndCharacter` | — |

## dndPointBuy

导出接口 · 源码第 57 行。

```ts
export function dndPointBuy(scores: Record<DndAbility,number>): { spent: number; remaining: number; valid: boolean; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `scores` | 否 | `Record<DndAbility,number>` | — |

## dndBase

导出接口 · 源码第 58 行。

```ts
export function dndBase(): DndCharacter;
```

## dndMovementBudget

导出接口 · 源码第 65 行。

```ts
export function dndMovementBudget(c: DndCharacter, t: import('@aelzerant/contracts').DndTurn, mode?: string): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `t` | 否 | `import('@aelzerant/contracts').DndTurn` | — |
| `mode` | 是 | `string` | 'walk' |
