# game/packages/session/src/encounter-management.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseSceneEncounter,encounterOrder,type SceneEncounter,type EncounterCandidate,type EncounterCommand,type EncounterAward} from '@aelzerant/contracts';
```
</details>

## newEncounter

导出接口 · 源码第 2 行。

```ts
export function newEncounter(): SceneEncounter;
```

## manageEncounter

导出接口 · 源码第 3 行。

```ts
export function manageEncounter(before: SceneEncounter|undefined, command: EncounterCommand, candidates: EncounterCandidate[], context: {gm:boolean;sender:string;roll:(candidate:EncounterCandidate)=>number;now:number;alternating?:boolean}): SceneEncounter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `before` | 否 | `SceneEncounter&#124;undefined` | — |
| `command` | 否 | `EncounterCommand` | — |
| `candidates` | 否 | `EncounterCandidate[]` | — |
| `context` | 否 | `{gm:boolean;sender:string;roll:(candidate:EncounterCandidate)=>number;now:number;alternating?:boolean}` | — |

## awardTotal

导出接口 · 源码第 19 行。

```ts
export function awardTotal(awards: EncounterAward[]): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `awards` | 否 | `EncounterAward[]` | — |
