# game/packages/contracts/src/scene-assets.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## SceneModel

导出接口 · 源码第 2 行。

Built-in assets are versioned with the desktop; custom models travel with world publications.

```ts
export interface SceneModel {
    id: string;
    name: string;
    category: '机甲' | '通用单位' | '地形' | '工业建筑';
    width: number;
    depth: number;
    height: number;
    source: 'original' | 'kenney' | 'forge-cc0';
    shape?: string;
    variant?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `category` | 否 | `'机甲' &#124; '通用单位' &#124; '地形' &#124; '工业建筑'` | 见结构定义及所属功能文档 |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `depth` | 否 | `number` | 见结构定义及所属功能文档 |
| `height` | 否 | `number` | 见结构定义及所属功能文档 |
| `source` | 否 | `'original' &#124; 'kenney' &#124; 'forge-cc0'` | 见结构定义及所属功能文档 |
| `shape` | 是 | `string` | 见结构定义及所属功能文档 |
| `variant` | 是 | `number` | 见结构定义及所属功能文档 |

## builtinModelUrl

导出接口 · 源码第 21 行。

```ts
export const builtinModelUrl: (id: string): string;
```
