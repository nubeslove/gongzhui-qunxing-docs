# game/packages/rules-engine/src/utopia/index.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {UtopiaCharacter,UtopiaDamage,UtopiaEquipment,UtopiaResources,UtopiaStats} from '@aelzerant/contracts';
import catalog from './catalog.generated';
```
</details>

## UtopiaEntry

导出接口 · 源码第 3 行。

```ts
export type UtopiaEntry = {
    id: string;
    name: string;
    type: string;
    meta?: string;
    text?: string;
    stats?: Record<string, number | string>;
    [key: string]: unknown;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `type` | 否 | `string` | 见结构定义及所属功能文档 |
| `meta` | 是 | `string` | 见结构定义及所属功能文档 |
| `text` | 是 | `string` | 见结构定义及所属功能文档 |
| `stats` | 是 | `Record<string,number&#124;string>` | 见结构定义及所属功能文档 |
| `[key:string]` | 否 | `unknown` | 动态键 |

## utopiaEntry

导出接口 · 源码第 6 行。

```ts
export const utopiaEntry: (id: string): UtopiaEntry;
```

## utopiaInstalled

导出接口 · 源码第 7 行。

```ts
export const utopiaInstalled: (c: UtopiaCharacter, id: string): boolean;
```

## utopiaRank

导出接口 · 源码第 8 行。

```ts
export const utopiaRank: (c: UtopiaCharacter, id: string): number;
```

## utopiaHas

导出接口 · 源码第 9 行。

```ts
export const utopiaHas: (c: UtopiaCharacter, status: string): boolean;
```

## utopiaGrowth

导出接口 · 源码第 10 行。

```ts
export function utopiaGrowth(level: number): { grit: number; tune: number; talents: number; technology: number; cores: number; feats: number; triggers: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `level` | 否 | `number` | — |

## utopiaStats

导出接口 · 源码第 11 行。

```ts
export function utopiaStats(c: UtopiaCharacter): UtopiaStats;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `UtopiaCharacter` | — |

## utopiaResonanceCap

导出接口 · 源码第 16 行。

```ts
export const utopiaResonanceCap: (c: UtopiaCharacter): number;
```

## utopiaMounts

导出接口 · 源码第 17 行。

```ts
export function utopiaMounts(c: UtopiaCharacter): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `UtopiaCharacter` | — |

## utopiaChargeLimit

导出接口 · 源码第 18 行。

```ts
export function utopiaChargeLimit(c: UtopiaCharacter, entry: string): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `UtopiaCharacter` | — |
| `entry` | 否 | `string` | — |

## utopiaEquipmentSp

导出接口 · 源码第 19 行。

```ts
export function utopiaEquipmentSp(e: UtopiaEquipment): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `e` | 否 | `UtopiaEquipment` | — |

## utopiaAvailable

导出接口 · 源码第 20 行。

```ts
export function utopiaAvailable(c: UtopiaCharacter, id: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `UtopiaCharacter` | — |
| `id` | 否 | `string` | — |

## validateUtopiaBuild

导出接口 · 源码第 24 行。

```ts
export function validateUtopiaBuild(c: UtopiaCharacter, complete?: boolean): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `UtopiaCharacter` | — |
| `complete` | 是 | `boolean` | false |

## utopiaFreshResources

导出接口 · 源码第 44 行。

```ts
export function utopiaFreshResources(c: UtopiaCharacter): UtopiaResources;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `UtopiaCharacter` | — |

## utopiaPreset

导出接口 · 源码第 45 行。

```ts
export function utopiaPreset(id?: string): UtopiaCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 是 | `string` | 'B01' |

## utopiaRoll

导出接口 · 源码第 52 行。

```ts
export function utopiaRoll(modifier: number, accuracy: number, difficulty: number, random: ()=>number): { d20: number; dice: number[]; total: number; modifier: number; adjust: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modifier` | 否 | `number` | — |
| `accuracy` | 否 | `number` | — |
| `difficulty` | 否 | `number` | — |
| `random` | 否 | `()=>number` | — |

## utopiaDamageRoll

导出接口 · 源码第 53 行。

```ts
export function utopiaDamageRoll(formula: string, critical: boolean, random: ()=>number): { dice: number[]; value: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `formula` | 否 | `string` | — |
| `critical` | 否 | `boolean` | — |
| `random` | 否 | `()=>number` | — |

## utopiaDamageAmount

导出接口 · 源码第 54 行。

```ts
export function utopiaDamageAmount(c: UtopiaCharacter, amount: number, type: UtopiaDamage, options?: {ap?:boolean;resist?:boolean;reduction?:number;area?:boolean}): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `UtopiaCharacter` | — |
| `amount` | 否 | `number` | — |
| `type` | 否 | `UtopiaDamage` | — |
| `options` | 是 | `{ap?:boolean;resist?:boolean;reduction?:number;area?:boolean}` | {} |

## utopiaPayResonance

导出接口 · 源码第 59 行。

```ts
export function utopiaPayResonance(c: UtopiaCharacter, cost: number, printed: number, overload: boolean, round: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `UtopiaCharacter` | — |
| `cost` | 否 | `number` | — |
| `printed` | 否 | `number` | — |
| `overload` | 否 | `boolean` | — |
| `round` | 否 | `number` | — |
