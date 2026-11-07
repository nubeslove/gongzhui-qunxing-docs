# game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerTools.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {lancerLineOfSight} from '../../../../game-core/src/lancer/geometry';
import {officialSilhouette,parseLancerNpc,parseLancerBattle,storyGm,type ManualTable,type ManualActor,type ManualToken,type LancerCombatUnit} from '@aelzerant/contracts';
import {createLancerNpc,lancerDistance,lancerPlacementCandidates,lancerPosition,readLancerNpc} from '@aelzerant/game-core';
import {wallflowerLayerProfile,wallflowerLayerReference,wallflowerOrder,WALLFLOWER_LAYERS,type WallflowerLayer} from '../../../../../content/lancer-official/wallflower-eidolon';
import {breakWallflowerLayer,isWallflowerEidolon,isWallflowerShard,wallflowerLayer,refreshWallflowerAbyss} from '../../../../game-core/src/lancer/wallflower';
import {condition,log} from '../../../../game-core/src/lancer/state';
import {drainLancer,validateLancerWeaponUse} from '../../../../game-core/src/lancer/resolution';
import {combatUnit,syncCombatCards} from './combatAdapter';
import {actorToken} from '../scene/editor';
import {applyTableEncounter} from '../encounterManager';
```
</details>

## WallflowerCommand

导出接口 · 源码第 11 行。

```ts
export type WallflowerCommand = {
    action: 'council-start' | 'council-roll' | 'consumption' | 'copy-wave' | 'reveal-valley' | 'manifest' | 'init-final' | 'baseline' | 'reflection' | 'armor' | 'scream' | 'coolant' | 'room-heat' | 'shards' | 'abyss-hit' | 'shard-move' | 'shard-attack';
    x?: number;
    y?: number;
    target?: string;
    shard?: string;
    wave?: number;
    goal?: number;
    roll?: number;
    split?: boolean;
    extra?: boolean;
    amount?: number;
    objectId?: string;
    round?: number;
    turn?: number;
    unit?: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `action` | 否 | `'council-start'&#124;'council-roll'&#124;'consumption'&#124;'copy-wave'&#124;'reveal-valley'&#124;'manifest'&#124;'init-final'&#124;'baseline'&#124;'reflection'&#124;'armor'&#124;'scream'&#124;'coolant'&#124;'room-heat'&#124;'shards'&#124;'abyss-hit'&#124;'shard-move'&#124;'shard-attack'` | 见结构定义及所属功能文档 |
| `x` | 是 | `number` | 见结构定义及所属功能文档 |
| `y` | 是 | `number` | 见结构定义及所属功能文档 |
| `target` | 是 | `string` | 见结构定义及所属功能文档 |
| `shard` | 是 | `string` | 见结构定义及所属功能文档 |
| `wave` | 是 | `number` | 见结构定义及所属功能文档 |
| `goal` | 是 | `number` | 见结构定义及所属功能文档 |
| `roll` | 是 | `number` | 见结构定义及所属功能文档 |
| `split` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `extra` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `amount` | 是 | `number` | 见结构定义及所属功能文档 |
| `objectId` | 是 | `string` | 见结构定义及所属功能文档 |
| `round` | 是 | `number` | 见结构定义及所属功能文档 |
| `turn` | 是 | `number` | 见结构定义及所属功能文档 |
| `unit` | 是 | `string` | 见结构定义及所属功能文档 |

## prepareWallflowerFinale

导出接口 · 源码第 33 行。

Called before deployment so the consumption clock actually changes the starting enemy.

```ts
export function prepareWallflowerFinale(t: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |

## applyWallflowerCommand

导出接口 · 源码第 43 行。

```ts
export function applyWallflowerCommand(t: ManualTable, sender: string, c: WallflowerCommand): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `sender` | 否 | `string` | — |
| `c` | 否 | `WallflowerCommand` | — |
