# game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {applyWallflowerCommand,prepareWallflowerFinale,type WallflowerCommand} from './wallflowerTools';
import {applyDustgraveCommand,type DustgraveCommand} from './dustgraveTools';
import {applySirenCommand,prepareSirenMagma,type SirenCommand} from './sirenTools';
import {isNarrativeActor} from '../narrativeActor';
import {createBattleEntry} from './battleEntry';
import {lancerActorNpcAppearance,actorControlled,actorTokenPrototype,canonicalJson,parseLancerZone,storyGm,tokenPrototypeConfiguration,type LancerCombatUnit,type LancerDeploymentZone,type ManualTable,type ManualToken} from '@aelzerant/contracts';
import {applyLancerIntent,readLancerNpc} from '@aelzerant/game-core';
import {actorToken} from '../scene/editor';
import {sceneCombatUnit,prepareLancerUnits} from './combatAdapter';
import {applyLancerReinforcements,type ReinforcementPlacement} from './reinforcements';
```
</details>

## DeploymentCommand

导出接口 · 源码第 12 行。

```ts
export type DeploymentCommand = {
    op: 'siren';
    command: SirenCommand;
} | {
    op: 'wallflower';
    command: WallflowerCommand;
} | {
    op: 'dustgrave';
    command: DustgraveCommand;
} | {
    op: 'reinforce';
    placements: ReinforcementPlacement[];
} | {
    op: 'cancel';
} | {
    op: 'prepare';
    actorIds: string[];
    manualPlayers?: boolean;
} | {
    op: 'zones';
    zones: LancerDeploymentZone[];
    before: LancerDeploymentZone[];
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.op` | 否 | `'siren'` | 见结构定义及所属功能文档 |
| `分支1.command` | 否 | `SirenCommand` | 见结构定义及所属功能文档 |
| `分支2.op` | 否 | `'wallflower'` | 见结构定义及所属功能文档 |
| `分支2.command` | 否 | `WallflowerCommand` | 见结构定义及所属功能文档 |
| `分支3.op` | 否 | `'dustgrave'` | 见结构定义及所属功能文档 |
| `分支3.command` | 否 | `DustgraveCommand` | 见结构定义及所属功能文档 |
| `分支4.op` | 否 | `'reinforce'` | 见结构定义及所属功能文档 |
| `分支4.placements` | 否 | `ReinforcementPlacement[]` | 见结构定义及所属功能文档 |
| `分支5.op` | 否 | `'cancel'` | 见结构定义及所属功能文档 |
| `分支6.op` | 否 | `'prepare'` | 见结构定义及所属功能文档 |
| `分支6.actorIds` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支6.manualPlayers` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支7.op` | 否 | `'zones'` | 见结构定义及所属功能文档 |
| `分支7.zones` | 否 | `LancerDeploymentZone[]` | 见结构定义及所属功能文档 |
| `分支7.before` | 否 | `LancerDeploymentZone[]` | 见结构定义及所属功能文档 |

## deploymentToken

导出接口 · 源码第 14 行。

Deployment uses the assigned character; NPC copies are created by normal directory placement.

```ts
export function deploymentToken(table: ManualTable, unit: Pick<LancerCombatUnit,'id'|'actorId'>): ManualToken;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `unit` | 否 | `Pick<LancerCombatUnit,'id'&#124;'actorId'>` | — |

## deploymentActors

导出接口 · 源码第 22 行。

```ts
export function deploymentActors(table: ManualTable, sceneId?: string): { id: string; name: string; issue: string; placed: boolean; initial: boolean; category: "npc" | "player" | "enemy"; side: "players" | "hostiles"; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `sceneId` | 是 | `string` | — |

## applyDeploymentCommand

导出接口 · 源码第 33 行。

```ts
export function applyDeploymentCommand(table: ManualTable, sender: string, command: DeploymentCommand): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `sender` | 否 | `string` | — |
| `command` | 否 | `DeploymentCommand` | — |
