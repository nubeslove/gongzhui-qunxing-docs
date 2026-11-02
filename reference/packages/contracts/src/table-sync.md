# game/packages/contracts/src/table-sync.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualTable} from './tabletop';
```
</details>

## Path

内部依赖类型 · 源码第 2 行。

```ts
type Path = (string | number)[];
```

## RevisionPatch

导出接口 · 源码第 3 行。

```ts
export interface RevisionPatch {
    baseRevision: number;
    revision: number;
    set: {
        path: Path;
        value: unknown;
    }[];
    remove: Path[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `baseRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `set` | 否 | `{path:Path;value:unknown}[]` | 见结构定义及所属功能文档 |
| `set.[].path` | 否 | `Path` | 见结构定义及所属功能文档 |
| `set.[].value` | 否 | `unknown` | 见结构定义及所属功能文档 |
| `remove` | 否 | `Path[]` | 见结构定义及所属功能文档 |

## revisionPatch

导出接口 · 源码第 7 行。

Diff only an already-authorized view; a private server table must never be the player baseline.

```ts
export function revisionPatch<T extends {revision:number}>(before: T, after: T): RevisionPatch;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `before` | 否 | `T` | — |
| `after` | 否 | `T` | — |

## applyRevisionPatch

导出接口 · 源码第 21 行。

Pure application. Full schema parsing and world ownership checks still run at the receiver.

```ts
export function applyRevisionPatch<T extends {revision:number}>(before: T, patch: RevisionPatch): T;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `before` | 否 | `T` | — |
| `patch` | 否 | `RevisionPatch` | — |

## TablePatch

导出接口 · 源码第 31 行。

```ts
export type TablePatch = RevisionPatch;
```

## tablePatch

导出接口 · 源码第 32 行。

```ts
export const tablePatch: (before: ManualTable, after: ManualTable): RevisionPatch;
```

## applyTablePatch

导出接口 · 源码第 33 行。

```ts
export const applyTablePatch: (before: ManualTable, patch: TablePatch): ManualTable;
```
