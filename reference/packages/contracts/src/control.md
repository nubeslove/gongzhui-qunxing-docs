# game/packages/contracts/src/control.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## Capability

导出接口 · 源码第 16 行。

```ts
export type Capability = keyof typeof CONTROL_CAPABILITIES;
```

## ControlScope

导出接口 · 源码第 17 行。

```ts
export type ControlScope = {
    kind: 'global';
} | {
    kind: 'system' | 'world' | 'content' | 'section';
    id: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.kind` | 否 | `'global'` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'system'&#124;'world'&#124;'content'&#124;'section'` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |

## ControlTarget

导出接口 · 源码第 18 行。

```ts
export interface ControlTarget {
    worldId?: string;
    systemId?: string;
    contentId?: string;
    sectionId?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `worldId` | 是 | `string` | 见结构定义及所属功能文档 |
| `systemId` | 是 | `string` | 见结构定义及所属功能文档 |
| `contentId` | 是 | `string` | 见结构定义及所属功能文档 |
| `sectionId` | 是 | `string` | 见结构定义及所属功能文档 |

## ControlRole

导出接口 · 源码第 19 行。

```ts
export interface ControlRole {
    id: string;
    name: string;
    capabilities: Capability[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `capabilities` | 否 | `Capability[]` | 见结构定义及所属功能文档 |

## RoleBinding

导出接口 · 源码第 20 行。

```ts
export interface RoleBinding {
    id: string;
    accountId: string;
    roleId: string;
    scope: ControlScope;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `accountId` | 否 | `string` | 见结构定义及所属功能文档 |
| `roleId` | 否 | `string` | 见结构定义及所属功能文档 |
| `scope` | 否 | `ControlScope` | 见结构定义及所属功能文档 |

## ControlAccess

导出接口 · 源码第 21 行。

```ts
export interface ControlAccess {
    owner: boolean;
    revision: number;
    grants: Array<{
        capabilities: Capability[];
        scope: ControlScope;
    }>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `owner` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `grants` | 否 | `Array<{capabilities:Capability[];scope:ControlScope}>` | 见结构定义及所属功能文档 |

## ControlAuditEvidence

导出接口 · 源码第 22 行。

```ts
export interface ControlAuditEvidence {
    kind: 'ownership' | 'deletion' | 'deployment' | 'wallet' | 'content' | 'content-review' | 'content-release' | 'content-distribution';
    reference: string;
    version?: number | string;
    verifiedBy: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'ownership'&#124;'deletion'&#124;'deployment'&#124;'wallet'&#124;'content'&#124;'content-review'&#124;'content-release'&#124;'content-distribution'` | 见结构定义及所属功能文档 |
| `reference` | 否 | `string` | 见结构定义及所属功能文档 |
| `version` | 是 | `number&#124;string` | 见结构定义及所属功能文档 |
| `verifiedBy` | 否 | `string` | 见结构定义及所属功能文档 |

## ControlAudit

导出接口 · 源码第 23 行。

```ts
export interface ControlAudit {
    id: number;
    at: number;
    actorId: string;
    action: string;
    target: string;
    reason: string;
    revision: number;
    operationId?: string;
    evidence?: ControlAuditEvidence;
    result: 'started' | 'applied' | 'denied' | 'failed' | 'uncertain';
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `number` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `action` | 否 | `string` | 见结构定义及所属功能文档 |
| `target` | 否 | `string` | 见结构定义及所属功能文档 |
| `reason` | 否 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `operationId` | 是 | `string` | 见结构定义及所属功能文档 |
| `evidence` | 是 | `ControlAuditEvidence` | 见结构定义及所属功能文档 |
| `result` | 否 | `'started'&#124;'applied'&#124;'denied'&#124;'failed'&#124;'uncertain'` | 见结构定义及所属功能文档 |

## ControlIssueKind

导出接口 · 源码第 24 行。

```ts
export type ControlIssueKind = 'ownership' | 'deletion' | 'audit';
```

## ControlIssue

导出接口 · 源码第 25 行。

```ts
export interface ControlIssue {
    kind: ControlIssueKind;
    id: string;
    title: string;
    operationId?: string;
    at?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `ControlIssueKind` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `title` | 否 | `string` | 见结构定义及所属功能文档 |
| `operationId` | 是 | `string` | 见结构定义及所属功能文档 |
| `at` | 是 | `number` | 见结构定义及所属功能文档 |

## ControlDiagnostics

导出接口 · 源码第 26 行。

```ts
export interface ControlDiagnostics {
    counts: Partial<Record<ControlIssueKind, number>>;
    kind: ControlIssueKind;
    total: number;
    issues: ControlIssue[];
    checkedAt: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `counts` | 否 | `Partial<Record<ControlIssueKind,number>>` | 见结构定义及所属功能文档 |
| `kind` | 否 | `ControlIssueKind` | 见结构定义及所属功能文档 |
| `total` | 否 | `number` | 见结构定义及所属功能文档 |
| `issues` | 否 | `ControlIssue[]` | 见结构定义及所属功能文档 |
| `checkedAt` | 否 | `number` | 见结构定义及所属功能文档 |

## OWNER_CAPABILITIES

导出接口 · 源码第 27 行。

```ts
export const OWNER_CAPABILITIES: ReadonlySet<Capability>;
```

## capabilitySupportsScope

导出接口 · 源码第 29 行。

Scope choices must match the target supplied by the corresponding service.

```ts
export function capabilitySupportsScope(capability: Capability, kind: ControlScope['kind']): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `capability` | 否 | `Capability` | — |
| `kind` | 否 | `ControlScope['kind']` | — |

## validCapability

导出接口 · 源码第 35 行。

```ts
export function validCapability(value: unknown): value is Capability;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## scopeMatches

导出接口 · 源码第 36 行。

```ts
export function scopeMatches(scope: ControlScope, target?: ControlTarget): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `scope` | 否 | `ControlScope` | — |
| `target` | 是 | `ControlTarget` | {} |

## controlAllows

导出接口 · 源码第 39 行。

```ts
export function controlAllows(access: ControlAccess, capability: Capability, target?: ControlTarget): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `access` | 否 | `ControlAccess` | — |
| `capability` | 否 | `Capability` | — |
| `target` | 是 | `ControlTarget` | {} |

## validControlScope

导出接口 · 源码第 42 行。

```ts
export function validControlScope(value: unknown): value is ControlScope;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## DEFAULT_CONTROL_ROLES

导出接口 · 源码第 47 行。

```ts
export const DEFAULT_CONTROL_ROLES: ReadonlyArray<ControlRole>;
```
