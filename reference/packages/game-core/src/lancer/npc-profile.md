# game/packages/game-core/src/lancer/npc-profile.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorController,LANCER_CONDITIONS,type LancerNpc,type LancerCombatUnit,type ManualActor,type ManualToken} from '@aelzerant/contracts';
```
</details>

## lancerNpcConditions

导出接口 · 源码第 4 行。

Permanent battle conditions survive leaving and re-entering an encounter.

```ts
export function lancerNpcConditions(actor: ManualActor, innate: LancerCombatUnit['conditions']): LancerCombatUnit['conditions'];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `innate` | 否 | `LancerCombatUnit['conditions']` | — |

## lancerProfileUnit

导出接口 · 源码第 11 行。

Uses the same battle/weapon/condition state as built-in NPCs, never a second simulator.

```ts
export function lancerProfileUnit(actor: ManualActor, token: ManualToken, npc: LancerNpc): LancerCombatUnit;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `token` | 否 | `ManualToken` | — |
| `npc` | 否 | `LancerNpc` | — |
