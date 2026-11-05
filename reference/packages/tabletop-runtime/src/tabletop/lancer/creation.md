# game/packages/tabletop-runtime/src/tabletop/lancer/creation.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {assertWorldStartingGrants,applyStartingGrants} from './startingGrants';
import {actorControlled,storyGm,emptyStory,placeEntity,type ManualActor,type ManualTable} from '@aelzerant/contracts';
import {worldContentPacks} from './content';
import {newLancerDraft,finishLancerProgression,levelOf} from './progression';
```
</details>

## LancerCreationAction

导出接口 · 源码第 6 行。

```ts
export type LancerCreationAction = {
    kind: 'lancer.create';
    id: string;
    name: string;
    folderId?: string | null;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'lancer.create'` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `folderId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |

## createWorldLancer

导出接口 · 源码第 9 行。

Creation is an owner-scoped command. Never accept a client-supplied owner or build budget.

```ts
export function createWorldLancer(table: ManualTable, playerId: string, action: LancerCreationAction): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `playerId` | 否 | `string` | — |
| `action` | 否 | `LancerCreationAction` | — |

## validateWorldLancerCreation

导出接口 · 源码第 31 行。

```ts
export function validateWorldLancerCreation(table: ManualTable, previous: ManualActor, submitted: ManualActor, playerId: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `previous` | 否 | `ManualActor` | — |
| `submitted` | 否 | `ManualActor` | — |
| `playerId` | 否 | `string` | — |
