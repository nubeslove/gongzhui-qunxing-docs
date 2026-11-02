# game/packages/tabletop-runtime/src/tabletop/useStoryResource.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {elevationDistance,emptyStory,actorAccess,actorControlled,actorController} from '@aelzerant/contracts';
import { DND_DAMAGE_TYPES, parseManualTable, publicTable, sceneRayBlocked, storyEnum, type ManualTable, type CombatTrace } from '@aelzerant/contracts';
import { authorizeResourceUse, parseResourceUse, resourceFormula, resourceUseIssues, type ResourceUse } from '@aelzerant/session/core';
import { applyDndIntent, dndCover } from '@aelzerant/game-core';
import { dndIncapacitated } from '@aelzerant/rules-engine';
import { readLancer } from './lancer/model';
```
</details>

## useStoryResource

导出接口 · 源码第 8 行。

```ts
export function useStoryResource(table: ManualTable, raw: ResourceUse, senderId: string, random?: () => number, trace?: (event:CombatTrace)=>void): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `raw` | 否 | `ResourceUse` | — |
| `senderId` | 否 | `string` | — |
| `random` | 是 | `() => number` | Math.random |
| `trace` | 是 | `(event:CombatTrace)=>void` | — |
