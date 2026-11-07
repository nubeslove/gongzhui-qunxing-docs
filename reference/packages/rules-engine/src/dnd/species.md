# game/packages/rules-engine/src/dnd/species.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndCharacter,DndDamageType} from '@aelzerant/contracts';
import {dndEntry,dndMod} from './index';
import {dndFeatureEffect,type DndFeatureAction} from './class-features';
```
</details>

## dndSpecies

导出接口 · 源码第 5 行。

```ts
export const dndSpecies: (c: DndCharacter, name: string): boolean;
```

## syncDndSpeciesResources

导出接口 · 源码第 6 行。

```ts
export function syncDndSpeciesResources(c: DndCharacter): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndDraconicDamage

导出接口 · 源码第 14 行。

```ts
export function dndDraconicDamage(c: DndCharacter): DndDamageType|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndSpeciesActions

导出接口 · 源码第 18 行。

```ts
export function dndSpeciesActions(c: DndCharacter): DndFeatureAction[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
