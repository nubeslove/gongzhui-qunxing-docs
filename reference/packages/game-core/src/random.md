# game/packages/game-core/src/random.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## nextRandom

导出接口 · 源码第 2 行。

Mulberry32 with explicit state: save/load and reducer replay consume identical dice.

```ts
export function nextRandom(state: { rngState: number }): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `state` | 否 | `{ rngState: number }` | — |
