# game/packages/tabletop-runtime/src/tabletop/tokenInstances.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {readLancer} from './lancer/model';
import {syncActorInheritance,actorDeltaEqual} from '@aelzerant/contracts';
import {actorDeltaEmpty,changeActorInheritance,type ActorInheritanceMode,type ActorInheritanceState} from '@aelzerant/contracts';
import {actorTokenPrototype,tokenPrototypeConfiguration,copyTokenActorStory,removeTokenActorStory,type ManualTable,type ManualToken} from '@aelzerant/contracts';
```
</details>

## bindManualToken

导出接口 · 源码第 5 行。

```ts
export function bindManualToken(table: ManualTable, token: ManualToken, linked: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `token` | 否 | `ManualToken` | — |
| `linked` | 否 | `boolean` | — |

## removeManualTokenActor

导出接口 · 源码第 11 行。

Ended combat records retain their actors until explicitly cleared; no dangling battle references.

```ts
export function removeManualTokenActor(table: ManualTable, id: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `id` | 否 | `string` | — |

## applyManualPrototype

导出接口 · 源码第 12 行。

```ts
export function applyManualPrototype(table: ManualTable, token: ManualToken): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `token` | 否 | `ManualToken` | — |

## manualActorBusy

导出接口 · 源码第 14 行。

```ts
export function manualActorBusy(table: ManualTable, id: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `id` | 否 | `string` | — |

## applyManualInheritance

导出接口 · 源码第 15 行。

```ts
export function applyManualInheritance(table: ManualTable, id: string, mode: ActorInheritanceMode, expected: ActorInheritanceState): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `id` | 否 | `string` | — |
| `mode` | 否 | `ActorInheritanceMode` | — |
| `expected` | 否 | `ActorInheritanceState` | — |

## syncManualActorInheritance

导出接口 · 源码第 17 行。

```ts
export function syncManualActorInheritance(before: ManualTable, after: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `before` | 否 | `ManualTable` | — |
| `after` | 否 | `ManualTable` | — |
