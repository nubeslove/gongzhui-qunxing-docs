# game/packages/session/src/world-aaf.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {aafRuleHandlers} from './world-aaf-rules';
import { emptyAafCharacter, parseAafCharacter, parseAafCatalog, parseAafItemDefinition } from '@aelzerant/contracts';
import { AAF_CATALOG, aafCharacterErrors, aafTalentReason, aafTpSpent, aafTpTotal, aafRefund, aafItemActive, aafRefreshResources, aafNeedsBlockedCell, aafUsePool } from '@aelzerant/rules-engine';
import type {AafCharacter} from '@aelzerant/contracts';
import type { WorldHandler } from './world-types';
import { ownedActor, assertGm, requireId, requireInteger, requireBoolean, requireText } from './world-validation';
import { worldActorBusy } from './world-token-instances';
import {aafCharacterCommands,handleAafCharacter,applyAafEquipment,syncAafCombatEquipment} from './world-aaf-character';
```
</details>

## aafHandlers

导出接口 · 源码第 125 行。

```ts
export const aafHandlers: Record<string, WorldHandler>;
```
