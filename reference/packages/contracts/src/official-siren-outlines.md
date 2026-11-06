# game/packages/contracts/src/official-siren-outlines.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualMap} from './tabletop';
import type {RegionShape} from './scene-region';
```
</details>

## Point

内部依赖类型 · 源码第 4 行。

```ts
type Point = [
    number,
    number
];
```

## Box

内部依赖类型 · 源码第 5 行。

```ts
type Box = [
    number,
    number,
    number,
    number
];
```

## Area

内部依赖类型 · 源码第 6 行。

```ts
type Area = [
    old: Box,
    points: Point[]
];
```

## Sheet

内部依赖类型 · 源码第 7 行。

```ts
type Sheet = {
    frame: Box;
    native: Point;
    pitch: Point;
    areas: Record<string, Area>;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `frame` | 否 | `Box` | 见结构定义及所属功能文档 |
| `native` | 否 | `Point` | 见结构定义及所属功能文档 |
| `pitch` | 否 | `Point` | 见结构定义及所属功能文档 |
| `areas` | 否 | `Record<string,Area>` | 见结构定义及所属功能文档 |

## applySirenSourceOutlines

导出接口 · 源码第 47 行。

```ts
export function applySirenSourceOutlines(map: ManualMap, key: string, id: (s:string)=>string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `key` | 否 | `string` | — |
| `id` | 否 | `(s:string)=>string` | — |
