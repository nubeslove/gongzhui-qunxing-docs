# game/packages/tabletop-runtime/src/tabletop/lancer/deploymentConfirmation.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorControllers,type LancerCombatUnit,type ManualTable} from '@aelzerant/contracts';
```
</details>

## deploymentConfirmationKey

导出接口 · 源码第 2 行。

```ts
export function deploymentConfirmationKey(table: ManualTable, unit: LancerCombatUnit): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `unit` | 否 | `LancerCombatUnit` | — |
