# game/packages/tabletop-runtime/src/tabletop/actorTransfer.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {PreparedCompendiumActor} from '@aelzerant/contracts';
import {copyActorOwnedItems,migrateOwnedItems} from '@aelzerant/contracts';
import {actorFile,parseActorFile,parseManualActor,transferActorResources,mergeActorResources,canonicalJson,placeEntity,storyId,storyText,type ActorFile,type ActorTransferCommand,type ManualTable} from '@aelzerant/contracts';
```
</details>

## exportTableActor

导出接口 · 源码第 4 行。

```ts
export function exportTableActor(table: ManualTable, id: string): ActorFile;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `id` | 否 | `string` | — |

## inspectTableActor

导出接口 · 源码第 5 行。

```ts
export function inspectTableActor(table: Pick<ManualTable,'systemId'|'systemVersion'>, raw: unknown): { file: ActorFile; actor: import("@source/packages/contracts/src/tabletop").ManualActor; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `Pick<ManualTable,'systemId'&#124;'systemVersion'>` | — |
| `raw` | 否 | `unknown` | — |

## transferTableActor

导出接口 · 源码第 7 行。

Runs on a cloned table inside the authority queue. No deployment or activation.

```ts
export function transferTableActor(table: ManualTable, action: ActorTransferCommand, prepared?: PreparedCompendiumActor): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `action` | 否 | `ActorTransferCommand` | — |
| `prepared` | 是 | `PreparedCompendiumActor` | — |
