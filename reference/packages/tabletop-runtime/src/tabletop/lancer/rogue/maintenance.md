# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/maintenance.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualActor,RogueCommand,RoguePlayer} from '@aelzerant/contracts';
import {readLancer} from '../model';
```
</details>

## RogueService

导出接口 · 源码第 4 行。

```ts
export type RogueService = Extract<RogueCommand, {
    op: 'repair';
}>['service'];
```

## rogueServiceQuote

导出接口 · 源码第 9 行。

```ts
export function rogueServiceQuote(actor: ManualActor, p: RoguePlayer, service: RogueService): { cost: number; currency: string; available: number; complete: boolean; current: number; max: number; damaged: { key: string; id: string; name: string; }[]; issue: string | null; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `p` | 否 | `RoguePlayer` | — |
| `service` | 否 | `RogueService` | — |

## applyRogueRepair

导出接口 · 源码第 19 行。

```ts
export function applyRogueRepair(actor: ManualActor, p: RoguePlayer, service: RogueService): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `p` | 否 | `RoguePlayer` | — |
| `service` | 否 | `RogueService` | — |
