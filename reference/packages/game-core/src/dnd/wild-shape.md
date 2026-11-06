# game/packages/game-core/src/dnd/wild-shape.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndTokenOverlapsBlock} from './movement';
import {ensureDndSizeState,syncDndBodySizes} from './body-size';
import {parseTokenSenses,type DndCharacter,type ManualActor,type ManualTable} from '@aelzerant/contracts';
import {applyDndWildStats,DND_WILD_STAT_KEYS,dndWildEligible,dndWildFormInfo,dndMoonLevel,dndClassLevel,dndEntry,dndIncapacitated,syncDndCombatFeatures} from '@aelzerant/rules-engine';
```
</details>

## endDndWildShape

导出接口 · 源码第 6 行。

```ts
export function endDndWildShape(table: ManualTable, a: ManualActor): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |

## startDndWildShape

导出接口 · 源码第 12 行。

```ts
export function startDndWildShape(table: ManualTable, a: ManualActor, form: string, now: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `form` | 否 | `string` | — |
| `now` | 否 | `number` | — |

## cleanDndWildShapes

导出接口 · 源码第 23 行。

```ts
export function cleanDndWildShapes(table: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
