# game/apps/desktop/src/heartsea/characters.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualActor} from '@aelzerant/contracts';
```
</details>

## HEARTSEA_CLASSES

导出接口 · 源码第 2 行。

```ts
export const HEARTSEA_CLASSES = ['心铸者', '逐影者', '灵术师', '引航师', '星枢师', '契灵师'] as const;
```

## HEART_LABELS

导出接口 · 源码第 5 行。

```ts
export const HEART_LABELS = ['未建立', '初识', '熟悉', '亲近', '深厚', '羁绊'];
```

## numeric

导出接口 · 源码第 6 行。

```ts
export const numeric: (a: ManualActor, key: string, fallback?: number): number;
```

## modifier

导出接口 · 源码第 7 行。

```ts
export const modifier: (score: number): number;
```

## heartseaStats

导出接口 · 源码第 8 行。

```ts
export function heartseaStats(a: ManualActor): { level: number; prof: number; cls: string; ability: string; dc: number; attack: number; capacity: number; pp: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |

## newHeartseaActor

导出接口 · 源码第 14 行。

```ts
export function newHeartseaActor(name: string, ownerId: string, kind?: string): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | — |
| `ownerId` | 否 | `string` | — |
| `kind` | 是 | `string` | '行者' |
