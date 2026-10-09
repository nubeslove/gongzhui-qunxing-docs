# game/packages/contracts/src/dnd-magic.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

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
    actor: string;
    spell: string;
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
| `actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `spell` | 否 | `string` | 见结构定义及所属功能文档 |
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
| `分支1.kind` | 否 | `'action-complete'` | 见结构定义及所属功能文档 |
| `分支1.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.action` | 否 | `'attack'&#124;'magic'` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'next-turn'` | 见结构定义及所属功能文档 |
| `分支2.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.kind` | 否 | `'choose-point'` | 见结构定义及所属功能文档 |
| `分支3.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.source` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.event` | 否 | `'attack'&#124;'magic'` | 见结构定义及所属功能文档 |
| `分支3.effect` | 否 | `{kind:'teleport';range:number;requiresSight:boolean}` | 见结构定义及所属功能文档 |
| `分支3.effect.kind` | 否 | `'teleport'` | 见结构定义及所属功能文档 |
| `分支3.effect.range` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.effect.requiresSight` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支4.kind` | 否 | `'cast'` | 见结构定义及所属功能文档 |
| `分支4.intent` | 否 | `DndCastCommand` | 见结构定义及所属功能文档 |
| `分支5.kind` | 否 | `'counter'` | 见结构定义及所属功能文档 |
| `分支5.frames` | 否 | `DndCastFrame[]` | 见结构定义及所属功能文档 |
| `分支5.reacted` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `分支6.kind` | 否 | `'burst'` | 见结构定义及所属功能文档 |
| `分支6.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.kind` | 否 | `'effect-target'` | 见结构定义及所属功能文档 |
| `分支7.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.effect` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.phase` | 否 | `'created'&#124;'turnStart'` | 见结构定义及所属功能文档 |
| `分支8.kind` | 否 | `'shield'` | 见结构定义及所属功能文档 |
| `分支8.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.slot` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支9.kind` | 否 | `'attack'` | 见结构定义及所属功能文档 |
| `分支9.attack` | 否 | `NonNullable<DndPending['attack']>` | 见结构定义及所属功能文档 |
| `分支10.kind` | 否 | `'rays'` | 见结构定义及所属功能文档 |
| `分支10.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支10.spell` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支10.slot` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支10.rays` | 否 | `{target:string;formula:string}[]` | 见结构定义及所属功能文档 |
| `分支10.rays.[].target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支10.rays.[].formula` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支10.classId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支10.empower` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支11.kind` | 否 | `'move'` | 见结构定义及所属功能文档 |
| `分支11.plan` | 否 | `DndMovePlan` | 见结构定义及所属功能文档 |
| `分支12.kind` | 否 | `'damage'` | 见结构定义及所属功能文档 |
| `分支12.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支12.spell` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支12.label` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支12.damageType` | 否 | `DndDamageType` | 见结构定义及所属功能文档 |
| `分支12.targets` | 否 | `{actor:string;factor:number;critical?:boolean}[]` | 见结构定义及所属功能文档 |
| `分支12.targets.[].actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支12.targets.[].factor` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支12.targets.[].critical` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支12.formula` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支12.additional` | 是 | `DndDamageAddition[]` | 见结构定义及所属功能文档 |
| `分支12.faces` | 是 | `number[]` | 见结构定义及所属功能文档 |
| `分支12.sides` | 是 | `number[]` | 见结构定义及所属功能文档 |
| `分支12.total` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支12.empower` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支12.attack` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支12.mitigated` | 是 | `boolean` | 见结构定义及所属功能文档 |

## DndMagicPrompt

导出接口 · 源码第 23 行。

```ts
export interface DndMagicPrompt {
    kind: 'burst' | 'counter' | 'empower' | 'burning' | 'effect-target' | 'choose-point';
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
| `kind` | 否 | `'burst'&#124;'counter'&#124;'empower'&#124;'burning'&#124;'effect-target'&#124;'choose-point'` | 见结构定义及所属功能文档 |
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

导出接口 · 源码第 24 行。

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

导出接口 · 源码第 31 行。

```ts
export function parseDndSorcery(v: unknown): DndSorceryState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |

## parseDndPointEffect

导出接口 · 源码第 32 行。

```ts
export function parseDndPointEffect(v: unknown): { kind: "teleport"; range: number; requiresSight: boolean; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |

## parseDndMagicPrompt

导出接口 · 源码第 34 行。

```ts
export function parseDndMagicPrompt(v: unknown): DndMagicPrompt;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |

## parseDndMagic

导出接口 · 源码第 36 行。

Only host-created continuations are saved here. Parse all branches on reload, never client costs.

```ts
export function parseDndMagic(v: unknown, parsePending: (v:unknown)=>DndPending): DndMagicPending;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |
| `parsePending` | 否 | `(v:unknown)=>DndPending` | — |
