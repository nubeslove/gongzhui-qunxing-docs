# game/packages/session/src/world-actor-access.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorAccess,actorControlled,projectedActorAccess,actorOwnership,canonicalJson,parseActorAccess} from '@aelzerant/contracts';
import type {ActorDocument,WorldHandler} from './world-types';
import {assertGm,requireId,ownedActor,actorProfile} from './world-validation';
import {worldActorBusy} from "./world-token-instances";
```
</details>

## projectWorldActor

导出接口 · 源码第 4 行。

```ts
export function projectWorldActor(actor: ActorDocument, playerId: string): ActorDocument;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ActorDocument` | — |
| `playerId` | 否 | `string` | — |
