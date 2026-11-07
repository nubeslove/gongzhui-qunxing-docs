# game/packages/contracts/src/world-publication-merge.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {withoutLancerRehearsal} from './lancer-preparation-runtime';
import {canonicalJson} from './index';
import {parseManualTable,type ManualTable} from './tabletop';
import {mergePublicationFields,type PublicationConflict,type PublicationChoices} from './publication-fields';
```
</details>

## 重新导出的模块

```ts
export {mergePublicationFields,type PublicationConflict,type PublicationConflictValues,type PublicationChoices} from './publication-fields';
```

## publicationConflictValue

导出接口 · 源码第 22 行。

Read one normalized stable-ID path without cloning or transferring the whole world.

```ts
export function publicationConflictValue(table: ManualTable, path: string): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `path` | 否 | `string` | — |

## mergeWorldPublication

导出接口 · 源码第 35 行。

Three-way, field-level merge. Arrays with stable IDs merge by identity, never by row index.
Runtime logs, pending decisions and active battles always belong to the live room.

```ts
export function mergeWorldPublication(base: ManualTable, draft: ManualTable, live: ManualTable, choices?: PublicationChoices): { conflicts: PublicationConflict[]; table: ManualTable; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `base` | 否 | `ManualTable` | — |
| `draft` | 否 | `ManualTable` | — |
| `live` | 否 | `ManualTable` | — |
| `choices` | 是 | `PublicationChoices` | {} |
