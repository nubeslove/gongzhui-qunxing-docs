# game/packages/rules-engine/src/aaf-checks.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {AafCheckKind,AafCheckRecord,AafModifier,AafAttribute,AafRuleState,AafDamagePart,AafDefense,AafDamageType} from '@aelzerant/contracts';
import {aafModifier} from './aaf-character';
```
</details>

## aafProficiency

导出接口 · 源码第 4 行。

```ts
export const aafProficiency: (level: number): number;
```

## AAF_MP_BY_LEVEL

导出接口 · 源码第 5 行。

```ts
export const AAF_MP_BY_LEVEL = [4, 7, 9, 11, 15, 19, 23, 29, 35, 42, 49, 58, 67, 76, 87, 98, 110, 123, 136, 150] as const;
```

## AAF_RANK_LEVELS

导出接口 · 源码第 6 行。

```ts
export const AAF_RANK_LEVELS = [1, 1, 5, 9, 13, 17, 20] as const;
```

## AAF_RANK_MP

导出接口 · 源码第 7 行。

```ts
export const AAF_RANK_MP = [0, 2, 5, 9, 15, 24, 40] as const;
```

## aafFocusMaximum

导出接口 · 源码第 8 行。

```ts
export const aafFocusMaximum: (level: number): number;
```

## aafUpkeepBase

导出接口 · 源码第 9 行。

```ts
export const aafUpkeepBase: (rank: number): 2 | 1 | 3;
```

## aafUpkeep

导出接口 · 源码第 10 行。

```ts
export function aafUpkeep(items: Pick<AafRuleState['concentrations'][number],'cost'|'reduction'>[], reduction?: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | 否 | `Pick<AafRuleState['concentrations'][number],'cost'&#124;'reduction'>[]` | — |
| `reduction` | 是 | `number` | 0 |

## aafCantripDice

导出接口 · 源码第 11 行。

```ts
export const aafCantripDice: (level: number): 2 | 1 | 4 | 3;
```

## aafCasterLevel

导出接口 · 源码第 12 行。

```ts
export const aafCasterLevel: (full: number, half: number): number;
```

## aafSpellPower

导出接口 · 源码第 13 行。

```ts
export const aafSpellPower: (arcane: number, divine: number, primal: number): number;
```

## aafSpellDc

导出接口 · 源码第 14 行。

```ts
export const aafSpellDc: (level: number, attribute: number): number;
```

## aafSkillValue

导出接口 · 源码第 15 行。

```ts
export const aafSkillValue: (rank: number, level: number): number;
```

## aafCarryCapacity

导出接口 · 源码第 16 行。

```ts
export const aafCarryCapacity: (strength: number): number;
```

## aafPushCapacity

导出接口 · 源码第 17 行。

```ts
export const aafPushCapacity: (strength: number, size?: number): number;
```

## aafJump

导出接口 · 源码第 18 行。

```ts
export const aafJump: (strength: number, running: boolean): { long: number; high: number; };
```

## aafRitualPrice

导出接口 · 源码第 19 行。

```ts
export const aafRitualPrice: (power: number, area: number): { mp: number; dc: number; };
```

## aafClockDelta

导出接口 · 源码第 20 行。

```ts
export const aafClockDelta: (success: boolean, critical: boolean, fumble: boolean, threat?: boolean): 0 | 2 | 1;
```

## aafRoll

导出接口 · 源码第 21 行。

```ts
export function aafRoll(count: number, sides: number, rng: ()=>number): number[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `count` | 否 | `number` | — |
| `sides` | 否 | `number` | — |
| `rng` | 否 | `()=>number` | — |

## AafCheckInput

导出接口 · 源码第 23 行。

```ts
export interface AafCheckInput {
    id: string;
    kind: AafCheckKind;
    attribute?: AafAttribute;
    skill?: string;
    dc: number;
    flat: number;
    advantage?: boolean;
    disadvantage?: boolean;
    modifiers?: AafModifier[];
    automatic?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `AafCheckKind` | 见结构定义及所属功能文档 |
| `attribute` | 是 | `AafAttribute` | 见结构定义及所属功能文档 |
| `skill` | 是 | `string` | 见结构定义及所属功能文档 |
| `dc` | 否 | `number` | 见结构定义及所属功能文档 |
| `flat` | 否 | `number` | 见结构定义及所属功能文档 |
| `advantage` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `disadvantage` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `modifiers` | 是 | `AafModifier[]` | 见结构定义及所属功能文档 |
| `automatic` | 是 | `boolean` | 见结构定义及所属功能文档 |

## aafCheck

导出接口 · 源码第 25 行。

Same name/source contributes once; independent named dice are rolled and summed separately.

```ts
export function aafCheck(input: AafCheckInput, rng: ()=>number): AafCheckRecord;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `input` | 否 | `AafCheckInput` | — |
| `rng` | 否 | `()=>number` | — |

## aafReroll

导出接口 · 源码第 38 行。

```ts
export function aafReroll(check: AafCheckRecord, index: number, face: number, keep: boolean): AafCheckRecord;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `check` | 否 | `AafCheckRecord` | — |
| `index` | 否 | `number` | — |
| `face` | 否 | `number` | — |
| `keep` | 否 | `boolean` | — |

## aafDamageType

导出接口 · 源码第 47 行。

```ts
export function aafDamageType(raw: string): AafDamageType;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `string` | — |

## AafDamageResult

导出接口 · 源码第 51 行。

```ts
export interface AafDamageResult {
    type: AafDamageType;
    faces: number[];
    raw: number;
    dr: number;
    resistance: boolean;
    vulnerability: boolean;
    immune: boolean;
    final: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 否 | `AafDamageType` | 见结构定义及所属功能文档 |
| `faces` | 否 | `number[]` | 见结构定义及所属功能文档 |
| `raw` | 否 | `number` | 见结构定义及所属功能文档 |
| `dr` | 否 | `number` | 见结构定义及所属功能文档 |
| `resistance` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `vulnerability` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `immune` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `final` | 否 | `number` | 见结构定义及所属功能文档 |

## aafDamage

导出接口 · 源码第 53 行。

Resistance and vulnerability run before final flooring, so both cancel even for odd damage.

```ts
export function aafDamage(part: AafDamagePart, defenses: AafDefense[], rng: ()=>number, options?: {critical?:number;half?:boolean;unreducible?:boolean}): AafDamageResult;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `part` | 否 | `AafDamagePart` | — |
| `defenses` | 否 | `AafDefense[]` | — |
| `rng` | 否 | `()=>number` | — |
| `options` | 是 | `{critical?:number;half?:boolean;unreducible?:boolean}` | {} |
