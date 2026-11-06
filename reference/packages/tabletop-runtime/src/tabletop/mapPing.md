# game/packages/tabletop-runtime/src/tabletop/mapPing.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyStory,parseManualTable,publicTable,tableScene,type ManualTable,type ScenePoint} from '@aelzerant/contracts';
import {tableActionScene,viewedTable} from './sceneViewing';
```
</details>

## MapPingAction

导出接口 · 源码第 4 行。

```ts
export type MapPingAction = {
    kind: 'map.ping';
    sceneScope?: string;
    point: ScenePoint;
    tokenId?: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'map.ping'` | 见结构定义及所属功能文档 |
| `sceneScope` | 是 | `string` | 见结构定义及所属功能文档 |
| `point` | 否 | `ScenePoint` | 见结构定义及所属功能文档 |
| `tokenId` | 是 | `string` | 见结构定义及所属功能文档 |

## applyMapPing

导出接口 · 源码第 7 行。

Public pings share their position with the whole scene, so private targets are never eligible.

```ts
export function applyMapPing(table: ManualTable, senderId: string, action: MapPingAction, nickname: string, memberIds?: ReadonlySet<string>): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `senderId` | 否 | `string` | — |
| `action` | 否 | `MapPingAction` | — |
| `nickname` | 否 | `string` | — |
| `memberIds` | 是 | `ReadonlySet<string>` | — |
