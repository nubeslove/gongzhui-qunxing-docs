# game/packages/game-core/src/dnd/class-features.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {applyDndMagicItem} from './magic-items';
import {dndCurrentSize} from './body-size';
import {pushDndActor} from './forced-movement';
import {applyDndSpeciesFeature} from './species';
import {dndGrappleTargets,dndOccupiedHands} from './hands';
import {dndSpecies} from '@aelzerant/rules-engine';
import {dndCannotUseMagic} from './magic-fields';
import {dndHelpChoices,spendDndSpellSlot,dndSpellSlot} from '@aelzerant/rules-engine';
import {startDndWildShape,endDndWildShape} from './wild-shape';
import {dndPactPool,dndCreatureType} from '@aelzerant/rules-engine';
import {advanceDndEffectTime} from './effects';
import {rollDndOwnedDice} from './roll-decisions';
import {dndContextTest} from './rolls';
import type {DndActiveEffect,DndIntent,DndMagicJob,ManualActor,ManualTable} from '@aelzerant/contracts';
import {dndMaxSpeed} from '@aelzerant/rules-engine';
import {dndCanHearActor,dndCanSeeActor} from '@aelzerant/contracts';
import {dndClassActions,dndClassLevel,dndEntry,dndFeatureEffect,dndFeatureSource,dndFeatureExpiry,dndIncapacitated,dndMod,dndDice,dndTest,dndSpeed,dndMartialArts,dndSkillBonus,dndConditionImmune} from '@aelzerant/rules-engine';
import {dndCover,dndRayBlocked,tokenCenter} from './geometry';
import {tokenDistance} from './movement';
import {planDndSpiderMove} from './spider-climb';
import {planDndMagicJump} from './magic-jump';
import {assertDndCanHide} from './hiding';
import {dndEffectRollModifiers} from './effects';
import {dndSpellArea} from './areas';
import {dndSaveDamageFactor,dndCharmedBy} from '@aelzerant/rules-engine';
```
</details>

## FeatureIntent

内部依赖类型 · 源码第 27 行。

```ts
type FeatureIntent = Extract<DndIntent, {
    type: 'feature';
}>;
```

## FeatureContext

导出接口 · 源码第 28 行。

```ts
export type FeatureContext = {
    now: number;
    random: () => number;
    id: () => string;
    spend: (a: ManualActor, kind: 'action' | 'bonus' | 'reaction', magic?: boolean) => void;
    heal: (a: ManualActor, n: number) => void;
    log: (text: string, ...actors: ManualActor[]) => void;
    rollLog: (a: ManualActor, label: string, result: ReturnType<typeof dndTest>) => void;
    run: (jobs: DndMagicJob[]) => void;
    weapon: (a: ManualActor, target: ManualActor, attack: string) => void;
    attackCost: (ordinary?: boolean) => boolean;
    finishAttack: () => void;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `now` | 否 | `number` | 见结构定义及所属功能文档 |
| `random` | 否 | `()=>number` | 见结构定义及所属功能文档 |
| `id` | 否 | `()=>string` | 见结构定义及所属功能文档 |
| `spend` | 否 | `(a:ManualActor,kind:'action'&#124;'bonus'&#124;'reaction',magic?:boolean)=>void` | 见结构定义及所属功能文档 |
| `heal` | 否 | `(a:ManualActor,n:number)=>void` | 见结构定义及所属功能文档 |
| `log` | 否 | `(text:string,...actors:ManualActor[])=>void` | 见结构定义及所属功能文档 |
| `rollLog` | 否 | `(a:ManualActor,label:string,result:ReturnType<typeof dndTest>)=>void` | 见结构定义及所属功能文档 |
| `run` | 否 | `(jobs:DndMagicJob[])=>void` | 见结构定义及所属功能文档 |
| `weapon` | 否 | `(a:ManualActor,target:ManualActor,attack:string)=>void` | 见结构定义及所属功能文档 |
| `attackCost` | 否 | `(ordinary?:boolean)=>boolean` | 见结构定义及所属功能文档 |
| `finishAttack` | 否 | `()=>void` | 见结构定义及所属功能文档 |

## dndFeatureDistance

导出接口 · 源码第 29 行。

```ts
export function dndFeatureDistance(table: ManualTable, a: string, b: string): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `string` | — |
| `b` | 否 | `string` | — |

## addDndFeatureEffect

导出接口 · 源码第 30 行。

```ts
export function addDndFeatureEffect(table: ManualTable, actor: ManualActor, target: ManualActor, key: string, label: string, seconds: number, context: Pick<FeatureContext,'now'|'id'>, options?: Partial<DndActiveEffect>): DndActiveEffect;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actor` | 否 | `ManualActor` | — |
| `target` | 否 | `ManualActor` | — |
| `key` | 否 | `string` | — |
| `label` | 否 | `string` | — |
| `seconds` | 否 | `number` | — |
| `context` | 否 | `Pick<FeatureContext,'now'&#124;'id'>` | — |
| `options` | 是 | `Partial<DndActiveEffect>` | {} |

## extendDndRage

导出接口 · 源码第 34 行。

```ts
export function extendDndRage(table: ManualTable, a: ManualActor): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |

## consumeDndHelp

导出接口 · 源码第 35 行。

```ts
export function consumeDndHelp(table: ManualTable, a: ManualActor, target: ManualActor): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `target` | 否 | `ManualActor` | — |

## dndGrappledAttackDisadvantage

导出接口 · 源码第 36 行。

```ts
export const dndGrappledAttackDisadvantage: (a: ManualActor, target: ManualActor): boolean;
```

## stabilizeDndActor

导出接口 · 源码第 37 行。

```ts
export function stabilizeDndActor(table: ManualTable, a: ManualActor, ctx: Pick<FeatureContext,'now'|'id'|'random'>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `ctx` | 否 | `Pick<FeatureContext,'now'&#124;'id'&#124;'random'>` | — |

## cleanDndClassEffects

导出接口 · 源码第 38 行。

```ts
export function cleanDndClassEffects(table: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |

## applyDndFeature

导出接口 · 源码第 45 行。

```ts
export function applyDndFeature(table: ManualTable, a: ManualActor, intent: FeatureIntent, ctx: FeatureContext): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `intent` | 否 | `FeatureIntent` | — |
| `ctx` | 否 | `FeatureContext` | — |
