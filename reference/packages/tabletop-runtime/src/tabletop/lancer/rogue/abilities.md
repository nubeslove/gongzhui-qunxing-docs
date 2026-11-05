# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/abilities.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {ARENA_MANUAL_WEAPONS} from './manual-weapons';
import {parseLancerPlayerAbility,type ManualTable,type RoguePlayer,type RogueCommand} from '@aelzerant/contracts';
import {LANCER_EXECUTABLE_SYSTEMS,LANCER_TECH_SYSTEMS,LANCER_SYSTEM_PASSIVES,LANCER_TALENT_EFFECTS,lancerGMControls} from '@aelzerant/game-core';
import {LANCER_REFERENCES} from '../catalog';
import {LANCER_FRAMES} from '../frames';
import {ROGUE_RESOURCE_BY_ID,rogueEquipment} from './resources';
import {arenaIntent,settleArena} from './battle';
```
</details>

## rogueAbilitySources

导出接口 · 源码第 9 行。

```ts
export function rogueAbilitySources(t: ManualTable, p: RoguePlayer): { id: string; name: string; text: string; rank: number; kind: import("@source/packages/contracts/src/lancer-rogue").RogueKind; equipmentId: string | undefined; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `p` | 否 | `RoguePlayer` | — |

## rogueManualAbilitySources

导出接口 · 源码第 18 行。

```ts
export function rogueManualAbilitySources(t: ManualTable, p: RoguePlayer): { id: string; name: string; text: string; rank: number; kind: import("@source/packages/contracts/src/lancer-rogue").RogueKind; equipmentId: string | undefined; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `p` | 否 | `RoguePlayer` | — |

## setRogueAbilityStats

导出接口 · 源码第 32 行。

```ts
export function setRogueAbilityStats(t: ManualTable, p: RoguePlayer, source: string, bonuses: Record<string,number>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `p` | 否 | `RoguePlayer` | — |
| `source` | 否 | `string` | — |
| `bonuses` | 否 | `Record<string,number>` | — |

## settleRogueAbility

导出接口 · 源码第 37 行。

```ts
export function settleRogueAbility(t: ManualTable, p: RoguePlayer, c: Extract<RogueCommand,{op:'ability'}>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `p` | 否 | `RoguePlayer` | — |
| `c` | 否 | `Extract<RogueCommand,{op:'ability'}>` | — |
