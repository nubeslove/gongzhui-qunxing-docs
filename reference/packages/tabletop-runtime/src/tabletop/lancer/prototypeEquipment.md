# game/packages/tabletop-runtime/src/tabletop/lancer/prototypeEquipment.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerCombatWeapon, ManualActor } from '@aelzerant/contracts';
```
</details>

## PrototypePlan

导出接口 · 源码第 6 行。

```ts
export interface PrototypePlan {
    type: keyof typeof PROTOTYPE_TYPES;
    damage: keyof typeof PROTOTYPE_DAMAGE;
    mods: (keyof typeof PROTOTYPE_MODS)[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 否 | `keyof typeof PROTOTYPE_TYPES` | 见结构定义及所属功能文档 |
| `damage` | 否 | `keyof typeof PROTOTYPE_DAMAGE` | 见结构定义及所属功能文档 |
| `mods` | 否 | `(keyof typeof PROTOTYPE_MODS)[]` | 见结构定义及所属功能文档 |

## PrototypeDesign

导出接口 · 源码第 7 行。

```ts
export interface PrototypeDesign extends PrototypePlan {
    rank: number;
    capacity: number;
    rolls: number[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `rank` | 否 | `number` | 见结构定义及所属功能文档 |
| `capacity` | 否 | `number` | 见结构定义及所属功能文档 |
| `rolls` | 否 | `number[]` | 见结构定义及所属功能文档 |

## prototypePlan

导出接口 · 源码第 8 行。

```ts
export function prototypePlan(actor: ManualActor, rank: number): PrototypePlan;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `rank` | 否 | `number` | — |

## preparePrototype

导出接口 · 源码第 15 行。

Called only for an explicit full repair, never by a render or combat projection.

```ts
export function preparePrototype(actor: ManualActor, rank: number, random?: () => number): PrototypeDesign;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `rank` | 否 | `number` | — |
| `random` | 是 | `() => number` | Math.random |

## readPrototype

导出接口 · 源码第 20 行。

```ts
export function readPrototype(actor: ManualActor): PrototypeDesign|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |

## prototypeWeapon

导出接口 · 源码第 26 行。

```ts
export function prototypeWeapon(actor: ManualActor, rank: number, limitedBonus: number, rangeBonus: number, threatBonus: number): LancerCombatWeapon|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `rank` | 否 | `number` | — |
| `limitedBonus` | 否 | `number` | — |
| `rangeBonus` | 否 | `number` | — |
| `threatBonus` | 否 | `number` | — |
