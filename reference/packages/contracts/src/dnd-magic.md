# game/packages/contracts/src/dnd-magic.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndCharacter,DndIntent,DndPending,DndMovePlan,DndDamageType} from './dnd';
```
</details>

## DndSorceryState

导出接口 · 源码第 2 行。

```ts
export interface DndSorceryState {
    metamagic?: string[];
    createdSlots?: number[];
    innate?: {
        remainingSeconds: number;
        updatedAt: number;
        outsideCombat: boolean;
        crown: boolean;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `metamagic` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `createdSlots` | 是 | `number[]` | 见结构定义及所属功能文档 |
| `innate` | 是 | `{remainingSeconds:number;updatedAt:number;outsideCombat:boolean;crown:boolean}` | 见结构定义及所属功能文档 |
| `innate.remainingSeconds` | 否 | `number` | 见结构定义及所属功能文档 |
| `innate.updatedAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `innate.outsideCombat` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `innate.crown` | 否 | `boolean` | 见结构定义及所属功能文档 |

## DndCastCommand

导出接口 · 源码第 7 行。

```ts
export type DndCastCommand = Extract<DndIntent, {
    type: 'cast';
}>;
```

## DndCastFrame

导出接口 · 源码第 8 行。

```ts
export interface DndCastFrame {
    visibleTo?: string[];
    ready?: boolean;
    casting?: boolean;
    actor: string;
    spell: string;
    freeCast?: boolean;
    classId?: string;
    slot: number;
    slotType: 'spell' | 'pact';
    priorSlotSpent: boolean;
    declined: string[];
    countered?: boolean;
    effect: DndMagicJob[];
    after: DndMagicJob[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `visibleTo` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `ready` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `casting` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `spell` | 否 | `string` | 见结构定义及所属功能文档 |
| `freeCast` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `classId` | 是 | `string` | 见结构定义及所属功能文档 |
| `slot` | 否 | `number` | 见结构定义及所属功能文档 |
| `slotType` | 否 | `'spell'&#124;'pact'` | 见结构定义及所属功能文档 |
| `priorSlotSpent` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `declined` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `countered` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `effect` | 否 | `DndMagicJob[]` | 见结构定义及所属功能文档 |
| `after` | 否 | `DndMagicJob[]` | 见结构定义及所属功能文档 |

## DndDamageAddition

导出接口 · 源码第 9 行。

```ts
export interface DndDamageAddition {
    formula: string;
    damageType: DndDamageType;
    total?: number;
    faces?: number[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `formula` | 否 | `string` | 见结构定义及所属功能文档 |
| `damageType` | 否 | `DndDamageType` | 见结构定义及所属功能文档 |
| `total` | 是 | `number` | 见结构定义及所属功能文档 |
| `faces` | 是 | `number[]` | 见结构定义及所属功能文档 |

## DndMagicJob

导出接口 · 源码第 10 行。

```ts
export type DndMagicJob = {
    kind: 'willing-effect';
    actor: string;
    target: string;
    spell: string;
    slot: number;
    choice?: string;
    willing?: boolean;
} | {
    kind: 'unarmed-save';
    actor: string;
    target: string;
    action: 'grapple' | 'shove-prone' | 'shove-away';
    dc: number;
    ability?: 'str' | 'dex' | 'fail';
} | {
    kind: 'grapple-escape';
    actor: string;
    target: string;
    dc: number;
    skill?: 'athletics' | 'acrobatics';
} | {
    kind: 'resize';
    actor: string;
    target: string;
    spell: string;
    slot: number;
    choice: 'enlarge' | 'reduce';
    dc: number;
    heightened?: boolean;
    willing?: boolean;
} | {
    kind: 'fall';
    actors: string[];
    declined: string[];
} | {
    kind: 'fall-step';
    actor: string;
    feet: number;
    slow: boolean;
} | {
    kind: 'feather-fall-effect';
    actor: string;
    spell: string;
    slot: number;
    targets: string[];
} | {
    kind: 'ready-held';
    actor: string;
} | {
    kind: 'casting-progress';
    actor: string;
} | {
    kind: 'begin-turn';
} | {
    kind: 'uncanny-metabolism';
    actor: string;
} | {
    kind: 'sear-undead';
    actor: string;
    targets: string[];
} | {
    kind: 'turn-undead-effect';
    actor: string;
    targets: string[];
} | {
    kind: 'arcane-recovery';
    actor: string;
} | {
    kind: 'stunning-strike';
    actor: string;
    target: string;
} | {
    kind: 'force-push';
    actor: string;
    target: string;
} | {
    kind: 'thorn-pull';
    actor: string;
    target: string;
} | {
    kind: 'cleave-attack';
    actor: string;
    target: string;
    weapon: string;
} | {
    kind: 'mastery';
    actor: string;
    target: string;
    weapon: string;
    mastery: 'cleave' | 'push' | 'graze' | 'sap' | 'slow' | 'topple' | 'vex';
    ability: import('./dnd').DndAbility;
    before: number;
    damageType: DndDamageType;
} | {
    kind: 'redirect';
    actor: string;
    range: number;
    damageTypes: DndDamageType[];
} | {
    kind: 'reaction-end';
} | {
    kind: 'action-complete';
    actor: string;
    action: 'attack' | 'magic';
} | {
    kind: 'next-turn';
    actor: string;
} | {
    kind: 'choose-point';
    actor: string;
    source: string;
    event: 'attack' | 'magic';
    effect: {
        kind: 'teleport';
        range: number;
        requiresSight: boolean;
    };
} | {
    kind: 'cast';
    intent: DndCastCommand;
} | {
    kind: 'counter';
    frames: DndCastFrame[];
    reacted?: string[];
} | {
    kind: 'burst';
    actor: string;
} | {
    kind: 'effect-target';
    actor: string;
    effect: string;
    phase: 'created' | 'turnStart';
} | {
    kind: 'smite-effect';
    actor: string;
    target: string;
    spell: string;
    slot: number;
} | {
    kind: 'shield';
    actor: string;
    slot?: number;
} | {
    kind: 'attack';
    attack: NonNullable<DndPending['attack']>;
} | {
    kind: 'rays';
    actor: string;
    spell: string;
    slot?: number;
    rays: {
        target: string;
        formula: string;
    }[];
    classId?: string;
    empower?: boolean;
} | {
    kind: 'move';
    plan: DndMovePlan;
} | {
    kind: 'damage';
    reduced?: boolean;
    sizeReduction?: {
        face: number;
        unfloored: number;
    };
    halfDefense?: boolean;
    fall?: boolean;
    defended?: boolean;
    melee?: boolean;
    actor: string;
    spell?: string;
    label: string;
    damageType: DndDamageType;
    targets: {
        actor: string;
        factor: number;
        critical?: boolean;
    }[];
    formula: string;
    additional?: DndDamageAddition[];
    faces?: number[];
    sides?: number[];
    total?: number;
    empower?: boolean;
    attack?: boolean;
    mitigated?: boolean;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.kind` | 否 | `'willing-effect'` | 见结构定义及所属功能文档 |
| `分支1.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.spell` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.slot` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支1.choice` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支1.willing` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'unarmed-save'` | 见结构定义及所属功能文档 |
| `分支2.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.action` | 否 | `'grapple'&#124;'shove-prone'&#124;'shove-away'` | 见结构定义及所属功能文档 |
| `分支2.dc` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.ability` | 是 | `'str'&#124;'dex'&#124;'fail'` | 见结构定义及所属功能文档 |
| `分支3.kind` | 否 | `'grapple-escape'` | 见结构定义及所属功能文档 |
| `分支3.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.dc` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.skill` | 是 | `'athletics'&#124;'acrobatics'` | 见结构定义及所属功能文档 |
| `分支4.kind` | 否 | `'resize'` | 见结构定义及所属功能文档 |
| `分支4.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.spell` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.slot` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支4.choice` | 否 | `'enlarge'&#124;'reduce'` | 见结构定义及所属功能文档 |
| `分支4.dc` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支4.heightened` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支4.willing` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支5.kind` | 否 | `'fall'` | 见结构定义及所属功能文档 |
| `分支5.actors` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支5.declined` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支6.kind` | 否 | `'fall-step'` | 见结构定义及所属功能文档 |
| `分支6.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.feet` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支6.slow` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支7.kind` | 否 | `'feather-fall-effect'` | 见结构定义及所属功能文档 |
| `分支7.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.spell` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.slot` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支7.targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支8.kind` | 否 | `'ready-held'` | 见结构定义及所属功能文档 |
| `分支8.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.kind` | 否 | `'casting-progress'` | 见结构定义及所属功能文档 |
| `分支9.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支10.kind` | 否 | `'begin-turn'` | 见结构定义及所属功能文档 |
| `分支11.kind` | 否 | `'uncanny-metabolism'` | 见结构定义及所属功能文档 |
| `分支11.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支12.kind` | 否 | `'sear-undead'` | 见结构定义及所属功能文档 |
| `分支12.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支12.targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支13.kind` | 否 | `'turn-undead-effect'` | 见结构定义及所属功能文档 |
| `分支13.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支13.targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支14.kind` | 否 | `'arcane-recovery'` | 见结构定义及所属功能文档 |
| `分支14.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支15.kind` | 否 | `'stunning-strike'` | 见结构定义及所属功能文档 |
| `分支15.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支15.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支16.kind` | 否 | `'force-push'` | 见结构定义及所属功能文档 |
| `分支16.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支16.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支17.kind` | 否 | `'thorn-pull'` | 见结构定义及所属功能文档 |
| `分支17.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支17.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支18.kind` | 否 | `'cleave-attack'` | 见结构定义及所属功能文档 |
| `分支18.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支18.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支18.weapon` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支19.kind` | 否 | `'mastery'` | 见结构定义及所属功能文档 |
| `分支19.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支19.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支19.weapon` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支19.mastery` | 否 | `'cleave'&#124;'push'&#124;'graze'&#124;'sap'&#124;'slow'&#124;'topple'&#124;'vex'` | 见结构定义及所属功能文档 |
| `分支19.ability` | 否 | `import('./dnd').DndAbility` | 见结构定义及所属功能文档 |
| `分支19.before` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支19.damageType` | 否 | `DndDamageType` | 见结构定义及所属功能文档 |
| `分支20.kind` | 否 | `'redirect'` | 见结构定义及所属功能文档 |
| `分支20.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支20.range` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支20.damageTypes` | 否 | `DndDamageType[]` | 见结构定义及所属功能文档 |
| `分支21.kind` | 否 | `'reaction-end'` | 见结构定义及所属功能文档 |
| `分支22.kind` | 否 | `'action-complete'` | 见结构定义及所属功能文档 |
| `分支22.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支22.action` | 否 | `'attack'&#124;'magic'` | 见结构定义及所属功能文档 |
| `分支23.kind` | 否 | `'next-turn'` | 见结构定义及所属功能文档 |
| `分支23.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支24.kind` | 否 | `'choose-point'` | 见结构定义及所属功能文档 |
| `分支24.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支24.source` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支24.event` | 否 | `'attack'&#124;'magic'` | 见结构定义及所属功能文档 |
| `分支24.effect` | 否 | `{kind:'teleport';range:number;requiresSight:boolean}` | 见结构定义及所属功能文档 |
| `分支24.effect.kind` | 否 | `'teleport'` | 见结构定义及所属功能文档 |
| `分支24.effect.range` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支24.effect.requiresSight` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支25.kind` | 否 | `'cast'` | 见结构定义及所属功能文档 |
| `分支25.intent` | 否 | `DndCastCommand` | 见结构定义及所属功能文档 |
| `分支26.kind` | 否 | `'counter'` | 见结构定义及所属功能文档 |
| `分支26.frames` | 否 | `DndCastFrame[]` | 见结构定义及所属功能文档 |
| `分支26.reacted` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支27.kind` | 否 | `'burst'` | 见结构定义及所属功能文档 |
| `分支27.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支28.kind` | 否 | `'effect-target'` | 见结构定义及所属功能文档 |
| `分支28.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支28.effect` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支28.phase` | 否 | `'created'&#124;'turnStart'` | 见结构定义及所属功能文档 |
| `分支29.kind` | 否 | `'smite-effect'` | 见结构定义及所属功能文档 |
| `分支29.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支29.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支29.spell` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支29.slot` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支30.kind` | 否 | `'shield'` | 见结构定义及所属功能文档 |
| `分支30.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支30.slot` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支31.kind` | 否 | `'attack'` | 见结构定义及所属功能文档 |
| `分支31.attack` | 否 | `NonNullable<DndPending['attack']>` | 见结构定义及所属功能文档 |
| `分支32.kind` | 否 | `'rays'` | 见结构定义及所属功能文档 |
| `分支32.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支32.spell` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支32.slot` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支32.rays` | 否 | `{target:string;formula:string}[]` | 见结构定义及所属功能文档 |
| `分支32.rays.[].target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支32.rays.[].formula` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支32.classId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支32.empower` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支33.kind` | 否 | `'move'` | 见结构定义及所属功能文档 |
| `分支33.plan` | 否 | `DndMovePlan` | 见结构定义及所属功能文档 |
| `分支34.kind` | 否 | `'damage'` | 见结构定义及所属功能文档 |
| `分支34.reduced` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支34.sizeReduction` | 是 | `{face:number;unfloored:number}` | 见结构定义及所属功能文档 |
| `分支34.sizeReduction.face` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支34.sizeReduction.unfloored` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支34.halfDefense` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支34.fall` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支34.defended` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支34.melee` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支34.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支34.spell` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支34.label` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支34.damageType` | 否 | `DndDamageType` | 见结构定义及所属功能文档 |
| `分支34.targets` | 否 | `{actor:string;factor:number;critical?:boolean}[]` | 见结构定义及所属功能文档 |
| `分支34.targets.[].actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支34.targets.[].factor` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支34.targets.[].critical` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支34.formula` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支34.additional` | 是 | `DndDamageAddition[]` | 见结构定义及所属功能文档 |
| `分支34.faces` | 是 | `number[]` | 见结构定义及所属功能文档 |
| `分支34.sides` | 是 | `number[]` | 见结构定义及所属功能文档 |
| `分支34.total` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支34.empower` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支34.attack` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支34.mitigated` | 是 | `boolean` | 见结构定义及所属功能文档 |

## DndMagicPrompt

导出接口 · 源码第 45 行。

```ts
export interface DndMagicPrompt {
    targets?: string[];
    target?: string;
    weapon?: string;
    range?: number;
    kind: 'willing-effect' | 'resize' | 'feather-fall' | 'arcane-recovery' | 'cleave' | 'mastery' | 'attack-defense' | 'redirect' | 'burst' | 'counter' | 'empower' | 'burning' | 'effect-target' | 'choose-point';
    source?: string;
    event?: 'attack' | 'magic';
    pointEffect?: {
        kind: 'teleport';
        range: number;
        requiresSight: boolean;
    };
    effect?: string;
    phase?: 'created' | 'turnStart';
    actor: string;
    dice?: number[];
    max?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `targets` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `target` | 是 | `string` | 见结构定义及所属功能文档 |
| `weapon` | 是 | `string` | 见结构定义及所属功能文档 |
| `range` | 是 | `number` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'willing-effect'&#124;'resize'&#124;'feather-fall'&#124;'arcane-recovery'&#124;'cleave'&#124;'mastery'&#124;'attack-defense'&#124;'redirect'&#124;'burst'&#124;'counter'&#124;'empower'&#124;'burning'&#124;'effect-target'&#124;'choose-point'` | 见结构定义及所属功能文档 |
| `source` | 是 | `string` | 见结构定义及所属功能文档 |
| `event` | 是 | `'attack'&#124;'magic'` | 见结构定义及所属功能文档 |
| `pointEffect` | 是 | `{kind:'teleport';range:number;requiresSight:boolean}` | 见结构定义及所属功能文档 |
| `pointEffect.kind` | 否 | `'teleport'` | 见结构定义及所属功能文档 |
| `pointEffect.range` | 否 | `number` | 见结构定义及所属功能文档 |
| `pointEffect.requiresSight` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `effect` | 是 | `string` | 见结构定义及所属功能文档 |
| `phase` | 是 | `'created'&#124;'turnStart'` | 见结构定义及所属功能文档 |
| `actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `dice` | 是 | `number[]` | 见结构定义及所属功能文档 |
| `max` | 是 | `number` | 见结构定义及所属功能文档 |

## DndMagicPending

导出接口 · 源码第 46 行。

```ts
export interface DndMagicPending {
    prompt: DndMagicPrompt;
    jobs: DndMagicJob[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `prompt` | 否 | `DndMagicPrompt` | 见结构定义及所属功能文档 |
| `jobs` | 否 | `DndMagicJob[]` | 见结构定义及所属功能文档 |

## parseDndSorcery

导出接口 · 源码第 53 行。

```ts
export function parseDndSorcery(v: unknown): DndSorceryState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |

## parseDndPointEffect

导出接口 · 源码第 54 行。

```ts
export function parseDndPointEffect(v: unknown): { kind: "teleport"; range: number; requiresSight: boolean; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |

## parseDndMagicPrompt

导出接口 · 源码第 56 行。

```ts
export function parseDndMagicPrompt(v: unknown): DndMagicPrompt;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |

## parseDndMagic

导出接口 · 源码第 58 行。

Only host-created continuations are saved here. Parse all branches on reload, never client costs.

```ts
export function parseDndMagic(v: unknown, parsePending: (v:unknown)=>DndPending): DndMagicPending;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |
| `parsePending` | 否 | `(v:unknown)=>DndPending` | — |
