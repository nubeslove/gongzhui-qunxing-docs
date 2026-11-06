# game/packages/game-core/src/lancer/scan-npc.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {LANCER_CONDITION_NAMES,type LancerCombatUnit,type LancerIntelSection} from '@aelzerant/contracts';
import {LANCER_NPC_OPTIONS} from './npc-options';
```
</details>

## lancerNpcFeature

导出接口 · 源码第 14 行。

```ts
export function lancerNpcFeature(id: string): {name:string;description:string;kind?:'reaction'|'trait'}|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |

## lancerNpcExtraSections

导出接口 · 源码第 19 行。

```ts
export function lancerNpcExtraSections(t: LancerCombatUnit): LancerIntelSection[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `LancerCombatUnit` | — |
