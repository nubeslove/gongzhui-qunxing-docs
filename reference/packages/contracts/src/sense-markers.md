# game/packages/contracts/src/sense-markers.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyId,storyNumber,storyObject} from './story';
import type {ScenePoint} from './scene-features';
```
</details>

## SenseMarker

导出接口 · 源码第 3 行。

```ts
export interface SenseMarker extends ScenePoint {
    width: number;
    sources: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `sources` | 否 | `string[]` | 见结构定义及所属功能文档 |

## parseSenseMarkers

导出接口 · 源码第 4 行。

```ts
export function parseSenseMarkers(raw: unknown): SenseMarker[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
