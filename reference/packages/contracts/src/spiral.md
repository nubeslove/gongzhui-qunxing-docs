# game/packages/contracts/src/spiral.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseSpiralJourney,type SpiralJourney} from './spiral-exploration';
import {isId,isInteger,isRecord,isText} from './validation';
import {AAF_DAMAGE_TYPES,type AafDamageType} from './aaf-rules';
import {parseRuenProgress,type RuenProgress} from './spiral-ruen';
```
</details>

## SPIRAL_VERSION

导出接口 · 源码第 6 行。

```ts
export const SPIRAL_VERSION = 'spiral-foundation-1' as const;
```

## SpiralBiome

导出接口 · 源码第 16 行。

```ts
export type SpiralBiome = keyof typeof SPIRAL_BIOMES;
```

## SpiralSettings

导出接口 · 源码第 17 行。

```ts
export interface SpiralSettings {
    difficulty: keyof typeof SPIRAL_DIFFICULTIES;
    startLevel: number;
    scenario?: 'deep-spiral' | 'ruen';
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `difficulty` | 否 | `keyof typeof SPIRAL_DIFFICULTIES` | 见结构定义及所属功能文档 |
| `startLevel` | 否 | `number` | 见结构定义及所属功能文档 |
| `scenario` | 是 | `'deep-spiral'&#124;'ruen'` | 见结构定义及所属功能文档 |

## parseSpiralSettings

导出接口 · 源码第 18 行。

```ts
export function parseSpiralSettings(value: unknown): SpiralSettings;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## SpiralClass

导出接口 · 源码第 23 行。

```ts
export type SpiralClass = 'fighter' | 'rogue' | 'mage';
```

## SpiralPhase

导出接口 · 源码第 24 行。

```ts
export type SpiralPhase = 'lobby' | 'overworld' | 'route' | 'combat' | 'reward' | 'rest' | 'event' | 'defeat' | 'complete';
```

## SpiralRoomKind

导出接口 · 源码第 25 行。

```ts
export type SpiralRoomKind = 'entry' | 'battle' | 'elite' | 'rest' | 'treasure' | 'boss' | 'exit' | 'event' | 'secret' | 'unseen';
```

## SpiralRoom

导出接口 · 源码第 26 行。

```ts
export interface SpiralRoom {
    id: string;
    kind: SpiralRoomKind;
    name: string;
    column: number;
    row: number;
    links: string[];
    cleared: boolean;
    revealed: boolean;
    hidden?: boolean;
    prefab?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `SpiralRoomKind` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `column` | 否 | `number` | 见结构定义及所属功能文档 |
| `row` | 否 | `number` | 见结构定义及所属功能文档 |
| `links` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `cleared` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `revealed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `hidden` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `prefab` | 是 | `string` | 见结构定义及所属功能文档 |

## SpiralMember

导出接口 · 源码第 27 行。

```ts
export interface SpiralMember {
    playerId: string;
    actorId: string;
    name: string;
    classId: SpiralClass;
    kitId: string;
    ready: boolean;
    rewards: string[];
    chosenReward?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `playerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `classId` | 否 | `SpiralClass` | 见结构定义及所属功能文档 |
| `kitId` | 否 | `string` | 见结构定义及所属功能文档 |
| `ready` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `rewards` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `chosenReward` | 是 | `string` | 见结构定义及所属功能文档 |

## SpiralBrain

导出接口 · 源码第 28 行。

```ts
export type SpiralBrain = 'avenger' | 'hunter' | 'artillery' | 'warden' | 'mender' | 'boss';
```

## SpiralEnemy

导出接口 · 源码第 29 行。

```ts
export interface SpiralEnemy {
    actorId: string;
    brain: SpiralBrain;
    lastAttacker?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `brain` | 否 | `SpiralBrain` | 见结构定义及所属功能文档 |
| `lastAttacker` | 是 | `string` | 见结构定义及所属功能文档 |

## SpiralPoint

导出接口 · 源码第 30 行。

```ts
export interface SpiralPoint {
    x: number;
    y: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |

## SpiralThreat

导出接口 · 源码第 31 行。

```ts
export interface SpiralThreat {
    id: string;
    sourceId: string;
    label: string;
    kind: 'attack' | 'area' | 'guard' | 'heal' | 'move';
    policy: 'last-attacker' | 'out-of-range' | 'fixed' | 'support';
    targetId?: string;
    origin: SpiralPoint;
    cells: SpiralPoint[];
    path: SpiralPoint[];
    amount: number;
    order: number;
    round: number;
    revision: number;
    locked: boolean;
    reason: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `sourceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'attack'&#124;'area'&#124;'guard'&#124;'heal'&#124;'move'` | 见结构定义及所属功能文档 |
| `policy` | 否 | `'last-attacker'&#124;'out-of-range'&#124;'fixed'&#124;'support'` | 见结构定义及所属功能文档 |
| `targetId` | 是 | `string` | 见结构定义及所属功能文档 |
| `origin` | 否 | `SpiralPoint` | 见结构定义及所属功能文档 |
| `cells` | 否 | `SpiralPoint[]` | 见结构定义及所属功能文档 |
| `path` | 否 | `SpiralPoint[]` | 见结构定义及所属功能文档 |
| `amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `order` | 否 | `number` | 见结构定义及所属功能文档 |
| `round` | 否 | `number` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `locked` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `reason` | 否 | `string` | 见结构定义及所属功能文档 |

## SpiralHazard

导出接口 · 源码第 37 行。

```ts
export interface SpiralHazard {
    id: string;
    name: string;
    cells: SpiralPoint[];
    period: number;
    nextRound: number;
    timing: 'enemy-start' | 'enemy-end';
    amount: number;
    hitsEnemies: boolean;
    lastFiredRound: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `cells` | 否 | `SpiralPoint[]` | 见结构定义及所属功能文档 |
| `period` | 否 | `number` | 见结构定义及所属功能文档 |
| `nextRound` | 否 | `number` | 见结构定义及所属功能文档 |
| `timing` | 否 | `'enemy-start'&#124;'enemy-end'` | 见结构定义及所属功能文档 |
| `amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `hitsEnemies` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `lastFiredRound` | 否 | `number` | 见结构定义及所属功能文档 |

## SpiralPose

导出接口 · 源码第 41 行。

```ts
export interface SpiralPose {
    id: string;
    x: number;
    y: number;
    hp: number;
    mp: number;
    focus: number;
    shield: number;
    alive: boolean;
    actions?: {
        standard: number;
        move: number;
        quick: number;
        reaction: number;
    };
    movementLeft?: number;
    upkeep?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `hp` | 否 | `number` | 见结构定义及所属功能文档 |
| `mp` | 否 | `number` | 见结构定义及所属功能文档 |
| `focus` | 否 | `number` | 见结构定义及所属功能文档 |
| `shield` | 否 | `number` | 见结构定义及所属功能文档 |
| `alive` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `actions` | 是 | `{standard:number;move:number;quick:number;reaction:number}` | 见结构定义及所属功能文档 |
| `actions.standard` | 否 | `number` | 见结构定义及所属功能文档 |
| `actions.move` | 否 | `number` | 见结构定义及所属功能文档 |
| `actions.quick` | 否 | `number` | 见结构定义及所属功能文档 |
| `actions.reaction` | 否 | `number` | 见结构定义及所属功能文档 |
| `movementLeft` | 是 | `number` | 见结构定义及所属功能文档 |
| `upkeep` | 是 | `number` | 见结构定义及所属功能文档 |

## SpiralFrame

导出接口 · 源码第 42 行。

```ts
export interface SpiralFrame {
    kind: 'move' | 'attack' | 'area' | 'heal' | 'guard' | 'hazard' | 'status';
    label: string;
    sourceId?: string;
    targetIds: string[];
    cells: SpiralPoint[];
    durationMs: number;
    poses: SpiralPose[];
    damageType?: AafDamageType;
    melee?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'move'&#124;'attack'&#124;'area'&#124;'heal'&#124;'guard'&#124;'hazard'&#124;'status'` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `sourceId` | 是 | `string` | 见结构定义及所属功能文档 |
| `targetIds` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `cells` | 否 | `SpiralPoint[]` | 见结构定义及所属功能文档 |
| `durationMs` | 否 | `number` | 见结构定义及所属功能文档 |
| `poses` | 否 | `SpiralPose[]` | 见结构定义及所属功能文档 |
| `damageType` | 是 | `AafDamageType` | 见结构定义及所属功能文档 |
| `melee` | 是 | `boolean` | 见结构定义及所属功能文档 |

## SpiralPresentation

导出接口 · 源码第 46 行。

```ts
export type SpiralPresentation = {
    id: number;
    acknowledged: string[];
} & ({
    kind: 'battle';
    round: number;
    enemyPhase: boolean;
    before: SpiralPose[];
    frames: SpiralFrame[];
    threats: SpiralThreat[];
} | {
    kind: 'route';
    candidates: Array<{
        playerId: string;
        roomId: string;
    }>;
    winnerPlayerId: string;
    selectedRoomId: string;
});
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `number` | 见结构定义及所属功能文档 |
| `acknowledged` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支1.kind` | 否 | `'battle'` | 见结构定义及所属功能文档 |
| `分支1.round` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支1.enemyPhase` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支1.before` | 否 | `SpiralPose[]` | 见结构定义及所属功能文档 |
| `分支1.frames` | 否 | `SpiralFrame[]` | 见结构定义及所属功能文档 |
| `分支1.threats` | 否 | `SpiralThreat[]` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'route'` | 见结构定义及所属功能文档 |
| `分支2.candidates` | 否 | `Array<{playerId:string;roomId:string}>` | 见结构定义及所属功能文档 |
| `分支2.winnerPlayerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.selectedRoomId` | 否 | `string` | 见结构定义及所属功能文档 |

## SpiralData

导出接口 · 源码第 50 行。

```ts
export interface SpiralData {
    ruen?: RuenProgress;
    journey?: SpiralJourney;
    presentationSequence: number;
    presentation?: SpiralPresentation;
    biome: SpiralBiome;
    themeOrder: SpiralBiome[];
    searched: string[];
    quests: Array<{
        id: string;
        name: string;
        progress: number;
        goal: number;
        done: boolean;
    }>;
    version: typeof SPIRAL_VERSION;
    settings: SpiralSettings;
    phase: SpiralPhase;
    floor: number;
    members: SpiralMember[];
    rooms: SpiralRoom[];
    roomId: string | null;
    votes: Record<string, string>;
    enemies: SpiralEnemy[];
    threats: SpiralThreat[];
    hazards: SpiralHazard[];
    turnPhase: 'party' | 'enemy';
    readyPlayers: string[];
    executionIndex: number;
    threatRevision: number;
    log: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `ruen` | 是 | `RuenProgress` | 见结构定义及所属功能文档 |
| `journey` | 是 | `SpiralJourney` | 见结构定义及所属功能文档 |
| `presentationSequence` | 否 | `number` | 见结构定义及所属功能文档 |
| `presentation` | 是 | `SpiralPresentation` | 见结构定义及所属功能文档 |
| `biome` | 否 | `SpiralBiome` | 见结构定义及所属功能文档 |
| `themeOrder` | 否 | `SpiralBiome[]` | 见结构定义及所属功能文档 |
| `searched` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `quests` | 否 | `Array<{id:string;name:string;progress:number;goal:number;done:boolean}>` | 见结构定义及所属功能文档 |
| `version` | 否 | `typeof SPIRAL_VERSION` | 见结构定义及所属功能文档 |
| `settings` | 否 | `SpiralSettings` | 见结构定义及所属功能文档 |
| `phase` | 否 | `SpiralPhase` | 见结构定义及所属功能文档 |
| `floor` | 否 | `number` | 见结构定义及所属功能文档 |
| `members` | 否 | `SpiralMember[]` | 见结构定义及所属功能文档 |
| `rooms` | 否 | `SpiralRoom[]` | 见结构定义及所属功能文档 |
| `roomId` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `votes` | 否 | `Record<string,string>` | 见结构定义及所属功能文档 |
| `enemies` | 否 | `SpiralEnemy[]` | 见结构定义及所属功能文档 |
| `threats` | 否 | `SpiralThreat[]` | 见结构定义及所属功能文档 |
| `hazards` | 否 | `SpiralHazard[]` | 见结构定义及所属功能文档 |
| `turnPhase` | 否 | `'party'&#124;'enemy'` | 见结构定义及所属功能文档 |
| `readyPlayers` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `executionIndex` | 否 | `number` | 见结构定义及所属功能文档 |
| `threatRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `log` | 否 | `string[]` | 见结构定义及所属功能文档 |

## spiralHazardCharge

导出接口 · 源码第 61 行。

```ts
export const spiralHazardCharge: (hazard: SpiralHazard, round: number): number;
```

## spiralHazardOpacity

导出接口 · 源码第 62 行。

```ts
export const spiralHazardOpacity: (hazard: SpiralHazard, round: number): number;
```

## parseSpiralRoom

导出接口 · 源码第 80 行。

```ts
export const parseSpiralRoom: (x: unknown): SpiralRoom;
```

## parseSpiralData

导出接口 · 源码第 81 行。

```ts
export function parseSpiralData(value: unknown): SpiralData;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
