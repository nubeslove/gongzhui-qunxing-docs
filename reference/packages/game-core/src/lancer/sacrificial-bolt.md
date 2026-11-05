# game/packages/game-core/src/lancer/sacrificial-bolt.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerBattle,LancerCombatUnit,ManualMap} from '@aelzerant/contracts';
import {lancerDistance} from './geometry';
import {log} from './state';
```
</details>

## resolveSacrificialBolts

导出接口 · 源码第 5 行。

The damage reads the owner's heat and burn when the target's next turn ends.

```ts
export function resolveSacrificialBolts(b: LancerBattle, map: ManualMap, target: LancerCombatUnit): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `target` | 否 | `LancerCombatUnit` | — |
