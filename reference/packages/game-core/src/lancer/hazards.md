# game/packages/game-core/src/lancer/hazards.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerBattle, LancerBattleStep, LancerCombatUnit, LancerDecision, LancerEffect, ManualMap, ManualToken } from '@aelzerant/contracts';
import { areaOrigin, lancerAreaCells, lancerAreaContains } from './areas';
import { lancerPosition } from './geometry';
import { lancerRoll, type LancerRandom } from './dice';
import { log } from './state';
```
</details>

## Point

内部依赖类型 · 源码第 7 行。

```ts
type Point = {
    x: number;
    y: number;
    z: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 否 | `number` | 见结构定义及所属功能文档 |

## offerLancerPlasma

导出接口 · 源码第 12 行。

```ts
export function offerLancerPlasma(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, s: Extract<LancerBattleStep,{kind:'feature'}>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'feature'}>` | — |

## respondLancerPlasma

导出接口 · 源码第 23 行。

```ts
export function respondLancerPlasma(b: LancerBattle, map: ManualMap, p: LancerDecision, to?: Point): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `p` | 否 | `LancerDecision` | — |
| `to` | 是 | `Point` | — |

## triggerLancerHazards

导出接口 · 源码第 34 行。

Start-of-turn damage is separate from the once-per-round entry trigger.

```ts
export function triggerLancerHazards(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, at: 'start'|'enter', r: LancerRandom, from?: Point): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `at` | 否 | `'start'&#124;'enter'` | — |
| `r` | 否 | `LancerRandom` | — |
| `from` | 是 | `Point` | — |
