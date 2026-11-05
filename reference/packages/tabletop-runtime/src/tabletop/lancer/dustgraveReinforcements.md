# game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveReinforcements.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualTable} from '@aelzerant/contracts';
import {lancerDeploymentFits} from '@aelzerant/game-core';
import {actorToken} from '../scene/editor';
import {dustgraveReserveAvailable} from './dustgraveTools';
```
</details>

## Placement

内部依赖类型 · 源码第 5 行。

```ts
type Placement = {
    actorId: string;
    x: number;
    y: number;
    z: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 否 | `number` | 见结构定义及所属功能文档 |

## validateDustgraveReinforcements

导出接口 · 源码第 6 行。

```ts
export function validateDustgraveReinforcements(t: ManualTable, placements: Placement[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `placements` | 否 | `Placement[]` | — |
