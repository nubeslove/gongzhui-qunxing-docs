# game/packages/game-core/src/utopia/weapons.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {areaCover} from './areas';
import type {ManualToken,UtopiaPoint,UtopiaStep} from '@aelzerant/contracts';
import {utopiaWeapon,utopiaStats,utopiaHas,utopiaRank,utopiaEntry,utopiaDamageRoll,utopiaRoll,type UtopiaWeaponProfile} from '@aelzerant/rules-engine';
import {lancerDistance,lancerLineOfSight,lancerTerrainCover,lancerPosition} from '../lancer/geometry';
import {lancerAreaContains,lancerAreaCells} from '../lancer/areas';
import {unit,battle,spend,clearCondition,condition,intact,addLog,message,type UtopiaContext} from './state';
import {utopiaEngaged} from './movement';
```
</details>

## Attack

内部依赖类型 · 源码第 8 行。

```ts
type Attack = Extract<UtopiaStep, {
    type: 'attack';
}>;
```

## utopiaAttackArea

导出接口 · 源码第 9 行。

```ts
export function utopiaAttackArea(token: ManualToken, p: UtopiaWeaponProfile, point?: UtopiaPoint): { direction: number; x: number; y: number; z: number; kind: "line" | "cone" | "blast" | "burst"; size: number; } | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `token` | 否 | `ManualToken` | — |
| `p` | 否 | `UtopiaWeaponProfile` | — |
| `point` | 是 | `UtopiaPoint` | — |

## weaponTargets

导出接口 · 源码第 13 行。

```ts
export function weaponTargets(x: UtopiaContext, s: Attack): { profile: UtopiaWeaponProfile; gear: import("@source/packages/contracts/src/utopia").UtopiaEquipment | undefined; targets: string[]; area: { direction: number; x: number; y: number; z: number; kind: "line" | "cone" | "blast" | "burst"; size: number; } | undefined; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `s` | 否 | `Attack` | — |

## validateShot

导出接口 · 源码第 22 行。

```ts
export function validateShot(x: UtopiaContext, s: Attack, overwatch?: boolean): { profile: UtopiaWeaponProfile; gear: import("@source/packages/contracts/src/utopia").UtopiaEquipment | undefined; targets: string[]; area: { direction: number; x: number; y: number; z: number; kind: "line" | "cone" | "blast" | "burst"; size: number; } | undefined; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `s` | 否 | `Attack` | — |
| `overwatch` | 是 | `boolean` | false |

## queueAttack

导出接口 · 源码第 29 行。

```ts
export function queueAttack(x: UtopiaContext, s: Attack, barrage?: boolean, second?: string, free?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `s` | 否 | `Attack` | — |
| `barrage` | 是 | `boolean` | false |
| `second` | 是 | `string` | — |
| `free` | 是 | `boolean` | false |

## resolveAttack

导出接口 · 源码第 44 行。

```ts
export function resolveAttack(x: UtopiaContext, s: Attack): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `s` | 否 | `Attack` | — |
