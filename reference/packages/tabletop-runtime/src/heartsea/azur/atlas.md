# game/packages/tabletop-runtime/src/heartsea/azur/atlas.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseWorldAtlas,type AtlasNode,type WorldAtlas} from '@aelzerant/contracts';
```
</details>

## azurNodes

导出接口 · 源码第 3 行。

```ts
export function azurNodes(): AtlasNode[];
```

## withAzurAtlas

导出接口 · 源码第 60 行。

```ts
export function withAzurAtlas(atlas: WorldAtlas): WorldAtlas;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `atlas` | 否 | `WorldAtlas` | — |
