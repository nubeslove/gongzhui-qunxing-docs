# game/packages/contracts/src/unit-inspection.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualActor,ManualTable} from './tabletop';
import {DND_CONDITIONS,type DndCondition} from './dnd';
import {storyObject as obj,storyList as list,storyText as text,storyNumber as num,storyEnum as one} from './story';
```
</details>

## UnitInspection

导出接口 · 源码第 6 行。

Public combat presentation is independent of permission to read a character sheet.

```ts
export interface UnitInspection {
    kind: 'pc' | 'monster' | 'object' | 'vehicle';
    health: {
        fraction: number;
        damage: number;
        current?: number;
        max?: number;
        temporary?: number;
    };
    conditions: DndCondition[];
    effects: {
        id: string;
        spell?: string;
        label?: string;
        seconds?: number;
        concentration?: boolean;
        mirrors?: number;
        suppressed?: boolean;
    }[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'pc'&#124;'monster'&#124;'object'&#124;'vehicle'` | 见结构定义及所属功能文档 |
| `health` | 否 | `{fraction:number;damage:number;current?:number;max?:number;temporary?:number}` | 见结构定义及所属功能文档 |
| `health.fraction` | 否 | `number` | 见结构定义及所属功能文档 |
| `health.damage` | 否 | `number` | 见结构定义及所属功能文档 |
| `health.current` | 是 | `number` | 见结构定义及所属功能文档 |
| `health.max` | 是 | `number` | 见结构定义及所属功能文档 |
| `health.temporary` | 是 | `number` | 见结构定义及所属功能文档 |
| `conditions` | 否 | `DndCondition[]` | 见结构定义及所属功能文档 |
| `effects` | 否 | `{id:string;spell?:string;label?:string;seconds?:number;concentration?:boolean;mirrors?:number;suppressed?:boolean}[]` | 见结构定义及所属功能文档 |
| `effects.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `effects.[].spell` | 是 | `string` | 见结构定义及所属功能文档 |
| `effects.[].label` | 是 | `string` | 见结构定义及所属功能文档 |
| `effects.[].seconds` | 是 | `number` | 见结构定义及所属功能文档 |
| `effects.[].concentration` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `effects.[].mirrors` | 是 | `number` | 见结构定义及所属功能文档 |
| `effects.[].suppressed` | 是 | `boolean` | 见结构定义及所属功能文档 |

## SceneObject

导出接口 · 源码第 12 行。

```ts
export interface SceneObject {
    kind: 'object' | 'vehicle';
    material: string;
    damageThreshold: number;
    size?: number;
    image?: string;
    blocksMovement?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'object'&#124;'vehicle'` | 见结构定义及所属功能文档 |
| `material` | 否 | `string` | 见结构定义及所属功能文档 |
| `damageThreshold` | 否 | `number` | 见结构定义及所属功能文档 |
| `size` | 是 | `number` | 见结构定义及所属功能文档 |
| `image` | 是 | `string` | 见结构定义及所属功能文档 |
| `blocksMovement` | 是 | `boolean` | 见结构定义及所属功能文档 |

## parseSceneObject

导出接口 · 源码第 13 行。

```ts
export function parseSceneObject(raw: unknown): SceneObject;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseUnitInspection

导出接口 · 源码第 14 行。

```ts
export function parseUnitInspection(raw: unknown): UnitInspection;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## inspectDndUnit

导出接口 · 源码第 17 行。

```ts
export function inspectDndUnit(table: Pick<ManualTable,'dndBattle'>, a: ManualActor, exact: boolean): UnitInspection|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `Pick<ManualTable,'dndBattle'>` | — |
| `a` | 否 | `ManualActor` | — |
| `exact` | 否 | `boolean` | — |
