# game/packages/contracts/src/world-edit-policy.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {canonicalJson} from './index';
import type {ManualActor,ManualTable,ManualToken} from './tabletop';
```
</details>

## PREPARATION_REQUIRED

导出接口 · 源码第 4 行。

```ts
export const PREPARATION_REQUIRED = '请在本地备团稿中修改，再发布到在线世界。';
```

## preparationAction

导出接口 · 源码第 8 行。

Shared by the online sender and authority. Game actions still use their existing permission checks.

```ts
export function preparationAction(raw: unknown): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## preparationCompendium

导出接口 · 源码第 24 行。

```ts
export function preparationCompendium(raw: unknown): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## nativePreparationAction

导出接口 · 源码第 27 行。

WorldAuthority uses native command names while sharing the same preparation boundary.

```ts
export function nativePreparationAction(raw: unknown): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## Change

内部依赖类型 · 源码第 38 行。

```ts
type Change<T> = {
    id: string;
    before: T | null;
    after: T | null;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `before` | 否 | `T&#124;null` | 见结构定义及所属功能文档 |
| `after` | 否 | `T&#124;null` | 见结构定义及所属功能文档 |

## RuntimeEdit

导出接口 · 源码第 39 行。

```ts
export type RuntimeEdit = {
    actors: Change<ManualActor>[];
    tokens: Change<ManualToken>[];
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `actors` | 否 | `Change<ManualActor>[]` | 见结构定义及所属功能文档 |
| `tokens` | 否 | `Change<ManualToken>[]` | 见结构定义及所属功能文档 |

## runtimeEdit

导出接口 · 源码第 46 行。

Compatibility for existing actor/token editors; never carries a full world or authored map.

```ts
export function runtimeEdit(before: ManualTable, after: ManualTable): RuntimeEdit;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `before` | 否 | `ManualTable` | — |
| `after` | 否 | `ManualTable` | — |

## applyRuntimeEdits

导出接口 · 源码第 51 行。

```ts
export function applyRuntimeEdits<T extends {id:string}>(rows: T[], raw: Change<T>[]): T[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `rows` | 否 | `T[]` | — |
| `raw` | 否 | `Change<T>[]` | — |
