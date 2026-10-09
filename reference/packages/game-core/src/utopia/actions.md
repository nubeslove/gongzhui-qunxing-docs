# game/packages/game-core/src/utopia/actions.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {UtopiaIntent,UtopiaPoint,UtopiaCondition} from '@aelzerant/contracts';
import {utopiaStats,utopiaHas,utopiaEntry,utopiaRank,utopiaRoll,utopiaInstalled,utopiaPayResonance,utopiaChargeLimit,utopiaDamageRoll} from '@aelzerant/rules-engine';
import {lancerDistance,lancerLineOfSight,lancerPosition,lancerTerrainCover} from '../lancer/geometry';
import {lancerAreaContains,lancerAreaCells} from '../lancer/areas';
import {activeUnit,unit,battle,spend,condition,clearCondition,heal,intact,message,addLog,ask,type UtopiaContext} from './state';
import {queueAttack} from './weapons';
import {utopiaEngaged} from './movement';
```
</details>

## Act

内部依赖类型 · 源码第 8 行。

```ts
type Act = Extract<UtopiaIntent, {
    type: 'act';
}>;
```

## utopiaSave

导出接口 · 源码第 10 行。

```ts
export function utopiaSave(x: UtopiaContext, target: string, skill: typeof skillNames[number], dc: number): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `target` | 否 | `string` | — |
| `skill` | 否 | `typeof skillNames[number]` | — |
| `dc` | 否 | `number` | — |

## resolveAction

导出接口 · 源码第 32 行。

```ts
export function resolveAction(x: UtopiaContext, i: Act): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `i` | 否 | `Act` | — |
