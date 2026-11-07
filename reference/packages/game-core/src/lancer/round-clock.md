# game/packages/game-core/src/lancer/round-clock.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerBattle,LancerCombatUnit} from '@aelzerant/contracts';
```
</details>

## markLancerRoundClock

导出接口 · 源码第 5 行。

```ts
export function markLancerRoundClock(u: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |

## migrateLancerRoundClock

导出接口 · 源码第 7 行。

Migrate only the former battlefield-round stamps. Real round/turn counters stay intact.

```ts
export function migrateLancerRoundClock(b: LancerBattle): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
