# game/packages/game-core/src/lancer/official-tactical-mission.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {settleTranscendence} from './official-transcendence';
import {recordMissionWithdrawal} from './mission-withdrawal';
import {settleRegret} from './official-regret';
import {newTacticalMission,lancerObjectToken,officialTacticalSummary,parseLancerNpc,type ManualTable,type LancerCombatUnit,type TacticalMission} from '@aelzerant/contracts';
import {lancerRegionContains} from './geometry';
import {applyLancerIntent} from './battle';
import {isWallflowerEidolon,wallflowerLayer} from './wallflower';
```
</details>

## settleOfficialTacticalMission

导出接口 · 源码第 27 行。

Official scenarios do not share the generic score-target victory rule.

```ts
export function settleOfficialTacticalMission(table: ManualTable, m: TacticalMission): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `m` | 否 | `TacticalMission` | — |
