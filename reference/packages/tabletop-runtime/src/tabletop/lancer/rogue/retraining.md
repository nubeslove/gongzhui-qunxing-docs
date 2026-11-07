# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/retraining.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerRogueRun,ManualTable,RogueCommand,RoguePlayer,RogueRetraining} from '@aelzerant/contracts';
import {checkLancerLoadout,type LancerWeapon} from '@aelzerant/rules-engine';
import {LANCER_FRAMES} from '../frames';
import {readLancer,selectLancerFrame,setEquipment} from '../model';
import {drawRogueCards,ROGUE_RESOURCE_BY_ID} from './resources';
import {preserveRogueDamage,rogueHealthSnapshot} from './growth';
```
</details>

## Command

内部依赖类型 · 源码第 8 行。

```ts
type Command = Extract<RogueCommand, {
    op: 'retrainOffer' | 'retrainRefresh' | 'retrainConfirm';
}>;
```

## Refresh

内部依赖类型 · 源码第 9 行。

```ts
type Refresh = (table: ManualTable, player: RoguePlayer) => void;
```

## grantRogueRetraining

导出接口 · 源码第 11 行。

A new LL replaces the previous opportunity. Joining at LL0/LL2 does not call this.

```ts
export function grantRogueRetraining(run: LancerRogueRun, previousLevel: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `run` | 否 | `LancerRogueRun` | — |
| `previousLevel` | 否 | `number` | — |

## applyRogueRetraining

导出接口 · 源码第 57 行。

```ts
export function applyRogueRetraining(t: ManualTable, p: RoguePlayer, command: Command, refresh: Refresh): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `p` | 否 | `RoguePlayer` | — |
| `command` | 否 | `Command` | — |
| `refresh` | 否 | `Refresh` | — |
