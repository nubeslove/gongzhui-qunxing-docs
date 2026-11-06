# game/packages/contracts/src/boss-bar.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## BOSS_BAR_DEFAULT_COLOR

导出接口 · 源码第 2 行。

A public, GM-controlled boss bar. Values are manual; no rule engine coupling.

```ts
export const BOSS_BAR_DEFAULT_COLOR = '#b8443c';
```

## BossBarState

导出接口 · 源码第 3 行。

```ts
export interface BossBarState {
    active: boolean;
    name: string;
    subtitle: string;
    current: number;
    max: number;
    phases: number;
    phase: number;
    color: string;
    portrait?: string;
    revision: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `active` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `subtitle` | 否 | `string` | 见结构定义及所属功能文档 |
| `current` | 否 | `number` | 见结构定义及所属功能文档 |
| `max` | 否 | `number` | 见结构定义及所属功能文档 |
| `phases` | 否 | `number` | 见结构定义及所属功能文档 |
| `phase` | 否 | `number` | 见结构定义及所属功能文档 |
| `color` | 否 | `string` | 见结构定义及所属功能文档 |
| `portrait` | 是 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |

## emptyBossBarState

导出接口 · 源码第 24 行。

```ts
export function emptyBossBarState(): BossBarState;
```

## parseBossBarState

导出接口 · 源码第 27 行。

```ts
export function parseBossBarState(raw: unknown): BossBarState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
