# game/packages/contracts/src/door-visual.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as obj,storyNumber as num,storyEnum as one} from './story';
import {safeMedia} from './world-library';
import type {SceneWall,ScenePoint} from './scene-features';
```
</details>

## DoorVisual

导出接口 · 源码第 5 行。

```ts
export interface DoorVisual {
    animation: keyof typeof DOOR_ANIMATIONS;
    src: string;
    flip: boolean;
    double: boolean;
    reverse: boolean;
    duration: number;
    strength: number;
    thickness: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `animation` | 否 | `keyof typeof DOOR_ANIMATIONS` | 见结构定义及所属功能文档 |
| `src` | 否 | `string` | 见结构定义及所属功能文档 |
| `flip` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `double` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `reverse` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `duration` | 否 | `number` | 见结构定义及所属功能文档 |
| `strength` | 否 | `number` | 见结构定义及所属功能文档 |
| `thickness` | 否 | `number` | 见结构定义及所属功能文档 |

## defaultDoorVisual

导出接口 · 源码第 6 行。

```ts
export const defaultDoorVisual: (): DoorVisual;
```

## parseDoorVisual

导出接口 · 源码第 7 行。

```ts
export function parseDoorVisual(raw: unknown): DoorVisual;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## DoorLeaf

导出接口 · 源码第 8 行。

```ts
export interface DoorLeaf {
    points: [
        ScenePoint,
        ScenePoint,
        ScenePoint,
        ScenePoint
    ];
    alpha: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `points` | 否 | `[ScenePoint,ScenePoint,ScenePoint,ScenePoint]` | 见结构定义及所属功能文档 |
| `alpha` | 否 | `number` | 见结构定义及所属功能文档 |

## doorLeaves

导出接口 · 源码第 10 行。

Render-only poses; open/closed collision remains the authoritative wall state.

```ts
export function doorLeaves(w: SceneWall, progress: number): DoorLeaf[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `w` | 否 | `SceneWall` | — |
| `progress` | 否 | `number` | — |
