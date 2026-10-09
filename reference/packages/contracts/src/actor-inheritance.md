# game/packages/contracts/src/actor-inheritance.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorDeltaChanges,actorDeltaEmpty,actorDeltaEqual,applyActorDelta,mergeActorDeltaMasks,type ActorDeltaMask} from './actor-delta';
import type {TokenActorInstance} from './token-prototype';
import type {StoryWorkspace} from './story';
```
</details>

## InheritableActor

导出接口 · 源码第 4 行。

```ts
export interface InheritableActor {
    id: string;
    tokenInstance?: TokenActorInstance;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `tokenInstance` | 是 | `TokenActorInstance` | 见结构定义及所属功能文档 |

## ActorContent

导出接口 · 源码第 5 行。

```ts
export interface ActorContent {
    actor: Record<string, unknown>;
    grants: Record<string, boolean>;
    counters: Record<string, {
        value: number;
        max: number;
    }>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `actor` | 否 | `Record<string,unknown>` | 见结构定义及所属功能文档 |
| `grants` | 否 | `Record<string,boolean>` | 见结构定义及所属功能文档 |
| `counters` | 否 | `Record<string,{value:number;max:number}>` | 见结构定义及所属功能文档 |

## tokenActorContent

导出接口 · 源码第 7 行。

```ts
export function tokenActorContent(actor: InheritableActor, story?: StoryWorkspace): ActorContent;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `InheritableActor` | — |
| `story` | 是 | `StoryWorkspace` | — |

## ActorInheritanceState

导出接口 · 源码第 15 行。

```ts
export interface ActorInheritanceState {
    instance: TokenActorInstance;
    content: ActorContent;
    source?: ActorContent;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `instance` | 否 | `TokenActorInstance` | 见结构定义及所属功能文档 |
| `content` | 否 | `ActorContent` | 见结构定义及所属功能文档 |
| `source` | 是 | `ActorContent` | 见结构定义及所属功能文档 |

## actorInheritanceState

导出接口 · 源码第 16 行。

```ts
export function actorInheritanceState(actor: InheritableActor, source: InheritableActor|undefined, story?: StoryWorkspace): ActorInheritanceState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `InheritableActor` | — |
| `source` | 否 | `InheritableActor&#124;undefined` | — |
| `story` | 是 | `StoryWorkspace` | — |

## ActorInheritanceMode

导出接口 · 源码第 17 行。

```ts
export type ActorInheritanceMode = 'inherit' | 'freeze' | 'restore';
```

## changeActorInheritance

导出接口 · 源码第 19 行。

Explicit GM transition. Restoring discards every local override; enabling preserves current differences.

```ts
export function changeActorInheritance(actor: InheritableActor, source: InheritableActor|undefined, story: StoryWorkspace|undefined, mode: ActorInheritanceMode, expected: ActorInheritanceState, busy?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `InheritableActor` | — |
| `source` | 否 | `InheritableActor&#124;undefined` | — |
| `story` | 否 | `StoryWorkspace&#124;undefined` | — |
| `mode` | 否 | `ActorInheritanceMode` | — |
| `expected` | 否 | `ActorInheritanceState` | — |
| `busy` | 是 | `boolean` | false |

## syncActorInheritance

导出接口 · 源码第 28 行。

Run inside the existing candidate transaction, before saving or publishing recipients.

```ts
export function syncActorInheritance(previous: readonly InheritableActor[], actors: readonly InheritableActor[], beforeStory: StoryWorkspace|undefined, story: StoryWorkspace|undefined, busy?: (id:string)=>boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `previous` | 否 | `readonly InheritableActor[]` | — |
| `actors` | 否 | `readonly InheritableActor[]` | — |
| `beforeStory` | 否 | `StoryWorkspace&#124;undefined` | — |
| `story` | 否 | `StoryWorkspace&#124;undefined` | — |
| `busy` | 是 | `(id:string)=>boolean` | ()=>false |

## actorOverridePaths

导出接口 · 源码第 43 行。

```ts
export function actorOverridePaths(mask: ActorDeltaMask, prefix?: string): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `mask` | 否 | `ActorDeltaMask` | — |
| `prefix` | 是 | `string` | '' |
