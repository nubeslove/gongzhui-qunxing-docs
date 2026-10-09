# game/packages/session/src/environment-decisions.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {recordClimbAttempt} from './elevation-movement';
import {regionPathStates,createTimedDecision,environmentRegionsOnPath,canonicalJson,assertEnvironmentMovement,movementChoice,movementForStep,parseEnvironmentDecision,storyGm,type EnvironmentDecision,type StoryWorkspace,type SceneFeatures,type ScenePoint,type MovementChoice,type TokenAppearance} from '@aelzerant/contracts';
```
</details>

## requestEnvironmentDecision

导出接口 · 源码第 4 行。

```ts
export function requestEnvironmentDecision(story: StoryWorkspace, data: EnvironmentDecision, controllerId: string, now: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `data` | 否 | `EnvironmentDecision` | — |
| `controllerId` | 否 | `string` | — |
| `now` | 否 | `number` | — |

## applyEnvironmentDecision

导出接口 · 源码第 12 行。

```ts
export function applyEnvironmentDecision(story: StoryWorkspace, command: Record<string,unknown>, context: {ownerId:string;senderId:string}): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `command` | 否 | `Record<string,unknown>` | — |
| `context` | 否 | `{ownerId:string;senderId:string}` | — |

## movementEnvironmentSignature

导出接口 · 源码第 24 行。

```ts
export function movementEnvironmentSignature(features: SceneFeatures|undefined, path: ScenePoint[]): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `path` | 否 | `ScenePoint[]` | — |

## validateEnvironmentMove

导出接口 · 源码第 25 行。

```ts
export function validateEnvironmentMove(features: SceneFeatures|undefined, path: ScenePoint[], rawMode: unknown, appearance: Pick<TokenAppearance,'movementModes'>|undefined, gm: boolean): MovementChoice;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `path` | 否 | `ScenePoint[]` | — |
| `rawMode` | 否 | `unknown` | — |
| `appearance` | 否 | `Pick<TokenAppearance,'movementModes'>&#124;undefined` | — |
| `gm` | 否 | `boolean` | — |

## jumpEnvironmentDecision

导出接口 · 源码第 29 行。

```ts
export function jumpEnvironmentDecision(features: SceneFeatures|undefined, path: ScenePoint[], feet: ScenePoint[], sceneId: string, tokenId: string, actorId: string, name: string): EnvironmentDecision|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `path` | 否 | `ScenePoint[]` | — |
| `feet` | 否 | `ScenePoint[]` | — |
| `sceneId` | 否 | `string` | — |
| `tokenId` | 否 | `string` | — |
| `actorId` | 否 | `string` | — |
| `name` | 否 | `string` | — |

## rollEnvironmentDamage

导出接口 · 源码第 34 行。

```ts
export function rollEnvironmentDamage(expression: string, random?: ()=>number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `expression` | 否 | `string` | — |
| `random` | 是 | `()=>number` | Math.random |
