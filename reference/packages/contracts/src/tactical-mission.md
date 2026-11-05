# game/packages/contracts/src/tactical-mission.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

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

## TacticalConfig

导出接口 · 源码第 7 行。

```ts
export interface TacticalConfig {
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

导出接口 · 源码第 14 行。

```ts
export interface TacticalMission {
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

导出接口 · 源码第 22 行。

```ts
export type TacticalCommand = {
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
| `分支1.type` | 否 | `'tactical.configure'` | 见结构定义及所属功能文档 |
| `分支1.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.expected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支1.config` | 否 | `TacticalConfig` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'tactical.start'&#124;'tactical.pause'&#124;'tactical.resume'&#124;'tactical.finish'` | 见结构定义及所属功能文档 |
| `分支2.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.expected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'tactical.adjust'` | 见结构定义及所属功能文档 |
| `分支3.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.expected` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.team` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.delta` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.reason` | 否 | `string` | 见结构定义及所属功能文档 |

## parseTacticalConfig

导出接口 · 源码第 32 行。

```ts
export function parseTacticalConfig(raw: unknown): TacticalConfig;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## newTacticalConfig

导出接口 · 源码第 46 行。

```ts
export function newTacticalConfig(): TacticalConfig;
```

## newTacticalMission

导出接口 · 源码第 47 行。

```ts
export function newTacticalMission(c: TacticalConfig, revision?: number): TacticalMission;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `TacticalConfig` | — |
| `revision` | 是 | `number` | 0 |

## parseTacticalMissions

导出接口 · 源码第 48 行。

```ts
export function parseTacticalMissions(raw: unknown): Record<string,TacticalMission>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## projectTacticalMissions

导出接口 · 源码第 60 行。

```ts
export function projectTacticalMissions(missions: Record<string,TacticalMission>, sceneIds?: ReadonlySet<string>): Record<string,TacticalMission>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `missions` | 否 | `Record<string,TacticalMission>` | — |
| `sceneIds` | 是 | `ReadonlySet<string>` | — |
