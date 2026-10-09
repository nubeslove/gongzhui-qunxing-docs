# game/packages/contracts/src/scene-feature-edits.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptySceneFeatures,parseSceneFeatures,type SceneFeatures} from './scene-features';
import {storyObject,storyId,storyList,storyEnum} from './story';
```
</details>

## FeatureLayer

导出接口 · 源码第 4 行。

```ts
export type FeatureLayer = keyof typeof FEATURE_LAYERS;
```

## SceneFeatureEdit

导出接口 · 源码第 5 行。

```ts
export interface SceneFeatureEdit {
    layer: FeatureLayer;
    id: string;
    before: unknown | null;
    after: unknown | null;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `layer` | 否 | `FeatureLayer` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `before` | 否 | `unknown&#124;null` | 见结构定义及所属功能文档 |
| `after` | 否 | `unknown&#124;null` | 见结构定义及所属功能文档 |

## applySceneFeatureEdits

导出接口 · 源码第 6 行。

```ts
export function applySceneFeatureEdits(previous: SceneFeatures|undefined, raw: unknown, width: number, height: number): SceneFeatures;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `previous` | 否 | `SceneFeatures&#124;undefined` | — |
| `raw` | 否 | `unknown` | — |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
