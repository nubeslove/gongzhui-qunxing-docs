# game/packages/contracts/src/aaf-build.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## AAF_ATTRS

导出接口 · 源码第 2 行。

Durable AAF creation choices. Resource cards are snapshots, never links to mutable content.

```ts
export const AAF_ATTRS = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;
```

## AafAttr

导出接口 · 源码第 3 行。

```ts
export type AafAttr = typeof AAF_ATTRS[number];
```

## AafAttributes

导出接口 · 源码第 4 行。

```ts
export type AafAttributes = Record<AafAttr, number>;
```

## AAF_BODY_SLOTS

导出接口 · 源码第 5 行。

```ts
export const AAF_BODY_SLOTS = ['头部', '颈部', '披肩', '衣袍', '盔甲', '腰带', '护腕', '脚部', '左戒指', '右戒指', '饰品一', '饰品二', '左手', '右手', '远程', '工具'] as const;
```

## AafBodySlot

导出接口 · 源码第 6 行。

```ts
export type AafBodySlot = typeof AAF_BODY_SLOTS[number];
```

## AafPhysicalItem

导出接口 · 源码第 7 行。

```ts
export interface AafPhysicalItem {
    priceSp: number;
    weightKg: number;
    stackable: boolean;
    armor?: {
        base: number;
        category: 'light' | 'medium' | 'heavy';
        strength: number;
        stealthDisadvantage: boolean;
        focusDc: number;
    };
    shield?: {
        bonus: number;
        light: boolean;
    };
    weapon?: {
        dice: string;
        damageType: string;
        hands: 1 | 2;
        versatile?: string;
        finesse: boolean;
        ranged: boolean;
        range: number;
        longRange: number;
        dual: boolean;
        simple: boolean;
        lightShieldCompatible: boolean;
        special: string;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `priceSp` | 否 | `number` | 见结构定义及所属功能文档 |
| `weightKg` | 否 | `number` | 见结构定义及所属功能文档 |
| `stackable` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `armor` | 是 | `{base:number; category:'light'&#124;'medium'&#124;'heavy'; strength:number; stealthDisadvantage:boolean; focusDc:number}` | 见结构定义及所属功能文档 |
| `armor.base` | 否 | `number` | 见结构定义及所属功能文档 |
| `armor.category` | 否 | `'light'&#124;'medium'&#124;'heavy'` | 见结构定义及所属功能文档 |
| `armor.strength` | 否 | `number` | 见结构定义及所属功能文档 |
| `armor.stealthDisadvantage` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `armor.focusDc` | 否 | `number` | 见结构定义及所属功能文档 |
| `shield` | 是 | `{bonus:number; light:boolean}` | 见结构定义及所属功能文档 |
| `shield.bonus` | 否 | `number` | 见结构定义及所属功能文档 |
| `shield.light` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `weapon` | 是 | `{dice:string; damageType:string; hands:1&#124;2; versatile?:string; finesse:boolean; ranged:boolean; range:number; longRange:number; dual:boolean; simple:boolean; lightShieldCompatible:boolean; special:string}` | 见结构定义及所属功能文档 |
| `weapon.dice` | 否 | `string` | 见结构定义及所属功能文档 |
| `weapon.damageType` | 否 | `string` | 见结构定义及所属功能文档 |
| `weapon.hands` | 否 | `1&#124;2` | 见结构定义及所属功能文档 |
| `weapon.versatile` | 是 | `string` | 见结构定义及所属功能文档 |
| `weapon.finesse` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `weapon.ranged` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `weapon.range` | 否 | `number` | 见结构定义及所属功能文档 |
| `weapon.longRange` | 否 | `number` | 见结构定义及所属功能文档 |
| `weapon.dual` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `weapon.simple` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `weapon.lightShieldCompatible` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `weapon.special` | 否 | `string` | 见结构定义及所属功能文档 |

## AafBuildCard

导出接口 · 源码第 13 行。

```ts
export interface AafBuildCard {
    id: string;
    name: string;
    text: string;
    source: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |

## AafBuild

导出接口 · 源码第 14 行。

```ts
export interface AafBuild {
    version: 1;
    sourceRevision: string;
    name: string;
    level: number;
    method: 'buy27' | 'rolled';
    base: AafAttributes;
    backgroundPoints: AafAttributes;
    growthPoints: AafAttributes;
    raceId: string;
    subraceId: string;
    backgroundId: string;
    classes: {
        id: string;
        level: number;
        routeId?: string;
    }[];
    life: Record<string, number>;
    skills: Record<string, number>;
    backgroundSkills: Record<string, number>;
    racialSkill: string;
    racialLife: string;
    biography: {
        personality: string;
        ideal: string;
        bond: string;
        flaw: string;
        history: string;
        goal: string;
        contacts: string;
        languages: string;
        tools: string;
        ancestry: string;
        lifeTraining?: string;
        blueprints?: string;
    };
    selections: AafBuildCard[];
    bardTradition?: '奥秘' | '神圣' | '原初';
    selectionGroups?: Record<string, string[]>;
    status: 'draft' | 'submitted' | 'approved';
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `sourceRevision` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `level` | 否 | `number` | 见结构定义及所属功能文档 |
| `method` | 否 | `'buy27'&#124;'rolled'` | 见结构定义及所属功能文档 |
| `base` | 否 | `AafAttributes` | 见结构定义及所属功能文档 |
| `backgroundPoints` | 否 | `AafAttributes` | 见结构定义及所属功能文档 |
| `growthPoints` | 否 | `AafAttributes` | 见结构定义及所属功能文档 |
| `raceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `subraceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `backgroundId` | 否 | `string` | 见结构定义及所属功能文档 |
| `classes` | 否 | `{id:string;level:number;routeId?:string}[]` | 见结构定义及所属功能文档 |
| `classes.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `classes.[].level` | 否 | `number` | 见结构定义及所属功能文档 |
| `classes.[].routeId` | 是 | `string` | 见结构定义及所属功能文档 |
| `life` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `skills` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `backgroundSkills` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `racialSkill` | 否 | `string` | 见结构定义及所属功能文档 |
| `racialLife` | 否 | `string` | 见结构定义及所属功能文档 |
| `biography` | 否 | `{personality:string;ideal:string;bond:string;flaw:string;history:string;goal:string;contacts:string;languages:string;tools:string;ancestry:string;lifeTraining?:string;blueprints?:string}` | 见结构定义及所属功能文档 |
| `biography.personality` | 否 | `string` | 见结构定义及所属功能文档 |
| `biography.ideal` | 否 | `string` | 见结构定义及所属功能文档 |
| `biography.bond` | 否 | `string` | 见结构定义及所属功能文档 |
| `biography.flaw` | 否 | `string` | 见结构定义及所属功能文档 |
| `biography.history` | 否 | `string` | 见结构定义及所属功能文档 |
| `biography.goal` | 否 | `string` | 见结构定义及所属功能文档 |
| `biography.contacts` | 否 | `string` | 见结构定义及所属功能文档 |
| `biography.languages` | 否 | `string` | 见结构定义及所属功能文档 |
| `biography.tools` | 否 | `string` | 见结构定义及所属功能文档 |
| `biography.ancestry` | 否 | `string` | 见结构定义及所属功能文档 |
| `biography.lifeTraining` | 是 | `string` | 见结构定义及所属功能文档 |
| `biography.blueprints` | 是 | `string` | 见结构定义及所属功能文档 |
| `selections` | 否 | `AafBuildCard[]` | 见结构定义及所属功能文档 |
| `bardTradition` | 是 | `'奥秘'&#124;'神圣'&#124;'原初'` | 见结构定义及所属功能文档 |
| `selectionGroups` | 是 | `Record<string,string[]>` | 见结构定义及所属功能文档 |
| `status` | 否 | `'draft'&#124;'submitted'&#124;'approved'` | First save is a draft. Approval is a GM operation, never a cosmetic checkbox. |

## parseAafBuild

导出接口 · 源码第 32 行。

```ts
export function parseAafBuild(v: unknown): AafBuild;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |

## parseAafPhysical

导出接口 · 源码第 42 行。

```ts
export function parseAafPhysical(v: unknown): AafPhysicalItem;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |
