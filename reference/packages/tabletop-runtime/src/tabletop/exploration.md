# game/packages/tabletop-runtime/src/tabletop/exploration.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndPerception,dndPlayerSources,emptySceneFeatures} from '@aelzerant/contracts';
import {manualTokenObserver} from '@aelzerant/contracts';
import {partyVisionActor,actorControllers} from '@aelzerant/contracts';
import {recordSceneExploration,retainSceneExploration,storyGm,type ManualTable,type ManualMap,type ScenePoint,type SceneObserver} from '@aelzerant/contracts';
```
</details>

## recordTableExploration

导出接口 · 源码第 13 行。

Called by the host before saving. Preview and recipient projection never call this.

```ts
export function recordTableExploration(next: ManualTable, previous: ManualTable, reset?: boolean, movedToken?: string, members?: Iterable<string>, relocatedSceneId?: string, route?: ScenePoint[]): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `next` | 否 | `ManualTable` | — |
| `previous` | 否 | `ManualTable` | — |
| `reset` | 是 | `boolean` | false |
| `movedToken` | 是 | `string` | — |
| `members` | 是 | `Iterable<string>` | [] |
| `relocatedSceneId` | 是 | `string` | — |
| `route` | 是 | `ScenePoint[]` | — |
