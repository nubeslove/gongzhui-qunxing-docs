# game/packages/game-core/src/dnd/legendary.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorControlled,type DndIntent,type ManualTable} from '@aelzerant/contracts';
import {dndLegendaryOptions,dndIncapacitated,dndMaxSpeed,syncDndLegendary} from '@aelzerant/rules-engine';
```
</details>

## selectedDndLegendary

导出接口 · 源码第 4 行。

```ts
export function selectedDndLegendary(table: ManualTable, actor?: string): import("@source/packages/rules-engine/src/index").DndLegendaryOption | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actor` | 是 | `string` | — |

## dndLegendaryCandidates

导出接口 · 源码第 8 行。

```ts
export function dndLegendaryCandidates(table: ManualTable, after: string): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `after` | 否 | `string` | — |

## chooseDndLegendary

导出接口 · 源码第 11 行。

```ts
export function chooseDndLegendary(table: ManualTable, intent: Extract<DndIntent,{type:'legendary'}>, sender: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `intent` | 否 | `Extract<DndIntent,{type:'legendary'}>` | — |
| `sender` | 否 | `string` | — |

## restoreDndLegendaryMovement

导出接口 · 源码第 24 行。

```ts
export function restoreDndLegendaryMovement(table: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |

## payDndLegendary

导出接口 · 源码第 28 行。

```ts
export function payDndLegendary(table: ManualTable, actor: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actor` | 否 | `string` | — |

## assertDndLegendaryIntent

导出接口 · 源码第 36 行。

Restrict the ordinary HUD to the selected legendary option; no client supplied costs.

```ts
export function assertDndLegendaryIntent(table: ManualTable, intent: DndIntent): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `intent` | 否 | `DndIntent` | — |
