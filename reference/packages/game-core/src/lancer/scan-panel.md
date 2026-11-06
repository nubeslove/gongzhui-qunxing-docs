# game/packages/game-core/src/lancer/scan-panel.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {LANCER_CONDITION_NAMES,type LancerCombatUnit,type LancerIntelSection} from '@aelzerant/contracts';
import {LANCER_EXECUTABLE_FEATURES} from './features';
import {LANCER_TALENT_EFFECTS} from './talents';
import {LANCER_CORE_BY_ID} from '@aelzerant/rules-engine';
import {lancerNpcExtraSections,lancerNpcFeature} from './scan-npc';
import {lancerScanSystemAction} from './scan-system';
```
</details>

## lancerScanPanel

导出接口 · 源码第 7 行。

```ts
export function lancerScanPanel(t: LancerCombatUnit): LancerIntelSection[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `LancerCombatUnit` | — |
