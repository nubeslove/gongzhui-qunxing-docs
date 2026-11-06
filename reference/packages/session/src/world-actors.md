# game/packages/session/src/world-actors.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {aafLegacyCondition} from './world-aaf-rules';
import {emptyStory,placeEntity,removeFromDocumentDirectory} from '@aelzerant/contracts';
import {emptyAafCharacter} from '@aelzerant/contracts';
import {emptyAafBuild} from '@aelzerant/rules-engine';
import type { WorldHandler } from "./world-types";
import { tickEffects } from "./world-effects";
import { actorProfile, assertGm, assetReference, idList, optionalText, ownedActor, requireBoolean, requireId, requireInteger, requireRecord, requireText, visibility } from "./world-validation";
```
</details>

## actorHandlers

导出接口 · 源码第 16 行。

Inventory and stat grants are GM commands; owners may equip granted items.

```ts
export const actorHandlers: Record<string, WorldHandler>;
```
