# game/packages/rules-engine/src/dnd/class-features.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndSpiderClimbActive} from './movement-speeds';
import {syncDndLegendary} from './legendary';
import {dndMagicItemActions} from './magic-items';
import {dndSpeciesActions} from './species';
import {dndPactPool} from './multiclass';
import {syncDndAlwaysPrepared} from './subclass-spells';
import {dndWildEligible} from './wild-shape';
import type {DndCharacter,DndActiveEffect,DndAttack} from '@aelzerant/contracts';
import {DND_CATALOG,DND_SKILLS,dndEntry,dndMod} from './index';
import {syncDndClassResources} from './traits';
import {dndIncapacitated} from './index';
import {crownActive} from './sorcery';
import {dndMonsterPowers,syncDndMonsterPowers,type DndMonsterPower} from './monster-powers';
```
</details>

## dndClassLevel

导出接口 · 源码第 15 行。

```ts
export const dndClassLevel: (c: DndCharacter, name: string): number;
```

## dndFeatureEffect

导出接口 · 源码第 16 行。

```ts
export const dndFeatureEffect: (c: DndCharacter, key: string): DndActiveEffect | undefined;
```

## dndRaging

导出接口 · 源码第 17 行。

```ts
export const dndRaging: (c: DndCharacter): boolean;
```

## restoreDndShortResources

导出接口 · 源码第 18 行。

```ts
export function restoreDndShortResources(c: DndCharacter): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndSaveDamageFactor

导出接口 · 源码第 19 行。

```ts
export function dndSaveDamageFactor(c: DndCharacter, ability: string, success: boolean, half: boolean, spell?: boolean): 1 | 0 | 0.5;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `ability` | 否 | `string` | — |
| `success` | 否 | `boolean` | — |
| `half` | 否 | `boolean` | — |
| `spell` | 是 | `boolean` | false |

## dndFeatureSource

导出接口 · 源码第 23 行。

```ts
export function dndFeatureSource(key: string): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `key` | 否 | `string` | — |

## dndRageDamage

导出接口 · 源码第 24 行。

```ts
export function dndRageDamage(c: DndCharacter): 2 | 3 | 4;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndMartialDie

导出接口 · 源码第 25 行。

```ts
export function dndMartialDie(c: DndCharacter): 12 | 6 | 8 | 10;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndMartialArts

导出接口 · 源码第 26 行。

```ts
export const dndMartialArts: (c: DndCharacter): boolean;
```

## dndMartialWeapon

导出接口 · 源码第 27 行。

```ts
export function dndMartialWeapon(c: DndCharacter, id: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `id` | 否 | `string` | — |

## dndFeatureExpiry

导出接口 · 源码第 28 行。

```ts
export function dndFeatureExpiry(table: {dndBattle?:{round:number;turn:number;ended:boolean;order:{actor:string}[]};activeSceneId?:string}, actor: string, phase?: 'start'|'end'): DndActiveEffect['expires'];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `{dndBattle?:{round:number;turn:number;ended:boolean;order:{actor:string}[]};activeSceneId?:string}` | — |
| `actor` | 否 | `string` | — |
| `phase` | 是 | `'start'&#124;'end'` | 'end' |

## DndFeatureAction

导出接口 · 源码第 31 行。

```ts
export interface DndFeatureAction {
    item?: {
        id: string;
        operation: 'attune' | 'unattune' | 'equip' | 'unequip' | 'pearl' | 'cancel';
        slot?: number;
        pact?: boolean;
    };
    id: string;
    name: string;
    english: string;
    activation: 'action' | 'bonus' | 'free';
    target: 'self' | 'single' | 'area';
    range?: number;
    point?: number;
    pool?: string;
    description: string;
    amount?: boolean;
    power?: DndMonsterPower;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `item` | 是 | `{id:string;operation:'attune'&#124;'unattune'&#124;'equip'&#124;'unequip'&#124;'pearl'&#124;'cancel';slot?:number;pact?:boolean}` | 见结构定义及所属功能文档 |
| `item.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `item.operation` | 否 | `'attune'&#124;'unattune'&#124;'equip'&#124;'unequip'&#124;'pearl'&#124;'cancel'` | 见结构定义及所属功能文档 |
| `item.slot` | 是 | `number` | 见结构定义及所属功能文档 |
| `item.pact` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `english` | 否 | `string` | 见结构定义及所属功能文档 |
| `activation` | 否 | `'action'&#124;'bonus'&#124;'free'` | 见结构定义及所属功能文档 |
| `target` | 否 | `'self'&#124;'single'&#124;'area'` | 见结构定义及所属功能文档 |
| `range` | 是 | `number` | 见结构定义及所属功能文档 |
| `point` | 是 | `number` | 见结构定义及所属功能文档 |
| `pool` | 是 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `amount` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `power` | 是 | `DndMonsterPower` | 见结构定义及所属功能文档 |

## dndHelpToolKey

导出接口 · 源码第 32 行。

```ts
export const dndHelpToolKey: (tool: string): string;
```

## dndHelpChoices

导出接口 · 源码第 33 行。

```ts
export function dndHelpChoices(c: DndCharacter): { id: string; name: string; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndClassActions

导出接口 · 源码第 34 行。

```ts
export function dndClassActions(c: DndCharacter): DndFeatureAction[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## syncDndCombatFeatures

导出接口 · 源码第 92 行。

Rebuild only platform-owned derived attacks; retain user-authored attacks and spent resources.

```ts
export function syncDndCombatFeatures(c: DndCharacter): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
