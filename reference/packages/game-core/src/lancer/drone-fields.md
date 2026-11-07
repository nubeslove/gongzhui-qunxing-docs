# game/packages/game-core/src/lancer/drone-fields.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerBattle,LancerCombatUnit,LancerEffect,ManualMap,ManualToken} from '@aelzerant/contracts';
import {lancerAreaCells,lancerAreaContains} from './areas';
```
</details>

## inDroneField

导出接口 · 源码第 5 行。

```ts
export function inDroneField(b: LancerBattle, map: ManualMap, e: LancerEffect, t: ManualToken): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `e` | 否 | `LancerEffect` | — |
| `t` | 否 | `ManualToken` | — |

## refreshLancerDroneFields

导出接口 · 源码第 10 行。

Entity positions are authoritative; cells and immunity are rebuilt after movement or destruction.

```ts
export function refreshLancerDroneFields(b: LancerBattle, map: ManualMap): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |

## endLancerDroneFields

导出接口 · 源码第 26 行。

```ts
export function endLancerDroneFields(b: LancerBattle): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |

## droneFieldTechIssue

导出接口 · 源码第 30 行。

```ts
export function droneFieldTechIssue(u: LancerCombatUnit): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
