# game/packages/game-core/src/lancer/coordination.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerBattle,LancerCombatUnit} from '@aelzerant/contracts';
import {lancerActivationBody} from './pilot';
import {lancerGMControls} from './control-state';
```
</details>

## lancerCoordinationEpoch

导出接口 · 源码第 5 行。

```ts
export const lancerCoordinationEpoch: (b: LancerBattle): string;
```

## lancerCoordinationVoters

导出接口 · 源码第 6 行。

```ts
export function lancerCoordinationVoters(b: LancerBattle): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |

## lancerCoordinationRequests

导出接口 · 源码第 9 行。

```ts
export function lancerCoordinationRequests(b: LancerBattle): { unit: string; votes: string[]; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |

## lancerCoordinationReady

导出接口 · 源码第 13 行。

```ts
export function lancerCoordinationReady(b: LancerBattle, u: LancerCombatUnit): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
