# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/mapLayouts.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualMap} from '@aelzerant/contracts';
import type {ArenaMap} from './encounters';
```
</details>

## Cover

内部依赖类型 · 源码第 3 行。

```ts
type Cover = [
    number,
    number,
    number,
    number,
    number
];
```

## arenaCoverLayout

导出接口 · 源码第 13 行。

```ts
export function arenaCoverLayout(m: ArenaMap): ManualMap['blocks'];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `ArenaMap` | — |
