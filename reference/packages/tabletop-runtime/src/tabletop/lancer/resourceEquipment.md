# game/packages/tabletop-runtime/src/tabletop/lancer/resourceEquipment.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {LANCER_RESOURCE_PREFIX,resolveResourcePackages,type ManualActor,type StoryWorkspace,type LancerPackageEquipment} from '@aelzerant/contracts';
import {parseEquipment,parseWeapon,readLancer,setEquipment} from './model';
import type {LancerWeapon} from '@aelzerant/rules-engine';
```
</details>

## effectiveLancerResourceActor

导出接口 · 源码第 6 行。

Pure equipment view: original IDs, definition text, mount choices and used counters stay in the save.

```ts
export function effectiveLancerResourceActor(actor: ManualActor, story: StoryWorkspace|undefined): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `story` | 否 | `StoryWorkspace&#124;undefined` | — |

## resourceEquipmentView

导出接口 · 源码第 16 行。

```ts
export function resourceEquipmentView(resource: LancerPackageEquipment, saved?: Record<string,unknown>): { resourceId: string; automation: import("@source/packages/contracts/src/lancer-custom").LancerEquipmentAutomation; used: {}; name: string; sp: number; limited: number; notes: string; } | { size: "main" | "heavy" | "aux" | "superheavy" | undefined; mount: {}; brace: {}; damage: string; range: string; tags: string; resourceId: string; automation: import("@source/packages/contracts/src/lancer-custom").LancerEquipmentAutomation; used: {}; name: string; sp: number; limited: number; notes: string; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `resource` | 否 | `LancerPackageEquipment` | — |
| `saved` | 是 | `Record<string,unknown>` | {} |

## installLancerPackageEquipment

导出接口 · 源码第 27 行。

New equipment retains a source reference; disabling the source never leaves copied automation executable.

```ts
export function installLancerPackageEquipment(actor: ManualActor, story: StoryWorkspace, resourceId: string, options?: {mount?:number;brace?:number;replace?:boolean}): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `story` | 否 | `StoryWorkspace` | — |
| `resourceId` | 否 | `string` | — |
| `options` | 是 | `{mount?:number;brace?:number;replace?:boolean}` | {} |
