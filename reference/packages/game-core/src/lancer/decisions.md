# game/packages/game-core/src/lancer/decisions.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {lancerGMControls} from './control-state';
import type {LancerBattle,LancerDecision} from '@aelzerant/contracts';
```
</details>

## LANCER_DECISION_MS

导出接口 · 源码第 4 行。

```ts
export const LANCER_DECISION_MS = 15000;
```

## armLancerDecision

导出接口 · 源码第 7 行。

```ts
export function armLancerDecision(b: LancerBattle, now: number, seconds?: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `now` | 否 | `number` | — |
| `seconds` | 是 | `number` | 15 |

## canAnswerLancerDecision

导出接口 · 源码第 14 行。

```ts
export function canAnswerLancerDecision(b: LancerBattle, p: LancerDecision, sender: string, host: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `p` | 否 | `LancerDecision` | — |
| `sender` | 否 | `string` | — |
| `host` | 否 | `string` | — |
