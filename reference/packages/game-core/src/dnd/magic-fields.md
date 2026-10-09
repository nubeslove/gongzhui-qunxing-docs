# game/packages/game-core/src/dnd/magic-fields.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndMagicSuppression,dndAntimagicAt,type ManualTable,type DndActiveEffect,type MovementPoint} from '@aelzerant/contracts';
import {tokenCenter} from './geometry';
```
</details>

## dndCastOrigin

导出接口 · 源码第 4 行。

```ts
export function dndCastOrigin(table: ManualTable, actorId: string): MovementPoint|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actorId` | 否 | `string` | — |

## dndCannotUseMagic

导出接口 · 源码第 5 行。

```ts
export function dndCannotUseMagic(table: ManualTable, actorId: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actorId` | 否 | `string` | — |

## dndActorMagicBlock

导出接口 · 源码第 7 行。

An effect cannot affect a creature fully inside a protecting field. Partial footprints retain exposure.

```ts
export function dndActorMagicBlock(table: ManualTable, targetId: string, magic: Pick<DndActiveEffect,'slot'|'origin'>): "antimagic" | "globe" | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `targetId` | 否 | `string` | — |
| `magic` | 否 | `Pick<DndActiveEffect,'slot'&#124;'origin'>` | — |
