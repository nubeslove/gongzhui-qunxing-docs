# game/packages/contracts/src/dnd-measurement.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {GameSystemId} from './systems';
import {SCENE_MEASUREMENT_DEFAULTS,type SceneMeasurementScale} from './scene-measurement';
```
</details>

## defaultSceneMeasurement

导出接口 · 源码第 4 行。

```ts
export function defaultSceneMeasurement(system: GameSystemId): SceneMeasurementScale;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `system` | 否 | `GameSystemId` | — |

## metricMapToDndGrid

导出接口 · 源码第 8 行。

Preserve physical dimensions; fractional outer bounds avoid stretching a converted map.

```ts
export function metricMapToDndGrid(columns: number, rows: number, metresPerCell: number): { width: number; depth: number; sourceCellFeet: number; ratio: number; measurement: { distance: 5; units: "ft"; }; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `columns` | 否 | `number` | — |
| `rows` | 否 | `number` | — |
| `metresPerCell` | 否 | `number` | — |
