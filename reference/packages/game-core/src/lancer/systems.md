# game/packages/game-core/src/lancer/systems.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {useCustomSystem} from './custom-equipment';
import {parseLancerAutomation} from '@aelzerant/contracts';
import { useLancerCombatSystem } from './active-systems';
import type { LancerArea, LancerBattle, LancerCombatIntent, LancerCombatSystem, LancerCombatUnit, ManualMap, ManualToken } from '@aelzerant/contracts';
import { areaOrigin, lancerAreaContains } from './areas';
import { lancerDistance, lancerUnitLineOfSight, lancerLineOfSight, lancerPosition } from './geometry';
import { lancerRoll, type LancerRandom } from './dice';
import { count } from './features';
import { clear, has, log, spend, unit } from './state';
```
</details>

## SystemMode

内部依赖类型 · 源码第 11 行。

```ts
interface SystemMode {
    id: string;
    name: string;
    cost: 'quick' | 'full' | 'protocol';
    target?: boolean;
    point?: boolean;
    description: string;
    area?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `cost` | 否 | `'quick'&#124;'full'&#124;'protocol'` | 见结构定义及所属功能文档 |
| `target` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `point` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `area` | 是 | `number` | 见结构定义及所属功能文档 |

## ExecutableSystem

内部依赖类型 · 源码第 12 行。

```ts
interface ExecutableSystem {
    name: string;
    source: string;
    modes: SystemMode[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |
| `modes` | 否 | `SystemMode[]` | 见结构定义及所属功能文档 |

## lancerSystemDefinition

导出接口 · 源码第 27 行。

```ts
export function lancerSystemDefinition(s: LancerCombatSystem): ExecutableSystem|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `LancerCombatSystem` | — |

## lancerSystemActionName

导出接口 · 源码第 31 行。

```ts
export function lancerSystemActionName(s: LancerCombatSystem, mode?: string): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `LancerCombatSystem` | — |
| `mode` | 是 | `string` | — |

## Point

内部依赖类型 · 源码第 32 行。

```ts
type Point = {
    x: number;
    y: number;
    z: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 否 | `number` | 见结构定义及所属功能文档 |

## lancerSystemPointInRange

导出接口 · 源码第 33 行。

```ts
export function lancerSystemPointInRange(map: ManualMap, u: LancerCombatUnit, p: Point|undefined, range: number): ManualToken;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `p` | 否 | `Point&#124;undefined` | — |
| `range` | 否 | `number` | — |

## useLancerSystem

导出接口 · 源码第 57 行。

Returns self heat so the caller uses the same reactor settlement path as weapons.

```ts
export function useLancerSystem(b: LancerBattle, map: ManualMap, u: LancerCombatUnit, intent: Extract<LancerCombatIntent,{type:'system'}>, r: LancerRandom): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `intent` | 否 | `Extract<LancerCombatIntent,{type:'system'}>` | — |
| `r` | 否 | `LancerRandom` | — |

## triggerLancerMines

导出接口 · 源码第 100 行。

Check the entire traversed segment, not only its endpoint. Placing a mine does not trigger it.

```ts
export function triggerLancerMines(b: LancerBattle, map: ManualMap, mover: LancerCombatUnit, from: Point, to: Point, r: LancerRandom): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `mover` | 否 | `LancerCombatUnit` | — |
| `from` | 否 | `Point` | — |
| `to` | 否 | `Point` | — |
| `r` | 否 | `LancerRandom` | — |
