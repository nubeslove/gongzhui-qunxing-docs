# game/packages/tabletop-runtime/src/tabletop/dnd/creation.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isTerraSpecies,tokenConfiguration,blankResource,emptyStory,ownedItemFromResource,parseManualTable,placeEntity,storyGm,type ManualActor,type ManualTable,type ResourceKind} from '@aelzerant/contracts';
import {buildDndGuidedCharacter,dndBase,dndEntry,type DndGuidedInput,type DndEntry} from '@aelzerant/rules-engine';
```
</details>

## DndCreationAction

导出接口 · 源码第 4 行。

```ts
export type DndCreationAction = {
    kind: 'dnd.create';
    id: string;
    role: 'pc' | 'npc' | 'monster';
    name: string;
    ownerId?: string;
    folderId?: string | null;
    build?: DndGuidedInput;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'dnd.create'` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `role` | 否 | `'pc'&#124;'npc'&#124;'monster'` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `ownerId` | 是 | `string` | 见结构定义及所属功能文档 |
| `folderId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |
| `build` | 是 | `DndGuidedInput` | 见结构定义及所属功能文档 |

## applyDndCreation

导出接口 · 源码第 9 行。

```ts
export function applyDndCreation(table: ManualTable, senderId: string, action: DndCreationAction, members?: ReadonlySet<string>): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `senderId` | 否 | `string` | — |
| `action` | 否 | `DndCreationAction` | — |
| `members` | 是 | `ReadonlySet<string>` | — |
