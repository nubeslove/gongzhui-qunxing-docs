# game/packages/tabletop-runtime/src/tabletop/combatJournal.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyStory,sceneMeasuredDistance,defaultSceneMeasurement,type ManualTable,type CombatCard,type CombatCardKind,type CombatTrace,type CombatLogLine} from '@aelzerant/contracts';
import {recordCombatSettlement,beginCombatLog,finishCombatLog,combatLogActive} from '@aelzerant/session/core';
import {dndEntry} from '@aelzerant/rules-engine';
import type {TableAction} from './model';
import {storyRollStep} from '@aelzerant/session/core';
```
</details>

## recordTableCombatJournal

导出接口 · 源码第 7 行。

```ts
export function recordTableCombatJournal(before: ManualTable, next: ManualTable, action: TableAction, sender: string, trace: CombatTrace[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `before` | 否 | `ManualTable` | — |
| `next` | 否 | `ManualTable` | — |
| `action` | 否 | `TableAction` | — |
| `sender` | 否 | `string` | — |
| `trace` | 否 | `CombatTrace[]` | — |
