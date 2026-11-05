# game/packages/game-core/src/dnd/ready.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {endDndLightSpell} from './light-spell';
import {dndActionSpell} from '@aelzerant/rules-engine';
import {dndCanSeeActor,type DndIntent,type DndMagicJob,type DndReadied,type ManualActor,type ManualTable} from '@aelzerant/contracts';
import {DND_SPELL_EXECUTORS,dndCastingAbility,dndCastingPrepared,dndEntry,dndIncapacitated,dndRaging,dndSpeed,dndSpellPayment,dndUntrainedArmor,spendDndSpellPayment} from '@aelzerant/rules-engine';
import {cleanDndEffects} from './effects';
import {dndVerbalProblem,consumeDndMaterial} from './spell-components';
import {dndEndActionEffects} from './combat-effects';
import {planDndMove} from './movement';
```
</details>

## dndReadyMarker

导出接口 · 源码第 10 行。

```ts
export const dndReadyMarker: (id: string): string;
```

## cancelDndReady

导出接口 · 源码第 11 行。

```ts
export function cancelDndReady(a: ManualActor): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |

## cleanDndReady

导出接口 · 源码第 12 行。

```ts
export function cleanDndReady(table: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |

## dndReadyMatches

导出接口 · 源码第 13 行。

```ts
export function dndReadyMatches(c: ManualActor['dnd'], kind: DndReadied['kind'], id?: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `ManualActor['dnd']` | — |
| `kind` | 否 | `DndReadied['kind']` | — |
| `id` | 是 | `string` | — |

## startDndReady

导出接口 · 源码第 14 行。

```ts
export function startDndReady(table: ManualTable, a: ManualActor, intent: Extract<DndIntent,{type:'ready'}>, h: {spend:(magic:boolean)=>void;run:(jobs:DndMagicJob[])=>void;log:(s:string,...a:ManualActor[])=>void}): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `intent` | 否 | `Extract<DndIntent,{type:'ready'}>` | — |
| `h` | 否 | `{spend:(magic:boolean)=>void;run:(jobs:DndMagicJob[])=>void;log:(s:string,...a:ManualActor[])=>void}` | — |

## dndReadyMovePlan

导出接口 · 源码第 34 行。

```ts
export function dndReadyMovePlan(table: ManualTable, a: ManualActor, point: {x:number;y:number;z:number}, mode?: NonNullable<Extract<DndIntent,{type:'releaseReadyMove'}>['mode']>): { readySpent: number; magicJump?: { paid: boolean; }; mode?: import("@source/packages/contracts/src/scene-environment").MovementChoice; actor: string; token: string; steps: { x: number; y: number; z: number; cost: number; }[]; declined: string[]; afterAttack?: { target: string; attack: string; mode: import("@source/packages/contracts/src/dnd").DndRollMode; light?: boolean; reckless?: boolean; sneakAttack?: boolean; }; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `point` | 否 | `{x:number;y:number;z:number}` | — |
| `mode` | 是 | `NonNullable<Extract<DndIntent,{type:'releaseReadyMove'}>['mode']>` | 'walk' |
