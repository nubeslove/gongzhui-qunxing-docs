# game/packages/tabletop-runtime/src/heartsea/azur/package.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyAdventure,emptyDocumentDirectory,emptyStory,parseManualTable,sceneCanvasStyle,storyGm,type ManualTable,type StoryEntry,type StoryResource} from '@aelzerant/contracts';
import data from './content.generated.json';
import {withAzurAtlas} from './atlas';
import {createHeartseaAtlas} from '../atlas';
import {newHeartseaActor} from '../characters';
```
</details>

## AZUR_PACK

导出接口 · 源码第 7 行。

```ts
export const AZUR_PACK = 'heartsea-azur-ux';
```

## azurResources

导出接口 · 源码第 9 行。

```ts
export const azurResources: StoryResource[];
```

## installAzurSetting

导出接口 · 源码第 12 行。

Add a pack without replacing edits, existing atlas positions, actors, or saved scenes.

```ts
export function installAzurSetting(table: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |

## applyHeartseaContent

导出接口 · 源码第 24 行。

```ts
export function applyHeartseaContent(table: ManualTable, sender: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `sender` | 否 | `string` | — |

## prepareMicroVoyage

导出接口 · 源码第 49 行。

```ts
export function prepareMicroVoyage(table: ManualTable): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
