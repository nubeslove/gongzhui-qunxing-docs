# game/packages/game-core/src/lancer/attack-planning.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerBattle, LancerCombatIntent, LancerCombatUnit, LancerCombatWeapon, LancerDecision, ManualMap, ManualToken } from '@aelzerant/contracts';
import { selectedLancerTargets } from './weapon-sequences';
import { feature } from './features';
import { lancerShotWeapon } from './weapon-profiles';
import { validateLancerPoint } from './point-decision';
import { validateWeapon } from './resolution';
import { has } from './state';
```
</details>

## Attack

内部依赖类型 · 源码第 9 行。

```ts
type Attack = Extract<LancerCombatIntent, {
    type: 'attack';
}>;
```

## Mobility

内部依赖类型 · 源码第 10 行。

```ts
type Mobility = {
    name: string;
    spec: NonNullable<LancerDecision['point']>;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `spec` | 否 | `NonNullable<LancerDecision['point']>` | 见结构定义及所属功能文档 |

## LancerAttackPlan

导出接口 · 源码第 11 行。

```ts
export interface LancerAttackPlan {
    movement: string[];
    point?: {
        x: number;
        y: number;
        z: number;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `movement` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `point` | 是 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `point.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `point.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `point.z` | 否 | `number` | 见结构定义及所属功能文档 |

## planLancerAttack

导出接口 · 源码第 34 行。

Pure feasibility check: never spends, rolls or chooses movement on behalf of a player.

```ts
export function planLancerAttack(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, i: Attack): LancerAttackPlan;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `Attack` | — |
