# game/packages/game-core/src/lancer/mission-withdrawal.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualTable,TacticalMission,LancerCombatUnit} from '@aelzerant/contracts';
import {refreshLancerGrapples} from './grapple';
import {log} from './state';
```
</details>

## recordMissionWithdrawal

导出接口 · 源码第 5 行。

A recorded departure is not damage, destruction, or a substitute combat action.

```ts
export function recordMissionWithdrawal(table: ManualTable, m: TacticalMission, u: LancerCombatUnit, reason: 'routed'|'surrendered'): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `m` | 否 | `TacticalMission` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `reason` | 否 | `'routed'&#124;'surrendered'` | — |
