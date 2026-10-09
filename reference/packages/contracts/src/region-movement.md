# game/packages/contracts/src/region-movement.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {regionContains} from './scene-region';
import {dndMagicSuppression} from './dnd-magic-fields';
import type {SceneFeatures,ScenePoint} from './scene-features';
```
</details>

## regionMovementMultiplier

导出接口 · 源码第 5 行。

Apply the last enabled multiplier at the token's centre and feet, never multiply overlaps.

```ts
export function regionMovementMultiplier(features: SceneFeatures|undefined, point: ScenePoint): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `point` | 否 | `ScenePoint` | — |

## regionMovementCells

导出接口 · 源码第 12 行。

The AAF grid preview receives numeric costs, not private region definitions.

```ts
export function regionMovementCells(features: SceneFeatures, width: number, height: number): Record<string,number>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures` | — |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
