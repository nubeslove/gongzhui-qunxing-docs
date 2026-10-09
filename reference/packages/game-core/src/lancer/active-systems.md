# game/packages/game-core/src/lancer/active-systems.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerBattle, LancerCombatSystem, LancerCombatUnit, ManualMap } from '@aelzerant/contracts';
import { lancerDistance, lancerUnitLineOfSight } from './geometry';
import { lancerCover } from './effects';
import { lancerSystemActive, refreshLancerSystemStates } from './system-passives';
import { clear, condition, log, spend } from './state';
```
</details>

## lancerSystemModeIssue

导出接口 · 源码第 7 行。

```ts
export function lancerSystemModeIssue(u: LancerCombatUnit, s: LancerCombatSystem, mode: string): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `LancerCombatSystem` | — |
| `mode` | 否 | `string` | — |

## useLancerCombatSystem

导出接口 · 源码第 13 行。

Protocol timing and basic equipment validity have already been checked by the caller.

```ts
export function useLancerCombatSystem(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, s: LancerCombatSystem, mode: string, key: string, free: boolean): number|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `LancerCombatSystem` | — |
| `mode` | 否 | `string` | — |
| `key` | 否 | `string` | — |
| `free` | 否 | `boolean` | — |
