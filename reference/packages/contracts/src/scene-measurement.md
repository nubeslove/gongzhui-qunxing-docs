# game/packages/contracts/src/scene-measurement.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isRecord} from './validation';
```
</details>

## SceneMeasurementScale

导出接口 · 源码第 2 行。

```ts
export interface SceneMeasurementScale {
    distance: number;
    units: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `distance` | 否 | `number` | 见结构定义及所属功能文档 |
| `units` | 否 | `string` | 见结构定义及所属功能文档 |

## parseSceneMeasurementScale

导出接口 · 源码第 4 行。

```ts
export function parseSceneMeasurementScale(raw: unknown): SceneMeasurementScale;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## sceneMeasuredDistance

导出接口 · 源码第 9 行。

One scale for horizontal distance and elevation; native rule budgets retain their rule units.

```ts
export function sceneMeasuredDistance(cells: number, scale: SceneMeasurementScale): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `cells` | 否 | `number` | — |
| `scale` | 否 | `SceneMeasurementScale` | — |

## sceneMeasuredVector

导出接口 · 源码第 14 行。

```ts
export function sceneMeasuredVector(delta: {x:number;y:number;z:number}, scale: SceneMeasurementScale): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `delta` | 否 | `{x:number;y:number;z:number}` | — |
| `scale` | 否 | `SceneMeasurementScale` | — |
