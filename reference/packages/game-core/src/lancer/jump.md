# game/packages/game-core/src/lancer/jump.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {hexTokenLine,isHexGrid,type LancerBattle,type LancerCombatUnit,type ManualMap,type ManualToken} from '@aelzerant/contracts';
import {lancerMovementCost,lancerFloor} from './geometry';
import {validateLancerPath} from './voluntary-movement';
import {has} from './state';
```
</details>

## validateLancerJump

导出接口 · 源码第 6 行。

Core p60: a horizontal half-speed leap, or one adjacent space up to SIZE high.

```ts
export function validateLancerJump(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, t: ManualToken, to: {x:number;y:number;z:number}, kind: 'horizontal'|'vertical'): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `ManualToken` | — |
| `to` | 否 | `{x:number;y:number;z:number}` | — |
| `kind` | 否 | `'horizontal'&#124;'vertical'` | — |
