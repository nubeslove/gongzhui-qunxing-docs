# game/packages/contracts/src/scene-door.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {SceneWall} from './scene-features';
```
</details>

## DoorOperation

导出接口 · 源码第 2 行。

```ts
export type DoorOperation = 'toggle' | 'lock';
```

## DoorIntent

导出接口 · 源码第 3 行。

```ts
export interface DoorIntent {
    silent?: boolean;
    operation?: DoorOperation;
    expectedState?: SceneWall['door'];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `silent` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `operation` | 是 | `DoorOperation` | 见结构定义及所属功能文档 |
| `expectedState` | 是 | `SceneWall['door']` | 见结构定义及所属功能文档 |

## parseDoorIntent

导出接口 · 源码第 4 行。

```ts
export function parseDoorIntent(raw: unknown): DoorIntent;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## changedDoorState

导出接口 · 源码第 12 行。

Door state changes are intentional: locking never silently closes an open door.

```ts
export function changedDoorState(current: SceneWall['door'], gm: boolean, raw?: unknown): SceneWall['door'];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `current` | 否 | `SceneWall['door']` | — |
| `gm` | 否 | `boolean` | — |
| `raw` | 是 | `unknown` | — |
