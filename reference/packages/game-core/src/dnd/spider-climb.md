# game/packages/game-core/src/dnd/spider-climb.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualActor,ManualTable,MovementPoint} from '@aelzerant/contracts';
import {dndIncapacitated,dndMovementBudget,dndSpeed,dndSpiderClimbActive} from '@aelzerant/rules-engine';
import {planDndMove} from './movement';
import {dndMoveHazards} from './move-hazards';
```
</details>

## dndSpiderMoveProblem

导出接口 · 源码第 6 行。

```ts
export function dndSpiderMoveProblem(table: ManualTable, a: ManualActor): "" | "当前没有生效的蛛行术" | "当前状态不能进行蛛行移动" | "只能在自己的回合移动" | "本回合攀爬移动力已用完";
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |

## planDndSpiderMove

导出接口 · 源码第 14 行。

```ts
export function planDndSpiderMove(table: ManualTable, a: ManualActor, point: MovementPoint): { hazards: ("opportunity" | "terrain")[]; magicJump?: { paid: boolean; }; readySpent?: number; mode?: import("@source/packages/contracts/src/scene-environment").MovementChoice; actor: string; token: string; steps: { x: number; y: number; z: number; cost: number; }[]; declined: string[]; afterAttack?: { target: string; attack: string; mode: import("@source/packages/contracts/src/dnd").DndRollMode; light?: boolean; reckless?: boolean; sneakAttack?: boolean; }; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `point` | 否 | `MovementPoint` | — |
