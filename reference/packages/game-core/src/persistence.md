# game/packages/game-core/src/persistence.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {elevationCellKey} from '@aelzerant/contracts';
import { isInteger, isRecord, isId, parseSceneMap, isAafSpeedMode } from "@aelzerant/contracts";
import { cellKey, movementCost } from "./geometry";
import { isCombatantInput } from "./validation";
import type { CombatEvent, CombatState } from "./types";
import {aafPayUpkeep} from './aaf/turn';
import {parseAafFlow} from '@aelzerant/contracts';
```
</details>

## restoreCombat

导出接口 · 源码第 10 行。

Strict versioned full save, distinct from the intentionally incomplete player view.

```ts
export function restoreCombat(value: unknown): CombatState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## saveCombat

导出接口 · 源码第 70 行。

```ts
export function saveCombat(state: CombatState): CombatState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `CombatState` | — |
