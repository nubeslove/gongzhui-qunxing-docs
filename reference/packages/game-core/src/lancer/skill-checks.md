# game/packages/game-core/src/lancer/skill-checks.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerBattle,LancerBattleStep,LancerCombatUnit} from '@aelzerant/contracts';
import {consumeLancerSkillAccuracy} from './features';
import {offerLeadershipChecks,leadershipCheckAccuracy} from './leadership';
import {lancerCheck,type LancerRandom} from './dice';
import {clear,condition,has,log,unit} from './state';
```
</details>

## Step

内部依赖类型 · 源码第 7 行。

```ts
type Step = Extract<LancerBattleStep, {
    kind: 'feature';
}>;
```

## resolveLancerCheckFeature

导出接口 · 源码第 10 行。

Resumable checks: no dice or one-shot bonuses are consumed before an optional decision.

```ts
export function resolveLancerCheckFeature(b: LancerBattle, u: LancerCombatUnit, s: Step, r: LancerRandom): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `s` | 否 | `Step` | — |
| `r` | 否 | `LancerRandom` | — |
