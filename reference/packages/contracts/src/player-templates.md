# game/packages/contracts/src/player-templates.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyList,storyObject} from './story';
import {applySceneFeatureEdits} from './scene-feature-edits';
import type {SceneFeatures} from './scene-features';
```
</details>

## applyPlayerTemplateEdits

导出接口 · 源码第 5 行。

Players may only mutate their own inert, public measured templates.

```ts
export function applyPlayerTemplateEdits(features: SceneFeatures|undefined, raw: unknown, width: number, height: number, sender: string): SceneFeatures;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `raw` | 否 | `unknown` | — |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
| `sender` | 否 | `string` | — |
