# game/packages/contracts/src/official-wolf-outlines.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {applySirenSourceOutlines} from './official-siren-outlines';
import {applyWolfCoverInventory} from './official-wolf-covers';
import {dustSourceSheets,terminalIngress} from './official-source-overlays';
import type {ManualMap, ManualTable} from './tabletop';
import type {RegionShape} from './scene-region';
import {snapHexToken,type SceneGrid} from './scene-grid';
```
</details>

## Point

内部依赖类型 · 源码第 8 行。

```ts
type Point = [
    number,
    number
];
```

## Outline

内部依赖类型 · 源码第 9 行。

```ts
type Outline = {
    old: [
        number,
        number,
        number,
        number
    ];
    pixels: Point[];
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `old` | 否 | `[number, number, number, number]` | 见结构定义及所属功能文档 |
| `pixels` | 否 | `Point[]` | 见结构定义及所属功能文档 |

## Box

内部依赖类型 · 源码第 90 行。

```ts
type Box = [
    number,
    number,
    number,
    number
];
```

## applyOfficialWolfOutlines

导出接口 · 源码第 118 行。

```ts
export function applyOfficialWolfOutlines(map: ManualMap, key: string, id: (key:string)=>string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `key` | 否 | `string` | — |
| `id` | 否 | `(key:string)=>string` | — |

## applySirenEntryOutline

导出接口 · 源码第 188 行。

```ts
export function applySirenEntryOutline(map: ManualMap, key: string, zoneId: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `key` | 否 | `string` | — |
| `zoneId` | 否 | `string` | — |

## wolfSportStartingPosition

导出接口 · 源码第 216 行。

```ts
export function wolfSportStartingPosition(index: number, size: number): { x: number; y: number; } | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `index` | 否 | `number` | — |
| `size` | 否 | `number` | — |

## upgradeOfficialMapAreas

导出接口 · 源码第 243 行。

```ts
export function upgradeOfficialMapAreas(table: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
