# game/packages/tabletop-runtime/src/tabletop/lancer/pilotProfile.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseLancerPilotProfile,type ManualActor,type LancerPilotProfile} from '@aelzerant/contracts';
import {LANCER_PILOT_GEAR,LANCER_PILOT_ARMOR,LANCER_PILOT_WEAPONS,lancerPilotWeapon} from '@aelzerant/game-core';
```
</details>

## readPilotProfile

导出接口 · 源码第 4 行。

```ts
export function readPilotProfile(actor: ManualActor, grit?: number): LancerPilotProfile;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `grit` | 是 | `number` | Math.ceil(Number(actor.fields['lancer.level']??0)/2) |

## savePilotProfile

导出接口 · 源码第 23 行。

```ts
export function savePilotProfile(actor: ManualActor, p: LancerPilotProfile): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `p` | 否 | `LancerPilotProfile` | — |
