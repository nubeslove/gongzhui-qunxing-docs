# game/packages/session/src/world-authority.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {expandPlanarMovementPath} from '@aelzerant/contracts';
import {aafHandlers} from './world-aaf';
import {aafRuleHandlers} from './world-aaf-rules';
import {committedTokenMotion,emptySceneFeatures} from '@aelzerant/contracts';
import {recordWorldCombatJournal} from './world-combat-journal';
import {encounterHandlers} from './world-encounter';
import {recordWorldCombatCheckpoint,restoreWorldCombatCheckpoint} from './world-combat-rollback';
import {prepareWorldEnvironmentMove,resolveWorldEnvironment} from './world-environment-effects';
import {requestEnvironmentDecision} from './environment-decisions';
import {emptyStory,newWorldAssetPack} from '@aelzerant/contracts';
import {expandMovementPath,type MovementPoint} from '@aelzerant/contracts';
import {sceneResizeHandlers} from './world-scene-resize';
import {compendiumImportHandlers} from './world-compendium-import';
import {parseCompendiumImportBatch,type CompendiumImportBatch} from '@aelzerant/contracts';
import {directoryTableHandlers} from './world-directory-table';
import {directoryDeleteHandlers} from './world-directory-delete';
import {directoryAccessHandlers} from './world-directory-access';
import {ownedItemHandlers} from './world-owned-items';
import {actorAccessHandlers} from './world-actor-access';
import {actorTransferHandlers} from './world-actor-transfer';
import {syncActorInheritance} from '@aelzerant/contracts';
import {worldActorBusy} from './world-token-instances';
import {sceneArchiveHandlers} from './world-scene-archive';
import {sceneCopyHandlers} from './world-scene-copy';
import {tokenInstanceHandlers} from './world-token-instances';
import {runWorldRegions} from './world-regions';
import {recordWorldExploration} from './world-exploration';
import { storyGm, canonicalJson, isId, isInteger, isRecord } from "@aelzerant/contracts";
import type { CommandReceipt } from "./battle-authority";
import { actorHandlers } from "./world-actors";
import { catalogHandlers } from "./world-catalog";
import { narrativeHandlers } from "./world-narrative";
import { sceneHandlers } from "./world-scenes";
import { restoreWorld, parseActor } from "./world-persistence";
import { projectWorld } from "./world-view";
import { environmentHandlers } from "./world-environment";
import { audioHandlers } from "./world-audio";
import { adjudicationHandler } from "./world-adjudication";
import { storyHandlers } from './world-story';
import type { WorldDocument, WorldHandler } from "./world-types";
import { assertJson, requireId, requireInteger, requireText } from "./world-validation";
```
</details>

## WorldPersistence

导出接口 · 源码第 47 行。

```ts
export interface WorldPersistence {
    save(world: WorldDocument): void;
}
```

## WorldAuthority

导出接口 · 源码第 50 行。

Single writer. The full document is GM-only; player projections use a separate boundary.

```ts
export class WorldAuthority {
  importCompendium(senderId: string, raw: CompendiumImportBatch): Promise<CommandReceipt>;
  static create(id: string, hostId: string, name: string, seed: number, persistence?: WorldPersistence): WorldAuthority;
  static restore(value: unknown, worldId: string, hostId: string, persistence?: WorldPersistence): WorldAuthority;
  get revision(): number;
  get hostId(): string;
  get canUndo(): boolean;
  view(playerId?: string): import("@source/packages/session/src/world-view").WorldView;
  previewScene(id: string, playerId?: string): import("@source/packages/session/src/world-view").SceneView;
  exportSave(): WorldDocument;
  setMembers(ids: readonly string[]): void;
  subscribe(listener: () => void): () => void;
  useAsyncPersistence(persistence: { save(world: WorldDocument): Promise<void>; }): void;
  dispatchAsync(senderId: string, input: unknown, now?: number): Promise<CommandReceipt>;
  dispatch(senderId: string, input: unknown, now?: number): CommandReceipt;
}
```
