# game/packages/rules-engine/src/dnd/duration.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

## dndDurationLabel

导出接口 · 源码第 2 行。

Keep short combat effects in rounds, but do not express day-long provisions as thousands of rounds.

```ts
export function dndDurationLabel(seconds: number, combat?: boolean): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `seconds` | 否 | `number` | — |
| `combat` | 是 | `boolean` | false |
