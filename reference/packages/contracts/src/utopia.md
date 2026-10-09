# game/packages/contracts/src/utopia.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## UTOPIA_CONDITIONS

导出接口 · 源码第 2 行。

New Utopia 0.1.1. This is a distinct rules state, never a LANCER battle.

```ts
export const UTOPIA_CONDITIONS = ['impaired', 'slowed', 'immobilized', 'jammed', 'suppressed', 'stunned', 'shredded', 'lockon', 'exposed', 'prone', 'hidden', 'invisible', 'shutdown'] as const;
```

## UtopiaCondition

导出接口 · 源码第 3 行。

```ts
export type UtopiaCondition = typeof UTOPIA_CONDITIONS[number];
```

## UtopiaDamage

导出接口 · 源码第 5 行。

```ts
export type UtopiaDamage = 'kinetic' | 'energy' | 'explosive' | 'burn' | 'heat' | 'resonance';
```

## UtopiaSkill

导出接口 · 源码第 6 行。

```ts
export type UtopiaSkill = 'hull' | 'agility' | 'systems' | 'engineering';
```

## UtopiaEquipment

导出接口 · 源码第 7 行。

```ts
export interface UtopiaEquipment {
    id: string;
    entry: string;
    mount: number;
    charges: number;
    loaded: boolean;
    destroyed: boolean;
    module?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `entry` | 否 | `string` | 见结构定义及所属功能文档 |
| `mount` | 否 | `number` | 见结构定义及所属功能文档 |
| `charges` | 否 | `number` | 见结构定义及所属功能文档 |
| `loaded` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `destroyed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `module` | 是 | `string` | 见结构定义及所属功能文档 |

## UtopiaConditionState

导出接口 · 源码第 8 行。

```ts
export interface UtopiaConditionState {
    name: UtopiaCondition;
    source: string;
    untilTurn?: number;
    selfCost?: boolean;
    channel?: 'E' | 'P' | 'X';
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `name` | 否 | `UtopiaCondition` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |
| `untilTurn` | 是 | `number` | 见结构定义及所属功能文档 |
| `selfCost` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `channel` | 是 | `'E'&#124;'P'&#124;'X'` | 见结构定义及所属功能文档 |

## UtopiaResources

导出接口 · 源码第 9 行。

```ts
export interface UtopiaResources {
    hp: number;
    structure: number;
    power: number;
    heat: number;
    resonance: number;
    erosion: number;
    repair: number;
    cp: number;
    shield: number;
    burn: number;
    overcharge: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `hp` | 否 | `number` | 见结构定义及所属功能文档 |
| `structure` | 否 | `number` | 见结构定义及所属功能文档 |
| `power` | 否 | `number` | 见结构定义及所属功能文档 |
| `heat` | 否 | `number` | 见结构定义及所属功能文档 |
| `resonance` | 否 | `number` | 见结构定义及所属功能文档 |
| `erosion` | 否 | `number` | 见结构定义及所属功能文档 |
| `repair` | 否 | `number` | 见结构定义及所属功能文档 |
| `cp` | 否 | `number` | 见结构定义及所属功能文档 |
| `shield` | 否 | `number` | 见结构定义及所属功能文档 |
| `burn` | 否 | `number` | 见结构定义及所属功能文档 |
| `overcharge` | 否 | `number` | 见结构定义及所属功能文档 |

## UtopiaStats

导出接口 · 源码第 10 行。

```ts
export interface UtopiaStats {
    hp: number;
    armor: number;
    evasion: number;
    defense: number;
    speed: number;
    sensors: number;
    heat: number;
    repair: number;
    sp: number;
    tech: number;
    attack: number;
    save: number;
    size: number;
    structure: number;
    power: number;
    turns: number;
    channels: ('E' | 'P' | 'X')[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `hp` | 否 | `number` | 见结构定义及所属功能文档 |
| `armor` | 否 | `number` | 见结构定义及所属功能文档 |
| `evasion` | 否 | `number` | 见结构定义及所属功能文档 |
| `defense` | 否 | `number` | 见结构定义及所属功能文档 |
| `speed` | 否 | `number` | 见结构定义及所属功能文档 |
| `sensors` | 否 | `number` | 见结构定义及所属功能文档 |
| `heat` | 否 | `number` | 见结构定义及所属功能文档 |
| `repair` | 否 | `number` | 见结构定义及所属功能文档 |
| `sp` | 否 | `number` | 见结构定义及所属功能文档 |
| `tech` | 否 | `number` | 见结构定义及所属功能文档 |
| `attack` | 否 | `number` | 见结构定义及所属功能文档 |
| `save` | 否 | `number` | 见结构定义及所属功能文档 |
| `size` | 否 | `number` | 见结构定义及所属功能文档 |
| `structure` | 否 | `number` | 见结构定义及所属功能文档 |
| `power` | 否 | `number` | 见结构定义及所属功能文档 |
| `turns` | 否 | `number` | 见结构定义及所属功能文档 |
| `channels` | 否 | `('E'&#124;'P'&#124;'X')[]` | 见结构定义及所属功能文档 |

## UtopiaNpc

导出接口 · 源码第 11 行。

```ts
export interface UtopiaNpc {
    tier: 1 | 2 | 3;
    rank: 'grunt' | 'standard' | 'swarm' | 'elite' | 'boss' | 'object';
    stats: UtopiaStats;
    weapon: {
        name: string;
        range: number;
        damage: string;
        type: UtopiaDamage;
        melee: boolean;
    };
    abilities: {
        id: string;
        name: string;
        text: string;
        cost: 'quick' | 'full' | 'reaction' | 'passive';
        recharge?: number;
    }[];
    source: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `tier` | 否 | `1&#124;2&#124;3` | 见结构定义及所属功能文档 |
| `rank` | 否 | `'grunt'&#124;'standard'&#124;'swarm'&#124;'elite'&#124;'boss'&#124;'object'` | 见结构定义及所属功能文档 |
| `stats` | 否 | `UtopiaStats` | 见结构定义及所属功能文档 |
| `weapon` | 否 | `{name:string;range:number;damage:string;type:UtopiaDamage;melee:boolean}` | 见结构定义及所属功能文档 |
| `weapon.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `weapon.range` | 否 | `number` | 见结构定义及所属功能文档 |
| `weapon.damage` | 否 | `string` | 见结构定义及所属功能文档 |
| `weapon.type` | 否 | `UtopiaDamage` | 见结构定义及所属功能文档 |
| `weapon.melee` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `abilities` | 否 | `{id:string;name:string;text:string;cost:'quick'&#124;'full'&#124;'reaction'&#124;'passive';recharge?:number}[]` | 见结构定义及所属功能文档 |
| `abilities.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `abilities.[].name` | 否 | `string` | 见结构定义及所属功能文档 |
| `abilities.[].text` | 否 | `string` | 见结构定义及所属功能文档 |
| `abilities.[].cost` | 否 | `'quick'&#124;'full'&#124;'reaction'&#124;'passive'` | 见结构定义及所属功能文档 |
| `abilities.[].recharge` | 是 | `number` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |

## UtopiaCharacter

导出接口 · 源码第 12 行。

```ts
export interface UtopiaCharacter {
    version: 1;
    level: number;
    frame: string;
    tune: [
        number,
        number,
        number,
        number
    ];
    background: string;
    triggers: Record<string, number>;
    talents: Record<string, number>;
    technology: Record<string, number>;
    cores: string[];
    feats: string[];
    tools: string[];
    equipment: UtopiaEquipment[];
    resources: UtopiaResources;
    conditions: UtopiaConditionState[];
    turns: number;
    uses: Record<string, number>;
    npc?: UtopiaNpc;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `level` | 否 | `number` | 见结构定义及所属功能文档 |
| `frame` | 否 | `string` | 见结构定义及所属功能文档 |
| `tune` | 否 | `[number,number,number,number]` | 见结构定义及所属功能文档 |
| `background` | 否 | `string` | 见结构定义及所属功能文档 |
| `triggers` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `talents` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `technology` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `cores` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `feats` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `tools` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `equipment` | 否 | `UtopiaEquipment[]` | 见结构定义及所属功能文档 |
| `resources` | 否 | `UtopiaResources` | 见结构定义及所属功能文档 |
| `conditions` | 否 | `UtopiaConditionState[]` | 见结构定义及所属功能文档 |
| `turns` | 否 | `number` | 见结构定义及所属功能文档 |
| `uses` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `npc` | 是 | `UtopiaNpc` | 见结构定义及所属功能文档 |

## UtopiaPoint

导出接口 · 源码第 18 行。

```ts
export interface UtopiaPoint {
    x: number;
    y: number;
    z: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 否 | `number` | 见结构定义及所属功能文档 |

## UtopiaTurn

导出接口 · 源码第 19 行。

```ts
export interface UtopiaTurn {
    token: string;
    side: 'pc' | 'npc';
    remaining: number;
    quick: number;
    movement: number;
    used: string[];
    reactionTurn: number;
    reactionRound: string[];
    started: number;
    overcharged: boolean;
    free?: number;
    origin?: UtopiaPoint;
    moveStarted?: boolean;
    braceUntil?: number;
    disengaged?: boolean;
    flying?: boolean;
    prepared?: {
        action: string;
        trigger: string;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `token` | 否 | `string` | 见结构定义及所属功能文档 |
| `side` | 否 | `'pc'&#124;'npc'` | 见结构定义及所属功能文档 |
| `remaining` | 否 | `number` | 见结构定义及所属功能文档 |
| `quick` | 否 | `number` | 见结构定义及所属功能文档 |
| `movement` | 否 | `number` | 见结构定义及所属功能文档 |
| `used` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `reactionTurn` | 否 | `number` | 见结构定义及所属功能文档 |
| `reactionRound` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `started` | 否 | `number` | 见结构定义及所属功能文档 |
| `overcharged` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `free` | 是 | `number` | 见结构定义及所属功能文档 |
| `origin` | 是 | `UtopiaPoint` | 见结构定义及所属功能文档 |
| `moveStarted` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `braceUntil` | 是 | `number` | 见结构定义及所属功能文档 |
| `disengaged` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `flying` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `prepared` | 是 | `{action:string;trigger:string}` | 见结构定义及所属功能文档 |
| `prepared.action` | 否 | `string` | 见结构定义及所属功能文档 |
| `prepared.trigger` | 否 | `string` | 见结构定义及所属功能文档 |

## UtopiaDecision

导出接口 · 源码第 20 行。

```ts
export interface UtopiaDecision {
    id: string;
    actor: string;
    kind: 'structure' | 'brace' | 'overwatch' | 'ruling';
    title: string;
    options: {
        id: string;
        label: string;
    }[];
    skip: boolean;
    createdAt: number;
    seconds: number;
    paused: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'structure'&#124;'brace'&#124;'overwatch'&#124;'ruling'` | 见结构定义及所属功能文档 |
| `title` | 否 | `string` | 见结构定义及所属功能文档 |
| `options` | 否 | `{id:string;label:string}[]` | 见结构定义及所属功能文档 |
| `options.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `options.[].label` | 否 | `string` | 见结构定义及所属功能文档 |
| `skip` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `createdAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `seconds` | 否 | `number` | 见结构定义及所属功能文档 |
| `paused` | 否 | `boolean` | 见结构定义及所属功能文档 |

## UtopiaStep

导出接口 · 源码第 21 行。

```ts
export type UtopiaStep = {
    type: 'damage';
    source: string;
    target: string;
    amount: number;
    damageType: UtopiaDamage;
    ap?: boolean;
    resist?: boolean;
    attack?: boolean;
    area?: boolean;
    processed?: boolean;
    checked?: boolean;
    repeatBurn?: boolean;
    attackId?: string;
} | {
    type: 'attack';
    source: string;
    targets: string[];
    equipment: string;
    accuracy: number;
    difficulty: number;
    lockon: boolean;
    auxiliary?: boolean;
    point?: UtopiaPoint;
    mode?: string;
    friendly?: boolean;
} | {
    type: 'condition';
    target: string;
    condition: UtopiaCondition;
    source: string;
    untilNext?: boolean;
    channel?: 'E' | 'P' | 'X';
} | {
    type: 'move';
    token: string;
    points: UtopiaPoint[];
    cost: number;
    forced?: boolean;
    checked?: boolean;
    mode?: 'walk' | 'fly' | 'jump';
    reacted?: string[];
} | {
    type: 'scene';
    token: string;
    object: string;
    action: string;
} | {
    type: 'overcharge';
    actor: string;
} | {
    type: 'finish';
    actor: string;
    close?: boolean;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'damage'` | 见结构定义及所属功能文档 |
| `分支1.source` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支1.damageType` | 否 | `UtopiaDamage` | 见结构定义及所属功能文档 |
| `分支1.ap` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支1.resist` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支1.attack` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支1.area` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支1.processed` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支1.checked` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支1.repeatBurn` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支1.attackId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'attack'` | 见结构定义及所属功能文档 |
| `分支2.source` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支2.equipment` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.accuracy` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.difficulty` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.lockon` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支2.auxiliary` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支2.point` | 是 | `UtopiaPoint` | 见结构定义及所属功能文档 |
| `分支2.mode` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支2.friendly` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'condition'` | 见结构定义及所属功能文档 |
| `分支3.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.condition` | 否 | `UtopiaCondition` | 见结构定义及所属功能文档 |
| `分支3.source` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.untilNext` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支3.channel` | 是 | `'E'&#124;'P'&#124;'X'` | 见结构定义及所属功能文档 |
| `分支4.type` | 否 | `'move'` | 见结构定义及所属功能文档 |
| `分支4.token` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.points` | 否 | `UtopiaPoint[]` | 见结构定义及所属功能文档 |
| `分支4.cost` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支4.forced` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支4.checked` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支4.mode` | 是 | `'walk'&#124;'fly'&#124;'jump'` | 见结构定义及所属功能文档 |
| `分支4.reacted` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支5.type` | 否 | `'scene'` | 见结构定义及所属功能文档 |
| `分支5.token` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.object` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.action` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.type` | 否 | `'overcharge'` | 见结构定义及所属功能文档 |
| `分支6.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.type` | 否 | `'finish'` | 见结构定义及所属功能文档 |
| `分支7.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.close` | 是 | `boolean` | 见结构定义及所属功能文档 |

## UtopiaArea

导出接口 · 源码第 29 行。

```ts
export interface UtopiaArea {
    id: string;
    owner: string;
    source: string;
    kind: 'smoke' | 'wall' | 'dome' | 'mine' | 'artillery' | 'anchor';
    cells: {
        x: number;
        y: number;
    }[];
    z: number;
    untilTurn: number;
    armed: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `owner` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'smoke'&#124;'wall'&#124;'dome'&#124;'mine'&#124;'artillery'&#124;'anchor'` | 见结构定义及所属功能文档 |
| `cells` | 否 | `{x:number;y:number}[]` | 见结构定义及所属功能文档 |
| `cells.[].x` | 否 | `number` | 见结构定义及所属功能文档 |
| `cells.[].y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 否 | `number` | 见结构定义及所属功能文档 |
| `untilTurn` | 否 | `number` | 见结构定义及所属功能文档 |
| `armed` | 否 | `boolean` | 见结构定义及所属功能文档 |

## UtopiaBattle

导出接口 · 源码第 30 行。

```ts
export interface UtopiaBattle {
    version: 1;
    sceneId: string;
    phase: 'deployment' | 'active' | 'ended';
    round: number;
    turn: number;
    side: 'pc' | 'npc';
    lastSide: 'pc' | 'npc';
    active: string | null;
    units: UtopiaTurn[];
    queue: UtopiaStep[];
    pending?: UtopiaDecision;
    log: {
        id: string;
        text: string;
        at: number;
    }[];
    scanned: string[];
    areas?: UtopiaArea[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `phase` | 否 | `'deployment'&#124;'active'&#124;'ended'` | 见结构定义及所属功能文档 |
| `round` | 否 | `number` | 见结构定义及所属功能文档 |
| `turn` | 否 | `number` | 见结构定义及所属功能文档 |
| `side` | 否 | `'pc'&#124;'npc'` | 见结构定义及所属功能文档 |
| `lastSide` | 否 | `'pc'&#124;'npc'` | 见结构定义及所属功能文档 |
| `active` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `units` | 否 | `UtopiaTurn[]` | 见结构定义及所属功能文档 |
| `queue` | 否 | `UtopiaStep[]` | 见结构定义及所属功能文档 |
| `pending` | 是 | `UtopiaDecision` | 见结构定义及所属功能文档 |
| `log` | 否 | `{id:string;text:string;at:number}[]` | 见结构定义及所属功能文档 |
| `log.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `log.[].text` | 否 | `string` | 见结构定义及所属功能文档 |
| `log.[].at` | 否 | `number` | 见结构定义及所属功能文档 |
| `scanned` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `areas` | 是 | `UtopiaArea[]` | 见结构定义及所属功能文档 |

## UtopiaIntent

导出接口 · 源码第 31 行。

```ts
export type UtopiaIntent = {
    type: 'create';
    actor: string;
    name: string;
    kind?: 'pc' | 'npc' | 'monster';
    preset?: string;
    npc?: string;
    tier?: 1 | 2 | 3;
    ownerId?: string;
} | {
    type: 'reinforce';
    tokens: string[];
} | {
    type: 'prepare';
    tokens: string[];
} | {
    type: 'start';
} | {
    type: 'activate';
    token: string;
} | {
    type: 'endTurn';
} | {
    type: 'endBattle';
} | {
    type: 'move';
    token: string;
    x: number;
    y: number;
    z: number;
    path?: {
        x: number;
        y: number;
        z: number;
    }[];
    mode?: 'walk' | 'fly' | 'jump';
} | {
    type: 'act';
    token: string;
    action: string;
    targets?: string[];
    equipment?: string[];
    choice?: string;
    point?: {
        x: number;
        y: number;
        z: number;
    };
    overload?: boolean;
    friendly?: boolean;
    free?: boolean;
    lockon?: boolean;
    accuracy?: number;
    difficulty?: number;
} | {
    type: 'decide';
    id: string;
    choice: string;
} | {
    type: 'pauseDecision';
    id: string;
} | {
    type: 'decisionTimeout';
    id: string;
} | {
    type: 'damage';
    targets: string[];
    amount: number;
    damageType: UtopiaDamage;
    ap?: boolean;
} | {
    type: 'condition';
    targets: string[];
    condition: UtopiaCondition;
    add: boolean;
} | {
    type: 'ruling';
    actor: string;
    reason: string;
    resources?: Partial<UtopiaResources>;
    conditions?: UtopiaCondition[];
    quick?: number;
    movement?: number;
} | {
    type: 'rest';
    actors: string[];
    mode: 'cooldown' | 'hp' | 'structure' | 'power' | 'erosion' | 'refit' | 'rebuild' | 'equipment';
    equipment?: string;
    confirmed: boolean;
} | {
    type: 'build';
    actor: string;
    character: UtopiaCharacter;
    initialize?: boolean;
    name?: string;
    notes?: string;
    ownerId?: string;
    public?: boolean;
} | {
    type: 'roll';
    actor: string;
    skill: string;
    dc: number;
    accuracy: number;
    difficulty: number;
    dangerous?: boolean;
} | {
    type: 'interact';
    token: string;
    object: string;
    action: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'create'` | 见结构定义及所属功能文档 |
| `分支1.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.kind` | 是 | `'pc'&#124;'npc'&#124;'monster'` | 见结构定义及所属功能文档 |
| `分支1.preset` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支1.npc` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支1.tier` | 是 | `1&#124;2&#124;3` | 见结构定义及所属功能文档 |
| `分支1.ownerId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'reinforce'` | 见结构定义及所属功能文档 |
| `分支2.tokens` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'prepare'` | 见结构定义及所属功能文档 |
| `分支3.tokens` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支4.type` | 否 | `'start'` | 见结构定义及所属功能文档 |
| `分支5.type` | 否 | `'activate'` | 见结构定义及所属功能文档 |
| `分支5.token` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.type` | 否 | `'endTurn'` | 见结构定义及所属功能文档 |
| `分支7.type` | 否 | `'endBattle'` | 见结构定义及所属功能文档 |
| `分支8.type` | 否 | `'move'` | 见结构定义及所属功能文档 |
| `分支8.token` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支8.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支8.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支8.path` | 是 | `{x:number;y:number;z:number}[]` | 见结构定义及所属功能文档 |
| `分支8.path.[].x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支8.path.[].y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支8.path.[].z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支8.mode` | 是 | `'walk'&#124;'fly'&#124;'jump'` | 见结构定义及所属功能文档 |
| `分支9.type` | 否 | `'act'` | 见结构定义及所属功能文档 |
| `分支9.token` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.action` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.targets` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支9.equipment` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支9.choice` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支9.point` | 是 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `分支9.point.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支9.point.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支9.point.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支9.overload` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支9.friendly` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支9.free` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支9.lockon` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支9.accuracy` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支9.difficulty` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支10.type` | 否 | `'decide'` | 见结构定义及所属功能文档 |
| `分支10.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支10.choice` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支11.type` | 否 | `'pauseDecision'` | 见结构定义及所属功能文档 |
| `分支11.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支12.type` | 否 | `'decisionTimeout'` | 见结构定义及所属功能文档 |
| `分支12.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支13.type` | 否 | `'damage'` | 见结构定义及所属功能文档 |
| `分支13.targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支13.amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支13.damageType` | 否 | `UtopiaDamage` | 见结构定义及所属功能文档 |
| `分支13.ap` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支14.type` | 否 | `'condition'` | 见结构定义及所属功能文档 |
| `分支14.targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支14.condition` | 否 | `UtopiaCondition` | 见结构定义及所属功能文档 |
| `分支14.add` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支15.type` | 否 | `'ruling'` | 见结构定义及所属功能文档 |
| `分支15.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支15.reason` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支15.resources` | 是 | `Partial<UtopiaResources>` | 见结构定义及所属功能文档 |
| `分支15.conditions` | 是 | `UtopiaCondition[]` | 见结构定义及所属功能文档 |
| `分支15.quick` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支15.movement` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支16.type` | 否 | `'rest'` | 见结构定义及所属功能文档 |
| `分支16.actors` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支16.mode` | 否 | `'cooldown'&#124;'hp'&#124;'structure'&#124;'power'&#124;'erosion'&#124;'refit'&#124;'rebuild'&#124;'equipment'` | 见结构定义及所属功能文档 |
| `分支16.equipment` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支16.confirmed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支17.type` | 否 | `'build'` | 见结构定义及所属功能文档 |
| `分支17.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支17.character` | 否 | `UtopiaCharacter` | 见结构定义及所属功能文档 |
| `分支17.initialize` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支17.name` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支17.notes` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支17.ownerId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支17.public` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支18.type` | 否 | `'roll'` | 见结构定义及所属功能文档 |
| `分支18.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支18.skill` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支18.dc` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支18.accuracy` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支18.difficulty` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支18.dangerous` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支19.type` | 否 | `'interact'` | 见结构定义及所属功能文档 |
| `分支19.token` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支19.object` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支19.action` | 否 | `string` | 见结构定义及所属功能文档 |

## parseUtopiaCharacter

导出接口 · 源码第 53 行。

```ts
export function parseUtopiaCharacter(raw: unknown): UtopiaCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseUtopiaIntent

导出接口 · 源码第 63 行。

```ts
export function parseUtopiaIntent(raw: unknown): UtopiaIntent;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseUtopiaStep

导出接口 · 源码第 82 行。

```ts
export function parseUtopiaStep(raw: unknown): UtopiaStep;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseUtopiaBattle

导出接口 · 源码第 93 行。

State is authored by the authority; validating it also protects imported saves.

```ts
export function parseUtopiaBattle(raw: unknown): UtopiaBattle;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## projectUtopiaBattle

导出接口 · 源码第 102 行。

```ts
export function projectUtopiaBattle(b: UtopiaBattle, visible: ReadonlySet<string>, controlled: ReadonlySet<string>): UtopiaBattle;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `UtopiaBattle` | — |
| `visible` | 否 | `ReadonlySet<string>` | — |
| `controlled` | 否 | `ReadonlySet<string>` | — |
