# game/packages/game-core/src/lancer/tech-support.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {LANCER_CONDITION_NAMES,type LancerBattle,type LancerCombatUnit,type LancerDecision,type LancerBattleStep} from '@aelzerant/contracts';
import {LANCER_CORE_BY_ID,LANCER_TALENTS} from '@aelzerant/rules-engine';
import {clear,condition,has,log,unit} from './state';
import {LANCER_EXECUTABLE_FEATURES} from './features';
import {LANCER_TALENT_EFFECTS} from './talents';
```
</details>

## bolsterLancer

导出接口 · 源码第 7 行。

```ts
export function bolsterLancer(b: LancerBattle, u: LancerCombatUnit, t: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit` | — |

## offerLancerScan

导出接口 · 源码第 29 行。

```ts
export function offerLancerScan(b: LancerBattle, u: LancerCombatUnit, t: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit` | — |

## respondLancerScan

导出接口 · 源码第 32 行。

```ts
export function respondLancerScan(b: LancerBattle, p: LancerDecision, option: string, text?: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |
| `text` | 是 | `string` | — |

## offerFriendlyInvade

导出接口 · 源码第 44 行。

```ts
export function offerFriendlyInvade(b: LancerBattle, u: LancerCombatUnit, t: LancerCombatUnit, s: Extract<LancerBattleStep,{kind:'tech'}>, name: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Extract<LancerBattleStep,{kind:'tech'}>` | — |
| `name` | 否 | `string` | — |

## respondFriendlyInvade

导出接口 · 源码第 48 行。

```ts
export function respondFriendlyInvade(b: LancerBattle, p: LancerDecision, option: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `p` | 否 | `LancerDecision` | — |
| `option` | 否 | `string` | — |
