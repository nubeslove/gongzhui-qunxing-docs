# game/packages/contracts/src/dnd.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseDndMagicDetection,parseDndItemAura,type DndMagicDetection,type DndItemAura} from './dnd-detection';
import {parseTokenSenses,type TokenSenses} from './scene-obscurity';
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

导出接口 · 源码第 6 行。

```ts
export const DND_ABILITIES = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;
```

## DndAbility

导出接口 · 源码第 7 行。

```ts
export type DndAbility = typeof DND_ABILITIES[number];
```

## DND_DAMAGE_TYPES

导出接口 · 源码第 8 行。

```ts
export const DND_DAMAGE_TYPES = ['acid', 'bludgeoning', 'cold', 'fire', 'force', 'lightning', 'necrotic', 'piercing', 'poison', 'psychic', 'radiant', 'slashing', 'thunder'] as const;
```

## DndDamageType

导出接口 · 源码第 9 行。

```ts
export type DndDamageType = typeof DND_DAMAGE_TYPES[number];
```

## DND_CONDITIONS

导出接口 · 源码第 10 行。

```ts
export const DND_CONDITIONS = ['blinded', 'charmed', 'deafened', 'frightened', 'grappled', 'incapacitated', 'invisible', 'paralyzed', 'petrified', 'poisoned', 'prone', 'restrained', 'stunned', 'unconscious'] as const;
```

## DndCondition

导出接口 · 源码第 11 行。

```ts
export type DndCondition = typeof DND_CONDITIONS[number];
```

## DndConditionState

导出接口 · 源码第 12 行。

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

导出接口 · 源码第 13 行。

```ts
export type DndExtraStatus = 'bloodied' | 'dead' | 'encumbered' | 'heavilyEncumbered' | 'overloaded';
```

## DndPool

导出接口 · 源码第 14 行。

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

导出接口 · 源码第 15 行。

```ts
export interface DndAttack {
    additional?: {
        formula: string;
        damageType: DndDamageType;
    }[];
    onHit?: {
        condition: DndCondition;
        maxSize?: number;
        expires?: 'source-start' | 'target-end';
        save?: {
            ability: DndAbility;
            dc: number;
        };
        except?: ('undead' | 'elf')[];
    };
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
| `additional` | 是 | `{formula:string;damageType:DndDamageType}[]` | 见结构定义及所属功能文档 |
| `additional.[].formula` | 否 | `string` | 见结构定义及所属功能文档 |
| `additional.[].damageType` | 否 | `DndDamageType` | 见结构定义及所属功能文档 |
| `onHit` | 是 | `{condition:DndCondition;maxSize?:number;expires?:'source-start'&#124;'target-end';save?:{ability:DndAbility;dc:number};except?:('undead'&#124;'elf')[]}` | 见结构定义及所属功能文档 |
| `onHit.condition` | 否 | `DndCondition` | 见结构定义及所属功能文档 |
| `onHit.maxSize` | 是 | `number` | 见结构定义及所属功能文档 |
| `onHit.expires` | 是 | `'source-start'&#124;'target-end'` | 见结构定义及所属功能文档 |
| `onHit.save` | 是 | `{ability:DndAbility;dc:number}` | 见结构定义及所属功能文档 |
| `onHit.save.ability` | 否 | `DndAbility` | 见结构定义及所属功能文档 |
| `onHit.save.dc` | 否 | `number` | 见结构定义及所属功能文档 |
| `onHit.except` | 是 | `('undead'&#124;'elf')[]` | 见结构定义及所属功能文档 |
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

导出接口 · 源码第 16 行。

```ts
export type DndAbilityMethod = 'pointBuy' | 'array' | 'manual';
```

## DndInventoryItem

导出接口 · 源码第 17 行。

```ts
export interface DndInventoryItem {
    aura?: DndItemAura;
    spellEffect?: DndActiveEffect;
    size?: number;
    lightCovered?: boolean;
    magic?: {
        equipped?: boolean;
        attuned?: boolean;
        used?: number;
        dawn?: number;
    };
    thrown?: {
        id: string;
        scene: string;
        x: number;
        y: number;
        z: number;
    }[];
    id: string;
    name: string;
    quantity: number;
    weight: number;
    notes: string;
    source?: string;
    componentSpells?: string[];
    valueGp?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `aura` | 是 | `DndItemAura` | 见结构定义及所属功能文档 |
| `spellEffect` | 是 | `DndActiveEffect` | 见结构定义及所属功能文档 |
| `size` | 是 | `number` | 见结构定义及所属功能文档 |
| `lightCovered` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `magic` | 是 | `{equipped?:boolean;attuned?:boolean;used?:number;dawn?:number}` | 见结构定义及所属功能文档 |
| `magic.equipped` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `magic.attuned` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `magic.used` | 是 | `number` | 见结构定义及所属功能文档 |
| `magic.dawn` | 是 | `number` | 见结构定义及所属功能文档 |
| `thrown` | 是 | `{id:string;scene:string;x:number;y:number;z:number}[]` | 见结构定义及所属功能文档 |
| `thrown.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `thrown.[].scene` | 否 | `string` | 见结构定义及所属功能文档 |
| `thrown.[].x` | 否 | `number` | 见结构定义及所属功能文档 |
| `thrown.[].y` | 否 | `number` | 见结构定义及所属功能文档 |
| `thrown.[].z` | 否 | `number` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `quantity` | 否 | `number` | 见结构定义及所属功能文档 |
| `weight` | 否 | `number` | 见结构定义及所属功能文档 |
| `notes` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 是 | `string` | 见结构定义及所属功能文档 |
| `componentSpells` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `valueGp` | 是 | `number` | 见结构定义及所属功能文档 |

## DndCasting

导出接口 · 源码第 20 行。

```ts
export interface DndCasting {
    elapsedSeconds?: number;
    spell: string;
    slot: number;
    slotType: 'spell' | 'pact';
    classId?: string;
    ritual: boolean;
    freeCast: boolean;
    remaining: number;
    round: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `elapsedSeconds` | 是 | `number` | 见结构定义及所属功能文档 |
| `spell` | 否 | `string` | 见结构定义及所属功能文档 |
| `slot` | 否 | `number` | 见结构定义及所属功能文档 |
| `slotType` | 否 | `'spell'&#124;'pact'` | 见结构定义及所属功能文档 |
| `classId` | 是 | `string` | 见结构定义及所属功能文档 |
| `ritual` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `freeCast` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `remaining` | 否 | `number` | 见结构定义及所属功能文档 |
| `round` | 否 | `number` | 见结构定义及所属功能文档 |

## DndReadied

导出接口 · 源码第 21 行。

```ts
export interface DndReadied {
    trigger: string;
    kind: 'attack' | 'spell' | 'move' | 'manual';
    id: string;
    round: number;
    scene: string;
    armed: boolean;
    slot?: number;
    slotType?: 'spell' | 'pact';
    classId?: string;
    freeCast?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `trigger` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'attack'&#124;'spell'&#124;'move'&#124;'manual'` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `round` | 否 | `number` | 见结构定义及所属功能文档 |
| `scene` | 否 | `string` | 见结构定义及所属功能文档 |
| `armed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `slot` | 是 | `number` | 见结构定义及所属功能文档 |
| `slotType` | 是 | `'spell'&#124;'pact'` | 见结构定义及所属功能文档 |
| `classId` | 是 | `string` | 见结构定义及所属功能文档 |
| `freeCast` | 是 | `boolean` | 见结构定义及所属功能文档 |

## DndWildShape

导出接口 · 源码第 22 行。

```ts
export interface DndWildShape {
    sizeOrder?: number;
    form: string;
    remainingSeconds: number;
    updatedAt: number;
    outsideCombat: boolean;
    original: DndCharacter;
    tokenSizes: Record<string, number>;
    senses: TokenSenses;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `sizeOrder` | 是 | `number` | 见结构定义及所属功能文档 |
| `form` | 否 | `string` | 见结构定义及所属功能文档 |
| `remainingSeconds` | 否 | `number` | 见结构定义及所属功能文档 |
| `updatedAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `outsideCombat` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `original` | 否 | `DndCharacter` | 见结构定义及所属功能文档 |
| `tokenSizes` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `senses` | 否 | `TokenSenses` | 见结构定义及所属功能文档 |

## DndCharacter

导出接口 · 源码第 23 行。

```ts
export interface DndCharacter {
    magicDetection?: DndMagicDetection;
    lastLightObject?: {
        id: string;
        name: string;
        covered: boolean;
        scene: string;
    };
    sizeState?: {
        base: number;
        current: number;
        order: number;
        tokens: Record<string, number>;
    };
    slowFall?: {
        scene: string;
        seconds: number;
    };
    aidHpBonus?: number;
    itemFocus?: {
        item: string;
        ending: boolean;
    };
    magicItemsSuppressed?: boolean;
    legendaryInLair?: boolean;
    legendaryUsed?: string[];
    wildCreatedSlots?: number[];
    wildShape?: DndWildShape;
    wildForms?: string[];
    wildReplacements?: number;
    casting?: DndCasting;
    heldWeapon?: string;
    gagged?: boolean;
    rite?: {
        remaining: number;
        round: number;
    };
    masteryReplacements?: number;
    masteryRangedReplacements?: number;
    airborne?: boolean;
    damageTaken?: number;
    hiding?: {
        total: number;
    };
    readied?: DndReadied;
    bloodiedOverride?: boolean;
    load?: 'encumbered' | 'heavilyEncumbered' | 'overloaded';
    effects?: DndActiveEffect[];
    auraPractice?: {
        source: string;
        day: number;
        days: number;
    }[];
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
    lineage?: {
        name: string;
        ability: DndAbility;
        cantrip?: string;
    };
    choices?: Record<string, string>;
    species?: string;
    background?: string;
    feats: string[];
    monster?: string;
    abilities: Record<DndAbility, number>;
    skills: Record<string, number>;
    saves: DndAbility[];
    skillBonuses?: Record<string, number>;
    saveBonuses?: Partial<Record<DndAbility, number>>;
    movementSpeeds?: Partial<Record<'fly' | 'swim' | 'climb' | 'burrow', number>>;
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
        atWill?: boolean;
        castLevel?: number;
        name?: string;
        freeCast?: {
            spell: string;
            resource: string;
        };
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
| `magicDetection` | 是 | `DndMagicDetection` | 见结构定义及所属功能文档 |
| `lastLightObject` | 是 | `{id:string;name:string;covered:boolean;scene:string}` | 见结构定义及所属功能文档 |
| `lastLightObject.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `lastLightObject.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `lastLightObject.covered` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `lastLightObject.scene` | 否 | `string` | 见结构定义及所属功能文档 |
| `sizeState` | 是 | `{base:number;current:number;order:number;tokens:Record<string,number>}` | 见结构定义及所属功能文档 |
| `sizeState.base` | 否 | `number` | 见结构定义及所属功能文档 |
| `sizeState.current` | 否 | `number` | 见结构定义及所属功能文档 |
| `sizeState.order` | 否 | `number` | 见结构定义及所属功能文档 |
| `sizeState.tokens` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `slowFall` | 是 | `{scene:string;seconds:number}` | 见结构定义及所属功能文档 |
| `slowFall.scene` | 否 | `string` | 见结构定义及所属功能文档 |
| `slowFall.seconds` | 否 | `number` | 见结构定义及所属功能文档 |
| `aidHpBonus` | 是 | `number` | 见结构定义及所属功能文档 |
| `itemFocus` | 是 | `{item:string;ending:boolean}` | 见结构定义及所属功能文档 |
| `itemFocus.item` | 否 | `string` | 见结构定义及所属功能文档 |
| `itemFocus.ending` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `magicItemsSuppressed` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `legendaryInLair` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `legendaryUsed` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `wildCreatedSlots` | 是 | `number[]` | 见结构定义及所属功能文档 |
| `wildShape` | 是 | `DndWildShape` | 见结构定义及所属功能文档 |
| `wildForms` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `wildReplacements` | 是 | `number` | 见结构定义及所属功能文档 |
| `casting` | 是 | `DndCasting` | 见结构定义及所属功能文档 |
| `heldWeapon` | 是 | `string` | 见结构定义及所属功能文档 |
| `gagged` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `rite` | 是 | `{remaining:number;round:number}` | 见结构定义及所属功能文档 |
| `rite.remaining` | 否 | `number` | 见结构定义及所属功能文档 |
| `rite.round` | 否 | `number` | 见结构定义及所属功能文档 |
| `masteryReplacements` | 是 | `number` | 见结构定义及所属功能文档 |
| `masteryRangedReplacements` | 是 | `number` | 见结构定义及所属功能文档 |
| `airborne` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `damageTaken` | 是 | `number` | 见结构定义及所属功能文档 |
| `hiding` | 是 | `{total:number}` | 见结构定义及所属功能文档 |
| `hiding.total` | 否 | `number` | 见结构定义及所属功能文档 |
| `readied` | 是 | `DndReadied` | 见结构定义及所属功能文档 |
| `bloodiedOverride` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `load` | 是 | `'encumbered'&#124;'heavilyEncumbered'&#124;'overloaded'` | 见结构定义及所属功能文档 |
| `effects` | 是 | `DndActiveEffect[]` | 见结构定义及所属功能文档 |
| `auraPractice` | 是 | `{source:string;day:number;days:number}[]` | 见结构定义及所属功能文档 |
| `auraPractice.[].source` | 否 | `string` | 见结构定义及所属功能文档 |
| `auraPractice.[].day` | 否 | `number` | 见结构定义及所属功能文档 |
| `auraPractice.[].days` | 否 | `number` | 见结构定义及所属功能文档 |
| `sorcery` | 是 | `DndSorceryState` | 见结构定义及所属功能文档 |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'pc' &#124; 'monster'` | 见结构定义及所属功能文档 |
| `side` | 否 | `'party' &#124; 'hostile' &#124; 'neutral'` | 见结构定义及所属功能文档 |
| `level` | 否 | `number` | 见结构定义及所属功能文档 |
| `classes` | 否 | `{ id: string; level: number; subclass?: string }[]` | 见结构定义及所属功能文档 |
| `classes.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `classes.[].level` | 否 | `number` | 见结构定义及所属功能文档 |
| `classes.[].subclass` | 是 | `string` | 见结构定义及所属功能文档 |
| `lineage` | 是 | `{name:string;ability:DndAbility;cantrip?:string}` | 见结构定义及所属功能文档 |
| `lineage.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `lineage.ability` | 否 | `DndAbility` | 见结构定义及所属功能文档 |
| `lineage.cantrip` | 是 | `string` | 见结构定义及所属功能文档 |
| `choices` | 是 | `Record<string,string>` | 见结构定义及所属功能文档 |
| `species` | 是 | `string` | 见结构定义及所属功能文档 |
| `background` | 是 | `string` | 见结构定义及所属功能文档 |
| `feats` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `monster` | 是 | `string` | 见结构定义及所属功能文档 |
| `abilities` | 否 | `Record<DndAbility, number>` | 见结构定义及所属功能文档 |
| `skills` | 否 | `Record<string, number>` | 见结构定义及所属功能文档 |
| `saves` | 否 | `DndAbility[]` | 见结构定义及所属功能文档 |
| `skillBonuses` | 是 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `saveBonuses` | 是 | `Partial<Record<DndAbility,number>>` | 见结构定义及所属功能文档 |
| `movementSpeeds` | 是 | `Partial<Record<'fly'&#124;'swim'&#124;'climb'&#124;'burrow',number>>` | 见结构定义及所属功能文档 |
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
| `spellSources` | 是 | `Record<string,{ability:DndAbility;spells:string[];atWill?:boolean;castLevel?:number;name?:string;freeCast?:{spell:string;resource:string}}>` | 见结构定义及所属功能文档 |
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

导出接口 · 源码第 50 行。

```ts
export interface DndTurn {
    jumpSpellUsed?: boolean;
    breathUsed?: boolean;
    hasteAttack?: boolean;
    lightThrown?: string[];
    legendaryMovement?: boolean;
    wildResurgeUsed?: boolean;
    interactionUsed?: boolean;
    lightWeapons?: string[];
    lightUsed?: boolean;
    loadingWeapons?: string[];
    speedAllowance?: number;
    hasteAction?: number;
    runUp?: number;
    bonusAttacks?: number;
    attackRolls?: number;
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
| `jumpSpellUsed` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `breathUsed` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `hasteAttack` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `lightThrown` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `legendaryMovement` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `wildResurgeUsed` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `interactionUsed` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `lightWeapons` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `lightUsed` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `loadingWeapons` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `speedAllowance` | 是 | `number` | 见结构定义及所属功能文档 |
| `hasteAction` | 是 | `number` | 见结构定义及所属功能文档 |
| `runUp` | 是 | `number` | 见结构定义及所属功能文档 |
| `bonusAttacks` | 是 | `number` | 见结构定义及所属功能文档 |
| `attackRolls` | 是 | `number` | 见结构定义及所属功能文档 |
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

## DndLegendaryWindow

导出接口 · 源码第 51 行。

```ts
export interface DndLegendaryWindow {
    after: string;
    remaining: string[];
    selected?: string;
    executing?: boolean;
    movement?: Pick<DndTurn, 'movement' | 'movementSpent' | 'speedAllowance' | 'dashCount' | 'runUp'>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `after` | 否 | `string` | 见结构定义及所属功能文档 |
| `remaining` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `selected` | 是 | `string` | 见结构定义及所属功能文档 |
| `executing` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `movement` | 是 | `Pick<DndTurn,'movement'&#124;'movementSpent'&#124;'speedAllowance'&#124;'dashCount'&#124;'runUp'>` | 见结构定义及所属功能文档 |

## DndBattle

导出接口 · 源码第 52 行。

```ts
export interface DndBattle {
    legendary?: DndLegendaryWindow;
    legendaryWaiting?: boolean;
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
| `legendary` | 是 | `DndLegendaryWindow` | 见结构定义及所属功能文档 |
| `legendaryWaiting` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `round` | 否 | `number` | 见结构定义及所属功能文档 |
| `turn` | 否 | `number` | 见结构定义及所属功能文档 |
| `order` | 否 | `DndTurn[]` | 见结构定义及所属功能文档 |
| `ended` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `hiddenTurn` | 是 | `boolean` | 见结构定义及所属功能文档 |

## DndRestRequest

导出接口 · 源码第 53 行。

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

导出接口 · 源码第 54 行。

```ts
export interface DndMovePlan {
    magicJump?: {
        paid: boolean;
    };
    readySpent?: number;
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
        light?: boolean;
        reckless?: boolean;
        sneakAttack?: boolean;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `magicJump` | 是 | `{paid:boolean}` | 见结构定义及所属功能文档 |
| `magicJump.paid` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `readySpent` | 是 | `number` | 见结构定义及所属功能文档 |
| `mode` | 是 | `import('./scene-environment').MovementChoice` | 见结构定义及所属功能文档 |
| `actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `token` | 否 | `string` | 见结构定义及所属功能文档 |
| `steps` | 否 | `{x:number;y:number;z:number;cost:number}[]` | 见结构定义及所属功能文档 |
| `steps.[].x` | 否 | `number` | 见结构定义及所属功能文档 |
| `steps.[].y` | 否 | `number` | 见结构定义及所属功能文档 |
| `steps.[].z` | 否 | `number` | 见结构定义及所属功能文档 |
| `steps.[].cost` | 否 | `number` | 见结构定义及所属功能文档 |
| `declined` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `afterAttack` | 是 | `{target:string;attack:string;mode:DndRollMode;light?:boolean;reckless?:boolean;sneakAttack?:boolean}` | 见结构定义及所属功能文档 |
| `afterAttack.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `afterAttack.attack` | 否 | `string` | 见结构定义及所属功能文档 |
| `afterAttack.mode` | 否 | `DndRollMode` | 见结构定义及所属功能文档 |
| `afterAttack.light` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `afterAttack.reckless` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `afterAttack.sneakAttack` | 是 | `boolean` | 见结构定义及所属功能文档 |

## DndPending

导出接口 · 源码第 55 行。

```ts
export interface DndPending {
    reactiveSpell?: {
        actor: string;
        target: string;
        options: {
            id: string;
            spell: string;
            label: string;
            variant: string;
        }[];
    };
    heroicDice?: {
        faces: number[];
        sides: number[];
        labels?: string[];
    };
    roll?: {
        actor: string;
        senderId: string;
        intent: DndIntent;
        prior?: DndPending;
        tape: number[];
        answers: (boolean | number)[];
        now: number;
    };
    hitRider?: boolean;
    gate: TimedDecision;
    magic?: DndMagicPending;
    followups?: DndMagicJob[];
    magicPrompt?: DndMagicPrompt;
    adjudication?: DndAdjudication;
    attack?: {
        weapon?: string;
        ability?: DndAbility;
        melee?: boolean;
        hitConfirmed?: boolean;
        smiteAsked?: boolean;
        missiles?: number;
        shieldOffered?: boolean;
        sneakAttack?: boolean;
        additional?: DndAttack['additional'];
        onHit?: DndAttack['onHit'];
        naturalCritical?: boolean;
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
        reactiveSpell?: boolean;
    };
    move?: DndMovePlan;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `reactiveSpell` | 是 | `{actor:string;target:string;options:{id:string;spell:string;label:string;variant:string}[]}` | 见结构定义及所属功能文档 |
| `reactiveSpell.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `reactiveSpell.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `reactiveSpell.options` | 否 | `{id:string;spell:string;label:string;variant:string}[]` | 见结构定义及所属功能文档 |
| `reactiveSpell.options.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `reactiveSpell.options.[].spell` | 否 | `string` | 见结构定义及所属功能文档 |
| `reactiveSpell.options.[].label` | 否 | `string` | 见结构定义及所属功能文档 |
| `reactiveSpell.options.[].variant` | 否 | `string` | 见结构定义及所属功能文档 |
| `heroicDice` | 是 | `{faces:number[];sides:number[];labels?:string[]}` | 见结构定义及所属功能文档 |
| `heroicDice.faces` | 否 | `number[]` | 见结构定义及所属功能文档 |
| `heroicDice.sides` | 否 | `number[]` | 见结构定义及所属功能文档 |
| `heroicDice.labels` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `roll` | 是 | `{actor:string;senderId:string;intent:DndIntent;prior?:DndPending;tape:number[];answers:(boolean&#124;number)[];now:number}` | 见结构定义及所属功能文档 |
| `roll.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `roll.senderId` | 否 | `string` | 见结构定义及所属功能文档 |
| `roll.intent` | 否 | `DndIntent` | 见结构定义及所属功能文档 |
| `roll.prior` | 是 | `DndPending` | 见结构定义及所属功能文档 |
| `roll.tape` | 否 | `number[]` | 见结构定义及所属功能文档 |
| `roll.answers` | 否 | `(boolean&#124;number)[]` | 见结构定义及所属功能文档 |
| `roll.now` | 否 | `number` | 见结构定义及所属功能文档 |
| `hitRider` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `gate` | 否 | `TimedDecision` | 见结构定义及所属功能文档 |
| `magic` | 是 | `DndMagicPending` | 见结构定义及所属功能文档 |
| `followups` | 是 | `DndMagicJob[]` | 见结构定义及所属功能文档 |
| `magicPrompt` | 是 | `DndMagicPrompt` | 见结构定义及所属功能文档 |
| `adjudication` | 是 | `DndAdjudication` | 见结构定义及所属功能文档 |
| `attack` | 是 | `{weapon?:string;ability?:DndAbility;melee?:boolean;hitConfirmed?:boolean;smiteAsked?:boolean;missiles?:number;shieldOffered?:boolean;sneakAttack?:boolean;additional?:DndAttack['additional'];onHit?:DndAttack['onHit'];naturalCritical?:boolean;source:string; target:string; label:string; total:number; natural:number; critical:boolean; damage:string; damageType:DndDamageType; cover:number; slot?:number;spell?:string;classId?:string; empower?:boolean; remaining?: {target:string;formula:string}[] }` | 见结构定义及所属功能文档 |
| `attack.weapon` | 是 | `string` | 见结构定义及所属功能文档 |
| `attack.ability` | 是 | `DndAbility` | 见结构定义及所属功能文档 |
| `attack.melee` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `attack.hitConfirmed` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `attack.smiteAsked` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `attack.missiles` | 是 | `number` | 见结构定义及所属功能文档 |
| `attack.shieldOffered` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `attack.sneakAttack` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `attack.additional` | 是 | `DndAttack['additional']` | 见结构定义及所属功能文档 |
| `attack.onHit` | 是 | `DndAttack['onHit']` | 见结构定义及所属功能文档 |
| `attack.naturalCritical` | 是 | `boolean` | 见结构定义及所属功能文档 |
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
| `opportunity` | 是 | `{source:string;target:string;attacks:string[];reactiveSpell?:boolean}` | 见结构定义及所属功能文档 |
| `opportunity.source` | 否 | `string` | 见结构定义及所属功能文档 |
| `opportunity.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `opportunity.attacks` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `opportunity.reactiveSpell` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `move` | 是 | `DndMovePlan` | 见结构定义及所属功能文档 |

## DndRollMode

导出接口 · 源码第 68 行。

```ts
export type DndRollMode = 'normal' | 'advantage' | 'disadvantage';
```

## DndHudRef

导出接口 · 源码第 70 行。

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

导出接口 · 源码第 71 行。

```ts
export interface DndAdjudication {
    ritual?: boolean;
    actor: string;
    source: DndHudRef;
    targets: string[];
    slot: number;
    freeCast?: boolean;
    slotType?: 'spell' | 'pact';
    classId?: string;
    note: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `ritual` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 否 | `DndHudRef` | 见结构定义及所属功能文档 |
| `targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `slot` | 否 | `number` | 见结构定义及所属功能文档 |
| `freeCast` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `slotType` | 是 | `'spell'&#124;'pact'` | 见结构定义及所属功能文档 |
| `classId` | 是 | `string` | 见结构定义及所属功能文档 |
| `note` | 否 | `string` | 见结构定义及所属功能文档 |

## DndAdjudicationResult

导出接口 · 源码第 72 行。

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

导出接口 · 源码第 73 行。

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

导出接口 · 源码第 74 行。

```ts
export type DndIntent = {
    type: 'ready';
    actor: string;
    trigger: string;
    kind: 'attack' | 'spell' | 'move' | 'manual';
    id: string;
    slot?: number;
    slotType?: 'spell' | 'pact';
    classId?: string;
    freeCast?: boolean;
} | {
    type: 'cancelReady';
    actor: string;
} | {
    type: 'releaseReadyMove';
    actor: string;
    point: import('./movement-path').MovementPoint;
    mode?: import('./scene-environment').MovementChoice;
} | {
    type: 'goodberry';
    actor: string;
    item: string;
    operation: 'eat' | 'give';
    target?: string;
    amount?: number;
} | {
    type: 'useItem';
    actor: string;
    item: string;
    target: string;
} | {
    type: 'feature';
    actor: string;
    feature: string;
    choice?: string;
    target?: string;
    targets?: string[];
    amount?: number;
    area?: {
        x: number;
        y: number;
        z: number;
    };
    confirmFriendly?: boolean;
} | {
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
    type: 'auraTargets';
    actor: string;
    targets: string[];
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
    ritual?: boolean;
    actor: string;
    source: DndHudRef;
    targets: string[];
    slot: number;
    freeCast?: boolean;
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
    spellChoice?: string;
    targets?: string[];
    slots?: number[];
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
    tool?: string;
    save?: boolean;
    mode: DndRollMode;
    dc?: number;
} | {
    type: 'start';
    actors: string[];
    precombatEffects?: 'keep' | 'clear';
} | {
    type: 'legendary';
    actor: string;
    option: string | null;
} | {
    type: 'next';
} | {
    type: 'end';
} | {
    type: 'attack';
    readied?: boolean;
    light?: boolean;
    reckless?: boolean;
    sneakAttack?: boolean;
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
    type: 'studyMagic';
    actor: string;
} | {
    type: 'coverLight';
    actor: string;
    target: string;
    item?: string;
    covered: boolean;
} | {
    type: 'cast';
    inventoryTarget?: string;
    light?: {
        item?: string;
        color: string;
    };
    hitDice?: number[];
    sourceItem?: string;
    readied?: boolean;
    ritual?: boolean;
    actor: string;
    spell: string;
    freeCast?: boolean;
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
| `分支1.type` | 否 | `'ready'` | 见结构定义及所属功能文档 |
| `分支1.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.trigger` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.kind` | 否 | `'attack'&#124;'spell'&#124;'move'&#124;'manual'` | 见结构定义及所属功能文档 |
| `分支1.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.slot` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支1.slotType` | 是 | `'spell'&#124;'pact'` | 见结构定义及所属功能文档 |
| `分支1.classId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支1.freeCast` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'cancelReady'` | 见结构定义及所属功能文档 |
| `分支2.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'releaseReadyMove'` | 见结构定义及所属功能文档 |
| `分支3.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.point` | 否 | `import('./movement-path').MovementPoint` | 见结构定义及所属功能文档 |
| `分支3.mode` | 是 | `import('./scene-environment').MovementChoice` | 见结构定义及所属功能文档 |
| `分支4.type` | 否 | `'goodberry'` | 见结构定义及所属功能文档 |
| `分支4.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.item` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.operation` | 否 | `'eat'&#124;'give'` | 见结构定义及所属功能文档 |
| `分支4.target` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支4.amount` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支5.type` | 否 | `'useItem'` | 见结构定义及所属功能文档 |
| `分支5.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.item` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.type` | 否 | `'feature'` | 见结构定义及所属功能文档 |
| `分支6.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.feature` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.choice` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支6.target` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支6.targets` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支6.amount` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支6.area` | 是 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `分支6.area.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支6.area.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支6.area.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支6.confirmFriendly` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支7.type` | 否 | `'sorcery'` | 见结构定义及所属功能文档 |
| `分支7.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.operation` | 否 | `'innate'&#124;'crown-recharge'&#124;'create-slot'&#124;'convert-slot'` | 见结构定义及所属功能文档 |
| `分支7.crown` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支7.slot` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支7.slotType` | 是 | `'spell'&#124;'pact'` | 见结构定义及所属功能文档 |
| `分支8.type` | 否 | `'effectTick'` | 见结构定义及所属功能文档 |
| `分支9.type` | 否 | `'wake'` | 见结构定义及所属功能文档 |
| `分支9.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支10.type` | 否 | `'escapeSpell'` | 见结构定义及所属功能文档 |
| `分支10.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支10.effect` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支11.type` | 否 | `'moveLights'` | 见结构定义及所属功能文档 |
| `分支11.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支11.effect` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支11.points` | 否 | `import('./movement-path').MovementPoint[]` | 见结构定义及所属功能文档 |
| `分支12.type` | 否 | `'auraTargets'` | 见结构定义及所属功能文档 |
| `分支12.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支12.targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支13.type` | 否 | `'moveZone'` | 见结构定义及所属功能文档 |
| `分支13.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支13.effect` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支13.point` | 否 | `import('./movement-path').MovementPoint` | 见结构定义及所属功能文档 |
| `分支13.confirmFriendly` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支14.type` | 否 | `'requestRest'` | 见结构定义及所属功能文档 |
| `分支14.rest` | 否 | `'short'&#124;'long'` | 见结构定义及所属功能文档 |
| `分支15.type` | 否 | `'voteRest'` | 见结构定义及所属功能文档 |
| `分支15.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支15.vote` | 否 | `'yes'&#124;'no'` | 见结构定义及所属功能文档 |
| `分支15.hitDice` | 是 | `Record<string,number[]>` | 见结构定义及所属功能文档 |
| `分支16.type` | 否 | `'resolveRest'` | 见结构定义及所属功能文档 |
| `分支16.id` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支16.rest` | 否 | `'short'&#124;'long'` | 见结构定义及所属功能文档 |
| `分支16.accept` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支17.type` | 否 | `'levelUp'` | 见结构定义及所属功能文档 |
| `分支17.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支17.choice` | 否 | `DndLevelChoice` | 见结构定义及所属功能文档 |
| `分支18.type` | 否 | `'prepareSpells'` | 见结构定义及所属功能文档 |
| `分支18.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支18.classId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支18.spells` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支18.cantrips` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支18.learn` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支19.type` | 否 | `'declare'` | 见结构定义及所属功能文档 |
| `分支19.ritual` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支19.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支19.source` | 否 | `DndHudRef` | 见结构定义及所属功能文档 |
| `分支19.targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支19.slot` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支19.freeCast` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支19.slotType` | 是 | `'spell'&#124;'pact'` | 见结构定义及所属功能文档 |
| `分支19.classId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支19.note` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支20.type` | 否 | `'adjudicate'` | 见结构定义及所属功能文档 |
| `分支20.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支20.accept` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支20.result` | 是 | `DndAdjudicationResult` | 见结构定义及所属功能文档 |
| `分支21.type` | 否 | `'decision'` | 见结构定义及所属功能文档 |
| `分支21.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支21.choice` | 否 | `string &#124; null` | 见结构定义及所属功能文档 |
| `分支21.spellChoice` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支21.targets` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支21.slots` | 是 | `number[]` | 见结构定义及所属功能文档 |
| `分支21.target` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支21.point` | 是 | `import('./scene-features').ScenePoint` | 见结构定义及所属功能文档 |
| `分支21.dice` | 是 | `number[]` | 见结构定义及所属功能文档 |
| `分支21.hitDice` | 是 | `number[]` | 见结构定义及所属功能文档 |
| `分支22.type` | 否 | `'finishAttack'` | 见结构定义及所属功能文档 |
| `分支22.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支23.type` | 否 | `'pauseDecision'` | 见结构定义及所属功能文档 |
| `分支23.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支24.type` | 否 | `'decisionTimeout'` | 见结构定义及所属功能文档 |
| `分支24.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支25.type` | 否 | `'check'` | 见结构定义及所属功能文档 |
| `分支25.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支25.ability` | 否 | `DndAbility` | 见结构定义及所属功能文档 |
| `分支25.skill` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支25.tool` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支25.save` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支25.mode` | 否 | `DndRollMode` | 见结构定义及所属功能文档 |
| `分支25.dc` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支26.type` | 否 | `'start'` | 见结构定义及所属功能文档 |
| `分支26.actors` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支26.precombatEffects` | 是 | `'keep'&#124;'clear'` | 见结构定义及所属功能文档 |
| `分支27.type` | 否 | `'legendary'` | 见结构定义及所属功能文档 |
| `分支27.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支27.option` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `分支28.type` | 否 | `'next'` | 见结构定义及所属功能文档 |
| `分支29.type` | 否 | `'end'` | 见结构定义及所属功能文档 |
| `分支30.type` | 否 | `'attack'` | 见结构定义及所属功能文档 |
| `分支30.readied` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支30.light` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支30.reckless` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支30.sneakAttack` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支30.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支30.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支30.attack` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支30.mode` | 否 | `DndRollMode` | 见结构定义及所属功能文档 |
| `分支30.approach` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支30.confirmDanger` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支31.type` | 否 | `'move'` | 见结构定义及所属功能文档 |
| `分支31.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支31.token` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支31.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支31.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支31.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支31.mode` | 是 | `import('./scene-environment').MovementChoice` | 见结构定义及所属功能文档 |
| `分支31.path` | 是 | `import('./movement-path').MovementPoint[]` | 见结构定义及所属功能文档 |
| `分支32.type` | 否 | `'studyMagic'` | 见结构定义及所属功能文档 |
| `分支32.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支33.type` | 否 | `'coverLight'` | 见结构定义及所属功能文档 |
| `分支33.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支33.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支33.item` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支33.covered` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支34.type` | 否 | `'cast'` | 见结构定义及所属功能文档 |
| `分支34.inventoryTarget` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支34.light` | 是 | `{item?:string;color:string}` | 见结构定义及所属功能文档 |
| `分支34.light.item` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支34.light.color` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支34.hitDice` | 是 | `number[]` | 见结构定义及所属功能文档 |
| `分支34.sourceItem` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支34.readied` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支34.ritual` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支34.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支34.spell` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支34.freeCast` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支34.classId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支34.slotType` | 是 | `'spell'&#124;'pact'` | 见结构定义及所属功能文档 |
| `分支34.targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支34.slot` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支34.effectTarget` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支34.points` | 是 | `import('./movement-path').MovementPoint[]` | 见结构定义及所属功能文档 |
| `分支34.rays` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支34.heightened` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支34.empower` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支34.removeCondition` | 是 | `DndCondition` | 见结构定义及所属功能文档 |
| `分支34.choices` | 是 | `Record<string,string>` | 见结构定义及所属功能文档 |
| `分支34.area` | 是 | `import('./movement-path').MovementPoint` | 见结构定义及所属功能文档 |
| `分支34.confirmFriendly` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支35.type` | 否 | `'action'` | 见结构定义及所属功能文档 |
| `分支35.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支35.action` | 否 | `'dash' &#124; 'disengage' &#124; 'dodge' &#124; 'stand' &#124; 'hide' &#124; 'search' &#124; 'endHide'` | 见结构定义及所属功能文档 |
| `分支36.type` | 否 | `'rest'` | 见结构定义及所属功能文档 |
| `分支36.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支36.rest` | 否 | `'short' &#124; 'long'` | 见结构定义及所属功能文档 |
| `分支36.hitDice` | 是 | `number[]` | 见结构定义及所属功能文档 |
| `分支37.type` | 否 | `'deathSave'` | 见结构定义及所属功能文档 |
| `分支37.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支38.type` | 否 | `'damage'` | 见结构定义及所属功能文档 |
| `分支38.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支38.amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支38.damageType` | 否 | `DndDamageType` | 见结构定义及所属功能文档 |
| `分支39.type` | 否 | `'heal'` | 见结构定义及所属功能文档 |
| `分支39.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支39.amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支39.temporary` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支40.type` | 否 | `'condition'` | 见结构定义及所属功能文档 |
| `分支40.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支40.condition` | 否 | `DndCondition` | 见结构定义及所属功能文档 |
| `分支40.add` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支40.source` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支41.type` | 否 | `'exhaustion'` | 见结构定义及所属功能文档 |
| `分支41.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支41.level` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支42.type` | 否 | `'status'` | 见结构定义及所属功能文档 |
| `分支42.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支42.status` | 否 | `DndExtraStatus` | 见结构定义及所属功能文档 |
| `分支42.add` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支43.type` | 否 | `'dropConcentration'` | 见结构定义及所属功能文档 |
| `分支43.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支44.type` | 否 | `'resource'` | 见结构定义及所属功能文档 |
| `分支44.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支44.resource` | 否 | `string` | 见结构定义及所属功能文档 |

## parseDndRest

导出接口 · 源码第 130 行。

```ts
export function parseDndRest(raw: unknown): DndRestRequest;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseDndCharacter

导出接口 · 源码第 132 行。

```ts
export function parseDndCharacter(raw: unknown): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseDndBattle

导出接口 · 源码第 164 行。

```ts
export function parseDndBattle(raw: unknown): DndBattle;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## projectDndBattle

导出接口 · 源码第 170 行。

```ts
export function projectDndBattle(b: DndBattle, visible: Set<string>, controlled?: ReadonlySet<string>): DndBattle|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `DndBattle` | — |
| `visible` | 否 | `Set<string>` | — |
| `controlled` | 是 | `ReadonlySet<string>` | visible |

## parseDndPending

导出接口 · 源码第 176 行。

```ts
export function parseDndPending(raw: unknown): DndPending;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseDndHudRef

导出接口 · 源码第 193 行。

```ts
export function parseDndHudRef(raw: unknown): DndHudRef;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
