# game/packages/session/src/world-view-validation.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {assertCompendiumSystem,parseAafCatalog,parseWorldAssetFile} from '@aelzerant/contracts';
import {parseStory,parseSceneDirectory,parseEntityDirectories} from '@aelzerant/contracts';
import {parseSceneThumbnailSource} from '@aelzerant/contracts';
import {parseTokenPresentation} from '@aelzerant/contracts';
import { parseSceneMap, parseSceneKind, type CombatStatePayload } from "@aelzerant/contracts";
import type { WorldView, SceneView } from "./world-view";
import {isAafSpeedMode,isAafTurnMovement,AAF_SPEED_MODES} from '@aelzerant/contracts';
import { parseActor, restoreWorld } from "./world-persistence";
import { assertJson, assetReference, optionalText, requireBoolean, requireId, requireInteger, requireNumber, requireRecord, requireText, visibility } from "./world-validation";
import {parseSpiralView} from '@aelzerant/game-core';
```
</details>

## parseWorldView

导出接口 · 源码第 17 行。

Wire boundary: validates and reconstructs only presentation fields.

```ts
export function parseWorldView(value: unknown): WorldView;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
