# game/packages/tabletop-runtime/src/tabletop/sceneCopy.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {copySceneFeatures,copyTokenActorStory,placeInSceneDirectory,emptyStory,resolvedSceneKind,type ManualTable} from '@aelzerant/contracts';
import {validateRegionMacros} from '@aelzerant/session/core';
```
</details>

## copyTableScene

导出接口 · 源码第 4 行。

```ts
export function copyTableScene(table: ManualTable, sourceId: string, id: string, name: string, folderId?: string|null): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `sourceId` | 否 | `string` | — |
| `id` | 否 | `string` | — |
| `name` | 否 | `string` | — |
| `folderId` | 是 | `string&#124;null` | — |
