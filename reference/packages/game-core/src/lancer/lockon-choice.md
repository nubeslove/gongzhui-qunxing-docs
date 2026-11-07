# game/packages/game-core/src/lancer/lockon-choice.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerBattle,LancerBattleStep,LancerCombatUnit,LancerDecision} from '@aelzerant/contracts';
import {has} from './state';
```
</details>

## Shot

内部依赖类型 · 源码第 4 行。

```ts
type Shot = Extract<LancerBattleStep, {
    kind: 'attack' | 'tech';
}>;
```

## offerLancerLockOn

导出接口 · 源码第 6 行。

Ask the attacker before rolling, retaining the paid action and the exact continuation.

```ts
export function offerLancerLockOn(b: LancerBattle, attacker: LancerCombatUnit, target: LancerCombatUnit, shot: Shot): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `attacker` | 否 | `LancerCombatUnit` | — |
| `target` | 否 | `LancerCombatUnit` | — |
| `shot` | 否 | `Shot` | — |

## respondLancerLockOn

导出接口 · 源码第 11 行。

```ts
export function respondLancerLockOn(b: LancerBattle, p: LancerDecision, choice: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `p` | 否 | `LancerDecision` | — |
| `choice` | 否 | `string` | — |
