# game/packages/tabletop-runtime/src/tabletop/compendiumImport.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {assertCompendiumImportCurrent,emptyStory,prepareCompendiumContent,pruneSceneJournals,parseManualTable,storyGm,type CompendiumImportBatch,type ManualTable} from '@aelzerant/contracts';
import {exportTableActor,transferTableActor} from './actorTransfer';
import {syncManualActorInheritance} from './tokenInstances';
import {assertTerraActorChanges} from '@aelzerant/contracts';
```
</details>

## importTableCompendium

导出接口 · 源码第 7 行。

Called exactly once inside TableCommitQueue; persistence and broadcasting stay with its owner.

```ts
export function importTableCompendium(current: ManualTable, senderId: string, batch: CompendiumImportBatch, members: ReadonlySet<string>, now?: number): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `current` | 否 | `ManualTable` | — |
| `senderId` | 否 | `string` | — |
| `batch` | 否 | `CompendiumImportBatch` | — |
| `members` | 否 | `ReadonlySet<string>` | — |
| `now` | 是 | `number` | Date.now() |
