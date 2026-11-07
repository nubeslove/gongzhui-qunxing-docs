# game/packages/rules-engine/src/dnd/equipment.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndWeaponTrained} from './traits';
import {dndMartialWeapon,dndMartialDie} from './class-features';
import type { DndCharacter, DndDamageType, DndAttack } from '@aelzerant/contracts';
import { DND_DAMAGE_NAMES, dndEntry, dndMod } from './index';
```
</details>

## DndEquipmentChoice

导出接口 · 源码第 5 行。

```ts
export type DndEquipmentChoice = Pick<DndCharacter, 'weapons' | 'armor' | 'shield'>;
```

## changeDndEquipment

导出接口 · 源码第 17 行。

Equipment choices change derived values without erasing personal AC/attack adjustments.

```ts
export function changeDndEquipment(current: DndCharacter, choice: DndEquipmentChoice): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `current` | 否 | `DndCharacter` | — |
| `choice` | 否 | `DndEquipmentChoice` | — |

## dndAttackAbility

导出接口 · 源码第 37 行。

Old saves infer from the actual weapon; new/imported attacks may explicitly supply an ability.

```ts
export function dndAttackAbility(c: DndCharacter, a: DndAttack): import('@aelzerant/contracts').DndAbility;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `a` | 否 | `DndAttack` | — |

## dndEffectiveWeaponAttack

导出接口 · 源码第 42 行。

Martial Arts is evaluated when used, so equipping armor cannot leave stale bonuses.

```ts
export function dndEffectiveWeaponAttack(c: DndCharacter, attack: DndAttack): DndAttack;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `attack` | 否 | `DndAttack` | — |

## addDndThrownAttacks

导出接口 · 源码第 51 行。

A thrown melee weapon retains its melee ability modifier and has a separate ranged mode.

```ts
export function addDndThrownAttacks(c: DndCharacter): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
