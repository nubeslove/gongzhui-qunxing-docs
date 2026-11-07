# game/packages/game-core/src/dnd/roll-decisions.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorControlled,actorController,createTimedDecision,pauseTimedDecision,timedDecisionAnswer,timedDecisionDefault,timedDecisionExpired,type CombatTrace,type DndIntent,type DndPending,type ManualActor,type ManualTable} from '@aelzerant/contracts';
import {dndDice,dndDie,dndFeatureEffect,dndClassLevel,dndEntry,syncDndCombatFeatures} from '@aelzerant/rules-engine';
```
</details>

## RollState

内部依赖类型 · 源码第 4 行。

```ts
type RollState = NonNullable<DndPending['roll']>;
```

## Context

内部依赖类型 · 源码第 5 行。

```ts
type Context = {
    senderId: string;
    memberIds?: ReadonlySet<string>;
    random?: () => number;
    now?: number;
    id?: () => string;
    trace?: (event: CombatTrace) => void;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `senderId` | 否 | `string` | 见结构定义及所属功能文档 |
| `memberIds` | 是 | `ReadonlySet<string>` | 见结构定义及所属功能文档 |
| `random` | 是 | `()=>number` | 见结构定义及所属功能文档 |
| `now` | 是 | `number` | 见结构定义及所属功能文档 |
| `id` | 是 | `()=>string` | 见结构定义及所属功能文档 |
| `trace` | 是 | `(event:CombatTrace)=>void` | 见结构定义及所属功能文档 |

## Session

内部依赖类型 · 源码第 6 行。

```ts
type Session = {
    answers: (boolean | number)[];
    index: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `answers` | 否 | `(boolean&#124;number)[]` | 见结构定义及所属功能文档 |
| `index` | 否 | `number` | 见结构定义及所属功能文档 |

## RollFeature

内部依赖类型 · 源码第 8 行。

```ts
type RollFeature = 'sneak' | 'tactical' | 'indomitable' | 'lucky' | 'knockout' | 'stone' | 'storm' | 'fire-burn' | 'frost-chill' | 'hill-tumble' | 'celestial-damage' | 'relentless';
```

## chooseDndRollFeature

导出接口 · 源码第 10 行。

```ts
export function chooseDndRollFeature(table: ManualTable, a: ManualActor, kind: RollFeature, total?: number, dc?: number): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `kind` | 否 | `RollFeature` | — |
| `total` | 是 | `number` | 0 |
| `dc` | 是 | `number` | 0 |

## chooseDndIndomitableDie

导出接口 · 源码第 14 行。

```ts
export function chooseDndIndomitableDie(table: ManualTable, a: ManualActor, faces: number[], total: number, dc: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `faces` | 否 | `number[]` | — |
| `total` | 否 | `number` | — |
| `dc` | 否 | `number` | — |

## chooseDndHeroicDie

导出接口 · 源码第 20 行。

```ts
export function chooseDndHeroicDie(table: ManualTable, a: ManualActor, faces: number[], sides: number[], labels?: string[]): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `faces` | 否 | `number[]` | — |
| `sides` | 否 | `number[]` | — |
| `labels` | 是 | `string[]` | — |

## rollDndOwnedDice

导出接口 · 源码第 27 行。

```ts
export function rollDndOwnedDice(table: ManualTable, a: ManualActor, formula: string, random: ()=>number, critical?: boolean): { total: number; faces: number[]; formula: string; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `formula` | 否 | `string` | — |
| `random` | 否 | `()=>number` | — |
| `critical` | 是 | `boolean` | false |

## useDndInspiration

导出接口 · 源码第 34 行。

Called after failure, before the enclosing attack/save is committed.

```ts
export function useDndInspiration(table: ManualTable, a: ManualActor, total: number, dc: number, random: ()=>number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `total` | 否 | `number` | — |
| `dc` | 否 | `number` | — |
| `random` | 否 | `()=>number` | — |

## useDndLegendaryResistance

导出接口 · 源码第 40 行。

```ts
export function useDndLegendaryResistance(table: ManualTable, a: ManualActor, total: number, dc: number): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `total` | 否 | `number` | — |
| `dc` | 否 | `number` | — |

## withDndRollDecisions

导出接口 · 源码第 47 行。

Suspend a transaction with an authoritative random tape; resume it without rerolling or double payment.
The tape and original intent remain GM-only in the normal pending projection.

```ts
export function withDndRollDecisions(table: ManualTable, input: DndIntent, context: Context, run: (intent:DndIntent,context:Context)=>void): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `input` | 否 | `DndIntent` | — |
| `context` | 否 | `Context` | — |
| `run` | 否 | `(intent:DndIntent,context:Context)=>void` | — |
