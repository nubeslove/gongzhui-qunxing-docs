# game/packages/contracts/src/region-combat.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {RegionEventName} from './scene-region';
```
</details>

## RegionCombatClock

导出接口 · 源码第 3 行。

Rule adapters provide authority state, never a requested next-turn button or a projected view.

```ts
export interface RegionCombatClock {
    key: string;
    round: number;
    turn: number;
    active: string[];
    participants: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `key` | 否 | `string` | 见结构定义及所属功能文档 |
| `round` | 否 | `number` | 见结构定义及所属功能文档 |
| `turn` | 否 | `number` | 见结构定义及所属功能文档 |
| `active` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `participants` | 否 | `string[]` | 见结构定义及所属功能文档 |

## RegionCombatEvent

导出接口 · 源码第 4 行。

```ts
export interface RegionCombatEvent {
    event: RegionEventName;
    tokenId: string;
    side: 'before' | 'after';
    round: number;
    turn: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `event` | 否 | `RegionEventName` | 见结构定义及所属功能文档 |
| `tokenId` | 否 | `string` | 见结构定义及所属功能文档 |
| `side` | 否 | `'before'&#124;'after'` | 见结构定义及所属功能文档 |
| `round` | 否 | `number` | 见结构定义及所属功能文档 |
| `turn` | 否 | `number` | 见结构定义及所属功能文档 |

## regionCombatEvents

导出接口 · 源码第 5 行。

```ts
export function regionCombatEvents(before?: RegionCombatClock, after?: RegionCombatClock): RegionCombatEvent[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `before` | 是 | `RegionCombatClock` | — |
| `after` | 是 | `RegionCombatClock` | — |
