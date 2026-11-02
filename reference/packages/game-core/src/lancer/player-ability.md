# game/packages/game-core/src/lancer/player-ability.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseLancerPlayerAbility,LANCER_CONDITION_NAMES,type LancerBattle,type LancerCombatUnit,type LancerPlayerAbility,type LancerPlayerEffect,type ManualMap} from '@aelzerant/contracts';
import {lancerPosition} from './geometry';
import {clear,condition,has,log,queueLancerActionBurn,spend,unit,useReaction} from './state';
import {lancerRoll,type LancerRandom} from './dice';
import {pullLancerToPoint} from './displacement';
```
</details>

## queuePlayerAbility

导出接口 · 源码第 7 行。

```ts
export function queuePlayerAbility(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, raw: LancerPlayerAbility, request: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `raw` | 否 | `LancerPlayerAbility` | — |
| `request` | 否 | `string` | — |

## resolvePlayerEffect

导出接口 · 源码第 45 行。

Effects stay in the ordinary durable queue, including reactions between targets.

```ts
export function resolvePlayerEffect(b: LancerBattle, map: ManualMap, actor: string, source: string, e: LancerPlayerEffect, r: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `actor` | 否 | `string` | — |
| `source` | 否 | `string` | — |
| `e` | 否 | `LancerPlayerEffect` | — |
| `r` | 否 | `LancerRandom` | — |
