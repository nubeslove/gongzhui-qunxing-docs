# game/packages/session/src/world-token-instances.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorDeltaEmpty,changeActorInheritance,type ActorInheritanceMode,type ActorInheritanceState} from '@aelzerant/contracts';
import {copyTokenActorStory,removeTokenActorStory,actorTokenPrototype,parseTokenPrototype,canonicalJson} from '@aelzerant/contracts';
import type {WorldDocument,SceneDocument,TokenDocument,WorldHandler} from './world-types';
import {assertGm,requireId,requireBoolean} from './world-validation';
```
</details>

## bindWorldToken

导出接口 · 源码第 5 行。

```ts
export function bindWorldToken(world: WorldDocument, scene: SceneDocument, token: TokenDocument, linked: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `scene` | 否 | `SceneDocument` | — |
| `token` | 否 | `TokenDocument` | — |
| `linked` | 否 | `boolean` | — |

## removeWorldTokenActor

导出接口 · 源码第 11 行。

```ts
export function removeWorldTokenActor(world: WorldDocument, id: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `id` | 否 | `string` | — |

## requestedTokenBinding

导出接口 · 源码第 16 行。

```ts
export function requestedTokenBinding(world: WorldDocument, scene: SceneDocument, token: TokenDocument, raw: unknown): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `scene` | 否 | `SceneDocument` | — |
| `token` | 否 | `TokenDocument` | — |
| `raw` | 否 | `unknown` | — |

## worldActorBusy

导出接口 · 源码第 18 行。

```ts
export function worldActorBusy(world: WorldDocument, id: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `id` | 否 | `string` | — |
