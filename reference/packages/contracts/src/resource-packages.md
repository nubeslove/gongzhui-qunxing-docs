# game/packages/contracts/src/resource-packages.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseResource,storyObject,storyId,storyText,storyList,type StoryResource,type StoryWorkspace} from './story';
import {isGameSystemId,type GameSystemId} from './systems';
import {parseLancerAutomation,type LancerEquipmentAutomation} from './lancer-custom';
import {canonicalJson} from './index';
```
</details>

## LancerPackageEquipment

导出接口 · 源码第 7 行。

Data-only definitions. Package identity/version must also match its signed center envelope.

```ts
export interface LancerPackageEquipment {
    id: string;
    kind: 'weapon' | 'system';
    name: string;
    sp: number;
    limited: number;
    notes: string;
    automation: LancerEquipmentAutomation;
    size?: 'aux' | 'main' | 'heavy' | 'superheavy';
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'weapon'&#124;'system'` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `sp` | 否 | `number` | 见结构定义及所属功能文档 |
| `limited` | 否 | `number` | 见结构定义及所属功能文档 |
| `notes` | 否 | `string` | 见结构定义及所属功能文档 |
| `automation` | 否 | `LancerEquipmentAutomation` | 见结构定义及所属功能文档 |
| `size` | 是 | `'aux'&#124;'main'&#124;'heavy'&#124;'superheavy'` | 见结构定义及所属功能文档 |

## ResourcePackage

导出接口 · 源码第 11 行。

```ts
export interface ResourcePackage {
    schemaVersion: 1;
    packageId: string;
    version: string;
    systemId: GameSystemId;
    resources: StoryResource[];
    lancerEquipment?: LancerPackageEquipment[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `schemaVersion` | 否 | `1` | 见结构定义及所属功能文档 |
| `packageId` | 否 | `string` | 见结构定义及所属功能文档 |
| `version` | 否 | `string` | 见结构定义及所属功能文档 |
| `systemId` | 否 | `GameSystemId` | 见结构定义及所属功能文档 |
| `resources` | 否 | `StoryResource[]` | 见结构定义及所属功能文档 |
| `lancerEquipment` | 是 | `LancerPackageEquipment[]` | 见结构定义及所属功能文档 |

## InstalledResourcePackage

导出接口 · 源码第 12 行。

```ts
export interface InstalledResourcePackage {
    package: ResourcePackage;
    hash: string;
    enabled: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `package` | 否 | `ResourcePackage` | 见结构定义及所属功能文档 |
| `hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `enabled` | 否 | `boolean` | 见结构定义及所属功能文档 |

## ResourcePackageSelection

导出接口 · 源码第 13 行。

```ts
export interface ResourcePackageSelection {
    resourceId: string;
    providerId: string;
    world?: StoryResource;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `resourceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `providerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `world` | 是 | `StoryResource` | 见结构定义及所属功能文档 |

## ResourcePackageState

导出接口 · 源码第 14 行。

```ts
export interface ResourcePackageState {
    installed: InstalledResourcePackage[];
    selections: ResourcePackageSelection[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `installed` | 否 | `InstalledResourcePackage[]` | 见结构定义及所属功能文档 |
| `selections` | 否 | `ResourcePackageSelection[]` | 见结构定义及所属功能文档 |

## ResourcePackageImpact

导出接口 · 源码第 15 行。

```ts
export interface ResourcePackageImpact {
    resourceId: string;
    name: string;
    providers: {
        id: string;
        label: string;
        version?: string;
    }[];
    selected?: string;
    unresolved: boolean;
    replacesBase: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `resourceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `providers` | 否 | `{id:string;label:string;version?:string}[]` | 见结构定义及所属功能文档 |
| `providers.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `providers.[].label` | 否 | `string` | 见结构定义及所属功能文档 |
| `providers.[].version` | 是 | `string` | 见结构定义及所属功能文档 |
| `selected` | 是 | `string` | 见结构定义及所属功能文档 |
| `unresolved` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `replacesBase` | 否 | `boolean` | 见结构定义及所属功能文档 |

## LANCER_RESOURCE_PREFIX

导出接口 · 源码第 16 行。

```ts
export const LANCER_RESOURCE_PREFIX = 'lancer-equipment:';
```

## parseLancerPackageEquipment

导出接口 · 源码第 20 行。

```ts
export function parseLancerPackageEquipment(raw: unknown): LancerPackageEquipment;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseResourcePackage

导出接口 · 源码第 31 行。

```ts
export function parseResourcePackage(raw: unknown): ResourcePackage;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseResourcePackageState

导出接口 · 源码第 45 行。

```ts
export function parseResourcePackageState(raw: unknown): ResourcePackageState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## resourcePackageProvider

导出接口 · 源码第 51 行。

```ts
export const resourcePackageProvider: (i: InstalledResourcePackage): string;
```

## Candidate

内部依赖类型 · 源码第 52 行。

```ts
interface Candidate {
    providerId: string;
    label: string;
    version?: string;
    resource?: StoryResource;
    equipment?: LancerPackageEquipment;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `providerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `version` | 是 | `string` | 见结构定义及所属功能文档 |
| `resource` | 是 | `StoryResource` | 见结构定义及所属功能文档 |
| `equipment` | 是 | `LancerPackageEquipment` | 见结构定义及所属功能文档 |

## resolveResourcePackages

导出接口 · 源码第 53 行。

```ts
export function resolveResourcePackages(story: StoryWorkspace, builtin?: readonly StoryResource[]): { resources: StoryResource[]; equipment: Map<string, LancerPackageEquipment>; impacts: ResourcePackageImpact[]; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `builtin` | 是 | `readonly StoryResource[]` | [] |

## effectiveStoryResources

导出接口 · 源码第 72 行。

```ts
export const effectiveStoryResources: (story: StoryWorkspace): StoryResource[];
```

## installResourcePackage

导出接口 · 源码第 74 行。

Server-only installation hook. The caller verifies release bytes/hash before entering its room queue.

```ts
export function installResourcePackage(story: StoryWorkspace, raw: unknown, hash: string): StoryWorkspace;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `raw` | 否 | `unknown` | — |
| `hash` | 否 | `string` | — |

## enableResourcePackage

导出接口 · 源码第 81 行。

```ts
export function enableResourcePackage(story: StoryWorkspace, packageId: string, enabled: boolean, choices?: Record<string,string>): StoryWorkspace;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `packageId` | 否 | `string` | — |
| `enabled` | 否 | `boolean` | — |
| `choices` | 是 | `Record<string,string>` | {} |

## projectResourcePackageEquipment

导出接口 · 源码第 92 行。

Published equipment selected by the GM is world-visible; private story definitions and disabled sources are not.

```ts
export function projectResourcePackageEquipment(story: StoryWorkspace): ResourcePackageState|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
