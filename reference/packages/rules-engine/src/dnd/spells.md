# game/packages/rules-engine/src/dnd/spells.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { DndAbility, DndDamageType, DndCondition } from '@aelzerant/contracts';
import type {DndEntry} from './catalog-types';
```
</details>

## DndSpellExecutor

导出接口 · 源码第 4 行。

Explicit reviewed profiles. Other text is never silently interpreted as an effect.

```ts
export interface DndSpellExecutor {
    zoneDamage?: boolean;
    moveZone?: {
        feet: number;
        teleport: boolean;
    };
    humanoid?: boolean;
    effect?: boolean;
    melee?: boolean;
    sight?: boolean;
    perceived?: boolean;
    selfArea?: boolean;
    selectAreaTargets?: boolean;
    woundedSides?: number;
    flat?: number;
    flatPerSlot?: number;
    stable?: boolean;
    temporary?: boolean;
    targetPerSlot?: number;
    rangeDoubles?: boolean;
    objects?: boolean;
    area?: {
        shape: 'sphere' | 'cone' | 'line' | 'rectangle' | 'cube' | 'cylinder';
        size: number;
        height?: number;
    };
    self?: boolean;
    field?: 'antimagic' | 'globe';
    auraFeet?: number;
    duration?: number;
    concentration?: boolean;
    buffSave?: DndAbility;
    kind: 'attack' | 'save' | 'heal' | 'missile' | 'buff' | 'restore' | 'aura' | 'zone' | 'dispel' | 'lights';
    dice: number;
    sides: number;
    damageType?: DndDamageType;
    ability?: DndAbility;
    half?: boolean;
    addAbility?: boolean;
    upcast: number;
    range: number;
    maxTargets: number;
    cantrip?: boolean;
    rays?: boolean;
    rayCount?: {
        base: number;
        perSlot: number;
    };
    removes?: DndCondition[];
    bonus?: boolean;
    note?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `zoneDamage` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `moveZone` | 是 | `{feet:number;teleport:boolean}` | 见结构定义及所属功能文档 |
| `moveZone.feet` | 否 | `number` | 见结构定义及所属功能文档 |
| `moveZone.teleport` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `humanoid` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `effect` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `melee` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `sight` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `perceived` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `selfArea` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `selectAreaTargets` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `woundedSides` | 是 | `number` | 见结构定义及所属功能文档 |
| `flat` | 是 | `number` | 见结构定义及所属功能文档 |
| `flatPerSlot` | 是 | `number` | 见结构定义及所属功能文档 |
| `stable` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `temporary` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `targetPerSlot` | 是 | `number` | 见结构定义及所属功能文档 |
| `rangeDoubles` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `objects` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `area` | 是 | `{shape:'sphere'&#124;'cone'&#124;'line'&#124;'rectangle'&#124;'cube'&#124;'cylinder';size:number;height?:number}` | 见结构定义及所属功能文档 |
| `area.shape` | 否 | `'sphere'&#124;'cone'&#124;'line'&#124;'rectangle'&#124;'cube'&#124;'cylinder'` | 见结构定义及所属功能文档 |
| `area.size` | 否 | `number` | 见结构定义及所属功能文档 |
| `area.height` | 是 | `number` | 见结构定义及所属功能文档 |
| `self` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `field` | 是 | `'antimagic'&#124;'globe'` | 见结构定义及所属功能文档 |
| `auraFeet` | 是 | `number` | 见结构定义及所属功能文档 |
| `duration` | 是 | `number` | 见结构定义及所属功能文档 |
| `concentration` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `buffSave` | 是 | `DndAbility` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'attack'&#124;'save'&#124;'heal'&#124;'missile'&#124;'buff'&#124;'restore'&#124;'aura'&#124;'zone'&#124;'dispel'&#124;'lights'` | 见结构定义及所属功能文档 |
| `dice` | 否 | `number` | 见结构定义及所属功能文档 |
| `sides` | 否 | `number` | 见结构定义及所属功能文档 |
| `damageType` | 是 | `DndDamageType` | 见结构定义及所属功能文档 |
| `ability` | 是 | `DndAbility` | 见结构定义及所属功能文档 |
| `half` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `addAbility` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `upcast` | 否 | `number` | 见结构定义及所属功能文档 |
| `range` | 否 | `number` | 见结构定义及所属功能文档 |
| `maxTargets` | 否 | `number` | 见结构定义及所属功能文档 |
| `cantrip` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `rays` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `rayCount` | 是 | `{base:number;perSlot:number}` | 见结构定义及所属功能文档 |
| `rayCount.base` | 否 | `number` | 见结构定义及所属功能文档 |
| `rayCount.perSlot` | 否 | `number` | 见结构定义及所属功能文档 |
| `removes` | 是 | `DndCondition[]` | 见结构定义及所属功能文档 |
| `bonus` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `note` | 是 | `string` | 见结构定义及所属功能文档 |

## dndSpellRayCount

导出接口 · 源码第 80 行。

```ts
export function dndSpellRayCount(entry: DndEntry, slot: number, level: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `entry` | 否 | `DndEntry` | — |
| `slot` | 否 | `number` | — |
| `level` | 否 | `number` | — |

## dndSpellTargets

导出接口 · 源码第 93 行。

```ts
export function dndSpellTargets(entry: DndEntry, slot: number, level: number): { self: boolean; max: number; range: number; humanoid: boolean; area: boolean; } | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `entry` | 否 | `DndEntry` | — |
| `slot` | 否 | `number` | — |
| `level` | 否 | `number` | — |

## dndSpellCoverage

导出接口 · 源码第 104 行。

```ts
export function dndSpellCoverage(english: string): { status: "partial"; label: string; note: string; } | { status: "reference"; label: string; note: string; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `english` | 否 | `string` | — |

## dndSpellCanTargetObjects

导出接口 · 源码第 107 行。

Reviewed object targeting; effect automation remains an independent capability.

```ts
export const dndSpellCanTargetObjects: (entry: DndEntry): boolean;
```
