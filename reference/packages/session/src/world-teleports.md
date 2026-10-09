# game/packages/session/src/world-teleports.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorControlled,actorControllers} from '@aelzerant/contracts';
import {emptyStory,regionLanding,type RegionNotice} from '@aelzerant/contracts';
import {movementCost,cellKey} from '@aelzerant/game-core';
import type {WorldDocument} from './world-types';
```
</details>

## teleportWorldToken

导出接口 · 源码第 5 行。

```ts
export function teleportWorldToken(world: WorldDocument, sceneId: string, effect: RegionNotice, members?: Iterable<string>): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `sceneId` | 否 | `string` | — |
| `effect` | 否 | `RegionNotice` | — |
| `members` | 是 | `Iterable<string>` | [] |
