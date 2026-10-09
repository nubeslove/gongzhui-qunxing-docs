# game/packages/session/src/owned-items.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorControlled,canonicalJson,exportResourceFile,parseResourceFile,parseOwnedItem,parseOwnedItems,ownedItemFromResource,blankOwnedItem,copyOwnedItemForActor,storyId,storyText,type OwnedItemActor,type OwnedItemCommand,type StoryWorkspace,type GameSystemId,type ActorAccessSource} from '@aelzerant/contracts';
```
</details>

## applyOwnedItemCommand

导出接口 · 源码第 4 行。

Mutates only the candidate actor, inside the world's existing save transaction.

```ts
export function applyOwnedItemCommand(actor: OwnedItemActor&ActorAccessSource, action: OwnedItemCommand, context: {systemId:GameSystemId;story:StoryWorkspace;senderId:string;gm:boolean;busy:boolean}): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `OwnedItemActor&ActorAccessSource` | — |
| `action` | 否 | `OwnedItemCommand` | — |
| `context` | 否 | `{systemId:GameSystemId;story:StoryWorkspace;senderId:string;gm:boolean;busy:boolean}` | — |
