# game/packages/game-core/src/dnd/grappling.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndMagicJob,ManualActor,ManualTable} from '@aelzerant/contracts';
import {dndTest,dndSpecies,dndConditionImmune,dndHas,dndIncapacitated,dndSpeed} from '@aelzerant/rules-engine';
import {dndContextTest} from './rolls';
import {dndEffectRollModifiers} from './effects';
import {pushDndActor} from './forced-movement';
import type {SorceryContext} from './sorcery';
```
</details>

## Unarmed

内部依赖类型 · 源码第 8 行。

```ts
type Unarmed = Extract<DndMagicJob, {
    kind: 'unarmed-save';
}>;
```

## Escape

内部依赖类型 · 源码第 9 行。

```ts
type Escape = Extract<DndMagicJob, {
    kind: 'grapple-escape';
}>;
```

## dndUnarmedLabel

导出接口 · 源码第 10 行。

```ts
export const dndUnarmedLabel: (job: Unarmed): string;
```

## dndGrappleChoices

导出接口 · 源码第 11 行。

```ts
export function dndGrappleChoices(table: ManualTable, a: ManualActor, escape?: boolean): { id: string; label: string; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `escape` | 是 | `boolean` | false |

## dndUnarmedAutoFail

导出接口 · 源码第 18 行。

```ts
export const dndUnarmedAutoFail: (a: ManualActor): boolean;
```

## resolveDndUnarmed

导出接口 · 源码第 19 行。

```ts
export function resolveDndUnarmed(table: ManualTable, job: Unarmed, ctx: SorceryContext): DndMagicJob[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `job` | 否 | `Unarmed` | — |
| `ctx` | 否 | `SorceryContext` | — |

## resolveDndGrappleEscape

导出接口 · 源码第 27 行。

```ts
export function resolveDndGrappleEscape(table: ManualTable, job: Escape, ctx: SorceryContext): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `job` | 否 | `Escape` | — |
| `ctx` | 否 | `SorceryContext` | — |
