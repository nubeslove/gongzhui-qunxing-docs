# game/packages/contracts/src/aaf-rules.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isAafTurnMovement} from './aaf-movement';
```
</details>

## AAF_CONDITIONS

导出接口 · 源码第 3 行。

Executable AAF mechanics. Resource prose is deliberately outside this contract.

```ts
export const AAF_CONDITIONS = ['失能', '震慑', '麻痹', '昏迷', '石化', '目盲', '耳聋', '魅惑', '恐慌', '束缚', '受擒', '倒地', '晕眩', '缓慢', '分神', '压制', '禁疗', '隐形', '急速', '冻结', '回避', '撤离', '纠缠', '冲锋破绽'] as const;
```

## AafCondition

导出接口 · 源码第 4 行。

```ts
export type AafCondition = typeof AAF_CONDITIONS[number];
```

## AAF_DAMAGE_TYPES

导出接口 · 源码第 5 行。

```ts
export const AAF_DAMAGE_TYPES = ['钝击', '穿刺', '挥砍', '火焰', '冰冻', '风暴', '大地', '酸蚀', '毒素', '神圣', '黑暗', '奥术', '心灵', '真实'] as const;
```

## AafDamageType

导出接口 · 源码第 6 行。

```ts
export type AafDamageType = typeof AAF_DAMAGE_TYPES[number];
```

## AafAttribute

导出接口 · 源码第 7 行。

```ts
export type AafAttribute = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';
```

## AafCheckKind

导出接口 · 源码第 8 行。

```ts
export type AafCheckKind = 'attribute' | 'skill' | 'attack' | 'save' | 'initiative' | 'injury';
```

## AafActionCost

导出接口 · 源码第 9 行。

```ts
export type AafActionCost = 'standard' | 'move' | 'quick' | 'reaction' | 'compound' | 'free';
```

## AafBoundary

导出接口 · 源码第 10 行。

```ts
export type AafBoundary = 'turn-start' | 'turn-end' | 'combat-end' | 'scene-end' | 'short-rest-start' | 'short-rest-end' | 'long-rest-start' | 'long-rest-end';
```

## AafDuration

导出接口 · 源码第 11 行。

```ts
export interface AafDuration {
    event: AafBoundary | 'permanent';
    actorId?: string;
    remaining: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `event` | 否 | `AafBoundary&#124;'permanent'` | 见结构定义及所属功能文档 |
| `actorId` | 是 | `string` | 见结构定义及所属功能文档 |
| `remaining` | 否 | `number` | 见结构定义及所属功能文档 |

## AafConditionEntry

导出接口 · 源码第 12 行。

```ts
export interface AafConditionEntry {
    id: string;
    name: AafCondition;
    source: string;
    sourceActorId?: string;
    duration: AafDuration;
    concentrationId?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `AafCondition` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |
| `sourceActorId` | 是 | `string` | 见结构定义及所属功能文档 |
| `duration` | 否 | `AafDuration` | 见结构定义及所属功能文档 |
| `concentrationId` | 是 | `string` | 见结构定义及所属功能文档 |

## AafShield

导出接口 · 源码第 13 行。

```ts
export interface AafShield {
    id: string;
    source: string;
    value: number;
    type?: AafDamageType;
    duration: AafDuration;
    order: number;
    concentrationId?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |
| `value` | 否 | `number` | 见结构定义及所属功能文档 |
| `type` | 是 | `AafDamageType` | 见结构定义及所属功能文档 |
| `duration` | 否 | `AafDuration` | 见结构定义及所属功能文档 |
| `order` | 否 | `number` | 见结构定义及所属功能文档 |
| `concentrationId` | 是 | `string` | 见结构定义及所属功能文档 |

## AafConcentration

导出接口 · 源码第 14 行。

```ts
export interface AafConcentration {
    id: string;
    name: string;
    source: string;
    cost: number;
    reduction: number;
    duration: AafDuration;
    targetIds: string[];
    rank: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |
| `cost` | 否 | `number` | 见结构定义及所属功能文档 |
| `reduction` | 否 | `number` | 见结构定义及所属功能文档 |
| `duration` | 否 | `AafDuration` | 见结构定义及所属功能文档 |
| `targetIds` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `rank` | 否 | `number` | 见结构定义及所属功能文档 |

## AafModifier

导出接口 · 源码第 15 行。

```ts
export interface AafModifier {
    id: string;
    name: string;
    source: string;
    checks: AafCheckKind[];
    attribute?: AafAttribute;
    skill?: string;
    flat?: number;
    dice?: {
        count: number;
        sides: number;
        sign: 1 | -1;
    };
    advantage?: boolean;
    disadvantage?: boolean;
    stack?: boolean;
    once?: boolean;
    duration: AafDuration;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |
| `checks` | 否 | `AafCheckKind[]` | 见结构定义及所属功能文档 |
| `attribute` | 是 | `AafAttribute` | 见结构定义及所属功能文档 |
| `skill` | 是 | `string` | 见结构定义及所属功能文档 |
| `flat` | 是 | `number` | 见结构定义及所属功能文档 |
| `dice` | 是 | `{count:number;sides:number;sign:1&#124;-1}` | 见结构定义及所属功能文档 |
| `dice.count` | 否 | `number` | 见结构定义及所属功能文档 |
| `dice.sides` | 否 | `number` | 见结构定义及所属功能文档 |
| `dice.sign` | 否 | `1&#124;-1` | 见结构定义及所属功能文档 |
| `advantage` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `disadvantage` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `stack` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `once` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `duration` | 否 | `AafDuration` | 见结构定义及所属功能文档 |

## AafDefense

导出接口 · 源码第 16 行。

```ts
export interface AafDefense {
    source: string;
    type: AafDamageType | 'all';
    dr?: number;
    resistance?: boolean;
    vulnerability?: boolean;
    immune?: boolean;
    duration: AafDuration;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |
| `type` | 否 | `AafDamageType&#124;'all'` | 见结构定义及所属功能文档 |
| `dr` | 是 | `number` | 见结构定义及所属功能文档 |
| `resistance` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `vulnerability` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `immune` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `duration` | 否 | `AafDuration` | 见结构定义及所属功能文档 |

## AafPool

导出接口 · 源码第 17 行。

```ts
export interface AafPool {
    id: string;
    name: string;
    value: number;
    max: number;
    refresh: 'turn' | 'round' | 'scene' | 'short-rest' | 'long-rest' | 'never';
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `value` | 否 | `number` | 见结构定义及所属功能文档 |
| `max` | 否 | `number` | 见结构定义及所属功能文档 |
| `refresh` | 否 | `'turn'&#124;'round'&#124;'scene'&#124;'short-rest'&#124;'long-rest'&#124;'never'` | 见结构定义及所属功能文档 |

## AafAffliction

导出接口 · 源码第 18 行。

```ts
export interface AafAffliction {
    id: string;
    name: string;
    category: '毒' | '疾病' | '诅咒';
    rank: number;
    dc: number;
    attribute: AafAttribute;
    longRestCheck: boolean;
    shortRestEnds: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `category` | 否 | `'毒'&#124;'疾病'&#124;'诅咒'` | 见结构定义及所属功能文档 |
| `rank` | 否 | `number` | 见结构定义及所属功能文档 |
| `dc` | 否 | `number` | 见结构定义及所属功能文档 |
| `attribute` | 否 | `AafAttribute` | 见结构定义及所属功能文档 |
| `longRestCheck` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `shortRestEnds` | 否 | `boolean` | 见结构定义及所属功能文档 |

## AafCheckRecord

导出接口 · 源码第 19 行。

```ts
export interface AafCheckRecord {
    id: string;
    kind: AafCheckKind;
    attribute?: AafAttribute;
    skill?: string;
    dc: number;
    faces: number[];
    advantage: boolean;
    disadvantage: boolean;
    flat: number;
    other: Array<{
        name: string;
        faces: number[];
        sign: 1 | -1;
    }>;
    chosen: number;
    total: number;
    success: boolean;
    critical: boolean;
    fumble: boolean;
    automatic?: boolean;
    rerolls: Array<{
        index: number;
        face: number;
        kept: boolean;
    }>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `AafCheckKind` | 见结构定义及所属功能文档 |
| `attribute` | 是 | `AafAttribute` | 见结构定义及所属功能文档 |
| `skill` | 是 | `string` | 见结构定义及所属功能文档 |
| `dc` | 否 | `number` | 见结构定义及所属功能文档 |
| `faces` | 否 | `number[]` | 见结构定义及所属功能文档 |
| `advantage` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `disadvantage` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `flat` | 否 | `number` | 见结构定义及所属功能文档 |
| `other` | 否 | `Array<{name:string;faces:number[];sign:1&#124;-1}>` | 见结构定义及所属功能文档 |
| `chosen` | 否 | `number` | 见结构定义及所属功能文档 |
| `total` | 否 | `number` | 见结构定义及所属功能文档 |
| `success` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `critical` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `fumble` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `automatic` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `rerolls` | 否 | `Array<{index:number;face:number;kept:boolean}>` | 见结构定义及所属功能文档 |

## AafWounds

导出接口 · 源码第 20 行。

```ts
export interface AafWounds {
    entries: number;
    successes: number;
    failures: number;
    stable: boolean;
    defeated: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `entries` | 否 | `number` | 见结构定义及所属功能文档 |
| `successes` | 否 | `number` | 见结构定义及所属功能文档 |
| `failures` | 否 | `number` | 见结构定义及所属功能文档 |
| `stable` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `defeated` | 否 | `boolean` | 见结构定义及所属功能文档 |

## AafRuleState

导出接口 · 源码第 21 行。

```ts
export interface AafRuleState {
    version: 1;
    level: number;
    focus: {
        value: number;
        max: number;
    };
    storyPoints: number;
    heroDie: boolean;
    conditions: AafConditionEntry[];
    shields: AafShield[];
    concentrations: AafConcentration[];
    modifiers: AafModifier[];
    defenses: AafDefense[];
    pools: AafPool[];
    afflictions: AafAffliction[];
    effects: {
        bleeding: number;
        cold: number;
        shock: number;
    };
    exhaustion: number;
    wounds: AafWounds;
    shortRests: number;
    baseMaxHp: number;
    baseWalk: number;
    size: number;
    weight: number;
    undead: boolean;
    object: boolean;
    injurySaves: boolean;
    armor: {
        proficient: boolean;
        focusDc: number;
        focusDisadvantage: boolean;
        stealthDisadvantage: boolean;
        speedHalved: boolean;
    };
    saves: AafAttribute[];
    skills: Record<string, number>;
    conditionImmunities: AafCondition[];
    afflictionProtection: Array<{
        category: AafAffliction['category'];
        immune: number;
        resist: number;
    }>;
    casting: {
        arcane: number;
        divine: number;
        primal: number;
        psionic: number;
        attribute: AafAttribute;
        freeHands: number;
        focus: boolean;
        silenced: boolean;
    };
    abilities: AafAbility[];
    heroMoment?: {
        sacrifice: boolean;
        bonusUsed: boolean;
    };
    turn: {
        serial: number;
        actions: {
            standard: number;
            move: number;
            quick: number;
            reaction: number;
        };
        compoundUsed: boolean;
        acted: boolean;
        stepUsed: boolean;
        shockFailed: boolean;
        upkeepPending: boolean;
        upkeepPaid: boolean;
        preludeUsed: boolean;
        offhandReady: boolean;
    };
    lastCheck?: AafCheckRecord;
    pending?: {
        kind: 'attack' | 'check';
        targetId?: string;
        parts: AafDamagePart[];
        nonlethal: boolean;
        reroll?: {
            index: number;
            face: number;
        };
    };
    cast?: {
        abilityId: string;
        kind: 'chant' | 'ritual';
        progress: number;
        max: number;
        lastTurn: number;
        concentrationId: string;
        targets: string[];
        dc: number;
    };
    ready?: {
        trigger: string;
        abilityId?: string;
        targetId?: string;
        kind: 'attack' | 'move' | 'ability';
        mode?: 'walk' | 'fly' | 'swim' | 'climb' | 'burrow';
    };
    movement?: import('./aaf-movement').AafTurnMovement;
    controlCooldowns: Array<{
        source: string;
        condition: AafCondition;
        untilTurn: number;
    }>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `level` | 否 | `number` | 见结构定义及所属功能文档 |
| `focus` | 否 | `{value:number;max:number}` | 见结构定义及所属功能文档 |
| `focus.value` | 否 | `number` | 见结构定义及所属功能文档 |
| `focus.max` | 否 | `number` | 见结构定义及所属功能文档 |
| `storyPoints` | 否 | `number` | 见结构定义及所属功能文档 |
| `heroDie` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `conditions` | 否 | `AafConditionEntry[]` | 见结构定义及所属功能文档 |
| `shields` | 否 | `AafShield[]` | 见结构定义及所属功能文档 |
| `concentrations` | 否 | `AafConcentration[]` | 见结构定义及所属功能文档 |
| `modifiers` | 否 | `AafModifier[]` | 见结构定义及所属功能文档 |
| `defenses` | 否 | `AafDefense[]` | 见结构定义及所属功能文档 |
| `pools` | 否 | `AafPool[]` | 见结构定义及所属功能文档 |
| `afflictions` | 否 | `AafAffliction[]` | 见结构定义及所属功能文档 |
| `effects` | 否 | `{bleeding:number;cold:number;shock:number}` | 见结构定义及所属功能文档 |
| `effects.bleeding` | 否 | `number` | 见结构定义及所属功能文档 |
| `effects.cold` | 否 | `number` | 见结构定义及所属功能文档 |
| `effects.shock` | 否 | `number` | 见结构定义及所属功能文档 |
| `exhaustion` | 否 | `number` | 见结构定义及所属功能文档 |
| `wounds` | 否 | `AafWounds` | 见结构定义及所属功能文档 |
| `shortRests` | 否 | `number` | 见结构定义及所属功能文档 |
| `baseMaxHp` | 否 | `number` | 见结构定义及所属功能文档 |
| `baseWalk` | 否 | `number` | 见结构定义及所属功能文档 |
| `size` | 否 | `number` | 见结构定义及所属功能文档 |
| `weight` | 否 | `number` | 见结构定义及所属功能文档 |
| `undead` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `object` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `injurySaves` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `armor` | 否 | `{proficient:boolean;focusDc:number;focusDisadvantage:boolean;stealthDisadvantage:boolean;speedHalved:boolean}` | 见结构定义及所属功能文档 |
| `armor.proficient` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `armor.focusDc` | 否 | `number` | 见结构定义及所属功能文档 |
| `armor.focusDisadvantage` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `armor.stealthDisadvantage` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `armor.speedHalved` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `saves` | 否 | `AafAttribute[]` | 见结构定义及所属功能文档 |
| `skills` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `conditionImmunities` | 否 | `AafCondition[]` | 见结构定义及所属功能文档 |
| `afflictionProtection` | 否 | `Array<{category:AafAffliction['category'];immune:number;resist:number}>` | 见结构定义及所属功能文档 |
| `casting` | 否 | `{arcane:number;divine:number;primal:number;psionic:number;attribute:AafAttribute;freeHands:number;focus:boolean;silenced:boolean}` | 见结构定义及所属功能文档 |
| `casting.arcane` | 否 | `number` | 见结构定义及所属功能文档 |
| `casting.divine` | 否 | `number` | 见结构定义及所属功能文档 |
| `casting.primal` | 否 | `number` | 见结构定义及所属功能文档 |
| `casting.psionic` | 否 | `number` | 见结构定义及所属功能文档 |
| `casting.attribute` | 否 | `AafAttribute` | 见结构定义及所属功能文档 |
| `casting.freeHands` | 否 | `number` | 见结构定义及所属功能文档 |
| `casting.focus` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `casting.silenced` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `abilities` | 否 | `AafAbility[]` | 见结构定义及所属功能文档 |
| `heroMoment` | 是 | `{sacrifice:boolean;bonusUsed:boolean}` | 见结构定义及所属功能文档 |
| `heroMoment.sacrifice` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `heroMoment.bonusUsed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `turn` | 否 | `{serial:number;actions:{standard:number;move:number;quick:number;reaction:number};compoundUsed:boolean;acted:boolean;stepUsed:boolean;shockFailed:boolean;upkeepPending:boolean;upkeepPaid:boolean;preludeUsed:boolean;offhandReady:boolean}` | 见结构定义及所属功能文档 |
| `turn.serial` | 否 | `number` | 见结构定义及所属功能文档 |
| `turn.actions` | 否 | `{standard:number;move:number;quick:number;reaction:number}` | 见结构定义及所属功能文档 |
| `turn.actions.standard` | 否 | `number` | 见结构定义及所属功能文档 |
| `turn.actions.move` | 否 | `number` | 见结构定义及所属功能文档 |
| `turn.actions.quick` | 否 | `number` | 见结构定义及所属功能文档 |
| `turn.actions.reaction` | 否 | `number` | 见结构定义及所属功能文档 |
| `turn.compoundUsed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `turn.acted` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `turn.stepUsed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `turn.shockFailed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `turn.upkeepPending` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `turn.upkeepPaid` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `turn.preludeUsed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `turn.offhandReady` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `lastCheck` | 是 | `AafCheckRecord` | 见结构定义及所属功能文档 |
| `pending` | 是 | `{kind:'attack'&#124;'check';targetId?:string;parts:AafDamagePart[];nonlethal:boolean;reroll?:{index:number;face:number}}` | 见结构定义及所属功能文档 |
| `pending.kind` | 否 | `'attack'&#124;'check'` | 见结构定义及所属功能文档 |
| `pending.targetId` | 是 | `string` | 见结构定义及所属功能文档 |
| `pending.parts` | 否 | `AafDamagePart[]` | 见结构定义及所属功能文档 |
| `pending.nonlethal` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `pending.reroll` | 是 | `{index:number;face:number}` | 见结构定义及所属功能文档 |
| `pending.reroll.index` | 否 | `number` | 见结构定义及所属功能文档 |
| `pending.reroll.face` | 否 | `number` | 见结构定义及所属功能文档 |
| `cast` | 是 | `{abilityId:string;kind:'chant'&#124;'ritual';progress:number;max:number;lastTurn:number;concentrationId:string;targets:string[];dc:number}` | 见结构定义及所属功能文档 |
| `cast.abilityId` | 否 | `string` | 见结构定义及所属功能文档 |
| `cast.kind` | 否 | `'chant'&#124;'ritual'` | 见结构定义及所属功能文档 |
| `cast.progress` | 否 | `number` | 见结构定义及所属功能文档 |
| `cast.max` | 否 | `number` | 见结构定义及所属功能文档 |
| `cast.lastTurn` | 否 | `number` | 见结构定义及所属功能文档 |
| `cast.concentrationId` | 否 | `string` | 见结构定义及所属功能文档 |
| `cast.targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `cast.dc` | 否 | `number` | 见结构定义及所属功能文档 |
| `ready` | 是 | `{trigger:string;abilityId?:string;targetId?:string;kind:'attack'&#124;'move'&#124;'ability';mode?:'walk'&#124;'fly'&#124;'swim'&#124;'climb'&#124;'burrow'}` | 见结构定义及所属功能文档 |
| `ready.trigger` | 否 | `string` | 见结构定义及所属功能文档 |
| `ready.abilityId` | 是 | `string` | 见结构定义及所属功能文档 |
| `ready.targetId` | 是 | `string` | 见结构定义及所属功能文档 |
| `ready.kind` | 否 | `'attack'&#124;'move'&#124;'ability'` | 见结构定义及所属功能文档 |
| `ready.mode` | 是 | `'walk'&#124;'fly'&#124;'swim'&#124;'climb'&#124;'burrow'` | 见结构定义及所属功能文档 |
| `movement` | 是 | `import('./aaf-movement').AafTurnMovement` | 见结构定义及所属功能文档 |
| `controlCooldowns` | 否 | `Array<{source:string;condition:AafCondition;untilTurn:number}>` | 见结构定义及所属功能文档 |

## AafDamagePart

导出接口 · 源码第 40 行。

```ts
export interface AafDamagePart {
    type: AafDamageType;
    dice?: {
        count: number;
        sides: number;
    };
    flat: number;
    precise?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 否 | `AafDamageType` | 见结构定义及所属功能文档 |
| `dice` | 是 | `{count:number;sides:number}` | 见结构定义及所属功能文档 |
| `dice.count` | 否 | `number` | 见结构定义及所属功能文档 |
| `dice.sides` | 否 | `number` | 见结构定义及所属功能文档 |
| `flat` | 否 | `number` | 见结构定义及所属功能文档 |
| `precise` | 是 | `boolean` | 见结构定义及所属功能文档 |

## AafEffectOperation

导出接口 · 源码第 41 行。

```ts
export type AafEffectOperation = {
    kind: 'damage';
    parts: AafDamagePart[];
    halfOnSave?: boolean;
} | {
    kind: 'heal' | 'shield' | 'life-loss' | 'focus';
    amount: number;
    dice?: {
        count: number;
        sides: number;
    };
    type?: AafDamageType;
} | {
    kind: 'condition';
    name: AafCondition;
    duration?: AafDuration;
} | {
    kind: 'effect';
    name: 'burning' | 'bleeding' | 'cold' | 'shock';
    stacks: number;
} | {
    kind: 'terminal';
    name: 'burning' | 'bleeding' | 'cold' | 'shock';
} | {
    kind: 'remove-condition';
    name: AafCondition;
} | {
    kind: 'exhaustion';
    levels: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.kind` | 否 | `'damage'` | 见结构定义及所属功能文档 |
| `分支1.parts` | 否 | `AafDamagePart[]` | 见结构定义及所属功能文档 |
| `分支1.halfOnSave` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'heal'&#124;'shield'&#124;'life-loss'&#124;'focus'` | 见结构定义及所属功能文档 |
| `分支2.amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.dice` | 是 | `{count:number;sides:number}` | 见结构定义及所属功能文档 |
| `分支2.dice.count` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.dice.sides` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.type` | 是 | `AafDamageType` | 见结构定义及所属功能文档 |
| `分支3.kind` | 否 | `'condition'` | 见结构定义及所属功能文档 |
| `分支3.name` | 否 | `AafCondition` | 见结构定义及所属功能文档 |
| `分支3.duration` | 是 | `AafDuration` | 见结构定义及所属功能文档 |
| `分支4.kind` | 否 | `'effect'` | 见结构定义及所属功能文档 |
| `分支4.name` | 否 | `'burning'&#124;'bleeding'&#124;'cold'&#124;'shock'` | 见结构定义及所属功能文档 |
| `分支4.stacks` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支5.kind` | 否 | `'terminal'` | 见结构定义及所属功能文档 |
| `分支5.name` | 否 | `'burning'&#124;'bleeding'&#124;'cold'&#124;'shock'` | 见结构定义及所属功能文档 |
| `分支6.kind` | 否 | `'remove-condition'` | 见结构定义及所属功能文档 |
| `分支6.name` | 否 | `AafCondition` | 见结构定义及所属功能文档 |
| `分支7.kind` | 否 | `'exhaustion'` | 见结构定义及所属功能文档 |
| `分支7.levels` | 否 | `number` | 见结构定义及所属功能文档 |

## AafAbility

导出接口 · 源码第 49 行。

```ts
export interface AafAbility {
    id: string;
    name: string;
    system: 'spell' | 'psionic' | 'martial' | 'item' | 'feature';
    rank: number;
    source: 'arcane' | 'divine' | 'primal' | 'psionic' | 'granted';
    attribute: AafAttribute;
    cost: {
        action: AafActionCost;
        mp: number;
        focus: number;
        hp: number;
        poolId?: string;
    };
    range: number;
    maxTargets: number;
    resolution: 'attack' | 'save' | 'automatic';
    save?: AafAttribute;
    dc?: number;
    effects: AafEffectOperation[];
    duration: AafDuration;
    concentration: boolean;
    upkeep?: number;
    components: {
        verbal: boolean;
        somatic: boolean;
        material: boolean;
        materialSp: number;
        consumed: boolean;
    };
    tags: Array<'mind' | 'ray' | 'sonic' | 'prelude' | 'sleep' | 'death' | 'sustained' | 'counter' | 'dispel'>;
    chant: number;
    ritual?: {
        dc: number;
        segments: number;
    };
    counterRank?: number;
    reaction?: {
        event: import('./aaf-flow').AafTrigger | 'any';
        scope: 'self' | 'ally' | 'enemy' | 'any';
    };
    known: boolean;
    prepared: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `system` | 否 | `'spell'&#124;'psionic'&#124;'martial'&#124;'item'&#124;'feature'` | 见结构定义及所属功能文档 |
| `rank` | 否 | `number` | 见结构定义及所属功能文档 |
| `source` | 否 | `'arcane'&#124;'divine'&#124;'primal'&#124;'psionic'&#124;'granted'` | 见结构定义及所属功能文档 |
| `attribute` | 否 | `AafAttribute` | 见结构定义及所属功能文档 |
| `cost` | 否 | `{action:AafActionCost;mp:number;focus:number;hp:number;poolId?:string}` | 见结构定义及所属功能文档 |
| `cost.action` | 否 | `AafActionCost` | 见结构定义及所属功能文档 |
| `cost.mp` | 否 | `number` | 见结构定义及所属功能文档 |
| `cost.focus` | 否 | `number` | 见结构定义及所属功能文档 |
| `cost.hp` | 否 | `number` | 见结构定义及所属功能文档 |
| `cost.poolId` | 是 | `string` | 见结构定义及所属功能文档 |
| `range` | 否 | `number` | 见结构定义及所属功能文档 |
| `maxTargets` | 否 | `number` | 见结构定义及所属功能文档 |
| `resolution` | 否 | `'attack'&#124;'save'&#124;'automatic'` | 见结构定义及所属功能文档 |
| `save` | 是 | `AafAttribute` | 见结构定义及所属功能文档 |
| `dc` | 是 | `number` | 见结构定义及所属功能文档 |
| `effects` | 否 | `AafEffectOperation[]` | 见结构定义及所属功能文档 |
| `duration` | 否 | `AafDuration` | 见结构定义及所属功能文档 |
| `concentration` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `upkeep` | 是 | `number` | 见结构定义及所属功能文档 |
| `components` | 否 | `{verbal:boolean;somatic:boolean;material:boolean;materialSp:number;consumed:boolean}` | 见结构定义及所属功能文档 |
| `components.verbal` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `components.somatic` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `components.material` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `components.materialSp` | 否 | `number` | 见结构定义及所属功能文档 |
| `components.consumed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `tags` | 否 | `Array<'mind'&#124;'ray'&#124;'sonic'&#124;'prelude'&#124;'sleep'&#124;'death'&#124;'sustained'&#124;'counter'&#124;'dispel'>` | 见结构定义及所属功能文档 |
| `chant` | 否 | `number` | 见结构定义及所属功能文档 |
| `ritual` | 是 | `{dc:number;segments:number}` | 见结构定义及所属功能文档 |
| `ritual.dc` | 否 | `number` | 见结构定义及所属功能文档 |
| `ritual.segments` | 否 | `number` | 见结构定义及所属功能文档 |
| `counterRank` | 是 | `number` | 见结构定义及所属功能文档 |
| `reaction` | 是 | `{event:import('./aaf-flow').AafTrigger&#124;'any';scope:'self'&#124;'ally'&#124;'enemy'&#124;'any'}` | 见结构定义及所属功能文档 |
| `reaction.event` | 否 | `import('./aaf-flow').AafTrigger&#124;'any'` | 见结构定义及所属功能文档 |
| `reaction.scope` | 否 | `'self'&#124;'ally'&#124;'enemy'&#124;'any'` | 见结构定义及所属功能文档 |
| `known` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `prepared` | 否 | `boolean` | 见结构定义及所属功能文档 |

## aafCombatDuration

导出接口 · 源码第 61 行。

```ts
export const aafCombatDuration: (): AafDuration;
```

## emptyAafRules

导出接口 · 源码第 62 行。

```ts
export function emptyAafRules(level?: number, maxHp?: number, speed?: number): AafRuleState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `level` | 是 | `number` | 1 |
| `maxHp` | 是 | `number` | 1 |
| `speed` | 是 | `number` | 30 |

## Guard

内部依赖类型 · 源码第 69 行。

```ts
type Guard = (v: unknown) => boolean;
```

## parseAafRules

导出接口 · 源码第 87 行。

```ts
export function parseAafRules(v: unknown): AafRuleState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |

## isAafRules

导出接口 · 源码第 88 行。

```ts
export function isAafRules(v: unknown): v is AafRuleState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |

## parseAafAbility

导出接口 · 源码第 89 行。

```ts
export function parseAafAbility(v: unknown): AafAbility;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |

## parseAafOperation

导出接口 · 源码第 90 行。

```ts
export function parseAafOperation(v: unknown): AafEffectOperation;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |

## parseAafDuration

导出接口 · 源码第 91 行。

```ts
export function parseAafDuration(v: unknown): AafDuration;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |
