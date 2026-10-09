# game/packages/contracts/src/actor-access.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseResourceAccess} from './resource-access';
import type {AccessLevel,DocumentAccess} from './world-library';
```
</details>

## ActorAccessSource

导出接口 · 源码第 3 行。

```ts
export interface ActorAccessSource {
    access?: DocumentAccess;
    owners?: readonly string[];
    ownerId?: string;
    visibility?: string;
    public?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `access` | 是 | `DocumentAccess` | 见结构定义及所属功能文档 |
| `owners` | 是 | `readonly string[]` | 见结构定义及所属功能文档 |
| `ownerId` | 是 | `string` | 见结构定义及所属功能文档 |
| `visibility` | 是 | `string` | 见结构定义及所属功能文档 |
| `public` | 是 | `boolean` | 见结构定义及所属功能文档 |

## parseActorAccess

导出接口 · 源码第 5 行。

```ts
export const parseActorAccess: (raw: unknown): DocumentAccess;
```

## actorAccess

导出接口 · 源码第 6 行。

```ts
export function actorAccess(actor: ActorAccessSource|undefined, playerId?: string, gm?: boolean): AccessLevel;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ActorAccessSource&#124;undefined` | — |
| `playerId` | 是 | `string` | — |
| `gm` | 是 | `boolean` | false |

## actorControlled

导出接口 · 源码第 12 行。

```ts
export const actorControlled: (actor: ActorAccessSource | undefined, playerId?: string, gm?: boolean): boolean;
```

## actorReadable

导出接口 · 源码第 13 行。

```ts
export const actorReadable: (actor: ActorAccessSource | undefined, playerId?: string, gm?: boolean): boolean;
```

## actorOwnership

导出接口 · 源码第 14 行。

```ts
export function actorOwnership(actor: ActorAccessSource): DocumentAccess;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ActorAccessSource` | — |

## actorControllers

导出接口 · 源码第 16 行。

Designated responders are deterministic; ownership of a document is not the right to answer another user's pending choice.

```ts
export function actorControllers(actor: ActorAccessSource, candidates?: Iterable<string>): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ActorAccessSource` | — |
| `candidates` | 是 | `Iterable<string>` | [] |

## actorController

导出接口 · 源码第 17 行。

```ts
export function actorController(actor: ActorAccessSource, fallback: string): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ActorAccessSource` | — |
| `fallback` | 否 | `string` | — |

## projectedActorAccess

导出接口 · 源码第 18 行。

```ts
export function projectedActorAccess(actor: ActorAccessSource, playerId?: string): {access?:DocumentAccess};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ActorAccessSource` | — |
| `playerId` | 是 | `string` | — |
