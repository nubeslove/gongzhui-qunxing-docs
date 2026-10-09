# game/packages/game-core/src/dnd/damage-roll.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndMagicJob,DndDamageType,ManualActor} from '@aelzerant/contracts';
import {dndActiveSpellProfiles,dndDice,dndDie} from '@aelzerant/rules-engine';
```
</details>

## DamageJob

内部依赖类型 · 源码第 4 行。

```ts
type DamageJob = Extract<DndMagicJob, {
    kind: 'damage';
}>;
```

## DndDamagePart

导出接口 · 源码第 5 行。

```ts
export type DndDamagePart = {
    amount: number;
    type: DndDamageType;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `type` | 否 | `DndDamageType` | 见结构定义及所属功能文档 |

## rollDndDamageJob

导出接口 · 源码第 8 行。

One hit is one damage event even when its dice have different damage types.

```ts
export function rollDndDamageJob(job: DamageJob, source: ManualActor, random: ()=>number, log: (text:string,...actors:ManualActor[])=>void): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `job` | 否 | `DamageJob` | — |
| `source` | 否 | `ManualActor` | — |
| `random` | 否 | `()=>number` | — |
| `log` | 否 | `(text:string,...actors:ManualActor[])=>void` | — |

## rerollDndDamageDie

导出接口 · 源码第 19 行。

```ts
export function rerollDndDamageDie(job: DamageJob, index: number, random: ()=>number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `job` | 否 | `DamageJob` | — |
| `index` | 否 | `number` | — |
| `random` | 否 | `()=>number` | — |

## dndDamageJobParts

导出接口 · 源码第 27 行。

Unspecified flat reductions consume the primary damage component, then additions.

```ts
export function dndDamageJobParts(job: DamageJob, factor: number): DndDamagePart[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `job` | 否 | `DamageJob` | — |
| `factor` | 否 | `number` | — |
