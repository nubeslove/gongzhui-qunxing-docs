# game/packages/tabletop-runtime/src/tabletop/dnd/tokenSize.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualActor,ManualTable} from '@aelzerant/contracts';
import {cleanDndEffects} from '@aelzerant/game-core';
```
</details>

## dndTokenSize

导出接口 · 源码第 3 行。

```ts
export function dndTokenSize(value: string|undefined): number|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `string&#124;undefined` | — |

## dndActorTokenSize

导出接口 · 源码第 7 行。

```ts
export function dndActorTokenSize(actor: ManualActor): number | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |

## syncDndTokenSizes

导出接口 · 源码第 8 行。

```ts
export function syncDndTokenSizes(before: ManualTable, after: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `before` | 否 | `ManualTable` | — |
| `after` | 否 | `ManualTable` | — |
