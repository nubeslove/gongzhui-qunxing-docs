# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/rewardFlow.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerRogueRun,RoguePlayer} from '@aelzerant/contracts';
import {drawRogueCards} from './resources';
```
</details>

## rogueRewardKind

导出接口 · 源码第 3 行。

```ts
export function rogueRewardKind(run: LancerRogueRun, p: RoguePlayer): 'equipment'|'mod'|'talent'|'license'|'frame';
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `run` | 否 | `LancerRogueRun` | — |
| `p` | 否 | `RoguePlayer` | — |

## rogueRewardRounds

导出接口 · 源码第 9 行。

```ts
export const rogueRewardRounds: (run: LancerRogueRun): 3 | 4 | 6;
```

## rogueInitialRewardsPending

导出接口 · 源码第 10 行。

```ts
export const rogueInitialRewardsPending: (run: LancerRogueRun, p: RoguePlayer): boolean;
```

## ensureRogueInitialRewards

导出接口 · 源码第 12 行。

Resume old lobby/initial-reward saves without redrawing saved offers or completed rounds.

```ts
export function ensureRogueInitialRewards(run: LancerRogueRun): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `run` | 否 | `LancerRogueRun` | — |
