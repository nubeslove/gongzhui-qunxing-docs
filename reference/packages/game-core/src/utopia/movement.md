# game/packages/game-core/src/utopia/movement.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {committedTokenMotion,emptySceneFeatures} from '@aelzerant/contracts';
import {lancerObject,lancerEffectiveBlock,lancerObjectActive,type ManualTable,type UtopiaPoint} from '@aelzerant/contracts';
import {utopiaHas,utopiaInstalled,utopiaStats,utopiaWeapon,utopiaRank} from '@aelzerant/rules-engine';
import {lancerMovementCost,lancerPosition,lancerDistance,lancerFloor} from '../lancer/geometry';
import {unit,battle,intact,activeUnit,canReact,ask,message,type UtopiaContext} from './state';
import {utopiaEntry} from '@aelzerant/rules-engine';
```
</details>

## utopiaEngaged

导出接口 · 源码第 7 行。

```ts
export function utopiaEngaged(table: ManualTable, id: string, at?: UtopiaPoint): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `id` | 否 | `string` | — |
| `at` | 是 | `UtopiaPoint` | — |

## planUtopiaMove

导出接口 · 源码第 13 行。

Shared by hover preview and authority. The mouse trail does not spend movement.

```ts
export function planUtopiaMove(table: ManualTable, id: string, to: UtopiaPoint, mode?: 'walk'|'fly'|'jump', budget?: number): { points: { x: number; y: number; z: number; }[]; weights: any[]; cost: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `id` | 否 | `string` | — |
| `to` | 否 | `UtopiaPoint` | — |
| `mode` | 是 | `'walk'&#124;'fly'&#124;'jump'` | 'walk' |
| `budget` | 是 | `number` | 1000 |

## queueMovement

导出接口 · 源码第 44 行。

```ts
export function queueMovement(x: UtopiaContext, id: string, to: UtopiaPoint, mode?: 'walk'|'fly'|'jump'): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `id` | 否 | `string` | — |
| `to` | 否 | `UtopiaPoint` | — |
| `mode` | 是 | `'walk'&#124;'fly'&#124;'jump'` | 'walk' |

## resolveMovement

导出接口 · 源码第 49 行。

```ts
export function resolveMovement(x: UtopiaContext, step: Extract<import('@aelzerant/contracts').UtopiaStep,{type:'move'}>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `step` | 否 | `Extract<import('@aelzerant/contracts').UtopiaStep,{type:'move'}>` | — |
