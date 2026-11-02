# game/packages/game-core/src/lancer/tactical-mission.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {TACTICAL_PLUGIN,regionAffectsFootprint,newTacticalMission,parseTacticalConfig,storyGm,storyObject,storyText,storyNumber,emptyStory,type ManualTable,type ManualToken,type TacticalMission,type TacticalConfig,type TacticalPoint} from '@aelzerant/contracts';
import {emptySceneFeatures,lancerEffectiveBlock,lancerObject,lancerObjectActive,type SceneDrawing} from '@aelzerant/contracts';
import {lancerBlockOverlaps} from './geometry';
```
</details>

## applyTacticalCommand

导出接口 · 源码第 39 行。

Invoked inside the existing authoritative table transaction.

```ts
export function applyTacticalCommand(table: ManualTable, raw: unknown, sender: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `raw` | 否 | `unknown` | — |
| `sender` | 否 | `string` | — |

## settleTacticalMission

导出接口 · 源码第 121 行。

Called once after a successful command, never from a render or a client timer.

```ts
export function settleTacticalMission(table: ManualTable, route?: {id:string;points:TacticalPoint[]}): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `route` | 是 | `{id:string;points:TacticalPoint[]}` | — |
