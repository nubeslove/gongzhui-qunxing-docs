# game/packages/contracts/src/tactical-mission.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject,storyText,storyNumber,storyEnum,storyList} from './story';
```
</details>

## TACTICAL_PLUGIN

导出接口 · 源码第 2 行。

```ts
export const TACTICAL_PLUGIN = 'tactical-missions';
```

## TacticalMode

导出接口 · 源码第 4 行。

```ts
export type TacticalMode = keyof typeof TACTICAL_MODES;
```

## TacticalPoint

导出接口 · 源码第 5 行。

```ts
export interface TacticalPoint {
    x: number;
    y: number;
    z: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 否 | `number` | 见结构定义及所属功能文档 |

## TacticalTeam

导出接口 · 源码第 6 行。

```ts
export interface TacticalTeam {
    id: string;
    name: string;
    color: string;
    side: 'players' | 'hostiles' | 'custom';
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `color` | 否 | `string` | 见结构定义及所属功能文档 |
| `side` | 否 | `'players'&#124;'hostiles'&#124;'custom'` | 见结构定义及所属功能文档 |

## OfficialTacticalRule

导出接口 · 源码第 7 行。

```ts
export interface OfficialTacticalRule {
    moduleId: string;
    encounter: string;
    source: string;
    description: string;
    targets?: string[];
    targetActors?: string[];
    reconRegionId?: string;
    reconRequired?: boolean;
    targetLoss?: 'hostiles' | 'draw';
    evacuationEnd?: 'party';
    npcEvacuation?: 'alone';
    rule: 'control' | 'zone' | 'holdout' | 'eliminate' | 'survive' | 'bomb' | 'destroy' | 'demolition' | 'escape' | 'protect' | 'recon' | 'endure' | 'defeat' | 'eidolon' | 'escort' | 'evacuate' | 'capture' | 'regret' | 'rout' | 'breakpoint' | 'arena' | 'transcendence' | 'gm';
    tie: 'players' | 'hostiles' | 'draw';
    weighted: boolean;
    allPointsBonus: number;
    enemyLimit: number;
    eliminate: boolean;
    ignoreGrunts?: boolean;
    mechsOnly?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `moduleId` | 否 | `string` | 见结构定义及所属功能文档 |
| `encounter` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `targets` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `targetActors` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `reconRegionId` | 是 | `string` | 见结构定义及所属功能文档 |
| `reconRequired` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `targetLoss` | 是 | `'hostiles'&#124;'draw'` | 见结构定义及所属功能文档 |
| `evacuationEnd` | 是 | `'party'` | 见结构定义及所属功能文档 |
| `npcEvacuation` | 是 | `'alone'` | 见结构定义及所属功能文档 |
| `rule` | 否 | `'control'&#124;'zone'&#124;'holdout'&#124;'eliminate'&#124;'survive'&#124;'bomb'&#124;'destroy'&#124;'demolition'&#124;'escape'&#124;'protect'&#124;'recon'&#124;'endure'&#124;'defeat'&#124;'eidolon'&#124;'escort'&#124;'evacuate'&#124;'capture'&#124;'regret'&#124;'rout'&#124;'breakpoint'&#124;'arena'&#124;'transcendence'&#124;'gm'` | 见结构定义及所属功能文档 |
| `tie` | 否 | `'players'&#124;'hostiles'&#124;'draw'` | 见结构定义及所属功能文档 |
| `weighted` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `allPointsBonus` | 否 | `number` | 见结构定义及所属功能文档 |
| `enemyLimit` | 否 | `number` | 见结构定义及所属功能文档 |
| `eliminate` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `ignoreGrunts` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `mechsOnly` | 是 | `boolean` | 见结构定义及所属功能文档 |

## TacticalConfig

导出接口 · 源码第 12 行。

```ts
export interface TacticalConfig {
    official?: OfficialTacticalRule;
    name: string;
    mode: TacticalMode;
    teams: TacticalTeam[];
    target: number;
    roundLimit: number;
    assignments: Record<string, string>;
    eligibility: Record<string, boolean>;
    controlRule: 'majority' | 'exclusive';
    points: {
        id: string;
        name: string;
        regionId: string;
        value: number;
    }[];
    flags: {
        id: string;
        team: string;
        tokenId: string;
        home: TacticalPoint;
        radius: number;
    }[];
    escort: {
        tokenId: string;
        team: string;
        route: TacticalPoint[];
        speed: number;
        radius: number;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `official` | 是 | `OfficialTacticalRule` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `mode` | 否 | `TacticalMode` | 见结构定义及所属功能文档 |
| `teams` | 否 | `TacticalTeam[]` | 见结构定义及所属功能文档 |
| `target` | 否 | `number` | 见结构定义及所属功能文档 |
| `roundLimit` | 否 | `number` | 见结构定义及所属功能文档 |
| `assignments` | 否 | `Record<string,string>` | 见结构定义及所属功能文档 |
| `eligibility` | 否 | `Record<string,boolean>` | 见结构定义及所属功能文档 |
| `controlRule` | 否 | `'majority'&#124;'exclusive'` | 见结构定义及所属功能文档 |
| `points` | 否 | `{id:string;name:string;regionId:string;value:number}[]` | 见结构定义及所属功能文档 |
| `points.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `points.[].name` | 否 | `string` | 见结构定义及所属功能文档 |
| `points.[].regionId` | 否 | `string` | 见结构定义及所属功能文档 |
| `points.[].value` | 否 | `number` | 见结构定义及所属功能文档 |
| `flags` | 否 | `{id:string;team:string;tokenId:string;home:TacticalPoint;radius:number}[]` | 见结构定义及所属功能文档 |
| `flags.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `flags.[].team` | 否 | `string` | 见结构定义及所属功能文档 |
| `flags.[].tokenId` | 否 | `string` | 见结构定义及所属功能文档 |
| `flags.[].home` | 否 | `TacticalPoint` | 见结构定义及所属功能文档 |
| `flags.[].radius` | 否 | `number` | 见结构定义及所属功能文档 |
| `escort` | 否 | `{tokenId:string;team:string;route:TacticalPoint[];speed:number;radius:number}` | 见结构定义及所属功能文档 |
| `escort.tokenId` | 否 | `string` | 见结构定义及所属功能文档 |
| `escort.team` | 否 | `string` | 见结构定义及所属功能文档 |
| `escort.route` | 否 | `TacticalPoint[]` | 见结构定义及所属功能文档 |
| `escort.speed` | 否 | `number` | 见结构定义及所属功能文档 |
| `escort.radius` | 否 | `number` | 见结构定义及所属功能文档 |

## TacticalMission

导出接口 · 源码第 20 行。

```ts
export interface TacticalMission {
    transcendence?: {
        stage: 'combat' | 'choice' | 'lastRound' | 'retreated' | 'catastrophe';
    };
    arena?: {
        wave: number;
        pending: number | null;
    };
    withdrawal?: {
        units: {
            unit: string;
            reason: 'routed' | 'surrendered';
        }[];
    };
    evacuation?: {
        timing: 'own' | 'any';
        units: string[];
        targets: string[];
        allies?: boolean;
    };
    captured?: string[];
    recon?: {
        pointId: string;
        result: 'true' | 'false';
    }[];
    status?: string;
    outcome?: 'players' | 'hostiles' | 'draw';
    target: number;
    roundLimit: number;
    config: TacticalConfig | null;
    name: string;
    mode: TacticalMode;
    teams: TacticalTeam[];
    phase: 'ready' | 'running' | 'paused' | 'victory' | 'ended';
    revision: number;
    scores: Record<string, number>;
    round: number;
    lastRound: number;
    winners: string[];
    points: {
        id: string;
        name: string;
        owner: string | null;
        contested: boolean;
    }[];
    flags: {
        id: string;
        team: string;
        carrier: string | null;
        atHome: boolean;
        position: TacticalPoint;
    }[];
    escort: {
        distance: number;
        total: number;
        status: string;
    };
    history: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `transcendence` | 是 | `{stage:'combat'&#124;'choice'&#124;'lastRound'&#124;'retreated'&#124;'catastrophe'}` | 见结构定义及所属功能文档 |
| `transcendence.stage` | 否 | `'combat'&#124;'choice'&#124;'lastRound'&#124;'retreated'&#124;'catastrophe'` | 见结构定义及所属功能文档 |
| `arena` | 是 | `{wave:number;pending:number&#124;null}` | 见结构定义及所属功能文档 |
| `arena.wave` | 否 | `number` | 见结构定义及所属功能文档 |
| `arena.pending` | 否 | `number&#124;null` | 见结构定义及所属功能文档 |
| `withdrawal` | 是 | `{units:{unit:string;reason:'routed'&#124;'surrendered'}[]}` | 见结构定义及所属功能文档 |
| `withdrawal.units` | 否 | `{unit:string;reason:'routed'&#124;'surrendered'}[]` | 见结构定义及所属功能文档 |
| `withdrawal.units.[].unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `withdrawal.units.[].reason` | 否 | `'routed'&#124;'surrendered'` | 见结构定义及所属功能文档 |
| `evacuation` | 是 | `{timing:'own'&#124;'any';units:string[];targets:string[];allies?:boolean}` | 见结构定义及所属功能文档 |
| `evacuation.timing` | 否 | `'own'&#124;'any'` | 见结构定义及所属功能文档 |
| `evacuation.units` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `evacuation.targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `evacuation.allies` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `captured` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `recon` | 是 | `{pointId:string;result:'true'&#124;'false'}[]` | 见结构定义及所属功能文档 |
| `recon.[].pointId` | 否 | `string` | 见结构定义及所属功能文档 |
| `recon.[].result` | 否 | `'true'&#124;'false'` | 见结构定义及所属功能文档 |
| `status` | 是 | `string` | 见结构定义及所属功能文档 |
| `outcome` | 是 | `'players'&#124;'hostiles'&#124;'draw'` | 见结构定义及所属功能文档 |
| `target` | 否 | `number` | 见结构定义及所属功能文档 |
| `roundLimit` | 否 | `number` | 见结构定义及所属功能文档 |
| `config` | 否 | `TacticalConfig&#124;null` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `mode` | 否 | `TacticalMode` | 见结构定义及所属功能文档 |
| `teams` | 否 | `TacticalTeam[]` | 见结构定义及所属功能文档 |
| `phase` | 否 | `'ready'&#124;'running'&#124;'paused'&#124;'victory'&#124;'ended'` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `scores` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `round` | 否 | `number` | 见结构定义及所属功能文档 |
| `lastRound` | 否 | `number` | 见结构定义及所属功能文档 |
| `winners` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `points` | 否 | `{id:string;name:string;owner:string&#124;null;contested:boolean}[]` | 见结构定义及所属功能文档 |
| `points.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `points.[].name` | 否 | `string` | 见结构定义及所属功能文档 |
| `points.[].owner` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `points.[].contested` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `flags` | 否 | `{id:string;team:string;carrier:string&#124;null;atHome:boolean;position:TacticalPoint}[]` | 见结构定义及所属功能文档 |
| `flags.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `flags.[].team` | 否 | `string` | 见结构定义及所属功能文档 |
| `flags.[].carrier` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `flags.[].atHome` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `flags.[].position` | 否 | `TacticalPoint` | 见结构定义及所属功能文档 |
| `escort` | 否 | `{distance:number;total:number;status:string}` | 见结构定义及所属功能文档 |
| `escort.distance` | 否 | `number` | 见结构定义及所属功能文档 |
| `escort.total` | 否 | `number` | 见结构定义及所属功能文档 |
| `escort.status` | 否 | `string` | 见结构定义及所属功能文档 |
| `history` | 否 | `string[]` | 见结构定义及所属功能文档 |

## TacticalCommand

导出接口 · 源码第 35 行。

```ts
export type TacticalCommand = {
    type: 'tactical.transcendence';
    sceneId: string;
    expected: number;
    choice: 'retreat' | 'stay';
} | {
    type: 'tactical.concede';
    sceneId: string;
    expected: number;
} | {
    type: 'tactical.withdraw';
    sceneId: string;
    expected: number;
    unit: string;
    reason: 'routed' | 'surrendered';
} | {
    type: 'tactical.evacuate';
    sceneId: string;
    expected: number;
    unit: string;
} | {
    type: 'tactical.reconTarget';
    sceneId: string;
    expected: number;
    pointId: string;
} | {
    type: 'tactical.recon' | 'tactical.capture';
    sceneId: string;
    expected: number;
    unit: string;
    pointId: string;
} | {
    type: 'tactical.configure';
    sceneId: string;
    expected: number;
    config: TacticalConfig;
} | {
    type: 'tactical.start' | 'tactical.pause' | 'tactical.resume' | 'tactical.finish';
    sceneId: string;
    expected: number;
} | {
    type: 'tactical.adjust';
    sceneId: string;
    expected: number;
    team: string;
    delta: number;
    reason: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'tactical.transcendence'` | 见结构定义及所属功能文档 |
| `分支1.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.expected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支1.choice` | 否 | `'retreat'&#124;'stay'` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'tactical.concede'` | 见结构定义及所属功能文档 |
| `分支2.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.expected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'tactical.withdraw'` | 见结构定义及所属功能文档 |
| `分支3.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.expected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.reason` | 否 | `'routed'&#124;'surrendered'` | 见结构定义及所属功能文档 |
| `分支4.type` | 否 | `'tactical.evacuate'` | 见结构定义及所属功能文档 |
| `分支4.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.expected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支4.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.type` | 否 | `'tactical.reconTarget'` | 见结构定义及所属功能文档 |
| `分支5.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.expected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支5.pointId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.type` | 否 | `'tactical.recon'&#124;'tactical.capture'` | 见结构定义及所属功能文档 |
| `分支6.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.expected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支6.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.pointId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.type` | 否 | `'tactical.configure'` | 见结构定义及所属功能文档 |
| `分支7.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.expected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支7.config` | 否 | `TacticalConfig` | 见结构定义及所属功能文档 |
| `分支8.type` | 否 | `'tactical.start'&#124;'tactical.pause'&#124;'tactical.resume'&#124;'tactical.finish'` | 见结构定义及所属功能文档 |
| `分支8.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.expected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支9.type` | 否 | `'tactical.adjust'` | 见结构定义及所属功能文档 |
| `分支9.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.expected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支9.team` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.delta` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支9.reason` | 否 | `string` | 见结构定义及所属功能文档 |

## parseTacticalConfig

导出接口 · 源码第 51 行。

```ts
export function parseTacticalConfig(raw: unknown): TacticalConfig;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## newTacticalConfig

导出接口 · 源码第 67 行。

```ts
export function newTacticalConfig(): TacticalConfig;
```

## newTacticalMission

导出接口 · 源码第 68 行。

```ts
export function newTacticalMission(c: TacticalConfig, revision?: number): TacticalMission;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `TacticalConfig` | — |
| `revision` | 是 | `number` | 0 |

## parseTacticalMissions

导出接口 · 源码第 69 行。

```ts
export function parseTacticalMissions(raw: unknown): Record<string,TacticalMission>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## projectTacticalMissions

导出接口 · 源码第 88 行。

```ts
export function projectTacticalMissions(missions: Record<string,TacticalMission>, sceneIds?: ReadonlySet<string>): Record<string,TacticalMission>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `missions` | 否 | `Record<string,TacticalMission>` | — |
| `sceneIds` | 是 | `ReadonlySet<string>` | — |

## officialTacticalSummary

导出接口 · 源码第 93 行。

Player-safe objective text; source notes and later story consequences stay in private config.

```ts
export function officialTacticalSummary(c: TacticalConfig): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `TacticalConfig` | — |
