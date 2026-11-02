# game/packages/game-core/src/lancer/full-action.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerCombatIntent,LancerCombatUnit} from '@aelzerant/contracts';
import {LANCER_TECH_OPTIONS} from './tech';
import {lancerWeaponCanSkirmish} from './weapon-operation';
```
</details>

## fullActionIssue

导出接口 · 源码第 6 行。

A paid full action exposes only its remaining constituent choices to the HUD.

```ts
export function fullActionIssue(u: LancerCombatUnit, i: LancerCombatIntent): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `i` | 否 | `LancerCombatIntent` | — |

## consumeFullAction

导出接口 · 源码第 23 行。

```ts
export function consumeFullAction(u: LancerCombatUnit, weapon?: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `weapon` | 是 | `string` | — |

## fullActionOrdnance

导出接口 · 源码第 29 行。

```ts
export const fullActionOrdnance: (u: LancerCombatUnit): boolean;
```
