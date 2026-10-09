# game/apps/desktop/src/tabletop/lancer/model.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseLancerAutomation} from '@aelzerant/contracts';
import {effectiveTraining,CORE_BY_ID} from './content';
import { preparePrototype } from './prototypeEquipment';
import type { ManualActor } from '@aelzerant/contracts';
import { calculateLancer, checkLancerLoadout, LANCER_MOUNTS, LANCER_STATS, LANCER_WEAPON_SIZES, type LancerBase, type LancerBuild, type LancerEquipment, type LancerModifiers, type LancerMount, type LancerWeapon } from '@aelzerant/rules-engine';
import { LANCER_FRAMES } from './frames';
import { parseLancerTraining, lancerTrainingModifiers, type LancerTraining } from '@aelzerant/rules-engine';
import { coreSystemId } from './coreResources';
```
</details>

## LC

导出接口 · 源码第 9 行。

```ts
export const LC = 'lancer.';
```

## WEAPON_LIMIT

导出接口 · 源码第 13 行。

```ts
export const WEAPON_LIMIT = 8;
```

## SYSTEM_LIMIT

导出接口 · 源码第 13 行。

```ts
export const SYSTEM_LIMIT = 12;
```

## parseEquipment

导出接口 · 源码第 18 行。

```ts
export function parseEquipment(raw: unknown): LancerEquipment;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseWeapon

导出接口 · 源码第 23 行。

```ts
export function parseWeapon(raw: unknown): LancerWeapon;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## newEquipment

导出接口 · 源码第 27 行。

```ts
export const newEquipment: (): LancerEquipment;
```

## newWeapon

导出接口 · 源码第 28 行。

```ts
export const newWeapon: (): LancerWeapon;
```

## selectLancerFrame

导出接口 · 源码第 29 行。

```ts
export function selectLancerFrame(actor: ManualActor, frameId: string): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `frameId` | 否 | `string` | — |

## setEquipment

导出接口 · 源码第 35 行。

```ts
export function setEquipment<T extends LancerEquipment>(actor: ManualActor, kind: 'weapon' | 'system', items: T[]): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `kind` | 否 | `'weapon' &#124; 'system'` | — |
| `items` | 否 | `T[]` | — |

## readLancer

导出接口 · 源码第 43 行。

```ts
export function readLancer(actor: ManualActor): { training: LancerTraining; baseTraining: LancerTraining; frame: import("@source/apps/desktop/src/tabletop/lancer/frames").LancerFrame | undefined; custom: boolean; build: LancerBuild | undefined; result: { growth: ReturnType<typeof import("@source/packages/rules-engine/src/lancer").lancerGrowth>; stats: import("@source/packages/rules-engine/src/lancer").LancerStats; warnings: string[]; } | undefined; mounts: ("main" | "heavy" | "auxaux" | "mainaux" | "flex" | "integrated")[]; weapons: LancerWeapon[]; systems: LancerEquipment[]; loadout: { spent: number; remaining: number; warnings: string[]; }; warnings: string[]; errors: string[]; current: Record<"hp" | "heat" | "repair" | "structure" | "stress" | "overshield" | "burn", number>; cp: number; overcharge: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |

## readyLancer

导出接口 · 源码第 93 行。

```ts
export function readyLancer(actor: ManualActor, prepareTalents?: boolean, random?: () => number): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `prepareTalents` | 是 | `boolean` | true |
| `random` | 是 | `() => number` | Math.random |

## activateLancer

导出接口 · 源码第 105 行。

```ts
export function activateLancer(actor: ManualActor): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
