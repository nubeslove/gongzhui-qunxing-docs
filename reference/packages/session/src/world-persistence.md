# game/packages/session/src/world-persistence.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {elevationCellKey} from '@aelzerant/contracts';
import {assertCompendiumSystem,parseAafCharacter,parseAafCatalog} from '@aelzerant/contracts';
import {aafCharacterErrors} from '@aelzerant/rules-engine';
import {parseOwnedItems} from '@aelzerant/contracts';
import {parseActorAccess} from '@aelzerant/contracts';
import {parseEntityDirectories} from '@aelzerant/contracts';
import {parseTokenPrototype,parseTokenActorInstance} from '@aelzerant/contracts';
import {parseTokenAppearance} from '@aelzerant/contracts';
import { canonicalJson, parseSceneMap, parseSceneKind } from "@aelzerant/contracts";
import { cellKey, movementCost, restoreCombat } from "@aelzerant/game-core";
import type { ActorDocument, SceneDocument, WorldDocument } from "./world-types";
import { actorProfile, assertJson, assetReference, idList, optionalText, parseCatalogEntry, requireBoolean, requireId, requireInteger, requireNumber, requireRecord, requireText, visibility } from "./world-validation";
import { parseStory,parseSceneDirectory } from '@aelzerant/contracts';
```
</details>

## parseActor

导出接口 · 源码第 24 行。

```ts
export function parseActor(value: unknown): ActorDocument;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## restoreWorld

导出接口 · 源码第 84 行。

```ts
export function restoreWorld(value: unknown, worldId: string, hostId: string): WorldDocument;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
| `worldId` | 否 | `string` | — |
| `hostId` | 否 | `string` | — |
