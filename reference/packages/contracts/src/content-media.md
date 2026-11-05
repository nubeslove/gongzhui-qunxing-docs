# game/packages/contracts/src/content-media.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {CompendiumMedia} from './compendium-media';
```
</details>

## ContentMediaPage

导出接口 · 源码第 3 行。

```ts
export interface ContentMediaPage {
    revision: number;
    total: number;
    items: Array<{
        file: CompendiumMedia;
        state: 'ready' | 'missing' | 'invalid';
    }>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `total` | 否 | `number` | 见结构定义及所属功能文档 |
| `items` | 否 | `Array<{file:CompendiumMedia;state:'ready'&#124;'missing'&#124;'invalid'}>` | 见结构定义及所属功能文档 |
