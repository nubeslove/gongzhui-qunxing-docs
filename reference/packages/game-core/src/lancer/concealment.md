# game/packages/game-core/src/lancer/concealment.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerBattle, LancerCombatUnit, ManualMap } from '@aelzerant/contracts';
import { lancerAreaContains } from './areas';
import { feature } from './features';
import { lancerDistance, lancerUnitLineOfSight, lancerTerrainCover } from './geometry';
import { clear, has, log } from './state';
```
</details>

## canLancerHide

导出接口 · 源码第 7 行。

```ts
export function canLancerHide(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, atEnd?: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `atEnd` | 是 | `boolean` | false |

## refreshLancerConcealment

导出接口 · 源码第 15 行。

```ts
export function refreshLancerConcealment(b: LancerBattle, map: ManualMap, endUnit?: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `endUnit` | 是 | `string` | — |
