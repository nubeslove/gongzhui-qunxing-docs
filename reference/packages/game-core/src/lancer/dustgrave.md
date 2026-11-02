# game/packages/game-core/src/lancer/dustgrave.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerBattle,LancerCombatUnit,ManualMap} from '@aelzerant/contracts';
import {log} from './state';
```
</details>

## dustgraveBoss

导出接口 · 源码第 3 行。

```ts
export const dustgraveBoss: (u: LancerCombatUnit): boolean;
```

## dustgraveProtected

导出接口 · 源码第 4 行。

```ts
export const dustgraveProtected: (u: LancerCombatUnit): boolean;
```

## dustgraveShieldBreak

导出接口 · 源码第 6 行。

The first shield break discards overflow before HP damage, including a hit that removes exactly 30 shield.

```ts
export function dustgraveShieldBreak(b: LancerBattle, u: LancerCombatUnit, harm: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `harm` | 否 | `number` | — |

## refreshDustgraveBoss

导出接口 · 源码第 11 行。

```ts
export function refreshDustgraveBoss(b: LancerBattle, map: ManualMap): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
