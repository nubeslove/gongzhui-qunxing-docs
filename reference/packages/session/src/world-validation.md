# game/packages/session/src/world-validation.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorControlled} from '@aelzerant/contracts';
import { isFiniteNumber, isId, isInteger, isRecord, isText } from "@aelzerant/contracts";
import { isCombatantInput } from "@aelzerant/game-core";
import type { ActorDocument, ActorProfile, CatalogEntry, Visibility, WorldContext, WorldDocument } from "./world-types";
```
</details>

## requireId

导出接口 · 源码第 6 行。

```ts
export function requireId(value: unknown): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## requireText

导出接口 · 源码第 7 行。

```ts
export function requireText(value: unknown, max?: number): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
| `max` | 是 | `number` | 1000 |

## optionalText

导出接口 · 源码第 8 行。

```ts
export function optionalText(value: unknown, max?: number): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
| `max` | 是 | `number` | 1000 |

## requireNumber

导出接口 · 源码第 11 行。

```ts
export function requireNumber(value: unknown, min: number, max: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
| `min` | 否 | `number` | — |
| `max` | 否 | `number` | — |

## requireInteger

导出接口 · 源码第 14 行。

```ts
export function requireInteger(value: unknown, min: number, max: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
| `min` | 否 | `number` | — |
| `max` | 否 | `number` | — |

## requireBoolean

导出接口 · 源码第 17 行。

```ts
export function requireBoolean(value: unknown): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## requireRecord

导出接口 · 源码第 18 行。

```ts
export function requireRecord(value: unknown): Record<string, unknown>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## assertJson

导出接口 · 源码第 20 行。

Reject non-JSON values before canonicalization, cloning or extension storage.

```ts
export function assertJson(value: unknown, depth?: number, budget?: { nodes: number; }): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
| `depth` | 是 | `number` | 0 |
| `budget` | 是 | `{ nodes: number; }` | { nodes: 0 } |

## visibility

导出接口 · 源码第 33 行。

```ts
export function visibility(value: unknown): Visibility;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## idList

导出接口 · 源码第 36 行。

```ts
export function idList(value: unknown): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## assetReference

导出接口 · 源码第 40 行。

```ts
export function assetReference(value: unknown): string | null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## actorProfile

导出接口 · 源码第 46 行。

```ts
export function actorProfile(value: unknown): ActorProfile;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## ownedActor

导出接口 · 源码第 53 行。

```ts
export function ownedActor(world: WorldDocument, id: unknown, context: WorldContext): ActorDocument;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `id` | 否 | `unknown` | — |
| `context` | 否 | `WorldContext` | — |

## assertGm

导出接口 · 源码第 58 行。

```ts
export function assertGm(context: WorldContext): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `context` | 否 | `WorldContext` | — |

## parseCatalogEntry

导出接口 · 源码第 59 行。

```ts
export function parseCatalogEntry(value: unknown): CatalogEntry;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
