# game/packages/game-core/src/lancer/ability-costs.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

## LANCER_QUICK_TALENT_ACTIONS

导出接口 · 源码第 2 行。

Register quick talent actions here when they support overcharge / Initiative payment.

```ts
export const LANCER_QUICK_TALENT_ACTIONS = ['t_drone_commander_3', 't_ace_3', 't_duelist_trip'];
```

## lancerTalentPaymentIssue

导出接口 · 源码第 3 行。

```ts
export function lancerTalentPaymentIssue(id: string, free: unknown): string|null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |
| `free` | 否 | `unknown` | — |
