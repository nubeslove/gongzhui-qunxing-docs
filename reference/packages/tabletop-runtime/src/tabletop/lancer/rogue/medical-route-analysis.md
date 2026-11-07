# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/medical-route-analysis.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import assert from 'node:assert/strict';
import {writeFileSync} from 'node:fs';
import {hexTokenNeighbours,hexInBounds,lancerObjectToken,type ManualToken} from '@aelzerant/contracts';
import {lancerPlacementCandidates,lancerDistance} from '@aelzerant/game-core';
import {lancerPosition,lancerMovementWeights} from '../../../../../game-core/src/lancer/geometry';
import {lancerDeploymentAvailable} from '../../../../../game-core/src/lancer/deployment-position';
import {ORDINARY_ARENA_MAPS,compatibleArenaMissions,buildArenaMap} from './encounters';
import {arenaObjectId} from './scenarios';
```
</details>

## Edge

内部依赖类型 · 源码第 11 行。

```ts
type Edge = {
    to: number;
    cost: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `to` | 否 | `number` | 见结构定义及所属功能文档 |
| `cost` | 否 | `number` | 见结构定义及所属功能文档 |
