# game/packages/game-core/src/lancer/volley.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerBattle, LancerBattleStep, LancerCombatUnit, LancerCombatWeapon, ManualMap } from '@aelzerant/contracts';
import { lancerAreaTargets, validateLancerArea } from './areas';
import { validateWeapon } from './resolution';
import { log } from './state';
```
</details>

## planLancerVolley

导出接口 · 源码第 7 行。

Plan once after any pre-attack mobility, before rolling attacks or spending ammunition.

```ts
export function planLancerVolley(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, w: LancerCombatWeapon, step: Extract<LancerBattleStep,{kind:'attack'}>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |
| `step` | 否 | `Extract<LancerBattleStep,{kind:'attack'}>` | — |
