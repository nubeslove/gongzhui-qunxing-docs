# game/packages/game-core/src/dnd/effects.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {syncDndMagicDetection} from './detect-magic';
import {dndEffectLightSource} from './light-spell';
import {recordDndSlowFallTime} from './falling';
import {syncDndBodySizes} from './body-size';
import {syncDndAid} from './aid';
import {cleanDndMagicItems,refreshDndMagicItems} from './magic-items';
import {cleanDndSpeciesEffects} from './species';
import {cleanDndReady} from './ready';
import {dndLegendaryOptions} from '@aelzerant/rules-engine';
import {restoreDndShortResources} from '@aelzerant/rules-engine';
import {cleanDndWildShapes} from './wild-shape';
import {dndCastingMarker,stopDndCasting} from './long-casting';
import {emptySceneFeatures,dndSilencedAt} from '@aelzerant/contracts';
import {dndFeatureExpiry,dndMaxSpeed} from '@aelzerant/rules-engine';
import {cleanDndClassEffects} from './class-features';
import {DND_SPELL_EFFECTS,dndActiveSpellProfiles,dndSpellSpeedChange,dndSpellEffectRule} from '@aelzerant/rules-engine';
import {advanceCalendar,calendarTicks,defaultWorldCalendar,type WorldCalendar} from '@aelzerant/contracts';
import {dndActorMagicBlock} from './magic-fields';
import type {ManualTable,ManualActor,DndActiveEffect} from '@aelzerant/contracts';
import {dndEntry,dndIncapacitated,dndDie,DND_SPELL_EXECUTORS} from '@aelzerant/rules-engine';
import {followDndSceneSpell,removeDndSceneSpell,dndRegionAffects} from './scene-spells';
```
</details>

## dndEffectApplies

导出接口 · 源码第 26 行。

```ts
export function dndEffectApplies(table: ManualTable, e: DndActiveEffect, targetId: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `e` | 否 | `DndActiveEffect` | — |
| `targetId` | 否 | `string` | — |

## dndEffectActive

导出接口 · 源码第 27 行。

```ts
export function dndEffectActive(table: ManualTable, e: DndActiveEffect): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `e` | 否 | `DndActiveEffect` | — |

## cleanDndEffects

导出接口 · 源码第 29 行。

```ts
export function cleanDndEffects(table: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |

## settleDndEffectTime

导出接口 · 源码第 65 行。

```ts
export function settleDndEffectTime(table: ManualTable, now: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `now` | 否 | `number` | — |

## advanceDndEffectRound

导出接口 · 源码第 70 行。

```ts
export function advanceDndEffectRound(table: ManualTable, actors: ReadonlySet<string>, rounds?: number, now?: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actors` | 否 | `ReadonlySet<string>` | — |
| `rounds` | 是 | `number` | 1 |
| `now` | 是 | `number` | Date.now() |

## dndOutsideEffects

导出接口 · 源码第 74 行。

```ts
export function dndOutsideEffects(table: ManualTable, actors?: ReadonlySet<string>): { actorId: string; actorName: string; spell: string; name: string; remainingSeconds: number; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actors` | 是 | `ReadonlySet<string>` | — |

## startDndEffects

导出接口 · 源码第 75 行。

```ts
export function startDndEffects(table: ManualTable, actors: ReadonlySet<string>, choice: 'keep'|'clear'|undefined, now?: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actors` | 否 | `ReadonlySet<string>` | — |
| `choice` | 否 | `'keep'&#124;'clear'&#124;undefined` | — |
| `now` | 是 | `number` | Date.now() |

## endDndEffectBattle

导出接口 · 源码第 81 行。

```ts
export function endDndEffectBattle(table: ManualTable, actors: ReadonlySet<string>, now?: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actors` | 否 | `ReadonlySet<string>` | — |
| `now` | 是 | `number` | Date.now() |

## dndEffectRollModifiers

导出接口 · 源码第 83 行。

Roll additions are explicit reviewed profiles, never guessed from prose. Same spell does not stack.

```ts
export function dndEffectRollModifiers(table: ManualTable, actor: ManualActor, kind: 'attack'|'save'|'check', random: ()=>number, target?: ManualActor, skill?: string, ability?: string): { label: string; value: number; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actor` | 否 | `ManualActor` | — |
| `kind` | 否 | `'attack'&#124;'save'&#124;'check'` | — |
| `random` | 否 | `()=>number` | — |
| `target` | 是 | `ManualActor` | — |
| `skill` | 是 | `string` | — |
| `ability` | 是 | `string` | — |

## endDndEffectTurn

导出接口 · 源码第 94 行。

```ts
export function endDndEffectTurn(table: ManualTable, actorId: string, phase?: 'start'|'end'): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actorId` | 否 | `string` | — |
| `phase` | 是 | `'start'&#124;'end'` | 'end' |

## dndShieldBonus

导出接口 · 源码第 98 行。

Old saves may still have a turn-only shield; new casts retain the spell instance for dispelling.

```ts
export function dndShieldBonus(table: ManualTable, actorId: string): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actorId` | 否 | `string` | — |

## consumeDndGuidingBolt

导出接口 · 源码第 99 行。

```ts
export function consumeDndGuidingBolt(table: ManualTable, target: ManualActor): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `target` | 否 | `ManualActor` | — |

## advanceDndEffectTime

导出接口 · 源码第 106 行。

Narrative elapsed time advances once for a rest, independently of wall-clock policy.

```ts
export function advanceDndEffectTime(table: ManualTable, seconds: number, now?: number, advanceClock?: boolean, random?: ()=>number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `seconds` | 否 | `number` | — |
| `now` | 是 | `number` | Date.now() |
| `advanceClock` | 是 | `boolean` | true |
| `random` | 是 | `()=>number` | Math.random |

## syncDndCalendarAdvance

导出接口 · 源码第 116 行。

Setting the calendar corrects its display; only an explicit advance elapses game time.

```ts
export function syncDndCalendarAdvance(table: ManualTable, previous?: WorldCalendar, now?: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `previous` | 是 | `WorldCalendar` | — |
| `now` | 是 | `number` | Date.now() |
