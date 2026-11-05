# game/packages/contracts/src/community-center.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { RuntimeManifest, RuntimePermission } from './community-plugin-runtime';
import type { ResourcePackage } from './resource-packages';
```
</details>

## COMMUNITY_SECTIONS

导出接口 · 源码第 5 行。

Entry identity, not engine identity: variants must never share a catalog implicitly.

```ts
export const COMMUNITY_SECTIONS = ['aaf', 'dnd5e-2024', 'lancer', 'terra-walker', 'new-utopia', 'otherworld-journey'] as const;
```

## CommunitySectionId

导出接口 · 源码第 6 行。

```ts
export type CommunitySectionId = typeof COMMUNITY_SECTIONS[number];
```

## CenterKind

导出接口 · 源码第 7 行。

```ts
export type CenterKind = 'extension' | 'plugin' | 'homebrew';
```

## CenterStatus

导出接口 · 源码第 8 行。

```ts
export type CenterStatus = 'draft' | 'listed' | 'unlisted' | 'deleted' | 'disabled';
```

## CommunityPackageBody

导出接口 · 源码第 9 行。

```ts
export interface CommunityPackageBody {
    format: 'qianxing.community';
    schemaVersion: 1;
    kind: CenterKind;
    manifest: {
        id: string;
        name: string;
        version: string;
        description: string;
        supportedSections: CommunitySectionId[];
        categoryId?: string;
        dependencies: Array<{
            id: string;
            version?: string;
        }>;
        conflicts: Array<{
            id: string;
            reason: string;
        }>;
    };
    plugin?: {
        manifest: RuntimeManifest;
        code: string;
    };
    resources?: ResourcePackage;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `format` | 否 | `'qianxing.community'` | 见结构定义及所属功能文档 |
| `schemaVersion` | 否 | `1` | 见结构定义及所属功能文档 |
| `kind` | 否 | `CenterKind` | 见结构定义及所属功能文档 |
| `manifest` | 否 | `{id:string;name:string;version:string;description:string;supportedSections:CommunitySectionId[];categoryId?:string;dependencies:Array<{id:string;version?:string}>;conflicts:Array<{id:string;reason:string}>}` | 见结构定义及所属功能文档 |
| `manifest.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `manifest.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `manifest.version` | 否 | `string` | 见结构定义及所属功能文档 |
| `manifest.description` | 否 | `string` | 见结构定义及所属功能文档 |
| `manifest.supportedSections` | 否 | `CommunitySectionId[]` | 见结构定义及所属功能文档 |
| `manifest.categoryId` | 是 | `string` | 见结构定义及所属功能文档 |
| `manifest.dependencies` | 否 | `Array<{id:string;version?:string}>` | 见结构定义及所属功能文档 |
| `manifest.conflicts` | 否 | `Array<{id:string;reason:string}>` | 见结构定义及所属功能文档 |
| `plugin` | 是 | `{manifest:RuntimeManifest;code:string}` | 见结构定义及所属功能文档 |
| `plugin.manifest` | 否 | `RuntimeManifest` | 见结构定义及所属功能文档 |
| `plugin.code` | 否 | `string` | 见结构定义及所属功能文档 |
| `resources` | 是 | `ResourcePackage` | 见结构定义及所属功能文档 |

## CenterCategory

导出接口 · 源码第 15 行。

```ts
export interface CenterCategory {
    id: string;
    sectionId: CommunitySectionId;
    kind: CenterKind;
    name: string;
    parentId?: string;
    revision: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `sectionId` | 否 | `CommunitySectionId` | 见结构定义及所属功能文档 |
| `kind` | 否 | `CenterKind` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `parentId` | 是 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |

## CenterVersion

导出接口 · 源码第 16 行。

```ts
export interface CenterVersion {
    version: string;
    hash: string;
    publishedAt: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `string` | 见结构定义及所属功能文档 |
| `hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `publishedAt` | 否 | `number` | 见结构定义及所属功能文档 |

## CenterItem

导出接口 · 源码第 17 行。

```ts
export interface CenterItem {
    id: string;
    name: string;
    description: string;
    kind: CenterKind;
    supportedSections: CommunitySectionId[];
    categoryId?: string;
    authorId: string;
    authorName: string;
    revision: number;
    status: CenterStatus;
    version: string;
    updatedAt: number;
    canEdit: boolean;
    canModerate: boolean;
    canDisable: boolean;
    installedVersion?: string;
    worldEnabled?: boolean;
    disabledReason?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `CenterKind` | 见结构定义及所属功能文档 |
| `supportedSections` | 否 | `CommunitySectionId[]` | 见结构定义及所属功能文档 |
| `categoryId` | 是 | `string` | 见结构定义及所属功能文档 |
| `authorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `authorName` | 否 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `status` | 否 | `CenterStatus` | 见结构定义及所属功能文档 |
| `version` | 否 | `string` | 见结构定义及所属功能文档 |
| `updatedAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `canEdit` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `canModerate` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `canDisable` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `installedVersion` | 是 | `string` | 见结构定义及所属功能文档 |
| `worldEnabled` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `disabledReason` | 是 | `string` | 见结构定义及所属功能文档 |

## CenterInstallation

导出接口 · 源码第 22 行。

```ts
export interface CenterInstallation {
    id: string;
    version: string;
    hash: string;
    worldId?: string;
    enabled: boolean;
    revision: number;
    installedAt: number;
    disabledReason?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `version` | 否 | `string` | 见结构定义及所属功能文档 |
| `hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `worldId` | 是 | `string` | 见结构定义及所属功能文档 |
| `enabled` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `installedAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `disabledReason` | 是 | `string` | 见结构定义及所属功能文档 |

## CenterCatalog

导出接口 · 源码第 23 行。

```ts
export interface CenterCatalog {
    items: CenterItem[];
    categories: CenterCategory[];
    canManageCategories: boolean;
    canManageWorld: boolean;
    worldId?: string;
    total: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `items` | 否 | `CenterItem[]` | 见结构定义及所属功能文档 |
| `categories` | 否 | `CenterCategory[]` | 见结构定义及所属功能文档 |
| `canManageCategories` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `canManageWorld` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `worldId` | 是 | `string` | 见结构定义及所属功能文档 |
| `total` | 否 | `number` | 见结构定义及所属功能文档 |

## CenterDetail

导出接口 · 源码第 24 行。

```ts
export interface CenterDetail {
    item: CenterItem;
    body: CommunityPackageBody;
    draft?: CommunityPackageBody;
    versions: CenterVersion[];
    installation?: CenterInstallation;
    grants: RuntimePermission[];
    audit: CenterAudit[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `item` | 否 | `CenterItem` | 见结构定义及所属功能文档 |
| `body` | 否 | `CommunityPackageBody` | 见结构定义及所属功能文档 |
| `draft` | 是 | `CommunityPackageBody` | 见结构定义及所属功能文档 |
| `versions` | 否 | `CenterVersion[]` | 见结构定义及所属功能文档 |
| `installation` | 是 | `CenterInstallation` | 见结构定义及所属功能文档 |
| `grants` | 否 | `RuntimePermission[]` | 见结构定义及所属功能文档 |
| `audit` | 否 | `CenterAudit[]` | 见结构定义及所属功能文档 |

## CenterAudit

导出接口 · 源码第 25 行。

```ts
export interface CenterAudit {
    at: number;
    actorId: string;
    action: string;
    reason: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `action` | 否 | `string` | 见结构定义及所属功能文档 |
| `reason` | 否 | `string` | 见结构定义及所属功能文档 |

## CenterDependency

导出接口 · 源码第 26 行。

```ts
export interface CenterDependency {
    id: string;
    version?: string;
    installedVersion?: string;
    satisfied: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `version` | 是 | `string` | 见结构定义及所属功能文档 |
| `installedVersion` | 是 | `string` | 见结构定义及所属功能文档 |
| `satisfied` | 否 | `boolean` | 见结构定义及所属功能文档 |

## CenterConflict

导出接口 · 源码第 27 行。

```ts
export interface CenterConflict {
    id: string;
    name: string;
    reason: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `reason` | 否 | `string` | 见结构定义及所属功能文档 |

## CenterResourceImpact

导出接口 · 源码第 29 行。

Resource identifiers and selectable providers are supplied by the resource-layer resolver.

```ts
export interface CenterResourceImpact {
    resourceId: string;
    name: string;
    providers: Array<{
        id: string;
        label: string;
        version?: string;
    }>;
    selected?: string;
    unresolved: boolean;
    replacesBase: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `resourceId` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `providers` | 否 | `Array<{id:string;label:string;version?:string}>` | 见结构定义及所属功能文档 |
| `selected` | 是 | `string` | 见结构定义及所属功能文档 |
| `unresolved` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `replacesBase` | 否 | `boolean` | 见结构定义及所属功能文档 |

## CenterInstallPreview

导出接口 · 源码第 30 行。

```ts
export interface CenterInstallPreview {
    id: string;
    version: string;
    hash: string;
    worldId?: string;
    body: CommunityPackageBody;
    dependencies: CenterDependency[];
    conflicts: CenterConflict[];
    permissions: RuntimePermission[];
    resourceImpacts: CenterResourceImpact[];
    warnings: string[];
    blockers: string[];
    installation?: CenterInstallation;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `version` | 否 | `string` | 见结构定义及所属功能文档 |
| `hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `worldId` | 是 | `string` | 见结构定义及所属功能文档 |
| `body` | 否 | `CommunityPackageBody` | 见结构定义及所属功能文档 |
| `dependencies` | 否 | `CenterDependency[]` | 见结构定义及所属功能文档 |
| `conflicts` | 否 | `CenterConflict[]` | 见结构定义及所属功能文档 |
| `permissions` | 否 | `RuntimePermission[]` | 见结构定义及所属功能文档 |
| `resourceImpacts` | 否 | `CenterResourceImpact[]` | 见结构定义及所属功能文档 |
| `warnings` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `blockers` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `installation` | 是 | `CenterInstallation` | 见结构定义及所属功能文档 |

## CenterResourceChoices

导出接口 · 源码第 35 行。

```ts
export type CenterResourceChoices = Record<string, string>;
```

## CenterPackageCommand

导出接口 · 源码第 36 行。

```ts
export type CenterPackageCommand = {
    action: 'save';
    requestId: string;
    expectedRevision: number;
    body: CommunityPackageBody;
} | {
    action: 'publish';
    requestId: string;
    expectedRevision: number;
} | {
    action: 'unlist' | 'relist' | 'delete' | 'disable';
    requestId: string;
    expectedRevision: number;
    reason: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.action` | 否 | `'save'` | 见结构定义及所属功能文档 |
| `分支1.requestId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支1.body` | 否 | `CommunityPackageBody` | 见结构定义及所属功能文档 |
| `分支2.action` | 否 | `'publish'` | 见结构定义及所属功能文档 |
| `分支2.requestId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.action` | 否 | `'unlist'&#124;'relist'&#124;'delete'&#124;'disable'` | 见结构定义及所属功能文档 |
| `分支3.requestId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.reason` | 否 | `string` | 见结构定义及所属功能文档 |

## CenterCategoryCommand

导出接口 · 源码第 40 行。

```ts
export type CenterCategoryCommand = {
    action: 'save';
    id: string;
    expectedRevision: number;
    kind: CenterKind;
    name: string;
    parentId?: string;
} | {
    action: 'delete';
    id: string;
    expectedRevision: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.action` | 否 | `'save'` | 见结构定义及所属功能文档 |
| `分支1.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支1.kind` | 否 | `CenterKind` | 见结构定义及所属功能文档 |
| `分支1.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.parentId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支2.action` | 否 | `'delete'` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |

## CenterInstallCommand

导出接口 · 源码第 43 行。

```ts
export interface CenterInstallCommand {
    id: string;
    version: string;
    hash: string;
    worldId?: string;
    expectedRevision?: number;
    acknowledgeWarnings: boolean;
    choices?: CenterResourceChoices;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `version` | 否 | `string` | 见结构定义及所属功能文档 |
| `hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `worldId` | 是 | `string` | 见结构定义及所属功能文档 |
| `expectedRevision` | 是 | `number` | 见结构定义及所属功能文档 |
| `acknowledgeWarnings` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `choices` | 是 | `CenterResourceChoices` | 见结构定义及所属功能文档 |

## CenterWorldCommand

导出接口 · 源码第 44 行。

```ts
export interface CenterWorldCommand {
    worldId: string;
    id: string;
    enabled: boolean;
    expectedRevision: number;
    choices?: CenterResourceChoices;
    acknowledgeWarnings: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `worldId` | 否 | `string` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `enabled` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `choices` | 是 | `CenterResourceChoices` | 见结构定义及所属功能文档 |
| `acknowledgeWarnings` | 否 | `boolean` | 见结构定义及所属功能文档 |

## CenterConsentCommand

导出接口 · 源码第 45 行。

```ts
export interface CenterConsentCommand {
    id: string;
    version: string;
    hash: string;
    worldId?: string;
    grants: RuntimePermission[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `version` | 否 | `string` | 见结构定义及所属功能文档 |
| `hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `worldId` | 是 | `string` | 见结构定义及所属功能文档 |
| `grants` | 否 | `RuntimePermission[]` | 见结构定义及所属功能文档 |

## CenterRuntimeView

导出接口 · 源码第 46 行。

```ts
export interface CenterRuntimeView {
    revision: string;
    packages: Array<{
        installation: CenterInstallation;
        body: CommunityPackageBody;
        grants: RuntimePermission[];
    }>;
    notices: Array<{
        id: string;
        message: string;
    }>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `revision` | 否 | `string` | 见结构定义及所属功能文档 |
| `packages` | 否 | `Array<{installation:CenterInstallation;body:CommunityPackageBody;grants:RuntimePermission[]}>` | 见结构定义及所属功能文档 |
| `notices` | 否 | `Array<{id:string;message:string}>` | 见结构定义及所属功能文档 |

## isCommunitySection

导出接口 · 源码第 47 行。

```ts
export function isCommunitySection(value: unknown): value is CommunitySectionId;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## communitySectionOf

导出接口 · 源码第 48 行。

```ts
export function communitySectionOf(world: {systemId?:string;ruleVariant?:{id:string}}): CommunitySectionId;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `{systemId?:string;ruleVariant?:{id:string}}` | — |
