# game/packages/game-core/src/dnd/resize.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndMagicJob,ManualActor,ManualTable} from '@aelzerant/contracts';
import {dndIncapacitated} from '@aelzerant/rules-engine';
import {dndSizeCategory,dndSizePosition} from './body-size';
import {attachDndSpellEffect} from './attach-effect';
import {dndActorMagicBlock,dndCastOrigin} from './magic-fields';
import {dndContextTest} from './rolls';
import {dndEffectRollModifiers} from './effects';
import type {SorceryContext} from './sorcery';
```
</details>

## dndResizeProblem

导出接口 · 源码第 10 行。

```ts
export function dndResizeProblem(table: ManualTable, a: ManualActor, choice: string): "" | "变巨术／缩小术不能选择正在穿戴或携带的物件" | "请先将目标放入场景" | "周围空间不足以容纳变化后的体型；请先由 GM 处理挤行或调整场景位置";
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `a` | 否 | `ManualActor` | — |
| `choice` | 否 | `string` | — |

## resolveDndResize

导出接口 · 源码第 16 行。

```ts
export function resolveDndResize(table: ManualTable, job: Extract<DndMagicJob,{kind:'resize'}>, ctx: Pick<SorceryContext,'actor'|'now'|'id'|'random'|'rollLog'|'log'>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `job` | 否 | `Extract<DndMagicJob,{kind:'resize'}>` | — |
| `ctx` | 否 | `Pick<SorceryContext,'actor'&#124;'now'&#124;'id'&#124;'random'&#124;'rollLog'&#124;'log'>` | — |
