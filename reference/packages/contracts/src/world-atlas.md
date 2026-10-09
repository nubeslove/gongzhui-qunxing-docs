# game/packages/contracts/src/world-atlas.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as obj,storyList as list,storyText as text,storyId as id,storyNumber as num,storyEnum as one} from './story';
```
</details>

## AtlasNode

导出接口 · 源码第 3 行。

```ts
export interface AtlasNode {
    id: string;
    parentId: string | null;
    name: string;
    kind: 'region' | 'place';
    x: number;
    y: number;
    image: string;
    description: string;
    people: string[];
    visible: boolean;
    frame?: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    background?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `parentId` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'region'&#124;'place'` | 见结构定义及所属功能文档 |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `image` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `people` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `visible` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `frame` | 是 | `{x:number;y:number;width:number;height:number}` | Relative rectangle in this node's image. Hotspots remain image-relative. |
| `frame.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `frame.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `frame.width` | 否 | `number` | 见结构定义及所属功能文档 |
| `frame.height` | 否 | `number` | 见结构定义及所属功能文档 |
| `background` | 是 | `string` | 见结构定义及所属功能文档 |

## WorldAtlas

导出接口 · 源码第 10 行。

```ts
export interface WorldAtlas {
    version: 1;
    revision: number;
    currentId: string;
    nodes: AtlasNode[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `currentId` | 否 | `string` | 见结构定义及所属功能文档 |
| `nodes` | 否 | `AtlasNode[]` | 见结构定义及所属功能文档 |

## AtlasCommand

导出接口 · 源码第 11 行。

```ts
export type AtlasCommand = {
    op: 'atlas.save';
    expected: number | null;
    value: WorldAtlas;
} | {
    op: 'atlas.travel';
    id: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.op` | 否 | `'atlas.save'` | 见结构定义及所属功能文档 |
| `分支1.expected` | 否 | `number&#124;null` | 见结构定义及所属功能文档 |
| `分支1.value` | 否 | `WorldAtlas` | 见结构定义及所属功能文档 |
| `分支2.op` | 否 | `'atlas.travel'` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |

## atlasMedia

导出接口 · 源码第 12 行。

```ts
export function atlasMedia(raw: unknown): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseWorldAtlas

导出接口 · 源码第 17 行。

```ts
export function parseWorldAtlas(raw: unknown): WorldAtlas;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## atlasPath

导出接口 · 源码第 32 行。

```ts
export function atlasPath(atlas: WorldAtlas, id: string): AtlasNode[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `atlas` | 否 | `WorldAtlas` | — |
| `id` | 否 | `string` | — |

## projectWorldAtlas

导出接口 · 源码第 33 行。

```ts
export function projectWorldAtlas(atlas: WorldAtlas): WorldAtlas;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `atlas` | 否 | `WorldAtlas` | — |
