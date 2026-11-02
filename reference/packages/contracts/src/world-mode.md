# game/packages/contracts/src/world-mode.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualTable} from './tabletop';
```
</details>

## WorldMode

导出接口 · 源码第 4 行。

```ts
export type WorldMode = keyof typeof WORLD_MODE_NAMES;
```

## lancerWorldMode

导出接口 · 源码第 6 行。

Arena saves predate onboarding and intentionally have no story object.

```ts
export function lancerWorldMode(table: Pick<ManualTable,'lancerRogue'|'story'>): WorldMode;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `Pick<ManualTable,'lancerRogue'&#124;'story'>` | — |
