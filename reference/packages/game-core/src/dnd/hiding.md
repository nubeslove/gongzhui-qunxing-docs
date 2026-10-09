# game/packages/game-core/src/dnd/hiding.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndCanSeeActor,dndObserver,manualSightFeatures,sceneCellLit,sceneObscured,type ManualActor,type ManualTable} from '@aelzerant/contracts';
import {dndCover} from './geometry';
```
</details>

## assertDndCanHide

导出接口 · 源码第 4 行。

Map geometry verifies mechanical prerequisites; narrative exceptions stay explicit GM rulings.

```ts
export function assertDndCanHide(table: ManualTable, actor: ManualActor): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actor` | 否 | `ManualActor` | — |
