# game/packages/contracts/src/character-portraits.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualActor,ManualTable} from './tabletop';
```
</details>

## PortraitState

导出接口 · 源码第 8 行。

```ts
export type PortraitState = typeof PORTRAIT_STATES[number]['id'];
```

## characterPortraitState

导出接口 · 源码第 9 行。

```ts
export function characterPortraitState(actor: Pick<ManualActor,'fields'|'dnd'>): PortraitState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `Pick<ManualActor,'fields'&#124;'dnd'>` | — |

## characterPortrait

导出接口 · 源码第 16 行。

Portraits never fall back to tokens. Missing variants use the normal portrait.

```ts
export function characterPortrait(actor: Pick<ManualActor,'fields'|'dnd'>|undefined, fallback?: string): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `Pick<ManualActor,'fields'&#124;'dnd'>&#124;undefined` | — |
| `fallback` | 是 | `string` | '' |

## withCurrentStagePortraits

导出接口 · 源码第 23 行。

Share the visible pose of entered NPCs without revealing their private character sheets.

```ts
export function withCurrentStagePortraits(table: ManualTable): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
