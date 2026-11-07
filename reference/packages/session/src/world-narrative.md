# game/packages/session/src/world-narrative.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { nextRandom } from "@aelzerant/game-core";
import type { WorldHandler } from "./world-types";
import { assertGm, assetReference, idList, optionalText, requireBoolean, requireId, requireInteger, requireNumber, requireText, visibility } from "./world-validation";
```
</details>

## narrativeHandlers

导出接口 · 源码第 5 行。

```ts
export const narrativeHandlers: Record<string, WorldHandler>;
```
