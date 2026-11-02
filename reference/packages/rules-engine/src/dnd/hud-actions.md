# game/packages/rules-engine/src/dnd/hud-actions.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndDurationLabel} from './duration';
import {dndMagicItemRule,dndMagicItemActive} from './magic-items';
import {dndLegendaryOptions} from './legendary';
import {dndCanRitual} from './casting-time';
import {dndHealingPotion} from './items';
import {dndEffectiveWeaponAttack} from './equipment';
import {dndClassActions,dndFeatureSource,syncDndCombatFeatures} from './class-features';
import {sorcererClass,spellfireLevel} from './sorcery';
import {DND_ACTION_TRIGGERS} from './triggers';
import {type DndHudRef,type ManualActor,type ResourceActivity,type StoryResource,type StoryWorkspace} from '@aelzerant/contracts';
import {DND_CATALOG,dndEntry} from './index';
import {DND_SPELL_EXECUTORS} from './spells';
```
</details>

## DndHudGroup

导出接口 · 源码第 13 行。

```ts
export type DndHudGroup = 'common' | 'attacks' | 'spells' | 'features' | 'items';
```

## DndHudAction

导出接口 · 源码第 14 行。

```ts
export interface DndHudAction {
    charges?: {
        remaining: number;
        max: number;
    };
    itemSpell?: {
        item: string;
        spell: string;
        slot: number;
    };
    key: string;
    ref: DndHudRef;
    name: string;
    english: string;
    description: string;
    group: DndHudGroup;
    activation: 'free' | 'action' | 'bonus' | 'reaction' | 'passive' | 'manual';
    level?: number;
    range?: number;
    quantity?: number;
    pool?: string;
    native?: 'studyMagic' | 'goodberry' | 'lightCover' | 'auraTargets' | 'readyMove' | 'item' | 'feature' | 'moveZone' | 'wake' | 'escapeSpell' | 'moveLights' | 'sorcery' | 'attack' | 'spell' | 'action' | 'second-wind' | 'resource' | 'deathSave' | 'dropConcentration' | 'check' | 'care';
    resource?: StoryResource;
    activity?: ResourceActivity;
    entryId?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `charges` | 是 | `{remaining:number;max:number}` | 见结构定义及所属功能文档 |
| `charges.remaining` | 否 | `number` | 见结构定义及所属功能文档 |
| `charges.max` | 否 | `number` | 见结构定义及所属功能文档 |
| `itemSpell` | 是 | `{item:string;spell:string;slot:number}` | 见结构定义及所属功能文档 |
| `itemSpell.item` | 否 | `string` | 见结构定义及所属功能文档 |
| `itemSpell.spell` | 否 | `string` | 见结构定义及所属功能文档 |
| `itemSpell.slot` | 否 | `number` | 见结构定义及所属功能文档 |
| `key` | 否 | `string` | 见结构定义及所属功能文档 |
| `ref` | 否 | `DndHudRef` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `english` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `group` | 否 | `DndHudGroup` | 见结构定义及所属功能文档 |
| `activation` | 否 | `'free'&#124;'action'&#124;'bonus'&#124;'reaction'&#124;'passive'&#124;'manual'` | 见结构定义及所属功能文档 |
| `level` | 是 | `number` | 见结构定义及所属功能文档 |
| `range` | 是 | `number` | 见结构定义及所属功能文档 |
| `quantity` | 是 | `number` | 见结构定义及所属功能文档 |
| `pool` | 是 | `string` | 见结构定义及所属功能文档 |
| `native` | 是 | `'studyMagic'&#124;'goodberry'&#124;'lightCover'&#124;'auraTargets'&#124;'readyMove'&#124;'item'&#124;'feature'&#124;'moveZone'&#124;'wake'&#124;'escapeSpell'&#124;'moveLights'&#124;'sorcery'&#124;'attack'&#124;'spell'&#124;'action'&#124;'second-wind'&#124;'resource'&#124;'deathSave'&#124;'dropConcentration'&#124;'check'&#124;'care'` | 见结构定义及所属功能文档 |
| `resource` | 是 | `StoryResource` | 见结构定义及所属功能文档 |
| `activity` | 是 | `ResourceActivity` | 见结构定义及所属功能文档 |
| `entryId` | 是 | `string` | 见结构定义及所属功能文档 |

## dndHudKey

导出接口 · 源码第 15 行。

```ts
export const dndHudKey: (r: DndHudRef): string;
```

## dndHudActions

导出接口 · 源码第 38 行。

```ts
export function dndHudActions(actor: ManualActor, story?: StoryWorkspace): DndHudAction[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `story` | 是 | `StoryWorkspace` | — |
