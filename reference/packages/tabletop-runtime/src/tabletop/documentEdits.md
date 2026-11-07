# game/packages/tabletop-runtime/src/tabletop/documentEdits.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorAccess,actorControlled,actorController} from '@aelzerant/contracts';
import type {ManualActor,ManualTable} from '@aelzerant/contracts';
```
</details>

## ActorEdit

导出接口 · 源码第 4 行。

```ts
export type ActorEdit = Pick<ManualActor, 'name' | 'ownerId' | 'public' | 'fields' | 'notes'>;
```

## WorldNotes

导出接口 · 源码第 5 行。

```ts
export type WorldNotes = Pick<ManualTable, 'journal' | 'privateNotes'>;
```

## actorEdit

导出接口 · 源码第 6 行。

```ts
export function actorEdit(actor: ManualActor): ActorEdit;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |

## sameDocument

导出接口 · 源码第 10 行。

Ignore object key order, but never metadata or concurrent field changes.

```ts
export function sameDocument(a: unknown, b: unknown): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `unknown` | — |
| `b` | 否 | `unknown` | — |

## mergeActorEdit

导出接口 · 源码第 17 行。

```ts
export function mergeActorEdit(previous: ManualActor|undefined, expected: ActorEdit, value: ActorEdit, gm: boolean, playerId: string): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `previous` | 否 | `ManualActor&#124;undefined` | — |
| `expected` | 否 | `ActorEdit` | — |
| `value` | 否 | `ActorEdit` | — |
| `gm` | 否 | `boolean` | — |
| `playerId` | 否 | `string` | — |

## applyNotesEdit

导出接口 · 源码第 24 行。

```ts
export function applyNotesEdit(table: ManualTable, expected: WorldNotes, value: WorldNotes, gm: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `expected` | 否 | `WorldNotes` | — |
| `value` | 否 | `WorldNotes` | — |
| `gm` | 否 | `boolean` | — |

## preservePlayerTokenMetadata

导出接口 · 源码第 29 行。

```ts
export function preservePlayerTokenMetadata(previous: ManualActor, submitted: ManualActor, playerId?: string): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `previous` | 否 | `ManualActor` | — |
| `submitted` | 否 | `ManualActor` | — |
| `playerId` | 是 | `string` | submitted.ownerId |
