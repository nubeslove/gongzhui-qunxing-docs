# game/packages/game-core/src/lancer/live-intel.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerBattle,LancerCombatUnit,LancerIntel,LancerIntelSection} from '@aelzerant/contracts';
import {lancerScanPanel} from './scan-panel';
```
</details>

## refreshLancerIntel

导出接口 · 源码第 8 行。

Run on the authority before projection: clients never need undisclosed NPC fields.

```ts
export function refreshLancerIntel(b: LancerBattle): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |

## trackLancerIntel

导出接口 · 源码第 30 行。

```ts
export function trackLancerIntel(b: LancerBattle, u: LancerCombatUnit, t: LancerCombatUnit, sections: LancerIntelSection[], live: 'all'|'selected'): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `t` | 否 | `LancerCombatUnit` | — |
| `sections` | 否 | `LancerIntelSection[]` | — |
| `live` | 否 | `'all'&#124;'selected'` | — |
