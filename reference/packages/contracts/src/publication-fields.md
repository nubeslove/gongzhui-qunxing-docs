# game/packages/contracts/src/publication-fields.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {canonicalJson} from './index';
```
</details>

## PublicationConflict

导出接口 · 源码第 2 行。

```ts
export interface PublicationConflict {
    path: string;
    label: string;
    base: string;
    draft: string;
    live: string;
    keepLiveOnly?: boolean;
    truncated?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `path` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `base` | 否 | `string` | 见结构定义及所属功能文档 |
| `draft` | 否 | `string` | 见结构定义及所属功能文档 |
| `live` | 否 | `string` | 见结构定义及所属功能文档 |
| `keepLiveOnly` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `truncated` | 是 | `boolean` | 见结构定义及所属功能文档 |

## PublicationConflictValues

导出接口 · 源码第 3 行。

```ts
export type PublicationConflictValues = Pick<PublicationConflict, 'base' | 'draft' | 'live'>;
```

## PublicationChoices

导出接口 · 源码第 4 行。

```ts
export type PublicationChoices = Record<string, 'draft' | 'live'>;
```

## mergePublicationFields

导出接口 · 源码第 12 行。

```ts
export function mergePublicationFields<T>(base: T, draft: T, live: T, choices?: PublicationChoices): { value: T; conflicts: PublicationConflict[]; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `base` | 否 | `T` | — |
| `draft` | 否 | `T` | — |
| `live` | 否 | `T` | — |
| `choices` | 是 | `PublicationChoices` | {} |
