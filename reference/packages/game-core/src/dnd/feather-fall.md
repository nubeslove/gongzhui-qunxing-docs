# game/packages/game-core/src/dnd/feather-fall.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndCanSeeActor,type ManualActor,type ManualTable} from '@aelzerant/contracts';
import {dndEntry,dndActiveSpellProfiles,dndIncapacitated,dndRaging,dndUntrainedArmor,dndSpellSources,dndFreeSpellCast,dndPactPool,dndSpellSourceName} from '@aelzerant/rules-engine';
import {dndVerbalProblem} from './spell-components';
import {dndCannotUseMagic} from './magic-fields';
import {dndIsFalling} from './falling';
import {tokenDistance} from './movement';
import {dndCover} from './geometry';
```
</details>

## dndFeatherTargetProblem

导出接口 · 源码第 9 行。

```ts
export function dndFeatherTargetProblem(table: ManualTable, caster: string, target: string): "" | "请选择正在坠落的生物" | "请选择60尺内且没有完全遮挡的坠落生物";
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `caster` | 否 | `string` | — |
| `target` | 否 | `string` | — |

## dndFeatherChoices

导出接口 · 源码第 15 行。

```ts
export function dndFeatherChoices(table: ManualTable, a: ManualActor, falling: string[]): { classId: string | undefined; free: boolean; slot: number; slotType: "spell" | "pact"; id: string; label: string; spell: string; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `falling` | 否 | `string[]` | — |
