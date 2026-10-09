# game/packages/game-core/src/types.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { SceneMap } from "@aelzerant/contracts";
import type { DiceLog } from "@aelzerant/rules-engine";
```
</details>

## WeaponProfile

导出接口 · 源码第 4 行。

```ts
export interface WeaponProfile {
    name: string;
    damageDice: string;
    attrFlat?: boolean;
    rangeFeet?: number;
    attackAttribute?: 'str' | 'dex';
    proficiency?: number;
    attackDisadvantage?: boolean;
    special?: {
        name: string;
        dice: string;
        mp: number;
        rangeFeet?: number;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `damageDice` | 否 | `string` | 见结构定义及所属功能文档 |
| `attrFlat` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `rangeFeet` | 是 | `number` | 见结构定义及所属功能文档 |
| `attackAttribute` | 是 | `'str'&#124;'dex'` | 见结构定义及所属功能文档 |
| `proficiency` | 是 | `number` | 见结构定义及所属功能文档 |
| `attackDisadvantage` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `special` | 是 | `{ name: string; dice: string; mp: number; rangeFeet?: number }` | 见结构定义及所属功能文档 |
| `special.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `special.dice` | 否 | `string` | 见结构定义及所属功能文档 |
| `special.mp` | 否 | `number` | 见结构定义及所属功能文档 |
| `special.rangeFeet` | 是 | `number` | 见结构定义及所属功能文档 |

## CombatantInput

导出接口 · 源码第 14 行。

```ts
export interface CombatantInput {
    aafRules?: import('@aelzerant/contracts').AafRuleState;
    id: string;
    name: string;
    faction: "pc" | "npc";
    x: number;
    y: number;
    z?: number;
    speed: number;
    movementSpeeds?: import('@aelzerant/contracts').AafMovementSpeeds;
    hp: number;
    maxHp: number;
    ac: number;
    attrs: {
        str: number;
        dex: number;
        con?: number;
        int?: number;
        wis?: number;
        cha?: number;
    };
    weapon?: WeaponProfile;
    offhandWeapon?: WeaponProfile;
    mpMax?: number;
    mp?: number;
    burnStacks?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `aafRules` | 是 | `import('@aelzerant/contracts').AafRuleState` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `faction` | 否 | `"pc" &#124; "npc"` | 见结构定义及所属功能文档 |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 是 | `number` | 见结构定义及所属功能文档 |
| `speed` | 否 | `number` | 见结构定义及所属功能文档 |
| `movementSpeeds` | 是 | `import('@aelzerant/contracts').AafMovementSpeeds` | 见结构定义及所属功能文档 |
| `hp` | 否 | `number` | 见结构定义及所属功能文档 |
| `maxHp` | 否 | `number` | 见结构定义及所属功能文档 |
| `ac` | 否 | `number` | 见结构定义及所属功能文档 |
| `attrs` | 否 | `{ str: number; dex: number; con?: number; int?: number; wis?: number; cha?: number }` | 见结构定义及所属功能文档 |
| `attrs.str` | 否 | `number` | 见结构定义及所属功能文档 |
| `attrs.dex` | 否 | `number` | 见结构定义及所属功能文档 |
| `attrs.con` | 是 | `number` | 见结构定义及所属功能文档 |
| `attrs.int` | 是 | `number` | 见结构定义及所属功能文档 |
| `attrs.wis` | 是 | `number` | 见结构定义及所属功能文档 |
| `attrs.cha` | 是 | `number` | 见结构定义及所属功能文档 |
| `weapon` | 是 | `WeaponProfile` | 见结构定义及所属功能文档 |
| `offhandWeapon` | 是 | `WeaponProfile` | 见结构定义及所属功能文档 |
| `mpMax` | 是 | `number` | 见结构定义及所属功能文档 |
| `mp` | 是 | `number` | 见结构定义及所属功能文档 |
| `burnStacks` | 是 | `number` | 见结构定义及所属功能文档 |

## Combatant

导出接口 · 源码第 34 行。

```ts
export interface Combatant extends CombatantInput {
    mp: number;
    burnStacks: number;
    alive: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `mp` | 否 | `number` | 见结构定义及所属功能文档 |
| `burnStacks` | 否 | `number` | 见结构定义及所属功能文档 |
| `alive` | 否 | `boolean` | 见结构定义及所属功能文档 |

## CombatIntent

导出接口 · 源码第 39 行。

```ts
export type CombatIntent = {
    kind: 'aaf';
    targetId: string;
    action: import('./aaf/actions').AafAction;
} | {
    kind: "move";
    targetId: string;
    x: number;
    y: number;
    z?: number;
    mode?: import('@aelzerant/contracts').AafSpeedMode;
} | {
    kind: "attack";
    sourceId: string;
    targetId: string;
    mode: "normal" | "special" | "offhand";
} | {
    kind: "end-turn";
    targetId: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.kind` | 否 | `'aaf'` | 见结构定义及所属功能文档 |
| `分支1.targetId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.action` | 否 | `import('./aaf/actions').AafAction` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `"move"` | 见结构定义及所属功能文档 |
| `分支2.targetId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.z` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支2.mode` | 是 | `import('@aelzerant/contracts').AafSpeedMode` | 见结构定义及所属功能文档 |
| `分支3.kind` | 否 | `"attack"` | 见结构定义及所属功能文档 |
| `分支3.sourceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.targetId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.mode` | 否 | `"normal" &#124; "special" &#124; "offhand"` | 见结构定义及所属功能文档 |
| `分支4.kind` | 否 | `"end-turn"` | 见结构定义及所属功能文档 |
| `分支4.targetId` | 否 | `string` | 见结构定义及所属功能文档 |

## CombatEvent

导出接口 · 源码第 44 行。

```ts
export interface CombatEvent {
    kind: "init" | "turn-start" | "turn-end" | "move" | "attack" | "damage" | "dot" | "down" | "invalid" | "rule";
    text: string;
    dice?: DiceLog;
    damage?: number;
    sourceId?: string;
    targetId?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `"init" &#124; "turn-start" &#124; "turn-end" &#124; "move" &#124; "attack" &#124; "damage" &#124; "dot" &#124; "down" &#124; "invalid" &#124; "rule"` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `dice` | 是 | `DiceLog` | 见结构定义及所属功能文档 |
| `damage` | 是 | `number` | 见结构定义及所属功能文档 |
| `sourceId` | 是 | `string` | 见结构定义及所属功能文档 |
| `targetId` | 是 | `string` | 见结构定义及所属功能文档 |

## ActionQuota

导出接口 · 源码第 52 行。

```ts
export interface ActionQuota {
    standard: boolean;
    quick: boolean;
    move: boolean;
    reaction: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `standard` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `quick` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `move` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `reaction` | 否 | `boolean` | 见结构定义及所属功能文档 |

## CombatState

导出接口 · 源码第 53 行。

```ts
export interface CombatState {
    aafFlow?: import('@aelzerant/contracts').AafFlowFrame[];
    schemaVersion: 1;
    seed: number;
    rngState: number;
    map: SceneMap;
    turnOrder: string[];
    initiative?: Record<string, number>;
    turnIndex: number;
    round: number;
    activeId: string;
    combatants: Record<string, Combatant>;
    quotas: Record<string, ActionQuota>;
    moveLeft: number;
    movement?: import('@aelzerant/contracts').AafMovementGrant;
    movedThisTurn: boolean;
    offhandReady?: boolean;
    status: "active" | "finished";
    events: CombatEvent[];
    eventOffset?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `aafFlow` | 是 | `import('@aelzerant/contracts').AafFlowFrame[]` | 见结构定义及所属功能文档 |
| `schemaVersion` | 否 | `1` | 见结构定义及所属功能文档 |
| `seed` | 否 | `number` | 见结构定义及所属功能文档 |
| `rngState` | 否 | `number` | 见结构定义及所属功能文档 |
| `map` | 否 | `SceneMap` | 见结构定义及所属功能文档 |
| `turnOrder` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `initiative` | 是 | `Record<string, number>` | 见结构定义及所属功能文档 |
| `turnIndex` | 否 | `number` | 见结构定义及所属功能文档 |
| `round` | 否 | `number` | 见结构定义及所属功能文档 |
| `activeId` | 否 | `string` | 见结构定义及所属功能文档 |
| `combatants` | 否 | `Record<string, Combatant>` | 见结构定义及所属功能文档 |
| `quotas` | 否 | `Record<string, ActionQuota>` | 见结构定义及所属功能文档 |
| `moveLeft` | 否 | `number` | 见结构定义及所属功能文档 |
| `movement` | 是 | `import('@aelzerant/contracts').AafMovementGrant` | 见结构定义及所属功能文档 |
| `movedThisTurn` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `offhandReady` | 是 | `boolean` | Current actor has made a normal attack with a dual-wield loadout this turn. |
| `status` | 否 | `"active" &#124; "finished"` | 见结构定义及所属功能文档 |
| `events` | 否 | `CombatEvent[]` | 见结构定义及所属功能文档 |
| `eventOffset` | 是 | `number` | 见结构定义及所属功能文档 |
