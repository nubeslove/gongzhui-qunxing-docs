# game/packages/game-core/src/lancer/phase.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerBattle, LancerCombatUnit, ManualMap } from '@aelzerant/contracts';
import { feature } from './features';
import { nearestLancerSpaces } from './displacement';
import { log } from './state';
```
</details>

## phaseLancer

导出接口 · 源码第 6 行。

```ts
export function phaseLancer(b: LancerBattle, u: LancerCombatUnit, map: ManualMap): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `map` | 否 | `ManualMap` | — |

## returnLancer

导出接口 · 源码第 11 行。

```ts
export function returnLancer(b: LancerBattle, u: LancerCombatUnit, map: ManualMap): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `map` | 否 | `ManualMap` | — |
