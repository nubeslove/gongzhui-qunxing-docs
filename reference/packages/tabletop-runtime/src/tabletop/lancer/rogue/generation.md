# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/generation.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {ROGUE_BIOMES,type RogueBattlefieldRecipe,type ManualBlock,type RogueHazard} from '@aelzerant/contracts';
import type {ArenaMap} from './encounters';
```
</details>

## drawArenaRecipe

导出接口 · 源码第 13 行。

```ts
export function drawArenaRecipe(random: ()=>number): RogueBattlefieldRecipe;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `random` | 否 | `()=>number` | — |

## Point

内部依赖类型 · 源码第 17 行。

```ts
type Point = {
    x: number;
    y: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |

## generatedArenaPoints

导出接口 · 源码第 18 行。

```ts
export function generatedArenaPoints(m: ArenaMap, original: Point[]): Point[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `ArenaMap` | — |
| `original` | 否 | `Point[]` | — |

## ModulePart

内部依赖类型 · 源码第 23 行。

```ts
type ModulePart = [
    number,
    number,
    number,
    number,
    number
];
```

## generatedArenaBlocks

导出接口 · 源码第 27 行。

```ts
export function generatedArenaBlocks(m: ArenaMap, points: Point[]): ManualBlock[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `ArenaMap` | — |
| `points` | 否 | `Point[]` | — |

## generatedArenaHazard

导出接口 · 源码第 61 行。

Next-round warning: bounded patch or alternating flank, never a deployment band.

```ts
export function generatedArenaHazard(m: ArenaMap, round: number): RogueHazard|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `ArenaMap` | — |
| `round` | 否 | `number` | — |
