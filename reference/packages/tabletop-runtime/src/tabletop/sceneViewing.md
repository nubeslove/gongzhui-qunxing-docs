# game/packages/tabletop-runtime/src/tabletop/sceneViewing.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {tableScene,storyGm,parseManualTable,type ManualTable} from '@aelzerant/contracts';
import type {TableAction} from './model';
```
</details>

## isSceneAction

导出接口 · 源码第 5 行。

```ts
export const isSceneAction: (action: TableAction): boolean;
```

## viewedTable

导出接口 · 源码第 6 行。

```ts
export function viewedTable(table: ManualTable, playerId: string): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `playerId` | 否 | `string` | — |

## scopedTableAction

导出接口 · 源码第 9 行。

```ts
export function scopedTableAction(table: ManualTable, action: TableAction): TableAction;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `action` | 否 | `TableAction` | — |

## tableActionScene

导出接口 · 源码第 12 行。

```ts
export function tableActionScene(table: ManualTable, playerId: string, action: TableAction): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `playerId` | 否 | `string` | — |
| `action` | 否 | `TableAction` | — |

## assertOtherSceneActors

导出接口 · 源码第 24 行。

Shared actors cannot be edited around a combat guard by viewing another map.

```ts
export function assertOtherSceneActors(before: ManualTable, after: ManualTable, sceneId: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `before` | 否 | `ManualTable` | — |
| `after` | 否 | `ManualTable` | — |
| `sceneId` | 否 | `string` | — |

## editViewedTable

导出接口 · 源码第 29 行。

Apply a GM editor against the visible scene, then restore the canonical world framing.

```ts
export function editViewedTable(table: ManualTable, sceneId: string, playerId: string, change: (value:ManualTable)=>void): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `sceneId` | 否 | `string` | — |
| `playerId` | 否 | `string` | — |
| `change` | 否 | `(value:ManualTable)=>void` | — |
