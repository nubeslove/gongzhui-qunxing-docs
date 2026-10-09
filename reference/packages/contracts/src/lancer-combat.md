# game/packages/contracts/src/lancer-combat.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseCombatRoll,parseCombatStep,type CombatRollDetail,type CombatStep} from './combat-journal';
import {parseLancerAutomation,type LancerCustomSystemAutomation} from './lancer-custom';
import {parseLancerSceneEffect,type LancerSceneEffect} from './lancer-scene';
```
</details>

## LancerLeadershipPurpose

导出接口 · 源码第 6 行。

```ts
export type LancerLeadershipPurpose = keyof typeof LANCER_LEADERSHIP_PURPOSES;
```

## LancerSide

导出接口 · 源码第 7 行。

```ts
export type LancerSide = 'players' | 'hostiles';
```

## LancerDamageType

导出接口 · 源码第 8 行。

```ts
export type LancerDamageType = 'kinetic' | 'energy' | 'explosive' | 'burn' | 'heat';
```

## LANCER_CONDITIONS

导出接口 · 源码第 9 行。

```ts
export const LANCER_CONDITIONS = ['impaired', 'slowed', 'immobilized', 'stunned', 'jammed', 'exposed', 'prone', 'hidden', 'invisible', 'shutdown', 'lockon', 'shredded', 'engaged', 'shortsighted', 'swarmed', 'reactionless', 'life-support', 'tech-disabled', 'cockpit-jammed', 'bolstered'] as const;
```

## LancerCondition

导出接口 · 源码第 10 行。

```ts
export type LancerCondition = typeof LANCER_CONDITIONS[number];
```

## LancerDeploymentZone

导出接口 · 源码第 12 行。

```ts
export interface LancerDeploymentZone {
    id: string;
    name: string;
    x: number;
    y: number;
    z: number;
    width: number;
    depth: number;
    side: LancerSide;
    ownerId: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 否 | `number` | 见结构定义及所属功能文档 |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `depth` | 否 | `number` | 见结构定义及所属功能文档 |
| `side` | 否 | `LancerSide` | 见结构定义及所属功能文档 |
| `ownerId` | 否 | `string` | 见结构定义及所属功能文档 |

## LancerArea

导出接口 · 源码第 13 行。

```ts
export interface LancerArea {
    kind: 'blast' | 'burst' | 'line' | 'cone';
    size: number;
    x: number;
    y: number;
    z: number;
    direction: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'blast'&#124;'burst'&#124;'line'&#124;'cone'` | 见结构定义及所属功能文档 |
| `size` | 否 | `number` | 见结构定义及所属功能文档 |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 否 | `number` | 见结构定义及所属功能文档 |
| `direction` | 否 | `number` | 见结构定义及所属功能文档 |

## LancerDamagePool

导出接口 · 源码第 14 行。

```ts
export interface LancerDamagePool {
    dice: number[];
    sides: number;
    bonus: number;
    heat: number;
    extra?: number[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `dice` | 否 | `number[]` | 见结构定义及所属功能文档 |
| `sides` | 否 | `number` | 见结构定义及所属功能文档 |
| `bonus` | 否 | `number` | 见结构定义及所属功能文档 |
| `heat` | 否 | `number` | 见结构定义及所属功能文档 |
| `extra` | 是 | `number[]` | 见结构定义及所属功能文档 |

## LancerSalvo

导出接口 · 源码第 15 行。

```ts
export interface LancerSalvo {
    techHeated?: boolean;
    roland?: boolean;
    id: string;
    unit: string;
    weapon: string;
    talents?: string[];
    area?: LancerArea;
    pattern?: 'selected' | 'arc' | 'annihilator';
    targets: string[];
    spent: boolean;
    planned?: boolean;
    hit?: boolean;
    damage?: LancerDamagePool[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `techHeated` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `roland` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `weapon` | 否 | `string` | 见结构定义及所属功能文档 |
| `talents` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `area` | 是 | `LancerArea` | 见结构定义及所属功能文档 |
| `pattern` | 是 | `'selected'&#124;'arc'&#124;'annihilator'` | 见结构定义及所属功能文档 |
| `targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `spent` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `planned` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `hit` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `damage` | 是 | `LancerDamagePool[]` | 见结构定义及所属功能文档 |

## LancerEffect

导出接口 · 源码第 16 行。

```ts
export interface LancerEffect {
    clock?: 'target';
    amount?: number;
    id: string;
    owner: string;
    target?: string;
    key: 'smoke' | 'projected-shield' | 'soft-cover' | 'resistance' | 'thinking' | 'combined-melee' | 'combined-ranged' | 'plasma' | 'duelist-feint' | 'duelist-trip' | 'supersonic' | 'tech-shrike' | 'tech-mirage' | 'tech-stalk' | 'tech-terrify' | 'tech-banish' | 'tech-prometheus' | 'tech-excommunicate' | 'tech-logic' | 'ejected-cores';
    until: number;
    at: 'start' | 'end';
    area?: LancerArea;
    source?: string;
    cells?: {
        x: number;
        y: number;
        z: number;
    }[];
    seen?: {
        unit: string;
        round: number;
    }[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `clock` | 是 | `'target'` | 见结构定义及所属功能文档 |
| `amount` | 是 | `number` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `owner` | 否 | `string` | 见结构定义及所属功能文档 |
| `target` | 是 | `string` | 见结构定义及所属功能文档 |
| `key` | 否 | `'smoke'&#124;'projected-shield'&#124;'soft-cover'&#124;'resistance'&#124;'thinking'&#124;'combined-melee'&#124;'combined-ranged'&#124;'plasma'&#124;'duelist-feint'&#124;'duelist-trip'&#124;'supersonic'&#124;'tech-shrike'&#124;'tech-mirage'&#124;'tech-stalk'&#124;'tech-terrify'&#124;'tech-banish'&#124;'tech-prometheus'&#124;'tech-excommunicate'&#124;'tech-logic'&#124;'ejected-cores'` | 见结构定义及所属功能文档 |
| `until` | 否 | `number` | 见结构定义及所属功能文档 |
| `at` | 否 | `'start'&#124;'end'` | 见结构定义及所属功能文档 |
| `area` | 是 | `LancerArea` | 见结构定义及所属功能文档 |
| `source` | 是 | `string` | 见结构定义及所属功能文档 |
| `cells` | 是 | `{x:number;y:number;z:number}[]` | 见结构定义及所属功能文档 |
| `cells.[].x` | 否 | `number` | 见结构定义及所属功能文档 |
| `cells.[].y` | 否 | `number` | 见结构定义及所属功能文档 |
| `cells.[].z` | 否 | `number` | 见结构定义及所属功能文档 |
| `seen` | 是 | `{unit:string;round:number}[]` | 见结构定义及所属功能文档 |
| `seen.[].unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `seen.[].round` | 否 | `number` | 见结构定义及所属功能文档 |

## LancerCombatWeapon

导出接口 · 源码第 17 行。

```ts
export interface LancerCombatWeapon {
    id: string;
    name: string;
    mount: number;
    size: 'auxiliary' | 'main' | 'heavy' | 'superheavy';
    range: number;
    threat: number;
    damage: string;
    type: LancerDamageType;
    tags: string[];
    accuracy: number;
    selfHeat: number;
    reliable: number;
    limited: number;
    used: number;
    loaded: boolean;
    destroyed: boolean;
    damageParts?: {
        damage: string;
        type: LancerDamageType;
    }[];
    area?: {
        kind: LancerArea['kind'];
        size: number;
    };
    resourceId?: string;
    weaponType?: string;
    attackBonus?: number;
    knockback?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `mount` | 否 | `number` | 见结构定义及所属功能文档 |
| `size` | 否 | `'auxiliary'&#124;'main'&#124;'heavy'&#124;'superheavy'` | 见结构定义及所属功能文档 |
| `range` | 否 | `number` | 见结构定义及所属功能文档 |
| `threat` | 否 | `number` | 见结构定义及所属功能文档 |
| `damage` | 否 | `string` | 见结构定义及所属功能文档 |
| `type` | 否 | `LancerDamageType` | 见结构定义及所属功能文档 |
| `tags` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `accuracy` | 否 | `number` | 见结构定义及所属功能文档 |
| `selfHeat` | 否 | `number` | 见结构定义及所属功能文档 |
| `reliable` | 否 | `number` | 见结构定义及所属功能文档 |
| `limited` | 否 | `number` | 见结构定义及所属功能文档 |
| `used` | 否 | `number` | 见结构定义及所属功能文档 |
| `loaded` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `destroyed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `damageParts` | 是 | `{damage:string;type:LancerDamageType}[]` | 见结构定义及所属功能文档 |
| `damageParts.[].damage` | 否 | `string` | 见结构定义及所属功能文档 |
| `damageParts.[].type` | 否 | `LancerDamageType` | 见结构定义及所属功能文档 |
| `area` | 是 | `{kind:LancerArea['kind'];size:number}` | 见结构定义及所属功能文档 |
| `area.kind` | 否 | `LancerArea['kind']` | 见结构定义及所属功能文档 |
| `area.size` | 否 | `number` | 见结构定义及所属功能文档 |
| `resourceId` | 是 | `string` | 见结构定义及所属功能文档 |
| `weaponType` | 是 | `string` | 见结构定义及所属功能文档 |
| `attackBonus` | 是 | `number` | 见结构定义及所属功能文档 |
| `knockback` | 是 | `number` | 见结构定义及所属功能文档 |

## LancerCombatSystem

导出接口 · 源码第 23 行。

```ts
export interface LancerCombatSystem {
    automation?: LancerCustomSystemAutomation;
    id: string;
    name: string;
    limited: number;
    used: number;
    destroyed: boolean;
    resourceId?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `automation` | 是 | `LancerCustomSystemAutomation` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `limited` | 否 | `number` | 见结构定义及所属功能文档 |
| `used` | 否 | `number` | 见结构定义及所属功能文档 |
| `destroyed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `resourceId` | 是 | `string` | 见结构定义及所属功能文档 |

## LancerPilotGear

导出接口 · 源码第 24 行。

```ts
export interface LancerPilotGear {
    id: string;
    resource: string;
    used: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `resource` | 否 | `string` | 见结构定义及所属功能文档 |
| `used` | 否 | `number` | 见结构定义及所属功能文档 |

## LancerPilotProfile

导出接口 · 源码第 25 行。

```ts
export interface LancerPilotProfile {
    gear?: LancerPilotGear[];
    triggers?: {
        name: string;
        bonus: number;
    }[];
    suit?: 'none' | 'light' | 'assault' | 'heavy' | 'mobility' | 'stealth';
    name: string;
    grit: number;
    hp: number;
    maxHp: number;
    armor: number;
    evasion: number;
    edef: number;
    speed: number;
    unconscious: boolean;
    dead: boolean;
    burn: number;
    conditions: LancerTimedCondition[];
    weapons: LancerCombatWeapon[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `gear` | 是 | `LancerPilotGear[]` | 见结构定义及所属功能文档 |
| `triggers` | 是 | `{name:string;bonus:number}[]` | 见结构定义及所属功能文档 |
| `triggers.[].name` | 否 | `string` | 见结构定义及所属功能文档 |
| `triggers.[].bonus` | 否 | `number` | 见结构定义及所属功能文档 |
| `suit` | 是 | `'none'&#124;'light'&#124;'assault'&#124;'heavy'&#124;'mobility'&#124;'stealth'` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `grit` | 否 | `number` | 见结构定义及所属功能文档 |
| `hp` | 否 | `number` | 见结构定义及所属功能文档 |
| `maxHp` | 否 | `number` | 见结构定义及所属功能文档 |
| `armor` | 否 | `number` | 见结构定义及所属功能文档 |
| `evasion` | 否 | `number` | 见结构定义及所属功能文档 |
| `edef` | 否 | `number` | 见结构定义及所属功能文档 |
| `speed` | 否 | `number` | 见结构定义及所属功能文档 |
| `unconscious` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `dead` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `burn` | 否 | `number` | 见结构定义及所属功能文档 |
| `conditions` | 否 | `LancerTimedCondition[]` | 见结构定义及所属功能文档 |
| `weapons` | 否 | `LancerCombatWeapon[]` | 见结构定义及所属功能文档 |

## LancerTimedCondition

导出接口 · 源码第 31 行。

```ts
export interface LancerTimedCondition {
    origin?: 'tech';
    id: LancerCondition;
    until: number | null;
    source: string;
    expireOwner?: string;
    untilTurn?: number;
    expireAt?: 'start' | 'end';
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `origin` | 是 | `'tech'` | 见结构定义及所属功能文档 |
| `id` | 否 | `LancerCondition` | 见结构定义及所属功能文档 |
| `until` | 否 | `number&#124;null` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |
| `expireOwner` | 是 | `string` | 见结构定义及所属功能文档 |
| `untilTurn` | 是 | `number` | 见结构定义及所属功能文档 |
| `expireAt` | 是 | `'start'&#124;'end'` | 见结构定义及所属功能文档 |

## LancerNpc

导出接口 · 源码第 32 行。

```ts
export interface LancerNpc {
    classId: string;
    tier: 1 | 2 | 3;
    template: 'standard' | 'elite' | 'grunt';
    options: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `classId` | 否 | `string` | 见结构定义及所属功能文档 |
| `tier` | 否 | `1&#124;2&#124;3` | 见结构定义及所属功能文档 |
| `template` | 否 | `'standard'&#124;'elite'&#124;'grunt'` | 见结构定义及所属功能文档 |
| `options` | 否 | `string[]` | 见结构定义及所属功能文档 |

## LancerReadyReference

导出接口 · 源码第 33 行。

```ts
export interface LancerReadyReference {
    kind: 'attack' | 'action' | 'tech' | 'system' | 'pilot' | 'pilotGear' | 'ability' | 'npcAction' | 'weaponMode';
    id: string;
    mode?: string;
    profile?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'attack'&#124;'action'&#124;'tech'&#124;'system'&#124;'pilot'&#124;'pilotGear'&#124;'ability'&#124;'npcAction'&#124;'weaponMode'` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `mode` | 是 | `string` | 见结构定义及所属功能文档 |
| `profile` | 是 | `string` | 见结构定义及所属功能文档 |

## LancerReady

导出接口 · 源码第 34 行。

```ts
export interface LancerReady {
    ref: LancerReadyReference;
    event: 'move' | 'action' | 'reaction';
    side: 'ally' | 'enemy' | 'any';
    subject?: string;
    within: number;
    label: string;
    key: string;
    expires: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `ref` | 否 | `LancerReadyReference` | 见结构定义及所属功能文档 |
| `event` | 否 | `'move'&#124;'action'&#124;'reaction'` | 见结构定义及所属功能文档 |
| `side` | 否 | `'ally'&#124;'enemy'&#124;'any'` | 见结构定义及所属功能文档 |
| `subject` | 是 | `string` | 见结构定义及所属功能文档 |
| `within` | 否 | `number` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `key` | 否 | `string` | 见结构定义及所属功能文档 |
| `expires` | 否 | `number` | 见结构定义及所属功能文档 |

## LancerTurnBudget

导出接口 · 源码第 35 行。

```ts
export interface LancerTurnBudget {
    quick: number;
    freeQuick: number;
    movement: number;
    actions: string[];
    reactionTurn: number;
    reactions: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `quick` | 否 | `number` | 见结构定义及所属功能文档 |
| `freeQuick` | 否 | `number` | 见结构定义及所属功能文档 |
| `movement` | 否 | `number` | 见结构定义及所属功能文档 |
| `actions` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `reactionTurn` | 否 | `number` | 见结构定义及所属功能文档 |
| `reactions` | 否 | `string[]` | 见结构定义及所属功能文档 |

## LancerAI

导出接口 · 源码第 36 行。

```ts
export interface LancerAI {
    system: string;
    mode: 'pilot' | 'ai' | 'cascade';
    readyAt: number;
    talents: string[];
    pilotTurn?: LancerTurnBudget;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `system` | 否 | `string` | 见结构定义及所属功能文档 |
| `mode` | 否 | `'pilot'&#124;'ai'&#124;'cascade'` | 见结构定义及所属功能文档 |
| `readyAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `talents` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `pilotTurn` | 是 | `LancerTurnBudget` | 见结构定义及所属功能文档 |

## LancerNhp

导出接口 · 源码第 37 行。

```ts
export interface LancerNhp {
    proxy?: boolean;
    retired?: boolean;
    active: 'mech' | 'subaltern' | 'casket';
    stress: number;
    capacity: number;
    burdens: string[];
    abilities: string[];
    cascade: boolean;
    unshackled: boolean;
    gmUntil: number;
    casketHp: number;
    subalternHp: number;
    subalternDestroyed: boolean;
    subaltern?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `proxy` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `retired` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `active` | 否 | `'mech'&#124;'subaltern'&#124;'casket'` | 见结构定义及所属功能文档 |
| `stress` | 否 | `number` | 见结构定义及所属功能文档 |
| `capacity` | 否 | `number` | 见结构定义及所属功能文档 |
| `burdens` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `abilities` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `cascade` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `unshackled` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `gmUntil` | 否 | `number` | 见结构定义及所属功能文档 |
| `casketHp` | 否 | `number` | 见结构定义及所属功能文档 |
| `subalternHp` | 否 | `number` | 见结构定义及所属功能文档 |
| `subalternDestroyed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `subaltern` | 是 | `string` | 见结构定义及所属功能文档 |

## LancerCombatUnit

导出接口 · 源码第 38 行。

```ts
export interface LancerCombatUnit {
    ai?: LancerAI;
    nhp?: LancerNhp;
    readied?: LancerReady;
    riding?: LancerRide;
    pilot?: {
        mech: string;
        independent?: boolean;
        body?: 'subaltern' | 'casket';
    };
    crew?: {
        profile: LancerPilotProfile;
        outside?: string;
        ejected: boolean;
    };
    leadership?: {
        source: string;
        order: string;
        inspiring: boolean;
        purpose?: LancerLeadershipPurpose;
    };
    npc?: LancerNpc;
    id: string;
    actorId: string;
    ownerId: string;
    name: string;
    side: LancerSide;
    deployed: boolean;
    destroyed: boolean;
    hp: number;
    maxHp: number;
    heat: number;
    heatCap: number;
    structure: number;
    maxStructure: number;
    stress: number;
    maxStress: number;
    armor: number;
    evasion: number;
    edef: number;
    speed: number;
    sensors: number;
    save: number;
    attack: number;
    tech: number;
    hull: number;
    agility: number;
    systems: number;
    engineering: number;
    repair: number;
    overshield: number;
    burn: number;
    cp: number;
    overcharge: number;
    movement: number;
    quick: number;
    freeQuick: number;
    actions: string[];
    reactionTurn: number;
    reactions: string[];
    turns: number;
    braceUntil: number;
    meltdown: number | null;
    resistances: LancerDamageType[];
    conditions: LancerTimedCondition[];
    weapons: LancerCombatWeapon[];
    equipment: LancerCombatSystem[];
    features?: string[];
    counters?: Record<string, number>;
    phasedUntil?: number;
    flight?: {
        source: string;
        mode: 'fly' | 'hover';
        heading?: {
            x: number;
            y: number;
            z: number;
        };
        segment: number;
    };
    fallFrom?: number;
    entity?: {
        kind: 'drone' | 'cover' | 'mine' | 'scenery';
        owner: string;
        system: string;
        mode: string;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `ai` | 是 | `LancerAI` | 见结构定义及所属功能文档 |
| `nhp` | 是 | `LancerNhp` | 见结构定义及所属功能文档 |
| `readied` | 是 | `LancerReady` | 见结构定义及所属功能文档 |
| `riding` | 是 | `LancerRide` | 见结构定义及所属功能文档 |
| `pilot` | 是 | `{mech:string;independent?:boolean;body?:'subaltern'&#124;'casket'}` | Only the active body receives an activation; the parked mech remains a target. |
| `pilot.mech` | 否 | `string` | 见结构定义及所属功能文档 |
| `pilot.independent` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `pilot.body` | 是 | `'subaltern'&#124;'casket'` | 见结构定义及所属功能文档 |
| `crew` | 是 | `{profile:LancerPilotProfile;outside?:string;ejected:boolean}` | 见结构定义及所属功能文档 |
| `crew.profile` | 否 | `LancerPilotProfile` | 见结构定义及所属功能文档 |
| `crew.outside` | 是 | `string` | 见结构定义及所属功能文档 |
| `crew.ejected` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `leadership` | 是 | `{source:string;order:string;inspiring:boolean;purpose?:LancerLeadershipPurpose}` | 见结构定义及所属功能文档 |
| `leadership.source` | 否 | `string` | 见结构定义及所属功能文档 |
| `leadership.order` | 否 | `string` | 见结构定义及所属功能文档 |
| `leadership.inspiring` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `leadership.purpose` | 是 | `LancerLeadershipPurpose` | 见结构定义及所属功能文档 |
| `npc` | 是 | `LancerNpc` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `ownerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `side` | 否 | `LancerSide` | 见结构定义及所属功能文档 |
| `deployed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `destroyed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `hp` | 否 | `number` | 见结构定义及所属功能文档 |
| `maxHp` | 否 | `number` | 见结构定义及所属功能文档 |
| `heat` | 否 | `number` | 见结构定义及所属功能文档 |
| `heatCap` | 否 | `number` | 见结构定义及所属功能文档 |
| `structure` | 否 | `number` | 见结构定义及所属功能文档 |
| `maxStructure` | 否 | `number` | 见结构定义及所属功能文档 |
| `stress` | 否 | `number` | 见结构定义及所属功能文档 |
| `maxStress` | 否 | `number` | 见结构定义及所属功能文档 |
| `armor` | 否 | `number` | 见结构定义及所属功能文档 |
| `evasion` | 否 | `number` | 见结构定义及所属功能文档 |
| `edef` | 否 | `number` | 见结构定义及所属功能文档 |
| `speed` | 否 | `number` | 见结构定义及所属功能文档 |
| `sensors` | 否 | `number` | 见结构定义及所属功能文档 |
| `save` | 否 | `number` | 见结构定义及所属功能文档 |
| `attack` | 否 | `number` | 见结构定义及所属功能文档 |
| `tech` | 否 | `number` | 见结构定义及所属功能文档 |
| `hull` | 否 | `number` | 见结构定义及所属功能文档 |
| `agility` | 否 | `number` | 见结构定义及所属功能文档 |
| `systems` | 否 | `number` | 见结构定义及所属功能文档 |
| `engineering` | 否 | `number` | 见结构定义及所属功能文档 |
| `repair` | 否 | `number` | 见结构定义及所属功能文档 |
| `overshield` | 否 | `number` | 见结构定义及所属功能文档 |
| `burn` | 否 | `number` | 见结构定义及所属功能文档 |
| `cp` | 否 | `number` | 见结构定义及所属功能文档 |
| `overcharge` | 否 | `number` | 见结构定义及所属功能文档 |
| `movement` | 否 | `number` | 见结构定义及所属功能文档 |
| `quick` | 否 | `number` | 见结构定义及所属功能文档 |
| `freeQuick` | 否 | `number` | 见结构定义及所属功能文档 |
| `actions` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `reactionTurn` | 否 | `number` | 见结构定义及所属功能文档 |
| `reactions` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `turns` | 否 | `number` | 见结构定义及所属功能文档 |
| `braceUntil` | 否 | `number` | 见结构定义及所属功能文档 |
| `meltdown` | 否 | `number&#124;null` | 见结构定义及所属功能文档 |
| `resistances` | 否 | `LancerDamageType[]` | 见结构定义及所属功能文档 |
| `conditions` | 否 | `LancerTimedCondition[]` | 见结构定义及所属功能文档 |
| `weapons` | 否 | `LancerCombatWeapon[]` | 见结构定义及所属功能文档 |
| `equipment` | 否 | `LancerCombatSystem[]` | 见结构定义及所属功能文档 |
| `features` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `counters` | 是 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `phasedUntil` | 是 | `number` | 见结构定义及所属功能文档 |
| `flight` | 是 | `{source:string;mode:'fly'&#124;'hover';heading?:{x:number;y:number;z:number};segment:number}` | 见结构定义及所属功能文档 |
| `flight.source` | 否 | `string` | 见结构定义及所属功能文档 |
| `flight.mode` | 否 | `'fly'&#124;'hover'` | 见结构定义及所属功能文档 |
| `flight.heading` | 是 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `flight.heading.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `flight.heading.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `flight.heading.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `flight.segment` | 否 | `number` | 见结构定义及所属功能文档 |
| `fallFrom` | 是 | `number` | 见结构定义及所属功能文档 |
| `entity` | 是 | `{kind:'drone'&#124;'cover'&#124;'mine'&#124;'scenery';owner:string;system:string;mode:string}` | 见结构定义及所属功能文档 |
| `entity.kind` | 否 | `'drone'&#124;'cover'&#124;'mine'&#124;'scenery'` | 见结构定义及所属功能文档 |
| `entity.owner` | 否 | `string` | 见结构定义及所属功能文档 |
| `entity.system` | 否 | `string` | 见结构定义及所属功能文档 |
| `entity.mode` | 否 | `string` | 见结构定义及所属功能文档 |

## LancerRide

导出接口 · 源码第 56 行。

```ts
export interface LancerRide {
    mount: string;
    kind: 'passenger' | 'jockey';
    trigger?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `mount` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'passenger'&#124;'jockey'` | 见结构定义及所属功能文档 |
| `trigger` | 是 | `string` | 见结构定义及所属功能文档 |

## LancerAttackReplay

导出接口 · 源码第 57 行。

```ts
export interface LancerAttackReplay {
    accuracy: number;
    attackBonus: number;
    nuclearHeat: boolean;
    nuclearDamage: boolean;
    roland: boolean;
    thinking: boolean;
    bonusHalf: boolean;
    talents: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `accuracy` | 否 | `number` | 见结构定义及所属功能文档 |
| `attackBonus` | 否 | `number` | 见结构定义及所属功能文档 |
| `nuclearHeat` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `nuclearDamage` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `roland` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `thinking` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `bonusHalf` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `talents` | 否 | `string[]` | 见结构定义及所属功能文档 |

## LancerCheckResult

导出接口 · 源码第 58 行。

```ts
export interface LancerCheckResult {
    total: number;
    die: number;
    text: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `total` | 否 | `number` | 见结构定义及所属功能文档 |
| `die` | 否 | `number` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |

## LancerAttackOutcome

导出接口 · 源码第 59 行。

```ts
export interface LancerAttackOutcome {
    replay: LancerAttackReplay;
    firstShot: boolean;
    consumedLock: boolean;
    juggernaut: boolean;
    talents: boolean;
    automatic: boolean;
    invisibleMiss: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `replay` | 否 | `LancerAttackReplay` | 见结构定义及所属功能文档 |
| `firstShot` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `consumedLock` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `juggernaut` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `talents` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `automatic` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `invisibleMiss` | 否 | `boolean` | 见结构定义及所属功能文档 |

## LancerAttackStep

导出接口 · 源码第 60 行。

```ts
export type LancerAttackStep = Extract<LancerBattleStep, {
    kind: 'attack';
}>;
```

## LancerBattleStep

导出接口 · 源码第 61 行。

```ts
export type LancerBattleStep = {
    leaderChecks?: {
        reviewed: string[];
        boosted: string[];
    };
} & ({
    kind: 'customEffect';
    unit: string;
    target: string;
    system: string;
    mode: string;
    effect: number;
} | {
    kind: 'move';
    unit: string;
    x: number;
    y: number;
    z: number;
    cost: number;
    involuntary?: boolean;
    forced?: boolean;
    teleport?: boolean;
    group?: string;
    ignoreReactions?: boolean;
} | {
    kind: 'attackResult';
    unit: string;
    shot: LancerAttackStep;
    rolls: LancerCheckResult[];
    selected: number;
    context: LancerAttackOutcome;
} | {
    kind: 'techResult';
    unit: string;
    shot: Extract<LancerBattleStep, {
        kind: 'tech';
    }>;
    rolls: LancerCheckResult[];
    selected: number;
    nuclear: boolean;
    locked: boolean;
    hiddenMiss: boolean;
} | {
    kind: 'watch';
    unit: string;
    target: string;
    cqbOnly?: boolean;
    group?: string;
    involuntary?: boolean;
} | {
    kind: 'attack';
    unit: string;
    target: string;
    weapon: string;
    orderAccuracy?: boolean;
    accuracy: number;
    cover: number;
    consumeLock: boolean;
    lockConsumed?: boolean;
    halfDamage?: boolean;
    halfHeat?: boolean;
    preflight?: boolean;
    replay?: LancerAttackReplay;
    talents?: string[];
    emptyArea?: boolean;
    special?: 'autopod' | 'vorpal' | 'autogun' | 'npc-melt' | 'npc-pulse';
    profile?: string;
    reaction?: boolean;
    guarded?: string[];
    salvo?: string;
    noBonus?: boolean;
    secondary?: boolean;
    origin?: {
        x: number;
        y: number;
        z: number;
        size?: number;
    };
} | {
    kind: 'tech';
    unit: string;
    target: string;
    option: string;
    orderAccuracy?: boolean;
    reaction?: boolean;
    consumeLock: boolean;
    lockConsumed?: boolean;
    accuracy: number;
    guarded?: string[];
    preflight?: boolean;
    ally?: string;
    consent?: 'requested' | 'accepted' | 'declined';
} | {
    kind: 'melee';
    unit: string;
    mode: 'cleave' | 'sweep' | 'reroll';
    shot: LancerAttackStep;
    selected?: string[];
} | {
    kind: 'scene';
    unit: string;
    group: string;
    effect: LancerSceneEffect;
} | {
    kind: 'damage';
    unit: string;
    target: string;
    amount: number;
    type: LancerDamageType;
    ap: boolean;
    attack: boolean;
    leaderBonus?: {
        critical: boolean;
        half: boolean;
        max: boolean;
    };
    leaderChoice?: 'bonus' | 'reduce';
    leaderOffered?: boolean;
    leaderDefended?: boolean;
    leaderReduction?: number;
    halfDamage?: boolean;
    halfHeat?: boolean;
    weaponKind?: 'melee' | 'ranged';
    duelistReady?: boolean;
    resisted?: boolean;
    chooseType?: boolean;
    braced?: boolean;
    ready?: boolean;
    parts?: {
        amount: number;
        type: LancerDamageType;
    }[];
    bonus?: {
        key: string;
        critical: boolean;
        half: boolean;
        max?: boolean;
    };
    unreducible?: boolean;
} | {
    kind: 'harm';
    unit: string;
    target: string;
    amount: number;
    leaderDefended?: boolean;
    absorbShield?: boolean;
} | {
    kind: 'feature';
    unit: string;
    feature: string;
    orderAccuracy?: boolean;
    reaction?: boolean;
    lockConsumed?: boolean;
    selected?: string[];
    weapon?: string;
    target?: string;
    amount?: number;
    salvo?: string;
    origin?: {
        x: number;
        y: number;
        z: number;
        size?: number;
    };
} | {
    kind: 'save';
    unit: string;
    target: string;
    amount: number;
    type: LancerDamageType;
    skill: 'hull' | 'agility' | 'systems' | 'engineering';
    dc: number;
    half: boolean;
    ap?: boolean;
    parts?: {
        amount: number;
        type: LancerDamageType;
    }[];
    conditions?: LancerCondition[];
    successConditions?: LancerCondition[];
    failureFeature?: string;
    pushOrigin?: {
        x: number;
        y: number;
        z: number;
    };
    conditionAt?: 'start' | 'end';
    conditionClock?: 'source';
    push?: number;
    pullCenter?: {
        x: number;
        y: number;
        z: number;
    };
    noCoreBonus?: boolean;
} | {
    kind: 'trigger';
    unit: string;
    target: string;
    source: string;
    key: 'turret';
} | {
    kind: 'overheat';
    unit: string;
    remaining: number;
    dice: number[];
    rerolled: boolean;
} | {
    kind: 'fall';
    unit: string;
} | {
    kind: 'finish';
    unit: string;
});
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `leaderChecks` | 是 | `{reviewed:string[];boosted:string[]}` | 见结构定义及所属功能文档 |
| `leaderChecks.reviewed` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `leaderChecks.boosted` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支1.kind` | 否 | `'customEffect'` | 见结构定义及所属功能文档 |
| `分支1.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.system` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.mode` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.effect` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'move'` | 见结构定义及所属功能文档 |
| `分支2.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.cost` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.involuntary` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支2.forced` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支2.teleport` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支2.group` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支2.ignoreReactions` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支3.kind` | 否 | `'attackResult'` | 见结构定义及所属功能文档 |
| `分支3.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.shot` | 否 | `LancerAttackStep` | 见结构定义及所属功能文档 |
| `分支3.rolls` | 否 | `LancerCheckResult[]` | 见结构定义及所属功能文档 |
| `分支3.selected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.context` | 否 | `LancerAttackOutcome` | 见结构定义及所属功能文档 |
| `分支4.kind` | 否 | `'techResult'` | 见结构定义及所属功能文档 |
| `分支4.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.shot` | 否 | `Extract<LancerBattleStep,{kind:'tech'}>` | 见结构定义及所属功能文档 |
| `分支4.rolls` | 否 | `LancerCheckResult[]` | 见结构定义及所属功能文档 |
| `分支4.selected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支4.nuclear` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支4.locked` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支4.hiddenMiss` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支5.kind` | 否 | `'watch'` | 见结构定义及所属功能文档 |
| `分支5.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.cqbOnly` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支5.group` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支5.involuntary` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支6.kind` | 否 | `'attack'` | 见结构定义及所属功能文档 |
| `分支6.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.weapon` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.orderAccuracy` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支6.accuracy` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支6.cover` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支6.consumeLock` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支6.lockConsumed` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支6.halfDamage` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支6.halfHeat` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支6.preflight` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支6.replay` | 是 | `LancerAttackReplay` | 见结构定义及所属功能文档 |
| `分支6.talents` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支6.emptyArea` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支6.special` | 是 | `'autopod'&#124;'vorpal'&#124;'autogun'&#124;'npc-melt'&#124;'npc-pulse'` | 见结构定义及所属功能文档 |
| `分支6.profile` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支6.reaction` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支6.guarded` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支6.salvo` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支6.noBonus` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支6.secondary` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支6.origin` | 是 | `{x:number;y:number;z:number;size?:number}` | 见结构定义及所属功能文档 |
| `分支6.origin.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支6.origin.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支6.origin.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支6.origin.size` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支7.kind` | 否 | `'tech'` | 见结构定义及所属功能文档 |
| `分支7.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.option` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.orderAccuracy` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支7.reaction` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支7.consumeLock` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支7.lockConsumed` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支7.accuracy` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支7.guarded` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支7.preflight` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支7.ally` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支7.consent` | 是 | `'requested'&#124;'accepted'&#124;'declined'` | 见结构定义及所属功能文档 |
| `分支8.kind` | 否 | `'melee'` | 见结构定义及所属功能文档 |
| `分支8.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.mode` | 否 | `'cleave'&#124;'sweep'&#124;'reroll'` | 见结构定义及所属功能文档 |
| `分支8.shot` | 否 | `LancerAttackStep` | 见结构定义及所属功能文档 |
| `分支8.selected` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支9.kind` | 否 | `'scene'` | 见结构定义及所属功能文档 |
| `分支9.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.group` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.effect` | 否 | `LancerSceneEffect` | 见结构定义及所属功能文档 |
| `分支10.kind` | 否 | `'damage'` | 见结构定义及所属功能文档 |
| `分支10.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支10.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支10.amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支10.type` | 否 | `LancerDamageType` | 见结构定义及所属功能文档 |
| `分支10.ap` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.attack` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.leaderBonus` | 是 | `{critical:boolean;half:boolean;max:boolean}` | 见结构定义及所属功能文档 |
| `分支10.leaderBonus.critical` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.leaderBonus.half` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.leaderBonus.max` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.leaderChoice` | 是 | `'bonus'&#124;'reduce'` | 见结构定义及所属功能文档 |
| `分支10.leaderOffered` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.leaderDefended` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.leaderReduction` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支10.halfDamage` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.halfHeat` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.weaponKind` | 是 | `'melee'&#124;'ranged'` | 见结构定义及所属功能文档 |
| `分支10.duelistReady` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.resisted` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.chooseType` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.braced` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.ready` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.parts` | 是 | `{amount:number;type:LancerDamageType}[]` | 见结构定义及所属功能文档 |
| `分支10.parts.[].amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支10.parts.[].type` | 否 | `LancerDamageType` | 见结构定义及所属功能文档 |
| `分支10.bonus` | 是 | `{key:string;critical:boolean;half:boolean;max?:boolean}` | 见结构定义及所属功能文档 |
| `分支10.bonus.key` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支10.bonus.critical` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.bonus.half` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.bonus.max` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支10.unreducible` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支11.kind` | 否 | `'harm'` | 见结构定义及所属功能文档 |
| `分支11.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支11.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支11.amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支11.leaderDefended` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支11.absorbShield` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支12.kind` | 否 | `'feature'` | 见结构定义及所属功能文档 |
| `分支12.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支12.feature` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支12.orderAccuracy` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支12.reaction` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支12.lockConsumed` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支12.selected` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支12.weapon` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支12.target` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支12.amount` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支12.salvo` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支12.origin` | 是 | `{x:number;y:number;z:number;size?:number}` | 见结构定义及所属功能文档 |
| `分支12.origin.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支12.origin.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支12.origin.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支12.origin.size` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支13.kind` | 否 | `'save'` | 见结构定义及所属功能文档 |
| `分支13.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支13.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支13.amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支13.type` | 否 | `LancerDamageType` | 见结构定义及所属功能文档 |
| `分支13.skill` | 否 | `'hull'&#124;'agility'&#124;'systems'&#124;'engineering'` | 见结构定义及所属功能文档 |
| `分支13.dc` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支13.half` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支13.ap` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支13.parts` | 是 | `{amount:number;type:LancerDamageType}[]` | 见结构定义及所属功能文档 |
| `分支13.parts.[].amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支13.parts.[].type` | 否 | `LancerDamageType` | 见结构定义及所属功能文档 |
| `分支13.conditions` | 是 | `LancerCondition[]` | 见结构定义及所属功能文档 |
| `分支13.successConditions` | 是 | `LancerCondition[]` | 见结构定义及所属功能文档 |
| `分支13.failureFeature` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支13.pushOrigin` | 是 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `分支13.pushOrigin.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支13.pushOrigin.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支13.pushOrigin.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支13.conditionAt` | 是 | `'start'&#124;'end'` | 见结构定义及所属功能文档 |
| `分支13.conditionClock` | 是 | `'source'` | 见结构定义及所属功能文档 |
| `分支13.push` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支13.pullCenter` | 是 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `分支13.pullCenter.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支13.pullCenter.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支13.pullCenter.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支13.noCoreBonus` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支14.kind` | 否 | `'trigger'` | 见结构定义及所属功能文档 |
| `分支14.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支14.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支14.source` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支14.key` | 否 | `'turret'` | 见结构定义及所属功能文档 |
| `分支15.kind` | 否 | `'overheat'` | 见结构定义及所属功能文档 |
| `分支15.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支15.remaining` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支15.dice` | 否 | `number[]` | 见结构定义及所属功能文档 |
| `分支15.rerolled` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支16.kind` | 否 | `'fall'` | 见结构定义及所属功能文档 |
| `分支16.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支17.kind` | 否 | `'finish'` | 见结构定义及所属功能文档 |
| `分支17.unit` | 否 | `string` | 见结构定义及所属功能文档 |

## LancerDecision

导出接口 · 源码第 79 行。

```ts
export interface LancerDecision {
    defaultPoint?: {
        x: number;
        y: number;
        z: number;
    };
    leaderCheck?: 'attack' | 'save' | 'check';
    timing?: {
        paused?: boolean;
        duration?: number;
        deadline: number;
        option: string;
        label: string;
        sampledAt?: number;
    };
    hostOnly?: boolean;
    textPrompt?: string;
    links?: {
        from: string;
        to: string;
    }[];
    id: string;
    unit: string;
    kind: 'brace' | 'overwatch' | 'trauma' | 'feature';
    title: string;
    body: string;
    options: {
        id: string;
        label: string;
        description?: string;
    }[];
    step?: LancerBattleStep;
    point?: {
        subject: string;
        range: number;
        mode: 'ground' | 'fly' | 'teleport' | 'hazard' | 'push' | 'puppet';
        ignoreReactions: boolean;
        adjacent?: string;
        toward?: string;
        area?: LancerArea;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `defaultPoint` | 是 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `defaultPoint.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `defaultPoint.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `defaultPoint.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `leaderCheck` | 是 | `'attack'&#124;'save'&#124;'check'` | 见结构定义及所属功能文档 |
| `timing` | 是 | `{paused?:boolean;duration?:number;deadline:number;option:string;label:string;sampledAt?:number}` | 见结构定义及所属功能文档 |
| `timing.paused` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `timing.duration` | 是 | `number` | 见结构定义及所属功能文档 |
| `timing.deadline` | 否 | `number` | 见结构定义及所属功能文档 |
| `timing.option` | 否 | `string` | 见结构定义及所属功能文档 |
| `timing.label` | 否 | `string` | 见结构定义及所属功能文档 |
| `timing.sampledAt` | 是 | `number` | 见结构定义及所属功能文档 |
| `hostOnly` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `textPrompt` | 是 | `string` | 见结构定义及所属功能文档 |
| `links` | 是 | `{from:string;to:string}[]` | 见结构定义及所属功能文档 |
| `links.[].from` | 否 | `string` | 见结构定义及所属功能文档 |
| `links.[].to` | 否 | `string` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'brace'&#124;'overwatch'&#124;'trauma'&#124;'feature'` | 见结构定义及所属功能文档 |
| `title` | 否 | `string` | 见结构定义及所属功能文档 |
| `body` | 否 | `string` | 见结构定义及所属功能文档 |
| `options` | 否 | `{id:string;label:string;description?:string}[]` | 见结构定义及所属功能文档 |
| `options.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `options.[].label` | 否 | `string` | 见结构定义及所属功能文档 |
| `options.[].description` | 是 | `string` | 见结构定义及所属功能文档 |
| `step` | 是 | `LancerBattleStep` | 见结构定义及所属功能文档 |
| `point` | 是 | `{subject:string;range:number;mode:'ground'&#124;'fly'&#124;'teleport'&#124;'hazard'&#124;'push'&#124;'puppet';ignoreReactions:boolean;adjacent?:string;toward?:string;area?:LancerArea}` | 见结构定义及所属功能文档 |
| `point.subject` | 否 | `string` | 见结构定义及所属功能文档 |
| `point.range` | 否 | `number` | 见结构定义及所属功能文档 |
| `point.mode` | 否 | `'ground'&#124;'fly'&#124;'teleport'&#124;'hazard'&#124;'push'&#124;'puppet'` | 见结构定义及所属功能文档 |
| `point.ignoreReactions` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `point.adjacent` | 是 | `string` | 见结构定义及所属功能文档 |
| `point.toward` | 是 | `string` | 见结构定义及所属功能文档 |
| `point.area` | 是 | `LancerArea` | 见结构定义及所属功能文档 |

## LancerCombatLog

导出接口 · 源码第 87 行。

```ts
export interface LancerCombatLog {
    movement?: CombatStep['movement'];
    roll?: CombatRollDetail;
    id: string;
    round: number;
    turn: number;
    text: string;
    units: string[];
    at: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `movement` | 是 | `CombatStep['movement']` | 见结构定义及所属功能文档 |
| `roll` | 是 | `CombatRollDetail` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `round` | 否 | `number` | 见结构定义及所属功能文档 |
| `turn` | 否 | `number` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `units` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |

## LancerGrapple

导出接口 · 源码第 88 行。

```ts
export interface LancerGrapple {
    attacker: string;
    target: string;
    dominant?: LancerSide;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `attacker` | 否 | `string` | 见结构定义及所属功能文档 |
| `target` | 否 | `string` | 见结构定义及所属功能文档 |
| `dominant` | 是 | `LancerSide` | 见结构定义及所属功能文档 |

## LancerIntel

导出接口 · 源码第 89 行。

```ts
export interface LancerIntel {
    awaitingReply?: boolean;
    id: string;
    unit: string;
    ownerId?: string;
    scannerName?: string;
    target: string;
    round: number;
    turn: number;
    title: string;
    text: string;
    sharedWith?: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `awaitingReply` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `ownerId` | 是 | `string` | 见结构定义及所属功能文档 |
| `scannerName` | 是 | `string` | 见结构定义及所属功能文档 |
| `target` | 否 | `string` | 见结构定义及所属功能文档 |
| `round` | 否 | `number` | 见结构定义及所属功能文档 |
| `turn` | 否 | `number` | 见结构定义及所属功能文档 |
| `title` | 否 | `string` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `sharedWith` | 是 | `string[]` | 见结构定义及所属功能文档 |

## LancerQuickReaction

导出接口 · 源码第 90 行。

```ts
export interface LancerQuickReaction {
    prepared?: LancerReadyReference;
    id: string;
    source: string;
    unit: string;
    target: string;
    stage: 'action' | 'resolving' | 'move';
    saved: {
        quick: number;
        freeQuick: number;
        movement: number;
        actions: string[];
    };
    suspended: LancerBattleStep[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `prepared` | 是 | `LancerReadyReference` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |
| `unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `target` | 否 | `string` | 见结构定义及所属功能文档 |
| `stage` | 否 | `'action'&#124;'resolving'&#124;'move'` | 见结构定义及所属功能文档 |
| `saved` | 否 | `{quick:number;freeQuick:number;movement:number;actions:string[]}` | 见结构定义及所属功能文档 |
| `saved.quick` | 否 | `number` | 见结构定义及所属功能文档 |
| `saved.freeQuick` | 否 | `number` | 见结构定义及所属功能文档 |
| `saved.movement` | 否 | `number` | 见结构定义及所属功能文档 |
| `saved.actions` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `suspended` | 否 | `LancerBattleStep[]` | 见结构定义及所属功能文档 |

## LancerBattle

导出接口 · 源码第 91 行。

```ts
export interface LancerBattle {
    quickReaction?: LancerQuickReaction;
    version: 1;
    phase: 'deployment' | 'active' | 'ended';
    round: number;
    turn: number;
    next: LancerSide;
    active: string | null;
    acted: string[];
    zones: LancerDeploymentZone[];
    units: LancerCombatUnit[];
    pending: LancerDecision | null;
    queue: LancerBattleStep[];
    log: LancerCombatLog[];
    intel?: LancerIntel[];
    salvos?: LancerSalvo[];
    effects?: LancerEffect[];
    grapples?: LancerGrapple[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `quickReaction` | 是 | `LancerQuickReaction` | 见结构定义及所属功能文档 |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `phase` | 否 | `'deployment'&#124;'active'&#124;'ended'` | 见结构定义及所属功能文档 |
| `round` | 否 | `number` | 见结构定义及所属功能文档 |
| `turn` | 否 | `number` | 见结构定义及所属功能文档 |
| `next` | 否 | `LancerSide` | 见结构定义及所属功能文档 |
| `active` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `acted` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `zones` | 否 | `LancerDeploymentZone[]` | 见结构定义及所属功能文档 |
| `units` | 否 | `LancerCombatUnit[]` | 见结构定义及所属功能文档 |
| `pending` | 否 | `LancerDecision&#124;null` | 见结构定义及所属功能文档 |
| `queue` | 否 | `LancerBattleStep[]` | 见结构定义及所属功能文档 |
| `log` | 否 | `LancerCombatLog[]` | 见结构定义及所属功能文档 |
| `intel` | 是 | `LancerIntel[]` | 见结构定义及所属功能文档 |
| `salvos` | 是 | `LancerSalvo[]` | 见结构定义及所属功能文档 |
| `effects` | 是 | `LancerEffect[]` | 见结构定义及所属功能文档 |
| `grapples` | 是 | `LancerGrapple[]` | 见结构定义及所属功能文档 |

## LancerCombatIntent

导出接口 · 源码第 99 行。

```ts
export type LancerCombatIntent = ({
    leadership?: boolean;
} & ({
    type: 'prepare';
    units: LancerCombatUnit[];
    zones: LancerDeploymentZone[];
} | {
    type: 'zones';
    zones: LancerDeploymentZone[];
} | {
    type: 'deploy';
    unit: string;
    x: number;
    y: number;
    z: number;
} | {
    type: 'finishReaction';
    unit: string;
} | {
    type: 'start';
} | {
    type: 'activate';
    unit: string;
} | {
    type: 'endTurn';
} | {
    type: 'endBattle';
} | {
    type: 'move';
    unit: string;
    x: number;
    y: number;
    z: number;
    flight?: string;
    path?: import('./movement-path').MovementPoint[];
} | {
    type: 'ai';
    unit: string;
    op: 'handoff' | 'retake' | 'shutdown';
} | {
    type: 'nhp';
    unit: string;
    op: 'switch' | 'breakdown' | 'cycle' | 'stress' | 'downtime' | 'install' | 'remove' | 'proxyEnter' | 'proxyExit';
    point?: {
        x: number;
        y: number;
        z: number;
    };
    body?: 'mech' | 'subaltern';
    value?: number;
    reason?: string;
    removeBurdens?: number[];
    removeAbilities?: string[];
} | {
    type: 'ready';
    unit: string;
    ref: LancerReadyReference;
    event: LancerReady['event'];
    side: LancerReady['side'];
    subject?: string;
    within: number;
} | {
    type: 'cancelReady';
    unit: string;
} | {
    type: 'pilotGear';
    unit: string;
    gear: string;
    mode?: 'use' | 'detonate' | 'leave';
    target?: string;
    point?: {
        x: number;
        y: number;
        z: number;
    };
    effect?: string;
} | {
    type: 'pilot';
    unit: string;
    op: 'dismount' | 'eject' | 'embark' | 'reload' | 'cloak' | 'ride' | 'jockey' | 'shakeOff' | 'jumpOff';
    point?: {
        x: number;
        y: number;
        z: number;
    };
    weapon?: string;
    target?: string;
    effect?: 'distract' | 'heat' | 'damage';
    trigger?: string;
} | {
    type: 'action';
    unit: string;
    action: 'boost' | 'disengage' | 'stand' | 'overcharge' | 'cool' | 'repair' | 'reload' | 'lockon' | 'invade' | 'ram' | 'grapple' | 'improvised' | 'escape' | 'release' | 'hide' | 'search' | 'shutdown' | 'boot';
    target?: string;
    free?: boolean;
    secondary?: 'reload' | 'burn' | 'condition';
    condition?: LancerCondition;
    trigger?: string;
} | {
    type: 'attack';
    unit: string;
    target: string;
    weapon: string;
    secondWeapon?: string;
    secondTarget?: string;
    extraTargets?: string[];
    profile?: string;
    mode: 'skirmish' | 'barrage';
    accuracy: number;
    cover: number;
    consumeLock: boolean;
    free?: boolean;
    area?: LancerArea;
} | {
    type: 'interact';
    unit: string;
    object: string;
    action: string;
} | {
    type: 'fullTech';
    unit: string;
} | {
    type: 'tech';
    unit: string;
    option: string;
    target?: string;
    consumeLock: boolean;
    free?: boolean;
} | {
    type: 'npcAction';
    unit: string;
    ability: string;
    target?: string;
    area?: LancerArea;
    extraArea?: LancerArea;
} | {
    type: 'weaponMode';
    unit: string;
    weapon: string;
    mode: 'spinup' | 'spindown' | 'provoke';
    free?: boolean;
} | {
    type: 'completeIntel';
    report: string;
    text: string;
} | {
    type: 'decisionTimeout';
    decision: string;
} | {
    type: 'pauseDecision';
    decision: string;
} | {
    type: 'respond';
    decision: string;
    option: string;
    purpose?: LancerLeadershipPurpose;
    text?: string;
    point?: {
        x: number;
        y: number;
        z: number;
    };
} | {
    type: 'ability';
    unit: string;
    ability: string;
    target?: string;
    free?: boolean;
} | {
    type: 'system';
    unit: string;
    system: string;
    mode: string;
    target?: string;
    free?: boolean;
    point?: {
        x: number;
        y: number;
        z: number;
    };
} | {
    type: 'environment';
    unit: string;
    amount: number;
    damageType: 'kinetic' | 'energy' | 'explosive' | 'burn' | 'heat';
    condition?: LancerCondition;
} | {
    type: 'adjudicate';
    unit: string;
    resource?: 'hp' | 'heat' | 'overshield' | 'burn' | 'repair';
    value?: number;
    condition?: LancerCondition;
    remove?: boolean;
    reason: string;
}));
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `leadership` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支1.type` | 否 | `'prepare'` | 见结构定义及所属功能文档 |
| `分支1.units` | 否 | `LancerCombatUnit[]` | 见结构定义及所属功能文档 |
| `分支1.zones` | 否 | `LancerDeploymentZone[]` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'zones'` | 见结构定义及所属功能文档 |
| `分支2.zones` | 否 | `LancerDeploymentZone[]` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'deploy'` | 见结构定义及所属功能文档 |
| `分支3.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支4.type` | 否 | `'finishReaction'` | 见结构定义及所属功能文档 |
| `分支4.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.type` | 否 | `'start'` | 见结构定义及所属功能文档 |
| `分支6.type` | 否 | `'activate'` | 见结构定义及所属功能文档 |
| `分支6.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.type` | 否 | `'endTurn'` | 见结构定义及所属功能文档 |
| `分支8.type` | 否 | `'endBattle'` | 见结构定义及所属功能文档 |
| `分支9.type` | 否 | `'move'` | 见结构定义及所属功能文档 |
| `分支9.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支9.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支9.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支9.flight` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支9.path` | 是 | `import('./movement-path').MovementPoint[]` | 见结构定义及所属功能文档 |
| `分支10.type` | 否 | `'ai'` | 见结构定义及所属功能文档 |
| `分支10.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支10.op` | 否 | `'handoff'&#124;'retake'&#124;'shutdown'` | 见结构定义及所属功能文档 |
| `分支11.type` | 否 | `'nhp'` | 见结构定义及所属功能文档 |
| `分支11.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支11.op` | 否 | `'switch'&#124;'breakdown'&#124;'cycle'&#124;'stress'&#124;'downtime'&#124;'install'&#124;'remove'&#124;'proxyEnter'&#124;'proxyExit'` | 见结构定义及所属功能文档 |
| `分支11.point` | 是 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `分支11.point.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支11.point.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支11.point.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支11.body` | 是 | `'mech'&#124;'subaltern'` | 见结构定义及所属功能文档 |
| `分支11.value` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支11.reason` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支11.removeBurdens` | 是 | `number[]` | 见结构定义及所属功能文档 |
| `分支11.removeAbilities` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支12.type` | 否 | `'ready'` | 见结构定义及所属功能文档 |
| `分支12.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支12.ref` | 否 | `LancerReadyReference` | 见结构定义及所属功能文档 |
| `分支12.event` | 否 | `LancerReady['event']` | 见结构定义及所属功能文档 |
| `分支12.side` | 否 | `LancerReady['side']` | 见结构定义及所属功能文档 |
| `分支12.subject` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支12.within` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支13.type` | 否 | `'cancelReady'` | 见结构定义及所属功能文档 |
| `分支13.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支14.type` | 否 | `'pilotGear'` | 见结构定义及所属功能文档 |
| `分支14.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支14.gear` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支14.mode` | 是 | `'use'&#124;'detonate'&#124;'leave'` | 见结构定义及所属功能文档 |
| `分支14.target` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支14.point` | 是 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `分支14.point.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支14.point.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支14.point.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支14.effect` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支15.type` | 否 | `'pilot'` | 见结构定义及所属功能文档 |
| `分支15.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支15.op` | 否 | `'dismount'&#124;'eject'&#124;'embark'&#124;'reload'&#124;'cloak'&#124;'ride'&#124;'jockey'&#124;'shakeOff'&#124;'jumpOff'` | 见结构定义及所属功能文档 |
| `分支15.point` | 是 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `分支15.point.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支15.point.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支15.point.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支15.weapon` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支15.target` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支15.effect` | 是 | `'distract'&#124;'heat'&#124;'damage'` | 见结构定义及所属功能文档 |
| `分支15.trigger` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支16.type` | 否 | `'action'` | 见结构定义及所属功能文档 |
| `分支16.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支16.action` | 否 | `'boost'&#124;'disengage'&#124;'stand'&#124;'overcharge'&#124;'cool'&#124;'repair'&#124;'reload'&#124;'lockon'&#124;'invade'&#124;'ram'&#124;'grapple'&#124;'improvised'&#124;'escape'&#124;'release'&#124;'hide'&#124;'search'&#124;'shutdown'&#124;'boot'` | 见结构定义及所属功能文档 |
| `分支16.target` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支16.free` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支16.secondary` | 是 | `'reload'&#124;'burn'&#124;'condition'` | 见结构定义及所属功能文档 |
| `分支16.condition` | 是 | `LancerCondition` | 见结构定义及所属功能文档 |
| `分支16.trigger` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支17.type` | 否 | `'attack'` | 见结构定义及所属功能文档 |
| `分支17.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支17.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支17.weapon` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支17.secondWeapon` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支17.secondTarget` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支17.extraTargets` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支17.profile` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支17.mode` | 否 | `'skirmish'&#124;'barrage'` | 见结构定义及所属功能文档 |
| `分支17.accuracy` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支17.cover` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支17.consumeLock` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支17.free` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支17.area` | 是 | `LancerArea` | 见结构定义及所属功能文档 |
| `分支18.type` | 否 | `'interact'` | 见结构定义及所属功能文档 |
| `分支18.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支18.object` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支18.action` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支19.type` | 否 | `'fullTech'` | 见结构定义及所属功能文档 |
| `分支19.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支20.type` | 否 | `'tech'` | 见结构定义及所属功能文档 |
| `分支20.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支20.option` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支20.target` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支20.consumeLock` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支20.free` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支21.type` | 否 | `'npcAction'` | 见结构定义及所属功能文档 |
| `分支21.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支21.ability` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支21.target` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支21.area` | 是 | `LancerArea` | 见结构定义及所属功能文档 |
| `分支21.extraArea` | 是 | `LancerArea` | 见结构定义及所属功能文档 |
| `分支22.type` | 否 | `'weaponMode'` | 见结构定义及所属功能文档 |
| `分支22.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支22.weapon` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支22.mode` | 否 | `'spinup'&#124;'spindown'&#124;'provoke'` | 见结构定义及所属功能文档 |
| `分支22.free` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支23.type` | 否 | `'completeIntel'` | 见结构定义及所属功能文档 |
| `分支23.report` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支23.text` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支24.type` | 否 | `'decisionTimeout'` | 见结构定义及所属功能文档 |
| `分支24.decision` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支25.type` | 否 | `'pauseDecision'` | 见结构定义及所属功能文档 |
| `分支25.decision` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支26.type` | 否 | `'respond'` | 见结构定义及所属功能文档 |
| `分支26.decision` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支26.option` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支26.purpose` | 是 | `LancerLeadershipPurpose` | 见结构定义及所属功能文档 |
| `分支26.text` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支26.point` | 是 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `分支26.point.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支26.point.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支26.point.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支27.type` | 否 | `'ability'` | 见结构定义及所属功能文档 |
| `分支27.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支27.ability` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支27.target` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支27.free` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支28.type` | 否 | `'system'` | 见结构定义及所属功能文档 |
| `分支28.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支28.system` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支28.mode` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支28.target` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支28.free` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支28.point` | 是 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `分支28.point.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支28.point.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支28.point.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支29.type` | 否 | `'environment'` | 见结构定义及所属功能文档 |
| `分支29.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支29.amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支29.damageType` | 否 | `'kinetic'&#124;'energy'&#124;'explosive'&#124;'burn'&#124;'heat'` | 见结构定义及所属功能文档 |
| `分支29.condition` | 是 | `LancerCondition` | 见结构定义及所属功能文档 |
| `分支30.type` | 否 | `'adjudicate'` | 见结构定义及所属功能文档 |
| `分支30.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支30.resource` | 是 | `'hp'&#124;'heat'&#124;'overshield'&#124;'burn'&#124;'repair'` | 见结构定义及所属功能文档 |
| `分支30.value` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支30.condition` | 是 | `LancerCondition` | 见结构定义及所属功能文档 |
| `分支30.remove` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支30.reason` | 否 | `string` | 见结构定义及所属功能文档 |

## parseLancerRide

导出接口 · 源码第 135 行。

```ts
export function parseLancerRide(raw: unknown): LancerRide;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseLancerArea

导出接口 · 源码第 136 行。

```ts
export function parseLancerArea(raw: unknown): LancerArea;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseLancerZone

导出接口 · 源码第 140 行。

```ts
export function parseLancerZone(raw: unknown): LancerDeploymentZone;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseLancerNpc

导出接口 · 源码第 141 行。

```ts
export function parseLancerNpc(raw: unknown): LancerNpc;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseLancerWeapon

导出接口 · 源码第 142 行。

```ts
export function parseLancerWeapon(raw: unknown): LancerCombatWeapon;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseLancerPilotProfile

导出接口 · 源码第 144 行。

```ts
export function parseLancerPilotProfile(raw: unknown): LancerPilotProfile;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseLancerAI

导出接口 · 源码第 147 行。

```ts
export function parseLancerAI(raw: unknown): LancerAI;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseLancerNhp

导出接口 · 源码第 148 行。

```ts
export function parseLancerNhp(raw: unknown): LancerNhp;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseLancerReadyReference

导出接口 · 源码第 149 行。

```ts
export function parseLancerReadyReference(raw: unknown): LancerReadyReference;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseLancerUnit

导出接口 · 源码第 150 行。

```ts
export function parseLancerUnit(raw: unknown): LancerCombatUnit;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseLancerBattle

导出接口 · 源码第 205 行。

```ts
export function parseLancerBattle(raw: unknown): LancerBattle;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## projectLancerBattle

导出接口 · 源码第 214 行。

Only the GM retains continuations and hidden-unit details. Pending choices remain durable on the host.

```ts
export function projectLancerBattle(b: LancerBattle, visibleTokens: Set<string>, playerId?: string, canControl?: (actorId:string)=>boolean): LancerBattle;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `visibleTokens` | 否 | `Set<string>` | — |
| `playerId` | 是 | `string` | — |
| `canControl` | 是 | `(actorId:string)=>boolean` | — |
