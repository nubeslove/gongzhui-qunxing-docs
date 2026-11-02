# game/packages/tabletop-runtime/src/tabletop/environmentEffects.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {tableClimbTurn} from '@aelzerant/session/core';
import {UTOPIA_CONDITIONS,type UtopiaDamage,DND_DAMAGE_TYPES,DND_CONDITIONS,LANCER_CONDITION_NAMES,emptyStory,tableScene,canonicalJson,type ManualTable,type EnvironmentEffect,type RegionNotice,type ScenePoint} from '@aelzerant/contracts';
import {applyDndIntent,applyLancerIntent,applyUtopiaIntent} from '@aelzerant/game-core';
import {requestEnvironmentDecision,rollEnvironmentDamage,movementEnvironmentSignature} from '@aelzerant/session/core';
import {syncCombatCards} from './lancer/combatAdapter';
```
</details>

## applyTableEnvironmentEffect

导出接口 · 源码第 7 行。

Uses each native reducer, including temporary HP, concentration, armor and structure.

```ts
export function applyTableEnvironmentEffect(table: ManualTable, tokenId: string, effect: EnvironmentEffect): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `tokenId` | 否 | `string` | — |
| `effect` | 否 | `EnvironmentEffect` | — |

## tableEnvironmentNotices

导出接口 · 源码第 26 行。

```ts
export function tableEnvironmentNotices(table: ManualTable, sceneId: string, notices: RegionNotice[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `sceneId` | 否 | `string` | — |
| `notices` | 否 | `RegionNotice[]` | — |

## resolveTableEnvironment

导出接口 · 源码第 33 行。

```ts
export function resolveTableEnvironment(table: ManualTable, execute: (table:ManualTable,sceneId:string,tokenId:string,path:ScenePoint[],mode:import('@aelzerant/contracts').MovementChoice)=>ManualTable): {table:ManualTable;route?:{id:string;points:ScenePoint[]}};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `execute` | 否 | `(table:ManualTable,sceneId:string,tokenId:string,path:ScenePoint[],mode:import('@aelzerant/contracts').MovementChoice)=>ManualTable` | — |
