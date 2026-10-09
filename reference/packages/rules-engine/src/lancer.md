# game/packages/rules-engine/src/lancer.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerEquipmentAutomation} from '@aelzerant/contracts';
```
</details>

## LancerStat

导出接口 · 源码第 10 行。

```ts
export type LancerStat = typeof LANCER_STATS[number][0];
```

## LancerBase

导出接口 · 源码第 11 行。

```ts
export type LancerBase = Record<LancerStat, number>;
```

## LancerModifiers

导出接口 · 源码第 12 行。

```ts
export type LancerModifiers = Partial<LancerBase & {
    attack: number;
    limited: number;
}>;
```

## LancerSkills

导出接口 · 源码第 13 行。

```ts
export interface LancerSkills {
    hull: number;
    agility: number;
    systems: number;
    engineering: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `hull` | 否 | `number` | 见结构定义及所属功能文档 |
| `agility` | 否 | `number` | 见结构定义及所属功能文档 |
| `systems` | 否 | `number` | 见结构定义及所属功能文档 |
| `engineering` | 否 | `number` | 见结构定义及所属功能文档 |

## LancerBuild

导出接口 · 源码第 14 行。

```ts
export interface LancerBuild {
    level: number;
    skills: LancerSkills;
    base: LancerBase;
    modifiers: LancerModifiers;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `level` | 否 | `number` | 见结构定义及所属功能文档 |
| `skills` | 否 | `LancerSkills` | 见结构定义及所属功能文档 |
| `base` | 否 | `LancerBase` | 见结构定义及所属功能文档 |
| `modifiers` | 否 | `LancerModifiers` | 见结构定义及所属功能文档 |

## LancerStatResult

导出接口 · 源码第 15 行。

```ts
export interface LancerStatResult {
    value: number;
    source: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `value` | 否 | `number` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |

## LancerStats

导出接口 · 源码第 16 行。

```ts
export type LancerStats = Record<LancerStat | 'attack' | 'limited', LancerStatResult>;
```

## lancerGrowth

导出接口 · 源码第 18 行。

```ts
export function lancerGrowth(level: number): { grit: number; skills: number; talents: number; licenses: number; coreBonuses: number; triggerPoints: number; pilotHp: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `level` | 否 | `number` | — |

## calculateLancer

导出接口 · 源码第 22 行。

```ts
export function calculateLancer(build: LancerBuild): { growth: ReturnType<typeof lancerGrowth>; stats: LancerStats; warnings: string[] };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `build` | 否 | `LancerBuild` | — |

## LancerMount

导出接口 · 源码第 57 行。

```ts
export type LancerMount = keyof typeof LANCER_MOUNTS;
```

## LancerWeaponSize

导出接口 · 源码第 59 行。

```ts
export type LancerWeaponSize = keyof typeof LANCER_WEAPON_SIZES;
```

## LancerEquipment

导出接口 · 源码第 60 行。

```ts
export interface LancerEquipment {
    name: string;
    sp: number;
    limited: number;
    used: number;
    notes: string;
    resourceId?: string;
    automation?: LancerEquipmentAutomation;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `sp` | 否 | `number` | 见结构定义及所属功能文档 |
| `limited` | 否 | `number` | 见结构定义及所属功能文档 |
| `used` | 否 | `number` | 见结构定义及所属功能文档 |
| `notes` | 否 | `string` | 见结构定义及所属功能文档 |
| `resourceId` | 是 | `string` | 见结构定义及所属功能文档 |
| `automation` | 是 | `LancerEquipmentAutomation` | 见结构定义及所属功能文档 |

## LancerWeapon

导出接口 · 源码第 61 行。

```ts
export interface LancerWeapon extends LancerEquipment {
    size: LancerWeaponSize;
    mount: number;
    brace: number;
    damage: string;
    range: string;
    tags: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `size` | 否 | `LancerWeaponSize` | 见结构定义及所属功能文档 |
| `mount` | 否 | `number` | 见结构定义及所属功能文档 |
| `brace` | 否 | `number` | 见结构定义及所属功能文档 |
| `damage` | 否 | `string` | 见结构定义及所属功能文档 |
| `range` | 否 | `string` | 见结构定义及所属功能文档 |
| `tags` | 否 | `string` | 见结构定义及所属功能文档 |

## checkLancerLoadout

导出接口 · 源码第 62 行。

```ts
export function checkLancerLoadout(mounts: LancerMount[], weapons: LancerWeapon[], systems: LancerEquipment[], capacity: number): { spent: number; remaining: number; warnings: string[]; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `mounts` | 否 | `LancerMount[]` | — |
| `weapons` | 否 | `LancerWeapon[]` | — |
| `systems` | 否 | `LancerEquipment[]` | — |
| `capacity` | 否 | `number` | — |

## LANCER_OVERCHARGE

导出接口 · 源码第 88 行。

```ts
export const LANCER_OVERCHARGE = ['1', '1d3', '1d6', '1d6+4'] as const;
```
