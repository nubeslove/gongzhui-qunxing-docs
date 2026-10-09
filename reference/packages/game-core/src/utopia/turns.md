# game/packages/game-core/src/utopia/turns.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {settleUtopiaStartAreas} from './areas';
import type {UtopiaBattle} from '@aelzerant/contracts';
import {utopiaStats,utopiaHas,utopiaRoll,utopiaInstalled} from '@aelzerant/rules-engine';
import {unit,battle,control,requireGm,intact,clearCondition,condition,message,addLog,type UtopiaContext} from './state';
```
</details>

## prepare

导出接口 · 源码第 6 行。

```ts
export function prepare(x: UtopiaContext, ids: string[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `ids` | 否 | `string[]` | — |

## start

导出接口 · 源码第 14 行。

```ts
export function start(x: UtopiaContext): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |

## activate

导出接口 · 源码第 15 行。

```ts
export function activate(x: UtopiaContext, id: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `id` | 否 | `string` | — |

## requestEndTurn

导出接口 · 源码第 24 行。

```ts
export function requestEndTurn(x: UtopiaContext): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |

## finishTurn

导出接口 · 源码第 34 行。

```ts
export function finishTurn(x: UtopiaContext, id: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `id` | 否 | `string` | — |

## endBattle

导出接口 · 源码第 48 行。

```ts
export function endBattle(x: UtopiaContext): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |

## reinforce

导出接口 · 源码第 50 行。

```ts
export function reinforce(x: UtopiaContext, ids: string[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `ids` | 否 | `string[]` | — |
