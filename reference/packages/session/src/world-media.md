# game/packages/session/src/world-media.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {compendiumMediaPaths,storyGm,type WorldAssetFile} from '@aelzerant/contracts';
import type {WorldDocument} from './world-types';
import type {WorldView} from './world-view';
```
</details>

## nativeMediaPaths

导出接口 · 源码第 5 行。

```ts
export function nativeMediaPaths(value: unknown): Set<string>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## nativeMediaFiles

导出接口 · 源码第 12 行。

The input view must already have its fields projected for this account.

```ts
export function nativeMediaFiles(world: WorldDocument, view: WorldView, playerId: string): WorldAssetFile[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `view` | 否 | `WorldView` | — |
| `playerId` | 否 | `string` | — |

## assertNativeMediaCommand

导出接口 · 源码第 18 行。

A participant cannot turn a guessed private filename into a readable resource by editing their card.

```ts
export function assertNativeMediaCommand(world: WorldDocument, view: WorldView, playerId: string, action: unknown): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `view` | 否 | `WorldView` | — |
| `playerId` | 否 | `string` | — |
| `action` | 否 | `unknown` | — |
