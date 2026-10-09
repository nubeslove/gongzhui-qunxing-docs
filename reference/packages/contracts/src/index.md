# game/packages/contracts/src/index.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## 重新导出的模块

```ts
export * from './aaf';
export * from './aaf-rules';
export * from './aaf-movement';
export * from './scene-pixels';
export * from './library-directory';
export * from './table-document';
export * from './directory-table';
export * from './directory-delete';
export * from './owned-item';
export * from './actor-access';
export * from './journal-actions';
export * from './scene-thumbnail';
export * from './actor-inheritance';
export * from './actor-delta';
export * from './scene-illumination';
export * from './scene-journal';
export * from './scene-camera';
export * from './scene-canvas';
export * from './scene-preload';
export * from './scene-navigation';
export * from './auth';
export { GAME_SYSTEMS, isGameSystemId, systemOf, systemIdentity } from './systems';
export type { GameSystemId } from './systems';
export * from './tabletop';
export * from "./characters";
export * from "./scene";
export * from "./validation";
export * from "./media";
export * from "./community";
export * from "./scene-assets";
export * from "./glb";
export * from "./lancer-combat";
export * from './lancer-maintenance';
export * from './lancer-custom';
export * from './dnd';
export * from './decision-policy';
export * from './story';
export * from './user-colors';
export * from './scene-features';
export * from './world-calendar';
export * from './world-dice';
export * from './world-conversation';
export * from './roll-visibility';
export * from './world-library';
export * from './card-actions';
export * from './card-stacks';
export * from './card-stack-file';
export * from './card-definition';
export * from './card-presets';
export * from './scene-geometry';
export * from './scene-feature-edits';
export * from './scene-perception';
export * from './wall-access';
export * from './party-vision';
export * from './scene-obscurity';
export * from './scene-environment';
export * from './template-walls';
export * from './scene-sound';
export * from './scene-tile';
export * from './scene-exploration';
export * from './scene-region';
export * from './region-events';
export * from './region-combat';
export * from './region-movement';
export * from './table-scene';
export * from './region-teleport';
export * from './region-decision';
export * from './journal-access';
export * from './pdf-media';
export * from './journal-reference';
export * from './scene-note';
export * from './inline-roll';
export * from './scene-audio';
export * from './world-macro';
export * from './chat-input';
export * from './scene-template';
export * from './scene-door';
export * from './door-feedback';
export * from './door-visual';
export * from './drawing-shape';
export * from './drawing-style';
export * from './token-appearance';
export * from './token-prototype';
export * from './token-images';
export * from './scene-fog';
export * from './scene-directory';
export * from './scene-copy';
export * from './scene-archive';
export * from './scene-archive-content';
export * from './journal-secrets';
export * from './document-directory';
export * from './journal-directory';
export * from './journal-transfer';
export * from './journal-format';
export * from './document-reference';
export * from './entity-directory';
export * from './resource-transfer';
export * from './actor-transfer';
export * from './resource-access';
export * from './resource-details';
export * from './directory-access';
export * from './compendium';
export * from './compendium-media';
export * from './compendium-documents';
export * from './compendium-directory';
export * from './compendium-reference';
export * from './compendium-migration';
export * from './compendium-folder-export';
export * from './compendium-import';
export * from './compendium-import-content';
export * from './scene-calibration';
export * from './scene-frame';
export * from './scene-resize';
export * from './scene-resize-review';
export * from './scene-measurement';
export * from './dnd-measurement';
export * from './scene-archive-update';
export * from './movement-path';
export * from './environment-decision';
export * from './scene-cover';
export * from './region-coverage';
export * from './player-templates';
export * from './world-assets';
export * from './rule-variant';
export * from './encounter';
export * from './combat-rollback';
export * from './resource-visual';
export * from './combat-journal';
export * from './conversation-channels';
export * from './token-motion';
export * from './manual-senses';
export * from './sense-markers';
export * from './dnd-perception';
export * from './adventure-events';
export * from './adventure-map';
export * from './dnd-magic';
export * from './story-progress';
export * from './unit-inspection';
export * from './dnd-magic-fields';
export * from './lancer-scene';
export * from './story-stage';
export * from './terra-setting';
export * from './utopia';
export * from './world-atlas';
export * from './heartsea';
export * from './character-portraits';
export * from './aaf-build';
export * from './scene-elevation';
export * from './aaf-flow';
```

## PlayerIdentity

导出接口 · 源码第 29 行。

```ts
export interface PlayerIdentity {
    nickname: string;
    deviceCode: string;
    token: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `nickname` | 否 | `string` | 昵称（可重复展示，唯一键为 playerId） |
| `deviceCode` | 否 | `string` | 设备码（本地生成的稳定标识，用于找回身份） |
| `token` | 否 | `string` | 服务器签发（轻量 token，非严格 JWT） |

## PlayerInfo

导出接口 · 源码第 38 行。

```ts
export interface PlayerInfo {
    playerId: string;
    nickname: string;
    onlineAt: number;
    worldId: string | null;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `playerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `nickname` | 否 | `string` | 见结构定义及所属功能文档 |
| `onlineAt` | 否 | `number` | 上线时间（服务器时间戳 ms） |
| `worldId` | 否 | `string &#124; null` | 当前所在世界（无 → null） |

## WorldSummary

导出接口 · 源码第 52 行。

```ts
export interface WorldSummary {
    ruleVariant?: import('./rule-variant').RuleVariant;
    systemId?: import('./systems').GameSystemId;
    systemVersion?: string;
    worldId: string;
    name: string;
    gmNickname: string;
    gmPlayerId: string;
    assetVersion: number;
    playerCount: number;
    createdAt: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `ruleVariant` | 是 | `import('./rule-variant').RuleVariant` | Theme variants remain distinct even when they share a base rules engine. |
| `systemId` | 是 | `import('./systems').GameSystemId` | Absent only in legacy AAF worlds. |
| `systemVersion` | 是 | `string` | 见结构定义及所属功能文档 |
| `worldId` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `gmNickname` | 否 | `string` | 见结构定义及所属功能文档 |
| `gmPlayerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `assetVersion` | 否 | `number` | 规则数据包版本（资源同步用，见 M6） |
| `playerCount` | 否 | `number` | 见结构定义及所属功能文档 |
| `createdAt` | 否 | `number` | 见结构定义及所属功能文档 |

## NetMessageKind

导出接口 · 源码第 70 行。

```ts
export type NetMessageKind = "event.world" | "meta.heartbeat" | "meta.invite" | "meta.world-deleted" | "intent.action" | "event.sync" | "event.log" | "event.session" | "event.state" | "event.battle" | "event.receipt";
```

## NetMessage

导出接口 · 源码第 86 行。

```ts
export interface NetMessage<T = unknown> {
    kind: NetMessageKind;
    from: string;
    seq?: number;
    payload: T;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `NetMessageKind` | 见结构定义及所属功能文档 |
| `from` | 否 | `string` | 发送者 playerId |
| `seq` | 是 | `number` | 序号（GM 端事件日志单调递增，断线重连恢复用） |
| `payload` | 否 | `T` | 见结构定义及所属功能文档 |

## SignalKind

导出接口 · 源码第 97 行。

```ts
export type SignalKind = "offer" | "answer" | "ice" | "reconnect";
```

## SignalMessage

导出接口 · 源码第 99 行。

```ts
export interface SignalMessage {
    t: "signal" | "members" | "hello";
    from: string;
    to?: string;
    worldId: string;
    payload?: {
        kind: SignalKind;
        payload?: unknown;
    } | string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `t` | 否 | `"signal" &#124; "members" &#124; "hello"` | 见结构定义及所属功能文档 |
| `from` | 否 | `string` | 发送者 playerId |
| `to` | 是 | `string` | 目标 playerId（signal 时必填；members 时忽略） |
| `worldId` | 否 | `string` | 见结构定义及所属功能文档 |
| `payload` | 是 | `{ kind: SignalKind; payload?: unknown } &#124; string[]` | signal 载荷：{ kind, payload }（原始 SDP/ICE 由端侧序列化；reconnect 无载荷）；members 载荷：playerId[] |
| `payload.分支1.kind` | 否 | `SignalKind` | 见结构定义及所属功能文档 |
| `payload.分支1.payload` | 是 | `unknown` | 见结构定义及所属功能文档 |

## HeartbeatPayload

导出接口 · 源码第 113 行。

meta.heartbeat 载荷：玩家断档起点

```ts
export interface HeartbeatPayload {
    lastSeq: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `lastSeq` | 否 | `number` | 见结构定义及所属功能文档 |

## SyncEventsPayload

导出接口 · 源码第 118 行。

event.sync 载荷：GM 事件日志回放

```ts
export interface SyncEventsPayload {
    events: NetMessage[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `events` | 否 | `NetMessage[]` | 见结构定义及所属功能文档 |

## SessionStatePayload

导出接口 · 源码第 125 行。

event.session 载荷：GM 权威的 token↔玩家绑定表 + 会话参与者

```ts
export interface SessionStatePayload {
    bindings: Record<string, string>;
    members: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `bindings` | 否 | `Record<string, string>` | 见结构定义及所属功能文档 |
| `members` | 否 | `string[]` | 见结构定义及所属功能文档 |

## CombatStatePayload

导出接口 · 源码第 131 行。

event.state 载荷：GM 权威战斗快照（玩家端只读渲染/意图预览）

```ts
export interface CombatStatePayload {
    reactionWindow?: import('./aaf-flow').AafReactionWindow;
    turnOrder?: string[];
    round: number;
    activeId: string;
    moveLeft: number;
    movement?: import('./aaf-movement').AafMovementGrant;
    combatants: Array<{
        id: string;
        name: string;
        faction: "pc" | "npc";
        x: number;
        y: number;
        z?: number;
        hp: number;
        maxHp: number;
        ac: number;
        alive: boolean;
        burnStacks: number;
        weaponName?: string;
        offhandName?: string;
        offhandReady?: boolean;
        initiative?: number;
        injured?: boolean;
        actions?: {
            standard: number;
            move: number;
            quick: number;
            reaction: number;
        };
        specialName?: string;
        specialMp?: number;
        mp?: number;
        mpMax?: number;
        actorId?: string;
        quota?: {
            standard: boolean;
            move: boolean;
            quick: boolean;
            reaction: boolean;
        };
    }>;
    eventsTail: Array<{
        kind: string;
        text: string;
        eventId?: number;
        sourceId?: string;
        targetId?: string;
        damage?: number;
        dice?: {
            d20: number[];
            bonusFaces: number[];
            penaltyFaces: number[];
            flat: number;
            total: number;
            nat20: boolean;
            nat1: boolean;
        };
    }>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `reactionWindow` | 是 | `import('./aaf-flow').AafReactionWindow` | 见结构定义及所属功能文档 |
| `turnOrder` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `round` | 否 | `number` | 见结构定义及所属功能文档 |
| `activeId` | 否 | `string` | 见结构定义及所属功能文档 |
| `moveLeft` | 否 | `number` | 见结构定义及所属功能文档 |
| `movement` | 是 | `import('./aaf-movement').AafMovementGrant` | 见结构定义及所属功能文档 |
| `combatants` | 否 | `Array<{     id: string; name: string; faction: "pc" &#124; "npc";     x: number; y: number; z?:number;hp: number; maxHp: number; ac: number; alive: boolean; burnStacks: number;     weaponName?: string;     offhandName?: string;     offhandReady?: boolean;     initiative?: number;     injured?:boolean;     actions?:{standard:number;move:number;quick:number;reaction:number};     specialName?: string;     specialMp?: number;     mp?: number;     mpMax?: number;     actorId?: string;     quota?: { standard: boolean; move: boolean; quick: boolean; reaction: boolean };   }>` | 见结构定义及所属功能文档 |
| `eventsTail` | 否 | `Array<{ kind: string; text: string; eventId?: number; sourceId?: string; targetId?: string; damage?: number;     dice?: { d20: number[]; bonusFaces: number[]; penaltyFaces: number[]; flat: number; total: number; nat20: boolean; nat1: boolean } }>` | 见结构定义及所属功能文档 |

## TransferWorldRequest

导出接口 · 源码第 158 行。

```ts
export interface TransferWorldRequest {
    toPlayerId: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `toPlayerId` | 否 | `string` | 见结构定义及所属功能文档 |

## RegisterRequest

导出接口 · 源码第 164 行。

```ts
export interface RegisterRequest {
    nickname: string;
    deviceCode: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `nickname` | 否 | `string` | 见结构定义及所属功能文档 |
| `deviceCode` | 否 | `string` | 见结构定义及所属功能文档 |

## RegisterResponse

导出接口 · 源码第 169 行。

```ts
export interface RegisterResponse {
    playerId: string;
    token: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `playerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `token` | 否 | `string` | 见结构定义及所属功能文档 |

## CreateWorldRequest

导出接口 · 源码第 174 行。

```ts
export interface CreateWorldRequest {
    name: string;
    systemId?: import('./systems').GameSystemId;
    ruleVariant?: import('./rule-variant').RuleVariant;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `systemId` | 是 | `import('./systems').GameSystemId` | 见结构定义及所属功能文档 |
| `ruleVariant` | 是 | `import('./rule-variant').RuleVariant` | 见结构定义及所属功能文档 |

## CreateWorldResponse

导出接口 · 源码第 180 行。

```ts
export interface CreateWorldResponse {
    world: WorldSummary;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldSummary` | 见结构定义及所属功能文档 |

## InviteResponse

导出接口 · 源码第 184 行。

```ts
export interface InviteResponse {
    inviteCode: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `inviteCode` | 否 | `string` | 邀请码（5 位；对方在大厅输入加入） |

## WorldSnapshot

导出接口 · 源码第 190 行。

M5.1 世界快照（GM 备份最新一份；内容=GM 端权威状态，schema 随 M5.2 世界会话定）

```ts
export interface WorldSnapshot {
    version: number;
    at: number;
    state: unknown;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `number` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |
| `state` | 否 | `unknown` | 见结构定义及所属功能文档 |

## AssetFileMeta

导出接口 · 源码第 199 行。

资源包=JSON 文件集合（规则数据/怪物图鉴/物品表等的引擎数据）

```ts
export interface AssetFileMeta {
    path: string;
    hash: string;
    size: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `path` | 否 | `string` | 见结构定义及所属功能文档 |
| `hash` | 否 | `string` | sha256(规范化 JSON) hex |
| `size` | 否 | `number` | 见结构定义及所属功能文档 |

## AssetManifest

导出接口 · 源码第 206 行。

```ts
export interface AssetManifest {
    version: number;
    files: AssetFileMeta[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `number` | 资源包版本（GM 每次上传 +1，与 WorldSummary.assetVersion 同步） |
| `files` | 否 | `AssetFileMeta[]` | 见结构定义及所属功能文档 |

## AssetPayload

导出接口 · 源码第 212 行。

```ts
export interface AssetPayload {
    path: string;
    hash: string;
    data: unknown;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `path` | 否 | `string` | 见结构定义及所属功能文档 |
| `hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `data` | 否 | `unknown` | 见结构定义及所属功能文档 |

## UploadAssetsRequest

导出接口 · 源码第 219 行。

GM 上传资源包请求（files: path → 数据）

```ts
export interface UploadAssetsRequest {
    files: Record<string, unknown>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `files` | 否 | `Record<string, unknown>` | 见结构定义及所属功能文档 |

## canonicalJson

导出接口 · 源码第 227 行。

canonical JSON：键排序的稳定序列化（服务器/客户端哈希一致的前提）。
作用于 JSON-serializable 值；undefined/函数会按 JSON 语义丢弃。

```ts
export function canonicalJson(value: unknown): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
