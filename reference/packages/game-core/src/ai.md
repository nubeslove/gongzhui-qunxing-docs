# game/packages/game-core/src/ai.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { cellKey, gridDistance, hasLineOfSight, reachableCells } from "./geometry";
import type { CombatIntent, CombatState } from "./types";
```
</details>

## npcAutoIntent

导出接口 · 源码第 5 行。

Optional demo strategy. Authority checks its output exactly like human commands.

```ts
export function npcAutoIntent(state: CombatState): CombatIntent | null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |

## isTurnStale

导出接口 · 源码第 24 行。

```ts
export function isTurnStale(state: CombatState): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
