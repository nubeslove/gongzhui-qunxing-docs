# game/packages/tabletop-runtime/src/tabletop/scene/editor.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {snapHexToken} from '@aelzerant/contracts';
import {utopiaStats} from '@aelzerant/rules-engine';
import {lancerObject} from '@aelzerant/contracts';
import {dndActorTokenSize} from '../dnd/tokenSize';
import {applyManualPrototype} from '../tokenInstances';
import { SCENE_MODEL_BY_ID, parseManualTable, type ManualMap, type ManualTable, type ManualToken } from '@aelzerant/contracts';
import { readLancer,lancerMechName } from '../lancer/model';
```
</details>

## SceneTool

导出接口 · 源码第 8 行。

```ts
export interface SceneTool {
    mode: 'play' | 'select' | 'place' | 'move' | 'wall' | 'light' | 'drawing' | 'text' | 'reveal';
    anchor?: {
        x: number;
        y: number;
        z: number;
    };
    model: string;
    selection: string | null;
    elevation: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `mode` | 否 | `'play' &#124; 'select' &#124; 'place' &#124; 'move' &#124; 'wall' &#124; 'light' &#124; 'drawing' &#124; 'text' &#124; 'reveal'` | 见结构定义及所属功能文档 |
| `anchor` | 是 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `anchor.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `anchor.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `anchor.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `model` | 否 | `string` | 见结构定义及所属功能文档 |
| `selection` | 否 | `string &#124; null` | 见结构定义及所属功能文档 |
| `elevation` | 否 | `number` | 见结构定义及所属功能文档 |

## placeModel

导出接口 · 源码第 10 行。

```ts
export function placeModel(map: ManualMap, ref: string, x: number, y: number, z?: number): `${string}-${string}-${string}-${string}-${string}`;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `ref` | 否 | `string` | — |
| `x` | 否 | `number` | — |
| `y` | 否 | `number` | — |
| `z` | 是 | `number` | 0 |

## actorToken

导出接口 · 源码第 21 行。

```ts
export function actorToken(table: ManualTable, actorId?: string): ManualToken;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actorId` | 是 | `string` | '' |

## deployActorToken

导出接口 · 源码第 26 行。

```ts
export function deployActorToken(table: ManualTable, actorId: string): ManualToken;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actorId` | 否 | `string` | — |

## checkedMap

导出接口 · 源码第 27 行。

```ts
export function checkedMap(table: ManualTable, change: (map: ManualMap)=>void): ManualMap;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `change` | 否 | `(map: ManualMap)=>void` | — |

## demonstrationMap

导出接口 · 源码第 28 行。

```ts
export function demonstrationMap(): ManualMap;
```
