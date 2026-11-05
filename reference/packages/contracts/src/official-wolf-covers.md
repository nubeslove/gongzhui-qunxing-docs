# game/packages/contracts/src/official-wolf-covers.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualBlock,ManualMap} from './tabletop';
import {blockCoverGroups} from './block-cover-groups';
```
</details>

## Old

内部依赖类型 · 源码第 7 行。

```ts
type Old = [
    string,
    string,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];
```

## Box

内部依赖类型 · 源码第 8 行。

```ts
type Box = [
    string,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];
```

## Inventory

内部依赖类型 · 源码第 9 行。

```ts
type Inventory = {
    map: string;
    family: string;
    source: [
        number,
        number
    ];
    template: Pick<ManualBlock, 'color' | 'collisionOnly' | 'lancer'>;
    old: Old[];
    boxes: Box[];
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `map` | 否 | `string` | 见结构定义及所属功能文档 |
| `family` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 否 | `[number,number]` | 见结构定义及所属功能文档 |
| `template` | 否 | `Pick<ManualBlock,'color'&#124;'collisionOnly'&#124;'lancer'>` | 见结构定义及所属功能文档 |
| `old` | 否 | `Old[]` | 见结构定义及所属功能文档 |
| `boxes` | 否 | `Box[]` | 见结构定义及所属功能文档 |

## applyWolfCoverInventory

导出接口 · 源码第 399 行。

Only upgrade the complete, untouched published family. This also makes deletions
after this correction permanent: the old footprint is no longer recognizable.

```ts
export function applyWolfCoverInventory(map: ManualMap, key: string, id: (key:string)=>string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `key` | 否 | `string` | — |
| `id` | 否 | `(key:string)=>string` | — |
