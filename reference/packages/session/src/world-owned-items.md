# game/packages/session/src/world-owned-items.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyStory,type OwnedItemCommand} from '@aelzerant/contracts';
import {applyOwnedItemCommand} from './owned-items';
import {ownedActor} from './world-validation';
import {worldActorBusy} from './world-token-instances';
import type {WorldHandler} from './world-types';
```
</details>

## ownedItemHandlers

导出接口 · 源码第 6 行。

```ts
export const ownedItemHandlers: Record<string, WorldHandler>;
```
