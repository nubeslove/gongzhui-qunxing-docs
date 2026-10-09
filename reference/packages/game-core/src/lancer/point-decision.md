# game/packages/game-core/src/lancer/point-decision.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { knockbackLancer } from './displacement';
import { validateLancerPath, queueLancerPath, canLancerPass } from './voluntary-movement';
import type { LancerBattle, LancerCombatUnit, LancerDecision, ManualMap } from '@aelzerant/contracts';
import { lancerDistance, lancerFloor, lancerMovementCost, lancerPosition } from './geometry';
import { canReact, has, log, unit } from './state';
```
</details>

## askLancerPoint

导出接口 · 源码第 6 行。

```ts
export function askLancerPoint(b: LancerBattle, u: LancerCombatUnit, title: string, body: string, point: NonNullable<LancerDecision['point']>, key: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `title` | 否 | `string` | — |
| `body` | 否 | `string` | — |
| `point` | 否 | `NonNullable<LancerDecision['point']>` | — |
| `key` | 否 | `string` | — |

## validateLancerPoint

导出接口 · 源码第 9 行。

```ts
export function validateLancerPoint(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, spec: NonNullable<LancerDecision['point']>, to: {x:number;y:number;z:number}): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `spec` | 否 | `NonNullable<LancerDecision['point']>` | — |
| `to` | 否 | `{x:number;y:number;z:number}` | — |

## respondLancerPoint

导出接口 · 源码第 21 行。

```ts
export function respondLancerPoint(b: LancerBattle, map: ManualMap, p: LancerDecision, choice: string, to?: {x:number;y:number;z:number}): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `p` | 否 | `LancerDecision` | — |
| `choice` | 否 | `string` | — |
| `to` | 是 | `{x:number;y:number;z:number}` | — |
