# game/packages/session/src/world-environment.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { gridDistance, setCombatMap } from "@aelzerant/game-core";
import type { WorldHandler } from "./world-types";
import { controlToken, getScene } from "./world-scenes";
import { assertGm, requireBoolean, requireInteger } from "./world-validation";
import { visibleCells } from "./world-view";
```
</details>

## environmentHandlers

导出接口 · 源码第 7 行。

```ts
export const environmentHandlers: Record<string, WorldHandler>;
```
