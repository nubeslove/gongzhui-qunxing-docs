# game/packages/game-core/src/dnd/attach-effect.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndActiveEffect,ManualTable} from '@aelzerant/contracts';
import {DND_SPELL_EFFECTS,dndEntry,dndConditionImmune,dndSpellEffectRule} from '@aelzerant/rules-engine';
import {dndCastOrigin} from './magic-fields';
import {cleanDndEffects,dndEffectApplies} from './effects';
```
</details>

## attachDndSpellEffect

导出接口 · 源码第 6 行。

```ts
export function attachDndSpellEffect(table: ManualTable, source: string, target: string, spell: string, slot: number, now: number, id: ()=>string, options?: Pick<DndActiveEffect,'dc'|'choice'|'modifier'|'castId'|'saved'|'region'|'heightened'>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `source` | 否 | `string` | — |
| `target` | 否 | `string` | — |
| `spell` | 否 | `string` | — |
| `slot` | 否 | `number` | — |
| `now` | 否 | `number` | — |
| `id` | 否 | `()=>string` | — |
| `options` | 是 | `Pick<DndActiveEffect,'dc'&#124;'choice'&#124;'modifier'&#124;'castId'&#124;'saved'&#124;'region'&#124;'heightened'>` | {} |

## dndConsumeAttackDisadvantage

导出接口 · 源码第 17 行。

```ts
export function dndConsumeAttackDisadvantage(table: ManualTable, actorId: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actorId` | 否 | `string` | — |
