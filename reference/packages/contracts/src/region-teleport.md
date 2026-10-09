# game/packages/contracts/src/region-teleport.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {regionContains,regionShapes,type SceneRegion} from './scene-region';
import type {ScenePoint} from './scene-features';
```
</details>

## regionLanding

导出接口 · 源码第 4 行。

Stable nearest free grid position, considering holes and feet elevation. No path between scenes.

```ts
export function regionLanding(region: SceneRegion, width: number, height: number, size: number, z: number, valid: (p:ScenePoint)=>boolean): ScenePoint;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `region` | 否 | `SceneRegion` | — |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
| `size` | 否 | `number` | — |
| `z` | 否 | `number` | — |
| `valid` | 否 | `(p:ScenePoint)=>boolean` | — |
