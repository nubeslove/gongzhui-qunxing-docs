# game/packages/game-core/src/spiral/presentation.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {SpiralFrame,SpiralPose,SpiralData} from '@aelzerant/contracts';
import type {CombatState} from '../types';
import {aafUpkeep} from '@aelzerant/rules-engine';
import {aafSpeedValue} from '../aaf/state';
```
</details>

## spiralPoses

导出接口 · 源码第 5 行。

```ts
export const spiralPoses: (s: CombatState): SpiralPose[];
```

## SpiralRecorder

导出接口 · 源码第 6 行。

```ts
export type SpiralRecorder = (frame: Omit<SpiralFrame, 'poses'>) => void;
```

## recordSpiralBattle

导出接口 · 源码第 8 行。

Frames record committed outcomes, never reroll dice or recalculate damage in the renderer.

```ts
export function recordSpiralBattle(s: CombatState, d: SpiralData, enemyPhase: boolean, run: (record:SpiralRecorder)=>void): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `CombatState` | — |
| `d` | 否 | `SpiralData` | — |
| `enemyPhase` | 否 | `boolean` | — |
| `run` | 否 | `(record:SpiralRecorder)=>void` | — |
