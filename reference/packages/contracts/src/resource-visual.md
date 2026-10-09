# game/packages/contracts/src/resource-visual.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject,storyId,storyList} from './story';
```
</details>

## ResourceVisual

导出接口 · 源码第 4 行。

Presentation-only identifiers. Clients resolve registered presets; URLs/scripts are not accepted.

```ts
export interface ResourceVisual {
    preset: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `preset` | 否 | `string` | 见结构定义及所属功能文档 |

## ResourceVisualEvent

导出接口 · 源码第 5 行。

```ts
export interface ResourceVisualEvent extends ResourceVisual {
    sceneId: string;
    sourceId: string;
    targetIds: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `sourceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `targetIds` | 否 | `string[]` | 见结构定义及所属功能文档 |

## parseResourceVisual

导出接口 · 源码第 6 行。

```ts
export function parseResourceVisual(raw: unknown): ResourceVisual;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseResourceVisualEvent

导出接口 · 源码第 11 行。

```ts
export function parseResourceVisualEvent(raw: unknown): ResourceVisualEvent;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
