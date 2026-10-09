# game/packages/game-core/src/utopia/areas.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualToken,UtopiaArea} from '@aelzerant/contracts';
import {utopiaDamageRoll,utopiaStats} from '@aelzerant/rules-engine';
import {lancerLineOfSight} from '../lancer/geometry';
import {unit,battle,intact,type UtopiaContext} from './state';
import {utopiaSave} from './actions';
```
</details>

## inUtopiaArea

导出接口 · 源码第 6 行。

```ts
export const inUtopiaArea: (a: UtopiaArea, t: ManualToken): boolean;
```

## settleUtopiaStartAreas

导出接口 · 源码第 7 行。

```ts
export function settleUtopiaStartAreas(x: UtopiaContext, id: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `id` | 否 | `string` | — |

## areaCover

导出接口 · 源码第 16 行。

```ts
export function areaCover(x: UtopiaContext, attacker: string, target: string): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `attacker` | 否 | `string` | — |
| `target` | 否 | `string` | — |

## areaReduction

导出接口 · 源码第 17 行。

```ts
export function areaReduction(x: UtopiaContext, target: string): 0 | 3;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `target` | 否 | `string` | — |
