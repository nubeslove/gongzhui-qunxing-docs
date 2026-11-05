# game/packages/game-core/src/dnd/weapon-mastery.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {type DndMagicJob,type ManualTable} from '@aelzerant/contracts';
import {dndMod,dndFeatureExpiry,dndConditionImmune,dndIncapacitated,dndFeatureEffect,dndCharmedBy} from '@aelzerant/rules-engine';
import type {SorceryContext} from './sorcery';
import {addDndFeatureEffect} from './class-features';
import {dndContextTest} from './rolls';
import {dndEffectRollModifiers} from './effects';
import {dndFeatureDistance} from './class-features';
import {dndCover} from './geometry';
import {pushDndActor} from './forced-movement';
```
</details>

## Job

内部依赖类型 · 源码第 11 行。

```ts
type Job = Extract<DndMagicJob, {
    kind: 'mastery';
}>;
```

## dndCleaveProblem

导出接口 · 源码第 12 行。

```ts
export function dndCleaveProblem(table: ManualTable, actor: string, target: string, primary: string, weapon: string): "" | "请选择原目标以外的另一生物" | "本回合横扫已使用或当前失能" | "不能攻击魅惑来源" | "目标须在原目标 5 尺内，同时在你的触及内" | "目标不在当前场景";
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actor` | 否 | `string` | — |
| `target` | 否 | `string` | — |
| `primary` | 否 | `string` | — |
| `weapon` | 否 | `string` | — |

## resolveDndMastery

导出接口 · 源码第 20 行。

```ts
export function resolveDndMastery(table: ManualTable, job: Job, ctx: SorceryContext, choice?: string, nextTarget?: string): DndMagicJob[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `job` | 否 | `Job` | — |
| `ctx` | 否 | `SorceryContext` | — |
| `choice` | 是 | `string` | 'mastery' |
| `nextTarget` | 是 | `string` | — |
