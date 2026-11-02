# game/packages/tabletop-runtime/src/tabletop/lancer/battleEntry.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorControllers,characterPortrait,type LancerBattle,type ManualTable} from '@aelzerant/contracts';
```
</details>

## createBattleEntry

导出接口 · 源码第 3 行。

Roster order is fixed at launch. PC owners confirm once, regardless of unit count.

```ts
export function createBattleEntry(table: ManualTable, battle: LancerBattle, chosen: string[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `battle` | 否 | `LancerBattle` | — |
| `chosen` | 否 | `string[]` | — |
