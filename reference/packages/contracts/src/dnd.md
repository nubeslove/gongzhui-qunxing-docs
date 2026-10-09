# game/packages/contracts/src/dnd.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseDndSorcery,parseDndMagic,parseDndMagicPrompt,type DndSorceryState,type DndMagicPending,type DndMagicPrompt,type DndMagicJob} from './dnd-magic';
import { parseTimedDecision, type TimedDecision } from './decision-policy';
import {parseDndActiveEffect,type DndActiveEffect} from './dnd-effects';
```
</details>

## 重新导出的模块

```ts
export {type DndActiveEffect,type DndSceneSpell} from './dnd-effects';
```

## DND_ABILITIES

导出接口 · 源码第 4 行。

```ts
export const DND_ABILITIES = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;
```

## DndAbility

导出接口 · 源码第 5 行。

```ts
export type DndAbility = typeof DND_ABILITIES[number];
```

## DND_DAMAGE_TYPES

导出接口 · 源码第 6 行。

```ts
export const DND_DAMAGE_TYPES = ['acid', 'bludgeoning', 'cold', 'fire', 'force', 'lightning', 'necrotic', 'piercing', 'poison', 'psychic', 'radiant', 'slashing', 'thunder'] as const;
```

## DndDamageType

导出接口 · 源码第 7 行。

```ts
export type DndDamageType = typeof DND_DAMAGE_TYPES[number];
```

## DND_CONDITIONS

导出接口 · 源码第 8 行。

```ts
export const DND_CONDITIONS = ['blinded', 'charmed', 'deafened', 'frightened', 'grappled', 'incapacitated', 'invisible', 'paralyzed', 'petrified', 'poisoned', 'prone', 'restrained', 'stunned', 'unconscious'] as const;
```

## DndCondition

导出接口 · 源码第 9 行。

```ts
export type DndCondition = typeof DND_CONDITIONS[number];
```

## DndConditionState

导出接口 · 源码第 10 行。

```ts
export interface DndConditionState {
    kind: DndCondition;
    source?: string;
    suppressed?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `DndCondition` | 见结构定义及所属功能文档 |
| `source` | 是 | `string` | 见结构定义及所属功能文档 |
| `suppressed` | 是 | `boolean` | 见结构定义及所属功能文档 |

## DndExtraStatus

导出接口 · 源码第 11 行。

```ts
export type DndExtraStatus = 'bloodied' | 'dead' | 'encumbered' | 'heavilyEncumbered' | 'overloaded';
```

## DndPool

导出接口 · 源码第 12 行。

```ts
export interface DndPool {
    max: number;
    used: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `max` | 否 | `number` | 见结构定义及所属功能文档 |
| `used` | 否 | `number` | 见结构定义及所属功能文档 |

## DndAttack

导出接口 · 源码第 13 行。

```ts
export interface DndAttack {
    ability?: DndAbility;
    id: string;
    name: string;
    bonus: number;
    damage: string;
    damageType: DndDamageType;
    reach: number;
    longRange?: number;
    ranged: boolean;
    source?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `ability` | 是 | `DndAbility` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `bonus` | 否 | `number` | 见结构定义及所属功能文档 |
| `damage` | 否 | `string` | 见结构定义及所属功能文档 |
| `damageType` | 否 | `DndDamageType` | 见结构定义及所属功能文档 |
| `reach` | 否 | `number` | 见结构定义及所属功能文档 |
| `longRange` | 是 | `number` | 见结构定义及所属功能文档 |
| `ranged` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `source` | 是 | `string` | 见结构定义及所属功能文档 |

## DndAbilityMethod

导出接口 · 源码第 14 行。

```ts
export type DndAbilityMethod = 'pointBuy' | 'array' | 'manual';
```

## DndInventoryItem

导出接口 · 源码第 15 行。

```ts
export interface DndInventoryItem {
    id: string;
    name: string;
    quantity: number;
    weight: number;
    notes: string;
    source?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `quantity` | 否 | `number` | 见结构定义及所属功能文档 |
| `weight` | 否 | `number` | 见结构定义及所属功能文档 |
| `notes` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 是 | `string` | 见结构定义及所属功能文档 |

## DndCharacter

导出接口 · 源码第 18 行。

```ts
export interface DndCharacter {
    damageTaken?: number;
    hiding?: {
        total: number;
    };
    bloodiedOverride?: boolean;
    load?: 'encumbered' | 'heavilyEncumbered' | 'overloaded';
    effects?: DndActiveEffect[];
    sorcery?: DndSorceryState;
    version: 1;
    kind: 'pc' | 'monster';
    side: 'party' | 'hostile' | 'neutral';
    level: number;
    classes: {
        id: string;
        level: number;
        subclass?: string;
    }[];
    species?: string;
    background?: string;
    feats: string[];
    monster?: string;
    abilities: Record<DndAbility, number>;
    skills: Record<string, number>;
    saves: DndAbility[];
    skillBonuses?: Record<string, number>;
    saveBonuses?: Partial<Record<DndAbility, number>>;
    proficiency: number;
    ac: number;
    speed: number;
    initiative: number;
    hp: number;
    maxHp: number;
    tempHp: number;
    hitDice: {
        sides: number;
        max: number;
        used: number;
    }[];
    spellAbility: DndAbility | null;
    spells: string[];
    slots: DndPool[];
    spellSources?: Record<string, {
        ability: DndAbility;
        spells: string[];
    }>;
    training?: {
        armor: string[];
        weapons: string[];
        tools: string[];
    };
    pact?: DndPool & {
        level: number;
    };
    spellbook?: string[];
    preparation?: {
        trigger: 'long-rest' | 'short-rest' | 'level-up';
        classes: string[];
        learn?: Record<string, number>;
    };
    weapons: string[];
    armor?: string;
    shield: boolean;
    attacks: DndAttack[];
    multiattacks?: string[][];
    resources: Record<string, DndPool & {
        refresh: 'short' | 'long' | 'manual';
    }>;
    conditions: DndConditionState[];
    exhaustion: number;
    resistances: DndDamageType[];
    immunities: DndDamageType[];
    conditionImmunities?: DndCondition[];
    vulnerabilities: DndDamageType[];
    death: {
        successes: number;
        failures: number;
        stable: boolean;
    };
    concentration?: {
        spell: string;
        targets: string[];
    };
    inspiration: boolean;
    experience?: number;
    advancement?: 'milestone' | 'xp';
    abilityGeneration?: {
        method: DndAbilityMethod;
        scores: Record<DndAbility, number>;
        boosts: Record<DndAbility, number>;
    };
    inventory?: DndInventoryItem[];
    currency?: {
        cp: number;
        sp: number;
        ep: number;
        gp: number;
        pp: number;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `damageTaken` | 是 | `number` | 见结构定义及所属功能文档 |
| `hiding` | 是 | `{total:number}` | 见结构定义及所属功能文档 |
| `hiding.total` | 否 | `number` | 见结构定义及所属功能文档 |
| `bloodiedOverride` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `load` | 是 | `'encumbered'&#124;'heavilyEncumbered'&#124;'overloaded'` | 见结构定义及所属功能文档 |
| `effects` | 是 | `DndActiveEffect[]` | 见结构定义及所属功能文档 |
| `sorcery` | 是 | `DndSorceryState` | 见结构定义及所属功能文档 |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'pc' &#124; 'monster'` | 见结构定义及所属功能文档 |
| `side` | 否 | `'party' &#124; 'hostile' &#124; 'neutral'` | 见结构定义及所属功能文档 |
| `level` | 否 | `number` | 见结构定义及所属功能文档 |
| `classes` | 否 | `{ id: string; level: number; subclass?: string }[]` | 见结构定义及所属功能文档 |
| `classes.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `classes.[].level` | 否 | `number` | 见结构定义及所属功能文档 |
| `classes.[].subclass` | 是 | `string` | 见结构定义及所属功能文档 |
| `species` | 是 | `string` | 见结构定义及所属功能文档 |
| `background` | 是 | `string` | 见结构定义及所属功能文档 |
| `feats` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `monster` | 是 | `string` | 见结构定义及所属功能文档 |
| `abilities` | 否 | `Record<DndAbility, number>` | 见结构定义及所属功能文档 |
| `skills` | 否 | `Record<string, number>` | 见结构定义及所属功能文档 |
| `saves` | 否 | `DndAbility[]` | 见结构定义及所属功能文档 |
| `skillBonuses` | 是 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `saveBonuses` | 是 | `Partial<Record<DndAbility,number>>` | 见结构定义及所属功能文档 |
| `proficiency` | 否 | `number` | 见结构定义及所属功能文档 |
| `ac` | 否 | `number` | 见结构定义及所属功能文档 |
| `speed` | 否 | `number` | 见结构定义及所属功能文档 |
| `initiative` | 否 | `number` | 见结构定义及所属功能文档 |
| `hp` | 否 | `number` | 见结构定义及所属功能文档 |
| `maxHp` | 否 | `number` | 见结构定义及所属功能文档 |
| `tempHp` | 否 | `number` | 见结构定义及所属功能文档 |
| `hitDice` | 否 | `{ sides: number; max: number; used: number }[]` | 见结构定义及所属功能文档 |
| `hitDice.[].sides` | 否 | `number` | 见结构定义及所属功能文档 |
| `hitDice.[].max` | 否 | `number` | 见结构定义及所属功能文档 |
| `hitDice.[].used` | 否 | `number` | 见结构定义及所属功能文档 |
| `spellAbility` | 否 | `DndAbility &#124; null` | 见结构定义及所属功能文档 |
| `spells` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `slots` | 否 | `DndPool[]` | 见结构定义及所属功能文档 |
| `spellSources` | 是 | `Record<string,{ability:DndAbility;spells:string[]}>` | 见结构定义及所属功能文档 |
| `training` | 是 | `{armor:string[];weapons:string[];tools:string[]}` | 见结构定义及所属功能文档 |
| `training.armor` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `training.weapons` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `training.tools` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `pact` | 是 | `DndPool&{level:number}` | 见结构定义及所属功能文档 |
| `pact.level` | 否 | `number` | 见结构定义及所属功能文档 |
| `spellbook` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `preparation` | 是 | `{trigger:'long-rest'&#124;'short-rest'&#124;'level-up';classes:string[];learn?:Record<string,number>}` | 见结构定义及所属功能文档 |
| `preparation.trigger` | 否 | `'long-rest'&#124;'short-rest'&#124;'level-up'` | 见结构定义及所属功能文档 |
| `preparation.classes` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `preparation.learn` | 是 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `weapons` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `armor` | 是 | `string` | 见结构定义及所属功能文档 |
| `shield` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `attacks` | 否 | `DndAttack[]` | 见结构定义及所属功能文档 |
| `multiattacks` | 是 | `string[][]` | 见结构定义及所属功能文档 |
| `resources` | 否 | `Record<string, DndPool & { refresh: 'short' &#124; 'long' &#124; 'manual' }>` | 见结构定义及所属功能文档 |
| `conditions` | 否 | `DndConditionState[]` | 见结构定义及所属功能文档 |
| `exhaustion` | 否 | `number` | 见结构定义及所属功能文档 |
| `resistances` | 否 | `DndDamageType[]` | 见结构定义及所属功能文档 |
| `immunities` | 否 | `DndDamageType[]` | 见结构定义及所属功能文档 |
| `conditionImmunities` | 是 | `DndCondition[]` | 见结构定义及所属功能文档 |
| `vulnerabilities` | 否 | `DndDamageType[]` | 见结构定义及所属功能文档 |
| `death` | 否 | `{ successes: number; failures: number; stable: boolean }` | 见结构定义及所属功能文档 |
| `death.successes` | 否 | `number` | 见结构定义及所属功能文档 |
| `death.failures` | 否 | `number` | 见结构定义及所属功能文档 |
| `death.stable` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `concentration` | 是 | `{ spell: string; targets: string[] }` | 见结构定义及所属功能文档 |
| `concentration.spell` | 否 | `string` | 见结构定义及所属功能文档 |
| `concentration.targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `inspiration` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `experience` | 是 | `number` | 见结构定义及所属功能文档 |
| `advancement` | 是 | `'milestone'&#124;'xp'` | 见结构定义及所属功能文档 |
| `abilityGeneration` | 是 | `{method:DndAbilityMethod;scores:Record<DndAbility,number>;boosts:Record<DndAbility,number>}` | 见结构定义及所属功能文档 |
| `abilityGeneration.method` | 否 | `DndAbilityMethod` | 见结构定义及所属功能文档 |
| `abilityGeneration.scores` | 否 | `Record<DndAbility,number>` | 见结构定义及所属功能文档 |
| `abilityGeneration.boosts` | 否 | `Record<DndAbility,number>` | 见结构定义及所属功能文档 |
| `inventory` | 是 | `DndInventoryItem[]` | 见结构定义及所属功能文档 |
| `currency` | 是 | `{cp:number;sp:number;ep:number;gp:number;pp:number}` | 见结构定义及所属功能文档 |
| `currency.cp` | 否 | `number` | 见结构定义及所属功能文档 |
| `currency.sp` | 否 | `number` | 见结构定义及所属功能文档 |
| `currency.ep` | 否 | `number` | 见结构定义及所属功能文档 |
| `currency.gp` | 否 | `number` | 见结构定义及所属功能文档 |
| `currency.pp` | 否 | `number` | 见结构定义及所属功能文档 |

## DndTurn

导出接口 · 源码第 42 行。

```ts
export interface DndTurn {
    effectSpeed?: number;
    effectsRound?: number;
    displayOnly?: true;
    actor: string;
    initiative: number;
    action: number;
    bonus: number;
    reaction: number;
    movement: number;
    movementSpent?: number;
    dashCount?: number;
    attacks: number;
    slotSpent: boolean;
    dodging: boolean;
    disengaged: boolean;
    deathSaved: boolean;
    shield: number;
    spellfireBurstUsed?: boolean;
    burningUsed?: boolean;
    surgeAction?: boolean;
    surgeUsed?: boolean;
    multiattack?: string[][];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `effectSpeed` | 是 | `number` | 见结构定义及所属功能文档 |
| `effectsRound` | 是 | `number` | 见结构定义及所属功能文档 |
| `displayOnly` | 是 | `true` | 见结构定义及所属功能文档 |
| `actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `initiative` | 否 | `number` | 见结构定义及所属功能文档 |
| `action` | 否 | `number` | 见结构定义及所属功能文档 |
| `bonus` | 否 | `number` | 见结构定义及所属功能文档 |
| `reaction` | 否 | `number` | 见结构定义及所属功能文档 |
| `movement` | 否 | `number` | 见结构定义及所属功能文档 |
| `movementSpent` | 是 | `number` | 见结构定义及所属功能文档 |
| `dashCount` | 是 | `number` | 见结构定义及所属功能文档 |
| `attacks` | 否 | `number` | 见结构定义及所属功能文档 |
| `slotSpent` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `dodging` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `disengaged` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `deathSaved` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `shield` | 否 | `number` | 见结构定义及所属功能文档 |
| `spellfireBurstUsed` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `burningUsed` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `surgeAction` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `surgeUsed` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `multiattack` | 是 | `string[][]` | 见结构定义及所属功能文档 |

## DndBattle

导出接口 · 源码第 43 行。

```ts
export interface DndBattle {
    version: 1;
    round: number;
    turn: number;
    order: DndTurn[];
    ended: boolean;
    hiddenTurn?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `round` | 否 | `number` | 见结构定义及所属功能文档 |
| `turn` | 否 | `number` | 见结构定义及所属功能文档 |
| `order` | 否 | `DndTurn[]` | 见结构定义及所属功能文档 |
| `ended` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `hiddenTurn` | 是 | `boolean` | 见结构定义及所属功能文档 |

## DndRestRequest

导出接口 · 源码第 44 行。

```ts
export interface DndRestRequest {
    id: string;
    rest: 'short' | 'long';
    requesterId: string;
    createdAt: number;
    votes: Record<string, 'yes' | 'no' | null>;
    hitDice: Record<string, number[]>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `rest` | 否 | `'short'&#124;'long'` | 见结构定义及所属功能文档 |
| `requesterId` | 否 | `string` | 见结构定义及所属功能文档 |
| `createdAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `votes` | 否 | `Record<string,'yes'&#124;'no'&#124;null>` | 见结构定义及所属功能文档 |
| `hitDice` | 否 | `Record<string,number[]>` | 见结构定义及所属功能文档 |

## DndMovePlan

导出接口 · 源码第 45 行。

```ts
export interface DndMovePlan {
    mode?: import('./scene-environment').MovementChoice;
    actor: string;
    token: string;
    steps: {
        x: number;
        y: number;
        z: number;
        cost: number;
    }[];
    declined: string[];
    afterAttack?: {
        target: string;
        attack: string;
        mode: DndRollMode;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `mode` | 是 | `import('./scene-environment').MovementChoice` | 见结构定义及所属功能文档 |
| `actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `token` | 否 | `string` | 见结构定义及所属功能文档 |
| `steps` | 否 | `{x:number;y:number;z:number;cost:number}[]` | 见结构定义及所属功能文档 |
| `steps.[].x` | 否 | `number` | 见结构定义及所属功能文档 |
| `steps.[].y` | 否 | `number` | 见结构定义及所属功能文档 |
| `steps.[].z` | 否 | `number` | 见结构定义及所属功能文档 |
| `steps.[].cost` | 否 | `number` | 见结构定义及所属功能文档 |
| `declined` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `afterAttack` | 是 | `{target:string;attack:string;mode:DndRollMode}` | 见结构定义及所属功能文档 |
| `afterAttack.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `afterAttack.attack` | 否 | `string` | 见结构定义及所属功能文档 |
| `afterAttack.mode` | 否 | `DndRollMode` | 见结构定义及所属功能文档 |

## DndPending

导出接口 · 源码第 46 行。

```ts
export interface DndPending {
    gate: TimedDecision;
    magic?: DndMagicPending;
    followups?: DndMagicJob[];
    magicPrompt?: DndMagicPrompt;
    adjudication?: DndAdjudication;
    attack?: {
        source: string;
        target: string;
        label: string;
        total: number;
        natural: number;
        critical: boolean;
        damage: string;
        damageType: DndDamageType;
        cover: number;
        slot?: number;
        spell?: string;
        classId?: string;
        empower?: boolean;
        remaining?: {
            target: string;
            formula: string;
        }[];
    };
    opportunity?: {
        source: string;
        target: string;
        attacks: string[];
    };
    move?: DndMovePlan;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `gate` | 否 | `TimedDecision` | 见结构定义及所属功能文档 |
| `magic` | 是 | `DndMagicPending` | 见结构定义及所属功能文档 |
| `followups` | 是 | `DndMagicJob[]` | 见结构定义及所属功能文档 |
| `magicPrompt` | 是 | `DndMagicPrompt` | 见结构定义及所属功能文档 |
| `adjudication` | 是 | `DndAdjudication` | 见结构定义及所属功能文档 |
| `attack` | 是 | `{ source:string; target:string; label:string; total:number; natural:number; critical:boolean; damage:string; damageType:DndDamageType; cover:number; slot?:number;spell?:string;classId?:string; empower?:boolean; remaining?: {target:string;formula:string}[] }` | 见结构定义及所属功能文档 |
| `attack.source` | 否 | `string` | 见结构定义及所属功能文档 |
| `attack.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `attack.label` | 否 | `string` | 见结构定义及所属功能文档 |
| `attack.total` | 否 | `number` | 见结构定义及所属功能文档 |
| `attack.natural` | 否 | `number` | 见结构定义及所属功能文档 |
| `attack.critical` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `attack.damage` | 否 | `string` | 见结构定义及所属功能文档 |
| `attack.damageType` | 否 | `DndDamageType` | 见结构定义及所属功能文档 |
| `attack.cover` | 否 | `number` | 见结构定义及所属功能文档 |
| `attack.slot` | 是 | `number` | 见结构定义及所属功能文档 |
| `attack.spell` | 是 | `string` | 见结构定义及所属功能文档 |
| `attack.classId` | 是 | `string` | 见结构定义及所属功能文档 |
| `attack.empower` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `attack.remaining` | 是 | `{target:string;formula:string}[]` | 见结构定义及所属功能文档 |
| `attack.remaining.[].target` | 否 | `string` | 见结构定义及所属功能文档 |
| `attack.remaining.[].formula` | 否 | `string` | 见结构定义及所属功能文档 |
| `opportunity` | 是 | `{source:string;target:string;attacks:string[]}` | 见结构定义及所属功能文档 |
| `opportunity.source` | 否 | `string` | 见结构定义及所属功能文档 |
| `opportunity.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `opportunity.attacks` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `move` | 是 | `DndMovePlan` | 见结构定义及所属功能文档 |

## DndRollMode

导出接口 · 源码第 56 行。

```ts
export type DndRollMode = 'normal' | 'advantage' | 'disadvantage';
```

## DndHudRef

导出接口 · 源码第 58 行。

Stable references only; clients never submit executable code or trusted resource costs.

```ts
export interface DndHudRef {
    kind: 'common' | 'attack' | 'spell' | 'feat' | 'feature' | 'inventory' | 'pool' | 'owned' | 'world';
    id: string;
    itemId?: string;
    activityId?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'common'&#124;'attack'&#124;'spell'&#124;'feat'&#124;'feature'&#124;'inventory'&#124;'pool'&#124;'owned'&#124;'world'` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `itemId` | 是 | `string` | 见结构定义及所属功能文档 |
| `activityId` | 是 | `string` | 见结构定义及所属功能文档 |

## DndAdjudication

导出接口 · 源码第 59 行。

```ts
export interface DndAdjudication {
    actor: string;
    source: DndHudRef;
    targets: string[];
    slot: number;
    slotType?: 'spell' | 'pact';
    classId?: string;
    note: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 否 | `DndHudRef` | 见结构定义及所属功能文档 |
| `targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `slot` | 否 | `number` | 见结构定义及所属功能文档 |
| `slotType` | 是 | `'spell'&#124;'pact'` | 见结构定义及所属功能文档 |
| `classId` | 是 | `string` | 见结构定义及所属功能文档 |
| `note` | 否 | `string` | 见结构定义及所属功能文档 |

## DndAdjudicationResult

导出接口 · 源码第 60 行。

```ts
export interface DndAdjudicationResult {
    note: string;
    activation: 'free' | 'action' | 'bonus' | 'reaction';
    cost: number;
    consume: boolean;
    poolCost: number;
    effects: {
        target: string;
        damage: number;
        damageType: DndDamageType;
        heal: number;
        temporary: number;
        condition?: DndCondition;
    }[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `note` | 否 | `string` | 见结构定义及所属功能文档 |
| `activation` | 否 | `'free'&#124;'action'&#124;'bonus'&#124;'reaction'` | 见结构定义及所属功能文档 |
| `cost` | 否 | `number` | 见结构定义及所属功能文档 |
| `consume` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `poolCost` | 否 | `number` | 见结构定义及所属功能文档 |
| `effects` | 否 | `{target:string;damage:number;damageType:DndDamageType;heal:number;temporary:number;condition?:DndCondition}[]` | 见结构定义及所属功能文档 |
| `effects.[].target` | 否 | `string` | 见结构定义及所属功能文档 |
| `effects.[].damage` | 否 | `number` | 见结构定义及所属功能文档 |
| `effects.[].damageType` | 否 | `DndDamageType` | 见结构定义及所属功能文档 |
| `effects.[].heal` | 否 | `number` | 见结构定义及所属功能文档 |
| `effects.[].temporary` | 否 | `number` | 见结构定义及所属功能文档 |
| `effects.[].condition` | 是 | `DndCondition` | 见结构定义及所属功能文档 |

## DndLevelChoice

导出接口 · 源码第 61 行。

```ts
export interface DndLevelChoice {
    spells?: {
        prepared: string[];
        cantrips: string[];
        learn: string[];
    };
    classId?: string;
    skill?: string;
    instrument?: string;
    hpRoll?: number;
    subclass?: string;
    feat?: string;
    boosts?: Partial<Record<DndAbility, number>>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `spells` | 是 | `{prepared:string[];cantrips:string[];learn:string[]}` | 见结构定义及所属功能文档 |
| `spells.prepared` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `spells.cantrips` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `spells.learn` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `classId` | 是 | `string` | 见结构定义及所属功能文档 |
| `skill` | 是 | `string` | 见结构定义及所属功能文档 |
| `instrument` | 是 | `string` | 见结构定义及所属功能文档 |
| `hpRoll` | 是 | `number` | 见结构定义及所属功能文档 |
| `subclass` | 是 | `string` | 见结构定义及所属功能文档 |
| `feat` | 是 | `string` | 见结构定义及所属功能文档 |
| `boosts` | 是 | `Partial<Record<DndAbility,number>>` | 见结构定义及所属功能文档 |

## DndIntent

导出接口 · 源码第 62 行。

```ts
export type DndIntent = {
    type: 'sorcery';
    actor: string;
    operation: 'innate' | 'crown-recharge' | 'create-slot' | 'convert-slot';
    crown?: boolean;
    slot?: number;
    slotType?: 'spell' | 'pact';
} | {
    type: 'effectTick';
} | {
    type: 'wake';
    actor: string;
    target: string;
} | {
    type: 'escapeSpell';
    actor: string;
    effect: string;
} | {
    type: 'moveLights';
    actor: string;
    effect: string;
    points: import('./movement-path').MovementPoint[];
} | {
    type: 'moveZone';
    actor: string;
    effect: string;
    point: import('./movement-path').MovementPoint;
    confirmFriendly?: boolean;
} | {
    type: 'requestRest';
    rest: 'short' | 'long';
} | {
    type: 'voteRest';
    id: string;
    vote: 'yes' | 'no';
    hitDice?: Record<string, number[]>;
} | {
    type: 'resolveRest';
    id?: string;
    rest: 'short' | 'long';
    accept: boolean;
} | {
    type: 'levelUp';
    actor: string;
    choice: DndLevelChoice;
} | {
    type: 'prepareSpells';
    actor: string;
    classId: string;
    spells: string[];
    cantrips?: string[];
    learn?: string[];
} | {
    type: 'declare';
    actor: string;
    source: DndHudRef;
    targets: string[];
    slot: number;
    slotType?: 'spell' | 'pact';
    classId?: string;
    note: string;
} | {
    type: 'adjudicate';
    id: string;
    accept: boolean;
    result?: DndAdjudicationResult;
} | {
    type: 'decision';
    id: string;
    choice: string | null;
    target?: string;
    point?: import('./scene-features').ScenePoint;
    dice?: number[];
    hitDice?: number[];
} | {
    type: 'finishAttack';
    actor: string;
} | {
    type: 'pauseDecision';
    id: string;
} | {
    type: 'decisionTimeout';
    id: string;
} | {
    type: 'check';
    actor: string;
    ability: DndAbility;
    skill?: string;
    save?: boolean;
    mode: DndRollMode;
    dc?: number;
} | {
    type: 'start';
    actors: string[];
    precombatEffects?: 'keep' | 'clear';
} | {
    type: 'next';
} | {
    type: 'end';
} | {
    type: 'attack';
    actor: string;
    target: string;
    attack: string;
    mode: DndRollMode;
    approach?: boolean;
    confirmDanger?: boolean;
} | {
    type: 'move';
    actor: string;
    token: string;
    x: number;
    y: number;
    z: number;
    mode?: import('./scene-environment').MovementChoice;
    path?: import('./movement-path').MovementPoint[];
} | {
    type: 'cast';
    actor: string;
    spell: string;
    classId?: string;
    slotType?: 'spell' | 'pact';
    targets: string[];
    slot: number;
    effectTarget?: string;
    points?: import('./movement-path').MovementPoint[];
    rays?: string[];
    heightened?: string;
    empower?: boolean;
    removeCondition?: DndCondition;
    choices?: Record<string, string>;
    area?: import('./movement-path').MovementPoint;
    confirmFriendly?: boolean;
} | {
    type: 'action';
    actor: string;
    action: 'dash' | 'disengage' | 'dodge' | 'stand' | 'hide' | 'search' | 'endHide';
} | {
    type: 'rest';
    actor: string;
    rest: 'short' | 'long';
    hitDice?: number[];
} | {
    type: 'deathSave';
    actor: string;
} | {
    type: 'damage';
    actor: string;
    amount: number;
    damageType: DndDamageType;
} | {
    type: 'heal';
    actor: string;
    amount: number;
    temporary?: boolean;
} | {
    type: 'condition';
    actor: string;
    condition: DndCondition;
    add: boolean;
    source?: string;
} | {
    type: 'exhaustion';
    actor: string;
    level: number;
} | {
    type: 'status';
    actor: string;
    status: DndExtraStatus;
    add: boolean;
} | {
    type: 'dropConcentration';
    actor: string;
} | {
    type: 'resource';
    actor: string;
    resource: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'sorcery'` | 见结构定义及所属功能文档 |
| `分支1.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.operation` | 否 | `'innate'&#124;'crown-recharge'&#124;'create-slot'&#124;'convert-slot'` | 见结构定义及所属功能文档 |
| `分支1.crown` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支1.slot` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支1.slotType` | 是 | `'spell'&#124;'pact'` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'effectTick'` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'wake'` | 见结构定义及所属功能文档 |
| `分支3.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.type` | 否 | `'escapeSpell'` | 见结构定义及所属功能文档 |
| `分支4.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.effect` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.type` | 否 | `'moveLights'` | 见结构定义及所属功能文档 |
| `分支5.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.effect` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.points` | 否 | `import('./movement-path').MovementPoint[]` | 见结构定义及所属功能文档 |
| `分支6.type` | 否 | `'moveZone'` | 见结构定义及所属功能文档 |
| `分支6.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.effect` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.point` | 否 | `import('./movement-path').MovementPoint` | 见结构定义及所属功能文档 |
| `分支6.confirmFriendly` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支7.type` | 否 | `'requestRest'` | 见结构定义及所属功能文档 |
| `分支7.rest` | 否 | `'short'&#124;'long'` | 见结构定义及所属功能文档 |
| `分支8.type` | 否 | `'voteRest'` | 见结构定义及所属功能文档 |
| `分支8.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.vote` | 否 | `'yes'&#124;'no'` | 见结构定义及所属功能文档 |
| `分支8.hitDice` | 是 | `Record<string,number[]>` | 见结构定义及所属功能文档 |
| `分支9.type` | 否 | `'resolveRest'` | 见结构定义及所属功能文档 |
| `分支9.id` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支9.rest` | 否 | `'short'&#124;'long'` | 见结构定义及所属功能文档 |
| `分支9.accept` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.type` | 否 | `'levelUp'` | 见结构定义及所属功能文档 |
| `分支10.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支10.choice` | 否 | `DndLevelChoice` | 见结构定义及所属功能文档 |
| `分支11.type` | 否 | `'prepareSpells'` | 见结构定义及所属功能文档 |
| `分支11.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支11.classId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支11.spells` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支11.cantrips` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支11.learn` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支12.type` | 否 | `'declare'` | 见结构定义及所属功能文档 |
| `分支12.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支12.source` | 否 | `DndHudRef` | 见结构定义及所属功能文档 |
| `分支12.targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支12.slot` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支12.slotType` | 是 | `'spell'&#124;'pact'` | 见结构定义及所属功能文档 |
| `分支12.classId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支12.note` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支13.type` | 否 | `'adjudicate'` | 见结构定义及所属功能文档 |
| `分支13.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支13.accept` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支13.result` | 是 | `DndAdjudicationResult` | 见结构定义及所属功能文档 |
| `分支14.type` | 否 | `'decision'` | 见结构定义及所属功能文档 |
| `分支14.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支14.choice` | 否 | `string &#124; null` | 见结构定义及所属功能文档 |
| `分支14.target` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支14.point` | 是 | `import('./scene-features').ScenePoint` | 见结构定义及所属功能文档 |
| `分支14.dice` | 是 | `number[]` | 见结构定义及所属功能文档 |
| `分支14.hitDice` | 是 | `number[]` | 见结构定义及所属功能文档 |
| `分支15.type` | 否 | `'finishAttack'` | 见结构定义及所属功能文档 |
| `分支15.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支16.type` | 否 | `'pauseDecision'` | 见结构定义及所属功能文档 |
| `分支16.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支17.type` | 否 | `'decisionTimeout'` | 见结构定义及所属功能文档 |
| `分支17.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支18.type` | 否 | `'check'` | 见结构定义及所属功能文档 |
| `分支18.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支18.ability` | 否 | `DndAbility` | 见结构定义及所属功能文档 |
| `分支18.skill` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支18.save` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支18.mode` | 否 | `DndRollMode` | 见结构定义及所属功能文档 |
| `分支18.dc` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支19.type` | 否 | `'start'` | 见结构定义及所属功能文档 |
| `分支19.actors` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支19.precombatEffects` | 是 | `'keep'&#124;'clear'` | 见结构定义及所属功能文档 |
| `分支20.type` | 否 | `'next'` | 见结构定义及所属功能文档 |
| `分支21.type` | 否 | `'end'` | 见结构定义及所属功能文档 |
| `分支22.type` | 否 | `'attack'` | 见结构定义及所属功能文档 |
| `分支22.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支22.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支22.attack` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支22.mode` | 否 | `DndRollMode` | 见结构定义及所属功能文档 |
| `分支22.approach` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支22.confirmDanger` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支23.type` | 否 | `'move'` | 见结构定义及所属功能文档 |
| `分支23.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支23.token` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支23.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支23.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支23.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支23.mode` | 是 | `import('./scene-environment').MovementChoice` | 见结构定义及所属功能文档 |
| `分支23.path` | 是 | `import('./movement-path').MovementPoint[]` | 见结构定义及所属功能文档 |
| `分支24.type` | 否 | `'cast'` | 见结构定义及所属功能文档 |
| `分支24.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支24.spell` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支24.classId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支24.slotType` | 是 | `'spell'&#124;'pact'` | 见结构定义及所属功能文档 |
| `分支24.targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支24.slot` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支24.effectTarget` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支24.points` | 是 | `import('./movement-path').MovementPoint[]` | 见结构定义及所属功能文档 |
| `分支24.rays` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支24.heightened` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支24.empower` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支24.removeCondition` | 是 | `DndCondition` | 见结构定义及所属功能文档 |
| `分支24.choices` | 是 | `Record<string,string>` | 见结构定义及所属功能文档 |
| `分支24.area` | 是 | `import('./movement-path').MovementPoint` | 见结构定义及所属功能文档 |
| `分支24.confirmFriendly` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支25.type` | 否 | `'action'` | 见结构定义及所属功能文档 |
| `分支25.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支25.action` | 否 | `'dash' &#124; 'disengage' &#124; 'dodge' &#124; 'stand' &#124; 'hide' &#124; 'search' &#124; 'endHide'` | 见结构定义及所属功能文档 |
| `分支26.type` | 否 | `'rest'` | 见结构定义及所属功能文档 |
| `分支26.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支26.rest` | 否 | `'short' &#124; 'long'` | 见结构定义及所属功能文档 |
| `分支26.hitDice` | 是 | `number[]` | 见结构定义及所属功能文档 |
| `分支27.type` | 否 | `'deathSave'` | 见结构定义及所属功能文档 |
| `分支27.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支28.type` | 否 | `'damage'` | 见结构定义及所属功能文档 |
| `分支28.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支28.amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支28.damageType` | 否 | `DndDamageType` | 见结构定义及所属功能文档 |
| `分支29.type` | 否 | `'heal'` | 见结构定义及所属功能文档 |
| `分支29.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支29.amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支29.temporary` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支30.type` | 否 | `'condition'` | 见结构定义及所属功能文档 |
| `分支30.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支30.condition` | 否 | `DndCondition` | 见结构定义及所属功能文档 |
| `分支30.add` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支30.source` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支31.type` | 否 | `'exhaustion'` | 见结构定义及所属功能文档 |
| `分支31.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支31.level` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支32.type` | 否 | `'status'` | 见结构定义及所属功能文档 |
| `分支32.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支32.status` | 否 | `DndExtraStatus` | 见结构定义及所属功能文档 |
| `分支32.add` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支33.type` | 否 | `'dropConcentration'` | 见结构定义及所属功能文档 |
| `分支33.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支34.type` | 否 | `'resource'` | 见结构定义及所属功能文档 |
| `分支34.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支34.resource` | 否 | `string` | 见结构定义及所属功能文档 |

## parseDndRest

导出接口 · 源码第 108 行。

```ts
export function parseDndRest(raw: unknown): DndRestRequest;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseDndCharacter

导出接口 · 源码第 109 行。

```ts
export function parseDndCharacter(raw: unknown): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseDndBattle

导出接口 · 源码第 137 行。

```ts
export function parseDndBattle(raw: unknown): DndBattle;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## projectDndBattle

导出接口 · 源码第 143 行。

```ts
export function projectDndBattle(b: DndBattle, visible: Set<string>, controlled?: ReadonlySet<string>): DndBattle|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `DndBattle` | — |
| `visible` | 否 | `Set<string>` | — |
| `controlled` | 是 | `ReadonlySet<string>` | visible |

## parseDndPending

导出接口 · 源码第 149 行。

```ts
export function parseDndPending(raw: unknown): DndPending;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseDndHudRef

导出接口 · 源码第 162 行。

```ts
export function parseDndHudRef(raw: unknown): DndHudRef;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
