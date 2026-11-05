# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/bossRewards.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {ROGUE_MOUNT_TYPES,type LancerRogueRun,type RoguePlayer,type RogueBossChoice,type RogueMount} from '@aelzerant/contracts';
```
</details>

## ensureRogueBossRewards

导出接口 · 源码第 4 行。

Victory history is authoritative; repeat settlement or old saves cannot mint extra grants.

```ts
export function ensureRogueBossRewards(run: LancerRogueRun): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `run` | 否 | `LancerRogueRun` | — |

## claimRogueBossReward

导出接口 · 源码第 10 行。

```ts
export function claimRogueBossReward(run: LancerRogueRun, p: RoguePlayer, id: string, choice: RogueBossChoice): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `run` | 否 | `LancerRogueRun` | — |
| `p` | 否 | `RoguePlayer` | — |
| `id` | 否 | `string` | — |
| `choice` | 否 | `RogueBossChoice` | — |

## rogueBonusMounts

导出接口 · 源码第 17 行。

```ts
export const rogueBonusMounts: (p: RoguePlayer): RogueMount[];
```
