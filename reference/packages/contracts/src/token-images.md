# game/packages/contracts/src/token-images.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isAssetPath} from './media';
import type {TokenPrototype} from './token-prototype';
```
</details>

## TOKEN_IMAGE_LIMIT

导出接口 · 源码第 4 行。

```ts
export const TOKEN_IMAGE_LIMIT = 200;
```

## parseTokenImages

导出接口 · 源码第 5 行。

```ts
export function parseTokenImages(raw: unknown): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## tokenPrototypeConfiguration

导出接口 · 源码第 10 行。

A new placement ID already carries randomness. Stable hashing makes retries independent of render or save timing.

```ts
export function tokenPrototypeConfiguration(prototype: TokenPrototype, placementId: string): import("@source/packages/contracts/src/token-appearance").TokenConfigurationValue;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `prototype` | 否 | `TokenPrototype` | — |
| `placementId` | 否 | `string` | — |

## ImageActor

内部依赖类型 · 源码第 16 行。

```ts
type ImageActor = {
    id: string;
    prototypeToken?: TokenPrototype;
    tokenInstance?: {
        sourceActorId?: string;
    };
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `prototypeToken` | 是 | `TokenPrototype` | 见结构定义及所属功能文档 |
| `tokenInstance` | 是 | `{sourceActorId?:string}` | 见结构定义及所属功能文档 |
| `tokenInstance.sourceActorId` | 是 | `string` | 见结构定义及所属功能文档 |

## tokenImageAlternatives

导出接口 · 源码第 17 行。

```ts
export function tokenImageAlternatives(actor: ImageActor|undefined, actors: readonly ImageActor[]): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ImageActor&#124;undefined` | — |
| `actors` | 否 | `readonly ImageActor[]` | — |

## tokenImagePattern

导出接口 · 源码第 22 行。

Bounded literal glob: * and flat {a,b} groups only. No regex supplied by the user.

```ts
export function tokenImagePattern(pattern: string): (value:string)=>boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `pattern` | 否 | `string` | — |

## matchTokenImages

导出接口 · 源码第 35 行。

```ts
export function matchTokenImages(assets: readonly {path:string;mime:string;name?:string}[], pattern: string): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `assets` | 否 | `readonly {path:string;mime:string;name?:string}[]` | — |
| `pattern` | 否 | `string` | — |
