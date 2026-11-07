# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/modernObjectives.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {lancerObject,lancerObjectToken,type ManualTable} from '@aelzerant/contracts';
import {lancerDistance} from '@aelzerant/game-core';
import {arenaMapForEncounter} from './encounters';
import {arenaObjectId,scenarioDefinition,scenarioPoints} from './scenarios';
import {arenaReinforcementPlan,spawnArenaEnemy} from './enemies';
import {alarm,moveEscort,updateBoss} from './objectives';
import {completeArenaPrimary,resolveArenaWithdrawal,updateArenaTasks} from './missionProgress';
import {finishRogueBattle} from './run';
```
</details>

## settleModernArena

导出接口 · 源码第 11 行。

Generation two keeps the main objective, optional objectives and withdrawal independent.

```ts
export function settleModernArena(t: ManualTable): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
