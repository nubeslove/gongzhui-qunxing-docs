# game/packages/tabletop-runtime/src/tabletop/directoryDelete.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {checkedDirectoryDeletePlan,finishDirectoryDelete,emptyStory,storyGm,parseManualTable,type ManualTable,type DirectoryDeleteCommand} from '@aelzerant/contracts';
import {deleteDirectoryStoryDocuments} from '@aelzerant/session/core';
```
</details>

## deleteTableDirectory

导出接口 · 源码第 4 行。

Reuse domain deletions on an isolated candidate. Only the outer table authority saves it.

```ts
export function deleteTableDirectory(table: ManualTable, command: DirectoryDeleteCommand, senderId: string, remove: (table:ManualTable,kind:'actor'|'scene',id:string)=>ManualTable): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `command` | 否 | `DirectoryDeleteCommand` | — |
| `senderId` | 否 | `string` | — |
| `remove` | 否 | `(table:ManualTable,kind:'actor'&#124;'scene',id:string)=>ManualTable` | — |
