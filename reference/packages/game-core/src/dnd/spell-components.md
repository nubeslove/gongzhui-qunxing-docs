# game/packages/game-core/src/dnd/spell-components.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndMonsterComponentWaiver} from '@aelzerant/rules-engine';
import {dndSilencedAt,type ManualTable,type DndCharacter} from '@aelzerant/contracts';
import {dndWildSpellAllowed,dndClassLevel,dndEntry,dndSpellComponents,dndMaterialProblem,dndFocusItem,dndMaterialItem} from '@aelzerant/rules-engine';
import {dndOccupiedHands} from './hands';
```
</details>

## dndVerbalProblem

导出接口 · 源码第 7 行。

```ts
export function dndVerbalProblem(table: ManualTable, actor: string, spell: string, sourceId?: string): string | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actor` | 否 | `string` | — |
| `spell` | 否 | `string` | — |
| `sourceId` | 是 | `string` | — |

## consumeDndMaterial

导出接口 · 源码第 22 行。

```ts
export function consumeDndMaterial(c: DndCharacter, spell: string, sourceId?: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `spell` | 否 | `string` | — |
| `sourceId` | 是 | `string` | — |
