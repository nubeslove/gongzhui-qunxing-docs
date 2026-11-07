# game/packages/game-core/src/dnd/smite.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndVerbalProblem} from './spell-components';
import type {ManualActor,ManualTable,DndPending} from '@aelzerant/contracts';
import {dndEntry,dndFreeSpellCast,dndPactPool,dndRaging,dndUntrainedArmor,dndSpellSources} from '@aelzerant/rules-engine';
import {dndCannotUseMagic} from './magic-fields';
```
</details>

## dndSmiteChoices

导出接口 · 源码第 6 行。

```ts
export function dndSmiteChoices(table: ManualTable, a: ManualActor, attack: NonNullable<DndPending['attack']>): { id: string; label: string; spell: string; slot: number; slotType: "spell" | "pact"; classId?: string; free: boolean; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `attack` | 否 | `NonNullable<DndPending['attack']>` | — |
