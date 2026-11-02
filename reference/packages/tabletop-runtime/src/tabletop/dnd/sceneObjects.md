# game/packages/tabletop-runtime/src/tabletop/dnd/sceneObjects.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {canonicalJson,DND_DAMAGE_TYPES,defaultTokenAppearance,parseSceneObject,storyGm,storyObject as obj,storyText as text,storyNumber as num,storyEnum as one,storyList as list,type DndDamageType,type ManualTable,type SceneObject,type MovementPoint} from '@aelzerant/contracts';
import {dndBase} from '@aelzerant/rules-engine';
```
</details>

## SceneObjectConfig

导出接口 · 源码第 4 行。

```ts
export interface SceneObjectConfig extends SceneObject {
    name: string;
    hp: number;
    maxHp: number;
    ac: number;
    size: number;
    image: string;
    blocksMovement: boolean;
    resistances: DndDamageType[];
    immunities: DndDamageType[];
    vulnerabilities: DndDamageType[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `hp` | 否 | `number` | 见结构定义及所属功能文档 |
| `maxHp` | 否 | `number` | 见结构定义及所属功能文档 |
| `ac` | 否 | `number` | 见结构定义及所属功能文档 |
| `size` | 否 | `number` | 见结构定义及所属功能文档 |
| `image` | 否 | `string` | 见结构定义及所属功能文档 |
| `blocksMovement` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `resistances` | 否 | `DndDamageType[]` | 见结构定义及所属功能文档 |
| `immunities` | 否 | `DndDamageType[]` | 见结构定义及所属功能文档 |
| `vulnerabilities` | 否 | `DndDamageType[]` | 见结构定义及所属功能文档 |

## SceneObjectCommand

导出接口 · 源码第 5 行。

```ts
export type SceneObjectCommand = {
    op: 'deploy';
    id: string;
    tokenId: string;
    point: MovementPoint;
} | {
    op: 'place';
    id: string;
    tokenId: string;
    point: MovementPoint;
    config: SceneObjectConfig;
} | {
    op: 'configure';
    id: string;
    config: SceneObjectConfig;
    expected: SceneObjectConfig;
} | {
    op: 'resetDamage';
    id: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.op` | 否 | `'deploy'` | 见结构定义及所属功能文档 |
| `分支1.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.tokenId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.point` | 否 | `MovementPoint` | 见结构定义及所属功能文档 |
| `分支2.op` | 否 | `'place'` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.tokenId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.point` | 否 | `MovementPoint` | 见结构定义及所属功能文档 |
| `分支2.config` | 否 | `SceneObjectConfig` | 见结构定义及所属功能文档 |
| `分支3.op` | 否 | `'configure'` | 见结构定义及所属功能文档 |
| `分支3.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.config` | 否 | `SceneObjectConfig` | 见结构定义及所属功能文档 |
| `分支3.expected` | 否 | `SceneObjectConfig` | 见结构定义及所属功能文档 |
| `分支4.op` | 否 | `'resetDamage'` | 见结构定义及所属功能文档 |
| `分支4.id` | 否 | `string` | 见结构定义及所属功能文档 |

## newSceneObjectConfig

导出接口 · 源码第 12 行。

```ts
export const newSceneObjectConfig: (preset?: string): SceneObjectConfig;
```

## sceneObjectConfig

导出接口 · 源码第 13 行。

```ts
export function sceneObjectConfig(table: ManualTable, id: string): SceneObjectConfig|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `id` | 否 | `string` | — |

## parseSceneObjectConfig

导出接口 · 源码第 17 行。

```ts
export function parseSceneObjectConfig(raw: unknown): SceneObjectConfig;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## syncSceneObjectTokens

导出接口 · 源码第 22 行。

```ts
export function syncSceneObjectTokens(table: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |

## applySceneObject

导出接口 · 源码第 24 行。

Objects reuse the damage pipeline but never acquire creature actions, senses or player ownership.

```ts
export function applySceneObject(table: ManualTable, sender: string, command: SceneObjectCommand): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `sender` | 否 | `string` | — |
| `command` | 否 | `SceneObjectCommand` | — |
