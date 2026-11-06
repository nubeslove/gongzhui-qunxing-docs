# game/packages/tabletop-runtime/src/tabletop/lancer/coreResources.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

## CORE_SYSTEM_IDS

导出接口 · 源码第 2 行。

Core book system IDs, including talent equipment. Stable IDs survive player renaming.

```ts
export const CORE_SYSTEM_IDS: Record<string, string>;
```

## coreSystemMatches

导出接口 · 源码第 112 行。

All three Walking Armory ranks share the Chinese book's one equipment block (p97).

```ts
export function coreSystemMatches(item: {name:string;resourceId?:string;compconId?:string}, id: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `item` | 否 | `{name:string;resourceId?:string;compconId?:string}` | — |
| `id` | 否 | `string` | — |

## coreSystemId

导出接口 · 源码第 115 行。

```ts
export const coreSystemId: (item: { name: string; resourceId?: string; compconId?: string; }): string | undefined;
```
