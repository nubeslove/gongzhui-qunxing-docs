# game/packages/rules-engine/src/dnd/components.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndCharacter,DndInventoryItem} from '@aelzerant/contracts';
import {dndEntry} from './index';
import {dndSpellSources} from './multiclass';
import {dndLegendaryOptions} from './legendary';
```
</details>

## dndMonsterComponentWaiver

导出接口 · 源码第 6 行。

```ts
export function dndMonsterComponentWaiver(c: DndCharacter, spell: string, sourceId?: string): 'all'|'material'|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `spell` | 否 | `string` | — |
| `sourceId` | 是 | `string` | — |

## dndObservableCast

导出接口 · 源码第 15 行。

```ts
export function dndObservableCast(c: DndCharacter, spell: string, sourceId?: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `spell` | 否 | `string` | — |
| `sourceId` | 是 | `string` | — |

## dndSpellComponents

导出接口 · 源码第 17 行。

```ts
export function dndSpellComponents(spell: string): { verbal: boolean; somatic: boolean; material: string; consumed: boolean; cost: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `spell` | 否 | `string` | — |

## dndMaterialItem

导出接口 · 源码第 22 行。

```ts
export function dndMaterialItem(c: DndCharacter, spell: string): DndInventoryItem | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `spell` | 否 | `string` | — |

## dndFocusItem

导出接口 · 源码第 31 行。

```ts
export function dndFocusItem(c: DndCharacter, spell: string, sourceId?: string): DndInventoryItem|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `spell` | 否 | `string` | — |
| `sourceId` | 是 | `string` | — |

## dndMaterialProblem

导出接口 · 源码第 44 行。

The inventory binds unusual/priced materials to a spell explicitly; currency is never silently substituted.

```ts
export function dndMaterialProblem(c: DndCharacter, spell: string, sourceId?: string): string | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `spell` | 否 | `string` | — |
| `sourceId` | 是 | `string` | — |
