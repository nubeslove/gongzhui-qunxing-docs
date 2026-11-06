# game/packages/game-core/src/lancer/system-choices.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {lancerDistance,lancerLineOfSight} from './geometry';
import type { LancerBattle, LancerBattleStep, LancerCombatUnit, LancerCondition, LancerDecision, ManualMap } from '@aelzerant/contracts';
import { LANCER_CONDITION_NAMES } from '@aelzerant/contracts';
import { stabilizeLancer, canStabilizeCondition } from './thermal-systems';
```
</details>

## offerLancerSystemChoice

导出接口 · 源码第 6 行。

```ts
export function offerLancerSystemChoice(b: LancerBattle, u: LancerCombatUnit, s: Extract<LancerBattleStep,{kind:'feature'}>, map: ManualMap): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'feature'}>` | — |
| `map` | 否 | `ManualMap` | — |

## respondLancerSystemChoice

导出接口 · 源码第 17 行。

```ts
export function respondLancerSystemChoice(b: LancerBattle, u: LancerCombatUnit, p: LancerDecision, choice: string, map: ManualMap): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `p` | 否 | `LancerDecision` | — |
| `choice` | 否 | `string` | — |
| `map` | 否 | `ManualMap` | — |
