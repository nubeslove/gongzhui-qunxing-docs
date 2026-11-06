# game/packages/game-core/src/lancer/scenery-adjudication.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {canonicalJson,isHexGrid,lancerEffectiveBlock,lancerObject,lancerObjectActive,lancerObjectToken,regionAffectsFootprint,snapHexToken,type LancerCombatIntent,type ManualMap} from '@aelzerant/contracts';
import {lancerRegionContains,lancerBlockOverlaps,lancerPosition} from './geometry';
```
</details>

## adjudicateLancerScenery

导出接口 · 源码第 5 行。

GM-authorized scenery movement during play; no action costs or rule checks are implied.

```ts
export function adjudicateLancerScenery(map: ManualMap, command: Extract<LancerCombatIntent,{type:'scenery'}>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `command` | 否 | `Extract<LancerCombatIntent,{type:'scenery'}>` | — |
