# game/packages/rules-engine/src/dnd/weapon-properties.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndAttack,DndCharacter} from '@aelzerant/contracts';
import type {DndTurn} from '@aelzerant/contracts';
import {dndEntry} from './index';
import {dndWeaponTrained} from './traits';
import {dndMasteryEligible} from './mastery-choices';
```
</details>

## DndMastery

导出接口 · 源码第 7 行。

```ts
export type DndMastery = keyof typeof DND_MASTERY_NAMES;
```

## dndWeaponMastery

导出接口 · 源码第 8 行。

```ts
export function dndWeaponMastery(c: DndCharacter, attack: DndAttack): DndMastery|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `attack` | 否 | `DndAttack` | — |

## dndWeaponProperties

导出接口 · 源码第 12 行。

```ts
export const dndWeaponProperties: (attack: DndAttack): string;
```

## dndThrownWeapon

导出接口 · 源码第 13 行。

```ts
export const dndThrownWeapon: (a: DndAttack): boolean;
```

## dndWeaponStock

导出接口 · 源码第 14 行。

```ts
export function dndWeaponStock(c: DndCharacter, a: DndAttack): number | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `a` | 否 | `DndAttack` | — |

## dndAmmoItem

导出接口 · 源码第 15 行。

```ts
export function dndAmmoItem(c: DndCharacter, attack: DndAttack): { name: string; item: import("@source/packages/contracts/src/dnd").DndInventoryItem | undefined; } | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `attack` | 否 | `DndAttack` | — |

## dndHeavyDisadvantage

导出接口 · 源码第 19 行。

```ts
export const dndHeavyDisadvantage: (c: DndCharacter, a: DndAttack): boolean;
```

## dndLightAttackAvailable

导出接口 · 源码第 20 行。

```ts
export function dndLightAttackAvailable(c: DndCharacter, t: DndTurn|undefined, a: DndAttack|undefined): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `t` | 否 | `DndTurn&#124;undefined` | — |
| `a` | 否 | `DndAttack&#124;undefined` | — |
