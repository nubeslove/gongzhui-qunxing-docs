# game/packages/tabletop-runtime/src/tabletop/lancer/frames.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import content from './data/content-registry.json';
import type { LancerBase, LancerMount } from '@aelzerant/rules-engine';
```
</details>

## LancerFrame

导出接口 · 源码第 3 行。

```ts
export interface LancerFrame {
    id: string;
    name: string;
    maker: string;
    page: number;
    base: LancerBase;
    mounts: LancerMount[];
    book?: string;
    licenseId?: string;
    role?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `maker` | 否 | `string` | 见结构定义及所属功能文档 |
| `page` | 否 | `number` | 见结构定义及所属功能文档 |
| `base` | 否 | `LancerBase` | 见结构定义及所属功能文档 |
| `mounts` | 否 | `LancerMount[]` | 见结构定义及所属功能文档 |
| `book` | 是 | `string` | 见结构定义及所属功能文档 |
| `licenseId` | 是 | `string` | 见结构定义及所属功能文档 |
| `role` | 是 | `string` | 见结构定义及所属功能文档 |

## Row

内部依赖类型 · 源码第 6 行。

```ts
type Row = [
    string,
    string,
    string,
    number,
    number[],
    LancerMount[]
];
```
