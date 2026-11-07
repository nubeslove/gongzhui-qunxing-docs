# game/packages/contracts/src/lancer-rogue.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {validRogueBattlefield,type RogueBattlefieldRecipe} from './lancer-arena-generation';
```
</details>

## 重新导出的模块

```ts
export * from './lancer-arena-generation';
```

## RogueDanger

导出接口 · 源码第 4 行。

Server-owned arena progression. Offers are generated once, saved and consumed by ID.

```ts
export type RogueDanger = 'normal' | 'elite' | 'strong' | 'boss';
```

## RogueKind

导出接口 · 源码第 5 行。

```ts
export type RogueKind = 'talent' | 'license' | 'mod' | 'weapon' | 'system' | 'frame' | 'challenge';
```

## RogueRarity

导出接口 · 源码第 6 行。

```ts
export type RogueRarity = 'common' | 'refined' | 'rare' | 'legendary';
```

## RoguePhase

导出接口 · 源码第 7 行。

```ts
export type RoguePhase = 'lobby' | 'reward' | 'base' | 'vote' | 'deployment' | 'battle' | 'complete' | 'defeat';
```

## RogueCard

导出接口 · 源码第 8 行。

```ts
export interface RogueCard {
    id: string;
    resource: string;
    kind: RogueKind;
    name: string;
    text: string;
    tags: string[];
    rarity: RogueRarity;
    rank?: number;
    price?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `resource` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `RogueKind` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `tags` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `rarity` | 否 | `RogueRarity` | 见结构定义及所属功能文档 |
| `rank` | 是 | `number` | 见结构定义及所属功能文档 |
| `price` | 是 | `number` | 见结构定义及所属功能文档 |

## RogueRetraining

导出接口 · 源码第 9 行。

```ts
export interface RogueRetraining {
    level: number;
    used: boolean;
    source?: {
        kind: 'talent' | 'license';
        resource: string;
        rank: number;
    };
    offers: RogueCard[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `level` | 否 | `number` | 见结构定义及所属功能文档 |
| `used` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `source` | 是 | `{kind:'talent'&#124;'license';resource:string;rank:number}` | 见结构定义及所属功能文档 |
| `source.kind` | 否 | `'talent'&#124;'license'` | 见结构定义及所属功能文档 |
| `source.resource` | 否 | `string` | 见结构定义及所属功能文档 |
| `source.rank` | 否 | `number` | 见结构定义及所属功能文档 |
| `offers` | 否 | `RogueCard[]` | 见结构定义及所属功能文档 |

## ROGUE_MOUNT_TYPES

导出接口 · 源码第 10 行。

```ts
export const ROGUE_MOUNT_TYPES = ['main', 'heavy', 'auxaux', 'mainaux', 'flex', 'integrated'] as const;
```

## RogueMount

导出接口 · 源码第 11 行。

```ts
export type RogueMount = typeof ROGUE_MOUNT_TYPES[number];
```

## RogueBossChoice

导出接口 · 源码第 12 行。

```ts
export type RogueBossChoice = {
    kind: 'mount';
    mount: RogueMount;
} | {
    kind: 'system' | 'mod';
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.kind` | 否 | `'mount'` | 见结构定义及所属功能文档 |
| `分支1.mount` | 否 | `RogueMount` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'system'&#124;'mod'` | 见结构定义及所属功能文档 |

## RogueBossReward

导出接口 · 源码第 13 行。

```ts
export interface RogueBossReward {
    id: string;
    node: number;
    choice?: RogueBossChoice;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `node` | 否 | `number` | 见结构定义及所属功能文档 |
| `choice` | 是 | `RogueBossChoice` | 见结构定义及所属功能文档 |

## RoguePlayer

导出接口 · 源码第 14 行。

```ts
export interface RoguePlayer {
    retraining?: RogueRetraining;
    bossRewards?: RogueBossReward[];
    id: string;
    actor: string;
    job: string;
    supplies: number;
    ready: boolean;
    points: number;
    talents: Record<string, number>;
    licenses: Record<string, number>;
    inventory: string[];
    frames: string[];
    affinity: Record<string, number>;
    rewardRound: number;
    offers: RogueCard[];
    shop: RogueCard[];
    mods: string[];
    systems: string[];
    weapons: {
        resource: string;
        mount: number;
    }[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `retraining` | 是 | `RogueRetraining` | 见结构定义及所属功能文档 |
| `bossRewards` | 是 | `RogueBossReward[]` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `job` | 否 | `string` | 见结构定义及所属功能文档 |
| `supplies` | 否 | `number` | 见结构定义及所属功能文档 |
| `ready` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `points` | 否 | `number` | 见结构定义及所属功能文档 |
| `talents` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `licenses` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `inventory` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `frames` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `affinity` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `rewardRound` | 否 | `number` | 见结构定义及所属功能文档 |
| `offers` | 否 | `RogueCard[]` | 见结构定义及所属功能文档 |
| `shop` | 否 | `RogueCard[]` | 见结构定义及所属功能文档 |
| `mods` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `systems` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `weapons` | 否 | `{resource:string;mount:number}[]` | 见结构定义及所属功能文档 |
| `weapons.[].resource` | 否 | `string` | 见结构定义及所属功能文档 |
| `weapons.[].mount` | 否 | `number` | 见结构定义及所属功能文档 |

## RogueEncounter

导出接口 · 源码第 15 行。

```ts
export interface RogueEncounter {
    generation?: RogueBattlefieldRecipe;
    id: string;
    map: string;
    name: string;
    mission: string;
    danger: RogueDanger;
    rounds: number;
    reward: number;
    formation?: number;
    legion?: string;
    modifier?: 'fortified' | 'mobile' | 'volatile';
    threat?: number;
    missionVersion?: 2;
    missionKey?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `generation` | 是 | `RogueBattlefieldRecipe` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `map` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `mission` | 否 | `string` | 见结构定义及所属功能文档 |
| `danger` | 否 | `RogueDanger` | 见结构定义及所属功能文档 |
| `rounds` | 否 | `number` | 见结构定义及所属功能文档 |
| `reward` | 否 | `number` | 见结构定义及所属功能文档 |
| `formation` | 是 | `number` | 见结构定义及所属功能文档 |
| `legion` | 是 | `string` | 见结构定义及所属功能文档 |
| `modifier` | 是 | `'fortified'&#124;'mobile'&#124;'volatile'` | 见结构定义及所属功能文档 |
| `threat` | 是 | `number` | 见结构定义及所属功能文档 |
| `missionVersion` | 是 | `2` | 见结构定义及所属功能文档 |
| `missionKey` | 是 | `string` | 见结构定义及所属功能文档 |

## RogueObjectiveStatus

导出接口 · 源码第 16 行。

```ts
export type RogueObjectiveStatus = 'active' | 'completed' | 'failed';
```

## RogueSecondary

导出接口 · 源码第 17 行。

```ts
export interface RogueSecondary {
    id: string;
    label: string;
    kind: 'cache' | 'eliminate' | 'secure' | 'cargo';
    goal: number;
    progress: number;
    status: RogueObjectiveStatus;
    reward: number;
    target?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'cache'&#124;'eliminate'&#124;'secure'&#124;'cargo'` | 见结构定义及所属功能文档 |
| `goal` | 否 | `number` | 见结构定义及所属功能文档 |
| `progress` | 否 | `number` | 见结构定义及所属功能文档 |
| `status` | 否 | `RogueObjectiveStatus` | 见结构定义及所属功能文档 |
| `reward` | 否 | `number` | 见结构定义及所属功能文档 |
| `target` | 是 | `string` | 见结构定义及所属功能文档 |

## RogueChallenge

导出接口 · 源码第 18 行。

```ts
export interface RogueChallenge {
    id: string;
    label: string;
    kind: 'primary-time' | 'battle-time' | 'protect' | 'pacifist';
    deadline?: number;
    target?: string;
    status: RogueObjectiveStatus;
    reward: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'primary-time'&#124;'battle-time'&#124;'protect'&#124;'pacifist'` | 见结构定义及所属功能文档 |
| `deadline` | 是 | `number` | 见结构定义及所属功能文档 |
| `target` | 是 | `string` | 见结构定义及所属功能文档 |
| `status` | 否 | `RogueObjectiveStatus` | 见结构定义及所属功能文档 |
| `reward` | 否 | `number` | 见结构定义及所属功能文档 |

## RogueWithdrawal

导出接口 · 源码第 19 行。

```ts
export interface RogueWithdrawal {
    votes: Record<string, boolean>;
    status: 'open' | 'passed' | 'rejected';
    eligible: string[];
    threshold: number;
    deadline: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `votes` | 否 | `Record<string,boolean>` | 见结构定义及所属功能文档 |
| `status` | 否 | `'open'&#124;'passed'&#124;'rejected'` | 见结构定义及所属功能文档 |
| `eligible` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `threshold` | 否 | `number` | 见结构定义及所属功能文档 |
| `deadline` | 否 | `number` | 见结构定义及所属功能文档 |

## RogueWearSnapshot

导出接口 · 源码第 20 行。

```ts
export interface RogueWearSnapshot {
    repair: number;
    debt: number;
    cp: number;
    limited: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `repair` | 否 | `number` | 见结构定义及所属功能文档 |
| `debt` | 否 | `number` | 见结构定义及所属功能文档 |
| `cp` | 否 | `number` | 见结构定义及所属功能文档 |
| `limited` | 否 | `number` | 见结构定义及所属功能文档 |

## RogueHazard

导出接口 · 源码第 21 行。

```ts
export interface RogueHazard {
    id: string;
    x: number;
    y: number;
    width: number;
    depth: number;
    damage: number;
    type: 'explosive' | 'heat';
    round: number;
    targets?: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `depth` | 否 | `number` | 见结构定义及所属功能文档 |
| `damage` | 否 | `number` | 见结构定义及所属功能文档 |
| `type` | 否 | `'explosive'&#124;'heat'` | 见结构定义及所属功能文档 |
| `round` | 否 | `number` | 见结构定义及所属功能文档 |
| `targets` | 是 | `string[]` | 见结构定义及所属功能文档 |

## RogueScenario

导出接口 · 源码第 23 行。

Resumable mission state. A round and each hazard target are consumed before resolving reactions.

```ts
export interface RogueScenario {
    round: number;
    stage: number;
    score: number;
    enemyScore: number;
    escort: number;
    evacuated: string[];
    carriers: Record<string, string>;
    telegraphs: RogueHazard[];
    pending: RogueHazard[];
    bonus: number;
    alert: string;
    reinforcements: number;
    flags: Record<string, number>;
    main?: {
        status: RogueObjectiveStatus;
        completedRound?: number;
    };
    secondaries?: RogueSecondary[];
    challenges?: RogueChallenge[];
    withdrawal?: RogueWithdrawal;
    wearStart?: Record<string, RogueWearSnapshot>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `round` | 否 | `number` | 见结构定义及所属功能文档 |
| `stage` | 否 | `number` | 见结构定义及所属功能文档 |
| `score` | 否 | `number` | 见结构定义及所属功能文档 |
| `enemyScore` | 否 | `number` | 见结构定义及所属功能文档 |
| `escort` | 否 | `number` | 见结构定义及所属功能文档 |
| `evacuated` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `carriers` | 否 | `Record<string,string>` | 见结构定义及所属功能文档 |
| `telegraphs` | 否 | `RogueHazard[]` | 见结构定义及所属功能文档 |
| `pending` | 否 | `RogueHazard[]` | 见结构定义及所属功能文档 |
| `bonus` | 否 | `number` | 见结构定义及所属功能文档 |
| `alert` | 否 | `string` | 见结构定义及所属功能文档 |
| `reinforcements` | 否 | `number` | 见结构定义及所属功能文档 |
| `flags` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `main` | 是 | `{status:RogueObjectiveStatus;completedRound?:number}` | 见结构定义及所属功能文档 |
| `main.status` | 否 | `RogueObjectiveStatus` | 见结构定义及所属功能文档 |
| `main.completedRound` | 是 | `number` | 见结构定义及所属功能文档 |
| `secondaries` | 是 | `RogueSecondary[]` | 见结构定义及所属功能文档 |
| `challenges` | 是 | `RogueChallenge[]` | 见结构定义及所属功能文档 |
| `withdrawal` | 是 | `RogueWithdrawal` | 见结构定义及所属功能文档 |
| `wearStart` | 是 | `Record<string,RogueWearSnapshot>` | 见结构定义及所属功能文档 |

## RogueRecord

导出接口 · 源码第 24 行。

```ts
export interface RogueRecord {
    node: number;
    name: string;
    danger: RogueDanger;
    won: boolean;
    rounds: number;
    rewards?: {
        base: number;
        secondary: number;
        challenge: number;
    };
    wear?: Record<string, number>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `node` | 否 | `number` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `danger` | 否 | `RogueDanger` | 见结构定义及所属功能文档 |
| `won` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `rounds` | 否 | `number` | 见结构定义及所属功能文档 |
| `rewards` | 是 | `{base:number;secondary:number;challenge:number}` | 见结构定义及所属功能文档 |
| `rewards.base` | 否 | `number` | 见结构定义及所属功能文档 |
| `rewards.secondary` | 否 | `number` | 见结构定义及所属功能文档 |
| `rewards.challenge` | 否 | `number` | 见结构定义及所属功能文档 |
| `wear` | 是 | `Record<string,number>` | 见结构定义及所属功能文档 |

## LancerRogueRun

导出接口 · 源码第 25 行。

```ts
export interface LancerRogueRun {
    pausedAt?: number;
    version: 1;
    id: string;
    phase: RoguePhase;
    start: 0 | 2;
    level: number;
    node: number;
    difficulty: 1 | 2 | 3;
    seed: number;
    players: RoguePlayer[];
    candidates: RogueEncounter[];
    votes: Record<string, string>;
    selected?: RogueEncounter;
    merchant: boolean;
    preflight?: boolean;
    history: RogueRecord[];
    objective: number;
    lastRound: number;
    spawned: number;
    scenario?: RogueScenario;
    challenge?: 'strong' | 'boss';
    lastError?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `pausedAt` | 是 | `number` | 见结构定义及所属功能文档 |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `phase` | 否 | `RoguePhase` | 见结构定义及所属功能文档 |
| `start` | 否 | `0&#124;2` | 见结构定义及所属功能文档 |
| `level` | 否 | `number` | 见结构定义及所属功能文档 |
| `node` | 否 | `number` | 见结构定义及所属功能文档 |
| `difficulty` | 否 | `1&#124;2&#124;3` | 见结构定义及所属功能文档 |
| `seed` | 否 | `number` | 见结构定义及所属功能文档 |
| `players` | 否 | `RoguePlayer[]` | 见结构定义及所属功能文档 |
| `candidates` | 否 | `RogueEncounter[]` | 见结构定义及所属功能文档 |
| `votes` | 否 | `Record<string,string>` | 见结构定义及所属功能文档 |
| `selected` | 是 | `RogueEncounter` | 见结构定义及所属功能文档 |
| `merchant` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `preflight` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `history` | 否 | `RogueRecord[]` | 见结构定义及所属功能文档 |
| `objective` | 否 | `number` | 见结构定义及所属功能文档 |
| `lastRound` | 否 | `number` | 见结构定义及所属功能文档 |
| `spawned` | 否 | `number` | 见结构定义及所属功能文档 |
| `scenario` | 是 | `RogueScenario` | 见结构定义及所属功能文档 |
| `challenge` | 是 | `'strong'&#124;'boss'` | 见结构定义及所属功能文档 |
| `lastError` | 是 | `string` | 见结构定义及所属功能文档 |

## RogueCommand

导出接口 · 源码第 26 行。

```ts
export type RogueCommand = {
    op: 'pause';
    paused: boolean;
} | {
    op: 'ability';
    ability: import('./lancer-player-ability').LancerPlayerAbility;
    request: string;
} | {
    op: 'abilityStats';
    source: string;
    bonuses: Record<string, number>;
} | {
    op: 'join';
    name: string;
    callsign: string;
    job: string;
    frame: string;
    portrait?: string;
    license?: string;
} | {
    op: 'portrait' | 'token';
    image: string;
} | {
    op: 'ready';
    ready: boolean;
} | {
    op: 'start';
} | {
    op: 'routes';
} | {
    op: 'depart';
} | {
    op: 'vote';
    encounter: string;
} | {
    op: 'withdraw';
    agree: boolean;
} | {
    op: 'pick';
    card: string;
    round: number;
} | {
    op: 'reward';
    mode: 'convert' | 'refresh' | 'upgrade';
    round: number;
    offers: string[];
    resource?: string;
} | {
    op: 'bossReward';
    reward: string;
    choice: RogueBossChoice;
} | {
    op: 'retrainOffer';
    kind: 'talent' | 'license';
    source: string;
    level: number;
} | {
    op: 'retrainRefresh';
    level: number;
    offers: string[];
} | {
    op: 'retrainConfirm';
    level: number;
    card: string;
    newFrame?: string;
} | {
    op: 'buy';
    card: string;
} | {
    op: 'gift';
    to: string;
    amount: number;
} | {
    op: 'repair';
    service: 'hp' | 'structure' | 'stress' | 'cp' | 'repair' | 'equipment' | 'overcharge';
} | {
    op: 'allocate';
    stat: 'hull' | 'agility' | 'systems' | 'engineering';
} | {
    op: 'allocateStats';
    values: Record<'hull' | 'agility' | 'systems' | 'engineering', number>;
    expected: Record<'hull' | 'agility' | 'systems' | 'engineering', number>;
} | {
    op: 'equip';
    resource: string;
    mount?: number;
    slot?: 0 | 1;
    replace?: number;
} | {
    op: 'unequip';
    kind: 'weapon' | 'system' | 'mod';
    index: number;
} | {
    op: 'print';
    frame: string;
} | {
    op: 'challenge';
    danger: 'strong' | 'boss';
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.op` | 否 | `'pause'` | 见结构定义及所属功能文档 |
| `分支1.paused` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支2.op` | 否 | `'ability'` | 见结构定义及所属功能文档 |
| `分支2.ability` | 否 | `import('./lancer-player-ability').LancerPlayerAbility` | 见结构定义及所属功能文档 |
| `分支2.request` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.op` | 否 | `'abilityStats'` | 见结构定义及所属功能文档 |
| `分支3.source` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.bonuses` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `分支4.op` | 否 | `'join'` | 见结构定义及所属功能文档 |
| `分支4.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.callsign` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.job` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.frame` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.portrait` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支4.license` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支5.op` | 否 | `'portrait'&#124;'token'` | 见结构定义及所属功能文档 |
| `分支5.image` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.op` | 否 | `'ready'` | 见结构定义及所属功能文档 |
| `分支6.ready` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支7.op` | 否 | `'start'` | 见结构定义及所属功能文档 |
| `分支8.op` | 否 | `'routes'` | 见结构定义及所属功能文档 |
| `分支9.op` | 否 | `'depart'` | 见结构定义及所属功能文档 |
| `分支10.op` | 否 | `'vote'` | 见结构定义及所属功能文档 |
| `分支10.encounter` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支11.op` | 否 | `'withdraw'` | 见结构定义及所属功能文档 |
| `分支11.agree` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支12.op` | 否 | `'pick'` | 见结构定义及所属功能文档 |
| `分支12.card` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支12.round` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支13.op` | 否 | `'reward'` | 见结构定义及所属功能文档 |
| `分支13.mode` | 否 | `'convert'&#124;'refresh'&#124;'upgrade'` | 见结构定义及所属功能文档 |
| `分支13.round` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支13.offers` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支13.resource` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支14.op` | 否 | `'bossReward'` | 见结构定义及所属功能文档 |
| `分支14.reward` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支14.choice` | 否 | `RogueBossChoice` | 见结构定义及所属功能文档 |
| `分支15.op` | 否 | `'retrainOffer'` | 见结构定义及所属功能文档 |
| `分支15.kind` | 否 | `'talent'&#124;'license'` | 见结构定义及所属功能文档 |
| `分支15.source` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支15.level` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支16.op` | 否 | `'retrainRefresh'` | 见结构定义及所属功能文档 |
| `分支16.level` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支16.offers` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支17.op` | 否 | `'retrainConfirm'` | 见结构定义及所属功能文档 |
| `分支17.level` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支17.card` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支17.newFrame` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支18.op` | 否 | `'buy'` | 见结构定义及所属功能文档 |
| `分支18.card` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支19.op` | 否 | `'gift'` | 见结构定义及所属功能文档 |
| `分支19.to` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支19.amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支20.op` | 否 | `'repair'` | 见结构定义及所属功能文档 |
| `分支20.service` | 否 | `'hp'&#124;'structure'&#124;'stress'&#124;'cp'&#124;'repair'&#124;'equipment'&#124;'overcharge'` | 见结构定义及所属功能文档 |
| `分支21.op` | 否 | `'allocate'` | 见结构定义及所属功能文档 |
| `分支21.stat` | 否 | `'hull'&#124;'agility'&#124;'systems'&#124;'engineering'` | 见结构定义及所属功能文档 |
| `分支22.op` | 否 | `'allocateStats'` | 见结构定义及所属功能文档 |
| `分支22.values` | 否 | `Record<'hull'&#124;'agility'&#124;'systems'&#124;'engineering',number>` | 见结构定义及所属功能文档 |
| `分支22.expected` | 否 | `Record<'hull'&#124;'agility'&#124;'systems'&#124;'engineering',number>` | 见结构定义及所属功能文档 |
| `分支23.op` | 否 | `'equip'` | 见结构定义及所属功能文档 |
| `分支23.resource` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支23.mount` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支23.slot` | 是 | `0&#124;1` | 见结构定义及所属功能文档 |
| `分支23.replace` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支24.op` | 否 | `'unequip'` | 见结构定义及所属功能文档 |
| `分支24.kind` | 否 | `'weapon'&#124;'system'&#124;'mod'` | 见结构定义及所属功能文档 |
| `分支24.index` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支25.op` | 否 | `'print'` | 见结构定义及所属功能文档 |
| `分支25.frame` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支26.op` | 否 | `'challenge'` | 见结构定义及所属功能文档 |
| `分支26.danger` | 否 | `'strong'&#124;'boss'` | 见结构定义及所属功能文档 |

## parseLancerRogue

导出接口 · 源码第 52 行。

```ts
export function parseLancerRogue(raw: unknown): LancerRogueRun;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## projectLancerRogue

导出接口 · 源码第 84 行。

```ts
export function projectLancerRogue(run: LancerRogueRun, player?: string): LancerRogueRun;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `run` | 否 | `LancerRogueRun` | — |
| `player` | 是 | `string` | — |
