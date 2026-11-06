# game/packages/game-core/src/lancer/official-regret.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualTable,TacticalMission} from '@aelzerant/contracts';
import {drainLancer} from './resolution';
import {persistLancerScenery,syncLancerScenery} from './scene-objects';
```
</details>

## settleRegret

导出接口 · 源码第 5 行。

Wallflower p60: the two defense-clock consequences are independent.

```ts
export function settleRegret(table: ManualTable, m: TacticalMission, round: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `m` | 否 | `TacticalMission` | — |
| `round` | 否 | `number` | — |
