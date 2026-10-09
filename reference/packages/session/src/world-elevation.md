# game/packages/session/src/world-elevation.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {requireNumber} from './world-validation';
import {movementPath,expandElevationPath,surfaceElevation,type MovementMode,type ScenePoint,movementChoice} from '@aelzerant/contracts';
import {findPath,cellKey} from '@aelzerant/game-core';
import type {WorldDocument,SceneDocument,TokenDocument,WorldAction} from './world-types';
```
</details>

## worldClimbTurn

导出接口 · 源码第 5 行。

```ts
export const worldClimbTurn: (scene: SceneDocument): string | undefined;
```

## worldMovementModes

导出接口 · 源码第 6 行。

```ts
export function worldMovementModes(world: WorldDocument, t: TokenDocument): MovementMode[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `t` | 否 | `TokenDocument` | — |

## worldMovePath

导出接口 · 源码第 10 行。

```ts
export function worldMovePath(world: WorldDocument, scene: SceneDocument, t: TokenDocument, action: WorldAction): ScenePoint[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `scene` | 否 | `SceneDocument` | — |
| `t` | 否 | `TokenDocument` | — |
| `action` | 否 | `WorldAction` | — |
