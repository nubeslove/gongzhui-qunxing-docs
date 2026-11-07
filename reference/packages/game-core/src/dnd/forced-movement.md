# game/packages/game-core/src/dnd/forced-movement.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {manualSightFeatures,sceneRayBlocked,type DndMagicJob,type ManualActor,type ManualTable} from '@aelzerant/contracts';
import {dndTokenOverlapsBlock} from './movement';
import {dndZoneEntryJobs} from './ongoing-zones';
import type {SorceryContext} from './sorcery';
```
</details>

## pushDndActor

导出接口 · 源码第 7 行。

Push along the line between token centers; stop before walls, occupants or the map edge.

```ts
export function pushDndActor(table: ManualTable, a: ManualActor, target: ManualActor, feet: 5|10, ctx: Pick<SorceryContext,'now'|'random'|'rollLog'|'log'>, pull?: boolean): DndMagicJob[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `target` | 否 | `ManualActor` | — |
| `feet` | 否 | `5&#124;10` | — |
| `ctx` | 否 | `Pick<SorceryContext,'now'&#124;'random'&#124;'rollLog'&#124;'log'>` | — |
| `pull` | 是 | `boolean` | false |
