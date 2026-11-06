# game/packages/contracts/src/spiral-ruen.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isInteger,isRecord} from './validation';
```
</details>

## RuenSiteId

导出接口 · 源码第 14 行。

```ts
export type RuenSiteId = typeof RUEN_SITES[number]['id'];
```

## RUEN_FLAGS

导出接口 · 源码第 15 行。

```ts
export const RUEN_FLAGS = ['engineer', 'cargo', 'orchard', 'orchard-trade', 'charts', 'pump', 'ward', 'reserve', 'lock', 'gentle', 'release'] as const;
```

## RuenFlag

导出接口 · 源码第 16 行。

```ts
export type RuenFlag = typeof RUEN_FLAGS[number];
```

## RuenProgress

导出接口 · 源码第 17 行。

```ts
export interface RuenProgress {
    version: 1;
    position: RuenSiteId;
    supplies: number;
    visited: RuenSiteId[];
    flags: RuenFlag[];
    moves: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `position` | 否 | `RuenSiteId` | 见结构定义及所属功能文档 |
| `supplies` | 否 | `number` | 见结构定义及所属功能文档 |
| `visited` | 否 | `RuenSiteId[]` | 见结构定义及所属功能文档 |
| `flags` | 否 | `RuenFlag[]` | 见结构定义及所属功能文档 |
| `moves` | 否 | `number` | 见结构定义及所属功能文档 |

## parseRuenProgress

导出接口 · 源码第 18 行。

```ts
export function parseRuenProgress(value: unknown): RuenProgress;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## ruenObjective

导出接口 · 源码第 23 行。

```ts
export function ruenObjective(progress: RuenProgress): "航路重开 · 这段旅程已写入记录" | "在船闸决定如何恢复通航" | "整队补给，前往上游船闸" | "进入沉泵间，找回旧式调节器" | "沿河调查，在旧堤档亭核对闸图";
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `progress` | 否 | `RuenProgress` | — |
