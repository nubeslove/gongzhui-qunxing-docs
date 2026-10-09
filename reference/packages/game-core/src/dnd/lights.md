# game/packages/game-core/src/dnd/lights.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualTable,MovementPoint,SceneRegion} from '@aelzerant/contracts';
import {dndRayBlocked,tokenCenter} from './geometry';
```
</details>

## validateDndLights

导出接口 · 源码第 3 行。

```ts
export function validateDndLights(table: ManualTable, actorId: string, points: MovementPoint[], previous?: MovementPoint[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actorId` | 否 | `string` | — |
| `points` | 否 | `MovementPoint[]` | — |
| `previous` | 是 | `MovementPoint[]` | — |

## setDndLights

导出接口 · 源码第 13 行。

```ts
export function setDndLights(table: ManualTable, region: SceneRegion, points: MovementPoint[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `region` | 否 | `SceneRegion` | — |
| `points` | 否 | `MovementPoint[]` | — |
