# game/packages/tabletop-runtime/src/tabletop/lancer/startingGrants.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseLancerStartingGrants,type LancerStartingGrant,type ManualActor,type ManualTable} from '@aelzerant/contracts';
import {ALL_TALENTS,worldContentPacks} from './content';
import {lancerGrowth} from '@aelzerant/rules-engine';
```
</details>

## startingGrants

导出接口 · 源码第 4 行。

```ts
export const startingGrants: (actor: ManualActor): LancerStartingGrant[];
```

## grantAmount

导出接口 · 源码第 5 行。

```ts
export const grantAmount: (actor: ManualActor, kind: LancerStartingGrant["kind"]): number;
```

## assertWorldStartingGrants

导出接口 · 源码第 6 行。

```ts
export function assertWorldStartingGrants(table: Pick<ManualTable,'story'>, raw: unknown): LancerStartingGrant[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `Pick<ManualTable,'story'>` | — |
| `raw` | 否 | `unknown` | — |

## growthForActor

导出接口 · 源码第 7 行。

```ts
export function growthForActor(actor: ManualActor): { skills: number; talents: number; triggerPoints: number; grit: number; licenses: number; coreBonuses: number; pilotHp: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |

## applyStartingGrants

导出接口 · 源码第 8 行。

```ts
export function applyStartingGrants(actor: ManualActor, grants: LancerStartingGrant[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `grants` | 否 | `LancerStartingGrant[]` | — |
