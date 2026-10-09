# game/packages/contracts/src/actor-delta.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## ActorDeltaMask

导出接口 · 源码第 2 行。

Sparse override ownership. Values stay in the materialized actor; no copy of the private base is stored.

```ts
export type ActorDeltaMask = {
    kind: 'value';
} | {
    kind: 'object';
    fields: Record<string, ActorDeltaMask>;
} | {
    kind: 'collection';
    entries: Record<string, ActorDeltaMask>;
    order?: boolean;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.kind` | 否 | `'value'` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'object'` | 见结构定义及所属功能文档 |
| `分支2.fields` | 否 | `Record<string,ActorDeltaMask>` | 见结构定义及所属功能文档 |
| `分支3.kind` | 否 | `'collection'` | 见结构定义及所属功能文档 |
| `分支3.entries` | 否 | `Record<string,ActorDeltaMask>` | 见结构定义及所属功能文档 |
| `分支3.order` | 是 | `boolean` | 见结构定义及所属功能文档 |

## TokenActorDelta

导出接口 · 源码第 3 行。

```ts
export interface TokenActorDelta {
    version: 1;
    revision: number;
    mask: ActorDeltaMask;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `mask` | 否 | `ActorDeltaMask` | 见结构定义及所属功能文档 |

## actorDeltaChanges

导出接口 · 源码第 9 行。

```ts
export function actorDeltaChanges(before: unknown, after: unknown): ActorDeltaMask|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `before` | 否 | `unknown` | — |
| `after` | 否 | `unknown` | — |

## mergeActorDeltaMasks

导出接口 · 源码第 20 行。

```ts
export function mergeActorDeltaMasks(previous: ActorDeltaMask|undefined, change: ActorDeltaMask|undefined): ActorDeltaMask|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `previous` | 否 | `ActorDeltaMask&#124;undefined` | — |
| `change` | 否 | `ActorDeltaMask&#124;undefined` | — |

## applyActorDelta

导出接口 · 源码第 26 行。

```ts
export function applyActorDelta(base: unknown, current: unknown, mask?: ActorDeltaMask): unknown;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `base` | 否 | `unknown` | — |
| `current` | 否 | `unknown` | — |
| `mask` | 是 | `ActorDeltaMask` | — |

## parseTokenActorDelta

导出接口 · 源码第 37 行。

```ts
export function parseTokenActorDelta(raw: unknown): TokenActorDelta;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## actorDeltaEmpty

导出接口 · 源码第 42 行。

```ts
export function actorDeltaEmpty(): TokenActorDelta;
```

## actorDeltaEqual

导出接口 · 源码第 43 行。

```ts
export function actorDeltaEqual(a: unknown, b: unknown): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `unknown` | — |
| `b` | 否 | `unknown` | — |

## remapActorDeltaMask

导出接口 · 源码第 45 行。

Registered ID maps only: free field names are never globally replaced.

```ts
export function remapActorDeltaMask(mask: ActorDeltaMask, embeddedIds: ReadonlyMap<string,string>, resourceIds: ReadonlyMap<string,string>, path?: string[]): ActorDeltaMask;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `mask` | 否 | `ActorDeltaMask` | — |
| `embeddedIds` | 否 | `ReadonlyMap<string,string>` | — |
| `resourceIds` | 否 | `ReadonlyMap<string,string>` | — |
| `path` | 是 | `string[]` | [] |
