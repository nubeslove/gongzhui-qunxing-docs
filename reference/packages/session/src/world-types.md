# game/packages/session/src/world-types.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {TokenPrototype,TokenActorInstance} from '@aelzerant/contracts';
import type {TokenAppearance} from '@aelzerant/contracts';
import type { StoryWorkspace, SceneMap, SceneKind } from "@aelzerant/contracts";
import type { CombatantInput, CombatState } from "@aelzerant/game-core";
import type { CommandReceipt } from "./battle-authority";
```
</details>

## Visibility

导出接口 · 源码第 7 行。

```ts
export type Visibility = "public" | "owners" | "gm";
```

## ActorProfile

导出接口 · 源码第 8 行。

```ts
export type ActorProfile = Omit<CombatantInput, "id" | "x" | "y">;
```

## ResourceValue

导出接口 · 源码第 9 行。

```ts
export interface ResourceValue {
    value: number;
    max: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `value` | 否 | `number` | 见结构定义及所属功能文档 |
| `max` | 否 | `number` | 见结构定义及所属功能文档 |

## InventoryEntry

导出接口 · 源码第 10 行。

```ts
export interface InventoryEntry {
    id: string;
    itemId: string;
    quantity: number;
    equippedSlots: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `itemId` | 否 | `string` | 见结构定义及所属功能文档 |
| `quantity` | 否 | `number` | 见结构定义及所属功能文档 |
| `equippedSlots` | 否 | `string[]` | 见结构定义及所属功能文档 |

## ActorEffect

导出接口 · 源码第 11 行。

```ts
export interface ActorEffect {
    id: string;
    name: string;
    stacks: number;
    duration: number | null;
    tick: "turn-start" | "turn-end" | "rest" | "manual";
    description: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `stacks` | 否 | `number` | 见结构定义及所属功能文档 |
| `duration` | 否 | `number &#124; null` | 见结构定义及所属功能文档 |
| `tick` | 否 | `"turn-start" &#124; "turn-end" &#124; "rest" &#124; "manual"` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |

## ActorDocument

导出接口 · 源码第 12 行。

```ts
export interface ActorDocument {
    aaf?: import('@aelzerant/contracts').AafCharacter;
    ownedItems?: import("@aelzerant/contracts").OwnedItem[];
    access?: import("@aelzerant/contracts").DocumentAccess;
    prototypeToken?: TokenPrototype;
    tokenInstance?: TokenActorInstance;
    id: string;
    profile: ActorProfile;
    mp: number;
    burnStacks: number;
    owners: string[];
    visibility: Visibility;
    portrait: string | null;
    notes: string;
    inventory: InventoryEntry[];
    resources: Record<string, ResourceValue>;
    effects: ActorEffect[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `aaf` | 是 | `import('@aelzerant/contracts').AafCharacter` | 见结构定义及所属功能文档 |
| `ownedItems` | 是 | `import("@aelzerant/contracts").OwnedItem[]` | 见结构定义及所属功能文档 |
| `access` | 是 | `import("@aelzerant/contracts").DocumentAccess` | 见结构定义及所属功能文档 |
| `prototypeToken` | 是 | `TokenPrototype` | 见结构定义及所属功能文档 |
| `tokenInstance` | 是 | `TokenActorInstance` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `profile` | 否 | `ActorProfile` | 见结构定义及所属功能文档 |
| `mp` | 否 | `number` | 见结构定义及所属功能文档 |
| `burnStacks` | 否 | `number` | 见结构定义及所属功能文档 |
| `owners` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `visibility` | 否 | `Visibility` | 见结构定义及所属功能文档 |
| `portrait` | 否 | `string &#124; null` | 见结构定义及所属功能文档 |
| `notes` | 否 | `string` | 见结构定义及所属功能文档 |
| `inventory` | 否 | `InventoryEntry[]` | 见结构定义及所属功能文档 |
| `resources` | 否 | `Record<string, ResourceValue>` | 见结构定义及所属功能文档 |
| `effects` | 否 | `ActorEffect[]` | 见结构定义及所属功能文档 |

## TokenDocument

导出接口 · 源码第 29 行。

```ts
export interface TokenDocument {
    z?: number;
    name?: string;
    image?: string;
    rotation?: number;
    appearance?: TokenAppearance;
    id: string;
    actorId: string;
    x: number;
    y: number;
    hidden: boolean;
    visionFeet: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `z` | 是 | `number` | 见结构定义及所属功能文档 |
| `name` | 是 | `string` | 见结构定义及所属功能文档 |
| `image` | 是 | `string` | 见结构定义及所属功能文档 |
| `rotation` | 是 | `number` | 见结构定义及所属功能文档 |
| `appearance` | 是 | `TokenAppearance` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `hidden` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `visionFeet` | 否 | `number` | 见结构定义及所属功能文档 |

## MapAnnotation

导出接口 · 源码第 30 行。

```ts
export interface MapAnnotation {
    id: string;
    ownerId: string;
    kind: "pin" | "drawing" | "template";
    text: string;
    points: Array<{
        x: number;
        y: number;
    }>;
    visibility: Visibility;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `ownerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `"pin" &#124; "drawing" &#124; "template"` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `points` | 否 | `Array<{ x: number; y: number }>` | 见结构定义及所属功能文档 |
| `visibility` | 否 | `Visibility` | 见结构定义及所属功能文档 |

## SceneDocument

导出接口 · 源码第 34 行。

```ts
export interface SceneDocument {
    kind?: SceneKind;
    id: string;
    name: string;
    map: SceneMap;
    background: string | null;
    tokens: Record<string, TokenDocument>;
    combat: CombatState | null;
    annotations: Record<string, MapAnnotation>;
    fogEnabled: boolean;
    revealed: string[];
    ambientLight?: "bright" | "dark";
    combatId?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 是 | `SceneKind` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `map` | 否 | `SceneMap` | 见结构定义及所属功能文档 |
| `background` | 否 | `string &#124; null` | 见结构定义及所属功能文档 |
| `tokens` | 否 | `Record<string, TokenDocument>` | 见结构定义及所属功能文档 |
| `combat` | 否 | `CombatState &#124; null` | 见结构定义及所属功能文档 |
| `annotations` | 否 | `Record<string, MapAnnotation>` | 见结构定义及所属功能文档 |
| `fogEnabled` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `revealed` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `ambientLight` | 是 | `"bright" &#124; "dark"` | 见结构定义及所属功能文档 |
| `combatId` | 是 | `string` | 见结构定义及所属功能文档 |

## CatalogKind

导出接口 · 源码第 43 行。

```ts
export type CatalogKind = "actor" | "monster" | "item" | "ability" | "rule" | "journal";
```

## CatalogEntry

导出接口 · 源码第 44 行。

```ts
export interface CatalogEntry {
    id: string;
    kind: CatalogKind;
    name: string;
    description: string;
    tags: string[];
    image: string | null;
    visibility: Visibility;
    profile?: ActorProfile;
    data: Record<string, unknown>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `CatalogKind` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `tags` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `image` | 否 | `string &#124; null` | 见结构定义及所属功能文档 |
| `visibility` | 否 | `Visibility` | 见结构定义及所属功能文档 |
| `profile` | 是 | `ActorProfile` | 见结构定义及所属功能文档 |
| `data` | 否 | `Record<string, unknown>` | Validated JSON extension data, never executable scripts. |

## JournalDocument

导出接口 · 源码第 50 行。

```ts
export interface JournalDocument {
    id: string;
    title: string;
    body: string;
    image: string | null;
    visibility: Visibility;
    owners: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `title` | 否 | `string` | 见结构定义及所属功能文档 |
| `body` | 否 | `string` | 见结构定义及所属功能文档 |
| `image` | 否 | `string &#124; null` | 见结构定义及所属功能文档 |
| `visibility` | 否 | `Visibility` | 见结构定义及所属功能文档 |
| `owners` | 否 | `string[]` | 见结构定义及所属功能文档 |

## ChatMessage

导出接口 · 源码第 51 行。

```ts
export interface ChatMessage {
    id: string;
    authorId: string;
    at: number;
    text: string;
    recipients: string[] | null;
    roll?: {
        count: number;
        sides: number;
        modifier: number;
        faces: number[];
        total: number;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `authorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `recipients` | 否 | `string[] &#124; null` | 见结构定义及所属功能文档 |
| `roll` | 是 | `{ count: number; sides: number; modifier: number; faces: number[]; total: number }` | 见结构定义及所属功能文档 |
| `roll.count` | 否 | `number` | 见结构定义及所属功能文档 |
| `roll.sides` | 否 | `number` | 见结构定义及所属功能文档 |
| `roll.modifier` | 否 | `number` | 见结构定义及所属功能文档 |
| `roll.faces` | 否 | `number[]` | 见结构定义及所属功能文档 |
| `roll.total` | 否 | `number` | 见结构定义及所属功能文档 |

## ClockDocument

导出接口 · 源码第 56 行。

```ts
export interface ClockDocument {
    id: string;
    name: string;
    value: number;
    max: number;
    visibility: Visibility;
    owners: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `value` | 否 | `number` | 见结构定义及所属功能文档 |
| `max` | 否 | `number` | 见结构定义及所属功能文档 |
| `visibility` | 否 | `Visibility` | 见结构定义及所属功能文档 |
| `owners` | 否 | `string[]` | 见结构定义及所属功能文档 |

## AudioState

导出接口 · 源码第 57 行。

```ts
export interface AudioState {
    assetId: string | null;
    playing: boolean;
    volume: number;
    loop: boolean;
    offsetSeconds: number;
    startedAt: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `assetId` | 否 | `string &#124; null` | 见结构定义及所属功能文档 |
| `playing` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `volume` | 否 | `number` | 见结构定义及所属功能文档 |
| `loop` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `offsetSeconds` | 否 | `number` | 见结构定义及所属功能文档 |
| `startedAt` | 否 | `number` | 见结构定义及所属功能文档 |

## WorldDocument

导出接口 · 源码第 58 行。

```ts
export interface WorldDocument {
    aafCatalog?: import('@aelzerant/contracts').AafCatalog;
    story?: StoryWorkspace;
    schemaVersion: 1;
    id: string;
    name: string;
    hostId: string;
    revision: number;
    activeSceneId: string | null;
    scenes: Record<string, SceneDocument>;
    actors: Record<string, ActorDocument>;
    catalog: Record<string, CatalogEntry>;
    journals: Record<string, JournalDocument>;
    messages: ChatMessage[];
    clocks: Record<string, ClockDocument>;
    audio: AudioState;
    rngState: number;
    receipts: Array<{
        senderId: string;
        fingerprint: string;
        receipt: CommandReceipt;
    }>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `aafCatalog` | 是 | `import('@aelzerant/contracts').AafCatalog` | 见结构定义及所属功能文档 |
| `story` | 是 | `StoryWorkspace` | 见结构定义及所属功能文档 |
| `schemaVersion` | 否 | `1` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `hostId` | 否 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `activeSceneId` | 否 | `string &#124; null` | 见结构定义及所属功能文档 |
| `scenes` | 否 | `Record<string, SceneDocument>` | 见结构定义及所属功能文档 |
| `actors` | 否 | `Record<string, ActorDocument>` | 见结构定义及所属功能文档 |
| `catalog` | 否 | `Record<string, CatalogEntry>` | 见结构定义及所属功能文档 |
| `journals` | 否 | `Record<string, JournalDocument>` | 见结构定义及所属功能文档 |
| `messages` | 否 | `ChatMessage[]` | 见结构定义及所属功能文档 |
| `clocks` | 否 | `Record<string, ClockDocument>` | 见结构定义及所属功能文档 |
| `audio` | 否 | `AudioState` | 见结构定义及所属功能文档 |
| `rngState` | 否 | `number` | 见结构定义及所属功能文档 |
| `receipts` | 否 | `Array<{ senderId: string; fingerprint: string; receipt: CommandReceipt }>` | 见结构定义及所属功能文档 |

## WorldCommand

导出接口 · 源码第 74 行。

```ts
export interface WorldCommand {
    requestId: string;
    expectedRevision: number;
    action: WorldAction;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `requestId` | 否 | `string` | 见结构定义及所属功能文档 |
| `expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `action` | 否 | `WorldAction` | 见结构定义及所属功能文档 |

## WorldAction

导出接口 · 源码第 75 行。

```ts
export interface WorldAction {
    kind: string;
    [field: string]: unknown;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `string` | 见结构定义及所属功能文档 |
| `[field: string]` | 否 | `unknown` | 动态键 |

## WorldContext

导出接口 · 源码第 76 行。

```ts
export interface WorldContext {
    compendiumImport?: (id: string) => import('@aelzerant/contracts').CompendiumImportBatch | undefined;
    isGm?: boolean;
    senderId: string;
    hostId: string;
    now: number;
    members: ReadonlySet<string>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `compendiumImport` | 是 | `(id:string)=>import('@aelzerant/contracts').CompendiumImportBatch&#124;undefined` | 见结构定义及所属功能文档 |
| `isGm` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `senderId` | 否 | `string` | 见结构定义及所属功能文档 |
| `hostId` | 否 | `string` | 见结构定义及所属功能文档 |
| `now` | 否 | `number` | 见结构定义及所属功能文档 |
| `members` | 否 | `ReadonlySet<string>` | 见结构定义及所属功能文档 |

## WorldHandler

导出接口 · 源码第 77 行。

```ts
export type WorldHandler = (world: WorldDocument, action: WorldAction, context: WorldContext) => void;
```
