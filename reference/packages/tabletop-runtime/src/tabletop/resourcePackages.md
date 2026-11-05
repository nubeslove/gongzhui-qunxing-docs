# game/packages/tabletop-runtime/src/tabletop/resourcePackages.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyStory,parseManualTable,installResourcePackage,resolveResourcePackages,type ManualTable,type ResourcePackage} from '@aelzerant/contracts';
import {changeStoryResourcePackage,type StoryResourcePackageChange} from '@aelzerant/session/core';
```
</details>

## previewTableResourcePackage

导出接口 · 源码第 3 行。

```ts
export function previewTableResourcePackage(table: ManualTable, pkg: ResourcePackage, hash: string): import("@source/packages/contracts/src/resource-packages").ResourcePackageImpact[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `pkg` | 否 | `ResourcePackage` | — |
| `hash` | 否 | `string` | — |

## changeTableResourcePackage

导出接口 · 源码第 6 行。

```ts
export function changeTableResourcePackage(table: ManualTable, senderId: string, change: StoryResourcePackageChange): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `senderId` | 否 | `string` | — |
| `change` | 否 | `StoryResourcePackageChange` | — |
