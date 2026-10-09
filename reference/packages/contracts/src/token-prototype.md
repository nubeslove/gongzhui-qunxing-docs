# game/packages/contracts/src/token-prototype.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseTokenImages} from './token-images';
import {removeFromDocumentDirectory} from './document-directory';
import {parseTokenActorDelta,type TokenActorDelta} from './actor-delta';
import {parseTokenConfiguration,tokenConfiguration,type TokenConfigurationValue} from './token-appearance';
import {storyObject,storyText,type StoryWorkspace} from './story';
```
</details>

## TokenActorInstance

导出接口 · 源码第 7 行。

Independent token actors own real resources; the source ID enables optional field inheritance, never a shared resource pointer.

```ts
export interface TokenActorInstance {
    delta?: TokenActorDelta;
    sourceActorId?: string;
    tokenId: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `delta` | 是 | `TokenActorDelta` | 见结构定义及所属功能文档 |
| `sourceActorId` | 是 | `string` | 见结构定义及所属功能文档 |
| `tokenId` | 否 | `string` | 见结构定义及所属功能文档 |

## TokenPrototype

导出接口 · 源码第 8 行。

```ts
export interface TokenPrototype {
    configuration: TokenConfigurationValue;
    linked: boolean;
    randomImages?: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `configuration` | 否 | `TokenConfigurationValue` | 见结构定义及所属功能文档 |
| `linked` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `randomImages` | 是 | `string[]` | 见结构定义及所属功能文档 |

## parseTokenActorInstance

导出接口 · 源码第 9 行。

```ts
export function parseTokenActorInstance(raw: unknown): TokenActorInstance;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseTokenPrototype

导出接口 · 源码第 10 行。

```ts
export function parseTokenPrototype(raw: unknown): TokenPrototype;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## actorTokenPrototype

导出接口 · 源码第 11 行。

```ts
export function actorTokenPrototype(actor: {name?:string;prototypeToken?:TokenPrototype}, name?: string): TokenPrototype;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `{name?:string;prototypeToken?:TokenPrototype}` | — |
| `name` | 是 | `string` | '' |

## copyTokenActorStory

导出接口 · 源码第 13 行。

Called inside the same authoritative candidate transaction as token creation/removal.

```ts
export function copyTokenActorStory(story: StoryWorkspace|undefined, source: string, target: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace&#124;undefined` | — |
| `source` | 否 | `string` | — |
| `target` | 否 | `string` | — |

## removeTokenActorStory

导出接口 · 源码第 14 行。

```ts
export function removeTokenActorStory(story: StoryWorkspace|undefined, id: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace&#124;undefined` | — |
| `id` | 否 | `string` | — |
