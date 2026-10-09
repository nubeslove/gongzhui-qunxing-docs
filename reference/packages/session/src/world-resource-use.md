# game/packages/session/src/world-resource-use.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyStory,actorControlled,actorControllers} from '@aelzerant/contracts';
import { sceneRayBlocked } from '@aelzerant/contracts';
import { nextRandom, hasLineOfSight } from '@aelzerant/game-core';
import { worldSceneId, visibleTokenIds } from './world-view';
import { authorizeResourceUse, parseResourceUse, resourceUseIssues } from './resource-use';
import { resolveResource } from './resource-runtime';
import type { WorldHandler } from './world-types';
```
</details>

## useWorldResource

导出接口 · 源码第 8 行。

```ts
export const useWorldResource: (world: import("@source/packages/session/src/world-types").WorldDocument, action: import("@source/packages/session/src/world-types").WorldAction, context: import("@source/packages/session/src/world-types").WorldContext): void;
```
