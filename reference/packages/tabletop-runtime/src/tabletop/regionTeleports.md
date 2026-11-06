# game/packages/tabletop-runtime/src/tabletop/regionTeleports.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorControlled,actorControllers} from '@aelzerant/contracts';
import {emptyStory,regionLanding,type ManualTable,type RegionNotice} from '@aelzerant/contracts';
import {lancerPosition} from '@aelzerant/game-core';
```
</details>

## SceneRegionEffect

导出接口 · 源码第 4 行。

```ts
export interface SceneRegionEffect {
    sceneId: string;
    effect: RegionNotice;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `effect` | 否 | `RegionNotice` | 见结构定义及所属功能文档 |

## teleportTableToken

导出接口 · 源码第 7 行。

Moves only the token. Authority decides recipient scenes; clients never submit destination coordinates.

```ts
export function teleportTableToken(table: ManualTable, request: SceneRegionEffect, members?: Iterable<string>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `request` | 否 | `SceneRegionEffect` | — |
| `members` | 是 | `Iterable<string>` | [] |
