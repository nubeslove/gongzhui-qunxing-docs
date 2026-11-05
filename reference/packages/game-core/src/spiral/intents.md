# game/packages/game-core/src/spiral/intents.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {SPIRAL_DIFFICULTY_RULES,type SpiralData,type SpiralThreat,type SpiralPoint} from '@aelzerant/contracts';
import {aafDistance,aafModifier} from '@aelzerant/rules-engine';
import type {CombatState,Combatant} from '../types';
import {cellKey,hasLineOfSight,movementCost,reachableCells} from '../geometry';
import {aafIncapacitated} from '../aaf/state';
```
</details>

## planSpiralThreats

导出接口 · 源码第 15 行。

Replan only after an authoritative event. Fixed ground casts preserve their cells for this round.

```ts
export function planSpiralThreats(s: CombatState, data: SpiralData, event?: {attackerId?:string;damagedIds?:string[]}): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `CombatState` | — |
| `data` | 否 | `SpiralData` | — |
| `event` | 是 | `{attackerId?:string;damagedIds?:string[]}` | {} |
