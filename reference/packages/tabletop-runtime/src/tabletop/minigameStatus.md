# game/packages/tabletop-runtime/src/tabletop/minigameStatus.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {DND_CONDITIONS,LANCER_CONDITIONS,UTOPIA_CONDITIONS,type DndCondition,type LancerCondition,type UtopiaCondition,type ManualTable} from '@aelzerant/contracts';
```
</details>

## applyTableMinigameStatus

导出接口 · 源码第 3 行。

Use the selected rules' actual condition store, so normal combat/UI reads the result.

```ts
export function applyTableMinigameStatus(table: ManualTable, actorId: string, status: string, remove: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `actorId` | 否 | `string` | — |
| `status` | 否 | `string` | — |
| `remove` | 否 | `boolean` | — |
