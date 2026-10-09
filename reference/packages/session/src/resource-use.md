# game/packages/session/src/resource-use.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {ownedItemRoot,type OwnedItemActor} from '@aelzerant/contracts';
import { resourceAccess,resourceReadable,storyGm, storyId, storyList, storyObject, type StoryWorkspace, type GameSystemId, type ResourceActivity } from '@aelzerant/contracts';
import { grantedResourceIds } from './resource-runtime';
```
</details>

## ResourceUse

导出接口 · 源码第 4 行。

```ts
export interface ResourceUse {
    ownedItemId?: string;
    actorId: string;
    resourceId: string;
    activityId: string;
    targets: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `ownedItemId` | 是 | `string` | 见结构定义及所属功能文档 |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `resourceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `activityId` | 否 | `string` | 见结构定义及所属功能文档 |
| `targets` | 否 | `string[]` | 见结构定义及所属功能文档 |

## parseResourceUse

导出接口 · 源码第 5 行。

```ts
export function parseResourceUse(raw: unknown): ResourceUse;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## authorizeResourceUse

导出接口 · 源码第 6 行。

```ts
export function authorizeResourceUse(story: StoryWorkspace|undefined, request: ResourceUse, ownerId: string, senderId: string, controls: boolean, actor?: OwnedItemActor): { resource: import("@source/packages/contracts/src/story").StoryResource; activity: ResourceActivity; targets: string[]; gm: boolean; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace&#124;undefined` | — |
| `request` | 否 | `ResourceUse` | — |
| `ownerId` | 否 | `string` | — |
| `senderId` | 否 | `string` | — |
| `controls` | 否 | `boolean` | — |
| `actor` | 是 | `OwnedItemActor` | — |

## resourceUseIssues

导出接口 · 源码第 17 行。

```ts
export function resourceUseIssues(system: GameSystemId, a: ResourceActivity): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `system` | 否 | `GameSystemId` | — |
| `a` | 否 | `ResourceActivity` | — |
