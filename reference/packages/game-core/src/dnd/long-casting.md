# game/packages/game-core/src/dnd/long-casting.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorControlled,type DndCasting,type DndIntent,type DndMagicJob,type ManualActor,type ManualTable} from '@aelzerant/contracts';
import {dndCastingPrepared,dndCastingRounds,dndEntry,dndRitualCharacter,dndSpellPayment,dndCastingAbility,dndIncapacitated,dndRaging,dndUntrainedArmor} from '@aelzerant/rules-engine';
import {dndVerbalProblem} from './spell-components';
import {advanceDndEffectTime,cleanDndEffects} from './effects';
```
</details>

## Hooks

内部依赖类型 · 源码第 5 行。

```ts
type Hooks = {
    senderId: string;
    now: number;
    random?: () => number;
    spend: (a: ManualActor, k: 'action', magic: boolean) => void;
    log: (s: string, ...a: ManualActor[]) => void;
    run: (jobs: DndMagicJob[]) => void;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `senderId` | 否 | `string` | 见结构定义及所属功能文档 |
| `now` | 否 | `number` | 见结构定义及所属功能文档 |
| `random` | 是 | `()=>number` | 见结构定义及所属功能文档 |
| `spend` | 否 | `(a:ManualActor,k:'action',magic:boolean)=>void` | 见结构定义及所属功能文档 |
| `log` | 否 | `(s:string,...a:ManualActor[])=>void` | 见结构定义及所属功能文档 |
| `run` | 否 | `(jobs:DndMagicJob[])=>void` | 见结构定义及所属功能文档 |

## dndCastingMarker

导出接口 · 源码第 6 行。

```ts
export const dndCastingMarker: (spell: string): string;
```

## stopDndCasting

导出接口 · 源码第 7 行。

```ts
export function stopDndCasting(a: ManualActor): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |

## dndCastingReady

导出接口 · 源码第 8 行。

```ts
export function dndCastingReady(a: ManualActor, spell: string, slot: number, ritual?: boolean, freeCast?: boolean, sourceId?: string, slotType?: 'spell'|'pact'): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |
| `spell` | 否 | `string` | — |
| `slot` | 否 | `number` | — |
| `ritual` | 是 | `boolean` | false |
| `freeCast` | 是 | `boolean` | false |
| `sourceId` | 是 | `string` | — |
| `slotType` | 是 | `'spell'&#124;'pact'` | 'spell' |

## progressDndCasting

导出接口 · 源码第 11 行。

```ts
export function progressDndCasting(table: ManualTable, a: ManualActor, h: Pick<Hooks,'log'>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `h` | 否 | `Pick<Hooks,'log'>` | — |

## handleDndLongCasting

导出接口 · 源码第 12 行。

```ts
export function handleDndLongCasting(table: ManualTable, intent: DndIntent, h: Hooks): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `intent` | 否 | `DndIntent` | — |
| `h` | 否 | `Hooks` | — |
