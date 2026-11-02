# game/packages/tabletop-runtime/src/tabletop/gmEdit.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {canonicalJson, assertTokenRotationChange, parseManualTable, storyGm, storyObject, type ManualTable } from '@aelzerant/contracts';
import {applyRuntimeEdits,type RuntimeEdit} from '@aelzerant/contracts';
```
</details>

## applyRuntimeEdit

导出接口 · 源码第 3 行。

```ts
export function applyRuntimeEdit(table: ManualTable, raw: RuntimeEdit, senderId: string): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `raw` | 否 | `RuntimeEdit` | — |
| `senderId` | 否 | `string` | — |

## GmEditPatch

导出接口 · 源码第 7 行。

```ts
export type GmEditPatch = Pick<ManualTable, 'actors' | 'map' | 'journal' | 'privateNotes'>;
```

## applyGmEdit

导出接口 · 源码第 9 行。

Collaborative GMs can edit preparation, never owner identity, membership or publication metadata.

```ts
export function applyGmEdit(table: ManualTable, raw: unknown, senderId: string): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `raw` | 否 | `unknown` | — |
| `senderId` | 否 | `string` | — |
