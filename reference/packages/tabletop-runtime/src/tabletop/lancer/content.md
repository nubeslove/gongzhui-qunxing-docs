# game/packages/tabletop-runtime/src/tabletop/lancer/content.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualActor} from '@aelzerant/contracts';
import {LANCER_TALENTS,LANCER_CORE_BONUSES,type LancerCoreDefinition,type LancerTraining} from '@aelzerant/rules-engine';
import data from './data/content-registry.json';
```
</details>

## ALL_CORE

导出接口 · 源码第 6 行。

```ts
export const ALL_CORE: (LancerCoreDefinition & {
    book: string;
})[];
```

## EquipmentAccess

导出接口 · 源码第 10 行。

```ts
export type EquipmentAccess = {
    category: string;
    book: string;
    licenseId?: string;
    rank?: number;
    frameId?: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `category` | 否 | `string` | 见结构定义及所属功能文档 |
| `book` | 否 | `string` | 见结构定义及所属功能文档 |
| `licenseId` | 是 | `string` | 见结构定义及所属功能文档 |
| `rank` | 是 | `number` | 见结构定义及所属功能文档 |
| `frameId` | 是 | `string` | 见结构定义及所属功能文档 |

## EQUIPMENT_ACCESS

导出接口 · 源码第 11 行。

```ts
export const EQUIPMENT_ACCESS: Record<string, EquipmentAccess>;
```

## bookName

导出接口 · 源码第 12 行。

```ts
export const bookName: (id: string): string;
```

## bookType

导出接口 · 源码第 13 行。

```ts
export const bookType: (id: string): string;
```

## contentPacks

导出接口 · 源码第 14 行。

```ts
export function contentPacks(a: ManualActor): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |

## packEnabled

导出接口 · 源码第 20 行。

```ts
export function packEnabled(a: ManualActor, book: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |
| `book` | 否 | `string` | — |

## worldContentPacks

导出接口 · 源码第 22 行。

World-level rule scope: the packs the GM enabled when creating the world (story.packs).

```ts
export function worldContentPacks(table: {story?:{packs?:readonly {id:string;enabled:boolean}[]}}): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `{story?:{packs?:readonly {id:string;enabled:boolean}[]}}` | — |

## ownedLicenses

导出接口 · 源码第 27 行。

```ts
export function ownedLicenses(a: ManualActor): {id:string;rank:number}[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |

## licensePrerequisite

导出接口 · 源码第 28 行。

```ts
export function licensePrerequisite(a: ManualActor, id: string): string|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |
| `id` | 否 | `string` | — |

## equipmentAvailability

导出接口 · 源码第 33 行。

```ts
export function equipmentAvailability(a: ManualActor, id: string): {allowed:boolean;label:string};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |
| `id` | 否 | `string` | — |

## ExtraTrigger

导出接口 · 源码第 45 行。

```ts
export type ExtraTrigger = {
    name: string;
    bonus: number;
    reason: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `bonus` | 否 | `number` | 见结构定义及所属功能文档 |
| `reason` | 否 | `string` | 见结构定义及所属功能文档 |

## ExtraTalent

导出接口 · 源码第 46 行。

```ts
export type ExtraTalent = {
    id: string;
    rank: number;
    reason: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `rank` | 否 | `number` | 见结构定义及所属功能文档 |
| `reason` | 否 | `string` | 见结构定义及所属功能文档 |

## extraTriggers

导出接口 · 源码第 48 行。

```ts
export function extraTriggers(a: ManualActor): ExtraTrigger[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |

## extraTalents

导出接口 · 源码第 49 行。

```ts
export function extraTalents(a: ManualActor): ExtraTalent[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |

## grantIssues

导出接口 · 源码第 50 行。

```ts
export function grantIssues(a: ManualActor, base: LancerTraining): {skills:string[];talents:string[]};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |
| `base` | 否 | `LancerTraining` | — |

## effectiveTraining

导出接口 · 源码第 56 行。

```ts
export function effectiveTraining(a: ManualActor, base: LancerTraining): LancerTraining;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |
| `base` | 否 | `LancerTraining` | — |
