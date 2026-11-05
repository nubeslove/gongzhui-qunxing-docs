# game/packages/contracts/src/lancer-arena-generation.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## ROGUE_BIOMES

导出接口 · 源码第 2 行。

Stable recipe; geometry RNG is independent of the mutable combat RNG.

```ts
export const ROGUE_BIOMES = ['ocean', 'jungle', 'desert', 'plain', 'vacuum'] as const;
```

## RogueBattlefieldRecipe

导出接口 · 源码第 3 行。

```ts
export interface RogueBattlefieldRecipe {
    version: 1;
    seed: number;
    biome: typeof ROGUE_BIOMES[number];
    scale: 0 | 1 | 2;
    layout: 0 | 1 | 2 | 3;
    cover: 0 | 1 | 2 | 3;
    objective: 0 | 1 | 2;
    hazard: 0 | 1 | 2;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `seed` | 否 | `number` | 见结构定义及所属功能文档 |
| `biome` | 否 | `typeof ROGUE_BIOMES[number]` | 见结构定义及所属功能文档 |
| `scale` | 否 | `0&#124;1&#124;2` | 见结构定义及所属功能文档 |
| `layout` | 否 | `0&#124;1&#124;2&#124;3` | 见结构定义及所属功能文档 |
| `cover` | 否 | `0&#124;1&#124;2&#124;3` | 见结构定义及所属功能文档 |
| `objective` | 否 | `0&#124;1&#124;2` | 见结构定义及所属功能文档 |
| `hazard` | 否 | `0&#124;1&#124;2` | 见结构定义及所属功能文档 |

## validRogueBattlefield

导出接口 · 源码第 4 行。

```ts
export function validRogueBattlefield(v: RogueBattlefieldRecipe): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `RogueBattlefieldRecipe` | — |
