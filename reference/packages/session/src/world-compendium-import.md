# game/packages/session/src/world-compendium-import.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {assertCompendiumImportCurrent,emptyStory,prepareCompendiumContent,pruneSceneJournals,type CompendiumImportBatch} from '@aelzerant/contracts';
import {exportWorldActor,transferWorldActor} from './world-actor-transfer';
import {restoreWorld} from './world-persistence';
import {assertGm,requireId} from './world-validation';
import type {WorldDocument,WorldHandler} from './world-types';
```
</details>

## applyWorldCompendiumImport

导出接口 · 源码第 7 行。

```ts
export function applyWorldCompendiumImport(world: WorldDocument, batch: CompendiumImportBatch, senderId: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `batch` | 否 | `CompendiumImportBatch` | — |
| `senderId` | 否 | `string` | — |
