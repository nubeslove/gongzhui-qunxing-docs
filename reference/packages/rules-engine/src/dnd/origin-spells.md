# game/packages/rules-engine/src/dnd/origin-spells.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndCanRitual} from './casting-time';
import type {DndCharacter} from '@aelzerant/contracts';
import {DND_ABILITIES} from '@aelzerant/contracts';
import {DND_ABILITY_NAMES,dndEntry} from './index';
import {dndChoiceValues,dndOriginFeats} from './creation-choices';
import type {DndGuidedInput} from './creation';
import {dndPactPool,dndSpellSources,dndSpellSlot,spendDndSpellSlot} from './multiclass';
```
</details>

## addDndOriginSpells

导出接口 · 源码第 10 行。

Choice groups have already been validated by the guided builder.

```ts
export function addDndOriginSpells(c: DndCharacter, input: DndGuidedInput): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `input` | 否 | `DndGuidedInput` | — |

## dndSpellSourceName

导出接口 · 源码第 23 行。

```ts
export function dndSpellSourceName(c: DndCharacter, id: string): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `id` | 否 | `string` | — |

## dndFreeSpellCast

导出接口 · 源码第 25 行。

```ts
export function dndFreeSpellCast(c: DndCharacter, spell: string, sourceId?: string): { sourceId: string; name: string; resource: string; pool: (import("@source/packages/contracts/src/dnd").DndPool & { refresh: "short" | "long" | "manual"; }) | { max: number; used: number; }; unlimited: boolean; level: number; } | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `spell` | 否 | `string` | — |
| `sourceId` | 是 | `string` | — |

## dndDefaultSpellCast

导出接口 · 源码第 33 行。

```ts
export function dndDefaultSpellCast(c: DndCharacter, spell: string, sourceId?: string): { sourceId: string; slot: number; slotType: "spell" | "pact"; freeCast: boolean; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `spell` | 否 | `string` | — |
| `sourceId` | 是 | `string` | — |

## dndSpellPayment

导出接口 · 源码第 42 行。

Validate the saved grant, actual spell level and remaining cost before the GM pays it.

```ts
export function dndSpellPayment(c: DndCharacter, spell: string, slot: number, slotType?: 'spell'|'pact', sourceId?: string, freeCast?: boolean, paid?: boolean, ritual?: boolean): { free: boolean; pool: { max: number; used: number; } | undefined; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `spell` | 否 | `string` | — |
| `slot` | 否 | `number` | — |
| `slotType` | 是 | `'spell'&#124;'pact'` | 'spell' |
| `sourceId` | 是 | `string` | — |
| `freeCast` | 是 | `boolean` | — |
| `paid` | 是 | `boolean` | false |
| `ritual` | 是 | `boolean` | false |

## spendDndSpellPayment

导出接口 · 源码第 57 行。

```ts
export function spendDndSpellPayment(c: DndCharacter, payment: ReturnType<typeof dndSpellPayment>, slot: number, slotType?: 'spell'|'pact'): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `payment` | 否 | `ReturnType<typeof dndSpellPayment>` | — |
| `slot` | 否 | `number` | — |
| `slotType` | 是 | `'spell'&#124;'pact'` | 'spell' |
