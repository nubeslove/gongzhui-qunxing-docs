# game/packages/session/src/index.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { CombatIntent } from "@aelzerant/game-core";
```
</details>

## 重新导出的模块

```ts
export * from './directory-delete';
export * from './owned-items';
export * from "./battle-authority";
export * from "./battle-repository";
export * from "./world-types";
export * from "./world-authority";
export * from "./world-persistence";
export * from "./world-repository";
export * from "./world-indexeddb";
export * from "./world-view";
export * from "./world-view-validation";
export * from "./world-migration";
export { audioPosition } from "./world-audio";
export { searchCatalog } from "./world-catalog";
export * from './story-workspace';
export * from './resource-runtime';
export * from './resource-use';
export {appendRegionNotices} from './region-story';
export * from './region-macros';
export * from './region-decisions';
export {activateSceneAudio} from './story-scene-audio';
export {presentWorldToken} from './world-token-presentation';
export {exportWorldScene,importWorldScene,worldSceneArchiveTargets} from './world-scene-archive';
export {exportWorldActor,inspectWorldActor} from './world-actor-transfer';
export * from './directory-access';
export {applyWorldCompendiumImport} from './world-compendium-import';
export * from './environment-decisions';
export * from './encounter-management';
export * from './combat-journal';
export {settleStoryProgress,setQuestObjective} from './story-progress';
export * from './elevation-movement';
```

## Bindings

导出接口 · 源码第 22 行。

```ts
export type Bindings = Record<string, string>;
```

## bindToken

导出接口 · 源码第 24 行。

```ts
export function bindToken(bindings: Bindings, tokenId: string, playerId: string): Bindings;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `bindings` | 否 | `Bindings` | — |
| `tokenId` | 否 | `string` | — |
| `playerId` | 否 | `string` | — |

## unbindToken

导出接口 · 源码第 28 行。

```ts
export function unbindToken(bindings: Bindings, tokenId: string): Bindings;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `bindings` | 否 | `Bindings` | — |
| `tokenId` | 否 | `string` | — |

## tokenOwner

导出接口 · 源码第 34 行。

```ts
export function tokenOwner(bindings: Bindings, tokenId: string): string | null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `bindings` | 否 | `Bindings` | — |
| `tokenId` | 否 | `string` | — |

## authorizeIntent

导出接口 · 源码第 56 行。

玩家意图是否被授权：
- token 已绑定 → 仅绑定者本人可控制
- token 未绑定 → 仅 host（GM）可控制（NPC/未分配角色）

```ts
export function authorizeIntent(bindings: Bindings, hostId: string, playerId: string, intent: CombatIntent): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `bindings` | 否 | `Bindings` | — |
| `hostId` | 否 | `string` | — |
| `playerId` | 否 | `string` | — |
| `intent` | 否 | `CombatIntent` | — |
