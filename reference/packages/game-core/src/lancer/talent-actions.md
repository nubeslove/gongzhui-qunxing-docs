# game/packages/game-core/src/lancer/talent-actions.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { lancerTalentPaymentIssue } from './ability-costs';
import { activateLeadership } from './leadership';
import { useDroneInvigorate } from './drone-talents';
import { spinAceThrusters } from './flight-talents';
import { useTorrent } from './ranged-talents';
import { activateDuelist } from './duelist';
import { useLancerKnockout } from './unarmed';
import type { LancerRandom } from './dice';
import type { LancerBattle, LancerCombatIntent, LancerCombatUnit, ManualMap } from '@aelzerant/contracts';
import { count, counter, feature } from './features';
import { lancerDistance } from './geometry';
import { askLancerPoint } from './point-decision';
import { condition, has, log, unit } from './state';
```
</details>

## activateLancerTalent

导出接口 · 源码第 14 行。

```ts
export function activateLancerTalent(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, intent: Extract<LancerCombatIntent,{type:'ability'}>, random: LancerRandom): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `intent` | 否 | `Extract<LancerCombatIntent,{type:'ability'}>` | — |
| `random` | 否 | `LancerRandom` | — |
