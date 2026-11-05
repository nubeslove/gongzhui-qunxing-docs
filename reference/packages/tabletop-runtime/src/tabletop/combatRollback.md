# game/packages/tabletop-runtime/src/tabletop/combatRollback.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {revertCombatJournal} from '@aelzerant/session/core';
import {emptyStory,recordCheckpoint,storyGm,type ManualTable,type RollbackKind} from '@aelzerant/contracts';
import type {TableAction} from './model';
```
</details>

## recordTableCombatCheckpoint

导出接口 · 源码第 4 行。

```ts
export function recordTableCombatCheckpoint(before: ManualTable, next: ManualTable, action: TableAction, rolled?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `before` | 否 | `ManualTable` | — |
| `next` | 否 | `ManualTable` | — |
| `action` | 否 | `TableAction` | — |
| `rolled` | 是 | `boolean` | false |

## restoreTableCombatCheckpoint

导出接口 · 源码第 17 行。

```ts
export function restoreTableCombatCheckpoint(table: ManualTable, sender: string, action: Extract<TableAction,{kind:'combat.rollback'}>): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `sender` | 否 | `string` | — |
| `action` | 否 | `Extract<TableAction,{kind:'combat.rollback'}>` | — |
