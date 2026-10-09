# game/packages/contracts/src/resource-details.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isAssetPath} from './media';
```
</details>

## ResourceSource

导出接口 · 源码第 2 行。

```ts
export interface ResourceSource {
    title: string;
    authors: string;
    page: string;
    license: string;
    url: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `title` | 否 | `string` | 见结构定义及所属功能文档 |
| `authors` | 否 | `string` | 见结构定义及所属功能文档 |
| `page` | 否 | `string` | 见结构定义及所属功能文档 |
| `license` | 否 | `string` | 见结构定义及所属功能文档 |
| `url` | 否 | `string` | 见结构定义及所属功能文档 |

## blankResourceSource

导出接口 · 源码第 4 行。

```ts
export const blankResourceSource: (): ResourceSource;
```

## parseResourceImage

导出接口 · 源码第 5 行。

```ts
export function parseResourceImage(value: unknown): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## parseResourceSource

导出接口 · 源码第 6 行。

```ts
export function parseResourceSource(raw: unknown): ResourceSource;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
