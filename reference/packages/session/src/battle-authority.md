# game/packages/session/src/battle-authority.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { canonicalJson, isId, isInteger, isRecord, parseSceneMap, type CombatStatePayload, type SceneMap } from "@aelzerant/contracts";
import { applyIntent, isCombatIntent, restoreCombat, saveCombat, setCombatMap, snapshotCombat, type CombatIntent, type CombatState } from "@aelzerant/game-core";
```
</details>

## BattleCommand

导出接口 · 源码第 4 行。

```ts
export interface BattleCommand {
    requestId: string;
    expectedRevision: number;
    action: CombatIntent;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `requestId` | 否 | `string` | 见结构定义及所属功能文档 |
| `expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `action` | 否 | `CombatIntent` | 见结构定义及所属功能文档 |

## CommandReceipt

导出接口 · 源码第 5 行。

```ts
export interface CommandReceipt {
    requestId: string;
    ok: boolean;
    revision: number;
    code: "ok" | "invalid" | "forbidden" | "conflict" | "storage-error";
    message: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `requestId` | 否 | `string` | 见结构定义及所属功能文档 |
| `ok` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `code` | 否 | `"ok" &#124; "invalid" &#124; "forbidden" &#124; "conflict" &#124; "storage-error"` | 见结构定义及所属功能文档 |
| `message` | 否 | `string` | 见结构定义及所属功能文档 |

## BattleSave

导出接口 · 源码第 12 行。

```ts
export interface BattleSave {
    schemaVersion: 1;
    worldId: string;
    hostId: string;
    revision: number;
    combat: CombatState;
    bindings: Record<string, string>;
    receipts: Array<{
        senderId: string;
        fingerprint: string;
        receipt: CommandReceipt;
    }>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `schemaVersion` | 否 | `1` | 见结构定义及所属功能文档 |
| `worldId` | 否 | `string` | 见结构定义及所属功能文档 |
| `hostId` | 否 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `combat` | 否 | `CombatState` | 见结构定义及所属功能文档 |
| `bindings` | 否 | `Record<string, string>` | 见结构定义及所属功能文档 |
| `receipts` | 否 | `Array<{ senderId: string; fingerprint: string; receipt: CommandReceipt }>` | 见结构定义及所属功能文档 |

## BattleView

导出接口 · 源码第 21 行。

```ts
export interface BattleView {
    revision: number;
    snapshot: CombatStatePayload;
    map: SceneMap;
    bindings: Record<string, string>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `snapshot` | 否 | `CombatStatePayload` | 见结构定义及所属功能文档 |
| `map` | 否 | `SceneMap` | 见结构定义及所属功能文档 |
| `bindings` | 否 | `Record<string, string>` | 见结构定义及所属功能文档 |

## BattlePersistence

导出接口 · 源码第 27 行。

```ts
export interface BattlePersistence {
    save(value: BattleSave): void;
}
```

## restoreBattle

导出接口 · 源码第 29 行。

```ts
export function restoreBattle(value: unknown, worldId: string, hostId: string): BattleSave;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
| `worldId` | 否 | `string` | — |
| `hostId` | 否 | `string` | — |

## BattleAuthority

导出接口 · 源码第 46 行。

UI-free single writer: authenticate -> validate -> reduce -> save -> publish.

```ts
export class BattleAuthority {
  constructor(initial: BattleSave, persistence?: BattlePersistence);
  static create(worldId: string, hostId: string, combat: CombatState, persistence?: BattlePersistence): BattleAuthority;
  get revision(): number;
  get hostId(): string;
  exportSave(): BattleSave;
  combat(): CombatState;
  view(): BattleView;
  setMembers(ids: readonly string[]): void;
  subscribe(listener: () => void): () => void;
  dispatch(senderId: string, input: unknown): CommandReceipt;
  setBindings(senderId: string, bindings: Record<string, string>): void;
  setMap(senderId: string, map: SceneMap): void;
}
```
