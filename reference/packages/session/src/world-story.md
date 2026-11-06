# game/packages/session/src/world-story.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {aafLegacyCondition} from './world-aaf-rules';
import {actorControlled,actorControllers} from '@aelzerant/contracts';
import {scenePreloadFiles} from '@aelzerant/contracts';
import {worldSceneId,projectWorld} from './world-view';
import {numericRollData,isRecord} from '@aelzerant/contracts';
import { nextRandom } from '@aelzerant/game-core';
import { applyStoryCommand } from './story-workspace';
import type { WorldHandler } from './world-types';
import { useWorldResource } from './world-resource-use';
```
</details>

## storyHandlers

导出接口 · 源码第 11 行。

```ts
export const storyHandlers: Record<string, WorldHandler>;
```
