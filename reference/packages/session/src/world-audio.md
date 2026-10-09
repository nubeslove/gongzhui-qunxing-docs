# game/packages/session/src/world-audio.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { AudioState, WorldHandler } from "./world-types";
import { assertGm, assetReference, requireBoolean, requireNumber } from "./world-validation";
```
</details>

## audioPosition

导出接口 · 源码第 5 行。

Logical timeline; duration and loop wrapping belong to the local decoder.

```ts
export function audioPosition(state: AudioState, now: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `AudioState` | — |
| `now` | 否 | `number` | — |
