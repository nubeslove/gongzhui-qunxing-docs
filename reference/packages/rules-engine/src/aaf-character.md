# game/packages/rules-engine/src/aaf-character.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {AAF_ATTRS, type AafAttributes, type AafBuild, type AafBuildCard, type AafCharacter, type AafItemDefinition, type AafItemInstance} from '@aelzerant/contracts';
import catalog from './aaf-character-catalog.generated';
```
</details>

## AafChoice

导出接口 · 源码第 3 行。

```ts
export interface AafChoice extends AafBuildCard {
    kind: string;
    parent: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `string` | 见结构定义及所属功能文档 |
| `parent` | 否 | `string` | 见结构定义及所属功能文档 |

## AafCreationCatalog

导出接口 · 源码第 4 行。

```ts
export interface AafCreationCatalog {
    revision: string;
    races: AafChoice[];
    subraces: AafChoice[];
    classes: (AafChoice & {
        hp: number;
        saves: string;
        proficiencies: string;
        growth: string;
    })[];
    backgrounds: AafChoice[];
    life: AafChoice[];
    skills: string[];
    skillCards: AafChoice[];
    abilities: AafChoice[];
    gear: AafItemDefinition[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `revision` | 否 | `string` | 见结构定义及所属功能文档 |
| `races` | 否 | `AafChoice[]` | 见结构定义及所属功能文档 |
| `subraces` | 否 | `AafChoice[]` | 见结构定义及所属功能文档 |
| `classes` | 否 | `(AafChoice&{hp:number;saves:string;proficiencies:string;growth:string})[]` | 见结构定义及所属功能文档 |
| `classes.[].hp` | 否 | `number` | 见结构定义及所属功能文档 |
| `classes.[].saves` | 否 | `string` | 见结构定义及所属功能文档 |
| `classes.[].proficiencies` | 否 | `string` | 见结构定义及所属功能文档 |
| `classes.[].growth` | 否 | `string` | 见结构定义及所属功能文档 |
| `backgrounds` | 否 | `AafChoice[]` | 见结构定义及所属功能文档 |
| `life` | 否 | `AafChoice[]` | 见结构定义及所属功能文档 |
| `skills` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `skillCards` | 否 | `AafChoice[]` | 见结构定义及所属功能文档 |
| `abilities` | 否 | `AafChoice[]` | 见结构定义及所属功能文档 |
| `gear` | 否 | `AafItemDefinition[]` | 见结构定义及所属功能文档 |

## aafModifier

导出接口 · 源码第 6 行。

```ts
export const aafModifier: (n: number): number;
```

## aafPb

导出接口 · 源码第 7 行。

```ts
export const aafPb: (n: number): number;
```

## aafMp

导出接口 · 源码第 8 行。

```ts
export const aafMp: (n: number): number;
```

## aafZeroAttrs

导出接口 · 源码第 9 行。

```ts
export const aafZeroAttrs: (): AafAttributes;
```

## emptyAafBuild

导出接口 · 源码第 10 行。

```ts
export function emptyAafBuild(name: string, level?: number): AafBuild;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | — |
| `level` | 是 | `number` | 3 |

## aafBuyCost

导出接口 · 源码第 11 行。

```ts
export const aafBuyCost: (attrs: AafAttributes): number;
```

## aafBuildAttrs

导出接口 · 源码第 12 行。

```ts
export const aafBuildAttrs: (b: AafBuild): AafAttributes;
```

## aafRace

导出接口 · 源码第 13 行。

```ts
export const aafRace: (b: AafBuild): AafChoice | undefined;
```

## aafRaceGrants

导出接口 · 源码第 15 行。

```ts
export function aafRaceGrants(b: AafBuild): { skill: string; life: string; freeSkills: number; tp: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `AafBuild` | — |

## aafSkillRank

导出接口 · 源码第 20 行。

```ts
export function aafSkillRank(b: AafBuild, name: string): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `AafBuild` | — |
| `name` | 否 | `string` | — |

## aafSkillBonus

导出接口 · 源码第 22 行。

AAF skill checks do not add an attribute modifier.

```ts
export function aafSkillBonus(b: AafBuild, name: string): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `AafBuild` | — |
| `name` | 否 | `string` | — |

## aafLearningPools

导出接口 · 源码第 23 行。

```ts
export function aafLearningPools(b: AafBuild): { caster: { 奥秘: number; 神圣: number; 原初: number; }; pools: { id: string; name: string; max: number; eligible: string[]; }[]; ap: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `AafBuild` | — |

## aafBuildIssues

导出接口 · 源码第 37 行。

```ts
export function aafBuildIssues(b: AafBuild): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `AafBuild` | — |

## aafBuildStats

导出接口 · 源码第 59 行。

```ts
export function aafBuildStats(b: AafBuild): { attrs: AafAttributes; hp: number; mp: number; focus: number; pb: number; speed: number; ac: number; saves: string; proficiencies: string; tp: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `AafBuild` | — |

## aafBuildCards

导出接口 · 源码第 65 行。

```ts
export function aafBuildCards(b: AafBuild): AafBuildCard[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `AafBuild` | — |

## aafOccupiedSlots

导出接口 · 源码第 70 行。

```ts
export function aafOccupiedSlots(item: AafItemInstance): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `item` | 否 | `AafItemInstance` | — |

## aafShareHand

导出接口 · 源码第 71 行。

```ts
export function aafShareHand(a: AafItemInstance, b: AafItemInstance): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `AafItemInstance` | — |
| `b` | 否 | `AafItemInstance` | — |

## aafEquip

导出接口 · 源码第 72 行。

```ts
export function aafEquip(aaf: AafCharacter, id: string, slot: string): AafCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `aaf` | 否 | `AafCharacter` | — |
| `id` | 否 | `string` | — |
| `slot` | 否 | `string` | — |

## aafEquipmentStats

导出接口 · 源码第 82 行。

```ts
export function aafEquipmentStats(aaf: AafCharacter, attrs: AafAttributes, base?: { ac: number; speed: number; }): { ac: number; speed: number; weight: number; capacity: number; active: AafItemInstance; attackAttribute: "str" | "dex"; weaponProficient: boolean; armorProficient: boolean; stealthDisadvantage: boolean; focusDc: number; dual: boolean; held: AafItemInstance[]; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `aaf` | 否 | `AafCharacter` | — |
| `attrs` | 否 | `AafAttributes` | — |
| `base` | 是 | `{ ac: number; speed: number; }` | {ac:10+aafModifier(attrs.dex),speed:30} |
