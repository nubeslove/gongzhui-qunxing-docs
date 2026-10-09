# game/packages/contracts/src/resource-access.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject,storyEnum,storyId,type StoryResource,type StoryWorkspace} from './story';
import type {DocumentAccess,AccessLevel} from './world-library';
```
</details>

## parseResourceAccess

导出接口 · 源码第 3 行。

```ts
export function parseResourceAccess(raw: unknown): DocumentAccess;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## resourceAccess

导出接口 · 源码第 4 行。

```ts
export function resourceAccess(resource: StoryResource, playerId?: string, gm?: boolean): AccessLevel;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `resource` | 否 | `StoryResource` | — |
| `playerId` | 是 | `string` | — |
| `gm` | 是 | `boolean` | false |

## resourceReadable

导出接口 · 源码第 5 行。

```ts
export const resourceReadable: (level: AccessLevel): level is "observer" | "owner";
```

## projectResources

导出接口 · 源码第 6 行。

```ts
export function projectResources(story: StoryWorkspace, playerId?: string): StoryResource[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `playerId` | 是 | `string` | — |
