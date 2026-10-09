# game/packages/session/src/world-environment-effects.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {worldMovePath,worldMovementModes,worldClimbTurn} from './world-elevation';
import {climbEnvironmentDecision,assertClimbAttempt} from './elevation-movement';
import {emptyStory,canonicalJson,expandMovementPath,movementPath,type EnvironmentEffect,type ScenePoint,type RegionNotice,type EnvironmentDecision} from '@aelzerant/contracts';
import {findPath,cellKey,nextRandom} from '@aelzerant/game-core';
import {controlToken,sceneHandlers} from './world-scenes';
import {isAafSpeedMode,type MovementMode} from '@aelzerant/contracts';
import {emptyEnvironmentEffect,jumpEnvironmentDecision,validateEnvironmentMove,requestEnvironmentDecision,rollEnvironmentDamage,movementEnvironmentSignature} from './environment-decisions';
import type {WorldDocument,WorldAction,WorldContext,WorldHandler} from './world-types';
```
</details>

## prepareWorldEnvironmentMove

导出接口 · 源码第 9 行。

```ts
export function prepareWorldEnvironmentMove(world: WorldDocument, action: WorldAction, context: WorldContext): EnvironmentDecision|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `action` | 否 | `WorldAction` | — |
| `context` | 否 | `WorldContext` | — |

## applyWorldEnvironmentEffect

导出接口 · 源码第 17 行。

```ts
export function applyWorldEnvironmentEffect(world: WorldDocument, sceneId: string, tokenId: string, effect: EnvironmentEffect, now: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `sceneId` | 否 | `string` | — |
| `tokenId` | 否 | `string` | — |
| `effect` | 否 | `EnvironmentEffect` | — |
| `now` | 否 | `number` | — |

## worldEnvironmentNotices

导出接口 · 源码第 24 行。

```ts
export function worldEnvironmentNotices(world: WorldDocument, sceneId: string, notices: RegionNotice[], now: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `sceneId` | 否 | `string` | — |
| `notices` | 否 | `RegionNotice[]` | — |
| `now` | 否 | `number` | — |

## resolveWorldEnvironment

导出接口 · 源码第 30 行。

```ts
export function resolveWorldEnvironment(world: WorldDocument, context: WorldContext, handlers: Readonly<Record<string,WorldHandler>>): {sceneId:string;tokenId:string;path:ScenePoint[]}|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `context` | 否 | `WorldContext` | — |
| `handlers` | 否 | `Readonly<Record<string,WorldHandler>>` | — |
