# game/packages/session/src/world-actor-transfer.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {PreparedCompendiumActor} from '@aelzerant/contracts';
import {copyActorOwnedItems,migrateOwnedItems} from '@aelzerant/contracts';
import {actorFile,parseActorFile,transferActorResources,mergeActorResources,canonicalJson,placeEntity,type ActorFile,type ActorTransferCommand,type StoryWorkspace} from '@aelzerant/contracts';
import {parseActor,restoreWorld} from './world-persistence';
import {assertGm,parseCatalogEntry,requireId,requireText} from './world-validation';
import type {ActorDocument,CatalogEntry,WorldDocument,WorldHandler} from './world-types';
```
</details>

## Source

内部依赖类型 · 源码第 5 行。

```ts
type Source = {
    actors: Record<string, ActorDocument>;
    catalog: Record<string, CatalogEntry>;
    story?: StoryWorkspace;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `actors` | 否 | `Record<string,ActorDocument>` | 见结构定义及所属功能文档 |
| `catalog` | 否 | `Record<string,CatalogEntry>` | 见结构定义及所属功能文档 |
| `story` | 是 | `StoryWorkspace` | 见结构定义及所属功能文档 |

## exportWorldActor

导出接口 · 源码第 6 行。

```ts
export function exportWorldActor(world: Source, id: string): ActorFile;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `Source` | — |
| `id` | 否 | `string` | — |

## inspectWorldActor

导出接口 · 源码第 7 行。

```ts
export function inspectWorldActor(raw: unknown): {file:ActorFile;actor:ActorDocument;catalog:CatalogEntry[]};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## transferWorldActor

导出接口 · 源码第 8 行。

```ts
export function transferWorldActor(world: WorldDocument, action: ActorTransferCommand, prepared?: PreparedCompendiumActor): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `action` | 否 | `ActorTransferCommand` | — |
| `prepared` | 是 | `PreparedCompendiumActor` | — |
