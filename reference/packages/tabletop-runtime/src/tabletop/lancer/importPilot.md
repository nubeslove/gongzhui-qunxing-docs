# game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {canonicalJson,emptyStory,parseManualActor,placeEntity,storyGm,storyText,type ManualActor,type ManualTable} from '@aelzerant/contracts';
import {worldContentPacks} from './content';
import {progressionIssues} from './progression';
```
</details>

## LancerPilotImportAction

导出接口 · 源码第 5 行。

```ts
export type LancerPilotImportAction = {
    kind: 'lancer.importPilot';
    id: string;
    actor: ManualActor;
    exception?: {
        reason: string;
    };
    folderId?: string | null;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'lancer.importPilot'` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `actor` | 否 | `ManualActor` | 见结构定义及所属功能文档 |
| `exception` | 是 | `{reason:string}` | 见结构定义及所属功能文档 |
| `exception.reason` | 否 | `string` | 见结构定义及所属功能文档 |
| `folderId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |

## prepareLancerPilotImport

导出接口 · 源码第 7 行。

A world always receives a new independent actor. Content is retained for adjustment.

```ts
export function prepareLancerPilotImport(table: ManualTable, ownerId: string, source: ManualActor, options: {id:string;exception?:{reason:string}}): { actor: ManualActor; issues: string[]; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `ownerId` | 否 | `string` | — |
| `source` | 否 | `ManualActor` | — |
| `options` | 否 | `{id:string;exception?:{reason:string}}` | — |

## importWorldLancerPilot

导出接口 · 源码第 28 行。

```ts
export function importWorldLancerPilot(table: ManualTable, playerId: string, command: LancerPilotImportAction): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `playerId` | 否 | `string` | — |
| `command` | 否 | `LancerPilotImportAction` | — |
