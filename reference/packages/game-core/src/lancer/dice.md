# game/packages/game-core/src/lancer/dice.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerDamagePool } from '@aelzerant/contracts';
```
</details>

## LancerRandom

导出接口 · 源码第 2 行。

```ts
export type LancerRandom = () => number;
```

## lancerMaximum

导出接口 · 源码第 3 行。

```ts
export function lancerMaximum(expression: string): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `expression` | 否 | `string` | — |

## lancerDamagePool

导出接口 · 源码第 5 行。

```ts
export function lancerDamagePool(expression: string, r: LancerRandom, overkill?: boolean): LancerDamagePool;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `expression` | 否 | `string` | — |
| `r` | 否 | `LancerRandom` | — |
| `overkill` | 是 | `boolean` | false |

## lancerPoolDamage

导出接口 · 源码第 10 行。

```ts
export function lancerPoolDamage(pool: LancerDamagePool, critical: boolean, r: LancerRandom, overkill?: boolean): {total:number;heat:number;text:string};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `pool` | 否 | `LancerDamagePool` | — |
| `critical` | 否 | `boolean` | — |
| `r` | 否 | `LancerRandom` | — |
| `overkill` | 是 | `boolean` | false |

## lancerDie

导出接口 · 源码第 16 行。

```ts
export function lancerDie(sides: number, random: LancerRandom): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `sides` | 否 | `number` | — |
| `random` | 否 | `LancerRandom` | — |

## lancerRoll

导出接口 · 源码第 17 行。

```ts
export function lancerRoll(expression: string, random: LancerRandom, critical?: boolean, overkill?: boolean): {total:number;text:string;heat:number};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `expression` | 否 | `string` | — |
| `random` | 否 | `LancerRandom` | — |
| `critical` | 是 | `boolean` | false |
| `overkill` | 是 | `boolean` | false |

## lancerCheck

导出接口 · 源码第 26 行。

```ts
export function lancerCheck(modifier: number, accuracy: number, random: LancerRandom): {total:number;die:number;text:string};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modifier` | 否 | `number` | — |
| `accuracy` | 否 | `number` | — |
| `random` | 否 | `LancerRandom` | — |
