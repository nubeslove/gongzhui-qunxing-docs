# game/packages/game-core/src/dnd/war-caster.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndActionSpell} from '@aelzerant/rules-engine';
import {dndCanSeeActor,dndCanHearActor,type DndCastCommand,type ManualActor,type ManualTable} from '@aelzerant/contracts';
import {DND_CONDITION_NAMES,DND_SPELL_EXECUTORS,dndActiveSpellProfiles,dndCastingAbility,dndCharmedBy,dndEntry,dndFreeSpellCast,dndHumanoid,dndIncapacitated,dndPactPool,dndRaging,dndSpellChoiceOptions,dndSpellPayment,dndSpellRayCount,dndSpellSourceName,dndSpellSources,dndUntrainedArmor} from '@aelzerant/rules-engine';
import {dndCannotUseMagic,dndActorMagicBlock,dndCastOrigin} from './magic-fields';
import {dndVerbalProblem} from './spell-components';
import {dndCover} from './geometry';
import {tokenDistance} from './movement';
import {dndResizeProblem} from './resize';
```
</details>

## DndReactiveSpellChoice

导出接口 · 源码第 10 行。

```ts
export interface DndReactiveSpellChoice {
    id: string;
    label: string;
    spellName: string;
    variant: string;
    intent: DndCastCommand;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `spellName` | 否 | `string` | 见结构定义及所属功能文档 |
| `variant` | 否 | `string` | 见结构定义及所属功能文档 |
| `intent` | 否 | `DndCastCommand` | 见结构定义及所属功能文档 |

## dndHasWarCaster

导出接口 · 源码第 11 行。

```ts
export const dndHasWarCaster: (a: ManualActor): boolean;
```

## dndWarCasterChoices

导出接口 · 源码第 14 行。

Every offered cast targets only the creature that provoked. No client-supplied costs.

```ts
export function dndWarCasterChoices(table: ManualTable, a: ManualActor, targetId: string): DndReactiveSpellChoice[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `targetId` | 否 | `string` | — |
