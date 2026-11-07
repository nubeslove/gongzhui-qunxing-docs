# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/cargo.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {lancerObjectToken,type LancerCombatIntent,type ManualTable,type ManualMap,type LancerBattle} from '@aelzerant/contracts';
import {lancerDistance} from '@aelzerant/game-core';
```
</details>

## validateArenaCargo

导出接口 · 源码第 5 行。

```ts
export function validateArenaCargo(t: ManualTable, i: LancerCombatIntent): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `i` | 否 | `LancerCombatIntent` | — |

## trackArenaCargo

导出接口 · 源码第 25 行。

```ts
export function trackArenaCargo(t: ManualTable, i: LancerCombatIntent): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `i` | 否 | `LancerCombatIntent` | — |

## trackArenaCargoMovement

导出接口 · 源码第 41 行。

Forced and special movement moves the mech, but leaves its pod at the departure point.

```ts
export function trackArenaCargoMovement(t: ManualTable, before: LancerBattle, oldMap: ManualMap, intent: LancerCombatIntent): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `before` | 否 | `LancerBattle` | — |
| `oldMap` | 否 | `ManualMap` | — |
| `intent` | 否 | `LancerCombatIntent` | — |
