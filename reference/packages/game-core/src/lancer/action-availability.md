# game/packages/game-core/src/lancer/action-availability.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {nhpOperationIssue} from './nhp';
import {lancerTurnContains} from './control-state';
import {aiOperationIssue} from './ai-control';
import {pilotGearIssue} from './pilot-gear';
import {lancerPilotActionIssue,pilotOperationIssue} from './pilot';
import {quickReactionIssue} from './quick-reaction';
import { leadershipIssue } from './leadership';
import { lancerTalentPaymentIssue } from './ability-costs';
import { techActionIssue } from './tech';
import { isDuelistAction, duelistActionIssue } from './duelist';
import { lancerSystemModeIssue } from './active-systems';
import type { LancerBattle, LancerCombatIntent, LancerCombatUnit, ManualMap } from '@aelzerant/contracts';
import { lancerNpcActionIssue } from './npc';
import { lancerWeaponModeIssue, lancerWeaponCanSkirmish } from './weapon-operation';
import { lancerWeaponRestriction } from './weapon-events';
import { lancerShotWeapon } from './weapon-profiles';
import { has } from './state';
import { canLancerHide } from './concealment';
import { lancerSystemActionName, lancerSystemDefinition } from './systems';
```
</details>

## lancerActionIssue

导出接口 · 源码第 28 行。

Does not roll dice, consume resources, enqueue triggers or mutate battle state.

```ts
export function lancerActionIssue(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, i: LancerCombatIntent): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `LancerCombatIntent` | — |
