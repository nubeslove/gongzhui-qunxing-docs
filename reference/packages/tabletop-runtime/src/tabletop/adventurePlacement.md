# game/packages/tabletop-runtime/src/tabletop/adventurePlacement.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptySceneFeatures,sceneRayBlocked,type ManualMap,type ScenePoint} from '@aelzerant/contracts';
```
</details>

## adventureLanding

导出接口 · 源码第 4 行。

Search close to the authored destination without overlapping people, walls or solid props.

```ts
export function adventureLanding(map: ManualMap, origin: ScenePoint, size: number, ignoreActor?: string): ScenePoint;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `origin` | 否 | `ScenePoint` | — |
| `size` | 否 | `number` | — |
| `ignoreActor` | 是 | `string` | — |
