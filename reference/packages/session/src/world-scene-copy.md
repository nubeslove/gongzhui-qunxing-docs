# game/packages/session/src/world-scene-copy.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {copySceneFeatures,copyTokenActorStory,placeInSceneDirectory,emptyStory} from '@aelzerant/contracts';
import type {WorldHandler} from './world-types';
import {assertGm,requireId,requireText} from './world-validation';
import {validateRegionMacros} from './region-macros';
```
</details>

## sceneCopyHandlers

导出接口 · 源码第 6 行。

```ts
export const sceneCopyHandlers: Record<string, WorldHandler>;
```
